-- Security-advisor hardening pass on the schema from 20260706120000.
--
-- Nothing here changes what RLS already enforces at the row level — this
-- closes a shallower gap the linter flagged: by default Postgres grants
-- EXECUTE on new functions to PUBLIC (which anon/authenticated inherit),
-- and Supabase grants table privileges to anon/authenticated at creation
-- time. Since this app has no legitimate anonymous access path at all
-- (every screen requires a signed-in session), anon shouldn't hold table
-- or function privileges here even though RLS would still block it —
-- an unauthenticated caller shouldn't be able to attempt these calls in
-- the first place.

-- Trigger-only functions: never meant to be called directly via RPC.
-- Revoking EXECUTE from PUBLIC doesn't break the triggers themselves —
-- trigger invocation doesn't go through the caller's EXECUTE grant.
revoke execute on function public.set_updated_at() from public;
revoke execute on function public.handle_new_user() from public;

-- RLS-support functions: still need to run for authenticated queries
-- (policies call them during query planning under the querying role),
-- so re-grant to authenticated specifically after stripping PUBLIC/anon.
revoke execute on function public.current_role() from public;
revoke execute on function public.is_admin() from public;
revoke execute on function public.is_coach_or_admin() from public;
revoke execute on function public.can_access_student(uuid) from public;

grant execute on function public.current_role() to authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_coach_or_admin() to authenticated;
grant execute on function public.can_access_student(uuid) to authenticated;

-- set_updated_at had a mutable search_path (flagged by the linter) —
-- pin it like the other functions.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- No anonymous access to any app table, period — every screen in this
-- app requires a signed-in Supabase session.
revoke all on public.profiles from anon;
revoke all on public.students from anon;
revoke all on public.coach_student_assignments from anon;
revoke all on public.session_reports from anon;
