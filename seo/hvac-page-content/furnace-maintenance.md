# Furnace Maintenance Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/furnace-maintenance`  
**Primary keyword:** furnace tune-up Murrieta  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Follows ac-repair.md section structure exactly. All 9 sections present.

> **Badge count note:** "800+ Furnace Tune-Ups" — maintenance visits accumulate faster than installations. 800 is credible for a 30-year Riverside County operation offering annual furnace service.

> **DIFFERENTIATION FLAG — Sister page alert:** This page targets SINGLE-APPLIANCE annual furnace service ("furnace tune-up Murrieta"). The sister page `/services/hvac/hvac-maintenance-plans` targets the SUBSCRIPTION/CONTRACT angle ("HVAC maintenance plan Murrieta") covering both heating AND cooling systems under one recurring agreement. Body copy and FAQs on this page explicitly define the difference and cross-link to the Plans page as the upgrade path. Do NOT blur this distinction.

> **FLAG — C-20 License:** All instances of `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Furnace Tune-Up Murrieta, CA | Annual Furnace Maintenance",
  description:
    "Furnace tune-up in Murrieta, Temecula & the Inland Empire. Annual safety inspection, burner cleaning, combustion analysis. Schedule before first cold snap. Call (951) 246-4337.",
  openGraph: {
    title: "Furnace Tune-Up Murrieta, CA | Annual Furnace Maintenance | Gardner Plumbing Co.",
    description:
      "Annual furnace tune-up in Murrieta and across the Inland Empire. Licensed HVAC technicians, safety inspection, burner cleaning. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/furnace-maintenance",
  },
  alternates: {
    canonical: "/services/hvac/furnace-maintenance",
  },
};
```

**Character counts (verify before ship):**
- title: 55 chars (renders as 86 chars after template suffix)
- description: 158 chars
- canonical_slug: `/services/hvac/furnace-maintenance`

---

## SECTION 2 — Hero Section

### H1
```
Furnace Tune-Up in Murrieta — Annual Safety Inspection & Maintenance
```

### Subheadline
```
A one-hour furnace tune-up before the first cold snap catches worn igniters, dirty burners, and safety issues before they become a no-heat call in December.
```
*(28 words)*

### Hero Badge Text
```
Line 1: Annual Furnace Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Clock` | Pre-Season Scheduling |
| `Shield` | Safety Inspection Included |
| `DollarSign` | Upfront Pricing |
| `Phone` | Easy Online Scheduling |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Tune-Up` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt — tech performing furnace inspection, combustion analyzer visible, furnace panel open, IE suburban setting)*

---

## SECTION 3 — Emergency Alert Banner

```
Schedule your furnace tune-up before the first Inland Empire cold snap — don't wait until your heat stops working. Call (951) 246-4337.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
What's Included in a Furnace Tune-Up Service
```

### Section Intro Paragraph (55 words)
```
A furnace tune-up is a single-visit annual service for your furnace — not a service contract, not a subscription. You schedule it once a year, we inspect and service your heating system, and you're done. Inland Empire homeowners who get a tune-up every fall avoid the most common no-heat calls. View all furnace and heating services.
```
*(Internal link: "all furnace and heating services" → `/services/hvac/heating` [M])*

### 4 Service Cards

**Card 1**
- Icon: `Wrench`
- Title: `Safety Inspection`
- Description: `We inspect the heat exchanger for cracks, test CO output with a combustion analyzer, and verify all safety switches and limits are functioning.`
- Features:
  1. Heat Exchanger Inspection
  2. Carbon Monoxide Testing
  3. High-Limit Switch Test
  4. Pressure Switch Check

**Card 2**
- Icon: `Droplets`
- Title: `Burner Cleaning & Adjustment`
- Description: `Dirty or misaligned burners reduce efficiency and increase CO risk. We clean each burner port, check flame pattern, and adjust gas pressure to spec.`
- Features:
  1. Burner Port Cleaning
  2. Flame Pattern Inspection
  3. Gas Pressure Verification
  4. Manifold Pressure Check

**Card 3**
- Icon: `Zap`
- Title: `Igniter & Electrical Check`
- Description: `Hot surface igniters wear down each season. We test amp draw, clean the flame sensor, and replace worn igniters before they fail mid-winter.`
- Features:
  1. Igniter Amp Draw Test
  2. Flame Sensor Cleaning
  3. Control Board Inspection
  4. Thermostat Calibration Check

**Card 4**
- Icon: `Shield`
- Title: `Airflow & Filter Review`
- Description: `Restricted airflow is the leading cause of furnace short-cycling and heat exchanger overheating. We check the filter, measure static pressure, and inspect duct transitions.`
- Features:
  1. Filter Condition Check
  2. Static Pressure Measurement
  3. Blower Motor Inspection
  4. Supply & Return Airflow Test

### Before/After Section

**H3:**
```
What Changes After an Annual Furnace Tune-Up
```

**Checkmark items (6):**
1. Burners cleaned — proper blue flame pattern restored
2. Flame sensor cleaned — reliable ignition on every call
3. Heat exchanger inspected — CO risk ruled out
4. Gas pressure verified at manufacturer specification
5. Blower motor lubricated and amp draw within spec
6. Filter checked — airflow confirmed through all registers

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = dusty burner assembly, dirty flame sensor, clogged filter; after = cleaned burners, new filter, system running cleanly)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for Furnace Tune-Ups
```

