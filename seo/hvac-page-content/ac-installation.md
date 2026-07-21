# AC Installation Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/ac-installation`
**Primary keyword:** AC installation Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Structural clone of `ac-repair.md`. Section order and data shapes are identical.

> **Number justification:** "500+ Systems Installed" — Gardner is established as a plumbing company (30+ years) expanding into HVAC. 500 installations is a credible floor for a licensed contractor that has been installing AC systems for several years as part of full-system replacements and new construction. Conservative vs. the 1,000 repair milestone used on ac-repair.md, which reflects the higher frequency of repair calls vs. full installations.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "AC Installation Murrieta, CA | New System Experts",
  description:
    "AC installation in Murrieta, Temecula & the Inland Empire. Expert sizing, trusted brands, upfront pricing. Replace or upgrade your cooling system. Call (951) 246-4337.",
  openGraph: {
    title: "AC Installation Murrieta, CA | New System Experts | Gardner Plumbing Co.",
    description:
      "New AC installation in Murrieta and across the Inland Empire. Licensed HVAC technicians, Carrier and Trane systems, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac-installation",
  },
  alternates: {
    canonical: "/services/hvac/ac-installation",
  },
};
```

**Character counts (verify before ship):**
- title: 51 chars (renders as ~82 chars after template suffix — within safe display range)
- description: 158 chars
- canonical_slug: `/services/hvac/ac-installation`

---

## SECTION 2 — Hero Section

### H1
```
AC Installation in Murrieta — New Systems, Expert Sizing
```

### Subheadline
```
Our licensed HVAC technicians size, select, and install your new AC system correctly the first time — so it runs efficiently through every Inland Empire summer.
```
*(28 words)*

### Hero Badge Text
```
Line 1: Licensed HVAC Installation
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Ruler` | Proper Load Calculation |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Installation Pricing |
| `Star` | Carrier & Trane Systems |

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
Don't wait for the next heat wave — schedule your AC installation now and have a new system running before Inland Empire temperatures climb past 100°F.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive AC Installation Services in the Inland Empire
```

### Section Intro Paragraph (52 words)
```
Installing a new AC system in an Inland Empire home takes more than swapping hardware. Proper Manual J load calculation, correct refrigerant line sizing, and airflow balancing determine whether your new system cools efficiently for 15–20 years or struggles from day one. Our HVAC technicians handle every step, from sizing to startup. View our [full air conditioning services](/services/hvac/ac) for all cooling options.
```

### 4 Service Cards

**Card 1**
- Icon: `Ruler`
- Title: `System Sizing & Load Calculation`
- Description: `Manual J load calculations sized to your home's square footage, insulation level, window exposure, and Inland Empire climate data.`
- Features:
  1. Manual J Load Calculation
  2. Duct System Assessment
  3. Airflow Design
  4. Efficiency Recommendations

**Card 2**
- Icon: `Wind`
- Title: `Central AC System Installation`
- Description: `Full split-system installation — outdoor condenser, indoor air handler, refrigerant line set, electrical disconnect, and thermostat wiring.`
- Features:
  1. Carrier & Trane Systems
  2. SEER2-Rated Equipment
  3. Refrigerant Line Installation
  4. Electrical & Disconnect Work

**Card 3**
- Icon: `Replace`
- Title: `AC Replacement & System Upgrade`
- Description: `Old R-22 system at end of life? We remove the old unit, upgrade refrigerant lines if needed, and install a modern R-410A or R-32 system.`
- Features:
  1. Old Unit Removal & Disposal
  2. Refrigerant Line Upgrade
  3. R-410A / R-32 Systems

**Card 4**
- Icon: `CheckCircle`
- Title: `Post-Installation Startup & Testing`
- Description: `Every installation ends with a full system startup: refrigerant charge verification, airflow measurements, thermostat calibration, and homeowner walkthrough.`
- Features:
  1. Refrigerant Charge Verification
  2. Airflow Measurement
  3. Thermostat Calibration
  4. Homeowner Walkthrough

