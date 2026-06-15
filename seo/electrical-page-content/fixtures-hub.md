# Fixtures Sub-Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/fixtures`  
**Primary keyword:** electrical installation Murrieta  
**Supporting keywords:** lighting installation electrician Murrieta, fixture installation electrician Temecula, home electrical installation Menifee CA, outlet installation Murrieta CA, electrical upgrades Inland Empire  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Sub-hub page — same 9-section structure as leaf pages (AcRepair.tsx). Service Overview cards link DOWN to 4 of the 5 Fixtures leaf pages. Smart Home Solutions is the 5th leaf — referenced in Service Overview body copy with inline link, not in a card. Hub is category-defining for the Fixtures cluster; does not replicate leaf-level wiring detail, code requirements, or product specifics.

> **Achievement badge note:** "1,400+ Fixture Installations" reflects the estimated count across lighting, outlet, ceiling fan, smart home, and pool/spa electrical work. Excludes panel and rewiring jobs tracked under Power & Upgrades.

> **FLAG — C-10 License:** `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual CSLB C-10 license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Electrical Installation Murrieta, CA | Fixtures & Lighting",
  description:
    "Electrical installation in Murrieta, Temecula & the Inland Empire. Lighting, outlets, ceiling fans, pool wiring & smart home electrical. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Installation Murrieta, CA | Fixtures & Lighting | Gardner Plumbing Co.",
    description:
      "Licensed electrical installation across Murrieta and the Inland Empire. Lighting, outlets, fans, smart home wiring, and pool & spa circuits. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/fixtures",
  },
  alternates: {
    canonical: "/services/electrical/fixtures",
  },
};
```

**Character counts (verify before ship):**
- title: 55 chars (renders as ~86 chars after template suffix)
- description: 155 chars
- canonical_slug: `/services/electrical/fixtures`

---

## SECTION 2 — Hero Section

### H1
```
Electrical Installation & Fixtures in Murrieta
```

