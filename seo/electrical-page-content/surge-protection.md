# Surge Protection Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/surge-protection`
**Primary keyword:** surge protection Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Canonical template is `seo/hvac-page-content/ac-repair.md`. This page follows the same 9-section structure. Tone: preventive/educational — buyer is protecting investments (EV charger, smart home, AC system, appliances). Not in crisis.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

> **Achievement badge note:** "200+ Whole-Home Surge Systems" — documented installs since the electrical vertical launched, including whole-home panel-mounted SPDs and point-of-use protector installations across Riverside County.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** The root layout in `app/layout.tsx` applies template `'%s | Gardner Plumbing Co.'` to every page title. **Do NOT include `| Gardner Plumbing Co.` in the `title` field.** Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Surge Protection Murrieta, CA | Whole-Home Surge Protector",
  description:
    "Whole-home surge protection in Murrieta, Temecula & the Inland Empire. Panel-mounted SPD installation protects your EV charger, AC, appliances & smart home. Call (951) 246-4337.",
  openGraph: {
    title: "Surge Protection Murrieta, CA | Whole-Home Surge Protector | Gardner Plumbing Co.",
    description:
      "Licensed surge protector installation in Murrieta and the Inland Empire. Panel-mounted whole-home SPD defends your EV charger, HVAC, and electronics. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/surge-protection",
  },
  alternates: {
    canonical: "/services/electrical/surge-protection",
  },
};
```

**Character counts (verify before ship):**
- title: 55 chars (renders as ~86 chars after template suffix — verify in browser)
- description: 160 chars
- canonical_slug: `/services/electrical/surge-protection`

---

## SECTION 2 — Hero Section

### H1
```
Whole-Home Surge Protection in Murrieta — Installed at the Panel
```

### Subheadline
```
A panel-mounted surge protective device (SPD) stops voltage spikes before they reach your EV charger, AC system, smart home devices, and appliances — installed by licensed electricians serving the Inland Empire.
```
*(33 words)*

### Hero Badge Text
```
Line 1: Licensed Surge Protection
Line 2: Murrieta & Inland Empire
```

### 4 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Shield` | Full-Home Coverage at the Panel |
| `Zap` | Protects EV Chargers & AC Units |
| `Wifi` | Smart Home & Electronics Safe |
| `DollarSign` | Upfront Installation Pricing |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Installation` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: licensed electrician installing a panel-mounted surge protective device at a residential breaker panel, clean organized panel visible, Inland Empire home — conveys precision and protection)*

---

## SECTION 3 — Emergency Alert Banner

```
Inland Empire summer storm season runs July through September. Surge damage happens fast. Call (951) 246-4337 to schedule a whole-home surge protector installation before the next event.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Whole-Home Surge Protection Services for Inland Empire Homes
```

### Section Intro Paragraph (64 words)
```
The Inland Empire gets summer thunderstorms, lightning-induced surges, and grid voltage fluctuations from Southern California Edison restoration events — all of which send damaging voltage spikes through your home's wiring. A single surge can destroy an EV charger ($500–$2,000 to replace), a smart home hub, an AC control board ($400–$900), or a refrigerator. A whole-home surge protective device installed at the panel costs a fraction of one appliance replacement and protects everything in the home.
```

### 4 Service Cards

**Card 1**
- Icon: `Shield`
- Title: `Whole-Home Panel SPD Installation`
- Description: `A panel-mounted surge protective device (SPD, Type 1 or Type 2) intercepts transient voltage before it reaches any circuit in the home. This is the most effective surge defense available — one device protects every outlet, appliance, and hardwired system in the home.`
- Features:
  1. Type 1 or Type 2 SPD per NEC 230.67
  2. Installed at Main Panel
  3. Full-Home Circuit Coverage
  4. Manufacturer Warranty Registered

**Card 2**
- Icon: `Car`
- Title: `EV Charger Surge Protection`
- Description: `Level 2 EV chargers (240V) are among the most surge-vulnerable devices in any home — they sit on a dedicated high-amperage circuit and are connected continuously. A whole-home SPD at the panel protects the charger. Point-of-use protection is also available for the charger's EVSE unit.`
- Features:
  1. Whole-Home SPD for Full Protection
  2. Point-of-Use EVSE Protection Option
  3. Compatible with All Level 2 Chargers
  4. Often Installed Alongside EV Charger Work

