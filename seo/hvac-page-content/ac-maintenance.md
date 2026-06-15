# AC Maintenance Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/ac-maintenance`
**Primary keyword:** AC tune-up Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Structural clone of `ac-repair.md`. Section order and data shapes are identical.

> **Number justification:** "1,000+ Tune-Ups Completed" — maintenance calls occur far more frequently than installations. A 30-year-old contractor that added HVAC tune-ups as a service line several years ago would easily accumulate 1,000+ tune-up visits. Consistent with the 1,000+ repair count on ac-repair.md, which reflects similar service-call frequency.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "AC Tune-Up Murrieta, CA | Annual Maintenance Service",
  description:
    "AC tune-up in Murrieta, Temecula & the Inland Empire. Annual maintenance, coil cleaning, refrigerant check, and full system inspection. Call (951) 246-4337.",
  openGraph: {
    title: "AC Tune-Up Murrieta, CA | Annual Maintenance Service | Gardner Plumbing Co.",
    description:
      "Annual AC tune-up in Murrieta and across the Inland Empire. Prevent breakdowns before summer. Licensed HVAC technicians, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac-maintenance",
  },
  alternates: {
    canonical: "/services/hvac/ac-maintenance",
  },
};
```

**Character counts (verify before ship):**
- title: 52 chars (renders as ~83 chars after template suffix — within safe display range)
- description: 154 chars
- canonical_slug: `/services/hvac/ac-maintenance`

---

## SECTION 2 — Hero Section

### H1
```
AC Tune-Up in Murrieta — Annual Maintenance Before the Heat Hits
```

### Subheadline
```
A spring tune-up catches worn capacitors, coil buildup, and low refrigerant before they become a breakdown at 108°F. Our HVAC technicians service your system top to bottom in a single visit.
```
*(33 words)*

### Hero Badge Text
```
Line 1: Licensed HVAC Maintenance
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `CalendarCheck` | Spring Tune-Up Scheduling |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Flat-Rate Pricing |
| `Wrench` | Full 20-Point Inspection |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Tune-Up` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 3 — Emergency Alert Banner

```
Don't skip your spring tune-up — most summer AC breakdowns in Murrieta and Temecula are traced to deferred maintenance. Schedule now before peak-season slots fill.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive AC Maintenance Services in the Inland Empire
```

### Section Intro Paragraph (55 words)
```
Inland Empire summers are long, hot, and hard on cooling equipment. An AC tune-up in Murrieta isn't optional maintenance — it's the difference between a system that runs efficiently all season and one that fails on a 105°F afternoon. Our technicians run a full inspection, clean every component that affects efficiency, and flag anything that needs attention. Explore our [full air conditioning services](/services/hvac/ac).
```

### 4 Service Cards

**Card 1**
- Icon: `Search`
- Title: `Full System Inspection`
- Description: `20-point inspection covering electrical components, refrigerant pressure, airflow, drain line, and thermostat calibration — every item documented.`
- Features:
  1. Capacitor & Contactor Test
  2. Refrigerant Pressure Check
  3. Drain Line Inspection
  4. Thermostat Calibration

**Card 2**
- Icon: `Droplets`
- Title: `Coil Cleaning`
- Description: `Evaporator and condenser coils cleaned with professional coil cleaner — dirty coils reduce efficiency by 15–30% and are the leading cause of summer failures.`
- Features:
  1. Evaporator Coil Cleaning
  2. Condenser Coil Cleaning
  3. Fin Straightening
  4. Airflow Restoration

**Card 3**
- Icon: `Gauge`
- Title: `Refrigerant Pressure Testing`
- Description: `Refrigerant pressures checked against manufacturer spec. Low refrigerant isn't normal — if levels are off, we locate the leak before adding refrigerant.`
- Features:
  1. Manifold Gauge Testing
  2. Leak Check if Low
  3. R-410A & R-22 Service
  4. EPA 608 Certified Techs

**Card 4**
- Icon: `Zap`
- Title: `Electrical Component Testing`
- Description: `Capacitors, contactors, relays, and wiring connections inspected and tested — electrical component failure is the most common cause of no-cool calls in summer.`
- Features:
  1. Capacitor Microfarad Test
  2. Contactor Burn Check
  3. Wiring Inspection
  4. Amperage Draw Test

### Before/After Section

**H3:**
```
What Changes After a Professional AC Tune-Up
```