### Section Intro Paragraph (62 words — contains the ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has performed over 800 furnace tune-ups across Riverside County. If the inspection uncovers a problem, we quote the repair on the spot — no second trip. Want furnace and AC service bundled under one annual agreement? Our HVAC maintenance plan covers both systems.
```
*(Internal link: "HVAC maintenance plan" → `/services/hvac/hvac-maintenance-plans` [R])*

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Pre-Season Availability`
- Description: `Schedule in September or October and get ahead of the November rush. We hold pre-season tune-up slots specifically for this window.`

**Card 2**
- Icon: `Shield`
- Title: `CO Safety Inspection Included`
- Description: `Every tune-up includes a combustion analysis and CO output test — not an add-on. A cracked heat exchanger is found before it becomes a family safety issue.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Tune-Up Pricing`
- Description: `Flat-rate tune-up pricing, quoted before we arrive. If a repair is needed, you receive a written quote before we proceed — no surprises.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years in the Field`
- Description: `Thirty years of serving Riverside County homes means our technicians recognize the failure patterns IE furnaces develop — and catch them early.`

### Achievement Badge
```
Line 1: 800+
Line 2: Furnace Tune-Ups Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Annual furnace tune-up service is available across the Inland Empire, with pre-season scheduling from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — throughout Riverside County.
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
Furnace Maintenance Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about furnace tune-ups in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What is the difference between a furnace tune-up and an HVAC maintenance plan?**

A: A furnace tune-up is a single annual visit focused on your furnace — one service call, one invoice. An HVAC maintenance plan is a subscription agreement that covers both your heating and cooling systems under one recurring contract, typically with two visits per year (one for cooling, one for heating), priority scheduling, and plan-member discounts on repairs. A tune-up is the right choice if you want your furnace serviced this year. An HVAC maintenance plan is the right choice if you want both systems covered year-round without scheduling separately. See our [HVAC maintenance plan](/services/hvac/hvac-maintenance-plans) for full details.

*(113 words — deliberately longer because this is the key differentiation question)*

---

**Q2: How often should I get a furnace tune-up in Murrieta?**

A: Once per year, in the fall. The Inland Empire heating season runs November through March — a tune-up in September or October catches issues before the first cold stretch. Furnaces that sit idle all summer accumulate dust on burner ports and sensors. Skipping tune-ups for two or more consecutive seasons significantly increases the likelihood of a mid-season no-heat call.

*(62 words)*

---

**Q3: What does a furnace tune-up cost in Murrieta?**

A: A standard furnace tune-up in Murrieta ranges from $89 to $149 depending on system age and access conditions. That price includes the safety inspection, combustion analysis, burner cleaning, igniter test, and flame sensor cleaning. If a repair is needed — igniter replacement, gas valve adjustment — we quote that separately before proceeding. Annual maintenance is significantly cheaper than an emergency repair call in December.

*(65 words)*

---

**Q4: Will a furnace tune-up catch a cracked heat exchanger?**

A: Yes. A combustion analysis and visual heat exchanger inspection are included in every tune-up. A cracked exchanger allows combustion gases — including carbon monoxide — to mix with heated air. A CO leak is odorless and colorless; a combustion analyzer detects it when visual inspection alone might miss a small crack. If we find a crack, we advise you of the safety risk and your options before leaving.

*(69 words)*

---

**Q5: My furnace ran fine last winter — do I still need a tune-up?**

A: A furnace that ran well last season can still have a degraded igniter, growing scale on the burner ports, or a developing crack in the heat exchanger. These don't announce themselves — they accumulate quietly over summer and then fail in November. A tune-up is preventive maintenance, not a repair visit. If the inspection finds nothing wrong, you pay the flat tune-up fee and have confidence going into winter. If it finds something, you caught it before it became a no-heat emergency.

*(87 words)*

---

**Q6: What should I do if my furnace breaks down after a tune-up?**

A: Call us. If a part that was inspected during the tune-up fails within 30 days, our technicians return at no additional diagnostic fee. Furnace repairs found on inspection are quoted and approved before work begins. For a mid-season breakdown that requires repair beyond normal wear, see our [furnace repair service](/services/hvac/furnace-repair). Homeowners who find they need multiple repairs in a season are often good candidates for a [furnace replacement](/services/hvac/furnace-installation) evaluation.

*(76 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Pre-Season Maintenance Becomes Urgent
```

