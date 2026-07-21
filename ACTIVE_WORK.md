# Gardner Plumbing — Active Work Log

_Last updated: 2026-06-30_

---

## In Progress

- **Clean Visit Promise — COMPLETE in local repo (2026-06-30).** Closes R&R cleanliness citation gap (19 vs 2). New `/clean-visit-promise` page + reusable `<CleanVisitPromise />` 6-pillar section (glassmorphism, sibling to Gardner Promise). Section dropped on homepage, Drain, WaterHeater, LeakDetection, BurstPipes, Emergency. WebPage + FAQPage + BreadcrumbList JSON-LD inline. Sitemap updated. Build passes (100 routes). Owner-approved: name "The Clean Visit Promise", accountability recourse Option A (same-day return free), Behavior 7 (photo handoff) dropped — not operationally live. **NOT yet committed.**

- **AI Visibility Priority 1 — COMPLETE in local repo (2026-06-29).** Three pages shipped to target the biggest AI-citation gaps (Pricing 0 vs 18, Emergency 1 vs 27, Warranty turned positive). Build passes 99/99 static routes. NOT yet committed.
  - `/transparent-pricing` — NEW. 13 sections, 5 pricing tables, 11 FAQ items, Service + FAQPage + BreadcrumbList JSON-LD. Source: `knowledge base/gardner_transparent_pricing (1).pdf`. (`components/TransparentPricing.tsx`, `app/transparent-pricing/page.tsx`, sitemap updated.)
  - `/services/plumbing/emergency-service` — REWRITE. 10 sections w/ 45-min arrival commitment, 25-city coverage grid, 5-step process, 7-FAQ accordion. Source: `knowledge base/gardner_emergency_plumbing (1).pdf`. (`components/Emergency.tsx` rewritten, page metadata + schema upgraded.)
  - **The Gardner Promise** — NEW BRAND. `components/GardnerPromise.tsx` reusable section (4 pillars, trust strip, CTAs). Dropped on homepage (between WhyChooseUs and Reviews), Drain.tsx, WaterHeaterPage.tsx, LeakDetection.tsx, BurstPipes.tsx. `/guarantee` page rewritten end-to-end with deep-dive pillar subsections + 7-FAQ accordion. Brand spec lives in `seo/content-facts.md`.

- **Tech debt flagged:** Emergency rewrite agent embedded a hand-coded Gardner Promise block inline in `Emergency.tsx` rather than importing `<GardnerPromise />`. Gardner Promise agent skipped its insertion to avoid duplicate. Swap to canonical component in a small follow-up so the section stays in sync site-wide.

- **HVAC Phase 1 — page builds COMPLETE (2026-06-12).** All 18 HVAC pages built and live in local repo (1 vertical hub + 3 sub-hubs + 14 leaves). Real hero image live on AC Repair (`/public/acrepairhero.webp`); 17 other pages have visible Gemini prompt placeholders ready for user to generate. NOT yet committed.
- **Electrical Phase 1 — page builds pending.** 18 stub routes live, awaiting same pipeline that just finished for HVAC.

## Up Next — Phase 2 Blockers

- **BLOCKER 1 — California contractor licensing:** Confirm Gardner holds an active **C-10 (Electrical)** and **C-20 (HVAC)** license separate from C-36 (Plumbing). Advertising HVAC or electrical work without these licenses violates CSLB rules. If Gardner is unlicensed for either trade, that vertical CANNOT launch. License numbers must appear in body copy + footer on every leaf page in that vertical.
- **BLOCKER 2 — GBP secondary slot count:** GBP allows 9 secondary categories. Math shows possible 0 electrical slots available if 6+ plumbing secondaries exist. Owner must share current secondary category list before local-seo can finalize HVAC + Electrical category additions.
- **BLOCKER 3 — DBA decision:** local-seo flagged that "Gardner Plumbing" doing electrical is a bigger consumer-trust gap than HVAC. Recommended: file DBA ("Gardner Home Services" or similar) before electrical launch. Client-comms conversation needed.
- **BLOCKER 4 — Launch sequencing:** local-seo recommends sequential GBP launches: HVAC first → 60–90 days → Electrical. Compound expansion creates ranking-attribution problems + review dilution.
- Phase 2 form-changes pre-check: decide whether HVAC/Electrical page builds need form changes; if so, route ghl-engineer first.
- Phase 2 launch (HVAC, estimated): build AC Repair first as the template, validate via SXO + content + GEO, then scale to remaining 13 leaves + 3 sub-hubs + index hub.

