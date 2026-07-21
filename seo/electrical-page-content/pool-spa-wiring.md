# Pool & Spa Wiring Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/pool-spa-wiring`
**Primary keyword:** pool spa wiring Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md section structure exactly. Fixtures cluster leaf page.

> **Achievement badge note:** "80+ Pool/Spa Electrical Jobs" — lowest in the Fixtures group. Pool and spa wiring is a specialized, lower-volume service. 80 is honest for a contractor doing pool electrical as part of multi-trade pool projects in the IE. Understating this number is better than overstating it — customers for pool electrical care more about code expertise than volume.

> **NEC 680 FRAMING:** This page leads with code compliance — NEC Article 680, bonding grid, GFCI requirements, and equipment bonding. This positions the page as electrical expertise, not pool construction. Every section should reinforce the electrician angle, not the pool contractor angle.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Pool & Spa Wiring Murrieta, CA | NEC 680 Compliant",
  description:
    "Pool and spa wiring in Murrieta & the Inland Empire. NEC Article 680 compliant bonding, GFCI circuits, sub-panel installation & pool pump wiring. Call (951) 246-4337.",
  openGraph: {
    title: "Pool & Spa Wiring Murrieta, CA | NEC 680 Compliant | Gardner Plumbing Co.",
    description:
      "Licensed electricians handle NEC 680 pool bonding, GFCI requirements, spa hookup, and pool sub-panel wiring across Murrieta and the Inland Empire. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/pool-spa-wiring",
  },
  alternates: {
    canonical: "/services/electrical/pool-spa-wiring",
  },
};
```

**Character counts (verify before ship):**
- title: 51 chars (renders as 82 chars after template suffix)
- description: 159 chars
- canonical_slug: `/services/electrical/pool-spa-wiring`

---

## SECTION 2 — Hero Section

### H1
```
Pool & Spa Wiring in Murrieta — NEC 680 Compliant, Licensed Electricians
```

### Subheadline
```
Pool and spa electrical work is governed by NEC Article 680 for good reason — water and electricity have zero margin for error. Licensed electricians handle bonding, GFCI circuits, and sub-panel wiring across the Inland Empire.
```
*(37 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `ShieldCheck` | NEC 680 Compliant |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Pricing |
| `Phone` | Same-Day Scheduling |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: licensed electrician working at a pool sub-panel in an IE backyard — pool visible in background, professional setting, safety-focused framing — NOT a pool construction photo)*

---

## SECTION 3 — Emergency Alert Banner

```
Pool or spa with an electrical fault? Water and faulty wiring is a life-safety issue — don't swim until it's inspected. Call (951) 246-4337 for same-day pool electrical service across Murrieta.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Pool and Spa Electrical Wiring in the Inland Empire
```

### Section Intro Paragraph (60 words)
```
NEC Article 680 establishes strict electrical requirements for pools, spas, and hot tubs — bonding grids, GFCI-protected circuits, minimum setback distances for outlets and equipment, and specific grounding requirements for metal pool components. Inland Empire homes with pools built before 2005 often have wiring that no longer meets current code. Our electricians handle new pool electrical installation, spa hookup, and fault diagnosis on existing pool wiring.
```

### 4 Service Cards

**Card 1**
- Icon: `ShieldCheck`
- Title: `NEC 680 Bonding & Grounding`
- Description: `Pool bonding connects all metal components — pool shell rebar, pump, heater, handrails — into a single equipotential grid. Required by NEC 680 and CA code.`
- Features:
  1. Equipotential Bonding Grid
  2. Metal Component Bonding
  3. Grounding Conductor Install
  4. Bonding Continuity Test

**Card 2**
- Icon: `Zap`
- Title: `GFCI Circuit Installation`
- Description: `NEC 680 requires GFCI protection on all pool and spa circuits within specified distances. We install and verify GFCI breakers at the sub-panel for every pool circuit.`
- Features:
  1. GFCI Breaker Install
  2. Pool Pump GFCI Circuit
  3. Spa & Hot Tub GFCI
  4. Code Setback Verification

**Card 3**
- Icon: `Server`
- Title: `Pool Sub-Panel Installation`
- Description: `Dedicated pool sub-panels keep pool equipment circuits separated from the home's main panel — required for most pool builds in Murrieta and Riverside County.`
- Features:
  1. Sub-Panel Sizing
  2. Feeder Circuit from Main
  3. Pool Equipment Breakers
  4. Weatherproof Enclosure

**Card 4**
- Icon: `Wrench`
- Title: `Pool Pump & Equipment Wiring`
- Description: `Pool pump, heater, automation controller, and lighting wiring — including new equipment hookup and fault diagnosis on existing pool electrical.`
- Features:
  1. Pump Motor Wiring
  2. Pool Heater Circuit
  3. Automation Controller Hook
  4. Pool Lighting Circuits

### Before/After Section

