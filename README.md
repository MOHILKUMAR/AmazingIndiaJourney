# Agra Day Tour Packages: Website (Astro + Tailwind)

Static Astro site for a tour & travel company. Builds to plain HTML/CSS/JS that can be uploaded to any host (Hostinger, Cloudflare Pages).

## Requirements
- Node.js **22 or newer** (`node -v`)

## Run locally
```bash
npm install
npm run dev        # http://localhost:4321
```

## Build for upload
```bash
npm run build      # creates the dist/ folder
npm run preview    # check the built site locally
```
Upload the **contents** of `dist/` (including the hidden `.htaccess`) to the domain's `public_html` folder on Hostinger.

## Where to edit things
| What | File |
|---|---|
| Business name, email, phone, WhatsApp, rating, currency | `src/site.config.ts` |
| Menu links | `src/site.config.ts` → `nav` |
| Colours & fonts | `src/styles/global.css` (`@theme`) + font link in `src/layouts/Base.astro` |
| Logo | `src/components/Logo.astro` (replace the SVG with the client logo) |
| Tours | `src/content/packages/*.json` (one file per tour) |
| Destinations | `src/content/places/*.md` |
| Blog posts | `src/content/blog/*.md` |
| Reviews | `src/data/reviews.json` (**replace samples with real reviews only**) |
| FAQs | `src/data/faqs.json` |
| Images | `public/images/`: then set `"image": "/images/file.webp"` in the tour/destination |
| Real domain | `astro.config.mjs` → `site`, and `public/robots.txt` |

Content comes from the Agra Day Tour Packages brochure 2026–27. Values marked `TODO` or `SAMPLE` (social links, guest testimonials) still need real details.

> If you are updating an older copy of this project: delete the old folders `src/content/tours/` and `src/content/destinations/`: they are no longer used.

## Pages
Home · Tours (with filters & sorting) · Tour detail (`/packages/<slug>/`) · Destination (`/city/<slug>/`) · About · Contact · FAQ · Blog + posts · Terms · Privacy · 404

## Enquiry form
Sends leads to Google Sheets + email alert: setup in `google-sheets/README.md`.
Until `PUBLIC_LEADS_ENDPOINT` is set in `.env`, the form opens the visitor's email app instead.

## Phase 2 (planned)
Supabase (live prices, reviews, blog) + admin panel + Cloudflare R2 images: see `PROJECT-NOTES.md`.
The tour price elements already carry `data-tour-price="<slug>"` for the live price update.
