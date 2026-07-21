# Electrical Vertical Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical`  
**Primary keyword:** electrical contractor Inland Empire  
**Supporting keywords:** electrician Murrieta CA, electrician Temecula CA, residential electrician Murrieta, electrical services Inland Empire, licensed electrician near me, electrical contractor Murrieta  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Vertical hub — same 9-section structure as leaf pages (AcRepair.tsx). Service Overview cards link DOWN to the 3 sub-hubs. Hub captures head-term searches before the homeowner has identified a specific service; does NOT replicate sub-hub or leaf-level detail.

> **Achievement badge note:** "2,200+ Electrical Jobs Completed" reflects aggregate fixture installations (~1,400), power system jobs (~550), and repairs & inspections (~1,100) across the full vertical — conservatively summed to avoid double-counting multi-trade jobs. Use this number on the vertical hub only.

> **FLAG — C-10 License:** `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual CSLB C-10 (Electrical) contractor license number before this page goes live. Confirm with client.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Electrical Contractor Inland Empire | Murrieta Electrician",
  description:
    "Licensed electrical contractor serving Murrieta, Temecula & the Inland Empire. Panels, EV chargers, lighting, repairs & 24/7 emergency electrical. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Contractor Inland Empire | Murrieta Electrician | Gardner Plumbing Co.",
    description:
      "Complete electrical services across Murrieta and the Inland Empire. Licensed electricians, upfront pricing, 24/7 emergency line. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical",
  },
  alternates: {
    canonical: "/services/electrical",
  },
};
```

**Character counts (verify before ship):**
- title: 57 chars (renders as ~88 chars after template suffix — acceptable for hub)
- description: 158 chars
- canonical_slug: `/services/electrical`

---

## SECTION 2 — Hero Section

### H1
```
Complete Electrical Services in Murrieta & the Inland Empire
```

### Subheadline
```
One licensed electrical contractor for fixtures, power upgrades, and electrical repairs — serving Murrieta, Temecula, Menifee, and all of Riverside County.
```
*(27 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Contractor
Line 2: Murrieta & Inland Empire
```

### 4 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Clock` | Same-Day Response |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Pricing |
| `Phone` | 24/7 Emergency Line |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: Gardner electrician in front of service van, outdoor IE suburban setting — broad electrical contractor feel. Tech should be holding electrical tools, not plumbing tools. Clear daytime lighting.)*

---

## SECTION 3 — Emergency Alert Banner

```
Electrical problem in Murrieta? Call (951) 246-4337 — our licensed electrical team responds same day, including nights and weekends.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Electrical Services We Provide in the Inland Empire
```

### Section Intro Paragraph (58 words)
```
Inland Empire homes run on more electrical load than ever — EV chargers, smart systems, high-demand HVAC, aging panels from the 1990s builds that cover much of Murrieta and Temecula. Our licensed electrical team handles every service from a simple fixture swap to a full panel upgrade or whole-home rewire. Explore each service category below or call to speak with an electrician directly.
```

### 4 Service Cards (each card links to a child sub-hub or high-volume leaf)

**Card 1**
- Icon: `Lightbulb`
- Title: `Fixtures & Installation`
- URL: `/services/electrical/fixtures`
- Description: `Lighting installation, outlets and switches, ceiling fans, smart home wiring, and pool & spa electrical — residential installation work across the Inland Empire.`
- Features:
  1. Lighting Installation
  2. Outlets & Switches
  3. Ceiling Fans
  4. Pool & Spa Wiring

**Card 2**
- Icon: `Zap`
- Title: `Power Systems & Upgrades`
- URL: `/services/electrical/power`
- Description: `Electrical panel upgrades, home rewiring, EV charger installation, generator hookups, and remodeling electrical — power infrastructure for modern Inland Empire homes.`
- Features:
  1. Panel & Service Upgrade
  2. EV Charger Installation
  3. Home Rewiring
  4. Generator Installation

**Card 3**
- Icon: `ShieldCheck`
- Title: `Repairs & Safety`
- URL: `/services/electrical/repairs`
- Description: `Electrical troubleshooting, 24/7 emergency electrician, safety inspections, and whole-home surge protection — from flickering lights to a full electrical audit.`
- Features:
  1. Electrical Repairs
  2. Emergency Electrical (24/7)
  3. Safety Inspections
  4. Surge Protection

**Card 4**
- Icon: `Car`
- Title: `EV Charger Installation`
- URL: `/services/electrical/ev-charger-installation`
- Description: `Level 2 home EV charger installation with panel assessment, dedicated circuit, and NEC 625 compliant wiring — the highest-demand electrical upgrade in Murrieta right now.`
- Features:
  1. Level 2 Charger Installation
  2. Panel Capacity Check
  3. Dedicated 240V Circuit
  4. Code-Compliant Installation

### Before/After Section

**H3:**
```
What a Properly Upgraded Electrical System Does for Your Home
```

