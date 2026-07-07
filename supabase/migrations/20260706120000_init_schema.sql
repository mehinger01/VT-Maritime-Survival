-- ScholarForge coached-platform schema: profiles/roles, student records,
-- coach assignments, and cloud session reports, with RLS enforcing that
-- students only ever see their own data and coach/admin see only students
-- assigned to them.

-- ---------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'student' check (role in ('student', 'coach', 'admin', 'instructor_viewer')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.students (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  display_name text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.coach_student_assignments (
  id uuid primary key default gen_random_uuid(),
  coach_profile_id uuid not null references public.profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (coach_profile_id, student_id)
);

create table public.session_reports (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  session_number integer not null,
  session_date date not null,
  duration_minutes integer,
  questions_answered integer,
  accuracy numeric,
  topics_covered text[],
  strengths text[],
  needs_reinforcement text[],
  coach_notes text,
  action_items text[],
  client_facing_report text not null,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index session_reports_student_id_idx on public.session_reports(student_id);
create index session_reports_session_date_idx on public.session_reports(session_date);
create index coach_student_assignments_coach_idx on public.coach_student_assignments(coach_profile_id);
create index coach_student_assignments_student_idx on public.coach_student_assignments(student_id);

-- ---------------------------------------------------------------------
-- updated_at maintenance
-- ---------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.students
  for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.session_reports
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------
-- New auth.users -> profiles provisioning
--
-- Every signup gets a 'student' profile by default (least privilege).
-- Promoting someone to coach/admin is a deliberate manual step (SQL or
-- dashboard) — there is no self-service role escalation anywhere in this
-- schema, on purpose.
-- ---------------------------------------------------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', new.email), 'student')
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- Role helper functions
--
-- security definer + a pinned search_path so these can be called from
-- inside RLS policies on the very tables they read (profiles) without
-- tripping infinite policy recursion. Each only ever resolves auth.uid()'s
-- own role — it can't be used to read or infer anyone else's data, so the
-- elevated privilege doesn't create an escalation path.
-- ---------------------------------------------------------------------

create or replace function public.current_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.current_role() = 'admin';
$$;

create or replace function public.is_coach_or_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.current_role() in ('coach', 'admin');
$$;

-- Can the calling user access this student's records — as the student
-- themselves, as an assigned coach, or as an admin? security definer so
-- it works from session_reports policies regardless of the caller's
-- direct grants on students/coach_student_assignments.
create or replace function public.can_access_student(p_student_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select
    public.is_admin()
    or exists (
      select 1 from public.students s
      where s.id = p_student_id and s.profile_id = auth.uid()
    )
    or exists (
      select 1 from public.coach_student_assignments csa
      where csa.student_id = p_student_id and csa.coach_profile_id = auth.uid()
    );
$$;

-- ---------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.students enable row level security;
alter table public.coach_student_assignments enable row level security;
alter table public.session_reports enable row level security;

-- profiles: read own row, or any row if admin. Only admin updates roles —
-- deliberately no self-update policy, since that would let a student flip
-- their own role to 'admin'. No insert/delete policy: rows are created
-- only by the handle_new_user trigger (security definer, bypasses RLS).
create policy "profiles_select_own_or_admin" on public.profiles
  for select
  using (id = auth.uid() or public.is_admin());

create policy "profiles_update_admin_only" on public.profiles
  for update
  using (public.is_admin())
  with check (public.is_admin());

-- students: self, assigned coach, or admin can read. Writes admin-only —
-- there's no student-management UI in this V1, rows are provisioned
-- directly against the database.
create policy "students_select_self_or_assigned_or_admin" on public.students
  for select
  using (
    profile_id = auth.uid()
    or public.is_admin()
    or (
      public.is_coach_or_admin()
      and exists (
        select 1 from public.coach_student_assignments csa
        where csa.student_id = students.id and csa.coach_profile_id = auth.uid()
      )
    )
  );

create policy "students_write_admin_only" on public.students
  for all
  using (public.is_admin())
  with check (public.is_admin());

-- coach_student_assignments: a coach can see their own assignments; admin
-- sees all. Managed by admin only.
create policy "assignments_select_own_or_admin" on public.coach_student_assignments
  for select
  using (coach_profile_id = auth.uid() or public.is_admin());

create policy "assignments_write_admin_only" on public.coach_student_assignments
  for all
  using (public.is_admin())
  with check (public.is_admin());

-- session_reports: readable by the student it belongs to, or by an
-- assigned coach/admin. Only coach/admin can write, and only for
-- students they can access.
create policy "session_reports_select_accessible" on public.session_reports
  for select
  using (public.can_access_student(student_id));

create policy "session_reports_insert_coach_admin" on public.session_reports
  for insert
  with check (public.is_coach_or_admin() and public.can_access_student(student_id));

create policy "session_reports_update_coach_admin" on public.session_reports
  for update
  using (public.is_coach_or_admin() and public.can_access_student(student_id))
  with check (public.is_coach_or_admin() and public.can_access_student(student_id));

create policy "session_reports_delete_coach_admin" on public.session_reports
  for delete
  using (public.is_coach_or_admin() and public.can_access_student(student_id));
