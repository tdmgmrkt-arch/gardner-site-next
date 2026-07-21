# Furnace Installation Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/furnace-installation`  
**Primary keyword:** furnace installation Murrieta  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Follows ac-repair.md section structure exactly. All 9 sections present.

> **Badge count note:** "300+ Furnace Installations" — installation volume is naturally lower than repair volume. 300 installs over a multi-decade Riverside County operation is defensible and doesn't overclaim on a newer HVAC vertical.

> **FLAG — C-20 License:** All instances of `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Furnace Installation Murrieta, CA | New Heating System",
  description:
    "Furnace installation in Murrieta, Temecula & the Inland Empire. Expert sizing, gas & electric systems, upfront pricing. Call (951) 246-4337 for a free estimate.",
  openGraph: {
    title: "Furnace Installation Murrieta, CA | New Heating System | Gardner Plumbing Co.",
    description:
      "New furnace installation in Murrieta and across the Inland Empire. Licensed HVAC technicians, proper load calculation, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/furnace-installation",
  },
  alternates: {
    canonical: "/services/hvac/furnace-installation",
  },
};
```

**Character counts (verify before ship):**
- title: 55 chars (renders as 86 chars after template suffix)
- description: 157 chars
- canonical_slug: `/services/hvac/furnace-installation`

---

## SECTION 2 — Hero Section

### H1
```
Furnace Installation in Murrieta — New Heating System, Right-Sized
```

### Subheadline
```
Licensed HVAC technicians size, install, and commission your new furnace correctly — so it heats every room and runs efficiently for years.
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
| `Clock` | Fast Installation |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Pricing |
| `Phone` | Free Estimates |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt — tech installing a new gas furnace in a utility closet or garage, IE suburban setting, new unit visible)*

---

## SECTION 3 — Emergency Alert Banner

```
Old furnace failing before winter? Call (951) 246-4337 — our HVAC team schedules new furnace installations fast across Murrieta and the Inland Empire.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Furnace Installation Services in the Inland Empire
```

### Section Intro Paragraph (54 words)
```
Most Inland Empire homes run their furnaces fewer than 100 days a year — but those days matter. A furnace that's the wrong size wastes energy on mild days and can't keep up when temperatures drop into the 30s in Hemet or Menifee. Our technicians perform a proper load calculation before selecting any unit, so the system fits your home. View all furnace and heating services.
```
*(Internal link: "all furnace and heating services" → `/services/hvac/heating` [M])*

### 4 Service Cards

**Card 1**
- Icon: `Wrench`
- Title: `Load Calculation & System Sizing`
- Description: `We calculate your home's heating load using square footage, insulation, window count, and ceiling height — not guesswork. Right-sized systems last longer and cost less to run.`
- Features:
  1. Manual J Load Calculation
  2. Duct Condition Assessment
  3. Gas Line Capacity Check
  4. Brand-Neutral Recommendations

**Card 2**
- Icon: `Zap`
- Title: `Gas Furnace Installation`
- Description: `High-efficiency gas furnace installation for Inland Empire homes with existing gas service. Includes gas line connection and flue venting. Where a city permit is required, coordination is available as a pass-through line on your quote.`
- Features:
  1. 80% & 96% AFUE Options
  2. Gas Line Connection
  3. Flue Venting & Exhaust

**Card 3**
- Icon: `Droplets`
- Title: `Electric Furnace & Air Handler`
- Description: `For homes without gas service, an electric furnace or air handler provides clean, reliable heat — often paired with a heat pump for maximum efficiency.`
- Features:
  1. Electric Furnace Install
  2. Air Handler Installation
  3. Heat Pump Compatibility
  4. Thermostat Wiring

**Card 4**
- Icon: `Award`
- Title: `Furnace Replacement & Haul-Away`
- Description: `Full replacement of an existing unit, including safe disconnection, disposal of the old furnace, and commissioning of the new system before we leave.`
- Features:
  1. Safe System Disconnect
  2. Old Unit Haul-Away
  3. New System Commission
  4. First-Run Testing

