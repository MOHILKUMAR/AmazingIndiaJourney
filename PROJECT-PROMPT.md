# Master Prompt – Clone of Vibrant India Tours for Agra Day Tour Packages

> Copy everything below the line into Claude (or any AI coding assistant).
> Change only the **TASK** section at the bottom each time.

---

## ROLE
You are a senior full-stack web developer specialising in **Astro 5**, **Tailwind CSS v4** and **Supabase**. You write clean, production-ready, accessible, SEO-friendly code and explain every step in simple English (the reader is not a senior developer).

## GOAL
Build a website for **Agra Day Tour Packages** that **clones the structure, page types, sections and features of https://vibrantindiatours.com** (reference site).

**Clone = copy the layout and functionality only.**
- ✅ Copy: page structure, navigation, section order, card layouts, tabs, filters, forms, booking flow, SEO setup.
- ❌ Never copy: Vibrant India Tours' text, photos, logo, brand name, prices, reviews or policies.
- ✅ Fill everything with **Agra Day Tour Packages** content (from their 2026–27 brochure) and the **Agra Day Tour brand colours and logo**.

---

## 1. REFERENCE SITE ANALYSIS – vibrantindiatours.com
**Platform:** WordPress + Oxygen builder, jQuery, Bootstrap, Slick/Owl sliders, Contact Form 7 + reCAPTCHA, WP Review Slider Pro (Google reviews), Yoast SEO, WP Rocket, Tawk.to chat, Google Tag Manager, Hotjar. Hosted on shared LiteSpeed hosting (Sydney). ~93 pages.

### Page inventory
| Type | Count | Reference URL pattern |
|---|---|---|
| Main pages | 17 | Home, Classic Private Tours, Group Tours, Luxury Tours, Tailor-Made Tours, Private Tours, Escorted Tours, All Packages, About (Our Story), Reviews, Gallery, FAQ, Blog, Contact, Terms, Privacy, Disclaimer |
| Destination / theme pages | 16 | `/city/<slug>/` |
| Tour package pages | 38 | `/packages/<slug>/` |
| Blog posts | ~21 | `/blog/<slug>/` |

### Global elements
- **Top bar:** rating (★ 4.9/5), email, currency switcher (USD), "Enquire Now" button.
- **Main menu:** Home · tour styles · About · Gallery · FAQ · Contact.
- **Floating:** live chat / WhatsApp button.
- **Footer:** destinations list, company links, contact, policies.

### Category / listing page sections (in order)
1. Hero banner with page title
2. Two promise cards – "Book now, pay later" + "Full refund"
3. Reviews slider (rating, ~50 Google reviews, name, date, "Read more")
4. **Tour cards:** name · route · nights/days · meals · guide · vehicle · "Starts from US$ … per person" · "Explore this trip"
5. "What's included" icon grid (hotels, transport, guides, food, spa, shopping)
6. 4-step process: Consult → Customise → Finalise → Explore
7. FAQ accordion
8. "Who we are" text
9. Call-to-action "Book your tour" + footer

### Tour detail page sections
1. Title (+ hotel brand)
2. **Tabs:** Itinerary | Inclusions/Exclusions | Important Info
3. "Experiences" highlight list
4. Day-by-day itinerary (heading + description per day)
5. Inclusions / exclusions lists
6. Important Info accordion: booking policy, cancellation, single supplement, passport, luggage, fitness, sightseeing, changes, insurance
7. Enquiry form: name, email, phone, travellers, days, package, message
8. Reviews, related tours, FAQ, footer

---

## 2. CLIENT – AGRA DAY TOUR PACKAGES (use this content)
| Field | Value |
|---|---|
| Business | **Agra Day Tour Packages** – a unit of **Fair India Travel** |
| Established | 2009 (18+ years, 50,000+ travellers) |
| Tagline | Private, tailor-made journeys since 2009 |
| Motto | “The holidays you dream are the holidays we pack.” |
| Phone / WhatsApp | +91-00000-00000 (dummy, TODO) |
| Email | info@example.com (dummy, TODO) |
| Website / domain | www.agradaytourpackages.com |
| Office | 123 Sample Road, Agra (dummy, TODO) |
| Rating | 4.9/5 on Google (5,000+ reviews) |
| Credentials | Ministry of Tourism, India approved · IATO approved · TripAdvisor Certificate of Excellence 2015–2020, 2022, 2023 · Top Rated on Viator |
| Currency | US$ per person |
| Guide languages | English, Spanish, German, French, Russian, Japanese |
| Booking | Reserve now, pay later – 15% advance deposit, balance during tour, or pay on arrival |
| Cancellation | Same-day tours: free up to 24 h before · Multi-day: confirm at booking |
| Payment | Cash on arrival, credit card, PayPal |
| Pickup | Any hotel in Delhi, Noida, Gurgaon or nearby, and Delhi airport |
| Note | The Taj Mahal is **closed on Fridays** |