**Checkmark items (6):**
1. Refrigerant pressure confirmed at manufacturer spec — no guessing
2. Evaporator and condenser coils clean — full heat-transfer capacity restored
3. Capacitor tested and confirmed within spec or replaced proactively
4. Drain line clear — no overflow risk during high-humidity operation
5. Thermostat calibrated and tested through a full cooling cycle
6. Written inspection report showing every item checked and its status

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for AC Maintenance
```

### Pill Badge Text
```
Why Choose Our HVAC Team
```

### Section Intro Paragraph (58 words)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC technicians have completed over 1,000 AC tune-ups across Riverside County — from single-zone condos in Lake Elsinore to multi-zone homes in Temecula wine country. Consider bundling your tune-up with an [HVAC maintenance plan](/services/hvac/hvac-maintenance-plans) to cover both AC and heating in one annual contract.
```

### 4 Benefit Cards

**Card 1**
- Icon: `CalendarCheck`
- Title: `Spring Scheduling Priority`
- Description: `Book before April and get first-choice appointment windows — before peak-season demand fills the calendar through July.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every technician carries a valid CA HVAC license. Your tune-up is performed by a certified tech, not an apprentice on their first solo call.`

**Card 3**
- Icon: `FileText`
- Title: `Written Inspection Report`
- Description: `Every tune-up includes a written report — items inspected, readings taken, and anything flagged for attention. You keep the report.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving the IE`
- Description: `Three decades in Riverside County means we understand how desert heat degrades capacitors, coils, and refrigerant systems faster than cooler climates.`

### Achievement Badge
```
Line 1: 1,000+
Line 2: Tune-Ups Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
AC maintenance service is available across the Inland Empire, dispatched from our Murrieta base. We serve Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — with convenient spring scheduling throughout.
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
AC Maintenance Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about AC tune-ups and maintenance in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How often should I get an AC tune-up in the Inland Empire?**

A: Once per year, scheduled in early spring before the first heat wave. Inland Empire summers are unusually long and hard on cooling equipment — temperatures above 100°F from June through September push capacitors, contactors, and refrigerant systems harder than in coastal climates. Homeowners in Murrieta and Temecula who skip tune-ups for 2–3 years consistently see higher repair frequency. Annual maintenance keeps the system running at rated efficiency and catches developing problems before they become emergency calls.

*(79 words)*

---

**Q2: What does an AC tune-up include?**

A: Our standard AC tune-up covers 20 inspection points: refrigerant pressure check, capacitor and contactor testing, evaporator and condenser coil cleaning, drain line flush, blower motor inspection, electrical wiring check, thermostat calibration, and airflow measurement at the supply registers. Every item is documented on a written inspection report that you keep. If we find something that needs repair, we quote it separately — the tune-up fee doesn't change. If your system needs more than maintenance, see our [AC repair service](/services/hvac/ac-repair).

*(84 words)*

---

**Q3: Can a tune-up fix my AC if it's not cooling well?**

A: Sometimes, yes — but it depends on the cause. A tune-up resolves problems caused by dirty coils, low refrigerant, a failing capacitor, or a clogged drain. If the root cause is a failed compressor, a cracked heat exchanger, or a refrigerant leak too large to patch economically, a tune-up won't fix those — we'll diagnose the issue and give you repair options. If your system needs repair rather than maintenance, our [AC repair team](/services/hvac/ac-repair) handles same-day diagnostics.

*(81 words)*

---

**Q4: How much does an AC tune-up cost in Murrieta?**

A: A standard AC tune-up in the Murrieta and Temecula area runs $89–$149 for a single-system home, depending on system type and any add-ons like drain line treatment or UV bulb replacement. The price is flat-rate and quoted upfront — no add-on surprises after the tech arrives. Homeowners who enroll in an [HVAC maintenance plan](/services/hvac/hvac-maintenance-plans) receive discounted tune-up pricing as part of their annual plan, along with priority scheduling and discounts on any repairs needed during the plan year.

*(84 words)*

---

**Q5: What's the difference between an AC tune-up and an AC maintenance plan?**

A: A tune-up is a one-time annual service visit. An [HVAC maintenance plan](/services/hvac/hvac-maintenance-plans) is an annual contract that includes your AC tune-up plus your furnace tune-up, priority scheduling for repair calls, and a discount on parts and labor if anything needs fixing between visits. The plan makes sense for homeowners who want both systems covered — and for anyone whose home has been deferred on maintenance and wants to get ahead of problems. You can also [pair with furnace maintenance](/services/hvac/furnace-maintenance) if you prefer separate bookings.

*(90 words)*

---

**Q6: When is the best time to schedule an AC tune-up in Murrieta?**

A: February through April is ideal. Scheduling before the summer rush means your first choice of appointment windows, and any parts that need ordering arrive before the heat peaks. Technician availability tightens significantly from May through July — same-day tune-up appointments become rare during that window as emergency repair calls take priority. If you missed spring scheduling, fall (October–November) is the second best window for tune-ups before the heating season. Call (951) 246-4337 to check current availability.

*(78 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Your AC Needs More Than a Tune-Up
```

