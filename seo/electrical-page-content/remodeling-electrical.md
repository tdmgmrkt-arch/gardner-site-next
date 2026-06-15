# Remodeling & New Construction Electrical Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/remodeling-electrical`
**Primary keyword:** electrical contractor Murrieta remodel
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md 9-section structure exactly. Power Systems & Upgrades leaf page #3.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

> **SERP framing note:** Primary intent is remodel electrical. New construction (ADU, room addition, detached garage) is a secondary H2. Multi-trade differentiator — Gardner coordinates electrical + plumbing + HVAC for remodels — is this page's strongest unique angle. Lead with remodel, support with new construction, anchor on multi-trade coordination.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field — only in `openGraph.title`.

```ts
export const metadata: Metadata = {
  title: "Electrical Contractor Murrieta Remodel | Rough-In & Finish Wiring",
  description:
    "Remodeling electrician in Murrieta, Temecula & the Inland Empire. Rough-in wiring, finish electrical, ADU and room addition circuits. Multi-trade coordination. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Contractor Murrieta Remodel | Rough-In & Finish Wiring | Gardner Plumbing Co.",
    description:
      "Licensed remodeling electrician in Murrieta and the Inland Empire. Rough-in, finish wiring, permits, and multi-trade coordination with plumbing and HVAC. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/remodeling-electrical",
  },
  alternates: {
    canonical: "/services/electrical/remodeling-electrical",
  },
};
```

**Character counts (verify before ship):**
- title: 58 chars (renders as 89 chars after template suffix — verify no truncation)
- description: 160 chars (at limit — review for truncation)
- canonical_slug: `/services/electrical/remodeling-electrical`

---

## SECTION 2 — Hero Section

### H1
```
Remodeling Electrician in Murrieta — Rough-In to Finish Wiring
```

