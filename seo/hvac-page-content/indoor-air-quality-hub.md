# Indoor Air Quality Sub-Hub Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/indoor-air-quality`  
**Primary keyword:** indoor air quality Murrieta  
**Supporting keywords:** air quality services Inland Empire, indoor air quality Temecula, IAQ services Menifee CA, air quality testing Murrieta, healthy home air Riverside CA  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Sub-hub page — same 9-section structure as leaf pages (AcRepair.tsx). Service Overview cards link DOWN to the 4 IAQ leaf pages. Hub is the most educational of the three sub-hubs — the customer often doesn't know which IAQ service they need. Service Overview doubles as a symptom-to-service matcher per the architecture doc.

> **Achievement badge note:** "650+ IAQ Installations & Cleanings" reflects estimated air duct cleaning, air filtration system installs, humidifier installs, and dehumidifier installs. Use this number on the IAQ hub only.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before going live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in `title`. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Indoor Air Quality Services Murrieta, CA | IAQ Solutions",
  description:
    "Indoor air quality services in Murrieta, Temecula & the Inland Empire. Air duct cleaning, whole-home filtration, humidifiers, and dehumidifiers. Call (951) 246-4337.",
  openGraph: {
    title: "Indoor Air Quality Services Murrieta, CA | IAQ Solutions | Gardner Plumbing Co.",
    description:
      "Cleaner indoor air for Inland Empire homes. Air duct cleaning, filtration systems, humidifiers, and dehumidifiers — licensed HVAC contractor. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/indoor-air-quality",
  },
  alternates: {
    canonical: "/services/hvac/indoor-air-quality",
  },
};
```

**Character counts (verify before ship):**
- title: 55 chars (renders as ~86 chars after template suffix)
- description: 157 chars
- canonical_slug: `/services/hvac/indoor-air-quality`

---

## SECTION 2 — Hero Section

### H1
```
Indoor Air Quality Services in Murrieta & the Inland Empire
```

### Subheadline
```
Air duct cleaning, whole-home filtration, humidifiers, and dehumidifiers — because the air inside your Inland Empire home matters as much as the temperature.
```
*(27 words)*

### Hero Badge Text
```
Line 1: Licensed IAQ Specialists
Line 2: Murrieta & Inland Empire
```

### 4 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Wind` | Cleaner Indoor Air |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Pricing |
| `Phone` | Free Consultation |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: Gardner tech inspecting or replacing an air filter / checking a duct vent inside a Murrieta-style residential home — interior setting, clean modern home, focused professional posture)*

---

## SECTION 3 — Emergency Alert Banner

```
Noticing dust buildup, musty odors, or allergy symptoms at home? Call (951) 246-4337 — our IAQ team assesses and improves indoor air quality across Murrieta and the Inland Empire.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Indoor Air Quality Services That Match Your Problem
```

### Section Intro Paragraph — Educational + Symptom Matcher (75 words)
```
Most homeowners in Murrieta notice a problem before they know which IAQ service they need. Here's how to match your symptom to the right solution: if your home feels dry and you're dealing with static electricity, cracked wood, or dry sinuses — look at a whole-home humidifier. If you notice excessive dust on surfaces even after cleaning — start with air duct cleaning or a whole-home filtration system. If the air feels heavy or you see condensation on windows — a dehumidifier is the likely fix.
```

### 4 Service Cards (each card links to a child leaf)

**Card 1**
- Icon: `Wind`
- Title: `Air Duct Cleaning`
- URL: `/services/hvac/indoor-air-quality/air-duct-cleaning`
- Description: `Whole-home duct cleaning that removes years of accumulated dust, debris, pet dander, and allergens — improving airflow and the quality of every breath you take.`
- Features:
  1. Whole-System Duct Cleaning
  2. Supply & Return Register Service
  3. HVAC Unit Interior Cleaning
  4. Before & After Airflow Test
- **Best for:** Homes with visible dust buildup, recent renovation, or ducts that haven't been cleaned in 5+ years

**Card 2**
- Icon: `Filter`
- Title: `Air Filtration Systems`
- URL: `/services/hvac/indoor-air-quality/air-filtration-systems`
- Description: `Whole-home air purifiers and high-efficiency filtration systems installed in your HVAC — capturing airborne particles, allergens, VOCs, and wildfire smoke particulates.`
- Features:
  1. MERV 13–16 Media Filters
  2. UV-C Air Purifier Options
  3. HEPA-Style Whole-Home Units
  4. iWave & RGF Guardian Systems