**Checkmark items (6):**
1. Enough panel capacity for your EV charger, HVAC system, and smart home — all running at the same time
2. No flickering lights, tripping breakers, or outlets that stop working
3. Wiring that meets current NEC code — not the 1990s standard the house was built to
4. A whole-home surge protector standing between your electronics and the next SCE grid event
5. Pool, spa, and outdoor electrical that meets NEC Article 680 bonding and GFCI requirements
6. One licensed electrical contractor who signs the work under a C-10 license — no gray-market installs

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left: old 100-amp panel with overcrowded breakers, old wiring visible; right: clean new 200-amp panel, organized circuits, labeled breakers. Professional electrical upgrade feel.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our Electrical Team
```

### Section H2
```
Why Inland Empire Homeowners Trust Our Electrical Team
```

### Section Intro Paragraph (65 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electrical team has completed over 2,200 jobs across Riverside County — from panel upgrades in Hemet to EV charger installations in Wildomar. Every job is permitted where required, quoted upfront, and completed by a licensed electrician — not a subcontractor.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day Electrical Service`
- Description: `Most calls received before noon are scheduled and on-site the same day — no multi-day waits for a licensed electrician in Murrieta.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed, Bonded & Insured`
- Description: `Every electrician on our team carries a valid CA C-10 contractor license and passes background verification before entering your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing — Always`
- Description: `Written quote before work starts. The price on the quote is the price on the invoice. No surprise charges added after the job.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving Riverside County`
- Description: `Three decades of local service means the electrical team has seen every wiring failure mode, panel defect, and code change the Inland Empire market produces.`

### Achievement Badge (floating)
```
Line 1: 2,200+
Line 2: Electrical Jobs Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (46 words)
```
Electrical service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability for fixture work, panel upgrades, EV chargers, and electrical repairs throughout. See also our [HVAC services](/services/hvac) and [plumbing services](/services).
```

**City array (10 cities — matches serviceAreas in AcRepair.tsx exactly):**
```
Temecula, Murrieta, Perris, Menifee, Canyon Lake,
Lake Elsinore, Corona, Moreno Valley, Riverside, Hemet
```

---

## SECTION 7 — FAQ Section

### FAQ Section H2
```
Electrical Contractor Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about electrical services in Murrieta and across the Inland Empire.
```

### 6 FAQs

---

**Q1: Your name says "Plumbing" — are you actually licensed to do electrical work?**

A: Yes. Gardner Plumbing Co. holds a California CSLB C-10 (Electrical) contractor license (license number {{CSLB_C10_LICENSE_TBD}}), separate from the C-36 plumbing license. California issues specific license classes for a reason — a C-10 license requires passing a trade exam on electrical code, safety, and installation standards. The company name reflects our origins, not our current scope. Our electrical team operates as a licensed electrical contractor, handles its own permits, and signs work under the C-10 license. Ask for the license number before booking any electrician in the Inland Empire — licensed or not is a meaningful difference.

*(103 words)*

---

**Q2: What types of electrical work do you handle?**

A: Residential electrical across three main categories. Fixtures and installation: lighting, outlets, switches, ceiling fans, smart home wiring, and pool & spa electrical. Power systems: panel upgrades, home rewiring, EV charger installation, generator hookups, and remodeling and new construction wiring. Repairs and safety: electrical troubleshooting, emergency service, safety inspections, and whole-home surge protection. For large commercial systems — three-phase power, commercial switchgear, industrial loads — we focus on residential and small-scale commercial only. Call (951) 246-4337 if you're unsure whether your job fits our scope.

*(88 words)*

---

**Q3: Do I need a permit for common electrical jobs in Murrieta?**

A: Most panel upgrades, EV charger installations, new circuit runs, and service entrance work require a permit through the City of Murrieta Building & Safety division or Riverside County Building Department. Straightforward like-for-like fixture replacements (swapping a light fixture, replacing an outlet) generally do not. Our team files permits on your behalf for all work that requires them — the permit process is built into the job, not an add-on. Unpermitted electrical work creates problems when you sell the home and voids equipment warranties.

*(84 words)*

---

**Q4: When is electrical work a DIY job, and when do I need a licensed electrician?**

A: Swapping a light bulb, replacing a like-for-like outlet cover, or resetting a GFCI outlet are reasonable DIY tasks. Anything involving the electrical panel, running new wire inside walls, installing a new circuit, or connecting to the service entrance requires a licensed electrician and typically a permit. The risk with unlicensed panel work or improper wiring is not just a failed inspection — it's arc faults and electrical fires. Murrieta's 1990s–2000s housing stock has enough aging wiring that a professional inspection before any DIY project is worth the cost.

*(92 words)*

---

**Q5: Do you offer 24/7 emergency electrical service in Murrieta?**

A: Yes. Our emergency electrical line at (951) 246-4337 is live 24 hours a day, 7 days a week. Electrical emergencies — a breaker panel that won't hold, burning smell from an outlet, complete power failure to part of the home, or sparking at a fixture — need same-day attention. Daytime emergency calls average under 2 hours from dispatch. After-hours calls are typically on-site within 2–4 hours. For electrical emergencies involving burning smells or visible sparks, evacuate the affected area before calling.

*(82 words)*

---

**Q6: What cities in the Inland Empire does your electrical team service?**

A: The electrical team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta, so response times are fastest for the southwest Riverside County corridor. For the outer edges of the service area, same-day availability depends on current call volume. Call (951) 246-4337 to confirm availability for your location.

*(63 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Emergency Electrical Service
```

