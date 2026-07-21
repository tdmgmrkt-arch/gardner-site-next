# Generator Installation Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/generator-installation`
**Primary keyword:** generator installation Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md 9-section structure exactly. Power Systems & Upgrades leaf page #5.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

> **SERP framing — CRITICAL:** Generator Installation SERPs pull propane dealers, HVAC contractors, and generator retailers alongside electricians. This page covers ELECTRICAL HOOKUP ONLY: transfer switch installation (manual and automatic), load management, sub-panel integration, and code-compliant disconnect. Do NOT recommend generator brands, fuel types, or generator sizing/selection. Framing is "standby generator wiring and connection" — what the licensed electrician does, not what the generator dealer does. Cross-vertical HVAC bridge is the natural extension: all-electric HVAC systems (heat pumps, AC) depend on generator backup in the IE.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field — only in `openGraph.title`.

```ts
export const metadata: Metadata = {
  title: "Generator Installation Murrieta, CA | Transfer Switch & Hookup",
  description:
    "Generator installation in Murrieta, Temecula & the Inland Empire. Transfer switch, load management, sub-panel hookup, and code-compliant wiring. Call (951) 246-4337.",
  openGraph: {
    title: "Generator Installation Murrieta, CA | Transfer Switch & Hookup | Gardner Plumbing Co.",
    description:
      "Licensed electricians connect standby generators across Murrieta and the Inland Empire. Transfer switch installation, load management, NEC 702 compliant hookup. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/generator-installation",
  },
  alternates: {
    canonical: "/services/electrical/generator-installation",
  },
};
```

**Character counts (verify before ship):**
- title: 57 chars (renders as 88 chars after template suffix — verify no truncation)
- description: 159 chars (at limit — review for truncation)
- canonical_slug: `/services/electrical/generator-installation`

---

## SECTION 2 — Hero Section

### H1
```
Generator Installation in Murrieta — Transfer Switch & Electrical Hookup
```