- **Best for:** Allergy sufferers, wildfire smoke concerns, pet dander, or any home where air quality directly affects health

**Card 3**
- Icon: `Droplets`
- Title: `Whole-Home Humidifiers`
- URL: `/services/hvac/indoor-air-quality/whole-home-humidifiers`
- Description: `Whole-home humidifier installation integrated with your HVAC system — consistent humidity throughout every room without portable unit hassle.`
- Features:
  1. Bypass & Fan-Powered Units
  2. Steam Humidifier Options
  3. Aprilaire & Honeywell Systems
  4. Automatic Humidity Control
- **Best for:** Homes with dry air complaints, static electricity, cracked wood floors or furniture, or nosebleeds during winter months

**Card 4**
- Icon: `Thermometer`
- Title: `Whole-Home Dehumidifiers`
- URL: `/services/hvac/indoor-air-quality/whole-home-dehumidifiers`
- Description: `Whole-home dehumidifier installation for homes with excess moisture — eliminating musty smells, protecting structure, and reducing mold risk.`
- Features:
  1. Ducted Whole-Home Units
  2. Aprilaire & Santa Fe Systems
  3. Automatic Humidity Sensing
  4. Condensate Drain Integration
- **Best for:** Homes with musty smells, visible condensation on windows, or recent water intrusion concerns

### Before/After Section

**H3:**
```
What Better Indoor Air Quality Feels Like
```

**Checkmark items (6):**
1. Less visible dust on surfaces — even a week after cleaning
2. Allergy and sinus symptoms reduced indoors — noticeably
3. No musty or stale odors when the HVAC system runs
4. Humidity staying in the 35–50% range without constant adjustment
5. Wildfire smoke season less disruptive — filtration catching particulates before they circulate
6. Wood floors, furniture, and trim protected from cracking or warping

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split scene — left: dirty air filter clogged with dust and debris, or a dark dusty duct interior; right: clean new filter installed or clean duct interior. Technical documentation style, no people.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our IAQ Team
```

### Section H2
```
Why Inland Empire Homeowners Trust Our IAQ Team
```

### Section Intro Paragraph (65 words — ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our IAQ team has completed over 650 air quality installations and cleanings across Riverside County — from air duct cleanings in Perris to whole-home filtration installs in Canyon Lake. Every job is assessed first, quoted upfront, and completed by a licensed technician.
```

### Why IAQ Matters in the Inland Empire (additional body text — this hub's "local angle" block per architecture doc)

```
The Inland Empire has specific indoor air quality challenges that coastal Southern California doesn't share. Summer wildfire smoke season — increasingly common from August through October — drives fine particulates (PM2.5) into homes through every gap in the building envelope. Desert dust from the Santa Ana winds adds a second seasonal layer. Homes built in the 1980s and 1990s in Murrieta and Temecula often have ductwork that hasn't been cleaned in a decade or more, circulating accumulated debris through the living space every time the HVAC runs. And the IE's dry summer air — routinely dropping below 20% relative humidity — causes health and structural problems that a correctly sized whole-home humidifier can prevent. These are local conditions. The right IAQ solution depends on which of them affects your home.
```
*(135 words — this block is separate from the 4-card grid; renders as a text section between the Why Choose Us intro and the 4 benefit cards)*

### 4 Benefit Cards

**Card 1**
- Icon: `Wind`
- Title: `Local IAQ Expertise`
- Description: `We understand Inland Empire-specific air quality challenges — wildfire smoke season, Santa Ana winds, and the dry desert air that affects humidity year-round.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every tech carries a valid CA HVAC license. IAQ equipment is installed correctly and integrated with your existing HVAC system — not just dropped in.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before work starts. The price on the quote is the price on the invoice — no add-ons after the installation.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving Riverside County`
- Description: `Three decades in the IE means we've seen how local air quality conditions affect homes — and which solutions actually work for this climate.`

### Achievement Badge (floating)
```
Line 1: 650+
Line 2: IAQ Installations & Cleanings
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (46 words)
```
Indoor air quality service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day scheduling throughout. See also our [AC services](/services/hvac/ac) and [heating services](/services/hvac/heating).
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
Indoor Air Quality Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about air quality, duct cleaning, filtration, and humidity control in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What's the most important indoor air quality improvement I can make first?**

