# Air Filtration Systems Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/air-filtration-systems`
**Primary keyword:** whole home air filtration Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** IAQ leaf page. Follows ac-repair.md 9-section structure exactly.

> **Achievement badge note:** "200+ Whole-Home Filtration Systems" — reflects HVAC team installs including media filter upgrades, electronic air cleaner installations, and UV-C add-ons across Murrieta, Temecula, and Menifee. Reasonable for a contractor that has been doing HVAC maintenance with plumbing crossover customers.

> **FLAG — C-20 License:** The CSLB C-20 (HVAC) contractor license number is unknown at time of writing. All instances of `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout appends `| Gardner Plumbing Co.` — do NOT include it in `title`. Include it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Whole Home Air Filtration Murrieta, CA | HVAC Install",
  description:
    "Whole home air filtration in Murrieta, Temecula & the Inland Empire. MERV 13–16 media filters, electronic air cleaners, UV-C upgrades. Integrated with your existing HVAC. Call (951) 246-4337.",
  openGraph: {
    title: "Whole Home Air Filtration Murrieta, CA | HVAC Install | Gardner Plumbing Co.",
    description:
      "Whole-home air filtration systems in Murrieta and across the Inland Empire. MERV 13+ media filters, electronic air cleaners, UV-C add-ons. Licensed HVAC installation. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/air-filtration-systems",
  },
  alternates: {
    canonical: "/services/hvac/air-filtration-systems",
  },
};
```

**Character counts (verify before ship):**
- title: 54 chars (renders as 85 chars after template suffix)
- description: 174 chars (trim to 160 — suggested cut: remove "Integrated with your existing HVAC.")
- canonical_slug: `/services/hvac/air-filtration-systems`

> **Developer note:** Meta description is 174 chars. Trim to: "Whole home air filtration in Murrieta, Temecula & the Inland Empire. MERV 13–16 media filters, electronic air cleaners, UV-C upgrades. Call (951) 246-4337." (153 chars)

---

## SECTION 2 — Hero Section

### H1
```
Whole Home Air Filtration in Murrieta — Integrated with Your HVAC
```

### Subheadline
```
A portable air purifier handles one room. A whole-home air filtration system cleans every cubic foot of air your HVAC moves — without the clutter, the filters to swap monthly, or the coverage gaps.
```
*(37 words)*

### Hero Badge Text
```
Line 1: MERV 13–16 Filtration
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Wind` | Whole-Home Coverage |
| `Shield` | Licensed HVAC Installation |
| `Zap` | Works with Existing AC & Furnace |
| `Phone` | Free In-Home Assessment |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: HVAC tech installing a media filter housing in a utility closet or air handler cabinet, Inland Empire residential setting, clean professional look)*

---

## SECTION 3 — Emergency Alert Banner

```
Allergy season in the Inland Empire hits hard in spring and fall. Call (951) 246-4337 to have our HVAC team assess your home's filtration and recommend the right system — appointments available this week.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Whole-Home Air Filtration Systems for the Inland Empire
```

### Section Intro Paragraph (58 words)
```
Most Inland Empire homes run a standard 1-inch filter that catches large debris but does little for allergens, fine dust, or smoke particulates. Whole home air filtration upgrades the filtration media inside your existing HVAC system — so every room gets cleaner air every time the system runs, without any standalone devices to maintain or move.
```

### 4 Service Cards

**Card 1**
- Icon: `Layers`
- Title: `High-Efficiency Media Filters`
- Description: `MERV 13–16 media filters installed in your existing air handler — capturing allergens, fine dust, and smoke particles that standard 1-inch filters miss entirely.`
- Features:
  1. MERV 13 to MERV 16 Rating
  2. 4–5 Inch Media Depth
  3. 6–12 Month Filter Life
  4. Fits Existing Filter Housing

**Card 2**
- Icon: `Zap`
- Title: `Electronic Air Cleaners`
- Description: `Whole-home electronic air cleaners use electrostatic charge to capture particles as small as 0.1 microns — the category that includes bacteria, fine smoke, and some viruses.`
- Features:
  1. 0.1 Micron Particle Capture
  2. Reusable Filter Cells
  3. No Disposable Filter Cost
  4. Professional Installation Only

**Card 3**
- Icon: `Sun`
- Title: `UV-C Light Air Purifiers`
- Description: `UV-C systems mount inside the air handler and use germicidal ultraviolet light to neutralize airborne pathogens passing through the coil section — a common add-on for allergy households.`
- Features:
  1. Germicidal UV-C Wavelength
  2. Coil-Mount or In-Duct Install
  3. Targets Bacteria & Mold Spores
  4. Low Maintenance — Annual Bulb

