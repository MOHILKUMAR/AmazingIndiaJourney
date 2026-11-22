# Supabase keep-alive

Free Supabase projects pause after ~7 days without activity. This job writes a tiny
heartbeat row every day, so the project never goes idle.

## Setup (5 minutes)
1. Supabase -> SQL Editor -> run `supabase/keep-alive.sql`.
2. Push this project to a **private** GitHub repo (keep `.github/workflows/supabase-keep-alive.yml`).
3. GitHub repo -> Settings -> Secrets and variables -> Actions -> add `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
4. Actions tab -> "Supabase keep-alive" -> **Run workflow** -> should show `HTTP 200 {"status":"ok"...}`.
5. Check in Supabase: Table Editor -> `heartbeat` -> a new row appears each day.

## If it fails
GitHub emails you when a run fails. Open Supabase dashboard -> if paused, click **Restore**.

## Backup option (no GitHub)
cron-job.org (free) -> new cron job, daily:
- URL: `https://YOUR-PROJECT.supabase.co/rest/v1/rpc/ping`
- Method: POST, body `{"src":"cron-job.org"}`
- Headers: `apikey: <anon key>`, `Authorization: Bearer <anon key>`, `Content-Type: application/json`

Use both GitHub + cron-job.org for double safety.
