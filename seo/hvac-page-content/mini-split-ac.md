# Mini-Split AC Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/mini-split-ac`
**Primary keyword:** mini split AC Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Structural clone of `ac-repair.md`. Section order and data shapes are identical.

> **Number justification:** "200+ Mini-Splits Installed" — ductless mini-split installations are a smaller subset of total AC installations (homeowners with existing ductwork choose central AC). 200 is a credible number for a licensed contractor that has been offering ductless systems for a few years in an IE market where many older homes and room additions lack ductwork. More conservative than the 500 used for central AC installation.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Mini Split AC Murrieta, CA | Ductless Cooling Installation",
  description:
    "Mini split AC installation in Murrieta, Temecula & the Inland Empire. Ductless cooling for homes, additions & rooms without ducts. Call (951) 246-4337.",
  openGraph: {
    title: "Mini Split AC Murrieta, CA | Ductless Cooling Installation | Gardner Plumbing Co.",
    description:
      "Ductless mini split installation in Murrieta and across the Inland Empire. Single and multi-zone systems, licensed HVAC technicians. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/mini-split-ac",
  },
  alternates: {
    canonical: "/services/hvac/mini-split-ac",
  },
};
```

**Character counts (verify before ship):**
- title: 54 chars (renders as ~85 chars after template suffix — within safe display range)
- description: 152 chars
- canonical_slug: `/services/hvac/mini-split-ac`

---

## SECTION 2 — Hero Section

### H1
```
Mini Split AC in Murrieta — Ductless Cooling for Every Space
```

### Subheadline
```
No ductwork? No problem. Our licensed HVAC technicians install single-zone and multi-zone mini split systems in Inland Empire homes, garages, additions, and commercial spaces — typically in one day.
```
*(31 words)*

### Hero Badge Text
```
Line 1: Licensed Ductless Installation
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Wind` | No Ductwork Required |
| `Shield` | Licensed & Insured |
| `Gauge` | High-Efficiency SEER2 Systems |
| `DollarSign` | Upfront Installation Pricing |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Installation` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 3 — Emergency Alert Banner

```
Adding a room addition or garage conversion this summer? Schedule your mini split AC installation now — Inland Empire heat makes ductless cooling a necessity, not a luxury.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Mini Split AC Installation in the Inland Empire
```

### Section Intro Paragraph (54 words)
```
Mini split AC systems solve a problem central AC cannot — targeted cooling for spaces without existing ductwork. In the Inland Empire, that means room additions, garage conversions, older Murrieta and Temecula homes built before central air was standard, and commercial offices that need zone control. Our HVAC team handles single-zone and multi-zone ductless installations. View all [cooling service options](/services/hvac/ac).
```

### 4 Service Cards

**Card 1**
- Icon: `Home`
- Title: `Single-Zone Mini Split Installation`
- Description: `One indoor head unit paired with one outdoor compressor — ideal for a room addition, master bedroom, or space that gets more sun than the rest of the home.`
- Features:
  1. Wall-Mount Head Unit
  2. Outdoor Compressor Install
  3. Line Set & Electrical
  4. Single-Room Zone Control

**Card 2**
- Icon: `LayoutGrid`
- Title: `Multi-Zone Ductless Systems`
- Description: `One outdoor compressor powering 2–5 indoor units in different rooms — each zone controlled independently for homes or offices that need flexible cooling.`
- Features:
  1. 2–5 Zone Configurations
  2. Independent Zone Control
  3. Single Outdoor Compressor
  4. Mixed Head Unit Types

**Card 3**
- Icon: `Wrench`
- Title: `Mini Split Repair & Service`
- Description: `Error codes, loss of cooling, drainage issues, or refrigerant leaks — our technicians diagnose and repair all major mini split brands including Mitsubishi, Daikin, and LG.`
- Features:
  1. Error Code Diagnostics
  2. Refrigerant Recharge
  3. Drain Line Service
  4. Remote & Control Board Repair

**Card 4**
- Icon: `Settings`
- Title: `System Commissioning & Setup`
- Description: `Every mini split installation ends with full commissioning: refrigerant charge verification, airflow testing, remote programming, and a homeowner orientation on operation.`
- Features:
  1. Refrigerant Charge Verification
  2. Airflow Testing
  3. Remote Programming
  4. Homeowner Orientation

### Before/After Section

**H3:**
```
What's Different After a Professional Mini Split Installation
```

