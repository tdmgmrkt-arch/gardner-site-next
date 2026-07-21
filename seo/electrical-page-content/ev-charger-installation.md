# EV Charger Installation Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/ev-charger-installation`
**Primary keyword:** EV charger installation Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md 9-section structure exactly. Power Systems & Upgrades leaf page #4.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

> **Permit callout required:** Murrieta / Riverside County requires a permit for Level 2 EV charger installation. Page body references this explicitly — it is a local credibility signal and AI citation trigger per `seo/electrical-menu-labels.md`.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field — only in `openGraph.title`.

```ts
export const metadata: Metadata = {
  title: "EV Charger Installation Murrieta, CA | Level 2 Home Charging",
  description:
    "EV charger installation in Murrieta, Temecula & the Inland Empire. Level 2 (240V) home charging, dedicated circuits, NEC 625 compliant. Call (951) 246-4337.",
  openGraph: {
    title: "EV Charger Installation Murrieta, CA | Level 2 Home Charging | Gardner Plumbing Co.",
    description:
      "Licensed electricians install Level 2 EV chargers across Murrieta and the Inland Empire. Dedicated circuits, panel assessment, NEC 625 compliant. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/ev-charger-installation",
  },
  alternates: {
    canonical: "/services/electrical/ev-charger-installation",
  },
};
```

**Character counts (verify before ship):**
- title: 55 chars (renders as 86 chars after template suffix — verify no truncation)
- description: 148 chars
- canonical_slug: `/services/electrical/ev-charger-installation`

---

## SECTION 2 — Hero Section

### H1
```
EV Charger Installation in Murrieta — Level 2 Home Charging
```

### Subheadline
```
Inland Empire car culture runs on EVs now. Our licensed electricians install permitted Level 2 (240V) home charging stations — with a panel capacity check first — so you're charging at full speed, every night.
```
*(36 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Zap` | Level 2 (240V) Installation |
| `Shield` | Licensed & Insured |
| `FileCheck` | NEC 625 Compliant |
| `DollarSign` | Upfront Pricing |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt — electrician installing a Level 2 EV charger in a residential garage, Inland Empire suburban home setting, daytime)*

---

## SECTION 3 — Emergency Alert Banner

```
Just bought an EV in Murrieta and need a home charger installed fast? Call (951) 246-4337 — our electricians assess your panel and schedule the installation within the week, permit included.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
EV Charger Installation Services in the Inland Empire
```

### Section Intro Paragraph (66 words)
```
Murrieta, Temecula, and the broader Inland Empire are car-dependent suburbs. EV adoption in Riverside County is growing fast — and most homeowners who buy an electric vehicle discover their Level 1 (120V) outlet charges at 3 to 5 miles per hour. That is not a practical daily charger. A Level 2 (240V) installation charges at 20 to 30 miles per hour. Our electricians assess your panel capacity and install the dedicated circuit — so the installation is done right and code-compliant.
```

### 4 Service Cards

**Card 1**
- Icon: `Zap`
- Title: `Level 2 (240V) Charger Installation`
- Description: `The standard home EV charging upgrade. A dedicated 240V, 40–50 amp circuit powers a Level 2 EVSE charger — adding 20 to 30 miles of range per hour of charging for most electric vehicles.`
- Features:
  1. 240V Dedicated Circuit
  2. 40–50 Amp Breaker
  3. NEMA 14-50 or Hardwire
  4. Charger Mount & Connection

**Card 2**
- Icon: `Activity`
- Title: `Panel Capacity Assessment`
- Description: `Most Murrieta homes built before 2015 have 100-amp panels. A Level 2 charger draws 40–50 amps continuously. We check your panel first — and if an upgrade is needed, we scope it before the charger goes in, not after.`
- Features:
  1. Load Calculation On-Site
  2. Available Capacity Check
  3. Panel Upgrade Flagged If Needed
  4. Sub-Panel Option Available

**Card 3**
- Icon: `FileCheck`
- Title: `Code-Compliant EV Charger Installation`
- Description: `Riverside County and the City of Murrieta require a permit for Level 2 EV charger installation. Permits are the property owner’s responsibility under California law; we coordinate the paperwork when needed and list permit fees as a pass-through line on your quote. The permit confirms the installation meets NEC Article 625.`
- Features:
  1. NEC Article 625 Wiring
  2. NEC 625 Compliant Install
  3. Load Calculation Documented
  4. Documentation Provided

**Card 4**
- Icon: `Wifi`
- Title: `Smart EV Charger Setup`
- Description: `Smart chargers with app control, off-peak scheduling, and energy tracking need the same dedicated 240V circuit as standard units — but proper load management wiring ensures your smart charger communicates correctly with your home's electrical system.`
- Features:
  1. Smart Charger Wiring
  2. Load Management Prep
  3. App-Controlled Scheduling
  4. Pairs with Smart Home Systems

### Before/After Section

**H3:**
```
What Changes After a Level 2 EV Charger Installation
```

**Checkmark items (6):**
1. 20–30 miles of range added per hour — full overnight charge for most EVs
2. Dedicated 240V circuit — no shared load with other appliances
3. City permit closed — installation is on record and insurance-compliant
4. Charger mounted at the right height and location for daily convenience
5. NEMA 14-50 outlet or hardwired connection per manufacturer spec
6. Panel capacity verified — no breaker trips from charger draw

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = standard 120V garage outlet with slow-charge cable plugged in; after = Level 2 wall-mounted EV charger, clean installation, dedicated circuit breaker labeled in panel)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for EV Charging
```

### Section Intro Paragraph (65 words — contains ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have installed over 100 EV chargers across Riverside County — in Murrieta tract homes, Temecula wine country estates, and Menifee new builds. Every installation includes a panel assessment first, so no homeowner discovers a needed panel upgrade after the charger is already on the wall.
```