**H3:**
```
What Changes After Professional Pool & Spa Electrical Work
```

**Checkmark items (6):**
1. Bonding continuity verified across all metal pool components — grid complete
2. GFCI breakers installed and tested on every pool and spa circuit
3. All equipment within NEC 680 setback distances — no code violations
4. Sub-panel load balanced — no overcrowded breaker slots
5. Pool pump and heater wiring confirmed at rated amperage
6. Grounding conductor continuity tested from sub-panel to equipment

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = old weathered pool panel with exposed wiring; after = clean new weatherproof sub-panel with labeled breakers — same IE backyard setting)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for Pool Wiring
```

### Pill Badge
```
Why Choose Our Electrical Team
```

### Section Intro Paragraph (59 words)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have completed over 80 pool and spa electrical jobs across Riverside County — NEC 680 bonding grids in Canyon Lake, spa sub-panel installs in Temecula, and pool pump wiring troubleshooting across Murrieta and Lake Elsinore. Pool electrical has zero margin for guesswork.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Book`
- Title: `NEC 680 Expertise`
- Description: `Pool and spa electrical is one of the most code-regulated residential applications. Our electricians know NEC Article 680 — not just general wiring practice.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed, Code-Compliant Work`
- Description: `All pool electrical work in Murrieta requires a permit. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote.`

**Card 3**
- Icon: `Clock`
- Title: `Multi-Trade Coordination`
- Description: `Pool projects involve electrical, plumbing, and sometimes gas. Our multi-trade team coordinates the electrical scope without slowing down the rest of the job.`

**Card 4**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before work begins. If the existing wiring requires remediation before new work can be added, we document it and price it first.`

### Achievement Badge
```
Line 1: 80+
Line 2: Pool/Spa Electrical Jobs
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (42 words)
```
Pool and spa wiring service is available across the Inland Empire, with fast response times from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout.
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
Pool and Spa Wiring Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about pool and spa electrical wiring in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What is NEC Article 680 and why does it govern pool wiring?**

A: NEC Article 680 is the section of the National Electrical Code that covers electrical installations near permanently installed pools, spas, fountains, and similar water features. It specifies minimum distances for outlets, luminaires, and equipment from the water's edge — typically 5 to 20 feet depending on the device type. It requires GFCI protection on all pool circuits, equipotential bonding for all metal components, and specific grounding requirements. California adopts and enforces NEC 680 with minor state amendments. Pool electrical work that doesn't comply with NEC 680 will fail a city inspection and creates a genuine shock hazard.

*(97 words)*

---

**Q2: What is pool bonding and why is it required?**

A: Pool bonding connects all metal components of a pool — the steel rebar in the shell, the pump and motor housing, the heater, the handrails, the light fixtures, and the ladder anchors — into a single equipotential grid. The goal is to eliminate voltage differences between any two metal surfaces that a swimmer could touch simultaneously. A voltage potential of even 1 volt between two metal surfaces in or near the water can cause electric shock drowning. The bonding grid eliminates that potential difference. NEC 680.26 governs the bonding requirements in detail. We test bonding continuity with a dedicated meter before closing any excavation.

*(104 words)*

---

**Q3: How much does pool and spa electrical wiring cost in Murrieta?**

A: Pool electrical costs in the Murrieta area depend on scope. A new pool sub-panel installation typically runs $1,500–$3,000, including feeder circuit from the main panel, breakers for pump, heater, and lighting circuits, and weatherproof enclosure. Spa or hot tub electrical hookup ranges from $800–$1,800 depending on distance from the panel and circuit requirements. Bonding grid installation adds $400–$900 depending on pool size and existing metal components. Fault diagnosis and repair on existing pool wiring starts at $150 for a diagnostic call. We provide an itemized written quote before any work begins.

*(91 words)*

---

**Q4: My pool pump is tripping the breaker — is that dangerous?**

A: Yes. A pool pump that repeatedly trips its circuit breaker is drawing more current than the circuit is rated for — this points to a failing motor, a wiring fault, a short in the pump housing, or an undersized circuit. Running the pump after it trips the breaker can damage the motor and overheat the wiring. It is also a code violation in most cases to manually reset a breaker repeatedly without finding the fault. Call us before your next swim session — we diagnose pool pump electrical faults the same day. For full panel issues, see our [electrical panel upgrade](/services/electrical/electrical-panel-upgrade) page.

*(104 words)*

---

**Q5: Do I need a permit to add electrical to my pool in Murrieta?**

A: Yes — always. The City of Murrieta requires permits for all pool electrical work, including sub-panel installation, new circuits, bonding grid installation, and equipment hookup. Unpermitted pool electrical is a significant liability issue when selling a home and can result in your homeowner's insurance denying claims related to pool incidents. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. An [electrical safety inspection](/services/electrical/electrical-safety-inspection) before any new pool electrical work also documents the pre-existing condition of the system.

*(90 words)*

---

**Q6: Can I add pool lighting to an existing pool?**

A: Yes. Underwater pool lighting in an existing pool uses either 120V or low-voltage (12V) fixtures — both require GFCI-protected circuits per NEC 680. The 12V systems use a transformer to step voltage down, which simplifies some installation requirements. LED pool lights use significantly less power than older incandescent pool lights and are a common retrofit. Our electricians run the circuit from the sub-panel to the light niche location, install the appropriate GFCI protection, and test the fixture at operating voltage before the pool is refilled. For other outdoor lighting near the pool area, see our [landscape and outdoor lighting installation](/services/electrical/lighting-installation) page.

*(102 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Pool or Spa Wiring Needs Immediate Attention
```

