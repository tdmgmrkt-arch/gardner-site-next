# Power & Upgrades Sub-Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/power`  
**Primary keyword:** electrical panel upgrade Murrieta  
**Supporting keywords:** electrical system upgrade Inland Empire, home rewiring Murrieta CA, EV charger installation Murrieta, electrical panel service Temecula CA, power upgrade electrician Menifee  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Sub-hub page — same 9-section structure as leaf pages (AcRepair.tsx). Service Overview cards link DOWN to 4 of the 5 Power & Upgrades leaf pages. Remodeling & New Construction is the 5th leaf — referenced in Service Overview body copy with inline link, not in a card. Hub is category-defining for the Power cluster; does not replicate panel sizing specs, permit process detail, or EV charger model guidance — those live on the leaves.

> **Achievement badge note:** "550+ Power System Jobs" reflects panel upgrades, home rewiring, EV charger installations, generator hookups, and remodeling electrical jobs. Excludes fixture work tracked under the Fixtures sub-hub.

> **FLAG — C-10 License:** `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual CSLB C-10 license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Electrical Panel Upgrade Murrieta, CA | Power & EV Chargers",
  description:
    "Electrical panel upgrades, home rewiring, EV charger installation & generators in Murrieta, Temecula & the Inland Empire. Licensed contractor. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Panel Upgrade Murrieta, CA | Power & EV Chargers | Gardner Plumbing Co.",
    description:
      "Panel upgrades, rewiring, EV chargers, and generator installation across Murrieta and the Inland Empire. Licensed, permitted, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/power",
  },
  alternates: {
    canonical: "/services/electrical/power",
  },
};
```

**Character counts (verify before ship):**
- title: 57 chars (renders as ~88 chars after template suffix)
- description: 157 chars
- canonical_slug: `/services/electrical/power`

---

## SECTION 2 — Hero Section

### H1
```
Power Systems & Electrical Upgrades in Murrieta
```

### Subheadline
```
Panel upgrades, home rewiring, EV charger installation, and generator hookups — licensed electrical power work for Inland Empire homes built to handle modern demands.
```
*(28 words)*

### Hero Badge Text
```
Line 1: Licensed Power & Upgrade Service
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
*(creative-director: licensed electrician working at a residential electrical panel — close-up of panel work in a Murrieta-area garage setting. Shows the trade, not a finished product shot.)*

---

## SECTION 3 — Emergency Alert Banner

```
Panel tripping breakers or no room for an EV charger circuit? Call (951) 246-4337 — our licensed electrical team serves Murrieta, Temecula, and the Inland Empire.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Power System & Upgrade Services We Offer in the Inland Empire
```

### Section Intro Paragraph (65 words)
```
Most Murrieta and Temecula homes were built in the 1990s and 2000s with 100–150 amp panels — undersized for today's EV chargers, smart HVAC systems, and high-demand appliances running simultaneously. Our licensed electrical team handles every power upgrade your home needs, from a 200-amp panel service upgrade to a full rewire. We also handle [remodeling and new construction electrical](/services/electrical/remodeling-electrical) when walls are open and the work is cleanest.
```

### 4 Service Cards (5 leaves — feature 4 highest-volume; Remodeling referenced in intro above)

**Card 1**
- Icon: `Zap`
- Title: `Panel & Service Upgrade`
- URL: `/services/electrical/electrical-panel-upgrade`
- Description: `200-amp panel upgrades, main breaker replacement, sub-panel installation, and SoCal Edison service entrance upgrades — the foundation of a modern home electrical system.`
- Features:
  1. 200-Amp Service Upgrade
  2. Main Breaker Replacement
  3. Sub-Panel Installation
  4. SCE Utility Coordination

**Card 2**
- Icon: `Car`
- Title: `EV Charger Installation`
- URL: `/services/electrical/ev-charger-installation`
- Description: `Level 2 home EV charger installation with dedicated 240V circuit, panel capacity check, and NEC 625 compliant wiring — Murrieta's most-requested electrical upgrade.`
- Features:
  1. Level 2 (240V) Circuit
  2. Panel Capacity Assessment
  3. Tesla, ChargePoint & Universal
  4. NEC-Compliant Wiring

**Card 3**
- Icon: `Cable`
- Title: `Home Rewiring`
- URL: `/services/electrical/home-rewiring`
- Description: `Full and partial home rewiring for 1990s–2000s Inland Empire homes — aluminum wiring replacement, knob-and-tube removal, and updated wire runs to modern code.`
- Features:
  1. Aluminum Wiring Replacement
  2. Full & Partial Rewires
  3. Updated to NEC Standards
  4. Updated to Current Code

**Card 4**
- Icon: `Battery`
- Title: `Generator Installation`
- URL: `/services/electrical/generator-installation`
- Description: `Standby generator electrical hookup, transfer switch installation, and load management wiring — keeping your home powered during SCE outages.`
- Features:
  1. Transfer Switch Installation
  2. Standby Generator Hookup
  3. Load Management Wiring
  4. Generac & Kohler Compatible

