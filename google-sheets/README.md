# Enquiry form → Google Sheets (free)

Every enquiry is added as a row in a Google Sheet and an email alert is sent.

## Setup (10 minutes)
1. Create a new Google Sheet (use the client's Google account at handover), e.g. "Website Leads".
2. **Extensions → Apps Script**. Delete the sample code and paste `Code.gs`.
3. Change `NOTIFY_EMAIL` to the email that should receive alerts. Save.
4. **Deploy → New deployment → Type: Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, allow the permissions, copy the **Web app URL** (ends in `/exec`).
5. In the project, create `.env` (copy `.env.example`) and set:
   `PUBLIC_LEADS_ENDPOINT=https://script.google.com/macros/s/XXXX/exec`
6. Restart `npm run dev`, submit the contact form → a row appears in the **Leads** tab and an email arrives.

## Notes
- If `PUBLIC_LEADS_ENDPOINT` is empty, the form falls back to opening the visitor's email app.
- After editing `Code.gs`, use **Deploy → Manage deployments → Edit → New version** (the URL stays the same).
- Use the `status` column (New / Contacted / Booked) to track leads.
- Google's free quota is ~100 alert emails/day on a personal account (more on Workspace).
