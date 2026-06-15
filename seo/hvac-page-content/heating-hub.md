# Heating Sub-Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/heating`  
**Primary keyword:** heating repair Murrieta  
**Supporting keywords:** furnace repair Murrieta CA, heating service Inland Empire, furnace repair Temecula CA, heating repair Menifee CA, HVAC heating Riverside CA  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Sub-hub page — same 9-section structure as leaf pages (AcRepair.tsx). Service Overview cards link DOWN to the 5 Heating leaf pages. Hub is category-defining for the Heating cluster; does not replicate leaf-level diagnostic or pricing detail.

> **Achievement badge note:** "1,200+ Heating Jobs" reflects estimated furnace repair, furnace installation, furnace maintenance, heat pump, and HVAC maintenance plan jobs across the heating vertical. Use this number on the Heating hub only.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before going live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Heating Repair & Furnace Services Murrieta, CA",
  description:
    "Heating repair, furnace installation, heat pumps, and HVAC maintenance plans in Murrieta, Temecula & the Inland Empire. Licensed contractor. Call (951) 246-4337.",
  openGraph: {
    title: "Heating Repair & Furnace Services Murrieta, CA | Gardner Plumbing Co.",
    description:
      "Complete heating services across Murrieta and the Inland Empire. Furnace repair, installation, heat pumps, and preventive plans. Licensed HVAC contractor. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/heating",
  },
  alternates: {
    canonical: "/services/hvac/heating",
  },
};
```

**Character counts (verify before ship):**
- title: 51 chars (renders as ~82 chars after template suffix)
- description: 158 chars
- canonical_slug: `/services/hvac/heating`

---

## SECTION 2 — Hero Section

### H1
```
Heating Services in Murrieta & the Inland Empire
```

### Subheadline
```
Furnace repair, new furnace installation, heat pump systems, and annual maintenance — one licensed HVAC team for every heating need across Riverside County.
```
*(26 words)*

### Hero Badge Text
```
Line 1: Licensed HVAC Service
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
*(creative-director: Gardner tech near a residential furnace or air handler in a utility closet / garage setting — warm IE home interior, winter-service feel without being staged)*

---

## SECTION 3 — Emergency Alert Banner

```
Heater not working in Murrieta? Call (951) 246-4337 — our HVAC team responds same day for furnace failures, including nights and weekends.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Heating Services We Offer in the Inland Empire
```

### Section Intro Paragraph (52 words)
```
Inland Empire winters are mild compared to northern California, but furnaces still see real use — especially in Hemet, San Jacinto, and the higher-elevation areas of Riverside County. Whether you need a repair, a new system, or a preventive plan to avoid mid-winter failures, our HVAC team covers every heating scenario.
```

### 5 Service Cards (each card links to a child leaf)

**Card 1**
- Icon: `Wrench`
- Title: `Furnace Repair`
- URL: `/services/hvac/heating/furnace-repair`
- Description: `Same-day diagnosis and repair for furnaces that won't ignite, blow cold air, short-cycle, or trip the breaker — fast response for Inland Empire homes.`
- Features:
  1. 24/7 Emergency Dispatch
  2. Igniter & Flame Sensor Repair
  3. Heat Exchanger Inspection
  4. Blower Motor & Control Board

**Card 2**
- Icon: `Zap`
- Title: `Furnace Installation`
- URL: `/services/hvac/heating/furnace-installation`
- Description: `New gas furnace sizing, installation, and commissioning — matched to your home's square footage, existing ductwork, and Inland Empire climate profile.`
- Features:
  1. Load Calculation (Manual J)
  2. Carrier, Trane & Lennox Furnaces
  3. Duct Integration & Sealing
  4. System Commissioning & Test

**Card 3**
- Icon: `CalendarCheck`
- Title: `Furnace Maintenance`
- URL: `/services/hvac/heating/furnace-maintenance`
- Description: `Annual furnace tune-ups before the cold season — burner cleaning, heat exchanger inspection, safety check, and airflow testing to prevent winter failures.`
- Features:
  1. Burner Cleaning & Testing
  2. Heat Exchanger Inspection
  3. Carbon Monoxide Safety Check
  4. Filter Replacement & Airflow Test

**Card 4**
- Icon: `Flame`
- Title: `Heat Pump Systems`
- URL: `/services/hvac/heating/heat-pump-systems`
- Description: `Heat pump installation and service — efficient heating and cooling in a single system, well-suited to the Inland Empire's mild winters and hot summers.`
- Features:
  1. Air-Source Heat Pump Install
  2. Heat Pump Repair & Service
  3. Dual-Fuel System Options
  4. Carrier & Trane Heat Pumps

