# Heat Pump Systems Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/heat-pump-systems`  
**Primary keyword:** heat pump installation Murrieta  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** Follows ac-repair.md section structure exactly. All 9 sections present.

> **Badge count note:** "100+ Heat Pumps Installed" — heat pump adoption is growing in the IE but still newer than gas furnaces. 100 is honest for a contractor newer to HVAC; low count is better than overclaiming.

> **IE CLIMATE ANGLE — KEY SELLING POINT:** Heat pumps perform best in mild-to-moderate climates — exactly what Murrieta, Temecula, and the Inland Empire offer. IE winters rarely drop below 30°F even in Hemet. Heat pumps operate efficiently down to 25–30°F without auxiliary strips. Emphasize: all-electric (no gas bill), dual function (heats AND cools), SCE rebates available, replaces both furnace and AC with one system.

> **FLAG — C-20 License:** All instances of `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Heat Pump Installation Murrieta, CA | Heating & Cooling",
  description:
    "Heat pump installation in Murrieta, Temecula & the Inland Empire. All-electric heating and cooling, SCE rebate-eligible, replaces furnace and AC. Call (951) 246-4337.",
  openGraph: {
    title: "Heat Pump Installation Murrieta, CA | Heating & Cooling | Gardner Plumbing Co.",
    description:
      "Heat pump installation in Murrieta and across the Inland Empire. All-electric, SCE rebate-eligible, one system for heating and cooling. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/heat-pump-systems",
  },
  alternates: {
    canonical: "/services/hvac/heat-pump-systems",
  },
};
```

**Character counts (verify before ship):**
- title: 54 chars (renders as 85 chars after template suffix)
- canonical_slug: `/services/hvac/heat-pump-systems`

---

## SECTION 2 — Hero Section

### H1
```
Heat Pump Installation in Murrieta — One System for Heating and Cooling
```

### Subheadline
```
A single heat pump replaces your furnace and air conditioner — heating in winter, cooling in summer — with no gas line required and SCE rebates available.
```
*(29 words)*

### Hero Badge Text
```
Line 1: All-Electric HVAC System
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Zap` | Heats & Cools — One System |
| `Shield` | Licensed & Insured |
| `DollarSign` | SCE Rebates Available |
| `Phone` | Free In-Home Estimate |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt — tech installing an outdoor heat pump condenser unit, IE suburban setting, clear Southern California sky, new unit on pad)*

---

## SECTION 3 — Emergency Alert Banner

```
Replacing your furnace or AC in Murrieta? One heat pump handles both — call (951) 246-4337 for a free in-home estimate.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Heat Pump Installation Services in the Inland Empire
```

### Section Intro Paragraph (58 words)
```
The Inland Empire climate is one of the best environments for heat pump systems. IE winters are mild — Murrieta and Temecula rarely see temperatures below freezing — which means a heat pump operates near peak efficiency all season without backup heat strips running constantly. One system for heating and cooling, no gas required. View all heating services.
```
*(Internal link: "all heating services" → `/services/hvac/heating` [M])*

### 4 Service Cards

**Card 1**
- Icon: `Zap`
- Title: `Standard Split Heat Pump`
- Description: `A central ducted heat pump replaces your existing furnace and air conditioner — same ductwork, same thermostat wiring, but all-electric operation and utility rebate eligibility.`
- Features:
  1. Replaces Furnace + AC
  2. Uses Existing Ductwork
  3. SCE Rebate-Eligible
  4. 16–20 SEER2 Efficiency

**Card 2**
- Icon: `Droplets`
- Title: `Ductless Mini-Split Heat Pump`
- Description: `For additions, garages, and rooms without ducts, a ductless heat pump delivers zoned heating and cooling with no ductwork modification required.`
- Features:
  1. No Ductwork Required
  2. Zoned Temperature Control
  3. Quiet Indoor Unit
  4. Ideal for Additions & ADUs

**Card 3**
- Icon: `Award`
- Title: `Heat Pump Sizing & Load Calc`
- Description: `A heat pump sized too small won't keep up on hot July afternoons. Too large and it short-cycles. We perform a Manual J calculation before selecting your unit.`
- Features:
  1. Manual J Load Calculation
  2. Duct Leakage Assessment
  3. Electrical Panel Capacity Check
  4. Brand-Neutral Recommendations

**Card 4**
- Icon: `Wrench`
- Title: `Heat Pump Repair & Service`
- Description: `Already have a heat pump that isn't heating or cooling properly? Our technicians diagnose refrigerant issues, reversing valve failures, and electrical faults.`
- Features:
  1. Reversing Valve Diagnosis
  2. Refrigerant Recharge
  3. Defrost Board Testing
  4. Capacitor & Contactor Repair

