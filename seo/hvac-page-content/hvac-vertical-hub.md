# HVAC Vertical Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac`  
**Primary keyword:** HVAC services Murrieta  
**Supporting keywords:** HVAC contractor Inland Empire, HVAC company Murrieta, heating and cooling Murrieta, HVAC repair Murrieta CA  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Hub page — same 9-section structure as leaf pages (AcRepair.tsx). Service Overview cards link DOWN to child sub-hubs. Hub is category-defining, not service-specific.

> **Achievement badge note:** "2,500+ HVAC Jobs Completed" reflects the aggregate of all AC, Heating, and IAQ work across the full vertical (1,800 cooling + ~700 heating and IAQ jobs rounded conservatively). Use this number on the vertical hub only.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before going live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "HVAC Services Murrieta, CA | Heating, Cooling & Air Quality",
  description:
    "HVAC services in Murrieta, Temecula & the Inland Empire. AC repair, furnace service, heat pumps, and indoor air quality. Licensed contractor. Call (951) 246-4337.",
  openGraph: {
    title: "HVAC Services Murrieta, CA | Heating, Cooling & Air Quality | Gardner Plumbing Co.",
    description:
      "Complete HVAC services across Murrieta and the Inland Empire. Licensed heating, cooling, and air quality contractor. Upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac",
  },
  alternates: {
    canonical: "/services/hvac",
  },
};
```

**Character counts (verify before ship):**
- title: 57 chars (renders as ~88 chars after template suffix — trim if needed; acceptable for hub)
- description: 158 chars
- canonical_slug: `/services/hvac`

---

## SECTION 2 — Hero Section

### H1
```
Complete HVAC Services in Murrieta & the Inland Empire
```

### Subheadline
```
One licensed HVAC contractor for heating, cooling, and indoor air quality — serving Murrieta, Temecula, Menifee, and all of Riverside County.
```
*(25 words)*

### Hero Badge Text
```
Line 1: Licensed HVAC Contractor
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
*(creative-director: hero should show a Gardner tech in front of the service van, outdoors in an IE suburban setting — broad HVAC contractor feel, not service-specific)*

---

## SECTION 3 — Emergency Alert Banner

```
HVAC problem in Murrieta? Call (951) 246-4337 — our licensed team handles AC, heating, and air quality emergencies same day, including nights and weekends.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
HVAC Services We Provide in the Inland Empire
```

### Section Intro Paragraph (55 words)
```
Inland Empire homes need reliable heating, cooling, and clean air year-round — from triple-digit summers to cold winter nights in Hemet and San Jacinto. Our licensed HVAC team covers every system in your home under one roof. Explore each service category below or call to speak with a technician directly.
```

### 4 Service Cards (each card links to a child sub-hub or cross-cutting leaf)

**Card 1**
- Icon: `Snowflake`
- Title: `AC Services`
- URL: `/services/hvac/ac`
- Description: `Same-day AC repair, new system installation, seasonal tune-ups, mini-split systems, and smart thermostat upgrades for Inland Empire homes.`
- Features:
  1. AC Repair (24/7)
  2. AC Installation
  3. AC Maintenance
  4. Mini-Split & Thermostat

**Card 2**
- Icon: `Flame`
- Title: `Heating Services`
- URL: `/services/hvac/heating`
- Description: `Furnace repair, furnace installation, heat pump systems, and annual heating tune-ups — reliable warmth when Inland Empire nights turn cold.`
- Features:
  1. Furnace Repair
  2. Furnace Installation
  3. Heat Pump Systems
  4. Furnace Maintenance

**Card 3**
- Icon: `Wind`
- Title: `Indoor Air Quality`
- URL: `/services/hvac/indoor-air-quality`
- Description: `Air duct cleaning, whole-home filtration, humidifiers, and dehumidifiers — better air inside your Murrieta home starting with one call.`
- Features:
  1. Air Duct Cleaning
  2. Air Filtration Systems
  3. Whole-Home Humidifiers
  4. Whole-Home Dehumidifiers

**Card 4**
- Icon: `CalendarCheck`
- Title: `HVAC Maintenance Plans`
- URL: `/services/hvac/heating/hvac-maintenance-plans`
- Description: `Preventive service contracts that cover both AC and heating — scheduled tune-ups, priority dispatch, and no surprise repair bills.`
- Features:
  1. Annual AC Tune-Up
  2. Annual Furnace Tune-Up
  3. Priority Scheduling
  4. Plan Member Discounts

