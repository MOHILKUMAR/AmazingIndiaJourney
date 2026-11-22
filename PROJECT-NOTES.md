# Tour & Travel Website – Project Notes

**Prepared by:** Manvendra Singh (Wendor)
**Date:** 22 Nov 2026
**Reference site studied:** vibrantindiatours.com
**Project folder:** `C:\Users\MOHIL KUMAR\Documents\travel-astro-site\`

---

## 1. Final decisions

| Area | Decision |
|---|---|
| Frontend | **Astro 5** (static output) + Tailwind CSS |
| Database | **Supabase** (contact / enquiry form leads) |
| Content (tours, destinations, blog) | Astro content collections (files, no database) |
| Preview hosting | **Cloudflare Pages** (`*.pages.dev`, hidden from Google) |
| Final hosting | Client's **Hostinger Business** plan – client uploads `dist` folder themselves |
| Enquiry form | Save to Supabase + email backup (lead never lost) |
| Supabase pause protection | Daily keep-alive script (GitHub Action + optional cron-job.org) |
| Code rule | No Cloudflare-only features, so the move to Hostinger needs zero code changes |

**Still to decide:** feature list, typography, colour palette (see section 4).

---

## 2. Questions I asked & answers (summary)

### Q1. How many pages does the reference site have and what do they show?
About **93 unique pages** (from its sitemap):
- 17 main pages – Home, Classic Private Tours, Group Tours, Luxury Tours, Tailor-Made Tours, Private Tours, Escorted Tours, All Packages, About, Reviews, Gallery, FAQ, Blog, Contact, Terms, Privacy, Disclaimer
- 16 destination/theme pages (`/city/...`) – Golden Triangle, Rajasthan, Kerala, South India, North India, Varanasi, Amritsar, Goa–Mumbai, Leh Ladakh, Northeast, Wildlife, Festivals, Family, Wellness, Rural Village, Hollywood theme
- 38 tour package pages (`/packages/...`)
- ~21 blog posts

**Category page sections:** hero → "Book now, pay later" & "Full refund" cards → reviews slider → tour cards (name, route, nights/days, meals, guide, vehicle, "from US$ per person") → why-choose-us icons → 4-step process → FAQ → about → call to action → footer.

**Tour page sections:** title → tabs (Itinerary | Inclusions/Exclusions | Important Info) → experience highlights → day-by-day itinerary → inclusions/exclusions → policies accordion → enquiry form (name, email, phone, travellers, days, package, message) → reviews → related tours → FAQ.

> Copy structure only – write our own text, use our own images, logo and reviews.

### Q2. What tech stack do they use?
WordPress, Oxygen Builder, jQuery, Bootstrap, Slick/Owl Carousel, Groovy Menu, Contact Form 7 + reCAPTCHA, WP Review Slider Pro, Yoast SEO, WP Rocket, Google Tag Manager, Hotjar, Tawk.to chat.

### Q3. What database do they use?
MySQL/MariaDB (standard for WordPress). Tours stored as custom post types with custom fields.

### Q4. Where is their backend hosted?
Shared hosting in **Sydney, Australia** – Synergy Wholesale network (reseller nameservers `hostyourservices.net`), LiteSpeed web server, no CDN in front. Email on Google Workspace.

### Q5. Best tech stack to clone it?
- **WordPress option:** WordPress + Bricks/GeneratePress + ACF Pro + Fluent Forms + Rank Math + Cloudflare.
- **Custom option:** Next.js + headless CMS + PostgreSQL.
- **Chosen:** Astro (fast, great SEO, nearly free hosting).

### Q6. Can we build it in Astro? / We have Hostinger Business
Yes. Hostinger Business supports both static Astro sites and Node.js web apps (Astro preset, Node 22+). We use **static build** so the client only uploads files.

### Q7. We don't have hPanel access – client wants it built locally first
Fine. Build locally → preview → give client a zip + upload guide → client uploads to `public_html` (or a new website folder) in hPanel.

### Q8. What about the database built locally?
No local database needed for content. Only the enquiry form needs storage → decided on **Supabase**.

### Q9. Will adding a database disturb the client's other project on Hostinger?
No – separate site folder and separate database keep projects isolated. Using Supabase means **nothing is added to Hostinger at all**, so zero risk.

### Q10. Supabase free plan pauses after 7 days – can leads be lost?
Saved data is **not deleted**, but while paused the form can't save new leads. Fixes:
1. Daily keep-alive script (built ✅)
2. Email backup in the form, so leads still arrive if Supabase is down
3. Upgrade to Supabase Pro (~$25/month) when live

### Q11. Can a script run before 7 days so the database never pauses?
Yes – created:
- `supabase/keep-alive.sql` – heartbeat table + `ping()` function (run once in Supabase SQL Editor)
- `.github/workflows/supabase-keep-alive.yml` – runs daily 9:00 AM IST, retries 3×, emails on failure
  *(saved in `move-to-.github-workflows\` – move it into `.github\workflows\`)*
- `KEEP-ALIVE-README.md` – setup steps + cron-job.org backup option

### Q12. Can the admin panel have a button to run the keep-alive manually and automatically?
Yes – created `/admin` page (`src/pages/admin/index.astro`):
- **Manual:** "Keep database active now" button
- **Auto on open:** pings when the admin opens the page and last ping is older than 12 h (can be turned off)
- **Auto daily:** GitHub Action still runs at 9:00 AM IST
- Shows Safe / Ping soon / Ping now, days left, last ping, last 10 pings
- Protected by Supabase admin login, hidden from Google
- Setup: run `supabase/keep-alive-admin.sql`, create admin user in Supabase, fill `.env` (see `ADMIN-KEEP-ALIVE-README.md`)

---

## 3. Workflow

```
1. Build locally (Astro)        → npm run dev  → http://localhost:4321
2. Preview on Cloudflare Pages  → travel-site.pages.dev (show client)
3. Contact form                 → Supabase + email backup
4. Client approves              → npm run build → zip of dist/
5. Client uploads in hPanel     → File Manager → public_html → extract → enable SSL
6. Supabase stays the same      → no code changes
```

### Accounts needed (all free to start)
- [ ] GitHub (private repo)
- [ ] Cloudflare (Pages preview)
- [ ] Supabase (database)
- [ ] Resend or SMTP (email notifications)

---

## 4. To decide next

### Features (shortlist to discuss)
- [ ] Home page sections
- [ ] Tour listing with filters (destination, duration, price, theme)
- [ ] Tour detail page (tabs, itinerary, inclusions, policies, enquiry form)
- [ ] Destination / theme pages
- [ ] Currency switcher (INR / USD / AUD / GBP)
- [ ] Reviews (Google reviews)
- [ ] Gallery
- [ ] Blog
- [ ] FAQ
- [ ] WhatsApp button / live chat
- [ ] Enquiry form → Supabase + email
- [ ] Admin page to view/export leads (optional)
- [ ] Online booking/payment – Razorpay (later phase?)
- [ ] Multi-language (later phase?)

### Typography
- [ ] Heading font: ______
- [ ] Body font: ______
- [ ] Font sizes / scale: ______

### Colour palette
- [ ] Primary: ______
- [ ] Secondary: ______
- [ ] Accent / CTA button: ______
- [ ] Background / text: ______

### Branding from client
- [ ] Business name
- [ ] Logo
- [ ] Real tours (names, prices, itineraries, photos)
- [ ] Contact details / email for leads
- [ ] Domain name

---

## 5. Next step
Finalise features + typography + colours → scaffold the Astro project → build pages → connect Supabase form → deploy preview to Cloudflare.