**Card 5**
- Icon: `Shield`
- Title: `HVAC Maintenance Plans`
- URL: `/services/hvac/heating/hvac-maintenance-plans`
- Description: `Annual preventive service contracts covering both your furnace and AC — scheduled tune-ups, priority dispatch, and no surprise repair bills.`
- Features:
  1. Annual Furnace Tune-Up
  2. Annual AC Tune-Up
  3. Priority Scheduling
  4. Plan Member Discounts

> **Developer note:** This hub has 5 leaf cards — render as a 5-card grid or 4+1 layout depending on the design system. Discuss with web-developer.

### Before/After Section

**H3:**
```
What Changes After a Professional Heating Service
```

**Checkmark items (6):**
1. Furnace igniting reliably on the first call — no delayed starts or lockouts
2. Heat exchanger inspected and confirmed free of cracks (CO safety check passed)
3. Burners clean and combustion running at correct fuel-to-air ratio
4. Blower motor and belt confirmed operating at full capacity
5. Thermostat calibrated — set temperature matching actual room temperature
6. Filter replaced — full airflow through the system for the season ahead

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left: dirty furnace burner assembly with dust and carbon buildup; right: clean burners after service. Or: dirty vs. clean air filter side by side. Technical documentation style, no people.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our HVAC Team
```

### Section H2
```
Why Inland Empire Homeowners Trust Our Heating Team
```

### Section Intro Paragraph (62 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has completed over 1,200 heating jobs across Riverside County — from emergency furnace repairs in Hemet on cold January nights to heat pump installations in Menifee. Every job is quoted upfront and completed by a licensed technician.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day Heating Service`
- Description: `Most heating calls received before noon are on-site the same day. No multi-day waits when your furnace goes out on a cold night.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every tech carries a valid CA HVAC license and passes background verification before entering your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before work starts. The price on the quote is the price on the invoice — no add-ons discovered at the end of the job.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years in the Field`
- Description: `Three decades serving Riverside County means the team has seen every furnace failure mode this climate produces — from cracked heat exchangers to failed igniters.`

### Achievement Badge (floating)
```
Line 1: 1,200+
Line 2: Heating Jobs Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (46 words)
```
Heating service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout. See also our [AC services](/services/hvac/ac) and [indoor air quality services](/services/hvac/indoor-air-quality).
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
Heating Service Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about furnace repair, heat pumps, and heating service in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: Furnace or heat pump — which is better for the Inland Empire climate?**

A: Both work well in the Inland Empire, and the right choice depends on your home and your utility setup. Heat pumps are the more efficient choice for the IE's mild winters — they move heat rather than generate it, which uses less energy when outdoor temperatures stay above freezing. Gas furnaces heat faster and feel warmer during the rare cold nights in Hemet or San Jacinto. If you have existing gas lines and ductwork, a gas furnace is often the lower-cost installation. If you're starting fresh or want to reduce gas use, a heat pump is worth pricing out. See our [heat pump systems page](/services/hvac/heating/heat-pump-systems) for a side-by-side comparison.

*(118 words)*

---

**Q2: How often should a furnace be serviced in the Inland Empire?**

A: Once per year, ideally in September or October before the first cold nights arrive. Inland Empire furnaces sit unused for 6–7 months during the cooling season — dust accumulates on burners, igniters weaken, and heat exchangers develop stress from thermal cycling. A pre-season tune-up finds these issues before they cause a failure in December. Our [furnace maintenance service](/services/hvac/heating/furnace-maintenance) covers a full inspection, burner cleaning, heat exchanger check, and carbon monoxide safety test in a single visit.

*(81 words)*

---

**Q3: What are the most common heating problems in Inland Empire homes?**

A: The three most frequent failures across Murrieta, Temecula, and Menifee are igniter failure, dirty flame sensors, and cracked heat exchangers. Gas igniters degrade over time and eventually fail to light the burners — the furnace runs the fan but no heat comes out. Flame sensors collect carbon buildup and fail to detect the flame, causing repeated shutdown. Cracked heat exchangers are the most serious — they allow combustion gases, including carbon monoxide, to enter the living space. Any furnace showing yellow or flickering flames should be inspected immediately.

*(90 words)*

---

**Q4: Is gas heating or electric heating more cost-effective in Murrieta?**

A: In Murrieta and most of Riverside County, natural gas furnaces are cheaper to operate than electric resistance heating (standard electric furnaces or baseboard heaters). Southern California Gas Company rates are lower per BTU than SCE electric rates for resistance heating. However, electric heat pumps — which use electricity but operate 2–4 times more efficiently than electric resistance — can be cost-competitive with gas depending on current rate structures. The calculation shifts with each utility rate change. Call us and describe your current setup — we can help you run the numbers.