### Before/After Section

**H3:**
```
What a Healthy HVAC System Does for Your Home
```

**Checkmark items (6):**
1. Consistent temperature in every room — no hot or cold spots
2. Energy bills that reflect efficient operation, not system strain
3. Clean air moving through ducts that aren't circulating dust and debris
4. Heating and cooling equipment that runs its full expected lifespan
5. No surprise failures at the peak of summer or the coldest night of the year
6. One contractor who knows your whole system — not three different vendors

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left side shows a neglected outdoor condenser + dusty filter + dirty duct; right side shows clean serviced equipment; broad HVAC framing)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our HVAC Team
```

### Section H2
```
Why Inland Empire Homeowners Trust Our HVAC Team
```

### Section Intro Paragraph (62 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has completed over 2,500 heating, cooling, and air quality jobs across Riverside County — from a furnace replacement in Hemet to a mini-split installation in Wildomar. Explore our HVAC maintenance plans to protect your investment year-round.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day HVAC Service`
- Description: `Most calls received before noon are scheduled and on-site the same day — no multi-day waits during peak summer or winter demand.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every technician carries a valid CA HVAC license and passes background verification before entering your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing — Always`
- Description: `Written quote before any work starts. The price on the quote is the price on the invoice. No surprise charges at the end of the job.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving Riverside County`
- Description: `Three decades of local service means the team has seen every HVAC failure mode the Inland Empire climate can produce.`

### Achievement Badge (floating)
```
Line 1: 2,500+
Line 2: HVAC Jobs Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (45 words)
```
HVAC service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability for AC, heating, and air quality service throughout.
```

**City array (10 cities — matches AcRepair.tsx serviceAreas exactly):**
```
Temecula, Murrieta, Perris, Menifee, Canyon Lake,
Lake Elsinore, Corona, Moreno Valley, Riverside, Hemet
```

---

## SECTION 7 — FAQ Section

### FAQ Section H2
```
HVAC Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about HVAC service in Murrieta and across the Inland Empire.
```

### 6 FAQs

---

**Q1: What does HVAC stand for, and what does an HVAC contractor actually handle?**

A: HVAC stands for Heating, Ventilation, and Air Conditioning. An HVAC contractor installs, repairs, and maintains the systems that control temperature and air quality inside your home — furnaces, air conditioners, heat pumps, ductwork, thermostats, air filters, humidifiers, and dehumidifiers. Gardner Plumbing Co. handles all of these as a licensed C-20 contractor serving Murrieta and the greater Inland Empire. If it moves air or changes the temperature in your home, it falls under HVAC.

*(80 words)*

---

**Q2: Do I need separate contractors for my AC and my furnace, or can one company handle both?**

A: One company handles both — and that's the better choice. An HVAC contractor who services your full system understands how your AC and furnace share components like the air handler, blower motor, thermostat, and ductwork. Splitting the work between two vendors creates gaps: one company may not know what the other changed, and diagnostic problems that cross both systems get passed back and forth. Our team services AC, heating, and air quality under a single work order.

*(82 words)*

---

**Q3: When is the best time to schedule HVAC service in the Inland Empire?**

A: For AC service, schedule in February or March — before the first heat wave hits Murrieta in April or May. Demand surges in June through September and booking windows shrink. For furnace service, schedule in September or October before cold nights arrive. If you're on an [HVAC maintenance plan](/services/hvac/heating/hvac-maintenance-plans), the plan automatically schedules both tune-ups at the right time of year. Waiting until a system fails costs more than annual preventive service.

*(79 words)*

---

**Q4: Do you handle both residential and commercial HVAC in Murrieta?**

A: Primarily residential. Our focus is single-family homes, townhomes, condos, and small multi-unit residential properties across Murrieta, Temecula, Menifee, and surrounding Riverside County cities. For large commercial systems — rooftop units over 5 tons, chiller systems, commercial RTUs — we recommend calling a contractor who specializes in commercial HVAC. If you're unsure whether your property qualifies, call (951) 246-4337 and describe the system — we'll tell you honestly.

*(72 words)*

---

**Q5: Is Gardner Plumbing Co. licensed to perform HVAC work in California?**

A: Yes. Gardner Plumbing Co. holds a California CSLB C-20 (Warm-Air Heating, Ventilating, and Air-Conditioning) contractor license (license number {{CSLB_C20_LICENSE_TBD}}). California law requires a C-20 license for HVAC installation and major repair work. Unlicensed HVAC work is a common problem in the Inland Empire market — homeowners who hire unlicensed contractors lose warranty protection on equipment and have no recourse if the work is faulty. Ask any HVAC contractor for their license number before booking.

*(79 words)*

---

**Q6: What cities in the Inland Empire does your HVAC team service?**

A: Our HVAC team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta, so response times are fastest for the southwest Riverside County corridor. For cities on the outer edge of the service area — Hemet, San Jacinto, Moreno Valley — same-day availability depends on current call volume. Call (951) 246-4337 to confirm availability for your location.

*(74 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Emergency HVAC Service
```