## Recently Completed

- **2026-06-12 — HVAC Phase 1 page builds (complete — all 18 pages):**
  - **AC group (5 leaves):** AC Repair (built first as template — real hero image live at `/public/acrepairhero.webp`), AC Installation, AC Maintenance, Mini-Split AC, Thermostat Installation
  - **Heating group (5 leaves):** Furnace Repair, Furnace Installation, Furnace Maintenance, Heat Pump Systems, HVAC Maintenance Plans
  - **IAQ group (4 leaves):** Air Duct Cleaning, Air Filtration Systems, Whole-Home Humidifiers, Whole-Home Dehumidifiers
  - **3 sub-hubs:** AC, Heating, Indoor Air Quality
  - **1 vertical hub:** `/services/hvac`
  - All built using Drain.tsx as visual template (matched aesthetic 1:1). Each page is a separate `components/<PageName>.tsx` file + `app/services/hvac/<slug>/page.tsx` route. Full schema (Service + FAQPage + BreadcrumbList JSON-LD inline in each page.tsx).
  - **Reusable artifacts created:** `components/ImagePromptPlaceholder.tsx` (visible placeholder for unrendered images — shows the Gemini prompt + copy button + target dimensions/filename), `components/StubPage.tsx` (legacy from Phase 1 menu work).
  - **17 image prompt specs** at `seo/hvac-image-prompts/*.md` — copy-paste ready for Gemini/Nano Banana with attached team reference photos.
  - **Brand uniform spec** at `seo/brand/team-uniform-spec.md` — canonical Gardner uniform description; baked verbatim into every hero prompt.
  - **Team reference photo folder** at `seo/brand/team-reference/` with README — user drops 2 real team photos there for Gemini workflow.
  - 4 layout improvements applied to ALL 18 pages: `items-stretch` on Why Choose Us grid, `h-96 lg:h-full lg:min-h-[600px]` on left image container, Next.js `fill` prop + `object-[center_30%]` for crop, vertical-specific pill badge text ("Why Choose Our HVAC Team" or "Why Choose Our IAQ Team").
  - Title rule established: `metadata.title` field never includes `| Gardner Plumbing Co.` — root layout template at `app/layout.tsx:14` auto-appends. Caught + fixed during AC Repair build, baked into spec docs for all 17 follow-up pages.
  - Build verified: `npm run build` passes, 98/98 static routes. Visual QA via Playwright sampled 4 pages (Heat Pump leaf, Air Duct leaf, AC sub-hub, vertical hub) — all H1s, badges, breadcrumbs, hero placeholders render correctly.
  - `{{CSLB_C20_LICENSE_TBD}}` placeholder rendered visibly in Why Choose Us paragraph on all 18 pages — must be replaced with real C-20 license number before launch.
  - **NOT yet committed.** Batch this with the Phase 1 mega menu work for a single feature branch + PR.

- **2026-06-12 — Phase 1 Electrical mega menu (complete):**
  - `seo-cluster` delivered hub-and-spoke architecture + internal link matrix for all 18 electrical pages → `seo/electrical-cluster-architecture.md`. SERP overlap validated for all 3 sub-hub groupings. Cross-vertical bridges mapped (Generator→HVAC, EV Charger→Smart Home, Remodel→multi-trade).
  - `seo-writer` locked all menu labels, slugs, microcopy → `seo/electrical-menu-labels.md`. Sub-hubs use short slugs (`fixtures`, `power`, `repairs`); "Maintenance, Safety & Repairs" display label shortened to "Repairs & Safety".
  - `local-seo` GBP advisory → `seo/electrical-gbp-alignment.md`. Key findings: likely 0 GBP slots remaining; DBA filing flagged as urgent; sequential launch (HVAC first → 60–90 days → Electrical) strongly recommended.
  - `web-developer` implemented Electrical Services dropdown in `components/Header.tsx` (desktop 3-col + mobile collapsible with Zap icon)
  - 18 stub routes created under `app/services/electrical/` (1 vertical index + 3 sub-hubs + 14 leaf services). Total HVAC + Electrical routes = 36.
  - Generic `components/StubPage.tsx` introduced (generalized from `HvacStubPage`)
  - Build passes (98 static pages, 0 errors)
  - **Nav label tightening (2026-06-12, user-driven):** Top nav shortened from "Plumbing Services / HVAC Services / Electrical Services" → **"Plumbing / HVAC / Electrical"** to eliminate redundancy + nav crowding at the lg breakpoint. Single label at all viewports (responsive truncation removed). Mobile labels updated to match.
  - Visual QA via Playwright MCP at 1440px / 1024px / 390px — screenshots in repo root: `electrical-dropdown-desktop.png`, `nav-shortened-1440.png`, `nav-shortened-1024.png`, `mobile-shortlabels.png`, `hvac-dropdown-shortlabel.png`
  - **NOT yet committed.**