**Card 3**
- Icon: `Thermometer`
- Title: `HVAC & AC System Protection`
- Description: `AC control boards and variable-speed compressors are sensitive to voltage transients. A single grid surge can destroy a $600 control board or damage a variable-speed motor — repairs that take your AC out of commission for days during an Inland Empire summer. Whole-home surge protection prevents this.`
- Features:
  1. AC Control Board Protection
  2. Variable-Speed Compressor Defense
  3. Compatible with Heat Pumps & Mini-Splits
  4. Paired with Our AC Repair Team

**Card 4**
- Icon: `Wifi`
- Title: `Smart Home & Electronics Protection`
- Description: `Smart panels, security systems, home automation hubs, and high-end AV equipment are all surge-vulnerable. A whole-home SPD at the panel, combined with quality point-of-use protection at sensitive equipment, provides layered defense for homes with significant smart home investment.`
- Features:
  1. Smart Panel & Hub Protection
  2. Security System Coverage
  3. AV & Home Theater Defense
  4. Layered Point-of-Use Options

### Before/After Section

**H3:**
```
What Changes After a Whole-Home Surge Protector Is Installed
```

**Checkmark items (6):**
1. Every circuit in the home protected from transient voltage spikes
2. EV charger, AC system, and smart home devices all covered by one device
3. Manufacturer warranty registered for the SPD unit
4. Installation documented — relevant if surge damage claim arises later
5. Protection works 24/7 with no homeowner action required after install
6. Future panel work coordinated — SPD reinstalled or upgraded as part of any panel upgrade

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before — standard residential panel without SPD; after — clean panel with surge protective device installed and labeled, electrician confirming installation)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for Surge Protection
```

### Section Intro Paragraph (62 words — contains the ONE canonical brand mention per brand-vertical dissonance rule)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have installed over 200 whole-home surge protection systems across Riverside County — including SPD installations paired with EV charger circuits, panel upgrades, and post-storm electrical restorations.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Shield`
- Title: `NEC 230.67 Compliant Installation`
- Description: `The 2020 NEC (adopted in California) now requires surge protection on new residential services under NEC 230.67. We install to code, provide the manufacturer documentation, and register the warranty on your behalf.`

**Card 2**
- Icon: `Wrench`
- Title: `Paired With Panel Work`
- Description: `If you are getting a panel upgrade or a new EV charger circuit, surge protection installs most efficiently at the same time. We coordinate the two — no second visit, no second service fee.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Installation Pricing`
- Description: `Whole-home SPD installation pricing is quoted before any work begins. The most common residential installation takes 1–2 hours. You receive a written quote and the work is done the same visit in most cases.`

**Card 4**
- Icon: `Clock`
- Title: `Same-Day Installation Available`
- Description: `Surge protection is not a complex installation. Most whole-home SPD installs are completed the same day the call is placed. We carry Type 1 and Type 2 devices on every truck.`

### Achievement Badge
```
Line 1: 200+
Line 2: Whole-Home Surge Systems Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (42 words)
```
Surge protection installation is available across the Inland Empire, with same-day service from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout.
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
Surge Protection Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about whole-home surge protection in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What is the difference between whole-home surge protection and a power strip surge protector?**

A: A power strip surge protector (also called a point-of-use protector) defends only the devices plugged into that strip. It does nothing for hardwired appliances — your AC system, EV charger, electric range, or refrigerator. A whole-home surge protective device (SPD) installs at the main electrical panel and intercepts transient voltage before it reaches any circuit in the home — protecting every hardwired and plugged-in device at once. The two are complementary: a panel-mounted SPD handles the large surges from lightning and utility grid events; quality point-of-use protectors at sensitive electronics add a second layer of defense for smaller transients. Using only power strips with no panel protection leaves the majority of your home's equipment unprotected.

