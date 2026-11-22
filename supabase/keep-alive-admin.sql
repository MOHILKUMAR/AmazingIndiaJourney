-- Run AFTER keep-alive.sql. Supabase -> SQL Editor -> paste -> Run.
-- Lets a logged-in admin ping the database and see its status from the admin panel.

create or replace function public.heartbeat_status()
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  last_ts timestamptz;
  hist json;
begin
  select max(pinged_at) into last_ts from heartbeat;
  select coalesce(json_agg(h order by h.pinged_at desc), '[]'::json) into hist
  from (select pinged_at, source from heartbeat order by pinged_at desc limit 10) h;
  return json_build_object('last_ping', last_ts, 'history', hist, 'server_time', now());
end;
$$;

revoke all on function public.heartbeat_status() from public;
grant execute on function public.heartbeat_status() to authenticated;  -- admins only
grant execute on function public.ping(text) to authenticated;          -- admin button