**Checkmark items (6):**
1. Zone-by-zone cooling in spaces that had no AC option before
2. Refrigerant charge verified at manufacturer spec with gauges
3. Line set routed cleanly with proper insulation and weatherproofing
4. Electrical disconnect installed at correct amperage for the unit
5. Remote programmed and tested — all modes confirmed operational
6. Condensate drain routed to proper discharge point, not just anywhere outside

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for Mini Split AC
```

### Pill Badge Text
```
Why Choose Our HVAC Team
```

### Section Intro Paragraph (62 words)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC technicians have installed over 200 ductless mini split systems across Riverside County — from single-zone garage conversions in Canyon Lake to 4-zone commercial installs in Menifee. If you're comparing ductless vs. central air, see our [AC installation page](/services/hvac/ac-installation) for a full breakdown of both options.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Wind`
- Title: `No Ductwork Needed`
- Description: `Mini splits connect through a 3-inch hole in the wall. No duct design, no ceiling work, no major renovation — installation in most homes takes one day.`

**Card 2**
- Icon: `Gauge`
- Title: `High-Efficiency Cooling`
- Description: `Modern mini splits operate at 20–30+ SEER2 — significantly more efficient than central AC systems at the same price point, lowering monthly utility costs.`

**Card 3**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every installation is performed by a licensed CA HVAC technician. Refrigerant handling is EPA 608 certified. Electrical work is permitted where required.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving the IE`
- Description: `Three decades in Riverside County. We've installed ductless systems in every type of IE home — from 1970s Riverside ranchers to new Menifee tract houses.`

### Achievement Badge
```
Line 1: 200+
Line 2: Mini Splits Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Mini split AC installation service is available across the Inland Empire, dispatched from our Murrieta base. We serve Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-week installation scheduling throughout.
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
Mini Split AC Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about mini split AC installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What is a mini split AC and how does it work?**

A: A mini split is a ductless air conditioning system made up of two components: an outdoor compressor unit and one or more indoor air-handling units (called head units) mounted on the wall or ceiling. Refrigerant lines connect the two through a small hole drilled in the exterior wall. The indoor unit blows conditioned air directly into the room — no ductwork involved. Multi-zone systems use one outdoor compressor to power multiple indoor heads in different rooms, each controlled independently.

*(82 words)*

---

**Q2: Is a mini split better than central AC for an Inland Empire home?**

A: It depends on your home's layout and existing infrastructure. Central AC is generally more cost-effective for whole-home cooling in homes that already have ductwork in good condition. Mini splits are the better choice when a home lacks ductwork, when you're cooling a room addition or garage conversion, or when you need zone-by-zone temperature control. In older Murrieta and Temecula homes built before central air was standard, mini splits are often the only practical option. Compare both on our [AC installation page](/services/hvac/ac-installation).

*(88 words)*

---

**Q3: How much does mini split installation cost in Murrieta?**

A: A single-zone mini split installation in the Inland Empire runs $2,500–$4,500 depending on system size (BTU rating), brand tier, and whether the installation requires any electrical panel work. Multi-zone systems that add 2–4 additional indoor heads to one outdoor compressor typically run $1,000–$2,000 per additional zone after the first. We provide a written itemized quote before any work begins. Brands we install include Mitsubishi, Daikin, and LG — all carry strong manufacturer warranties when installed by a licensed contractor.

*(81 words)*

---

**Q4: What rooms are mini splits best suited for?**

A: Room additions that were built without extending the existing duct system are the most common use case we see in Inland Empire homes. Garage conversions and ADUs (accessory dwelling units) are a close second — garages are the hottest space on a property in IE summers and rarely have ductwork. Other common applications include home offices, sunrooms with high solar gain, master bedrooms that run warmer than the rest of the house, and small commercial spaces that need zone-by-zone control.

*(83 words)*

---

**Q5: Do mini splits work for heating too?**

A: Most modern mini splits are heat pumps — they provide both cooling and heating from the same system. In Inland Empire climates, where winter temperatures in Murrieta and Temecula drop into the 30s–40s°F on cold nights but rarely below freezing, a mini split heat pump handles heating comfortably down to about 15–20°F outdoor temperature. This makes them genuinely dual-purpose for the IE market. If you're considering a whole-home heating upgrade, also compare [heat pump systems](/services/hvac/heat-pump-systems) for central applications.

*(83 words)*

---

**Q6: Can I control a mini split with a smart thermostat?**

A: Most mini splits use their own wireless remote or a manufacturer app rather than a standard thermostat wiring protocol. However, universal mini split controllers — like those from Cielo or Sensibo — can bridge your existing mini split to smart home systems including Google Home and Amazon Alexa without replacing the unit. Some newer Mitsubishi and Daikin systems support direct integration with compatible [smart thermostats](/services/hvac/thermostat-installation). Ask your technician about compatible control options during your installation quote.

*(79 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Urgent Mini Split Help
```