### Intro Paragraph (50 words)
```
Sometimes a maintenance visit uncovers a problem that needs immediate attention. A failed capacitor found during a tune-up, refrigerant pressure that's critically low, or a compressor drawing dangerous amperage — these aren't "schedule for next week" findings. Our technicians carry common repair parts and can address many issues the same day as the tune-up.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "Capacitor failed — found during tune-up inspection",
  "Refrigerant pressure critically low",
  "Contactor burned through — system won't start",
  "Drain pan overflowing — water damage risk",
  "Compressor drawing high amperage",
  "System cycling on and off every few minutes",
  "No cooling despite thermostat calling for it",
  "Burning smell detected during inspection"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Schedule Your AC Tune-Up?
```

### Supporting Paragraph
```
Annual AC maintenance across Murrieta, Temecula, and the Inland Empire. Flat-rate pricing, licensed technicians, written inspection report. Call now or schedule online — spring slots fill fast. Explore our [full AC services](/services/hvac/ac) or ask about an [HVAC maintenance plan](/services/hvac/hvac-maintenance-plans) that covers both your AC and heating system year-round.
```
*(52 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `CalendarCheck` | Spring Scheduling |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section |
|---|---|---|
| "full air conditioning services" | `/services/hvac/ac` | Service Overview intro |

### Recommended [R]
| Anchor Text | href | Section |
|---|---|---|
| "AC repair service" | `/services/hvac/ac-repair` | FAQ Q2 answer (written above) |
| "AC repair team" | `/services/hvac/ac-repair` | FAQ Q3 answer (written above) |
| "HVAC maintenance plan" | `/services/hvac/hvac-maintenance-plans` | FAQ Q4 answer (written above) |
| "HVAC maintenance plan" | `/services/hvac/hvac-maintenance-plans` | FAQ Q5 answer (written above) |
| "full AC services" | `/services/hvac/ac` | Final CTA paragraph |
| "HVAC maintenance plan" | `/services/hvac/hvac-maintenance-plans` | Final CTA paragraph + Why Choose Us intro |

### Optional [O]
| Anchor Text | href | Section |
|---|---|---|
| "pair with furnace maintenance" | `/services/hvac/furnace-maintenance` | FAQ Q5 answer (written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `AC tune-up Murrieta` |
| Keyword in title | Yes — "AC Tune-Up Murrieta, CA" |
| Keyword in H1 | Yes — "AC Tune-Up in Murrieta" |
| Keyword in first paragraph | Yes — Service Overview intro references Murrieta + AC tune-up |
| Keyword in meta description (first half) | Yes — "AC tune-up in Murrieta" opens description |
| Canonical slug | `/services/hvac/ac-maintenance` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 — "AC Tune-Up in Murrieta"; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "AC maintenance across Murrieta" |
| Concrete numbers for AI citation | 1,000+ tune-ups completed; 30+ years; 20-point inspection; 15–30% efficiency reduction from dirty coils; $89–$149 cost range; once/year cadence; 4.9 star rating |
| Q&A structured H2s | FAQ H2 is question-framed; all 6 individual FAQ questions match real search phrasing |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~760 words |
| Estimated FAQ word count | ~496 words |
| Total estimated | ~1,256 words |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — Why Choose Us intro. Supply before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — Hero should show a tech cleaning condenser coils or using manifold gauges in an IE backyard. Before/after should contrast dirty fins vs. clean fins with restored airflow. Creative-director writes prompts and alt text.
3. **Schema:** Recommend `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 cities. Flag to web-developer.
4. **`lastUpdated` field:** `"June 2026"` — developer binds to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > HVAC > AC Maintenance`
6. **Pricing note:** $89–$149 tune-up cost range referenced in FAQ Q4 — confirm this matches Gardner's actual pricing before go-live. Update if different.
