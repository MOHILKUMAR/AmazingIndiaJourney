-- Run once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run
-- Creates a tiny heartbeat table + a ping() function the keep-alive job calls daily.

create table if not exists public.heartbeat (
  id bigint generated always as identity primary key,
  pinged_at timestamptz not null default now(),
  source text
);

alter table public.heartbeat enable row level security;  -- no direct public access

create or replace function public.ping(src text default 'github-action')
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  total int;
begin
  insert into heartbeat (source) values (left(src, 50));           -- real DB write = activity
  delete from heartbeat where pinged_at < now() - interval '30 days'; -- keep table tiny
  select count(*) into total from heartbeat;
  return json_build_object('status', 'ok', 'time', now(), 'rows', total);
end;
$$;

revoke all on function public.ping(text) from public;
grant execute on function public.ping(text) to anon;   -- callable with the public anon key only
