# Repairs & Safety Sub-Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/repairs`  
**Primary keyword:** electrical repair Murrieta  
**Supporting keywords:** electrician repairs Inland Empire, electrical troubleshooting Murrieta, emergency electrician Menifee CA, electrical safety inspection Temecula, surge protection installation Murrieta  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Sub-hub page — same 9-section structure as leaf pages (AcRepair.tsx). This hub covers 4 leaves (Electrical Repairs, Emergency Electrical, Safety Inspections, Surge Protection) — all 4 featured in service cards, no 5th card to omit. Hub serves two visitor types simultaneously: emergency/transactional (something is broken now) and commercial/proactive (inspections and surge protection). Both audiences are addressed directly in the content.

> **Achievement badge note:** "1,100+ Repairs & Inspections" reflects the combined count of electrical repair calls, emergency dispatches, safety inspections, and surge protection installations. The repair + inspection count is deliberately grouped because these services frequently combine on a single visit.

> **FLAG — C-10 License:** `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual CSLB C-10 license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Electrical Repair Murrieta, CA | 24/7 Emergency Electrician",
  description:
    "Electrical repairs, 24/7 emergency electrician, safety inspections & surge protection in Murrieta, Temecula & the Inland Empire. Call (951) 246-4337 now.",
  openGraph: {
    title: "Electrical Repair Murrieta, CA | 24/7 Emergency Electrician | Gardner Plumbing Co.",
    description:
      "Electrical repairs and 24/7 emergency electrical service across Murrieta and the Inland Empire. Safety inspections, surge protection. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/repairs",
  },
  alternates: {
    canonical: "/services/electrical/repairs",
  },
};
```

**Character counts (verify before ship):**
- title: 57 chars (renders as ~88 chars after template suffix)
- description: 152 chars
- canonical_slug: `/services/electrical/repairs`

---

## SECTION 2 — Hero Section

### H1
```
Electrical Repairs & Safety in Murrieta
```

### Subheadline
```
Electrical troubleshooting, 24/7 emergency electrician, safety inspections, and whole-home surge protection — serving Murrieta, Temecula, Menifee, and the Inland Empire.
```
*(27 words)*

### Hero Badge Text
```
Line 1: 24/7 Emergency Electrical
Line 2: Murrieta & Inland Empire
```

### 4 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Clock` | 24/7 Emergency Response |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Pricing |
| `Phone` | Live Dispatch Line |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: licensed electrician diagnosing an electrical problem at a residential panel or outlet — IE home interior setting. Diagnostic/repair feel, not installation.)*

---

## SECTION 3 — Emergency Alert Banner

```
Electrical emergency in Murrieta? Call (951) 246-4337 — our licensed electricians respond 24/7, including nights and weekends across the Inland Empire.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Electrical Repair & Safety Services We Provide in the Inland Empire
```

### Section Intro Paragraph (62 words)
```
Inland Empire homes built in the 1990s and 2000s have wiring, panels, and outlets that are now 25–30 years old. At that age, electrical problems become more frequent — and more important to address before they become hazards. Whether something is broken right now or you want a proactive inspection before it fails, our licensed electrical team covers both ends of the spectrum.
```

### 4 Service Cards — all 4 leaves featured

**Card 1**
- Icon: `Wrench`
- Title: `Electrical Repairs`
- URL: `/services/electrical/electrical-repairs`
- Description: `Diagnosis and repair for tripping breakers, flickering lights, dead outlets, wiring faults, and circuit overloads — Murrieta's most common electrical repair calls.`
- Features:
  1. Breaker Diagnosis & Repair
  2. Flickering Lights Fix
  3. Dead Outlet Troubleshooting
  4. Wiring Fault Diagnosis

**Card 2**
- Icon: `AlertTriangle`
- Title: `Emergency Electrical`
- URL: `/services/electrical/emergency-electrical`
- Description: `24/7 emergency electrician for sparking outlets, burning smells, panel failures, and complete power loss — dispatched from Murrieta across the Inland Empire.`
- Features:
  1. 24/7 Live Dispatch
  2. Same-Night Response
  3. Weekend & Holiday Coverage
  4. Murrieta-Based — Fast Response