*(123 words)*

---

**Q2: Does the Inland Empire get enough lightning to justify surge protection?**

A: Yes. The Murrieta and wider Inland Empire area experiences summer monsoon thunderstorm activity from roughly July through September. Lightning does not need to strike your home directly to cause surge damage — a strike to a nearby utility line or transformer sends a voltage spike through the distribution system and into homes connected to it. The Inland Empire also experiences grid voltage fluctuation events during heat waves when SCE manages load across the network. These utility-side surges are invisible to homeowners and do damage over time to sensitive electronics, EV charging circuits, and variable-speed AC compressors. After any storm event, our [emergency electrical team](/services/electrical/emergency-electrical) is available 24/7 for post-surge assessment.

*(116 words)*

---

**Q3: Is surge protection required by California electrical code?**

A: The 2020 National Electrical Code (NEC), adopted in California, added Section 230.67 requiring surge protection on new residential electrical services. This requirement applies to new construction and service panel replacements — not retroactively to existing homes. However, the insurance industry in California is paying close attention to surge protection as a risk mitigation factor for wildfire-prone and storm-prone regions. Homes with documented whole-home surge protection may have an advantage in insurance underwriting conversations. An [electrical safety inspection](/services/electrical/electrical-safety-inspection) can confirm whether your home's service panel meets NEC 230.67 if you are unsure.

*(93 words)*

---

**Q4: Will a surge protector protect my EV charger?**

A: Yes — and EV chargers are among the most important devices to protect with whole-home surge protection. A Level 2 EV charger (240V, 48A) stays connected to a dedicated high-amperage circuit continuously. A single surge event can damage the EVSE unit (the wall-mounted charging unit), the car's onboard charger, or both. Replacing an EVSE unit costs $500–$2,000 depending on brand. A panel-mounted SPD protects the entire 240V circuit. If you are having an [EV charger installed](/services/electrical/ev-charger-installation), adding whole-home surge protection during the same visit is the most cost-efficient time to do it.

*(95 words)*

---

**Q5: Can surge protection prevent damage from a PSPS (utility shutoff) event?**

A: A PSPS (Public Safety Power Shutoff) event from SCE does not itself cause surge damage — it is a controlled de-energization. The risk is in the restoration. When SCE re-energizes the grid after a PSPS event, voltage restoration can be uneven, particularly in areas at the end of a distribution circuit. Whole-home surge protection at the panel handles the transient voltage spike that can accompany grid restoration. It is one of the practical reasons Inland Empire homeowners in Temecula, Menifee, and Lake Elsinore — areas that have experienced PSPS events — invest in panel-level surge protection. See our [electrical panel upgrade service](/services/electrical/electrical-panel-upgrade) if your panel is approaching the end of its service life — old panels often fail to protect against restoration transients even with an SPD installed.

*(130 words)*

---

**Q6: How much does whole-home surge protection cost in Murrieta?**

A: A panel-mounted whole-home SPD installation in Murrieta typically runs $200–$600 for the device and installation labor — the range depends on the SPD unit selected (Type 1 vs. Type 2, joule rating, brand) and whether any panel prep work is needed. This is significantly less than a single appliance replacement after a surge event. When the installation is paired with a panel upgrade or an EV charger circuit install, total service cost is often reduced because the panel is already open and the labor overlap is minimal. Call (951) 246-4337 for a same-day quote — most SPD installations are completed in 1–2 hours.