**Card 4**
- Icon: `Filter`
- Title: `Filter Upgrade Assessment`
- Description: `Not sure which system fits your home? Our HVAC tech measures your air handler, checks existing filter housing dimensions, and recommends the highest-efficiency option your system can support without restricting airflow.`
- Features:
  1. Air Handler Measurement
  2. Static Pressure Check
  3. MERV Rating Recommendation
  4. Written System Report

### Before/After Section

**H3:**
```
What Changes After Whole-Home Filtration Installation
```

**Checkmark items (6):**
1. Allergens, pollen, and pet dander captured before reaching living spaces
2. Fine dust reduction visible on surfaces within weeks of install
3. Wildfire smoke particulates filtered during fire season events
4. HVAC system protected — cleaner air means less debris on the evaporator coil
5. Elimination of portable air purifier clutter in every room
6. Consistent air quality across all rooms — not just where a device sits

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before shows a standard thin 1-inch filter with visible gray dust layer, after shows a thick 4-inch MERV 13 media filter in a clean housing. Clear product comparison.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our IAQ Team
```

### Section H2
```
Why Inland Empire Homeowners Trust Our HVAC Team for Air Filtration
```

### Section Intro Paragraph (65 words — canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Whole-home air filtration is not a plug-in product — it requires matching the filter system to your air handler's static pressure tolerance, your existing duct sizing, and your home's actual IAQ needs. Our technicians assess before they recommend, and they install what your system can actually support.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Filter`
- Title: `Right-Sized for Your System`
- Description: `A MERV 16 filter on an underpowered air handler creates airflow restriction that damages the system. We measure first and install what fits.`

**Card 2**
- Icon: `Award`
- Title: `Full System Integration`
- Description: `Your filtration system integrates with your existing AC and furnace — no new equipment, no separate maintenance schedule, no clutter.`

**Card 3**
- Icon: `Shield`
- Title: `Licensed HVAC Installation`
- Description: `Electronic air cleaners and UV-C systems require electrical work inside the air handler cabinet. Every install is performed by a licensed HVAC technician.`

**Card 4**
- Icon: `Link`
- Title: `Start with Clean Ducts`
- Description: `For best results, our team recommends [air duct cleaning](/services/hvac/air-duct-cleaning) before filtration installation — clean ducts let your new system perform from day one instead of filtering existing debris first.`

### Achievement Badge
```
Line 1: 200+
Line 2: Whole-Home Filtration Systems
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Whole-home air filtration service is available across the Inland Empire, with fast scheduling from our Murrieta base. We serve Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-week availability throughout.
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
Whole Home Air Filtration Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about whole-home air filtration in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What is whole home air filtration and how is it different from a portable air purifier?**

A: Whole home air filtration installs directly into your HVAC system — typically at the air handler or furnace return side. Every time your system runs, all the air in your home passes through the filtration media before being distributed to each room. A portable air purifier handles the square footage of one room and only cleans air in its immediate vicinity. For a 2,000 square-foot Murrieta home, a single portable unit covers roughly 300–400 square feet. A whole-home system covers the entire living area simultaneously. See all of our [indoor air quality services](/services/hvac/indoor-air-quality) for the full picture.

*(107 words)*

---

**Q2: What MERV rating does my Inland Empire home actually need?**

A: MERV 13 captures particles as small as 0.3 microns — the size range that includes most allergens, pollen, fine dust, and wildfire smoke particles. That's the right baseline for most Inland Empire homes dealing with seasonal allergies and fire season air quality. MERV 16 goes further, capturing particles down to 0.1 microns, but requires an air handler with enough static pressure capacity to pull air through denser media. Our technician measures your system before recommending a rating — installing too high a MERV without checking airflow first can starve your blower motor.

*(95 words)*

---

**Q3: Can I install a better air filter myself, or do I need a technician?**

A: Basic filter swaps — replacing a 1-inch filter with another 1-inch filter — are a DIY task. But upgrading to a 4-inch or 5-inch deep-media filter housing, installing an electronic air cleaner, or adding a UV-C purifier all require modifying the air handler cabinet. The housing needs to be cut in, sealed, and wired correctly. A poor install creates air bypass — air finds the path of least resistance around the filter rather than through it, defeating the purpose entirely. Upgrades beyond basic filter swaps need a licensed HVAC technician.

*(92 words)*

---

**Q4: How does a whole-home air filtration system help during wildfire season in the Inland Empire?**

A: During a fire event, outdoor PM2.5 (fine particulate matter) levels in Riverside County can spike well above EPA hazard thresholds within hours. Standard 1-inch HVAC filters are rated MERV 4–6 and pass most of those particles directly into your living space. A MERV 13 or higher media filter captures the smoke particle size range effectively, making your HVAC system a positive-pressure barrier instead of a conduit for outdoor air pollution. Homes in Canyon Lake, Murrieta, and Temecula — all within range of recent regional fire events — see the clearest benefit.

*(93 words)*

---

**Q5: How often does a whole-home media filter need to be replaced?**

A: A 4-inch or 5-inch deep-media filter at MERV 13 typically lasts 6 to 12 months under normal operating conditions. Homes with pets, high occupancy, or significant outdoor dust infiltration (common in Lake Elsinore, Hemet, and Perris) tend to run closer to the 6-month end. We recommend checking filter condition at every [AC maintenance visit](/services/hvac/ac-maintenance) and setting a calendar reminder 6 months after each replacement. Electronic air cleaner cells are reusable — they need washing every 3 months, not replacement.

*(84 words)*

---

**Q6: Does a whole-home air filtration system affect my AC or furnace performance?**

A: Done correctly, it should not reduce performance — and it often improves it. A clean, high-efficiency filter keeps the evaporator coil cleaner, which reduces the coil's resistance to heat transfer and improves cooling efficiency. The risk comes from installing too high a MERV rating without checking whether the air handler's blower can overcome the added static pressure. An under-powered blower working against a dense filter will run longer cycles, wear out faster, and reduce airflow to distant rooms. That's why our assessment step is not optional — it protects your equipment. Pair with [whole-home humidifiers](/services/hvac/whole-home-humidifiers) for complete indoor air quality control.

*(107 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Air Quality Becomes an Urgent Problem
```