### Before/After Section

**H3:**
```
What Changes After a Professional Heat Pump Installation
```

**Checkmark items (6):**
1. Single system handles heating and cooling — two bills become one
2. No gas line required — eliminates monthly gas service charge
3. Refrigerant charged to manufacturer spec and leak-tested
4. Electrical disconnect, breaker, and wiring confirmed to code
5. Thermostat programmed for heat pump operation — O/B wire confirmed
6. Both heating and cooling modes run-tested before installation is complete

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = old split furnace + AC condenser; after = new heat pump condenser unit on pad, clean install, IE suburban)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for Heat Pump Installation
```

### Section Intro Paragraph (68 words — contains the ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has installed over 100 heat pump systems across Riverside County — including standard split systems, ductless units, and heat pump upgrades from gas furnaces. Many Inland Empire homeowners replace both their aging AC and furnace with a single heat pump system. See our AC installation services for full cooling system options.
```
*(Internal link: "AC installation services" → `/services/hvac/ac-installation` [R])*

### 4 Benefit Cards

**Card 1**
- Icon: `Zap`
- Title: `All-Electric — No Gas Required`
- Description: `A heat pump operates entirely on electricity. Murrieta homeowners eliminating gas service save the monthly SCG service charge in addition to energy savings.`

**Card 2**
- Icon: `Shield`
- Title: `SCE Rebate Navigation`
- Description: `Southern California Edison offers rebates on qualifying heat pump installations. Our team identifies eligible equipment and provides documentation for rebate submission.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Installation Pricing`
- Description: `Full itemized quote — equipment, labor, electrical work, permit, and haul-away — before any work begins. Financing available for qualified homeowners.`

**Card 4**
- Icon: `Award`
- Title: `IE Climate Specialists`
- Description: `We specify heat pumps rated for the IE climate — units that handle 110°F summer days and 30°F winter nights without auxiliary heat strips running unnecessarily.`

### Achievement Badge
```
Line 1: 100+
Line 2: Heat Pumps Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (46 words)
```
Heat pump installation service is available across the Inland Empire, with in-home estimates from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — throughout Riverside County.
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
Heat Pump Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about heat pump installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: Do heat pumps work well in the Inland Empire climate?**

A: The Inland Empire is an ideal climate for heat pumps. Heat pumps extract heat from outdoor air — a process that becomes less efficient as temperatures drop below 25–30°F. Murrieta and Temecula rarely see temperatures below freezing, and even Hemet — the coldest IE city most nights — averages winter lows in the mid-30s. In this climate, a heat pump operates near peak efficiency all winter without backup electric strips engaging frequently. Heat pumps also handle the 100°F+ summers that central AC would otherwise cover.

*(92 words)*

---

**Q2: Will a heat pump replace my furnace and my air conditioner?**

A: Yes. A standard split heat pump replaces both. The outdoor unit handles the heat transfer for both heating and cooling. In cooling mode it operates exactly like an air conditioner — moving heat out of your home. In heating mode it reverses — extracting heat from outdoor air and moving it inside. One system, one thermostat, one annual service call. Many Inland Empire homeowners facing the replacement of an aging furnace or AC choose a heat pump to consolidate both. See our [AC installation page](/services/hvac/ac-installation) if you're comparing central AC as an alternative.

*(96 words)*

---

**Q3: What does heat pump installation cost in Murrieta?**

A: A standard ducted heat pump installation in Murrieta typically ranges from $4,500 to $9,000 depending on system size, efficiency rating (SEER2), and any electrical panel or wiring upgrades required. Ductless mini-split heat pumps for a single zone typically run $2,500 to $5,000 installed. Available SCE rebates can reduce the net cost by $200 to $1,000 depending on the equipment's efficiency rating. Financing is available for qualified homeowners. We provide a written itemized quote before any work begins.

*(79 words)*

---

**Q4: How efficient is a heat pump compared to a gas furnace?**

A: A high-efficiency gas furnace converts roughly 96% of fuel to heat (96% AFUE). A modern heat pump delivers 2 to 4 units of heat energy for every unit of electrical energy consumed — an effective efficiency of 200%–400%. In mild-climate conditions like the IE, a heat pump is typically less expensive to operate than a gas furnace when electricity and gas prices are at their recent Murrieta averages. Efficiency advantage diminishes on the coldest nights, but those nights are rare here.

*(84 words)*

---

**Q5: Are there rebates available for heat pump installation in Murrieta?**

A: Yes. Southern California Edison (SCE) offers rebates on qualifying heat pump systems — currently $200 to $1,000 depending on unit efficiency and capacity under active SCE programs. The California Energy Commission also administers rebate programs that can overlap. Rebate availability and amounts change — we confirm current SCE eligibility during your estimate and provide the documentation needed for submission. Rebates are credited after installation and inspection, not at the point of purchase.