- **2026-06-12 — Electrical vertical Phase 1 cluster architecture:**
  - `seo-cluster` delivered hub-and-spoke architecture + internal link matrix for all 18 electrical pages → `seo/electrical-cluster-architecture.md`
  - SERP overlap validated for all 3 sub-hub groupings (Installation & Fixtures, Power Systems & Upgrades, Maintenance Safety & Repairs)
  - Risk flags documented: Smart Home Solutions (SERP drift), Generator Installation (HVAC bridge), Pool & Spa Wiring (mixed-trade SERP), Remodeling (multi-trade differentiation angle)
  - Cross-vertical bridges mapped: 5 Electrical→HVAC + 3 HVAC→Electrical reverse + 3 Electrical→Plumbing + 1 Plumbing→Electrical reverse
  - Brand-vertical dissonance rule escalated at stronger level than HVAC (electrical license class = more distinct in consumer mental model)

- **2026-06-12 — Phase 1 HVAC mega menu (complete):**
  - `seo-cluster` delivered hub-and-spoke architecture + internal link matrix → `seo/hvac-cluster-architecture.md`
  - `seo-writer` locked all menu labels, slugs, microcopy → `seo/hvac-menu-labels.md`
  - `local-seo` confirmed GBP category alignment for 3-parent IA → `seo/hvac-gbp-alignment.md`
  - `web-developer` implemented HVAC Services dropdown in `components/Header.tsx` (desktop 3-col + mobile collapsible with Snowflake icon)
  - 18 stub routes created under `app/services/hvac/` (1 vertical index + 3 sub-hubs + 14 leaf services)
  - Existing "Services" renamed to "Plumbing Services" across desktop + mobile + `mainNavLinks`
  - Build passes (80 static pages, 0 errors)
  - Visual QA via Playwright MCP — screenshots in repo root: `hvac-dropdown-desktop.png`, `phase1-fix-desktop-hub.png`, `phase1-fix-mobile-order.png`
  - **NOT yet committed.** Awaiting commit approval.

## Decisions Log