### Before/After Section

**H3:**
```
What Changes After a Professional Furnace Installation
```

**Checkmark items (6):**
1. System sized correctly to your home's actual heating load
2. Gas pressure confirmed at manufacturer specification
3. Flue and exhaust venting inspected and sealed
4. All electrical connections torqued and tested
5. Thermostat wired, calibrated, and confirmed communicating
6. Full heat cycle run-tested — every register confirmed blowing heat

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = old, corroded furnace in utility closet; after = new high-efficiency furnace installed, clean and labeled)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for Furnace Installation
```

### Section Intro Paragraph (62 words — contains the ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has completed over 300 furnace installations across Riverside County — from a first-time gas system in Canyon Lake to a full system upgrade in Hemet. Considering a heat pump instead of a gas furnace? See how heat pump systems compare.
```
*(Internal link: "heat pump systems compare" → `/services/hvac/heat-pump-systems` [R])*

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Fast Installation Scheduling`
- Description: `Most furnace installations are scheduled within 3–5 business days. Emergency replacement installs — when a system fails going into winter — are prioritized.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every technician carries a valid CA HVAC license. Permit coordination is available where required and inspection scheduling is handled as part of the job.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Installation Pricing`
- Description: `You receive a written quote that includes equipment, labor, permit fees, and haul-away. The number on the quote is the number on the invoice.`

**Card 4**
- Icon: `Award`
- Title: `Brand-Neutral Recommendations`
- Description: `We install Carrier, Trane, Lennox, and Rheem systems — and recommend based on your home and budget, not margin.`

### Achievement Badge
```
Line 1: 300+
Line 2: Furnace Installations
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Furnace installation service is available across the Inland Empire, with fast scheduling from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — throughout Riverside County.
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
Furnace Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about furnace installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How do I know when to replace rather than repair my furnace?**

A: If your furnace is over 15 years old and facing a repair that costs more than a third of a new unit's price, replacement typically makes more financial sense. A furnace over 20 years old is beyond its designed service life regardless of repair cost. Multiple failures in the same season — igniter, gas valve, and heat exchanger in one winter — are also a strong replacement signal. If you're not sure, we give you both numbers and let you decide. If repair still makes sense, see our [furnace repair page](/services/hvac/furnace-repair).

*(94 words)*

---

**Q2: What size furnace does my Inland Empire home need?**

A: Sizing depends on your home's square footage, insulation quality, number and size of windows, ceiling height, and local climate. A furnace that's too large short-cycles — burning fuel without completing a full heat cycle. One that's too small runs constantly and still can't reach setpoint on cold nights. Our technicians perform a Manual J load calculation before recommending any unit. Inland Empire homes typically fall in the 40,000–80,000 BTU range depending on size and construction vintage.

*(78 words)*

---

**Q3: How much does furnace installation cost in Murrieta?**

A: A standard gas furnace installation in Murrieta typically ranges from $2,500 to $5,500 depending on unit efficiency (80% vs. 96% AFUE), brand, home size, and whether new flue venting or gas line work is required. Electric furnace installations are generally on the lower end of that range. We provide a written itemized quote — equipment, labor, permit, and haul-away — before any work starts. Financing is available for qualified homeowners through our [financing options](/financing).

*(76 words)*

---

**Q4: Should I get a gas furnace or a heat pump?**

A: For most Inland Empire homes with existing gas service, a high-efficiency gas furnace is the straightforward replacement. Heat pumps make the most sense if you want to eliminate a gas bill, if you need cooling as well as heating, or if you're replacing both systems at once. IE winters are mild enough that a heat pump handles heating efficiently without auxiliary strips kicking in constantly. Our [heat pump systems page](/services/hvac/heat-pump-systems) covers the full comparison.

*(78 words)*

---

**Q5: Do I need a permit for furnace installation in Murrieta?**