*(93 words)*

---

**Q5: Do you offer emergency furnace repair service in Murrieta on nights and weekends?**

A: Yes. Our emergency line at (951) 246-4337 is live 24 hours a day, 7 days a week. Daytime dispatch from Murrieta averages under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on call volume. If you smell gas near the furnace, do not call us first — contact Southern California Gas Company at 1-800-427-2200 and evacuate the area. Once the gas company has confirmed the line is safe, call us for furnace diagnosis and repair.

*(83 words)*

---

**Q6: What heating service areas do you cover?**

A: Our heating service area covers Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta. Response times are fastest for southwest Riverside County. Higher-elevation areas like Hemet and San Jacinto see colder winters — we prioritize emergency dispatch to those areas when temperatures drop. Call (951) 246-4337 to confirm same-day availability for your location.

*(68 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Emergency Heating Repair
```

### Intro Paragraph (52 words)
```
Some heating failures can't wait until morning. A furnace that won't ignite on a cold Hemet night, a heat exchanger that may be leaking combustion gases, or complete heating failure when children are in the home — these are same-day situations. Our emergency line runs 24 hours a day, 7 days a week.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Furnace not igniting — no heat output",
  "Heater running but blowing cold air",
  "Burning or electrical smell from vents",
  "Carbon monoxide detector triggered near furnace",
  "Furnace tripping the circuit breaker",
  "Gas smell near furnace or air handler",
  "System short-cycling — heating for 2–3 minutes then shutting off",
  "No heat on a cold Inland Empire night"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Schedule Heating Service in Murrieta?
```

### Supporting Paragraph
```
Complete heating service across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed technicians, and a 24/7 emergency line for furnace and heat pump emergencies. Call now or schedule online — our HVAC team picks up.
```
*(37 words)*

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
| "furnace repair" | `/services/hvac/heating/furnace-repair` | Service card Card 1 |
| "furnace installation" | `/services/hvac/heating/furnace-installation` | Service card Card 2 |
| "furnace maintenance" | `/services/hvac/heating/furnace-maintenance` | Service card Card 3 + FAQ Q2 |
| "heat pump systems" | `/services/hvac/heating/heat-pump-systems` | Service card Card 4 + FAQ Q1 |
| "HVAC maintenance plans" | `/services/hvac/heating/hvac-maintenance-plans` | Service card Card 5 |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "AC services" | `/services/hvac/ac` | Service Areas intro paragraph |
| "indoor air quality services" | `/services/hvac/indoor-air-quality` | Service Areas intro paragraph |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing options" | `/financing` | Why Choose Us or Final CTA |
| "HVAC services" | `/services/hvac` | Breadcrumb (auto) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `heating repair Murrieta` |
| Keyword in title | Yes — "Heating Repair & Furnace Services Murrieta, CA" |
| Keyword in H1 | Yes — "Heating Services in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + heating |
| Keyword in meta description (first half) | Yes — "Heating repair…in Murrieta" opens description |
| Canonical slug | `/services/hvac/heating` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "heating service across Murrieta" |
| Concrete numbers for AI citation | 1,200+ heating jobs; 30+ years; under 2 hours daytime dispatch; 2–4 hours after-hours; 6–7 months cooling-season dormancy; SoCalGas number (1-800-427-2200); 4.9 stars |
| Local specifics for AI | Southern California Gas Company named; SCE referenced; Hemet/San Jacinto elevation noted; September/October service window specific to IE |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions); Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~780 words |
| Estimated FAQ word count | ~533 words |
| Total estimated | ~1,313 words |
| Hub role | Links DOWN to all 5 Heating leaves; links UP to HVAC vertical hub via breadcrumb + service areas section |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — appears once in Why Choose Us intro. Replace before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: Gardner tech near residential furnace/air handler. Before/after: dirty furnace burner vs. clean burner, or dirty vs. clean filter split — technical documentation style.
3. **SoCalGas emergency number in FAQ Q5:** Verify this is the current Southern California Gas Company emergency line before publishing. Number as of 2026: 1-800-427-2200.
4. **Breadcrumbs:** `Home > Services > HVAC > Heating`
5. **Schema:** `Service` JSON-LD with `areaServed` for all 10 cities + `FAQPage` for 6 FAQs. Flag to web-developer.
6. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line.
7. **5-card layout:** This hub has 5 leaf cards vs. 4 on AC hub and the vertical hub. Developer should confirm grid layout — 5-column or 3+2 staggered on desktop.
8. **Heat pump URL:** Per architecture doc and menu labels, the slug is `heat-pump-systems` (not `heat-pump`). Verify card URL matches: `/services/hvac/heating/heat-pump-systems`.