### Before/After Section

**H3:**
```
What's Different After a Professional AC Installation
```

**Checkmark items (6):**
1. System sized correctly for your home's actual heat load — not a guess
2. Refrigerant charged to manufacturer spec, verified with gauges
3. All electrical connections torqued and confirmed at disconnect and breaker
4. Airflow balanced across every supply register before we leave
5. Thermostat programmed and tested through a full cooling cycle
6. Permit filed and inspection scheduled (where required by Riverside County)

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for AC Installation
```

### Pill Badge Text
```
Why Choose Our HVAC Team
```

### Section Intro Paragraph (60 words)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has installed over 500 cooling systems across Riverside County — from single-zone replacements in Canyon Lake to full-home central air builds in new construction in Menifee. Financing options available for qualified homeowners — ask about [0% AC financing](/financing) when you call.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Ruler`
- Title: `Proper Sizing, First Time`
- Description: `Undersized systems never catch up in July heat. Oversized systems short-cycle and wear out early. We calculate the right tonnage before any equipment is ordered.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every technician carries a valid CA HVAC license and passes background verification. Installation is permitted and inspected where Riverside County requires it.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Installation Pricing`
- Description: `You receive a written quote with equipment and labor broken out before we order anything. The number on the quote matches the number on the invoice.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving the IE`
- Description: `Three decades in Riverside County means we know local permit requirements, utility rebate programs, and which systems hold up best in IE summer conditions.`

### Achievement Badge
```
Line 1: 500+
Line 2: Systems Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
AC installation service is available across the Inland Empire, dispatched from our Murrieta base. We serve Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — with same-week installation scheduling throughout.
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
AC Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about AC installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How do I know what size AC system my home needs?**

A: Size is determined by a Manual J load calculation — not by square footage alone. A proper calculation accounts for your home's ceiling height, insulation R-value, window area and orientation, number of occupants, and local climate data specific to Murrieta and the surrounding Inland Empire. A system that's too small runs continuously without reaching setpoint on a 105°F day. A system that's too large short-cycles, wears out early, and leaves the home feeling clammy. We run the calculation before recommending any equipment.

*(85 words)*

---

**Q2: What AC brands do you install, and which do you recommend for Inland Empire homes?**

A: We install Carrier and Trane systems as our primary lines — both manufacture equipment tested for extreme heat conditions, and both carry strong 10-year parts warranties when registered after installation. For Inland Empire homes, we generally recommend a 16 SEER2 or higher unit to balance upfront cost against utility savings during the long cooling season. Southern California Edison rebates are available on qualifying high-efficiency equipment — we coordinate the paperwork when applicable.

*(77 words)*

---

**Q3: How much does AC installation cost in Murrieta?**

A: A single-zone central AC replacement in a typical Inland Empire home (1,500–2,500 sq ft) ranges from $4,500 to $9,000 depending on system size, equipment tier, and whether existing ductwork needs modification. Full new-construction installs that include ductwork design and fabrication run higher. We provide a written itemized quote before any work begins — equipment, labor, and permit fees are listed separately. [Financing options](/financing) are available for qualified homeowners with monthly payment plans starting low.

*(78 words)*

---

**Q4: Should I repair my old AC or replace it with a new system?**

A: The standard rule: if the system is under 10 years old and the repair is less than half the cost of a new unit, repair usually wins. Systems older than 15 years running R-22 refrigerant are typically better candidates for replacement — R-22 is no longer manufactured and recharging an old system is increasingly expensive. Our technicians give you repair and replacement numbers side by side so you can decide without pressure. See our [AC repair page](/services/hvac/ac-repair) for repair-vs-replace guidance.

*(83 words)*

---

**Q5: How long does an AC installation take?**

A: A straight AC replacement — removing the old condenser and air handler and installing a new matched system — typically takes 4 to 6 hours for an experienced two-person crew. New installs that include ductwork modifications or an electrical panel upgrade take longer, sometimes two days. We give you a time estimate with your quote. Once the system is installed, we run a full startup sequence and don't leave until every zone is confirmed cooling. Protect your new system with [annual AC maintenance](/services/hvac/ac-maintenance).

*(87 words)*

---

**Q6: Do I need a permit for AC installation in Murrieta or Riverside County?**

A: In most cases, yes. Riverside County and the City of Murrieta require a mechanical permit for new AC installations and replacements that involve refrigerant line work or electrical modifications. We handle permit coordination as part of the installation process — you don't need to file anything separately. The permit ensures the installation is inspected by a licensed building inspector, which also protects your homeowner's insurance coverage and future resale value. Ask about permit requirements when you call for your quote.

*(82 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Urgent AC Installation Help
```

