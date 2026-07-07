-- Add session_type and tutor_id to distinguish tutored vs self-study sessions
-- This enables tracking tutoring hours separately from student self-study hours

alter table public.session_reports
add column session_type text default 'tutored',
add column tutor_id uuid references public.profiles(id) on delete set null;

-- session_type can be: 'tutored' (coached session), 'self-study' (independent practice), 'group-study'
alter table public.session_reports
add constraint session_type_check
check (session_type in ('tutored', 'self-study', 'group-study'));

-- Index on tutor_id for filtering/querying sessions by tutor
create index session_reports_tutor_id_idx on public.session_reports(tutor_id);

-- Index on session_type for filtering sessions by type
create index session_reports_session_type_idx on public.session_reports(session_type);