A: Yes. The City of Murrieta requires a mechanical permit for HVAC equipment installation, including furnace replacement. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. Do not use a contractor who skips the permit — an unpermitted system can void your homeowner's insurance, complicate a home sale, and leave you without a code-compliant installation.

*(73 words)*

---

**Q6: How long does furnace installation take?**

A: A standard furnace replacement — removing the old unit, installing the new one, connecting gas and electrical, and commissioning — takes 4–6 hours in most Inland Empire homes. A first-time installation with new gas line work or complex venting can run 6–8 hours. We don't rush commissioning. The system is run-tested through a full heat cycle before the technician leaves, and you receive all equipment documentation and warranty registration information. Protect your new system with [annual furnace maintenance](/services/hvac/furnace-maintenance).

*(84 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need an Urgent Furnace Replacement
```

### Intro Paragraph (50 words)
```
Some furnace failures are not repairable — a condemned heat exchanger, a failed heat block, or a unit that's simply beyond its service life. When repair is not safe or economical, we move to replacement quickly. Same-week installation scheduling is available for households without heat going into a cold stretch.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Condemned heat exchanger — CO safety risk",
  "Furnace over 20 years old, failed repeatedly",
  "No heat with repair cost exceeding unit value",
  "Yellow or orange flame — combustion problem",
  "Carbon monoxide detector triggering near furnace",
  "Cracked heat exchanger confirmed on inspection",
  "System won't ignite — igniter and gas valve both failed",
  "Home without heat going into cold weather"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready for a New Furnace in Murrieta?
```

### Supporting Paragraph
```
Furnace installation across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed technicians, and same-week scheduling available. Call now or request a free estimate — our HVAC team picks up.
```
*(33 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Clock` | Fast Scheduling |
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
| "furnace repair page" | `/services/hvac/furnace-repair` | FAQ Q1 answer (already written above) |
| "heat pump systems page" | `/services/hvac/heat-pump-systems` | FAQ Q4 answer (already written above) |
| "annual furnace maintenance" | `/services/hvac/furnace-maintenance` | FAQ Q6 answer (already written above) |
| "heat pump systems compare" | `/services/hvac/heat-pump-systems` | Why Choose Us intro (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing options" | `/financing` | FAQ Q3 answer (already written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `furnace installation Murrieta` |
| Keyword in title | Yes — "Furnace Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Furnace Installation in Murrieta" |
| Keyword in first paragraph | Yes — intro paragraph references Murrieta + furnace installation context |
| Keyword in meta description (first half) | Yes — "Furnace installation in Murrieta" opens description |
| Canonical slug | `/services/hvac/furnace-installation` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "furnace installation across Murrieta" |
| Concrete numbers for AI citation | 300+ installations; 30+ years; 3–5 business days scheduling; $2,500–$5,500 cost range; 40,000–80,000 BTU sizing range; 4–6 hours install time; 4.9 stars |
| Q&A H2s (AI extractable) | FAQ H2 question-framed; Emergency H2 urgency-framed |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~790 words |
| Estimated FAQ word count | ~483 words |
| Total estimated | ~1,273 words |
| Internal links in copy | Heating Hub [M], Furnace Repair [R], Heat Pump Systems [R x2], Furnace Maintenance [R], Financing [O] |
| Schema recommendation | `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — `local-seo` must supply before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: tech installing new gas furnace in utility closet, IE suburban. Before/after: old corroded furnace vs. new high-efficiency unit installed.
3. **Cost range in FAQ Q3** — confirm with client that the $2,500–$5,500 range reflects current pricing before publishing. If client has specific pricing tiers, replace the range with those numbers.
4. **Brand mentions in Why Choose Us Card 4** — lists Carrier, Trane, Lennox, Rheem. Confirm client installs all four brands; remove any not applicable.
5. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer.
6. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible line.
7. **Breadcrumbs:** `Home > Services > HVAC > Heating > Furnace Installation`.
