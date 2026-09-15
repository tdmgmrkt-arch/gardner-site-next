# Gardner Plumbing — Active Work Log

_Last updated: 2026-09-15_

---

## In Progress

- **Rebrand announcement — "Gardner Plumbing Co. is now GPC Home Pros" — built in local repo (2026-09-15), NOT committed.** Rebrand was already live externally (Instagram display name + third-party listings) while the site still said Gardner Plumbing Co. only. Shipped locally:
  - `components/RebrandAnnouncement.tsx` — one dismissal state, two surfaces. **Mobile (<lg):** slim in-flow bar above the sticky header, scrolls away naturally, so Google's intrusive-interstitial rule never applies (mobile is the only surface it judges). **Desktop (≥lg):** centered modal, 1.2s delay, Escape + backdrop + X to close, focus moved to close button. Dismissal persists in **`sessionStorage`** key `gpc-rebrand-notice-v1` (wrapped in try/catch for private mode) → quiet for the rest of the current visit, shown again on a later one. **Deliberately not `localStorage`:** a rebrand notice is not a cookie banner, its job is name recognition, and that needs repetition across visits. Switch to `localStorage` only once we judge the message saturated. Append **`?rebrand=1`** to any URL to force it open (for demos and client review) — read from `window.location.search` rather than `useSearchParams()`, which would require a Suspense boundary and opt every page out of static rendering. Mounted in `app/layout.tsx` **above** `<HeaderShell />` so the mobile bar lands in normal document flow. Modal `z-[10000]` clears the cookie banner and the mobile menu (`z-[9999]`).
  - `app/now-gpc-home-pros/page.tsx` + `components/NowGpcHomePros.tsx` — the canonical public record of the name change, which is what actually gets indexed and cited by AI assistants. Sections: hero logo-transition lockup, "Why the name changed", "What did not change" (same people / same number / same license / same 900+ reviews), three-trade grid linking `/services`, `/services/hvac`, `/services/electrical`, 6-item FAQ, closing CTA. WebPage + FAQPage + BreadcrumbList JSON-LD, with an `Organization` block carrying `alternateName` for old→new entity resolution.
  - `app/layout.tsx` site-wide `Plumber` schema — added `@id` + `alternateName: ["GPC Home Pros", "Gardner Plumbing Company"]`. **`name` deliberately still reads "Gardner Plumbing Co."** — flip it once GBP is renamed, not before, or the site and GBP disagree mid-transition.
  - `app/sitemap.ts` — `/now-gpc-home-pros` added at priority 0.8.
  - `npx tsc --noEmit` clean for all new/changed files (14 errors remain, all pre-existing in `RepairsHub.tsx`, `components/route.ts`, `ui/calendar.tsx`, `ui/chart.tsx` — untouched).
  - **Design pass on the modal after Kenneth reviewed v1 (2026-09-15).** Four changes: (1) ~~killed the duplicate headline~~ — **REVERSED by Kenneth same session.** I had made the logo lockup itself the `<h2>` (sentence kept as `sr-only`) to avoid saying the same thing twice. Kenneth: *"we need to say Gardner Plumbing Company is changing its name too, not just an arrow."* He is right for this audience — the arrow is designer shorthand, and a homeowner scanning a modal should not have to decode it. The explicit sentence is back as a visible `<h2>`: **"Gardner Plumbing Company is now GPC Home Pros"** (his phrasing, "Company" not "Co."; he then asked for it simpler, and "is now" also resolves the tense question correctly — the rebrand is complete externally, not pending, so the present tense is both shorter and more accurate). Fits on one line at `max-w-xl`, with the lockup above it as visual proof and the supporting line tightened to compensate for the height. **Standing lesson: on trust-sensitive announcements, redundancy between a visual and a sentence is a feature, not a flaw — do not optimize it away.** Follow-up cleanup on that headline (Kenneth: *"just feel like that part could look cleaner"*): removed the **"A New Name" eyebrow** — chip + lockup + sentence meant three consecutive elements announcing the same thing, and the chip was the one carrying no information; and added **`text-balance`** to the `<h2>` (measure tightened `max-w-lg` → `max-w-md`), because the default wrap broke after "name" and stranded "to" at the head of line 2. Now breaks evenly as "Gardner Plumbing Company is / changing its name to GPC Home Pros". `text-balance` degrades gracefully to normal wrapping on older browsers. (2) **Old logo back to full opacity** — at 55% it read as a broken/low-res image rather than as "fading out", and it was sitting beside plain typed text, so a *designed logo* and *typed words* were touching at two different fidelity levels, which made the new name look like a placeholder. (3) **Trade chips inverted in weight** — HVAC and Electrical (the actual news) now carry red borders/fills plus a "NEW" pill; Plumbing sits back in gray as the known quantity. Previously all three were 4%-white boxes that read as *disabled buttons*. (4) **Phone demoted from button to text link** so the single primary CTA stands alone — the number is already in the TopBar, header, and sticky call bar. Card widened `max-w-xl` → `max-w-2xl` with `whitespace-nowrap` on the lockup, because the larger type wrapped "GPC HOME PROS" to two lines and left the arrow pointing at nothing. Verified single-line with no horizontal overflow at both 1440px and 1024px (the `lg` boundary).
  - **Verified in dev via Playwright (2026-09-15):** desktop modal renders at 1440px after the delay; mobile bar renders at 390px above the TopBar/header and scrolls away; modal is suppressed on `/now-gpc-home-pros` itself (`SUPPRESSED_PATHS` + `usePathname`); clicking "Continue to the site" writes `gpc-rebrand-notice-v1 = "seen"` and the modal does not reappear on subsequent navigation. Announcement page uses `title: { absolute: ... }` to bypass the root layout's `| Gardner Plumbing Co.` template, which otherwise produced "…is Now GPC Home Pros | Gardner Plumbing Co.". Screenshots in `.playwright-mcp/rebrand-*.png`.
  - **Dev-server note:** the running dev server was returning a blanket 500 on every route *before* any of this work — `.next/` had production build artifacts mixed into it (the `npm run build`-during-dev collision documented in project memory). Fixed by killing the process, `rm -rf .next`, and restarting. Not caused by these changes; isolated by stashing `app/layout.tsx` and confirming the 500 persisted.
  - **Open loops:** (1) **no GPC Home Pros logo asset exists** — both surfaces use a text lockup next to the old `/gardner_logo.webp`; needs a real mark. (2) HVAC/electrical license placeholders `{{CSLB_C20_LICENSE_TBD}}` / `{{CSLB_C10_LICENSE_TBD}}` render visibly on the announcement page, consistent with the vertical pages — **these are launch blockers, not typos.** (3) Kenneth said licenses are "fine" but CSLB was not independently verified (lookup needs a live session). (4) NAP discrepancy spotted in third-party listings: 30722 vs 30714 Wealth St — route to `local-seo`. (5) GBP rename + citation sweep (Yelp, Facebook, BBB, directories), footer/About/`ai-actions.json` copy, and OG image are all still pending — the popup is the smallest piece of the rebrand.