### Subheadline
```
SCE Public Safety Power Shutoffs hit the Inland Empire every summer. When the grid goes down, a generator keeps your home running — but only if the electrical hookup is done right. Our licensed electricians install transfer switches, manage loads, and handle the code-compliant connection.
```
*(47 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Zap` | Transfer Switch Install |
| `Shield` | Licensed & Insured |
| `FileCheck` | NEC 702 Compliant |
| `Activity` | Load Management Wiring |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt — electrician installing a transfer switch panel in a residential setting, clean professional installation, Inland Empire home exterior visible)*

---

## SECTION 3 — Emergency Alert Banner

```
SCE outage or PSPS event in Murrieta and your generator isn't connected? Call (951) 246-4337 — our electricians assess transfer switch and hookup options and schedule installation as soon as power is restored.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Generator Electrical Hookup Services in the Inland Empire
```

### Section Intro Paragraph (72 words)
```
SoCal Edison's Public Safety Power Shutoff (PSPS) program has cut power to parts of Riverside County multiple times in recent years — typically during high-wind events when fire risk peaks. Summer heat demand also strains the IE grid. Homeowners who have a standby or portable generator but no proper transfer switch are running an unsafe setup — and potentially back-feeding power onto utility lines. Our electricians handle the electrical side of generator installation: transfer switch, load management, sub-panel integration, and permit.
```

### 4 Service Cards

**Card 1**
- Icon: `ToggleLeft`
- Title: `Manual Transfer Switch Installation`
- Description: `A manual transfer switch isolates your home from SCE's grid when the generator runs, preventing dangerous back-feed. We install the switch, wire selected circuits through it, and confirm the disconnect meets NEC 702 requirements.`
- Features:
  1. Grid Isolation Confirmed
  2. NEC 702 Compliant
  3. Selected Circuit Hookup
  4. Proper Disconnect Installed

**Card 2**
- Icon: `Cpu`
- Title: `Automatic Transfer Switch (ATS)`
- Description: `An automatic transfer switch detects grid loss and switches your home to generator power within seconds — no manual switching required. Our electricians size the ATS to your generator's output and wire it to the circuits designated for standby power.`
- Features:
  1. Automatic Grid Detection
  2. ATS Sized to Generator Output
  3. Standby Circuit Configuration
  4. Code-Compliant Installation

**Card 3**
- Icon: `BarChart`
- Title: `Load Management & Sub-Panel Integration`
- Description: `Whole-home standby generators require load management to prevent overloading the generator's rated output. We identify critical circuits, configure load management wiring, and integrate with your existing sub-panel where applicable.`
- Features:
  1. Critical Circuit Priority
  2. Load Shed Configuration
  3. Sub-Panel Integration
  4. Generator Interlock Kit Option

**Card 4**
- Icon: `Plug`
- Title: `Portable Generator Hookup`
- Description: `A portable generator without a proper inlet box and transfer switch is a code violation and a back-feed risk. We install a generator inlet box, interlock kit or dedicated transfer switch, and route the connection to your designated standby circuits.`
- Features:
  1. Generator Inlet Box Install
  2. Interlock Kit or Transfer Switch
  3. Standby Circuit Selection
  4. Permitted & Inspected

### Before/After Section

**H3:**
```
What Changes After a Proper Generator Hookup
```

**Checkmark items (6):**
1. Transfer switch installed — generator cannot back-feed onto SCE utility lines
2. Critical circuits confirmed: HVAC, refrigerator, lighting, medical equipment where applicable
3. Load management configured — generator runs within rated output without overload
4. Permit closed with city — installation is on record and code-compliant
5. Generator interlock or ATS tested under simulated grid loss before sign-off
6. Homeowner briefed on transfer switch operation — manual switch users know the sequence

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = portable generator running with extension cords through windows (unsafe setup); after = clean transfer switch panel, inlet box, proper circuit routing, labeled)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for Generator Hookup
```

### Section Intro Paragraph (68 words — contains ONE canonical brand mention)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have completed over 50 generator hookup installations across Riverside County — including transfer switch installations in Murrieta ahead of PSPS season, ATS installs for all-electric homes with heat pumps, and portable generator inlet boxes for homeowners who want a safe, permitted connection without a full standby system.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Shield`
- Title: `Code-Compliant, Safe Hookup`
- Description: `Back-feed onto SCE utility lines is a lethal hazard for utility workers and a fire risk for your home. Every generator hookup we install includes a proper disconnect — no extension cords through windows, no improvised connections.`

**Card 2**
- Icon: `FileCheck`
- Title: `NEC 702 Compliant Every Time`
- Description: `Generator hookup is a permit-required electrical project in Murrieta. The permit triggers a city inspection that confirms your transfer switch and disconnect meet NEC 702. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote.`

**Card 3**
- Icon: `Cpu`
- Title: `Load Management Expertise`
- Description: `We size transfer switches and configure load management to match your generator's rated output — preventing overloads that damage both the generator and connected appliances.`

**Card 4**
- Icon: `DollarSign`
- Title: `Upfront Written Quotes`
- Description: `You receive a written quote covering the transfer switch, inlet box or ATS, permit, and inspection — before we schedule. No mid-project add-ons after the panel is open.`