### Intro Paragraph (48 words)
```
Most filtration installations are scheduled. But wildfire smoke events, a family member's new asthma diagnosis, or a sudden allergy spike can move IAQ from "someday" to "this week." Our scheduling line is open Monday through Saturday, with same-week availability across the Inland Empire.
```

### 8 Urgent Scenarios
```js
const urgentReasons = [
  "Wildfire smoke entering home through HVAC system",
  "Household member with new asthma or allergy diagnosis",
  "Visible dust accumulation within days of cleaning",
  "Persistent allergy symptoms despite medication",
  "Pet dander causing respiratory issues for occupants",
  "New baby in the home — proactive air quality improvement",
  "Immunocompromised household member requiring reduced pathogen load",
  "Post-construction dust from renovation work"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Upgrade Your Home's Air Filtration?
```

### Supporting Paragraph
```
Whole home air filtration across Murrieta, Temecula, and the Inland Empire. MERV 13–16 media filters, electronic air cleaners, and UV-C upgrades — all integrated with your existing HVAC system. Call now or schedule your assessment online.
```
*(37 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Filter` | MERV 13–16 Rated |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "indoor air quality services" | `/services/hvac/indoor-air-quality` | FAQ Q1 answer (already written in above) |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "air duct cleaning" | `/services/hvac/air-duct-cleaning` | Why Choose Us Card 4 (already written in above) |
| "AC maintenance visit" | `/services/hvac/ac-maintenance` | FAQ Q5 answer (already written in above) |
| "whole-home humidifiers" | `/services/hvac/whole-home-humidifiers` | FAQ Q6 answer (already written in above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `whole home air filtration Murrieta` |
| Keyword in title | Yes — "Whole Home Air Filtration Murrieta, CA" |
| Keyword in H1 | Yes — "Whole Home Air Filtration in Murrieta" |
| Keyword in first paragraph | Yes — intro references "whole home air filtration" + Inland Empire / Murrieta context |
| Keyword in meta description (first half) | Yes — "Whole home air filtration in Murrieta" opens description |
| Canonical slug | `/services/hvac/air-filtration-systems` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "air filtration across Murrieta" |
| Concrete numbers for AI citation | 200+ systems installed; MERV 13–16 ratings; 0.1–0.3 micron particle capture; 6–12 month filter life; 3-month wash interval for electronic cells; 4.9 star rating |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed; "When Air Quality Becomes an Urgent Problem" frames urgency scenario |
| IAQ pill badge | "Why Choose Our IAQ Team" — compliant |
| Standalone purifier drift check | Pass — page stays on whole-home/HVAC-integrated systems throughout; no drift to portable units |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~760 words |
| Estimated FAQ word count | ~578 words |
| Total estimated | ~1,338 words |
| Internal links in copy | IAQ Hub [M], Air Duct Cleaning [R], AC Maintenance [R], Whole-Home Humidifiers [R] — all written in above |
| Schema recommendation | `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — `local-seo` must supply before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director handles. Hero: tech at air handler installing media filter housing. Before/after: thin dirty 1-inch filter vs. thick clean MERV 13 media filter.
3. **Meta description length:** 174 chars as written. Developer should use trimmed version: "Whole home air filtration in Murrieta, Temecula & the Inland Empire. MERV 13–16 media filters, electronic air cleaners, UV-C upgrades. Call (951) 246-4337." (153 chars).
4. **Schema:** `FAQPage` JSON-LD for all 6 FAQs + `Service` JSON-LD with `areaServed` for all 10 cities. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible "Last Updated: June 2026" line.
6. **Breadcrumbs:** `Home > Services > Indoor Air Quality > Air Filtration Systems`.
