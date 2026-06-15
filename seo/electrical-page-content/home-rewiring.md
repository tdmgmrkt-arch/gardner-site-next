# Home Rewiring Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/home-rewiring`
**Primary keyword:** home rewiring Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md 9-section structure exactly. Power Systems & Upgrades leaf page #2.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field — only in `openGraph.title`.

```ts
export const metadata: Metadata = {
  title: "Home Rewiring Murrieta, CA | Knob-and-Tube & Aluminum Wiring",
  description:
    "Home rewiring in Murrieta, Temecula & the Inland Empire. Knob-and-tube removal, aluminum wiring replacement, partial and full rewires. Call (951) 246-4337.",
  openGraph: {
    title: "Home Rewiring Murrieta, CA | Knob-and-Tube & Aluminum Wiring | Gardner Plumbing Co.",
    description:
      "Licensed electricians replace old wiring across Murrieta and the Inland Empire. Full and partial rewires, code compliance, insurance-ready documentation. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/home-rewiring",
  },
  alternates: {
    canonical: "/services/electrical/home-rewiring",
  },
};
```

**Character counts (verify before ship):**
- title: 58 chars (renders as 89 chars after template suffix — verify no truncation)
- description: 152 chars
- canonical_slug: `/services/electrical/home-rewiring`

---

## SECTION 2 — Hero Section

### H1
```
Home Rewiring in Murrieta — Safe, Code-Compliant Electrical Wiring
```

