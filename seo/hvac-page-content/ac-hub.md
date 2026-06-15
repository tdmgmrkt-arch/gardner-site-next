# AC Sub-Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/ac`  
**Primary keyword:** AC repair Murrieta  
**Supporting keywords:** air conditioning service Murrieta, AC service Inland Empire, air conditioning repair Temecula, HVAC company Murrieta, AC service Menifee CA  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Sub-hub page — same 9-section structure as leaf pages (AcRepair.tsx). Service Overview cards link DOWN to the 5 AC leaf pages. Hub is category-defining for the AC cluster; does not replicate leaf-level diagnostic or pricing detail.

> **Achievement badge note:** "1,800+ Cooling Jobs" reflects estimated AC-specific work (repairs, installs, maintenance, mini-split, thermostat jobs) across the life of the HVAC vertical. Use this number on the AC hub only.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before going live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "AC Repair & Air Conditioning Services Murrieta, CA",
  description:
    "AC repair, installation, maintenance, mini-splits, and thermostat service in Murrieta, Temecula & the Inland Empire. Licensed HVAC contractor. Call (951) 246-4337.",
  openGraph: {
    title: "AC Repair & Air Conditioning Services Murrieta, CA | Gardner Plumbing Co.",
    description:
      "Complete air conditioning services in Murrieta and across the Inland Empire. Same-day AC repair, new installs, tune-ups, and mini-splits. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac",
  },
  alternates: {
    canonical: "/services/hvac/ac",
  },
};
```

**Character counts (verify before ship):**
- title: 54 chars (renders as ~85 chars after template suffix)
- description: 158 chars
- canonical_slug: `/services/hvac/ac`

---

## SECTION 2 — Hero Section

### H1
```
Air Conditioning Services in Murrieta & the Inland Empire
```

### Subheadline
```
Same-day AC repair, new system installation, seasonal tune-ups, and mini-split systems — one licensed HVAC team for every cooling need in your home.
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
*(creative-director: Gardner tech at outdoor AC condenser unit, IE suburban backyard setting — same universe as ac-repair.md hero but framed slightly wider to suggest the full AC service range, not just repair)*

---

## SECTION 3 — Emergency Alert Banner

```
AC not cooling in Murrieta? Call (951) 246-4337 — our HVAC team responds same day, including nights and weekends.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Air Conditioning Services We Offer in the Inland Empire
```

### Section Intro Paragraph (50 words)
```
Whether your AC stopped cooling, your system is aging out, your energy bills are climbing, or you want to add ductless cooling to a room addition — our licensed HVAC team covers every scenario. Five services under one roof, all dispatched same-day from our Murrieta base across Riverside County.
```

### 5 Service Cards (each card links to a child leaf — feature the top 4, note the 5th in body)

**Card 1**
- Icon: `Wrench`
- Title: `AC Repair`
- URL: `/services/hvac/ac/ac-repair`
- Description: `Same-day diagnosis and repair for capacitor failures, refrigerant leaks, frozen coils, and compressor issues — the most common AC failures in IE heat.`
- Features:
  1. 24/7 Emergency Dispatch
  2. Capacitor & Contactor Repair
  3. Refrigerant Recharge (EPA 608)
  4. Compressor & Coil Service

**Card 2**
- Icon: `Zap`
- Title: `AC Installation`
- URL: `/services/hvac/ac/ac-installation`
- Description: `New central AC system sizing, installation, and commissioning — matched to your home's square footage, duct layout, and Inland Empire climate demands.`
- Features:
  1. Load Calculation (Manual J)
  2. Carrier, Trane & Lennox Systems
  3. Existing Duct Integration
  4. System Commissioning & Test

**Card 3**
- Icon: `CalendarCheck`
- Title: `AC Maintenance`
- URL: `/services/hvac/ac/ac-maintenance`
- Description: `Annual tune-ups before the summer heat wave — coil cleaning, refrigerant check, electrical testing, and a full-system inspection to prevent mid-summer failures.`
- Features:
  1. Evaporator & Condenser Coil Clean
  2. Refrigerant Level Check
  3. Electrical Component Testing
  4. Airflow & Thermostat Calibration