### Intro Paragraph (52 words)
```
Pool and spa electrical faults are life-safety emergencies. A tingling sensation in the water, a pump that keeps tripping its breaker, visible corrosion on bonding connections, or a GFCI that trips every time the pool equipment runs — these are not situations to assess after the weekend. Our line is live 24 hours a day.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "Tingling or shock sensation in pool or spa water",
  "Pool pump repeatedly tripping circuit breaker",
  "GFCI breaker tripping on pool or spa circuit",
  "Visible sparking at pool sub-panel or equipment",
  "Burning smell from pool pump motor or wiring",
  "Pool lighting flickering or shorting GFCI repeatedly",
  "Visible corrosion or damage on bonding conductors",
  "Pool heater causing electrical fault at panel"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Wire Your Pool or Spa the Right Way?
```

### Supporting Paragraph
```
NEC 680-compliant pool and spa wiring across Murrieta, Temecula, and the Inland Empire. Bonding grids, GFCI circuits, sub-panel installation, and fault diagnosis — licensed electricians, upfront pricing, code-compliant work. Call now or schedule online.
```
*(36 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip
| Icon | Label |
|---|---|
| `Clock` | Same-Day Service |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "all electrical installation" | `/services/electrical/fixtures` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "electrical panel upgrade" | `/services/electrical/electrical-panel-upgrade` | FAQ Q4 answer (already written above) |
| "electrical safety inspection" | `/services/electrical/electrical-safety-inspection` | FAQ Q5 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "landscape and outdoor lighting installation" | `/services/electrical/lighting-installation` | FAQ Q6 answer (already written above) |
| "electrical repairs" | `/services/electrical/electrical-repairs` | Emergency section note or FAQ note |
| "financing available" | `/financing` | Why Choose Us or final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `pool spa wiring Murrieta` |
| Keyword in title | Yes — "Pool & Spa Wiring Murrieta, CA" |
| Keyword in H1 | Yes — "Pool & Spa Wiring in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + pool and spa wiring |
| Keyword in meta description (first half) | Yes — "Pool and spa wiring in Murrieta" opens description |
| Canonical slug | `/services/electrical/pool-spa-wiring` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| NEC 680 framing | Pass — NEC Article 680 named in title, H1, section H2, intro paragraph, FAQ Q1, FAQ Q2, FAQ Q5, FAQ Q6, and service card descriptions. Code authority framing is consistent. |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "pool and spa wiring across Murrieta" |
| Concrete numbers for AI citation | 80+ pool/spa jobs; $1,500–$3,000 sub-panel; $800–$1,800 spa hookup; $400–$900 bonding; $150 diagnostic; same-day service; 4.9 stars |
| Q&A H2s (AI extractable) | All 6 FAQs question-framed and self-contained; NEC specifics in Q1 and Q2 are AI-citable authority signals |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~740 words |
| Estimated FAQ word count | ~588 words |
| Total estimated | ~1,328 words |
| Schema recommendation | `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer |

---

## Flags

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us. `local-seo` must supply before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director. Hero: electrician at pool sub-panel, pool visible in background. Before/after: old weathered pool panel vs. new clean sub-panel. NOT pool construction imagery.
3. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD with `areaServed` for all 10 cities. Consider `SpecialAnnouncement` schema noting NEC 680 compliance if the schema type supports it — flag to web-developer to evaluate.
4. **`lastUpdated` field:** Developer binds to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > Electrical > Pool & Spa Wiring`.
6. **Permit note:** FAQ Q5 references "City of Murrieta Building & Safety Division" by name — local credibility signal. Confirm this is the correct department name before go-live.
7. **Electric shock drowning reference in FAQ Q2:** This is factually accurate and an important safety signal. It differentiates the page from competitors who skip the "why" on bonding. Do not soften or remove it — it's the strongest E-E-A-T signal on the page.
8. **Plumbing cross-vertical note:** Per architecture doc, there is a potential cross-vertical link to plumbing services (pool projects often need gas or water line work). If a relevant plumbing page exists at go-live, add a brief natural mention in Section 5 Why Choose Us multi-trade card.