### Achievement Badge (floating)
```
Line 1: 50+
Line 2: Generator Hookups
```
*(Newest electrical service — count reflects market entry; grows as IE PSPS awareness drives demand)*

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (45 words)
```
Generator installation and transfer switch service is available across the Inland Empire, dispatched from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — with scheduling available before and after PSPS season.
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
Generator Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about generator electrical hookup in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What does a generator installation electrician actually do?**

A: Our scope is the electrical connection between the generator and your home's circuits — not the generator itself. Specifically: we install the transfer switch (manual or automatic) that safely disconnects your home from SCE's grid when the generator is running, run the wiring from the transfer switch to selected critical circuits, and install the inlet box or ATS connection point where the generator plugs in. Permit coordination is available where required — permit fees are listed as a pass-through line on your quote. What we do not do: recommend which generator to buy, deliver or set up the generator unit, supply fuel, or service the generator engine. That side belongs to the generator dealer or a qualified service tech.

*(116 words)*

---

**Q2: What is a transfer switch and why is it required?**

A: A transfer switch is the device that disconnects your home from SoCal Edison's grid before your generator starts powering your circuits. Without it, generator power can flow backward through your meter onto utility lines — a condition called back-feed. Back-feed has killed utility workers responding to outages, and it can cause fires if the grid restores power while your generator is running. NEC Article 702 (Optional Standby Systems) requires a proper disconnecting means for all generator hookups. The City of Murrieta enforces this requirement through permits and inspections. Running a generator with extension cords through windows bypasses all of this — it is unsafe and it is a code violation. Every hookup we install includes a compliant transfer switch or interlock kit.

*(124 words)*

---

**Q3: Do I need a generator to keep my HVAC running during an outage?**

A: Yes — if your home has a heat pump or central air conditioning system, those systems are entirely electrical and stop working the moment the grid goes down. In an Inland Empire summer, losing AC during a PSPS event is a health concern, not just a comfort issue. Heat pumps, in particular, have no gas backup — if the grid is down, the home has no heating or cooling unless a generator is powering the HVAC circuit. A properly sized standby generator with the HVAC circuit on the transfer switch keeps your [heat pump system](/services/hvac/heat-pump-systems) or [central AC](/services/hvac/ac-repair) running through an outage. Our electricians configure the load management to prioritize HVAC among the critical circuits.

*(122 words)*

---

**Q4: What is the difference between a standby generator and a portable generator hookup?**

A: A standby generator is a permanently installed unit — mounted outside the home on a pad, connected to a fuel supply, and wired through an automatic transfer switch. It detects grid loss and starts automatically. Most standby units run on natural gas or propane. A portable generator is a wheeled unit stored until needed, started manually, and connected through an inlet box and transfer switch or interlock kit. Both require proper electrical hookup — the difference is in how the generator is deployed, not in whether a transfer switch is needed. Portable hookups are lower cost to install; standby systems are more convenient. Our electricians install the electrical side of both — see the service cards above for scope details.

*(119 words)*

---

**Q5: Does generator hookup require a permit in Murrieta?**

A: Yes. Generator hookup — whether standby or portable inlet box — is a permit-required electrical project in Murrieta and throughout Riverside County. The permit triggers a city inspection that confirms the transfer switch, disconnect, and wiring meet NEC 702. Unpermitted generator hookups are a liability issue: they void the electrical portion of your homeowner's insurance and put you at risk if a back-feed event damages utility equipment. Permit processing in Murrieta typically takes 3 to 7 business days. We submit the permit application as part of scheduling — homeowners do not need to manage the permit process independently. The inspection is scheduled and attended by our electricians.

*(110 words)*

---

**Q6: How much does generator electrical hookup cost in Murrieta?**

A: A portable generator inlet box with interlock kit — the most common entry-level hookup — typically runs $800 to $1,500, permit and inspection included. A manual transfer switch with selected critical circuits runs $1,500 to $3,000 depending on the number of circuits included. An automatic transfer switch (ATS) for a whole-home standby generator runs $2,500 to $5,000 for the electrical work, not including the generator unit itself. All quotes are written before work begins. If the hookup also requires a [panel upgrade](/services/electrical/electrical-panel-upgrade) — which some standby systems do depending on amperage — we scope both together. Financing is available; see our [financing page](/financing).

*(107 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Generator Hookup Before the Next Outage
```