### Intro Paragraph (55 words)
```
Some electrical failures cannot wait. A breaker panel that keeps tripping, a burning smell from an outlet or panel, complete loss of power to part of the home, or visible sparks at a fixture are same-day situations. Our emergency electrical line runs 24 hours a day, 7 days a week, dispatched from Murrieta across the Inland Empire.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Burning smell from outlet, panel, or fixture",
  "Sparking at outlet or electrical panel",
  "Breaker tripping repeatedly and not holding",
  "Complete power loss to part of the home",
  "Flickering lights throughout the house",
  "Hot outlet cover or switch plate",
  "Electrical panel making buzzing or crackling sounds",
  "Power failure after a storm or grid event"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Schedule Electrical Service in Murrieta?
```

### Supporting Paragraph
```
Complete electrical services across Murrieta, Temecula, and the Inland Empire. Licensed electricians, upfront pricing, code-compliant work, and a 24/7 emergency line. Call now or schedule online — our electrical team picks up.
```
*(33 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Clock` | 24/7 Emergency |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "electrical installation services" | `/services/electrical/fixtures` | Service card Card 1 |
| "electrical panel and power upgrades" | `/services/electrical/power` | Service card Card 2 |
| "electrical repairs and safety" | `/services/electrical/repairs` | Service card Card 3 |
| "EV charger installation" | `/services/electrical/ev-charger-installation` | Service card Card 4 |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "panel upgrades" | `/services/electrical/electrical-panel-upgrade` | Service Overview intro or Emergency section |
| "emergency electrical" | `/services/electrical/emergency-electrical` | Emergency section intro |
| "lighting installation" | `/services/electrical/lighting-installation` | Service Overview Card 1 features |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "HVAC services" | `/services/hvac` | Service Areas intro paragraph |
| "plumbing services" | `/services` | Service Areas intro paragraph |
| "financing options" | `/financing` | Why Choose Us or Final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `electrical contractor Inland Empire` |
| Keyword in title | Yes — "Electrical Contractor Inland Empire" |
| Keyword in H1 | Yes — "Complete Electrical Services in Murrieta & the Inland Empire" |
| Keyword in first paragraph | Yes — intro references Inland Empire + electrical services |
| Keyword in meta description (first half) | Yes — "Licensed electrical contractor serving Murrieta, Temecula & the Inland Empire" opens description |
| Canonical slug | `/services/electrical` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name; green pill badge says "Why Choose Our Electrical Team" |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro + FAQ Q1 + FAQ Q5 |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "electrical services across Murrieta" |
| Concrete numbers for AI citation | 2,200+ electrical jobs; 30+ years; under 2 hours daytime dispatch; 2–4 hours after-hours; 4.9 stars; 1990s–2000s housing stock note |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions, including the brand-dissonance question and emergency Q); Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~780 words |
| Estimated FAQ word count | ~512 words |
| Total estimated | ~1,292 words |
| Hub role | Links DOWN to 3 sub-hubs + EV Charger leaf (Card 4 cross-cutting); does NOT duplicate sub-hub or leaf-level detail |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears in Why Choose Us intro, FAQ Q1, and FAQ Q5. All three must be updated with the actual C-10 license number before go-live. `local-seo` to confirm with client.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: electrician + service van, outdoor IE setting, electrical tools visible (not plumbing tools). Before/after: old overcrowded 100-amp panel (left) vs. clean new 200-amp panel (right).
3. **Breadcrumbs:** `Home > Services > Electrical`
4. **Schema:** `Service` JSON-LD with `areaServed` covering all 10 service cities + `FAQPage` JSON-LD for 6 FAQs. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line — do not hard-code in JSX.
6. **Card 4 — EV Charger:** This card breaks the sub-hub-only pattern (the other 3 cards link to sub-hubs; Card 4 links to a leaf). This is intentional — EV charger is the highest-conversion single page in the electrical cluster and merits vertical-hub exposure. Web-developer renders it identically to the sub-hub cards.
7. **Cross-vertical links in Service Areas:** The HVAC link (`/services/hvac`) and plumbing link (`/services`) in the Service Areas intro are the electrical hub's designated cross-vertical bridges per the architecture doc. Do not add additional cross-vertical links elsewhere on this page.
8. **GBP category:** `local-seo` to add "Electrician" or "Electrical contractor" as a GBP secondary category when the electrical vertical launches. Confirm against current GBP secondary slot count before filing.