### Intro Paragraph (52 words)
```
Some HVAC failures can't wait. Complete cooling failure during a Murrieta heat advisory, a furnace that goes out on a January night in Hemet, a burning smell from your vents — these are same-day situations. Our emergency line runs 24 hours a day, 7 days a week, for both heating and cooling emergencies.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Complete heating or cooling failure",
  "System tripping the circuit breaker",
  "Burning smell from vents or unit",
  "Gas smell near furnace (call gas company first, then us)",
  "Water leaking from indoor air handler",
  "Frozen evaporator coil — no airflow",
  "No heat on a cold Inland Empire night",
  "AC not responding to thermostat in summer heat"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Schedule HVAC Service in Murrieta?
```

### Supporting Paragraph
```
Complete HVAC services across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed technicians, and a 24/7 emergency line for heating and cooling. Call now or schedule online — our HVAC team picks up.
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
| "AC services" | `/services/hvac/ac` | Service card Card 1 |
| "heating services" | `/services/hvac/heating` | Service card Card 2 |
| "indoor air quality" | `/services/hvac/indoor-air-quality` | Service card Card 3 |
| "HVAC maintenance plans" | `/services/hvac/heating/hvac-maintenance-plans` | Service card Card 4 + Why Choose Us intro |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "AC repair services" | `/services/hvac/ac/ac-repair` | Service Overview intro or Emergency section |
| "furnace repair" | `/services/hvac/heating/furnace-repair` | Emergency section |
| "air duct cleaning" | `/services/hvac/indoor-air-quality/air-duct-cleaning` | Emergency or IAQ card body |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing options" | `/financing` | Why Choose Us or Final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `HVAC services Murrieta` |
| Keyword in title | Yes — "HVAC Services Murrieta, CA" |
| Keyword in H1 | Yes — "Complete HVAC Services in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + HVAC services |
| Keyword in meta description (first half) | Yes — "HVAC services in Murrieta" opens description |
| Canonical slug | `/services/hvac` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — appears in Why Choose Us intro + FAQ Q5 |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "HVAC services across Murrieta" |
| Concrete numbers for AI citation | 2,500+ HVAC jobs; 30+ years; same-day response; 4.9 stars; February/March AC service window; September/October furnace window; 5-ton commercial threshold |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions); Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~750 words |
| Estimated FAQ word count | ~466 words |
| Total estimated | ~1,216 words |
| Hub role | Links DOWN to 3 sub-hubs + HVAC Maintenance Plans; does NOT duplicate leaf-level detail |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — appears in Why Choose Us intro AND FAQ Q5. Both must be updated before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: Gardner tech + service van, outdoor IE suburban setting. Before/after: broad HVAC neglected-vs-serviced split scene.
3. **Breadcrumbs:** `Home > Services > HVAC`
4. **Schema:** `Service` JSON-LD with `areaServed` covering all 10 service cities + `FAQPage` JSON-LD for 6 FAQs. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line — do not hard-code in JSX.
6. **Service card links:** Each card title AND card CTA button must render as `<Link>` to the child URL. This is the primary hub-to-child link delivery mechanism.
7. **Maintenance Plans card** links to a heating-cluster leaf (`/services/hvac/heating/hvac-maintenance-plans`), not a sub-hub. This is intentional — Maintenance Plans is cross-cutting and lives under the Heating cluster per architecture doc.