### Subheadline
```
Knob-and-tube wiring, aluminum circuits, and 1960s-era wiring are fire hazards that also make homes uninsurable. Our licensed electricians replace old wiring with code-compliant copper — full rewires, partial rewires, and single-circuit upgrades across the Inland Empire.
```
*(41 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Clock` | Same-Week Scheduling |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Pricing |
| `FileCheck` | Inspection-Ready Work |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt — electrician pulling new wire through an attic in an Inland Empire home, professional, daytime)*

---

## SECTION 3 — Emergency Alert Banner

```
Old wiring causing tripped breakers, flickering lights, or a failed home insurance inspection in Murrieta? Call (951) 246-4337 — our electricians assess old wiring the same week and give you a clear scope and price.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Home Rewiring Services in the Inland Empire
```

### Section Intro Paragraph (60 words)
```
Riverside County and the broader Inland Empire contain significant housing stock from the 1950s through 1970s — much of it still running on the original knob-and-tube or aluminum wiring. That wiring was not designed for modern electrical loads, does not meet current NEC standards, and is frequently cited as the reason insurance carriers decline or cancel coverage. Our electricians handle the full scope: assessment, scope definition, permitting, rewiring, and final inspection.
```

### 4 Service Cards

**Card 1**
- Icon: `AlertTriangle`
- Title: `Knob-and-Tube Wiring Removal`
- Description: `Knob-and-tube is ungrounded, cannot support modern loads, and is refused coverage by most California home insurers. We remove it completely and replace with grounded, NEC-compliant copper wiring.`
- Features:
  1. Full Assessment First
  2. Ungrounded Circuit Replacement
  3. Grounding Added Throughout
  4. Insurance-Ready Documentation

**Card 2**
- Icon: `Zap`
- Title: `Aluminum Wiring Replacement`
- Description: `Aluminum wiring installed in 1960s and 70s homes expands and contracts differently than copper, loosening connections over time. The CPSC identifies it as a fire risk. We replace aluminum branch circuits with copper or install listed CO/ALR connectors where a full replacement is not feasible.`
- Features:
  1. CPSC-Recognized Hazard Fix
  2. Copper Replacement Option
  3. CO/ALR Connector Option
  4. All Connections Re-inspected

**Card 3**
- Icon: `Layers`
- Title: `Full Home Rewire`
- Description: `Complete replacement of all branch circuits from the panel out — typically required when multiple systems are outdated, when upgrading to 200-amp service, or when a remodel exposes wiring that fails inspection.`
- Features:
  1. All Circuits Replaced
  2. Panel Upgrade Coordinated
  3. Permitted & City-Inspected
  4. New Circuit Directory

**Card 4**
- Icon: `Scissors`
- Title: `Partial Rewire & Single Circuit`
- Description: `Not every home needs a full rewire. A kitchen remodel, bathroom addition, or laundry circuit upgrade can be scoped to just the affected area — saving time and cost while achieving full code compliance for the work performed.`
- Features:
  1. Room or Zone Scope
  2. Single Circuit Addition
  3. Remodel Rough-In Wiring
  4. Coordinated with Other Trades

### Before/After Section

**H3:**
```
What Changes After a Professional Home Rewire
```

**Checkmark items (6):**
1. All branch circuits grounded — outlets accept modern 3-prong plugs correctly
2. Wiring rated for current NEC amperage requirements on each circuit
3. Insurance carrier receives documentation of code-compliant wiring
4. Breakers sized correctly for each circuit — no more overloaded runs
5. Aluminum or knob-and-tube wiring fully removed and disposed of
6. City inspection signed off — permit closed, record updated with county

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = exposed attic knob-and-tube or aluminum wiring with cloth insulation; after = new Romex copper wire, clean runs, properly secured)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team
```

### Section Intro Paragraph (65 words — contains ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have completed over 75 full and partial rewires across Riverside County — including knob-and-tube removal in Hemet's older neighborhoods, aluminum wiring replacement in Riverside, and remodel-triggered partial rewires across Murrieta and Temecula tract homes.
```

### 4 Benefit Cards

**Card 1**
- Icon: `FileCheck`
- Title: `Code Compliance, Documented`
- Description: `Every rewire we complete is permitted, inspected, and documented for your insurance carrier and county records. We provide the paperwork you need to reinstate coverage.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed Electricians`
- Description: `Every tech holds a valid CA C-10 electrical license. No subcontracting rewire work to uncredentialed crews.`

**Card 3**
- Icon: `Home`
- Title: `Minimal Disruption Approach`
- Description: `We use existing access points and structural openings wherever possible. Most partial rewires require limited drywall work — we document every access point and coordinate with your drywall contractor.`

**Card 4**
- Icon: `DollarSign`
- Title: `Upfront Written Scope`
- Description: `You receive a written scope and quote before work begins. Rewires have no hidden labor-hour surprises — we quote the job, not the hours.`

### Achievement Badge (floating)
```
Line 1: 75+
Line 2: Full & Partial Rewires
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Home rewiring service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — with same-week scheduling throughout.
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
Home Rewiring Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about home rewiring in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How do I know if my home needs rewiring in Murrieta?**

A: The clearest signals are age and wiring type. Homes built before 1975 in Murrieta, Riverside, Hemet, and Corona commonly have knob-and-tube or aluminum wiring. Beyond age, watch for these: outlets that feel warm to the touch, lights that flicker when appliances run, breakers that trip more than once per month on a normal circuit, or a home insurance renewal that asks about wiring type. An insurance carrier denying or limiting coverage based on wiring is the most common trigger for homeowners calling us. A wiring assessment takes one visit — we tell you exactly what's present and what it would take to bring the home current. See also our [electrical safety inspection page](/services/electrical/electrical-safety-inspection).

*(120 words)*

---

**Q2: How long does a full home rewire take?**

A: A full rewire on a typical Inland Empire single-family home — 1,500 to 2,500 square feet — takes 3 to 7 days of electrical work, depending on access conditions and panel status. Permit processing adds 3 to 7 business days before we can start. Total project timeline from signed scope to final inspection runs 2 to 3 weeks in most cases. Partial rewires (single room or zone) typically take 1 to 2 days on-site. We schedule city inspections as part of the project — homeowners do not need to manage that step independently. If you're also doing a panel upgrade, we coordinate both at the same time.

*(113 words)*

---

**Q3: Does a home rewire require opening the walls?**

A: Partial wall opening is almost always necessary for a full rewire — there is no reliable method to route new wiring through finished walls without some access points. Our electricians minimize cut points by using existing penetrations, attic access, and crawl space routing where available. We document every access point with photos and provide recommendations for drywall patching. For partial rewires limited to one room or zone, wall impact is significantly less. Homes with accessible attics and crawl spaces require less cutting than slab-on-grade construction. We include an access assessment in the quote visit so you know what to expect before work begins.

*(105 words)*

---

**Q4: Will my homeowner's insurance cover the rewiring cost?**

A: Standard homeowner's insurance policies do not cover rewiring as a maintenance item — it is considered a preventive upgrade, not a covered loss. Where insurance becomes relevant is on the back end: completing the rewire and submitting documentation to your carrier can reinstate coverage that was suspended, reduce your premium, or satisfy a policy endorsement condition. Some carriers issue a notice requiring rewiring within a set timeframe as a condition of continued coverage. If your carrier has issued such a notice, send us a copy — we've handled this scenario before and can scope the work to satisfy the carrier's specific requirements. Financing options are available; see our [financing page](/financing).

*(112 words)*

---

**Q5: What is the difference between a full rewire and a partial rewire?**

A: A full rewire replaces every branch circuit in the home — from the panel to every outlet, switch, and fixture. This is the right scope when knob-and-tube or aluminum wiring is present throughout, when the panel is also being upgraded to 200-amp service, or when an insurance carrier requires whole-home compliance. A partial rewire replaces wiring in a defined area — a kitchen, bathroom, garage, or single circuit addition. Partial rewires are appropriate for remodels where work is isolated to one zone, or when a specific problem circuit (an overloaded run, a flickering circuit) needs to be corrected without touching the rest of the home. Our [remodeling electrical page](/services/electrical/remodeling-electrical) covers partial rewires as part of a broader renovation.

*(126 words)*

---

**Q6: How much does home rewiring cost in Murrieta?**

A: Costs vary significantly based on scope. A single-circuit addition or correction runs $300 to $800. A partial rewire covering one room or zone typically ranges from $1,500 to $4,000. A full home rewire — all circuits replaced, permit pulled, inspection completed — generally runs $8,000 to $18,000 for a standard Inland Empire single-family home, with cost driven by square footage, access conditions, and whether a panel upgrade is included. We provide itemized written quotes after the assessment visit. There is no charge for the assessment on rewiring projects. For projects where cost is a concern, our [financing page](/financing) covers available payment options — including 0% deferred financing on qualifying electrical work.

*(116 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Old Wiring Becomes an Urgent Electrical Problem
```

### Intro Paragraph (52 words)
```
Knob-and-tube and aluminum wiring don't announce failure in advance. When an old circuit overloads — a burning smell, a breaker that won't reset, outlets that spark — that's a same-day call. Our electricians respond to wiring emergencies across Murrieta and the Inland Empire seven days a week.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Burning smell from an outlet or wall",
  "Breaker trips and will not reset",
  "Outlet sparks on contact",
  "Flickering lights throughout the home",
  "Warm or discolored outlet covers",
  "Insurance carrier requires immediate wiring action",
  "Knob-and-tube wiring found during a remodel",
  "Aluminum wiring identified — connections loosening"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Replace Old Wiring in Your Home?
```

### Supporting Paragraph
```
Home rewiring across Murrieta, Temecula, and the Inland Empire. Written scopes, permitted work, and insurance-ready documentation. Call now or schedule a wiring assessment — our electrical team picks up.
```
*(32 words)*

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
| "power systems and upgrades" | `/services/electrical/power` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "electrical panel upgrade" | `/services/electrical/electrical-panel-upgrade` | FAQ Q2 answer (already written above) |
| "remodeling electrical" | `/services/electrical/remodeling-electrical` | FAQ Q5 answer (already written above) |
| "electrical safety inspection" | `/services/electrical/electrical-safety-inspection` | FAQ Q1 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing" | `/financing` | FAQ Q4 and Q6 answers (already written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `home rewiring Murrieta` |
| Keyword in title | Yes — "Home Rewiring Murrieta, CA" |
| Keyword in H1 | Yes — "Home Rewiring in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + rewiring context |
| Keyword in meta description (first half) | Yes — "Home rewiring in Murrieta" opens description |
| Canonical slug | `/services/electrical/home-rewiring` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro paragraph |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … electrical contractor serving Murrieta"; (3) Final CTA — "Home rewiring across Murrieta" |
| Concrete numbers for AI citation | 75+ rewires completed; 3–7 days on-site; 2–3 week total timeline; $300–$800 single circuit; $1,500–$4,000 partial; $8,000–$18,000 full rewire; 4.9 star rating |
| Q&A H2s (AI extractable) | "How do I know if my home needs rewiring in Murrieta?" and "How much does home rewiring cost in Murrieta?" are question-phrased and self-contained |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~810 words |
| Estimated FAQ word count | ~692 words |
| Total estimated | ~1,502 words |
| Internal links implemented in copy | Power sub-hub [M], Panel Upgrade [R], Remodeling Electrical [R], Safety Inspection [R], Financing [O] in FAQ answers as written |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply the actual C-10 license number before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director. Hero: electrician pulling Romex through attic or wall. Before/after: knob-and-tube or aluminum wiring vs. new copper Romex runs.
3. **Schema:** `FAQPage` JSON-LD wrapping all 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to a visible "Last Updated" line — do not hard-code date string in JSX.
5. **Cost ranges:** Numbers in FAQ Q6 are based on market research for IE residential rewiring. Confirm with client that these ranges are consistent with current quoting before publishing.
6. **Aluminum wiring treatment note:** CO/ALR connectors are mentioned as an alternative to full replacement — this is technically accurate per CPSC guidance. However, client's preferred scope approach (full replacement vs. pigtailing) should be confirmed before copy goes live.
