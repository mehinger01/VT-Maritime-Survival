-- Add remaining professional documentation fields to session_reports
-- Complements 20260707000000_enhance_session_reports.sql
-- Note: start_time, end_time, skills_practiced already added in prior migration

alter table public.session_reports
add column mastery_level text,
add column resources_used text,
add column private_coach_notes text;

-- mastery_level can be: 'not_started', 'developing', 'proficient', 'advanced'
alter table public.session_reports
add constraint mastery_level_check
check (mastery_level is null or mastery_level in ('not_started', 'developing', 'proficient', 'advanced'));

create index session_reports_mastery_idx on public.session_reports(mastery_level);