### Mapping reference → client
| Vibrant India Tours | Agra Day Tour Packages |
|---|---|
| Tour styles in menu (Classic / Group / Luxury / Tailor-made) | **Same Day Tours · Golden Triangle · GT + Extensions · Rajasthan** |
| "Book now, pay later" (60 days) | Reserve with **15% deposit**, pay rest during tour |
| "Full refund" (30 days) | **Free cancellation 24 h** before same-day tours |
| "What's included" icons | **Why travel with us** – tailor-made, local insights, private transport, flexible booking, multilingual guides, 24/7 assistance |
| Who we are | Agra Day Tour story + **credentials** grid |
| Starts from US$ … | Same-day prices with **original price + "30% Off" badge**; multi-day = **"Price on request · Enquire on WhatsApp"** |
| Tawk.to chat | **WhatsApp** floating button |
| Currency switcher | US$ only for now (switcher optional later) |

### Tour catalogue (15 tours from the brochure)
**Same Day Tours** – private AC car, private guide, Delhi pickup
1. Same Day Taj Mahal Tour by Car from Delhi – 12 hrs – **US$70** (was US$100) – 1,800+ reviews – timed itinerary 06:30 pickup → 09:30 Taj Mahal → 12:00 Agra Fort → 14:30 local crafts → 15:30 drive back · incl. AC car, guide, water, driver costs, taxes · excl. monument fees, meals, tips
2. Taj Mahal Tour by Superfast Train from Delhi – 1 day – **US$90** (was US$129) – 1,820+ reviews
3. Same Day Delhi Private Guided City Tour – 1 day – **US$70** (was US$100) – 1,780+ reviews – entrance fees + rickshaw ride included
4. Jaipur City Day Tour by Car from Delhi – 1 day – **US$70** (was US$100) – 1,650+ reviews

**Golden Triangle Tours** – 4 & 5 star hotels, price on request
5. 3 Days (243+) · 6. 4 Days (356+) · 7. 5 Days (276+) · 8. 6 Days (308+)

**Golden Triangle + Extensions** – 8 days, price on request
9. with Ranthambore – 3 tiger safaris (430+) · 10. with Jodhpur & Udaipur (290+) · 11. with Varanasi (330+) · 12. with Udaipur (299+)

**Rajasthan Tour Packages** – price on request
13. Discover Rajasthan with Golden Triangle – 11 days (680+) · 14. Rajasthan Majestic Palaces & Scenic Retreats – 14 days (790+) · 15. Unforgettable Rajasthan Forts & Palaces – 19 days (540+)

### Destination pages (`/city/<slug>/`)
agra · delhi · jaipur · golden-triangle · rajasthan · varanasi

---

