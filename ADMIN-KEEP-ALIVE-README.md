# Admin panel – "Keep database active" button

Page: `src/pages/admin/index.astro` → opens at `/admin`

## What it does
- **Manual:** "Keep database active now" button pings Supabase instantly.
- **Automatic (on open):** when an admin opens the page and the last ping is older than 12 h, it pings by itself (toggle on/off).
- **Automatic (daily):** GitHub Action still pings every day at 9:00 AM IST — works even if nobody opens the admin.
- Shows status badge (Safe / Ping soon / Ping now), days left before pause risk, last ping time, last 10 pings with source
  (`github-action`, `admin-button`, `admin-auto`, `cron-job.org`).
- If Supabase is paused/unreachable it says so and tells you to click **Restore** in the Supabase dashboard.

## Setup
1. Run `supabase/keep-alive.sql` (if not done) then `supabase/keep-alive-admin.sql` in Supabase SQL Editor.
2. Create the admin login: Supabase → Authentication → Users → **Add user** (email + password, tick auto-confirm).
3. Supabase → Authentication → Sign In / Providers → turn **off** "Allow new users to sign up" (only you create admins).
4. In the project: `npm i @supabase/supabase-js`, copy `.env.example` to `.env`, fill in URL + anon key.
5. `npm run dev` → open http://localhost:4321/admin → log in → press the button.

## Security
- Page is `noindex` (hidden from Google) and needs a Supabase login.
- Only logged-in users can see the status; the anon key can only call `ping()`.
- Never put the `service_role` key in the website.