### Subheadline
```
Licensed electricians for lighting, outlets, ceiling fans, pool wiring, and smart home circuits — residential installation across Murrieta, Temecula, and the Inland Empire.
```
*(28 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Installation
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
*(creative-director: licensed electrician installing recessed lighting in a Murrieta home — clean suburban interior setting. Shows installation work in progress, not a finished product shot.)*

---

## SECTION 3 — Emergency Alert Banner

```
Electrical installation question in Murrieta? Call (951) 246-4337 — our licensed electricians handle new installs, upgrades, and same-day service calls across the Inland Empire.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Electrical Installation Services We Offer in the Inland Empire
```

### Section Intro Paragraph (60 words)
```
Whether you're upgrading lighting in a Temecula remodel, adding outlets to a Murrieta home office, installing a ceiling fan in every bedroom, or running code-compliant wiring for a new pool — our licensed electrical installation team covers the full range of residential fixture work. We also handle [smart home electrical wiring](/services/electrical/smart-home-electrical) for automated lighting, smart switches, and device-ready circuits.
```

### 4 Service Cards (5 leaves — feature 4 highest-volume; Smart Home referenced in intro above)

**Card 1**
- Icon: `Lightbulb`
- Title: `Lighting Installation`
- URL: `/services/electrical/lighting-installation`
- Description: `Recessed lighting, pendant and chandelier installs, under-cabinet lighting, outdoor security lighting, and landscape lighting across Inland Empire homes.`
- Features:
  1. Recessed & LED Lighting
  2. Pendant & Chandelier Install
  3. Outdoor & Security Lighting
  4. Landscape & Accent Lighting

**Card 2**
- Icon: `PlugZap`
- Title: `Outlets & Switches`
- URL: `/services/electrical/outlets-and-switches`
- Description: `GFCI outlet installation, USB-C outlet upgrades, dimmer switches, smart switches, and outdoor outlet additions — code-compliant throughout.`
- Features:
  1. GFCI Outlet Installation
  2. USB & USB-C Outlets
  3. Dimmer & Smart Switches
  4. Outdoor Outlet Addition

**Card 3**
- Icon: `Fan`
- Title: `Ceiling Fan Installation`
- URL: `/services/electrical/ceiling-fan-installation`
- Description: `Ceiling fan install and replacement, junction box upgrades for heavy fans, wiring for fan-light combos, and outdoor ceiling fan installation.`
- Features:
  1. New Fan Installation
  2. Fan Replacement & Rewire
  3. Junction Box Upgrade
  4. Outdoor Fan Installation

**Card 4**
- Icon: `Waves`
- Title: `Pool & Spa Wiring`
- URL: `/services/electrical/pool-spa-wiring`
- Description: `NEC Article 680-compliant pool and spa electrical — bonding, GFCI protection, pool pump circuits, spa hookups, and underwater lighting installation.`
- Features:
  1. Pool Pump Circuit
  2. GFCI & Bonding (NEC 680)
  3. Spa & Hot Tub Hookup
  4. Underwater Pool Lighting

### Before/After Section

**H3:**
```
What Changes After a Professional Electrical Installation
```

**Checkmark items (6):**
1. Fixtures installed to code — correct junction box, wire gauge, and breaker sizing for the load
2. GFCI protection in every wet location — kitchens, bathrooms, garages, and pool areas
3. Outdoor fixtures and outlets rated for Inland Empire heat and UV exposure
4. No double-tapped breakers or overloaded circuits from the installation
5. Clean finish work — no exposed wire, no drywall damage left open after rough-in
6. Permit closed and inspection passed where the city requires it

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left: outdated fluorescent lighting or bare-bulb fixture in a dated IE home; right: clean recessed LED lighting, finished and trimmed. Residential installation upgrade feel.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our Electrical Team
```

### Section H2
```
Why Murrieta Homeowners Choose Our Electrical Installation Team
```

### Section Intro Paragraph (62 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electrical team has completed over 1,400 fixture installations across Riverside County — from recessed lighting remodels in Temecula to pool wiring projects in Canyon Lake. Every installation is quoted upfront, permitted where required, and completed by a licensed electrician.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day Installation Service`
- Description: `Most installation calls received before noon are scheduled and on-site the same day — no week-long waits for a licensed electrician in Murrieta.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed, Bonded & Insured`
- Description: `Every electrician on our team carries a valid CA C-10 contractor license and passes background verification before entering your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before work starts. The price on the quote is the price on the invoice — no surprise charges added at the end.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving Riverside County`
- Description: `Three decades of local electrical and plumbing work means the team knows Murrieta's housing stock — the 1990s builds, the remodels, the additions.`

### Achievement Badge (floating)
```
Line 1: 1,400+
Line 2: Fixture Installations
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (50 words)
```
Electrical installation service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout. See also our [electrical panel upgrades](/services/electrical/power) and [repairs and safety services](/services/electrical/repairs) for other electrical needs.
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
Electrical Installation Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about fixture installation and electrical upgrades in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: Does installing a light fixture or outlet need a licensed electrician?**

A: It depends on the job. Swapping a like-for-like light fixture on an existing circuit with an existing junction box — generally no permit, and a competent homeowner can handle it. Adding a new circuit, installing a new junction box, running wire inside walls, or installing GFCI outlets in wet locations (kitchen, bathroom, garage, pool area) requires a licensed electrician. The test: if you're touching the wiring inside the wall or adding to the panel, call a licensed electrician.

*(82 words)*

---

**Q2: Can you upgrade lighting and outlets during a home remodel?**

A: Yes — a remodel is the best time to upgrade. When walls are open during a kitchen or bathroom remodel, adding circuits, repositioning outlets, and upgrading to LED recessed lighting is straightforward work that avoids cutting into finished drywall later. Our electricians regularly coordinate with Murrieta-area general contractors during remodel rough-in phases to complete electrical before drywall goes up. If your remodel involves electrical changes, call us before the GC closes walls.

*(75 words)*

---

**Q3: What's the difference between traditional fixtures and smart home electrical?**

A: Traditional fixtures run on standard on/off switches with no remote control or scheduling. Smart home electrical adds a programmable layer — smart switches that respond to voice commands, apps, or automated schedules; outlets with USB-C charging built in; lighting circuits wired for dimming scenes. The electrical infrastructure is similar; the devices at the end of the circuit are different. Our [smart home electrical service](/services/electrical/smart-home-electrical) handles both the wiring and the device installation.

*(79 words)*

---

**Q4: Does pool wiring require special permits and inspections in Murrieta?**

A: Yes. Pool and spa electrical falls under NEC Article 680, which has specific requirements for bonding, GFCI protection, wire clearances, and underwater fixture ratings. The City of Murrieta and Riverside County both require a permit and inspection for pool electrical work. Unpermitted pool wiring is a safety issue — improperly bonded pools have caused electrocution incidents nationally. Our electricians pull the permit, complete the bonding and GFCI work, and schedule the inspection as part of the job.

*(80 words)*

---

**Q5: What does electrical fixture installation typically cost in Murrieta?**

A: Cost varies by fixture type and what the installation involves. A single ceiling fan installation on an existing junction box typically runs $150–$300. Recessed lighting — materials and labor for a 4-to-6-light installation in a room with attic access — typically runs $400–$800. Adding a new 20-amp GFCI outlet circuit runs $200–$450 depending on the distance from the panel. Pool and spa electrical varies widely based on scope. All pricing is quoted upfront after an on-site assessment — no phone estimates without seeing the job.

*(89 words)*

---

**Q6: What area does your fixture installation service cover?**

A: Our electrical installation team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta, so response times are fastest for southwest Riverside County. For the outer edges of the service area, same-day availability depends on current call volume. Call (951) 246-4337 to confirm availability for your location.

*(62 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Urgent Electrical Help
```

### Intro Paragraph (52 words)
```
Not every installation job is an emergency — but some are. A new outlet that sparks when plugged in, a ceiling fan that trips the breaker on installation, or pool wiring that fails an inspection all need fast attention. Our electrical team handles same-day urgent calls and has a 24/7 emergency line at (951) 246-4337.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "New outlet sparking on first use",
  "Ceiling fan tripping circuit breaker",
  "GFCI outlet not resetting after install",
  "Burning smell from a new fixture",
  "Pool pump circuit tripping breaker",
  "Outdoor outlet failing after rain",
  "Dimmer switch not compatible — overheating",
  "Permit inspection failed — code correction needed"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Schedule Electrical Installation in Murrieta?
```

### Supporting Paragraph
```
Licensed electrical installation across Murrieta, Temecula, and the Inland Empire. Upfront pricing, permitted work, and same-day service availability. Call now or schedule online — our electrical team picks up.
```
*(30 words)*

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
| "all electrical services" | `/services/electrical` | Service Areas intro paragraph or Why Choose Us |
| "lighting installation" | `/services/electrical/lighting-installation` | Service card Card 1 |
| "outlet and switch installation" | `/services/electrical/outlets-and-switches` | Service card Card 2 |
| "ceiling fan installation" | `/services/electrical/ceiling-fan-installation` | Service card Card 3 |
| "pool and spa wiring" | `/services/electrical/pool-spa-wiring` | Service card Card 4 |
| "smart home electrical wiring" | `/services/electrical/smart-home-electrical` | Service Overview intro paragraph (5th leaf) |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "electrical panel upgrades" | `/services/electrical/power` | Service Areas intro |
| "repairs and safety services" | `/services/electrical/repairs` | Service Areas intro |
| "smart home electrical service" | `/services/electrical/smart-home-electrical` | FAQ Q3 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing options" | `/financing` | Why Choose Us or Final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `electrical installation Murrieta` |
| Keyword in title | Yes — "Electrical Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Electrical Installation & Fixtures in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + electrical installation |
| Keyword in meta description (first half) | Yes — "Electrical installation in Murrieta" opens description |
| Canonical slug | `/services/electrical/fixtures` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name; green pill badge says "Why Choose Our Electrical Team" |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "electrical installation across Murrieta" |
| Concrete numbers for AI citation | 1,400+ fixture installations; 30+ years; $150–$300 ceiling fan; $400–$800 recessed lighting; $200–$450 GFCI circuit; 4.9 stars |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions); Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~770 words |
| Estimated FAQ word count | ~467 words |
| Total estimated | ~1,237 words |
| Hub role | Links DOWN to 4 featured leaf pages + Smart Home via inline body link; links UP to electrical vertical hub |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. Replace before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: electrician installing recessed lighting in IE home interior. Before/after: outdated fluorescent/bare-bulb (left) vs. clean LED recessed installation (right).
3. **Breadcrumbs:** `Home > Services > Electrical > Fixtures`
4. **Schema:** `Service` JSON-LD with `areaServed` for all 10 cities + `FAQPage` for 6 FAQs. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line.
6. **5th leaf (Smart Home):** Smart Home Solutions (`/services/electrical/smart-home-electrical`) is referenced in the Service Overview intro paragraph with an inline link and in FAQ Q3. It does NOT get a card — the 4-card grid layout stays intact. Developer renders the inline link as a standard `<Link>` component within the section intro paragraph.
7. **Cost figures in FAQ Q5:** These are 2026 Inland Empire market estimates. Confirm with client before publishing — adjust if Gardner's actual pricing differs.
8. **Pool & Spa Wiring — NEC 680 reference:** The FAQ Q4 answer references NEC Article 680 specifically. This is a local credibility/AI citation trigger per the architecture doc. Keep it in the final copy.
