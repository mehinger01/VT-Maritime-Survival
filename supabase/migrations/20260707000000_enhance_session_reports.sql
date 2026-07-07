-- Enhance session_reports with professional tutoring documentation fields
-- These are optional to maintain backward compatibility with existing reports

alter table public.session_reports
add column start_time time,
add column end_time time,
add column tutor_name text,
add column skills_practiced text[],
add column student_progress text;

-- Index on dates for efficient querying
create index session_reports_tutor_name_idx on public.session_reports(tutor_name);