**Card 3**
- Icon: `ClipboardCheck`
- Title: `Safety Inspections`
- URL: `/services/electrical/electrical-safety-inspection`
- Description: `Full home electrical safety audit — panel condition, wiring age, GFCI coverage, code compliance, and fire risk assessment for Inland Empire homeowners.`
- Features:
  1. Panel Condition Review
  2. GFCI Coverage Audit
  3. Wiring Age Assessment
  4. Written Inspection Report

**Card 4**
- Icon: `ShieldCheck`
- Title: `Surge Protection`
- URL: `/services/electrical/surge-protection`
- Description: `Whole-home surge protection device (SPD) installation at the main panel — one device that guards every circuit in the house from SCE grid events.`
- Features:
  1. Whole-Home SPD Install
  2. Panel-Level Protection
  3. Electronics & Appliance Guard
  4. SCE Grid Event Defense

### Before/After Section

**H3:**
```
What Changes After a Professional Electrical Repair or Inspection
```

**Checkmark items (6):**
1. Tripping breakers diagnosed and fixed — not just reset and hoped for the best
2. Dead outlets traced to the source — loose connection, failed GFCI, or wiring fault identified and repaired
3. GFCI protection confirmed in every required location: kitchen, bathroom, garage, and outdoor circuits
4. Panel documented — labeled breakers, no double-tapped circuits, no breakers showing signs of overheating
5. Whole-home surge protector installed — every circuit in the house protected from the next utility event
6. Written inspection report: what was found, what was repaired, and what to monitor going forward

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left: scorched outlet cover or tripped breaker panel with obvious problem; right: repaired outlet or clean panel with electrician showing signed inspection report. Repair + safety feel.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our Electrical Team
```

### Section H2
```
Why Murrieta Homeowners Call Our Electrical Repair Team
```

### Section Intro Paragraph (65 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electrical team has completed over 1,100 repairs and inspections across Riverside County — from troubleshooting tripping breakers in Perris to whole-home safety inspections in Hemet. Every repair is diagnosed to the root cause, not just reset. Every inspection produces a written report.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `24/7 Emergency Dispatch`
- Description: `The emergency line at (951) 246-4337 is live 24 hours a day. Daytime calls average under 2 hours dispatch. After-hours calls are typically on-site within 2–4 hours.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed, Bonded & Insured`
- Description: `Every electrician holds a valid CA C-10 contractor license and passes background verification. No unlicensed repair work — the license is on every invoice.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Repair Pricing`
- Description: `Diagnostic fee quoted before work begins. Repair cost quoted after diagnosis — before any work starts. No surprise charges on a repair call.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving Riverside County`
- Description: `Three decades of local work means the team has diagnosed every common failure mode in Inland Empire homes — the wiring faults that age produces, the panels that overheat.`

### Achievement Badge (floating)
```
Line 1: 1,100+
Line 2: Repairs & Inspections
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (50 words)
```
Electrical repair and safety service is available across the Inland Empire, with 24/7 emergency dispatch from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet. See also our [fixture installation services](/services/electrical/fixtures) and [power system upgrades](/services/electrical/power) for other electrical needs.
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
Electrical Repair & Safety Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about electrical repairs, emergency service, inspections, and surge protection in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What are the most common electrical problems in Inland Empire homes?**

A: The five most frequent repair calls we see across Murrieta, Temecula, and Menifee: breakers that trip under normal load (often a sign of a failing breaker or overloaded circuit), outlets that stop working without a visible GFCI trip (loose connection or a tripped GFCI upstream), flickering lights that aren't a bulb issue (loose connection or a failing circuit), arc fault trips in bedroom circuits (AFCI breakers doing their job — but pointing to a wiring issue), and outdoor outlets that go dead after rain (GFCI failure or water intrusion). Most of these are diagnosed and repaired in a single visit.

*(101 words)*

---

**Q2: When is an electrical problem an emergency vs. a scheduled repair?**

A: Treat it as an emergency — call (951) 246-4337 now — if you see or smell any of these: burning smell from an outlet, switch, or panel; sparking at any electrical device or the panel; breakers that trip and immediately trip again when reset; complete power loss to a portion of the home with no clear cause; or a hot outlet cover or switch plate. Schedule a standard repair appointment for: breakers that trip occasionally under heavy load, outlets that stop working, or lights that flicker intermittently. The first list involves active hazard potential. The second list is inconvenient but not immediately dangerous.

*(105 words)*

---

**Q3: How often should I get an electrical safety inspection in Murrieta?**

A: For homes built before 2005 in the Inland Empire, every 5–7 years is a reasonable cadence for a full electrical safety audit. For homes with older wiring (1960s–1980s builds with aluminum wiring or original panels) and homes that haven't had an inspection in over 10 years, every 3–5 years is more appropriate. Pre-purchase inspections are strongly recommended before buying any Murrieta or Temecula home — an electrical inspection goes beyond what a standard home inspector covers. Our [safety inspection service](/services/electrical/electrical-safety-inspection) includes a written report you can use in negotiations or for insurance purposes.

*(98 words)*

---

**Q4: Is whole-home surge protection worth it?**

A: For Inland Empire homes, yes. SoCal Edison's grid experiences voltage events during high-demand summer periods and during the shut-off events tied to fire risk weather. A panel-level surge protection device (SPD) costs $300–$600 installed and protects every circuit in the house in a single installation. Point-of-use power strips protect the devices plugged into them — not the appliances, HVAC systems, or smart devices on other circuits. A whole-home SPD does both. Homes with EV chargers, solar inverters, and smart appliances have significantly more at risk from a surge event than a 2005-era home with basic appliances.

*(99 words)*

---

**Q5: What is the difference between an electrical repair and a rewiring project?**

A: A repair addresses a specific failure: a bad outlet, a failing breaker, a loose connection, a tripped GFCI that won't reset. The scope is limited to the problem and its immediate cause. A rewiring project addresses the wiring system itself — replacing wire runs that have degraded, removing aluminum wiring from connection points, or updating the entire home from an older wiring standard to current NEC code. Repairs are typically completed in a single visit. Rewiring is a multi-day project involving permit and inspection. Our electricians will tell you clearly at diagnosis which category your situation falls into. See our [home rewiring service](/services/electrical/home-rewiring) for full-scope rewiring.

*(111 words)*

---

**Q6: What area does your electrical repair and safety service cover?**

A: The repair and safety team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Emergency dispatch is based in Murrieta — daytime response is typically under 2 hours for southwest Riverside County. For the outer service area cities, same-day emergency availability depends on current call volume. Call (951) 246-4337 to confirm your location and get a dispatch time estimate.

*(69 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Emergency Electrical Service
```