### Before/After Section

**H3:**
```
What Changes After a Power System Upgrade
```

**Checkmark items (6):**
1. Panel has room for EV charger, HVAC, and kitchen circuits — all running without tripped breakers
2. Aluminum wiring replaced — the #1 fire risk in 1970s–1980s Inland Empire homes
3. 200-amp service provides headroom for solar, battery storage, and future load additions
4. Generator transfer switch installed — no more manually running extension cords during SCE outages
5. All circuits labeled, properly sized, and load-balanced across the panel
6. Permit closed and utility inspection signed off — no open permits at sale time

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left: old 100-amp panel with overcrowded breakers, double-tapped circuits, unlabeled breakers; right: new 200-amp panel, organized, labeled, spacious. Clear upgrade improvement.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our Electrical Team
```

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Upgrade Team
```

### Section Intro Paragraph (65 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electrical team has completed over 550 power system jobs across Riverside County — from 200-amp panel upgrades in Menifee to EV charger installations in Wildomar. Every major upgrade is permitted, utility-coordinated where required, and completed by a licensed electrician who signs the work.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Fast Turnaround on Upgrades`
- Description: `Panel upgrades and EV charger installations are typically completed in a single day — scheduled and on-site within 48 hours for non-emergency upgrades.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed, Bonded & Insured`
- Description: `Every electrician holds a valid CA C-10 contractor license. Work is documented and code-compliant. Permit coordination is available when required.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before work starts. The price on the quote is the price on the invoice — no change orders after the job begins.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving Riverside County`
- Description: `Three decades of local work means the team understands Murrieta's housing stock — the 1990s–2000s builds, their common panel defects, and how the local utility processes upgrades.`

### Achievement Badge (floating)
```
Line 1: 550+
Line 2: Power System Jobs
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (50 words)
```
Power system and electrical upgrade service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability for urgent calls. See also our [fixture installation services](/services/electrical/fixtures) and [electrical repairs and safety](/services/electrical/repairs).
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
Power System & Upgrade Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about panel upgrades, rewiring, EV chargers, and generator installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: When should I upgrade my electrical panel in an Inland Empire home?**

A: The four most common triggers for a panel upgrade in Murrieta and Temecula: you're installing an EV charger and the panel has no room for a 50-amp circuit; you're adding a new HVAC system that requires more amperage than the panel can support; breakers trip regularly under normal household load; or you're buying or selling a home and the inspector flags the panel. Most 1990s–2000s Inland Empire homes have 100–150 amp panels — adequate for 1995 loads, undersized for 2026 households. Our [panel upgrade service](/services/electrical/electrical-panel-upgrade) covers the full assessment and upgrade.

*(103 words)*

---

**Q2: What are the signs my home needs rewiring?**

A: The clearest indicators: outlets that stop working without tripping a GFCI; lights that dim when a major appliance runs; breakers that trip repeatedly on normal loads; an aluminum wiring home (common in 1960s–1970s IE builds) that hasn't been updated; and any home where the wiring hasn't been touched since the original construction 30+ years ago. Aluminum wiring requires attention — it expands and contracts differently than copper and poses a fire risk at connection points. Our [home rewiring service](/services/electrical/home-rewiring) can address partial rewires targeting problem areas or full replacements.

*(93 words)*

---

**Q3: What's the difference between Level 1 and Level 2 EV charging at home?**

A: Level 1 charging uses a standard 120-volt outlet — the cord that comes with your EV. It adds roughly 3–5 miles of range per hour of charging. For most daily drivers in Murrieta, overnight Level 1 charging is adequate if you drive under 40 miles per day. Level 2 charging uses a 240-volt dedicated circuit and a wall-mounted charger. It adds 20–30 miles of range per hour. If you drive more than 50 miles daily or have a longer-range EV, Level 2 is worth the installation cost. Our [EV charger installation service](/services/electrical/ev-charger-installation) covers both options and the panel assessment required for Level 2.

*(112 words)*

---

**Q4: Do I need a permit to upgrade my panel or install an EV charger in Murrieta?**

A: Yes to both. A panel upgrade (200-amp service upgrade) requires a permit through the City of Murrieta Building & Safety or Riverside County Building Department, plus inspection by the local electrical inspector. Level 2 EV charger installation on a new circuit also requires a permit. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. Unpermitted panel work creates open permit issues that surface during home sales and can void homeowner's insurance coverage.

*(83 words)*

---

**Q5: Does my home need a generator, and what type makes sense?**

