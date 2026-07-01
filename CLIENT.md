# Gardner Plumbing Co.

> Inland Empire plumbing company expanding into HVAC. Established brand; active SEO + lead-gen client.

---

## Business

- **Legal/brand name:** Gardner Plumbing Co.
- **Industry:** Plumbing (primary) + HVAC (expanding 2026)
- **Service area:** Greater Riverside County, CA — Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Hemet, Riverside, Perris, Canyon Lake, San Jacinto, Moreno Valley, Corona
- **Headquarters region:** Murrieta / Inland Empire

## NAP

- **Phone:** (951) 246-4337 / `tel:9512464337`
- **Hours:** Office Mon–Fri 8 AM–4 PM · Service Mon–Fri 8 AM–5 PM · Sat/Sun emergency only · 24/7 emergency available
- **CSLB License:** **1073177** (C-36 Plumbing — confirmed 2026-06-29 by owner)
- **Years in business:** 30+ years (best estimate — not yet verified by owner)
- **Reviews:** 900+ five-star Google reviews (point-in-time figure 2026-06-29; will become dynamic later)

## Service Area (confirmed 2026-06-29 — supersedes earlier list)

Riverside County + eastern San Bernardino County + Coachella Valley. 25 cities:

Banning · Beaumont · Calimesa · Cathedral City · Cherry Valley · Corona · Eastvale · Garnet · Hemet · Jurupa Valley · Lake Elsinore · Menifee · Mentone · Moreno Valley · Murrieta · North Palm Springs · Palm Springs · Palm Desert · Pedley · Perris · Redlands · Riverside · San Jacinto · Temecula · Yucaipa

## The Gardner Promise (brand decision 2026-06-29)

Umbrella name: **"The Gardner Promise"** · Tagline: **"We Own It"**. Four pillars:
1. **30-Day Callback Guarantee** — if the same issue recurs within 30 days, we return free; parts and labor covered.
2. **Written Estimate Before Work Begins** — price you see = price you pay; changes only with your approval.
3. **No Trip Fees, No Pressure** — free in-home estimates.
4. **Fully Licensed, Bonded & Insured** — CSLB #1073177.

Use as reusable `<FixPromise />` (or `<GardnerPromise />`) section on homepage + top service pages.

## Brand

- **Logo:** `/public/gardner_logo.webp` (red + white wordmark)
- **Primary colors:** Red `#DC2626` / `#8B0000` (gradient), dark gray/black `#202020`–`#111827`
- **Accents:** Yellow stars `#FBBF24`, green CTAs `#16A34A`
- **Aesthetic:** Glassmorphism dark with red border accents, radial gradient overlays, drop-shadow text

## Stack

- Next.js 15 (App Router) · TypeScript strict · Tailwind CSS · `lucide-react` icons
- Custom components in `components/` (NOT shadcn v4 / NOT @base-ui — uses an older pattern)
- Hosted on Vercel · GitHub repo (push to `main` = production deploy)
- Repo location: `c:\Users\Owner\agency\clients\gardner-plumbing\`

## Social / External

- Facebook: https://www.facebook.com/people/Gardner-Plumbing-Company/100063665179161/
- Instagram: https://www.instagram.com/gardnerplumbingco/
- Yelp: https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9
- Reviews: 4.9★ rated

## Critical Notes

- **Brand-vertical dissonance (HVAC expansion):** "Gardner Plumbing" brand name implies plumbing-only. Per agency MEMORY.md rule (2026-06-11): on HVAC pages, section H2s must NOT include "Gardner Plumbing". Use "Our HVAC Team", "Inland Empire homeowners", or generic contractor framing. Keep ONE canonical entity mention per page body as the AIO anchor.
- **Existing plumbing page count:** ~33 plumbing service pages live (`/services/*`), including 12 city × drain-cleaning combos. Plumbing IA is set — do NOT modify existing plumbing routes.
- **Air Duct Cleaning** has no existing page on Gardner (despite being IAQ-adjacent on water-heater-sos). The new `/services/hvac/air-duct-cleaning` is a clean build, no redirect needed.
- **Forms → GHL:** Custom Next.js forms POST to GHL webhook (per house tech-stack). Existing form integration not audited yet by ghl-engineer — flag if Phase 2 page builds need form changes.
- **GBP primary category:** "Plumber" stays. HVAC secondaries to add post-Phase-2: Air conditioning contractor, Heating contractor, Air duct cleaning service (per local-seo advisory at `seo/hvac-gbp-alignment.md`).
- **ServiceTitan DNI:** site uses ServiceTitan dynamic number insertion (`mads-dni-go.servicetitan.com`). 404s on localhost are expected — do not chase.

## Open Items / Unknowns

- Current GBP secondary category list — need to confirm slot count before adding HVAC categories.
- Form webhook endpoint not audited by ghl-engineer; not blocking Phase 2 page builds unless those pages need a new form.
- No existing HVAC product photos for AIO entity signals — `creative-director` may need to source AI imagery for hero/OG via `seo-image-gen`.