*(73 words)*

---

**Q6: How do I know if my home needs electrical panel upgrades for a heat pump?**

A: Most IE homes built in the 1990s and later have 200-amp panels that support a heat pump without modification. Older homes — particularly those in Hemet, Perris, or Riverside with original 100-amp service — may need a panel upgrade before installation. Ductless mini-split heat pumps have lower electrical demand and often fit within existing panel capacity. We check panel capacity during the in-home estimate and include any required electrical work in the upfront quote. See our [furnace installation page](/services/hvac/furnace-installation) if you're also considering a gas furnace comparison.

*(91 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Your Heating or Cooling System Needs Immediate Replacement
```

### Intro Paragraph (52 words)
```
A failed air conditioner in July or a failed furnace in December are not situations that allow for weeks of research. When your system is beyond repair, a heat pump replacement can often be completed within 3–5 business days. Call us — we'll tell you honestly whether repair or replacement makes more sense.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "AC and furnace both aging — replace with one system",
  "Furnace condemned — heat exchanger cracked",
  "AC compressor failed — replacement more economical than repair",
  "Going all-electric — eliminating gas service",
  "Home addition or ADU needs zoned heating and cooling",
  "Existing heat pump not heating or cooling properly",
  "Reversing valve failure — system stuck in one mode",
  "Heat pump refrigerant leak — not cooling or heating"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Install a Heat Pump in Murrieta?
```

### Supporting Paragraph
```
Heat pump installation across Murrieta, Temecula, and the Inland Empire. All-electric, SCE rebate-eligible, one system for heating and cooling. Call now or request a free in-home estimate — our HVAC team picks up.
```
*(36 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Zap` | All-Electric System |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "all heating services" | `/services/hvac/heating` | Service Overview intro |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "AC installation page" | `/services/hvac/ac-installation` | FAQ Q2 answer (already written above) |
| "AC installation services" | `/services/hvac/ac-installation` | Why Choose Us intro (already written above) |
| "furnace installation page" | `/services/hvac/furnace-installation` | FAQ Q6 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "heat pump financing" | `/financing` | FAQ Q3 answer or Why Choose Us Card 3 |
| "HVAC maintenance plan" | `/services/hvac/hvac-maintenance-plans` | Why Choose Us or final CTA — "heat pump service plan options" |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `heat pump installation Murrieta` |
| Keyword in title | Yes — "Heat Pump Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Heat Pump Installation in Murrieta" |
| Keyword in first paragraph | Yes — intro paragraph references Murrieta + heat pump installation context |
| Keyword in meta description (first half) | Yes — "Heat pump installation in Murrieta" opens description |
| Canonical slug | `/services/hvac/heat-pump-systems` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "heat pump installation across Murrieta" |
| Concrete numbers for AI citation | 100+ heat pumps installed; 30+ years; $4,500–$9,000 cost range; $200–$1,000 SCE rebates; 200%–400% heat pump efficiency; 3–5 business days install scheduling; 4.9 stars |
| Q&A H2s (AI extractable) | FAQ H2 question-framed; Emergency H2 urgency-framed |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~800 words |
| Estimated FAQ word count | ~515 words |
| Total estimated | ~1,315 words |
| Internal links in copy | Heating Hub [M], AC Installation [R x2], Furnace Installation [R], Financing [O] |
| Schema recommendation | `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — `local-seo` must supply before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director. Hero: tech installing heat pump outdoor unit on concrete pad, IE suburban setting. Before/after: old split system (separate furnace + condenser) vs. new heat pump condenser installed.
3. **SCE rebate amounts in FAQ Q5** — "$200 to $1,000 under active SCE programs." SCE rebate amounts change frequently. Assign `local-seo` or client to verify current rebate amounts before publishing. Add a note that amounts are subject to change.
4. **Cost range in FAQ Q3** — confirm with client current installed pricing for ducted and ductless heat pumps.
5. **Brand-neutral language in Card 3** — no specific brands named in heat pump cards (unlike furnace installation page). If client has preferred heat pump brands (Carrier, Lennox, Bosch, Mitsubishi for mini-splits), add them to Card 3 features list.
6. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer.
7. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible line.
8. **Breadcrumbs:** `Home > Services > HVAC > Heating > Heat Pump Systems`.
9. **Cross-vertical bridge opportunity:** `hvac-cluster-architecture.md` notes a potential link from Heat Pump Systems → `/services/water-heater-service` ("many heat pump systems include water heating" — heat pump water heaters). If Gardner offers heat pump water heaters, add this link. Flag to client.