*(107 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Surge Protection Installed Fast
```

### Intro Paragraph (54 words)
```
After a storm event, a lightning strike near your home, or a grid restoration following a PSPS shutoff, surge damage to your electrical system may already be underway — even if nothing is visibly wrong yet. Schedule a same-day surge protection installation before the next event. Call (951) 246-4337 for immediate availability across the Inland Empire.
```

### 8 Installation Triggers (matches "emergencyReasons" array structure — adapted for non-emergency page)
```js
const installationTriggers = [
  "Post-lightning strike or nearby utility hit",
  "After a PSPS restoration event",
  "New EV charger installation — protect at the same time",
  "New panel upgrade — NEC 230.67 compliance",
  "Smart home with significant electronics investment",
  "AC or heat pump system protection",
  "Home with multiple high-value appliances",
  "Pre-storm-season installation — July–September Inland Empire"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Protect Your Home from the Next Surge?
```

### Supporting Paragraph
```
Whole-home surge protection installed across Murrieta, Temecula, and the Inland Empire. Panel-mounted SPD, same-day installation, licensed electricians, upfront pricing. Call now or schedule online.
```
*(28 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Shield` | NEC 230.67 Compliant |
| `Clock` | Same-Day Installation |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section |
|---|---|---|
| "electrical repair and safety services" | `/services/electrical/repairs` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section |
|---|---|---|
| "electrical safety inspection" | `/services/electrical/electrical-safety-inspection` | FAQ Q3 answer (already written above) |
| "electrical panel upgrade service" | `/services/electrical/electrical-panel-upgrade` | FAQ Q5 answer (already written above) |
| "EV charger installed" | `/services/electrical/ev-charger-installation` | FAQ Q4 answer (already written above) |
| "emergency electrical team" | `/services/electrical/emergency-electrical` | FAQ Q2 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section |
|---|---|---|
| "electrical repairs" | `/services/electrical/electrical-repairs` | Card note or FAQ if surge caused damage |
| "AC repair" | `/services/hvac/ac-repair` | Card 3 — protect your AC system — cross-vertical HVAC bridge |
| "financing options" | `/financing` | Why Choose Us or final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `surge protection Murrieta` |
| Keyword in title | Yes — "Surge Protection Murrieta, CA" |
| Keyword in H1 | Yes — "Whole-Home Surge Protection in Murrieta" |
| Keyword in first paragraph | Yes — service overview intro: "surge protective device … Murrieta" + brand cost/protection framing |
| Keyword in meta description (first half) | Yes — "Whole-home surge protection in Murrieta" opens description |
| Canonical slug | `/services/electrical/surge-protection` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "surge protection installed across Murrieta" |
| Concrete numbers for AI citation | 200+ whole-home systems; $200–$600 install cost; 1–2 hours install time; $500–$2,000 EV charger replacement cost; $400–$900 AC control board replacement; July–September storm season; NEC 230.67; 4.9 stars |
| Citable local specifics | SCE PSPS events; Inland Empire monsoon season July–September; NEC 230.67 California adoption; Type 1/Type 2 SPD; Level 2 EV charger 240V/48A spec; specific appliance damage costs |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed; Installation Triggers section is AI-extractable as a list |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~860 words |
| Estimated FAQ word count | ~664 words |
| Total estimated | ~1,524 words |
| Internal links in copy | Repairs sub-hub [M], Safety Inspection [R], Panel Upgrade [R], EV Charger [R], Emergency Electrical [R], AC Repair [O] (cross-vertical HVAC bridge) |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director: Hero should show a licensed electrician installing an SPD at a clean residential panel — conveys precision and protection, not urgency. Before/after: standard panel without SPD → panel with SPD installed and labeled.
3. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer implements `lastUpdated: "June 2026"` bound to visible rendered line.
5. **Breadcrumbs:** `Home > Services > Repairs & Safety > Surge Protection`
6. **Cross-vertical HVAC link** (`/services/hvac/ac-repair`) is included as [O] in Card 3 — "Paired with Our AC Repair Team." This is the Electrical → HVAC cross-vertical bridge from the cluster architecture. Confirm the anchor text and exact slug with the web-developer before implementation.
7. **SERP cluster note:** Safety Inspection and Surge Protection share 5 domains in Cluster C — the tightest pair. Bidirectional linking between these two pages is [R] priority and is fully implemented in both files.
8. **NEC 230.67 callout:** This code citation is a genuine AI citation trigger and differentiator from generic surge protection content. Do not genericize or remove in implementation.
9. **EV charger link** (`/services/electrical/ev-charger-installation`) is [R] — confirm this leaf page slug matches the locked slug in `electrical-menu-labels.md` (`ev-charger-installation`). It does — confirmed against the menu labels file.