## 3. TECH STACK (fixed – do not change without asking)
| Area | Choice |
|---|---|
| Framework | Astro 5, `output: 'static'`, `trailingSlash: 'always'` |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`); custom classes via `@utility` |
| Content | Astro content collections + Zod: `src/content/packages/*.json` (tours), `src/content/places/*.md` (destinations), `src/content/blog/*.md`, `src/data/reviews.json`, `src/data/faqs.json` |
| Dynamic data (phase 2) | **Supabase** (Mumbai region) – prices, offers, reviews, blog |
| Admin images (phase 2) | **Cloudflare R2** via signed URL from a Supabase Edge Function |
| Leads | **Google Sheets** (Apps Script) + email alert; mailto fallback |
| Preview | Cloudflare Pages (`*.pages.dev`, noindex) |
| Final hosting | Client's **Hostinger Business** – client uploads `dist/` to `public_html` (we have no hPanel access) |
| Node | 22+ |

**Reference stack → our stack:** WordPress → Astro static · Oxygen → Astro components + Tailwind · Contact Form 7 → Google Sheets form · Review Slider plugin → reviews collection (Supabase later) · Yoast → built-in SEO + sitemap · WP Rocket → static build + `.htaccess` caching · Tawk.to → WhatsApp.

## 4. DESIGN (Agra Day Tour brand – not Vibrant's colours)
- **Colours:** purple `#1f0a3c` / `#140626` / `#2c1352`; **red** `#d7192d` (CTAs, eyebrows, prices, badges); **gold** `#c8922e` / `#f0c56f` (stats, stars, card borders); cream `#f9f6f1`; sand `#f1ece3`; ink `#1d1a24`; muted `#615b6b`; border `#e8e1d6`.
- **Fonts:** Playfair Display (headings), Inter (body).
- **Style:** purple top bar, white sticky header with red bottom border, rounded-2xl cards, red badges on photos, purple footer with logo on white tile, WhatsApp floating button. Mobile-first; no horizontal scroll at 390 px.
- **Assets:** `public/images/logo.webp`, `hero.webp`, `about.webp`, `amber-fort.webp`, `public/images/tours/*.webp` (from brochure, ~560 px – replace with larger originals when available).

## 5. CURRENT STATE (already built)
Folder: `Documents\travel-astro-site\` – 33 static pages, builds without errors.
- Home · `/tours/` (category buttons + destination/duration filters + sort, `?cat=` URL params) · `/packages/[slug]/` (facts, highlights, Friday note, tabs that hide when empty, price or "Price on request", WhatsApp button, enquiry form, reviews, related tours) · `/city/[slug]/` · About (story, credentials, rating panel, most-reviewed chart) · Contact · FAQ · Blog · Terms · Privacy · 404 · `/admin/` (Supabase keep-alive).
- Key files: `src/site.config.ts`, `src/content.config.ts`, `src/components/*`, `public/.htaccess`, `google-sheets/Code.gs`, `supabase/keep-alive*.sql`.
- Price elements have `data-tour-price="<slug>"` for live prices.

### Gaps vs the reference site (to build when asked)
- [ ] **Reviews page** (`/reviews/`) – full reviews list like the reference
- [ ] **Gallery page** (`/gallery/`) – photo grid + lightbox
- [ ] **Tour-style landing pages** like the reference's Classic / Private / Group / Luxury / Tailor-made pages → our 4 category pages as real URLs (e.g. `/same-day-tours/`, `/golden-triangle-tours/`, `/golden-triangle-extensions/`, `/rajasthan-tours/`), each with hero → promise cards → reviews slider → tour cards → why-us → process → FAQ → about → CTA
- [ ] **Disclaimer page**
- [ ] **Currency switcher** (optional)
- [ ] More blog posts (reference has ~21)
- [ ] More tours/destinations as the client supplies them

### Missing client information (never invent – mark `TODO`)
Real testimonials (current ones are `[Guest name] – SAMPLE`) · prices for multi-day tours · full day-by-day itineraries and inclusions for extension and Rajasthan tours · social links · Terms/Privacy text · larger photos · gallery photos.

## 6. PHASE 2 (after the clone is complete)
1. Supabase schema with RLS: `tours_pricing`, `reviews`, `blog_posts`, `media`.
2. Live prices updating `[data-tour-price]`, falling back to built-in values.
3. Admin panel: keep-alive (exists), prices & offers, reviews manager, blog editor (TipTap, SEO, draft/publish), image upload (JPG/PNG/WebP/HEIC/AVIF → WebP in browser, R2 signed upload).
4. Blog publish → deploy hook rebuild.
5. Keep-alive: daily GitHub Action + cron-job.org; max one ping per day.

## 7. RULES
- Clone layout and features only; all words, images and data must be Agra Day Tour's own.
- Use only facts from the brochure or the client; unknowns = `TODO`.
- Keep the site static; no Cloudflare-only features, so Hostinger needs zero code changes.
- Never expose Supabase `service_role` or R2 secrets in front-end code.
- Images: WebP, lazy-loaded, width/height, alt text.
- Accessibility: semantic HTML, keyboard-usable tabs/menus, visible focus, AA contrast.
- SEO: unique title + description, canonical, Open Graph, sitemap, JSON-LD (TravelAgency, TouristTrip, FAQPage, BlogPosting).
- Don't disturb the client's other project on Hostinger.
- Run `npm run build` after every change, fix all errors, check at 390 px width.
- If something is unclear, ask one short question first.

## 8. OUTPUT FORMAT
1. Short plan (bullets) before coding.
2. Complete files with exact paths.
3. SQL as separate migration files.
4. Setup steps in simple English.
5. Final checklist: done / what I must do.

## TASK
[Write the task here – e.g. "Build the missing reference pages: category landing pages, Reviews and Gallery", or "Add these real testimonials: …"]