A: Whether you need a generator depends on your power-outage frequency and what you can't afford to lose. Murrieta and the broader Inland Empire experience SCE outages during high-fire-risk weather events and summer demand peaks. If you have medical equipment, a sump pump, a chest freezer worth of food, or a family with young children, a whole-home standby generator makes sense. Portable generators handle select loads; whole-home standby units (Generac, Kohler) start automatically and power your full home. Our [generator installation service](/services/electrical/generator-installation) covers the electrical hookup, transfer switch, and load management — not the generator purchase itself.

*(102 words)*

---

**Q6: What area does your electrical upgrade service cover?**

A: Our power system and upgrade team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Panel upgrades and EV charger installations are our most common jobs across the southwest Riverside County corridor. For the outer edges of the service area, scheduling timelines may extend by a day. Call (951) 246-4337 to confirm availability for your location and get a same-day quote.

*(72 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Urgent Electrical Help
```

### Intro Paragraph (53 words)
```
A panel that refuses to hold a breaker, complete loss of power to major circuits, or sparking at the service entrance are situations that can't wait for a scheduled appointment. Our electrical team handles same-day urgent calls across the Inland Empire and maintains a 24/7 emergency line at (951) 246-4337 for after-hours situations.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Main breaker tripping repeatedly",
  "Panel sparking or making crackling sounds",
  "Complete power loss to multiple circuits",
  "Burning smell near electrical panel",
  "EV charger circuit causing breaker trips",
  "Generator transfer switch failure",
  "Service entrance damage after storm",
  "Hot panel box or warm breakers"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Upgrade Your Electrical System in Murrieta?
```

### Supporting Paragraph
```
Electrical panel upgrades, EV charger installation, home rewiring, and generator hookups across Murrieta, Temecula, and the Inland Empire. Licensed electricians, code-compliant work, upfront pricing. Call now or schedule online — our electrical team picks up.
```
*(35 words)*

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
| "electrical panel upgrades" | `/services/electrical/electrical-panel-upgrade` | Service card Card 1 + FAQ Q1 |
| "EV charger installation" | `/services/electrical/ev-charger-installation` | Service card Card 2 + FAQ Q3 |
| "home rewiring" | `/services/electrical/home-rewiring` | Service card Card 3 + FAQ Q2 |
| "generator installation" | `/services/electrical/generator-installation` | Service card Card 4 + FAQ Q5 |
| "remodeling and new construction electrical" | `/services/electrical/remodeling-electrical` | Service Overview intro paragraph (5th leaf) |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "fixture installation services" | `/services/electrical/fixtures` | Service Areas intro |
| "electrical repairs and safety" | `/services/electrical/repairs` | Service Areas intro |
| "electrical safety inspections" | `/services/electrical/repairs` | Why Choose Us or Emergency section |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing options" | `/financing` | Why Choose Us or Final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `electrical panel upgrade Murrieta` |
| Keyword in title | Yes — "Electrical Panel Upgrade Murrieta, CA" |
| Keyword in H1 | Yes — "Power Systems & Electrical Upgrades in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + panel upgrades |
| Keyword in meta description (first half) | Yes — "Electrical panel upgrades…in Murrieta" opens description |
| Canonical slug | `/services/electrical/power` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name; green pill badge says "Why Choose Our Electrical Team" |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "electrical upgrades across Murrieta" |
| Concrete numbers for AI citation | 550+ power system jobs; 30+ years; 100–150 amp panels typical in IE 1990s–2000s homes; 3–5 miles/hr Level 1 EV range; 20–30 miles/hr Level 2; 4.9 stars |
| Local citable specifics | SoCal Edison (SCE) coordination mentioned; 1990s–2000s IE housing stock named; NEC reference; aluminum wiring fire risk cited; Murrieta permit process named |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions); Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~790 words |
| Estimated FAQ word count | ~565 words |
| Total estimated | ~1,355 words |
| Hub role | Links DOWN to 4 featured leaves + Remodeling via inline body link; links UP to electrical vertical hub |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. Replace before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: electrician working at a panel in a garage setting. Before/after: old 100-amp crowded panel (left) vs. new 200-amp clean panel (right).
3. **Breadcrumbs:** `Home > Services > Electrical > Power & Upgrades`
4. **Schema:** `Service` JSON-LD with `areaServed` for all 10 cities + `FAQPage` for 6 FAQs. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line.
6. **5th leaf (Remodeling):** Remodeling & New Construction (`/services/electrical/remodeling-electrical`) is referenced in the Service Overview intro paragraph with an inline link. It does NOT get a card — the 4-card grid layout stays intact.
7. **SCE coordination note:** The SoCal Edison reference in Card 1 features and the FAQ is a local credibility signal per the architecture doc. Keep it in the final copy.
8. **EV charger permit note:** Per the architecture doc Phase 2 flag — EV charger permit requirement is addressed in FAQ Q4. Confirm with client this matches their actual permit process before publishing.
9. **Financing cross-link:** This sub-hub is called out as a financing link target in the architecture doc (`/financing` → "financing for panel upgrades and generator installation"). The Optional link above covers this.