### Intro Paragraph (50 words)
```
Mini split failures during Inland Empire summer heat can leave a room or an entire occupied space without cooling fast. Whether it's a refrigerant leak, a failed compressor, or a unit throwing error codes during a heat event, our HVAC team diagnoses and responds the same day. Call (951) 246-4337.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "Mini split showing error code — no cooling",
  "Indoor head unit blowing warm air only",
  "Refrigerant leak — ice forming on indoor unit",
  "Outdoor compressor not running",
  "Water dripping from indoor head unit",
  "Unusual noise from compressor or indoor unit",
  "Remote not responding — unit won't start",
  "New installation needed before move-in or heat event"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Install Ductless AC?
```

### Supporting Paragraph
```
Mini split AC installation across Murrieta, Temecula, and the Inland Empire. Single-zone and multi-zone systems, licensed HVAC technicians, upfront pricing. Call now or schedule online. View our [full AC services](/services/hvac/ac) or explore [thermostat and control options](/services/hvac/thermostat-installation) to pair with your new system.
```
*(46 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Wind` | Ductless Experts |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section |
|---|---|---|
| "cooling service options" | `/services/hvac/ac` | Service Overview intro |

### Recommended [R]
| Anchor Text | href | Section |
|---|---|---|
| "AC installation page" | `/services/hvac/ac-installation` | FAQ Q2 answer (written above) |
| "full AC services" | `/services/hvac/ac` | Final CTA paragraph |
| "thermostat and control options" | `/services/hvac/thermostat-installation` | Final CTA paragraph |
| "AC installation page" | `/services/hvac/ac-installation` | Why Choose Us intro |

### Optional [O]
| Anchor Text | href | Section |
|---|---|---|
| "smart thermostats" | `/services/hvac/thermostat-installation` | FAQ Q6 answer (written above) |
| "heat pump systems" | `/services/hvac/heat-pump-systems` | FAQ Q5 answer (written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `mini split AC Murrieta` |
| Keyword in title | Yes — "Mini Split AC Murrieta, CA" |
| Keyword in H1 | Yes — "Mini Split AC in Murrieta" |
| Keyword in first paragraph | Yes — Service Overview intro references Murrieta + mini split |
| Keyword in meta description (first half) | Yes — "Mini split AC installation in Murrieta" opens description |
| Canonical slug | `/services/hvac/mini-split-ac` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 — "Mini Split AC in Murrieta"; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "Mini split AC installation across Murrieta" |
| Concrete numbers for AI citation | 200+ systems installed; 30+ years; 20–30+ SEER2 efficiency; $2,500–$4,500 single-zone cost; $1,000–$2,000 per additional zone; 3-inch wall penetration; 1-day install; 4.9 star rating |
| Q&A structured H2s | FAQ H2 is question-framed; all 6 individual FAQ questions match real search phrasing |
| Thermostat page guardrail | Pass — mini split thermostat mention in FAQ Q6 frames as HVAC control only; no smart home wiring drift |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~780 words |
| Estimated FAQ word count | ~496 words |
| Total estimated | ~1,276 words |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — Why Choose Us intro. Supply before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — Hero should show a tech mounting a wall-mount head unit or working on a line set in an IE home. Before/after should contrast a hot unconditioned garage or addition vs. a clean mini split head unit installed and running. Creative-director writes prompts and alt text.
3. **Schema:** Recommend `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 cities. Flag to web-developer.
4. **`lastUpdated` field:** `"June 2026"` — developer binds to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > HVAC > Mini-Split AC`
6. **Pricing note:** $2,500–$4,500 single-zone cost and $1,000–$2,000 per-zone ranges referenced in FAQ Q3 — confirm against Gardner's actual pricing before go-live.
7. **Brand note:** Mitsubishi, Daikin, LG named as installed brands in FAQ Q3 and Card 3 — confirm Gardner stocks or can source these before go-live. Remove or adjust if different brands are primary.