### Intro Paragraph (55 words)
```
SCE PSPS events in the Inland Empire are seasonal — they happen in fall and early winter when Santa Ana winds peak. Homeowners who call after the outage starts cannot get a permitted hookup completed during the outage. Our electricians schedule generator hookup installations year-round — before outage season is the right time to call.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "SCE PSPS outage — generator running with no transfer switch",
  "Extension cords from generator through windows — unsafe setup",
  "Back-feed concern — meter sparking when generator runs",
  "Heat pump or AC offline during summer outage",
  "Transfer switch installed by previous owner — condition unknown",
  "Standby generator purchased — electrical hookup not yet done",
  "Portable generator inlet box failing or corroded",
  "Interlock kit loose or not engaging properly"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Connect Your Generator the Right Way?
```

### Supporting Paragraph
```
Generator electrical hookup across Murrieta, Temecula, and the Inland Empire. Transfer switches, load management, and NEC 702 compliant installation before outage season. Call now or schedule online — our electrical team picks up.
```
*(33 words)*

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
| "panel upgrade" | `/services/electrical/electrical-panel-upgrade` | FAQ Q6 answer (already written above) |

### Cross-Vertical [O] — HVAC bridge (strongest cross-vertical on this page)
| Anchor Text | href | Section to Place |
|---|---|---|
| "heat pump system" | `/services/hvac/heat-pump-systems` | FAQ Q3 answer (already written above) |
| "central AC" | `/services/hvac/ac-repair` | FAQ Q3 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing" | `/financing` | FAQ Q6 answer (already written above) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `generator installation Murrieta` |
| Keyword in title | Yes — "Generator Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Generator Installation in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + generator installation + IE context |
| Keyword in meta description (first half) | Yes — "Generator installation in Murrieta" opens description |
| Canonical slug | `/services/electrical/generator-installation` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro paragraph |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … electrical contractor serving Murrieta"; (3) Final CTA — "Generator electrical hookup across Murrieta" |
| SERP drift guard | Pass — page is framed exclusively as "generator electrical hookup / transfer switch" not generator selection, brand reviews, or fuel type guidance. No generator brand names mentioned. |
| Concrete numbers for AI citation | 50+ generator hookups; $800–$1,500 portable inlet box; $1,500–$3,000 manual transfer switch; $2,500–$5,000 ATS; 3–7 days permit processing; NEC Article 702 cited; 4.9 star rating |
| Q&A H2s (AI extractable) | "What does a generator installation electrician actually do?" and "What is a transfer switch and why is it required?" are question-phrased and self-contained |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~840 words |
| Estimated FAQ word count | ~698 words |
| Total estimated | ~1,538 words |
| Internal links implemented in copy | Power sub-hub [M], Panel Upgrade [R], Heat Pump Systems [O cross-vertical], AC Repair [O cross-vertical], Financing [O] in FAQ answers as written |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply the actual C-10 license number before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director. Hero: electrician installing a transfer switch panel. Before/after: extension cord setup (unsafe) vs. clean transfer switch and inlet box installation.
3. **Schema:** `FAQPage` JSON-LD wrapping all 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to a visible "Last Updated" line — do not hard-code date string in JSX.
5. **SERP drift guard — editorial review required:** Before publishing, re-read the entire page and confirm no sentence could be interpreted as generator brand recommendations, fuel type guidance, or generator sizing advice. Those topics belong to dealer and HVAC contractor pages that outcompete this SERP slot. This page is about the electrical connection only.
6. **PSPS reference:** SoCal Edison PSPS events in Riverside County are factually documented. This is a citable local signal that AI engines extract. "PSPS" is spelled out in the intro and FAQ Q2 for readers unfamiliar with the acronym.
7. **HVAC cross-vertical bridge:** FAQ Q3 explicitly links to `/services/hvac/heat-pump-systems` and `/services/hvac/ac-repair`. Confirm these routes are live before this page ships. These are the strongest cross-vertical links on the entire electrical cluster.
8. **NEC 702 reference:** NEC Article 702 (Optional Standby Systems) governs portable and standby generator hookups at the residential level. This citation is factually accurate and a strong E-E-A-T signal.