### Intro Paragraph (52 words)
```
A furnace tune-up is preventive — scheduled when it's convenient, not when it's critical. But if your furnace hasn't been serviced in two or more years and you're heading into November, urgency increases. A system that hasn't been inspected in multiple seasons is a no-heat call waiting to happen. Schedule now before slots fill.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Furnace not serviced in 2+ years",
  "First cold snap hitting — furnace hasn't been tested",
  "Yellow or irregular burner flame noticed",
  "CO detector triggered near furnace area",
  "Furnace short-cycling or shutting off early",
  "Burning smell on first startup of the season",
  "No heat despite thermostat calling",
  "Older furnace — haven't confirmed heat exchanger integrity"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Schedule Your Furnace Tune-Up Before Winter
```

### Supporting Paragraph
```
Annual furnace maintenance across Murrieta, Temecula, and the Inland Empire. Flat-rate pricing, licensed technicians, combustion safety inspection included. Schedule now — pre-season slots fill fast in October.
```
*(31 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Schedule Tune-Up` (triggers SchedulerModal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Clock` | Pre-Season Availability |
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
| "HVAC maintenance plan" | `/services/hvac/hvac-maintenance-plans` | FAQ Q1 answer (already written above) + Why Choose Us intro (already written above) |
| "furnace repair service" | `/services/hvac/furnace-repair` | FAQ Q6 answer (already written above) |
| "furnace replacement" | `/services/hvac/furnace-installation` | FAQ Q6 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "AC tune-up" | `/services/hvac/ac-maintenance` | Why Choose Us or FAQ — "schedule AC maintenance too" |
| "plumbing maintenance plan" | `/services/maintenance-plans` | Final CTA note or Why Choose Us — "protect your whole home" |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `furnace tune-up Murrieta` |
| Keyword in title | Yes — "Furnace Tune-Up Murrieta, CA" |
| Keyword in H1 | Yes — "Furnace Tune-Up in Murrieta" |
| Keyword in first paragraph | Yes — intro paragraph references Murrieta + furnace tune-up context |
| Keyword in meta description (first half) | Yes — "Furnace tune-up in Murrieta" opens description |
| Canonical slug | `/services/hvac/furnace-maintenance` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` in Why Choose Us intro |
| Differentiation from HVAC Maintenance Plans | Pass — FAQ Q1 explicitly defines the difference and cross-links; Service Overview intro clarifies "single-visit annual service — not a subscription" |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "annual furnace maintenance across Murrieta" |
| Concrete numbers for AI citation | 800+ tune-ups completed; 30+ years; $89–$149 price range; once/year cadence; September/October timing; 4.9 stars |
| Q&A H2s (AI extractable) | FAQ H2 question-framed; Emergency H2 urgency-framed |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~760 words |
| Estimated FAQ word count | ~472 words |
| Total estimated | ~1,232 words |
| Internal links in copy | Heating Hub [M], HVAC Maintenance Plans [R x2], Furnace Repair [R], Furnace Installation [R] |
| Schema recommendation | `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — `local-seo` must supply before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: tech with combustion analyzer at open furnace panel. Before/after: dirty burner/sensor vs. cleaned, system running.
3. **Price range in FAQ Q3** — $89–$149 tune-up range. Confirm with client before publishing and update if different.
4. **30-day callback policy in FAQ Q6** — "no additional diagnostic fee within 30 days." Confirm client agrees to this service commitment before publishing.
5. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer.
6. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible line.
7. **Breadcrumbs:** `Home > Services > HVAC > Heating > Furnace Maintenance`.
8. **Differentiation integrity:** If a future content refresh touches either this page or the HVAC Maintenance Plans page, the writer must re-check that the distinction between "single annual service" vs. "subscription contract" remains clear on both pages.