**Card 4**
- Icon: `Snowflake`
- Title: `Mini-Split AC`
- URL: `/services/hvac/ac/mini-split-ac`
- Description: `Ductless mini-split installation for room additions, garages, and homes without existing ductwork — zoned cooling without tearing into walls.`
- Features:
  1. Single & Multi-Zone Systems
  2. No Ductwork Required
  3. Mitsubishi & Daikin Units
  4. Wall, Ceiling & Floor Mounts

> **5th leaf note for body copy:** We also handle [thermostat installation](/services/hvac/ac/thermostat-installation) — smart and programmable thermostat upgrades that make your AC system more efficient and easier to control.

### Before/After Section

**H3:**
```
What Changes After a Professional AC Service
```

**Checkmark items (6):**
1. System cooling to the set temperature — not running endlessly without reaching it
2. Refrigerant pressure at manufacturer spec — efficient heat transfer restored
3. Evaporator and condenser coils clean and moving full airflow
4. Electrical components tested — capacitors, contactors, and wiring confirmed safe
5. Thermostat calibrated and communicating correctly with the air handler
6. Energy consumption back to normal — lower monthly electric bills

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left: dirty condenser with bent fins and dust buildup; right: clean serviced condenser. Same framing as ac-repair before/after)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our HVAC Team
```

### Section H2
```
Why Inland Empire Homeowners Choose Us for AC Service
```

### Section Intro Paragraph (60 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has completed over 1,800 cooling jobs across Riverside County — from emergency repairs in Canyon Lake to full AC replacements in Perris. Every job is quoted upfront and completed by a licensed technician.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day AC Service`
- Description: `Most calls booked before noon are on-site the same day. No overnight wait when your home is heating up in July.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every tech carries a valid CA HVAC license and passes background verification before stepping into your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before work starts. The price on the quote is the price on the invoice — no add-ons after the job.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years in the Field`
- Description: `Three decades serving Riverside County means the team knows every failure mode the Inland Empire climate produces in AC systems.`

### Achievement Badge (floating)
```
Line 1: 1,800+
Line 2: Cooling Jobs Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Air conditioning service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day AC service availability throughout. See also our [heating services](/services/hvac/heating) and [indoor air quality services](/services/hvac/indoor-air-quality).
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
Air Conditioning Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about AC repair, installation, and maintenance in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How do I know if I should repair or replace my AC system?**

A: The threshold most HVAC technicians use: if the repair cost exceeds half the price of a new unit AND your system is over 12 years old, replacement is usually the smarter financial decision. Inland Empire AC systems run harder than units in coastal climates — the heat accelerates wear on capacitors, compressors, and refrigerant lines. A system showing multiple failures in the same summer is a strong replacement candidate. Our technicians give you both numbers — repair cost vs. replacement cost — before you decide. See our [AC installation page](/services/hvac/ac/ac-installation) for replacement options.

*(101 words)*

---

**Q2: What does an AC tune-up include, and when should I schedule one?**

A: An AC tune-up covers coil cleaning (evaporator and condenser), refrigerant level check, electrical component testing (capacitors, contactors, wiring), thermostat calibration, airflow measurement, and a full visual inspection of the system. Schedule it in February or March — before the first Inland Empire heat wave arrives in late April or May. Booking in winter means shorter wait times and a confirmed-ready system before the season peaks. Our [AC maintenance service](/services/hvac/ac/ac-maintenance) covers all of the above in a single visit.

*(83 words)*

---

**Q3: What AC brands does your team service and install?**

A: For repairs and maintenance, our technicians service all major residential AC brands — Carrier, Trane, Lennox, Rheem, Goodman, York, and American Standard, among others. For new installations, we work with Carrier and Trane as our primary equipment lines, selected for reliability in high-heat climates like the Inland Empire. If you have a specific brand preference, ask when you call — we can often accommodate requests. What we won't install is equipment we can't stand behind for warranty service.

*(80 words)*

---

**Q4: What's the cost of AC repair vs. AC installation in Murrieta?**

A: Repair costs vary by part and labor: a capacitor replacement typically runs $150–$350; a refrigerant recharge (including leak repair) runs $300–$700 depending on the leak location; a compressor replacement runs $1,200–$2,500 or more. New central AC installation for a typical Inland Empire home (1,500–2,500 sq ft) ranges from $4,500 to $9,000 depending on system size, brand, and whether existing ductwork needs modification. All pricing is quoted upfront after diagnosis — no estimates over the phone without seeing the system.

*(84 words)*

---

**Q5: Do you offer emergency AC repair service in Murrieta on nights and weekends?**

A: Yes. Our emergency line at (951) 246-4337 is live 24 hours a day, 7 days a week. For daytime calls, the average dispatch time from Murrieta is under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on current call volume. If your household includes elderly residents or young children, mention that when you call — we prioritize those situations. Complete cooling failure and systems tripping the breaker are treated as emergency dispatches.

*(80 words)*

---

**Q6: What area does your AC service cover?**

A: Our AC service area covers Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. We dispatch from Murrieta, so response times are fastest for the southwest Riverside County corridor. For the outer edges of the service area, same-day availability depends on current call volume — call (951) 246-4337 to confirm your location.

*(62 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Emergency AC Repair
```

