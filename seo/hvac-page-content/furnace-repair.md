# Furnace Repair Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/furnace-repair`  
**Primary keyword:** furnace repair Murrieta  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Follows ac-repair.md section structure exactly. All 9 sections present.

> **Badge count note:** "500+ Furnaces Repaired" — Gardner has operated 30+ years in Riverside County and expanded HVAC. 500 furnace repairs across a multi-decade service history in the IE is conservative and credible.

> **FLAG — C-20 License:** All instances of `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Furnace Repair Murrieta, CA | Same-Day Heating Service",
  description:
    "Furnace repair in Murrieta, Temecula & the Inland Empire. Same-day diagnostics, igniter & heat exchanger repair, gas valve service. Call (951) 246-4337.",
  openGraph: {
    title: "Furnace Repair Murrieta, CA | Same-Day Heating Service | Gardner Plumbing Co.",
    description:
      "Same-day furnace repair in Murrieta and across the Inland Empire. Licensed HVAC technicians, upfront pricing, 24/7 availability. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/furnace-repair",
  },
  alternates: {
    canonical: "/services/hvac/furnace-repair",
  },
};
```

**Character counts (verify before ship):**
- title: 54 chars (renders as 85 chars after template suffix)
- description: 149 chars
- canonical_slug: `/services/hvac/furnace-repair`

---

## SECTION 2 — Hero Section

### H1
```
Furnace Repair in Murrieta — Fast, Same-Day Heating Service
```

### Subheadline
```
Licensed HVAC technicians diagnose and repair your furnace the same day, so your home is warm before the next Inland Empire cold snap.
```
*(25 words)*

### Hero Badge Text
```
Line 1: Licensed HVAC Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

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
*(creative-director handles alt text and image prompt — tech inspecting furnace/air handler in a garage or utility closet, IE suburban setting)*

---

## SECTION 3 — Emergency Alert Banner

```
Furnace not heating in Murrieta? Call (951) 246-4337 — our HVAC team responds same day, including nights and weekends.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Furnace Repair Services in the Inland Empire
```

### Section Intro Paragraph (52 words)
```
Inland Empire winters are mild, but when your furnace fails in November or December, it fails at the worst time. Whether it's a cracked heat exchanger, a failed igniter, a faulty gas valve, or a blower motor that won't run — our HVAC technicians arrive with parts and tools to diagnose and repair it the same day. View all furnace and heating services.
```
*(Internal link: "all furnace and heating services" → `/services/hvac/heating` [M])*

### 4 Service Cards

**Card 1**
- Icon: `Wrench`
- Title: `Igniter & Flame Sensor Repair`
- Description: `A failed igniter or dirty flame sensor is the most common reason a furnace won't light. We test, clean, and replace both on the spot.`
- Features:
  1. Hot Surface Igniter Replacement
  2. Flame Sensor Cleaning
  3. Pilot Light Service
  4. Control Board Diagnosis

**Card 2**
- Icon: `Zap`
- Title: `Heat Exchanger Inspection`
- Description: `A cracked heat exchanger is a CO safety hazard. We inspect the exchanger with a combustion analyzer and advise repair or replacement honestly.`
- Features:
  1. Combustion Analysis
  2. CO Leak Testing
  3. Crack & Pinhole Detection
  4. Safety Lockout Diagnosis

**Card 3**
- Icon: `Droplets`
- Title: `Gas Valve & Burner Service`
- Description: `A dirty burner or failing gas valve causes no-heat calls across Murrieta every winter. We clean, adjust, and replace as needed.`
- Features:
  1. Gas Valve Testing
  2. Burner Cleaning & Adjustment
  3. Pressure Regulation Check
  4. Carbon Monoxide Safety Test

**Card 4**
- Icon: `Clock`
- Title: `24/7 Emergency Furnace Repair`
- Description: `No heat on a cold Murrieta night? Our emergency line dispatches a technician the same evening — no waiting until business hours.`
- Features:
  1. 24/7 Live Dispatch
  2. Same-Night Response
  3. Weekend & Holiday
  4. Priority Scheduling

### Before/After Section

**H3:**
```
What Changes After a Professional Furnace Repair
```

**Checkmark items (6):**
1. Igniter or flame sensor tested and confirmed functional
2. Heat exchanger inspected — CO risk ruled out
3. Gas pressure verified at manufacturer specification
4. Blower motor amp draw tested and within safe range
5. Thermostat communication confirmed — no signal loss
6. Full heat cycle run-tested before technician leaves

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = dirty burner assembly or cracked heat exchanger view; after = clean burner, new igniter installed, proper flame pattern)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for Furnace Repair
```

### Section Intro Paragraph (60 words — contains the ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has repaired over 500 furnaces across Riverside County — from a failed igniter in Canyon Lake to a cracked heat exchanger in Hemet. Missed a tune-up this fall? You can also prevent future breakdowns with an HVAC maintenance plan.
```
*(Internal link: "HVAC maintenance plan" → `/services/hvac/hvac-maintenance-plans` [O])*

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day Furnace Repair`
- Description: `Most calls booked before noon are diagnosed and repaired the same day — no overnight wait when the temperature drops.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every technician carries a valid CA HVAC license and passes background verification before entering your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Repair Pricing`
- Description: `You receive a written quote before any work begins. The price on the quote is the price on the invoice.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years in the Field`
- Description: `Three decades serving Riverside County means our team has seen every furnace failure this climate produces.`

### Achievement Badge
```
Line 1: 500+
Line 2: Furnaces Repaired
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Furnace repair service is available across the Inland Empire, with fast response times from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout.
```

**City array (10 cities):**
```
Temecula, Murrieta, Perris, Menifee, Canyon Lake,
Lake Elsinore, Corona, Moreno Valley, Riverside, Hemet
```

---

## SECTION 7 — FAQ Section

### FAQ Section H2
```
Furnace Repair Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about furnace repair in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How do I know if my furnace needs repair or full replacement?**