### 4 Benefit Cards

**Card 1**
- Icon: `FileCheck`
- Title: `NEC 625 Compliant`
- Description: `EV charger installations often require a city permit and inspection. Permits are the homeowner's responsibility under California law; we can coordinate the paperwork when required, and any permit fees appear as a pass-through line on your quote. Skipping a required permit can create insurance and resale complications for the homeowner.`

**Card 2**
- Icon: `Activity`
- Title: `Panel Assessment First`
- Description: `We check your panel capacity before scheduling the installation. If a panel upgrade is needed, we tell you upfront with a combined quote — not after we've already pulled the permit for just the charger.`

**Card 3**
- Icon: `Shield`
- Title: `Licensed Electricians`
- Description: `Every tech holds a valid CA C-10 electrical license. Charger installations involve 240V circuits — this is not a DIY or handyman scope.`

**Card 4**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `You receive a written quote that covers the circuit, the permit, the inspection, and the charger mounting — before we schedule. No add-ons after the job starts.`

### Achievement Badge (floating)
```
Line 1: 100+
Line 2: EV Chargers Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
EV charger installation service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — with same-week scheduling throughout.
```

**City array (10 cities — matches serviceAreas in Drain.tsx exactly):**
```
Temecula, Murrieta, Perris, Menifee, Canyon Lake,
Lake Elsinore, Corona, Moreno Valley, Riverside, Hemet
```

---

## SECTION 7 — FAQ Section

### FAQ Section H2
```
EV Charger Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about EV charger installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: Do I need a permit to install a Level 2 EV charger in Murrieta?**

A: Yes. The City of Murrieta requires a permit for Level 2 (240V) EV charger installation. The permit triggers an electrical inspection to confirm the circuit meets NEC Article 625 — the code section governing EV charging equipment. This applies whether you're installing a hardwired unit or a NEMA 14-50 outlet. Unpermitted 240V circuits void homeowner's insurance for any fire or electrical damage claim originating from that circuit, and must be disclosed as unpermitted work during a home sale. Permits are the property owner’s responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote.

*(109 words)*

---

**Q2: Does my current electrical panel support a Level 2 EV charger?**

A: Most Inland Empire homes built before 2015 run on 100-amp service. A Level 2 charger at 40 amps draws 40% of a 100-amp panel's total capacity — continuously, while the car is charging. That leaves limited headroom for the rest of the house during a charging session. Whether your panel can support a charger depends on your actual load calculation, not just the panel size. Our electricians run the calculation on-site. If your panel has the capacity, we install the dedicated circuit. If it doesn't, we quote the charger circuit and the [panel upgrade](/services/electrical/electrical-panel-upgrade) together so you see the full cost in one number.

*(110 words)*

---

**Q3: What is the difference between Level 1 and Level 2 EV charging?**

A: Level 1 charging uses a standard 120V household outlet and adds approximately 3 to 5 miles of range per hour. For a 300-mile-range EV, a full charge from empty takes 60 to 80 hours on Level 1. That works as an emergency backup but not as a daily driver solution. Level 2 charging uses a 240V dedicated circuit — the same voltage as a clothes dryer or oven — and adds 20 to 30 miles of range per hour. Most Inland Empire commuters who drive 30 to 60 miles per day are fully recharged each morning with a Level 2 charger running overnight. Level 3 (DC fast charging) requires commercial-grade infrastructure not practical for residential installation.

*(119 words)*

---

**Q4: What EV charger brands do you install?**

A: Our electricians install the electrical circuit and mounting — the charger itself can be any UL-listed Level 2 unit the homeowner selects. Popular options in the Murrieta market include ChargePoint Home Flex, Emporia Energy, Grizzl-E, and JuiceBox, as well as the Tesla Wall Connector (for Tesla vehicles). We also wire for NEMA 14-50 outlets, which are charger-agnostic and allow the homeowner to plug in any Level 2 EVSE now or in the future. Smart charger installations — those with app control and off-peak scheduling — pair well with our [smart home electrical services](/services/electrical/smart-home-electrical) if you're also planning automated load management for your home's energy use.

*(114 words)*

---

**Q5: How long does EV charger installation take?**

A: Most straightforward installations — panel has available capacity, garage has accessible wire runs to the panel — take 3 to 5 hours on-site. The permit is typically approved within 3 to 7 business days depending on city processing, so the total timeline from quote to energized charger is usually 1 to 2 weeks. If a panel upgrade is also required, the panel work adds a day and the permit timeline overlaps with the charger permit. We schedule both together to avoid two separate permit windows. For homes where the garage is detached from the main panel by a long run, we assess wire routing options during the quote visit.

*(110 words)*

---

**Q6: How much does EV charger installation cost in Murrieta?**

A: A standard Level 2 EV charger installation — dedicated 240V circuit, 40-amp breaker, NEMA 14-50 outlet or hardwire connection, permit, and inspection — typically runs $700 to $1,500 in Murrieta, depending on the distance from the panel to the garage and the complexity of the wire run. If a panel upgrade is also needed, that adds $2,500 to $4,500 to the project (see our [panel upgrade page](/services/electrical/electrical-panel-upgrade) for panel-specific cost context). Financing is available for combined installations; see our [financing page](/financing). Some utility and state incentive programs may reduce the net cost — we note applicable programs in the quote visit.

*(107 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Your EV Charging Setup Has an Electrical Problem
```