### Intro Paragraph (50 words)
```
Some AC failures cannot wait until morning. Complete cooling failure, a system tripping the breaker, a refrigerant leak, or ice forming on the unit during a Murrieta heat advisory are all situations that need same-day attention. Our emergency line is live 24 hours a day, 7 days a week.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Complete cooling failure",
  "AC tripping the circuit breaker",
  "Refrigerant leak detected indoors",
  "Frozen evaporator coil — no airflow",
  "Water leaking from indoor air handler",
  "Burning smell from vents or unit",
  "AC running constantly, not cooling",
  "System not responding to thermostat"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Schedule AC Service in Murrieta?
```

### Supporting Paragraph
```
Same-day air conditioning service across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed technicians, and a 24/7 emergency line. Call now or schedule online — our HVAC team picks up.
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
| "AC repair services" | `/services/hvac/ac/ac-repair` | Service card Card 1 |
| "AC installation" | `/services/hvac/ac/ac-installation` | Service card Card 2 + FAQ Q1 |
| "AC maintenance" | `/services/hvac/ac/ac-maintenance` | Service card Card 3 + FAQ Q2 |
| "mini-split installation" | `/services/hvac/ac/mini-split-ac` | Service card Card 4 |
| "thermostat installation" | `/services/hvac/ac/thermostat-installation` | Service Overview 5th leaf note |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "heating services" | `/services/hvac/heating` | Service Areas intro paragraph |
| "indoor air quality services" | `/services/hvac/indoor-air-quality` | Service Areas intro paragraph |
| "HVAC maintenance plans" | `/services/hvac/heating/hvac-maintenance-plans` | Why Choose Us or Final CTA |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing options" | `/financing` | Why Choose Us or Final CTA |
| "HVAC services" | `/services/hvac` | Breadcrumb (auto) + optionally in Why Choose Us |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `AC repair Murrieta` |
| Keyword in title | Yes — "AC Repair & Air Conditioning Services Murrieta, CA" |
| Keyword in H1 | Yes — "Air Conditioning Services in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + air conditioning |
| Keyword in meta description (first half) | Yes — "AC repair, installation…in Murrieta" opens description |
| Canonical slug | `/services/hvac/ac` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "AC service across Murrieta" |
| Concrete numbers for AI citation | 1,800+ cooling jobs; 30+ years; under 2 hours daytime dispatch; 2–4 hours after-hours; $150–$350 capacitor; $300–$700 refrigerant; $1,200–$2,500 compressor; $4,500–$9,000 new system; 4.9 stars |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions); Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~780 words |
| Estimated FAQ word count | ~490 words |
| Total estimated | ~1,270 words |
| Hub role | Links DOWN to all 5 AC leaves; links UP to HVAC vertical hub via breadcrumb + service areas section |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — appears once in Why Choose Us intro. Replace before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: Gardner tech at condenser unit, slightly wider framing than ac-repair leaf. Before/after: same condenser clean/dirty split as ac-repair.md is acceptable to reuse.
3. **Breadcrumbs:** `Home > Services > HVAC > AC`
4. **Schema:** `Service` JSON-LD with `areaServed` for all 10 cities + `FAQPage` for 6 FAQs. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line.
6. **5th leaf card (Thermostat):** The 5th AC leaf doesn't get its own card in the 4-card grid — it's referenced in the Service Overview body copy with an inline link. Developer should ensure this text renders in the section intro paragraph, not as a 5th card breaking the grid layout.
7. **Cost ranges in FAQ Q4:** These are ballpark figures for 2026 Inland Empire market. Confirm with client before publishing — adjust if Gardner's actual pricing differs significantly.