A: Start with your air filter and ductwork before investing in add-on equipment. If your HVAC system is running with a clogged filter or dirty ducts, any air purifier or humidifier you install is fighting an uphill battle — the system is still circulating contaminated air as its baseline. Upgrade to a MERV 11 or higher filter first. If your ducts haven't been cleaned in 5 or more years, schedule [air duct cleaning](/services/hvac/indoor-air-quality/air-duct-cleaning) before adding other IAQ equipment. Once the foundation is clean, add targeted solutions — filtration, humidity control, or UV purification — based on your specific symptoms.

*(105 words)*

---

**Q2: Do I really need a humidifier in the Inland Empire — isn't it always warm and dry?**

A: Yes, and that's exactly why humidifiers matter in the IE. Inland Empire summers regularly drop below 20% relative humidity — well below the 35–50% range recommended by ASHRAE for comfort and health. At low humidity, sinuses dry out and become more vulnerable to airborne particles, wood floors and furniture crack, static electricity increases, and some respiratory conditions worsen. Winter heating compounds the problem — furnaces remove additional moisture from the air. A whole-home humidifier integrated with your HVAC system maintains target humidity automatically in every room. Portable units work for one room; whole-home units work for the house. See our [whole-home humidifier service](/services/hvac/indoor-air-quality/whole-home-humidifiers) for installation details.

*(118 words)*

---

**Q3: How often should air ducts be cleaned in an Inland Empire home?**

A: Most HVAC manufacturers and the EPA recommend every 3–5 years under normal conditions. Inland Empire homes may need more frequent cleaning due to desert dust and wildfire particulates entering through unsealed gaps during wind events. Clean sooner if: you've recently completed a renovation (drywall dust contaminates ducts quickly), you've moved into a home where cleaning history is unknown, you notice excessive dust on registers or surfaces, or anyone in the household has respiratory sensitivities. Our [air duct cleaning service](/services/hvac/indoor-air-quality/air-duct-cleaning) includes a before-and-after airflow test so you can see the difference.

*(97 words)*

---

**Q4: What do MERV ratings mean, and which rating should I use?**

A: MERV stands for Minimum Efficiency Reporting Value — a rating from 1 to 20 that measures how effectively a filter captures airborne particles. Higher numbers capture smaller particles. For most residential HVAC systems: MERV 8 is a standard upgrade from fiberglass filters and catches dust, pollen, and mold spores. MERV 11–13 captures fine dust, pet dander, and some smoke particles — recommended for allergy sufferers. MERV 14–16 is hospital-grade and captures bacteria and fine particulates — recommended for wildfire smoke sensitivity. One caution: filters rated MERV 13 and above restrict airflow more than lower-rated filters. Your HVAC system must be compatible before installing one. Our technicians verify compatibility during the assessment.

*(115 words)*

---

**Q5: Are UV-C lights in HVAC systems worth the investment?**

A: For the right situation, yes. UV-C germicidal lights installed at the air handler coil kill mold, bacteria, and some viruses before they circulate through the ductwork. They're most effective for: homes with recurring mold issues near the evaporator coil, households with immune-compromised members, or any home where biological contamination is a documented concern. UV-C lights are not a substitute for a clean duct system or a quality particulate filter — they target biological contaminants, not dust or allergens. If your primary concern is airborne particles from wildfire smoke or pet dander, a high-MERV filter or whole-home [air filtration system](/services/hvac/indoor-air-quality/air-filtration-systems) is the higher-priority investment.

*(112 words)*

---

**Q6: What indoor air quality service areas do you cover?**

A: Our IAQ service area covers Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. We dispatch from Murrieta. Scheduling is typically 1–3 business days for non-emergency IAQ installations and cleanings — these are planned appointments, not emergency dispatch. If you have an urgent air quality concern (strong chemical or mold smell tied to an HVAC event), call the emergency line at (951) 246-4337 for same-day assessment.

