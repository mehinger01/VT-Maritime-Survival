-- Follow-up to 20260706120100_harden_grants.sql: the earlier REVOKE ... FROM
-- PUBLIC didn't strip anon's access because Supabase grants EXECUTE to
-- anon/authenticated directly (via ALTER DEFAULT PRIVILEGES), not only
-- through the PUBLIC pseudo-role. The security advisor still flagged these
-- functions as anon-executable after the first pass — this closes that gap.

revoke execute on function public.set_updated_at() from anon, authenticated;
revoke execute on function public.handle_new_user() from anon, authenticated;
revoke execute on function public.current_role() from anon, authenticated;
revoke execute on function public.is_admin() from anon, authenticated;
revoke execute on function public.is_coach_or_admin() from anon, authenticated;
revoke execute on function public.can_access_student(uuid) from anon, authenticated;

grant execute on function public.current_role() to authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_coach_or_admin() to authenticated;
grant execute on function public.can_access_student(uuid) to authenticated;