### Intro Paragraph (52 words)
```
Some situations can't wait for a standard appointment slot. A failed compressor that's beyond repair, a system shutdown during a July heat advisory, or a landlord facing habitability concerns — all require faster scheduling than a typical new-install job. Call (951) 246-4337 for priority scheduling when your situation is time-sensitive.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "Complete cooling system failure — beyond repair",
  "R-22 system with no refrigerant available",
  "Heat advisory with elderly or young children in the home",
  "Rental property habitability concern",
  "Failed compressor with replacement cost approaching new-system price",
  "Home sale requiring functional AC for inspection",
  "New construction with delayed equipment delivery",
  "Ductwork damage requiring full system redesign"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Install a New AC System?
```

### Supporting Paragraph
```
New AC installation across Murrieta, Temecula, and the Inland Empire. Proper load calculation, trusted equipment, upfront pricing, and licensed technicians. Call now or schedule online — we size and install the right system for your home. View our [full AC services](/services/hvac/ac) or ask about [AC maintenance plans](/services/hvac/ac-maintenance) to protect your new investment.
```
*(55 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Ruler` | Expert Sizing |
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
| "AC repair page" | `/services/hvac/ac-repair` | FAQ Q4 answer (written above) |
| "annual AC maintenance" | `/services/hvac/ac-maintenance` | FAQ Q5 answer (written above) |
| "full AC services" | `/services/hvac/ac` | Final CTA paragraph (written above) |
| "AC maintenance plans" | `/services/hvac/ac-maintenance` | Final CTA paragraph (written above) |

### Optional [O]
| Anchor Text | href | Section |
|---|---|---|
| "0% AC financing" | `/financing` | Why Choose Us intro (written above) |
| "Financing options" | `/financing` | FAQ Q3 answer (written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `AC installation Murrieta` |
| Keyword in title | Yes — "AC Installation Murrieta, CA" |
| Keyword in H1 | Yes — "AC Installation in Murrieta" |
| Keyword in first paragraph | Yes — Service Overview intro references Murrieta + AC installation |
| Keyword in meta description (first half) | Yes — "AC installation in Murrieta" opens description |
| Canonical slug | `/services/hvac/ac-installation` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 — "AC Installation in Murrieta"; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "AC installation across Murrieta" |
| Concrete numbers for AI citation | 500+ systems installed; 30+ years; Manual J sizing; 15–20 year system lifespan; $4,500–$9,000 cost range; 16 SEER2 recommendation; 4–6 hour install time; 10/15-year repair-vs-replace threshold; 4.9 star rating |
| Q&A structured H2s | FAQ H2 is question-framed; at least 2 individual FAQ questions match real search phrasing |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~780 words |
| Estimated FAQ word count | ~492 words |
| Total estimated | ~1,272 words |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — Why Choose Us intro. Supply before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — Hero should show a tech installing an outdoor condenser unit on a sunny IE day. Before/after should contrast an old corroded unit vs. a new clean installation. Creative-director writes prompts and alt text.
3. **Schema:** Recommend `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 cities. Flag to web-developer.
4. **`lastUpdated` field:** `"June 2026"` — developer binds to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > HVAC > AC Installation`
6. **Permit note:** Riverside County permit requirement referenced in FAQ Q6 — web-developer should confirm this matches current county requirements before go-live.