*(75 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Indoor Air Quality Becomes an Urgent Situation
```

### Intro Paragraph (54 words)
```
Most IAQ services are planned appointments — but some situations call for same-day attention. A burning or chemical smell coming from the vents, visible mold growth near supply registers, or a suspected refrigerant leak creating indoor air hazards are not wait-a-week situations. Our line is live 24 hours a day, 7 days a week.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Chemical or burning smell from HVAC vents",
  "Visible mold growth at or near supply registers",
  "Refrigerant smell indoors (sweet chemical odor)",
  "Sudden severe allergy or respiratory symptoms at home",
  "Wildfire smoke infiltrating through HVAC system",
  "Strong musty odor starting suddenly after HVAC runs",
  "Carbon monoxide detector triggered near air handler",
  "Water in ductwork or soaked insulation after a leak"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Improve the Air in Your Murrieta Home?
```

### Supporting Paragraph
```
Indoor air quality services across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed technicians, and real solutions matched to your home's specific air quality challenges. Call now or schedule online.
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
| "air duct cleaning" | `/services/hvac/indoor-air-quality/air-duct-cleaning` | Service card Card 1 + FAQ Q1 + FAQ Q3 |
| "air filtration systems" | `/services/hvac/indoor-air-quality/air-filtration-systems` | Service card Card 2 + FAQ Q5 |
| "whole-home humidifiers" | `/services/hvac/indoor-air-quality/whole-home-humidifiers` | Service card Card 3 + FAQ Q2 |
| "whole-home dehumidifiers" | `/services/hvac/indoor-air-quality/whole-home-dehumidifiers` | Service card Card 4 |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "AC services" | `/services/hvac/ac` | Service Areas intro paragraph |
| "heating services" | `/services/hvac/heating` | Service Areas intro paragraph |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "HVAC services" | `/services/hvac` | Breadcrumb (auto) |
| "financing options" | `/financing` | Why Choose Us or Final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `indoor air quality Murrieta` |
| Keyword in title | Yes — "Indoor Air Quality Services Murrieta, CA" |
| Keyword in H1 | Yes — "Indoor Air Quality Services in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + air quality |
| Keyword in meta description (first half) | Yes — "Indoor air quality services in Murrieta" opens description |
| Canonical slug | `/services/hvac/indoor-air-quality` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "indoor air quality services across Murrieta" |
| Concrete numbers for AI citation | 650+ IAQ jobs; 30+ years; 3–5 year duct cleaning cadence; MERV 8/11/13/14–16 scale; 35–50% target humidity range; 20% IE summer humidity; 4.9 stars |
| Local specifics for AI (AI-unique signals) | Santa Ana winds named; wildfire smoke season (August–October) named; PM2.5 reference; ASHRAE 35–50% recommendation; IE humidity specific to summer |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed (6 questions); Emergency H2 frames urgency scenario |
| Symptom-to-service matcher | Yes — in Service Overview intro paragraph per architecture doc recommendation |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~850 words (includes local IAQ context block in Why Choose Us — this hub is intentionally longer per architecture doc) |
| Estimated FAQ word count | ~622 words |
| Total estimated | ~1,472 words |
| Hub role | Links DOWN to all 4 IAQ leaves; links UP to HVAC vertical hub via breadcrumb + service areas section |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — appears once in Why Choose Us intro. Replace before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: Gardner tech inspecting air filter or duct register inside a residential home. Before/after: dirty vs. clean filter, or dirty vs. clean duct interior — technical documentation style.
3. **Breadcrumbs:** `Home > Services > HVAC > Indoor Air Quality`
4. **Schema:** `Service` JSON-LD with `areaServed` for all 10 cities + `FAQPage` for 6 FAQs. Flag to web-developer.
5. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible rendered line.
6. **Local IAQ context block:** The paragraph in Section 5 (Why Choose Us) after the intro and before the 4-card grid is intentional per architecture doc — this is the hub's "educational local angle" block. Developer should render it as a full-width text paragraph between the brand intro and the benefit cards.
7. **Symptom-to-service matcher in Service Overview intro:** The long intro paragraph is intentional. It's not filler — it's the matching logic that reduces bounce from users who don't know what they need. Do not shorten or replace with a generic intro.
8. **Air filtration leaf URL:** Per menu labels, the slug is `air-filtration-systems` (not `air-filtration`). Verify card URL: `/services/hvac/indoor-air-quality/air-filtration-systems`.
9. **Humidifier and dehumidifier leaf URLs:** Per menu labels, slugs are `whole-home-humidifiers` and `whole-home-dehumidifiers`. Verify card URLs match exactly.
10. **Brand-vertical dissonance note:** The pill badge above Section 5 H2 reads `"Why Choose Our IAQ Team"` (not "HVAC Team") per the task brief. This is intentional — this page is IAQ-specific.