### Intro Paragraph (56 words)
```
A burning smell from an outlet, sparks at the panel, a breaker that won't hold, or complete power loss to a section of your home — these aren't problems to wait on. Our licensed emergency electricians are dispatched from Murrieta 24 hours a day, 7 days a week. Call (951) 246-4337 and describe what you're seeing.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Burning smell from outlet or electrical panel",
  "Sparking at outlet, switch, or panel",
  "Breaker tripping immediately after reset",
  "Complete power loss to part of the home",
  "Hot outlet cover or switch plate",
  "Electrical panel making buzzing or crackling sounds",
  "Flickering lights throughout the entire home",
  "Power failure following a storm or surge event"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Solve Your Electrical Problem in Murrieta?
```

### Supporting Paragraph
```
Electrical repairs, 24/7 emergency service, safety inspections, and surge protection across Murrieta, Temecula, and the Inland Empire. Licensed electricians, upfront pricing. Call now or schedule online — our electrical team picks up.
```
*(32 words)*

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
| "all electrical services" | `/services/electrical` | Service Areas intro or Why Choose Us |
| "electrical repairs" | `/services/electrical/electrical-repairs` | Service card Card 1 |
| "24/7 emergency electrician" | `/services/electrical/emergency-electrical` | Service card Card 2 + Emergency section intro |
| "electrical safety inspections" | `/services/electrical/electrical-safety-inspection` | Service card Card 3 + FAQ Q3 |
| "whole-home surge protection" | `/services/electrical/surge-protection` | Service card Card 4 + FAQ Q4 |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "safety inspection service" | `/services/electrical/electrical-safety-inspection` | FAQ Q3 answer (already written above) |
| "home rewiring service" | `/services/electrical/home-rewiring` | FAQ Q5 answer (already written above) |
| "fixture installation services" | `/services/electrical/fixtures` | Service Areas intro |
| "power system upgrades" | `/services/electrical/power` | Service Areas intro |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "electrical panel upgrades" | `/services/electrical/electrical-panel-upgrade` | Why Choose Us or Emergency section — panel failures often point to upgrade need |
| "financing options" | `/financing` | Why Choose Us or Final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `electrical repair Murrieta` |
| Keyword in title | Yes — "Electrical Repair Murrieta, CA" |
| Keyword in H1 | Yes — "Electrical Repairs & Safety in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + electrical problems (repair intent) |
| Keyword in meta description (first half) | Yes — "Electrical repairs…in Murrieta" opens description |
| Canonical slug | `/services/electrical/repairs` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name; green pill badge says "Why Choose Our Electrical Team" |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "electrical repairs across Murrieta" |
| Concrete numbers for AI citation | 1,100+ repairs & inspections; 30+ years; under 2 hours daytime dispatch; 2–4 hours after-hours; 5–7 year inspection cadence; 3–5 year for older homes; $300–$600 surge protector installed; 4.9 stars |
| Local citable specifics | SoCal Edison grid/fire weather outages named; 1990s–2000s IE housing stock + wiring age; NEC AFCI/GFCI requirements referenced; aluminum wiring fire risk mentioned |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions); Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~770 words |
| Estimated FAQ word count | ~583 words |
| Total estimated | ~1,353 words |
| Hub role | Links DOWN to all 4 Repairs & Safety leaves; links UP to electrical vertical hub |
| Dual audience served | Emergency/transactional (Repairs + Emergency cards; emergency banner; FAQ Q2) and Commercial/proactive (Inspections + Surge Protection cards; FAQ Q3, Q4) |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. Replace before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: electrician diagnosing at an outlet or panel in an IE home interior. Before/after: scorched outlet or problem panel (left) vs. repaired outlet or signed inspection report (right).
3. **Breadcrumbs:** `Home > Services > Electrical > Repairs & Safety`
4. **Schema:** `Service` JSON-LD with `areaServed` for all 10 cities + `FAQPage` for 6 FAQs. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line.
6. **Dual audience layout consideration:** The architecture doc recommends a two-column visual grouping: "Need help now?" (Electrical Repairs + Emergency Electrical cards) vs. "Protect your home" (Safety Inspections + Surge Protection cards). The 4 cards can be rendered in standard grid order (Card 1–4 as written) — but if the developer can apply a visual sub-header or divider between Cards 2 and 3, that reinforces the intent split. Flag to web-developer as an optional layout enhancement.
7. **Emergency card placement:** Card 2 is Emergency Electrical. Given this hub's dual audience, consider whether the developer wants to visually promote the Emergency card to the top on mobile — matching the urgency of the hero banner. Flag as optional UI decision.
8. **Surge protection cost in FAQ Q4:** The $300–$600 installed range is a 2026 Inland Empire market estimate. Confirm with client before publishing.
9. **Cross-link to home rewiring:** FAQ Q5 links to `/services/electrical/home-rewiring` — this is a Power sub-hub leaf, not a Repairs leaf. This cross-cluster link is correct per the architecture matrix (MS-1 → home-rewiring is listed as [O]). Keep it.