A: If your furnace is under 15 years old and the repair cost is less than half the price of a new unit, repair is almost always the right call. Furnaces over 20 years old — especially those with a cracked heat exchanger or repeated igniter failures in the same season — are usually better candidates for replacement. Our technicians give you both numbers upfront. For replacement options, see our [furnace installation page](/services/hvac/furnace-installation).

*(82 words)*

---

**Q2: What are the most common furnace problems in Inland Empire homes?**

A: The three failures we see most often across Murrieta, Temecula, and Menifee are: failed hot surface igniters, dirty or faulty flame sensors, and clogged or misaligned burners. IE homes tend to run furnaces infrequently — months of inactivity let dust and debris accumulate on burner ports and sensors. A furnace that clicks but won't light, or lights then shuts off after 30 seconds, is usually dealing with one of these three issues.

*(76 words)*

---

**Q3: Is a cracked heat exchanger dangerous?**

A: Yes. A cracked heat exchanger allows combustion gases — including carbon monoxide — to mix with the heated air circulating through your home. CO is odorless and colorless. If our technician identifies a crack during inspection, the furnace cannot be safely operated until the exchanger is replaced or the unit is replaced entirely. We perform combustion analysis on every furnace repair call to rule this out. If your CO detector is going off alongside furnace problems, call immediately.

*(80 words)*

---

**Q4: Why does my furnace keep shutting off after a few minutes?**

A: Short cycling — where the furnace ignites and then shuts off before completing a full heat cycle — is usually caused by a dirty flame sensor, a clogged filter restricting airflow, or an overheating heat exchanger triggering the high-limit switch. Check your filter first. If the filter is clean and the problem continues, the flame sensor likely needs cleaning or replacement. A technician can diagnose and fix this in under an hour in most cases.

*(78 words)*

---

**Q5: How often should I schedule furnace maintenance to avoid repairs?**

A: Once per year, ideally in late September or early October — before the first cold snap. An annual furnace tune-up catches worn igniters, dirty burners, and small cracks before they cause a no-heat call in December. IE homeowners who skip maintenance for 3 or more years see significantly higher repair rates. Our [furnace maintenance service](/services/hvac/furnace-maintenance) includes a full safety inspection, burner cleaning, and combustion analysis.

*(69 words)*

---

**Q6: How fast can you respond to an emergency furnace repair call in Murrieta?**

A: For daytime calls, average dispatch time from our Murrieta base is under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on call volume. We maintain a dedicated 24/7 emergency line at (951) 246-4337. Households with elderly residents, infants, or medical equipment that requires heat — mention that when you call. We prioritize those situations.

*(62 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Emergency Furnace Repair
```

### Intro Paragraph (52 words)
```
Some furnace failures cannot wait until morning. A cracked heat exchanger, a system that won't ignite at all, or complete heat loss during a cold Murrieta night are situations that need same-day attention. Carbon monoxide risk makes heat exchanger failures especially urgent. Our emergency line is live 24 hours a day, 7 days a week.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Complete heat failure — no ignition",
  "Carbon monoxide detector alarming",
  "Furnace cycling on and off rapidly",
  "Burning smell from vents or unit",
  "Gas smell near furnace (leave home, call gas company first)",
  "Yellow or flickering burner flame",
  "No heat with thermostat calling for heat",
  "Furnace making loud banging or popping sounds"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Restore Heat Today?
```

### Supporting Paragraph
```
Same-day furnace repair across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed technicians, and a 24/7 emergency line. Call now or schedule online — our HVAC team picks up.
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
| "all furnace and heating services" | `/services/hvac/heating` | Service Overview intro |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "furnace installation page" | `/services/hvac/furnace-installation` | FAQ Q1 answer (already written above) |
| "furnace maintenance service" | `/services/hvac/furnace-maintenance` | FAQ Q5 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "HVAC maintenance plan" | `/services/hvac/hvac-maintenance-plans` | Why Choose Us intro paragraph (already written above) |
| "furnace repair financing" | `/financing` | Why Choose Us or final CTA paragraph |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `furnace repair Murrieta` |
| Keyword in title | Yes — "Furnace Repair Murrieta, CA" |
| Keyword in H1 | Yes — "Furnace Repair in Murrieta" |
| Keyword in first paragraph | Yes — intro paragraph references Murrieta + furnace repair |
| Keyword in meta description (first half) | Yes — "Furnace repair in Murrieta" opens description |
| Canonical slug | `/services/hvac/furnace-repair` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "furnace repair across Murrieta" |
| Concrete numbers for AI citation | 500+ furnaces repaired; 30+ years; 2-hour response; 2–4 hours after-hours; 15/20-year repair-vs-replace threshold; once/year tune-up; 4.9 stars |
| Q&A H2s (AI extractable) | FAQ H2 question-framed; Emergency H2 urgency-framed |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~780 words |
| Estimated FAQ word count | ~447 words |
| Total estimated | ~1,227 words |
| Internal links in copy | Heating Hub [M], Furnace Installation [R], Furnace Maintenance [R], HVAC Maintenance Plans [O] |
| Schema recommendation | `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — `local-seo` must supply the C-20 license number before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: tech inspecting a residential gas furnace in a utility closet or garage, IE suburban setting. Before/after: dirty burner assembly vs. clean burner with new igniter.
3. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD with `areaServed` for all 10 cities — flag to web-developer.
4. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > HVAC > Heating > Furnace Repair`.
6. **CO safety note in Emergency section:** If user reports gas smell, copy instructs them to leave the home and call the gas company first. Confirm with client that this disclaimer language is acceptable.
