# VT Maritime Survival Study Tool

A React/Vite study tool for one student preparing for a maritime/water-survival
exam, plus a Supabase-backed Session Reports feature for the coach. See
`CLAUDE.md` for the project's scope and architecture philosophy.

## Setup

```
npm install
npm run dev
```

The quiz/drill/learn/review/journal screens work immediately with no
configuration — they persist to the browser's `localStorage` and don't
require any of the environment variables below.

## Question status model

Every question can carry a `verificationStatus` (`course-verified`,
`source-backed-study`, `quiz-derived-study`, `visual-study`, `needs-review`,
or `draft-unverified`) that controls whether it appears in normal Quiz/Drill
practice and what badge (if any) it shows on its card. See
`docs/CONTENT_INTAKE_BENCHMARK.md` for the full definitions and how this
relates to source intake tiers.

## Environment variables (Session Reports / cloud features only)

Copy `.env.example` to `.env` and fill in your Supabase project's values:

```
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your publishable/anon key>
```

Both are safe to expose in a frontend bundle (the anon/publishable key is
designed for client-side use — access control is enforced by the Postgres
Row Level Security policies in `supabase/migrations/`, not by keeping this
key secret). **Never** put a Supabase service role key in this app or repo.

If these variables are missing, the app still runs fine — the "Session
Reports (Cloud)" screen just shows a notice instead of a login form, and
everything else is unaffected.

## Supabase schema

Migrations live in `supabase/migrations/` and are applied in filename order:

- `20260706120000_init_schema.sql` — `profiles`, `students`,
  `coach_student_assignments`, `session_reports` tables, RLS policies, and
  the `is_admin()` / `is_coach_or_admin()` / `can_access_student()` helper
  functions.
- `20260706120100_harden_grants.sql` / `20260706120150_harden_grants_revoke_anon_execute.sql` —
  security-advisor hardening (no anonymous access to any app table or
  RLS-support function).
- `20260706120200_seed_session2_report.sql` — a placeholder student row
  plus the Session 2 report as test data.

### Roles

Every new signup gets a `profiles` row with `role = 'student'`
automatically (via a trigger on `auth.users`). There is **no self-service
way to become a coach or admin** — that's deliberate. Promote someone
manually:

```sql
update public.profiles set role = 'coach' where email = 'coach@example.com';
```

Then assign them to a student:

```sql
insert into public.coach_student_assignments (coach_profile_id, student_id)
values ('<coach profile id>', '<student id>');
```

### Linking a real account to the seeded student

The seeded "Vinci" student row (`00000000-0000-0000-0000-000000000001`) has
no linked login yet. Once that person signs up through the app's Login
screen, link their account:

```sql
update public.students set profile_id = '<their auth.users id>'
where id = '00000000-0000-0000-0000-000000000001';
```

## Security notes

- RLS is enabled on every app table; the anon key can't read or write
  anything without a valid signed-in session.
- Students can only ever see their own `session_reports` row(s); coaches/
  admins only see students assigned to them (or all, for admins).
- Run `get_advisors` (Supabase MCP) or the [Supabase database
  linter](https://supabase.com/docs/guides/database/database-linter) after
  any schema change — it catches missing RLS and overly broad grants
  immediately.