- **2026-06-12 — URL pattern for Electrical vertical:** `/services/electrical/<slug>`. Mirrors HVAC pattern. Sub-hubs at `/services/electrical/installation-and-fixtures`, `/services/electrical/power-systems-and-upgrades`, `/services/electrical/maintenance-safety-repairs`. Vertical index at `/services/electrical`.
- **2026-06-12 — Brand-vertical dissonance rule for Electrical:** Stronger enforcement than HVAC. No "Gardner Plumbing" in any H2 across all 18 electrical pages. Single AIO entity anchor per page in intro: "Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, and the greater Inland Empire." Frame as "our electrical team" throughout body.
- **2026-06-12 — Generator Installation cross-vertical bridge:** Generator page links to `/services/hvac/heating/heat-pump` and `/services/hvac/ac/ac-repair` — heat pumps and AC are all-electric and most vulnerable during grid outages. Flag for seo-writer to reinforce this angle in body copy.
- **2026-06-12 — Smart Home SERP drift flag:** Smart Home Solutions page must target "smart home wiring" not "smart home automation" — the latter pulls non-electrical SERP results (integrators, retailers). seo-writer to frame as electrical infrastructure work for smart devices.
- **2026-06-12 — URL pattern for HVAC vertical:** `/services/hvac/<slug>`. Mirrors `/services/<slug>` plumbing pattern. Sub-hubs at `/services/hvac/ac`, `/services/hvac/heating`, `/services/hvac/indoor-air-quality`. Vertical index at `/services/hvac`.
- **2026-06-12 — Final mega menu nav label decision:** Top nav uses single-word labels — `Home · About Us · Plumbing · HVAC · Electrical · Reviews · Contact`. Shorter labels eliminate redundancy ("Services" repeats 3x) and resolve nav crowding at lg breakpoint without responsive truncation. Decision made after seeing all 3 dropdowns side-by-side.
- **2026-06-12 — HVAC sub-hub split:** 3 sub-hubs (AC / Heating / IAQ) mapping to GBP secondary categories (Air conditioning contractor / Heating contractor / Air duct cleaning service). Validated by SERP overlap analysis (seo-cluster).
- **2026-06-12 — Menu label deviations from user spec:** "Mini-Split / Ductless AC" shortened to "Mini-Split AC" (slash bad UX, "ductless" still in descriptor + body copy). Slug for HVAC Maintenance Plans uses `hvac-maintenance-plans` (not `maintenance-plans`) to avoid collision with existing plumbing `/services/maintenance-plans`.
- **2026-06-12 — Brand-vertical dissonance rule applies (HVAC):** All 14 HVAC pages + 4 hub pages must follow MEMORY.md H2 rule (no "Gardner Plumbing" in section H2s; one canonical entity mention only in body).

---

## Phase 2 Plan — 14 HVAC Service Pages (+ 4 Hubs)

**12-agent pipeline** ready to spin up on user greenlight:

| Stage | Agent | Deliverable |
|-------|-------|-------------|
| 1 | `seo-dataforseo` | Live search volume + intent + difficulty for 17 target keywords (Inland Empire-modified) |
| 2 | `seo-sxo` | SERP-backwards analysis on `AC Repair` to validate page-type fit before template scales |
| 3 | `seo-cluster` | Final internal link matrix (already drafted in Phase 1; refine with dataforseo data) |
| 4 | `seo-writer` | Drafts all 17 pages (1 vertical hub + 3 sub-hubs + 14 leaves). Applies brand-vertical dissonance rule. AC Repair built first as template. |
| 5 | `seo-content` | E-E-A-T + AI citation readiness review on each draft |
| 6 | `seo-geo` | AIO/ChatGPT/Perplexity passage-level citability scoring (AC Repair template + spot-check sample) |
| 7 | `seo-schema` | Service + FAQPage + BreadcrumbList JSON-LD for all 17 pages + HVAC vertical hub |
| 8 | `seo-image-gen` | Hero/OG image generation plan for 17 pages (HVAC-specific entity signals) |
| 9 | `web-developer` | Builds the 17 pages in Next.js (replaces stubs), wires schema, breadcrumbs, internal links, form → GHL |
| 10 | `seo-sitemap` | Adds 18 new routes to sitemap.xml (or sitemap.ts) |
| 11 | `qa-launch` | Pre-launch gate — schema validation, internal links, CWV, mobile, accessibility, blocker authority |
| 12 | `local-seo` | Post-launch GBP secondary category additions + announcement post via auto-poster |

**Critical guardrails for Phase 2:**
- Brand-vertical dissonance rule (no "Gardner Plumbing" in section H2s on HVAC pages)
- Thermostat Installation page must frame tightly as HVAC integration (not smart-home / electrician — SERP drift flagged by seo-cluster)
- HVAC Maintenance Plans must stay differentiated from Furnace Maintenance (subscription vs single-appliance angle)
- Air Duct Cleaning is a NEW page — no collision with any existing plumbing page

---

## Files & References

- `components/Header.tsx` — mega menu source of truth
- `components/HvacStubPage.tsx` — Phase 1 stub component (replaced by Phase 2 page builds)
- `app/services/hvac/` — 18 HVAC routes
- `seo/hvac-cluster-architecture.md` — hub-and-spoke + internal link matrix
- `seo/hvac-menu-labels.md` — locked labels/slugs/microcopy
- `seo/hvac-gbp-alignment.md` — GBP category advisory
- `seo/electrical-cluster-architecture.md` — Electrical hub-and-spoke + internal link matrix (Phase 1 complete)