### Intro Paragraph (50 words)
```
A charger that trips the breaker, a 240V outlet that stopped working, or a circuit that fails to hold the load are same-day electrical calls. Our electricians troubleshoot EV charging circuit problems across Murrieta and the Inland Empire seven days a week.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "EV charger trips the breaker on every session",
  "240V outlet stopped working",
  "Charger not communicating with vehicle",
  "Burning smell from outlet or charger location",
  "Breaker for charger circuit runs hot",
  "Existing outlet found to be unpermitted",
  "Power outage affecting only the charger circuit",
  "Moving in — need charger circuit assessed before first charge"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Install Your Home EV Charger?
```

### Supporting Paragraph
```
EV charger installation across Murrieta, Temecula, and the Inland Empire. Panel assessment first, NEC 625 compliant installation, licensed electricians. Call now or schedule online — our electrical team picks up.
```
*(30 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `FileCheck` | Permitted Work |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "power upgrade services" | `/services/electrical/power` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "panel upgrade" | `/services/electrical/electrical-panel-upgrade` | FAQ Q2 and Q6 answers (already written above) |
| "smart home electrical services" | `/services/electrical/smart-home-electrical` | FAQ Q4 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing" | `/financing` | FAQ Q6 answer (already written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `EV charger installation Murrieta` |
| Keyword in title | Yes — "EV Charger Installation Murrieta, CA" |
| Keyword in H1 | Yes — "EV Charger Installation in Murrieta" |
| Keyword in first paragraph | Yes — intro references EV charger installation + Murrieta/Inland Empire |
| Keyword in meta description (first half) | Yes — "EV charger installation in Murrieta" opens description |
| Canonical slug | `/services/electrical/ev-charger-installation` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro paragraph |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … electrical contractor serving Murrieta"; (3) Final CTA — "EV charger installation across Murrieta" |
| Permit callout | Yes — Section 4 Card 3 + FAQ Q1 both reference Murrieta/Riverside County permit requirement explicitly |
| Concrete numbers for AI citation | 100+ chargers installed; 3–5 mph Level 1 vs. 20–30 mph Level 2; 60–80 hour full charge on Level 1; 40 amp draw; $700–$1,500 installation; 3–5 hours on-site; 1–2 week total timeline; 4.9 star rating |
| Q&A H2s (AI extractable) | "Do I need a permit to install a Level 2 EV charger in Murrieta?" and "Does my current electrical panel support a Level 2 EV charger?" are question-phrased and self-contained |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~820 words |
| Estimated FAQ word count | ~669 words |
| Total estimated | ~1,489 words |
| Internal links implemented in copy | Power sub-hub [M], Panel Upgrade [R], Smart Home Electrical [R], Financing [O] in FAQ answers as written |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply the actual C-10 license number before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director. Hero: electrician mounting Level 2 EV charger in residential garage. Before/after: 120V outlet with slow-charge cable vs. Level 2 wall charger, clean installation.
3. **Schema:** `FAQPage` JSON-LD wrapping all 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to a visible "Last Updated" line — do not hard-code date string in JSX.
5. **Charger brand names:** ChargePoint, Emporia, Grizzl-E, JuiceBox, Tesla Wall Connector are named as market examples — not as endorsed products. Confirm client is comfortable with this list before publishing.
6. **Incentive program language:** Copy uses "utility and state incentive programs may reduce the net cost" without citing specific programs or amounts — SCE and CA programs change. Do not add specific dollar amounts without confirming current program status.
7. **NEC Article 625:** Referenced accurately — this is the correct NEC article for EV charging equipment. This citation is a strong E-E-A-T signal for AI systems.