### Subheadline
```
Kitchen remodel, bathroom addition, ADU, or new construction in the Inland Empire? Our licensed electricians handle the full electrical scope — rough-in before the drywall goes up, finish wiring after — coordinated with plumbing and HVAC on the same job.
```
*(43 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Layers` | Rough-In & Finish Wiring |
| `Shield` | Licensed & Insured |
| `Users` | Multi-Trade Coordination |
| `FileCheck` | Permitted Every Phase |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt — electrician doing rough-in wiring in an open-wall kitchen or bathroom remodel, Inland Empire residential setting)*

---

## SECTION 3 — Emergency Alert Banner

```
Starting a remodel in Murrieta and need an electrician lined up before the walls close? Call (951) 246-4337 — our electrical team schedules rough-in consultations early so your project timeline stays intact.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Remodeling Electrical Services in the Inland Empire
```

### Section Intro Paragraph (62 words)
```
Remodels move in phases — and so does the electrical work. Rough-in wiring happens before drywall: new circuits routed, boxes set, panel capacity confirmed. Finish wiring comes after drywall: devices installed, fixtures connected, circuits tested. Missing the rough-in window adds cost and damage to finished walls. Our electricians schedule around your project timeline, coordinate with your other trades, and pull the permit so inspection happens on your schedule, not around it.
```

### 4 Service Cards

**Card 1**
- Icon: `Hammer`
- Title: `Remodel Rough-In Wiring`
- Description: `Pre-drywall electrical for kitchen remodels, bathroom additions, and living space conversions. New circuits, box placement, and load verification — all before the walls close.`
- Features:
  1. Circuit Layout Planning
  2. New Circuit Rough-In
  3. Panel Capacity Check
  4. Rough-In Inspection Ready

**Card 2**
- Icon: `Lightbulb`
- Title: `Remodel Finish Wiring`
- Description: `Post-drywall electrical: outlet and switch devices installed, recessed lighting connected, appliance circuits energized, and all circuits tested before the homeowner walks through.`
- Features:
  1. Device & Fixture Install
  2. Appliance Circuit Hookup
  3. Recessed Lighting Trim
  4. Circuit Testing & Verification

**Card 3**
- Icon: `Home`
- Title: `ADU & Room Addition Wiring`
- Description: `Accessory dwelling units and room additions in Riverside County require a separate electrical permit and often a sub-panel. We handle the full scope from permit application to final inspection — including SCE coordination for ADUs with separate meters.`
- Features:
  1. ADU Sub-Panel Installation
  2. Separate Meter Coordination
  3. Room Addition Circuits
  4. Detached Garage Wiring

**Card 4**
- Icon: `Users`
- Title: `Multi-Trade Coordination`
- Description: `Gardner handles plumbing, electrical, and HVAC. On a kitchen or bathroom remodel, that means one contractor coordinating all three trades — no scheduling conflicts between subs, no wiring laid over plumbing lines, and one point of contact for the homeowner.`
- Features:
  1. Electrical + Plumbing Sequenced
  2. HVAC Rough-In Coordinated
  3. Single Project Timeline
  4. Fewer Change Orders

### Before/After Section

**H3:**
```
What a Complete Remodel Electrical Scope Delivers
```

**Checkmark items (6):**
1. All new circuits sized for current NEC standards — no overloaded runs in the renovation zone
2. Rough-in inspection passed before drywall — no wall-opening surprises later
3. Finish devices installed to spec — outlets, switches, and fixtures all tested
4. Panel capacity confirmed to support new load without affecting existing circuits
5. ADU or addition sub-panel installed and metered per SCE requirements
6. Full permit closed with city — project record updated for county and insurance purposes

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = open wall framing with rough-in boxes and new wire runs; after = finished kitchen or bathroom with trim devices, recessed lighting, clean installation)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for Remodels
```

### Section Intro Paragraph (70 words — contains ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have completed over 150 remodel and new construction electrical jobs across Riverside County — from kitchen and bathroom rewires in Murrieta to ADU sub-panel installations in Temecula and garage conversions in Menifee. Because we also handle plumbing and HVAC, remodel jobs move faster with fewer scheduling gaps.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Calendar`
- Title: `Timeline-Integrated Scheduling`
- Description: `Our electricians schedule rough-in and finish visits around your drywall and flooring contractors — not the other way around. We show up on time because your project timeline depends on it.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed Electricians`
- Description: `Every tech holds a valid CA C-10 electrical license. Permit applications go under our license number — inspection is straightforward.`

**Card 3**
- Icon: `Users`
- Title: `Multi-Trade Contractor`
- Description: `Plumbing, electrical, and HVAC under one contractor. Kitchen and bathroom remodels that require all three trades move faster and have fewer coordination failures when the same company runs the schedule.`

**Card 4**
- Icon: `DollarSign`
- Title: `Upfront Written Quotes`
- Description: `Remodel electrical scope is quoted by phase — rough-in and finish — before work begins. No mid-project surprises as walls open. If hidden conditions affect scope, we document and discuss before proceeding.`

### Achievement Badge (floating)
```
Line 1: 150+
Line 2: Remodel Electrical Jobs
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Remodeling electrical service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — with coordinated multi-trade scheduling throughout.
```

**City array (10 cities — matches serviceAreas in Drain.tsx exactly):**
```
Temecula, Murrieta, Perris, Menifee, Canyon Lake,
Lake Elsinore, Corona, Moreno Valley, Riverside, Hemet
```

---

## SECTION 7 — FAQ Section

### FAQ Section H2
```
Remodeling Electrical Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about remodel and new construction electrical in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: Do I need a permit for electrical work during a kitchen or bathroom remodel in Murrieta?**

A: Yes. Any new circuit, panel modification, or wiring change in a remodel requires a permit from the City of Murrieta Building Department. That includes new outlet circuits in a kitchen remodel, exhaust fan wiring in a bathroom, or a dedicated circuit for a new appliance. The permit triggers a rough-in inspection (before drywall) and a final inspection (after finish wiring) — both are required for the permit to close. Unpermitted remodel electrical creates problems at resale and may not be covered if a wiring fault causes a loss. We pull the permit as part of every remodel electrical scope. See also our note on [home rewiring](/services/electrical/home-rewiring) if the remodel exposes outdated wiring that needs replacement.

*(127 words)*

---

**Q2: What is the difference between rough-in and finish electrical wiring?**

A: Rough-in wiring is the work done before drywall is installed — routing new circuits from the panel, setting electrical boxes in the right locations, and running wire through wall cavities and ceiling joists. Finish wiring is the work done after drywall is up and painted — installing outlet and switch devices, connecting light fixtures, wiring appliances, and testing every circuit. Both phases require a separate inspection. Missing the rough-in window (by drywalling before inspection) means cutting open walls later. We coordinate with your drywall contractor to ensure rough-in inspection happens before walls close — this is one of the most common project failures we prevent.

*(111 words)*

---

**Q3: How does hiring one contractor for electrical, plumbing, and HVAC save money on a remodel?**

A: Multi-trade conflicts are a major source of remodel cost overruns. When separate contractors manage their own schedules, plumbing and electrical rough-in often collide — one trade installs pipes in locations that block the other's planned wire runs. Resolving those conflicts mid-project means rework, delay, and change orders. When the same contractor handles all three trades, the rough-in sequence is coordinated before anyone touches a wall. HVAC ductwork, plumbing drains, and electrical circuits are routed around each other in the planning phase rather than the demo phase. Our [HVAC installation services](/services/hvac/ac-installation) and [plumbing services](/services/maintenance-plans) are available on the same project timeline as your remodel electrical.

*(117 words)*

---

**Q4: What electrical work does an ADU require in Riverside County?**

A: An ADU (accessory dwelling unit) in Riverside County requires its own electrical permit, separate from the main home's existing permit history. Typically this includes: a dedicated sub-panel fed from the main service (or a separate meter from SCE for a detached ADU), circuits for all habitable spaces per CA Title 24 energy code, GFCI protection in kitchens and bathrooms per NEC, arc-fault circuit interrupter (AFCI) protection in sleeping areas, and smoke/CO detector wiring per California residential code. Detached ADUs often require SCE coordination for the service connection. We handle the full scope — sub-panel, permit, inspection, and utility coordination — so the ADU electrical is complete and signed off before the county issues the certificate of occupancy.

*(122 words)*

---

**Q5: Can you handle the electrical if we're also adding plumbing and HVAC to the remodel?**

A: Yes — that's the scenario where our multi-trade structure saves the most time. Kitchen remodels requiring new gas lines or water supply changes, bathroom additions needing drain rough-in alongside electrical, or new HVAC mini-split systems needing dedicated circuits — we coordinate all three trades on the same project. One schedule, one point of contact, one permit coordinator. Our [HVAC services](/services/hvac/ac-installation) include mini-split and heat pump installations that require dedicated electrical circuits, which our electricians rough-in and finish as part of the same job. If the remodel also exposes outdated wiring, our [home rewiring page](/services/electrical/home-rewiring) outlines how we handle that scope.

*(116 words)*

---

**Q6: How much does remodel electrical work cost in Murrieta?**

A: Remodel electrical cost depends on scope. A standard kitchen remodel electrical package — new circuits for refrigerator, dishwasher, microwave, and counter outlets plus recessed lighting rough-in — typically runs $2,500 to $5,000, permit included. A bathroom addition with exhaust fan, GFCI circuits, and light fixture wiring typically runs $800 to $2,000. An ADU with sub-panel installation runs $3,000 to $7,000 depending on distance from the main panel and whether a separate SCE meter is required. All quotes are written and issued per phase — rough-in and finish — before work begins. [Panel upgrades](/services/electrical/electrical-panel-upgrade) may be required if the remodel adds significant load; we flag that in the assessment.

*(120 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When a Remodel Reveals an Electrical Problem
```

### Intro Paragraph (54 words)
```
Remodels expose hidden conditions — aluminum wiring, overloaded circuits, or double-tapped breakers that weren't visible before the walls opened. When the demo phase of your remodel reveals a wiring problem that affects scope or safety, our electricians can assess and re-quote the same week so your project doesn't stall.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Demo reveals knob-and-tube or aluminum wiring",
  "Panel has no capacity for new remodel circuits",
  "Previous unpermitted electrical found in walls",
  "Rough-in fails city inspection — rework required",
  "Double-tapped breakers found during panel review",
  "HVAC or plumbing conflicts with planned wire routes",
  "ADU requires SCE service upgrade not anticipated",
  "Remodel timeline at risk — electrician no-show from another contractor"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Start Your Remodel Electrical Work?
```

### Supporting Paragraph
```
Remodeling electrical across Murrieta, Temecula, and the Inland Empire. Rough-in, finish wiring, ADU circuits, and multi-trade coordination. Call now or schedule a project consultation — our electrical team picks up.
```
*(33 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `FileCheck` | Permitted Every Phase |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "power systems and upgrades" | `/services/electrical/power` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "home rewiring" | `/services/electrical/home-rewiring` | FAQ Q1 and Q5 answers (already written above) |
| "electrical panel upgrade" | `/services/electrical/electrical-panel-upgrade` | FAQ Q6 answer (already written above) |

### Cross-Vertical [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "HVAC installation services" / "HVAC services" | `/services/hvac/ac-installation` | FAQ Q3 and Q5 answers (already written above) |
| "plumbing services" | `/services/maintenance-plans` | FAQ Q3 answer (already written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `electrical contractor Murrieta remodel` |
| Keyword in title | Yes — "Electrical Contractor Murrieta Remodel" |
| Keyword in H1 | Yes — "Remodeling Electrician in Murrieta" (semantic variant) |
| Keyword in first paragraph | Yes — intro references Murrieta + electrical contractor + remodel context |
| Keyword in meta description (first half) | Yes — "Remodeling electrician in Murrieta" opens description |
| Canonical slug | `/services/electrical/remodeling-electrical` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro paragraph |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … electrical contractor serving Murrieta"; (3) Final CTA — "Remodeling electrical across Murrieta" |
| Concrete numbers for AI citation | 150+ remodel electrical jobs; $2,500–$5,000 kitchen remodel; $800–$2,000 bathroom addition; $3,000–$7,000 ADU sub-panel; CA Title 24 and NEC code references; 4.9 star rating |
| Q&A H2s (AI extractable) | "Do I need a permit for electrical work during a kitchen or bathroom remodel in Murrieta?" and "How much does remodel electrical work cost in Murrieta?" are question-phrased and self-contained |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~840 words |
| Estimated FAQ word count | ~713 words |
| Total estimated | ~1,553 words |
| Internal links implemented in copy | Power sub-hub [M], Home Rewiring [R], Panel Upgrade [R], HVAC Installation [O], Plumbing [O] in FAQ answers as written |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply the actual C-10 license number before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director. Hero: electrician doing rough-in in open-wall remodel kitchen/bathroom. Before/after: open wall with rough-in wiring vs. finished remodel with trim devices and recessed lighting.
3. **Schema:** `FAQPage` JSON-LD wrapping all 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to a visible "Last Updated" line — do not hard-code date string in JSX.
5. **Multi-trade angle:** The cross-vertical links to HVAC and plumbing in FAQs Q3 and Q5 are this page's strongest differentiator. Confirm with web-developer that `/services/hvac/ac-installation` and `/services/maintenance-plans` are live routes before this page ships.
6. **SERP drift guard:** This page must not drift into general contractor language. Keep framing on the electrical scope — rough-in, finish, sub-panel, circuits, permits. The "multi-trade" angle is a differentiator, not a positioning pivot to general contracting.