- **HVAC + Electrical Blog Expansion — 10 posts added to local repo (2026-08-13).** 6 HVAC + 4 Electrical posts inserted into [data/blogPosts.ts](data/blogPosts.ts), spread evenly May 4 → August 5 2026 across dates with no existing posts. All follow the same house format as the July 2026 plumbing batch: 900–1,050 words, min 3 internal links + 1 external link, closing CTA box, one canonical AIO entity anchor per post. Brand-vertical dissonance rule enforced (no "Gardner Plumbing" in H2s; "Our HVAC Team" / "Our electrical team" framing). CSLB license placeholders — `{{CSLB_C20_LICENSE_TBD}}` on HVAC posts, `{{CSLB_C10_LICENSE_TBD}}` on Electrical posts — used so they remain visible launch blockers alongside the vertical service pages. **Loose ends:** (1) 10 hero images need sourcing at `/public/blog/<slug>.webp` (same Pexels + sharp workflow used for the plumbing batches); (2) NOT yet committed. Slugs added: `why-ac-not-cooling-inland-empire`, `signs-electrical-panel-needs-upgrade`, `ac-filter-replacement-riverside-county`, `mini-split-vs-central-ac-inland-empire`, `ev-charger-installation-home-riverside-county`, `real-cost-skipping-ac-maintenance`, `whole-home-surge-protection-inland-empire`, `smart-thermostat-electric-bill-riverside-county`, `gfci-vs-afci-outlets-california-homes`, `when-to-repair-vs-replace-ac-inland-empire`.

- **Brand Refresh — SHIPPED to production 2026-08-12 (commit `a0c2782`).** Addresses AI-visibility gaps from the strategic recommendations audit (family-owned identity buried, promises siloed, sweet spot unnamed). Changes: (1) Homepage hero — new red uppercase eyebrow "Family-Owned · Trusted in Riverside County Since 1995", rewritten paragraph naming the residential + small-to-mid commercial sweet spot, 4-chip proof strip (family-owned, dynamic review count wired to `reviewCount` prop, 30+ years local, 24/7 emergency). (2) About page — H1 changed from "Three Decades of Plumbing Excellence" → "Family-Owned Plumbing. Three Decades in Riverside County." Hero paragraph rewritten to lead with the Nootbar → Gardner Family 2020 transition. (3) Top 3 service page intros (Drain, Water Heater, Leak Detection) now cross-link to `/guarantee` (Gardner Promise) + `/clean-visit-promise` in a subordinate gray sub-paragraph. CSLB chip removed from hero strip (already present in Gardner Promise trust bar below — avoids redundancy + fixed a wrap issue). Auto-deployed via Vercel.

- **52-Post Blog Series — ALL 4 BATCHES COMPLETE in local repo (2026-07-24).** 52 total posts added to `data/blogPosts.ts` spanning May 20 2025 → July 24 2026 (evenly spaced ~8-day cadence with 8 seasonal pins). Build clean at 160/160 static pages. All posts hit min 3 internal + 1 external link floor (Batch 2 initially shipped 7 under-spec, backfilled same session; Batch 3 initially shipped ~700-word posts, expanded same session to 900–1,050). All 52 `/public/blog/<slug>.webp` images sourced from Pexels + sharp-converted, all under 300 KB. Blog listing + BlogSection now sort by date desc (fixed `components/Blog.tsx` + `components/BlogSection.tsx`). 3 posts were written from scratch to fill PDF content gaps (Summer Tips, Water Pressure Problems, Spring Checklist) + 1 re-angled (Red Flags vs the batch-1 "How to Choose"). **Loose ends:** (1) batch-1 posts `repair-vs-replace-leaky-faucet` + `understanding-home-plumbing-system` still have 0 external links; (2) 8 batch-4 posts run 1,100–1,532 words (over target ceiling, accepted as substantive); (3) leftover utility `scripts/download-batch4-images.mjs` can be deleted. **NOT yet committed.**

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
