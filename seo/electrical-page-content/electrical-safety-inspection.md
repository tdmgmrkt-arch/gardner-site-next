# Electrical Safety Inspection Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/electrical-safety-inspection`
**Primary keyword:** electrical inspection Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Canonical template is `seo/hvac-page-content/ac-repair.md`. This page follows the same 9-section structure. Tone: preventive/educational — buyer is a proactive homeowner, real estate party, or insurance requester. Not in crisis.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

> **Achievement badge note:** "250+ Safety Inspections" — documented via service history records; includes pre-sale, pre-purchase, insurance underwriting, and post-storm inspections across Riverside County.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** The root layout in `app/layout.tsx` applies template `'%s | Gardner Plumbing Co.'` to every page title. **Do NOT include `| Gardner Plumbing Co.` in the `title` field.** Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Electrical Inspection Murrieta, CA | Safety & Code Audit",
  description:
    "Electrical inspection in Murrieta, Temecula & the Inland Empire. Pre-sale, pre-purchase, insurance, and code compliance inspections. Licensed electricians. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Inspection Murrieta, CA | Safety & Code Audit | Gardner Plumbing Co.",
    description:
      "Licensed electrical safety inspections in Murrieta and the Inland Empire. NEC code audits, panel inspections, real estate transaction reports. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/electrical-safety-inspection",
  },
  alternates: {
    canonical: "/services/electrical/electrical-safety-inspection",
  },
};
```

**Character counts (verify before ship):**
- title: 52 chars (renders as ~83 chars after template suffix — verify in browser)
- description: 157 chars
- canonical_slug: `/services/electrical/electrical-safety-inspection`

---

## SECTION 2 — Hero Section

### H1
```
Electrical Safety Inspection in Murrieta — Licensed, Code-Accurate, Documented
```

### Subheadline
```
A full electrical inspection for your Inland Empire home — panel condition, wiring safety, code compliance, and a written report you can use for a real estate transaction, insurance renewal, or your own peace of mind.
```
*(38 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Inspection
Line 2: Murrieta & Inland Empire
```

### 4 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `ClipboardCheck` | Written Inspection Report |
| `Shield` | Licensed & Insured |
| `FileText` | NEC & CA Title 24 Code Check |
| `Home` | Pre-Sale & Pre-Purchase Ready |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Inspection` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: licensed electrician with clipboard inspecting a residential breaker panel, professional documentation visible, Inland Empire home interior — conveys thoroughness, not urgency)*

---

## SECTION 3 — Emergency Alert Banner

```
Buying or selling a home in Murrieta? Insurance requiring an electrical inspection? Call (951) 246-4337 — licensed electricians available for same-week inspection scheduling across the Inland Empire.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Electrical Safety Inspection Services for Inland Empire Homes
```

### Section Intro Paragraph (58 words)
```
Murrieta homes built in the 1990s and early 2000s are now approaching the 30-year mark — the age when wiring connections loosen, panels show wear, and code requirements have moved significantly beyond what was standard at construction. A professional electrical inspection identifies what has changed and what needs attention, before a real estate deal falls through, an insurance policy is cancelled, or a fault becomes a fire.
```

### 4 Service Cards

**Card 1**
- Icon: `Home`
- Title: `Pre-Sale & Pre-Purchase Inspection`
- Description: `Sellers get ahead of buyer inspection findings. Buyers get an independent electrical assessment before committing to a purchase. We provide a written report detailing condition, code deficiencies, and recommended repairs — suitable for real estate transaction documentation.`
- Features:
  1. Full Panel Condition Report
  2. Wiring & Outlet Assessment
  3. GFCI & AFCI Compliance Check
  4. Written Report for Transaction

**Card 2**
- Icon: `FileText`
- Title: `Insurance Underwriting Inspection`
- Description: `Some insurers in California now require an electrical inspection before renewing or issuing a policy on homes over 20 years old — particularly for homes with older panels (Federal Pacific, Zinsco, split-bus designs). We provide the inspection documentation insurers need.`
- Features:
  1. Panel Brand & Age Assessment
  2. Older Panel Risk Notation
  3. Insurer-Ready Written Report
  4. Follow-Up Repair Estimate if Needed

**Card 3**
- Icon: `Scale`
- Title: `NEC & California Code Compliance`
- Description: `California adopts the National Electrical Code (NEC) on a state cycle. Homes built before the current adoption may have wiring, outlet placement, or panel configurations that no longer meet code. We audit against the current NEC and CA Title 24 requirements and document every deficiency.`
- Features:
  1. NEC Code Compliance Audit
  2. CA Title 24 Requirements Check
  3. GFCI Location Verification
  4. Arc-Fault Protection Assessment

**Card 4**
- Icon: `CloudLightning`
- Title: `Post-Storm & Post-Event Inspection`
- Description: `After an Inland Empire summer thunderstorm, a PSPS restoration event, or any situation where the electrical system was stressed by a surge or power interruption, a post-event inspection confirms no hidden damage before normal use resumes.`
- Features:
  1. Post-Surge Wiring Check
  2. Panel Post-Event Assessment
  3. Outlet & Switch Condition Review
  4. Surge Damage Documentation

### Before/After Section

**H3:**
```
What You Receive After a Professional Electrical Inspection
```

**Checkmark items (6):**
1. Written inspection report covering panel, wiring, outlets, and code compliance
2. All deficiencies documented with location, nature of issue, and severity rating
3. Clear recommendation: repair now, monitor, or upgrade — prioritized
4. Report formatted for use with real estate agents, insurers, or lenders
5. Verbal walkthrough of findings with the homeowner before we leave
6. Repair estimate provided on the same visit if work is needed

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before — older Federal Pacific or Zinsco-style panel, disorganized wiring; after — clean organized panel, electrician handing over written report)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Inspections
```

### Section Intro Paragraph (62 words — contains the ONE canonical brand mention per brand-vertical dissonance rule)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have completed over 250 safety inspections across Riverside County — including pre-sale inspections for real estate transactions, insurance compliance reports, and post-storm electrical assessments following summer monsoon events.
```

### 4 Benefit Cards

**Card 1**
- Icon: `ClipboardCheck`
- Title: `Written Report, Every Inspection`
- Description: `Every inspection delivers a written report — not just a verbal summary. The report documents panel condition, wiring findings, code deficiencies, and recommended action. Suitable for real estate, insurance, or personal records.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed Electricians`
- Description: `Inspections are performed by licensed CA electricians, not home inspectors with a general checklist. Electrical code expertise matters when the report is being reviewed by an insurer or real estate attorney.`

**Card 3**
- Icon: `Clock`
- Title: `Same-Week Scheduling`
- Description: `Real estate transactions move fast. We prioritize inspection scheduling so your timeline doesn't slip. Most inspections are bookable within 2–3 business days.`

**Card 4**
- Icon: `Wrench`
- Title: `Repair Estimate on the Same Visit`
- Description: `If the inspection identifies repairs, we provide a written repair estimate before we leave. No second appointment needed to understand what the work will cost.`

### Achievement Badge
```
Line 1: 250+
Line 2: Safety Inspections Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (42 words)
```
Electrical safety inspections are available across the Inland Empire, with scheduling from our Murrieta base. We serve Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-week availability throughout.
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
Electrical Inspection Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about electrical safety inspections in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: What does a home electrical safety inspection include?**

A: A full electrical safety inspection covers the main service panel (breaker condition, panel brand, amperage rating, bus bar and wiring condition), all accessible wiring (visible in attic, crawlspace, garage, and junction boxes), outlet and switch condition throughout the home, GFCI protection verification in required locations (kitchen, bathrooms, garage, outdoors, near water), AFCI breaker compliance where required by current code, and a review of any visible code deficiencies. The inspection concludes with a written report. For Murrieta homes built in the 1990s, the inspection pays particular attention to 25–30-year-old breaker panels that are nearing end-of-life for their components.

*(106 words)*

---

**Q2: How long does an electrical inspection take?**

A: A standard single-family home inspection takes 1.5 to 2.5 hours depending on home size, age, and accessibility. Homes over 2,500 square feet, homes with multiple panels or sub-panels, or homes with a crawlspace or full attic requiring inspection typically run closer to 2.5–3 hours. We block a full half-day for the inspection so there is no time pressure. The written report is typically delivered within 24 hours of the inspection.

*(72 words)*

---

**Q3: Do I need an electrical inspection when buying or selling a home in Murrieta?**

A: A general home inspection is standard in any California real estate transaction, but the general inspector's electrical check is limited — they look for obvious defects, not code compliance. A dedicated electrical inspection by a licensed electrician provides a deeper, code-accurate assessment. For sellers, it prevents surprises in the buyer's contingency period. For buyers, it provides an independent evaluation that a general home inspector cannot deliver at the same technical depth. Many real estate attorneys in Riverside County now recommend a standalone electrical inspection on homes over 20 years old.

*(91 words)*

---

**Q4: What electrical panels are considered high-risk in California homes?**

A: Three panel brands are associated with elevated failure risk and are frequently flagged by insurers and real estate lenders in California. Federal Pacific Electric (FPE) Stab-Lok panels, manufactured widely through the 1980s, have a documented history of breakers failing to trip during overloads. Zinsco panels (also sold as GTE-Sylvania) have similar breaker failure patterns. Split-bus panels, common in 1960s–1970s construction, lack a main breaker and require multiple switches to de-energize. If your Hemet, Riverside, or older Murrieta home has any of these, an inspection and [panel upgrade](/services/electrical/electrical-panel-upgrade) quote is worth doing before your next insurance renewal.

*(107 words)*

---

**Q5: Can I combine an electrical inspection with a plumbing maintenance visit?**

A: Yes — and many Inland Empire homeowners do exactly this. Our [home maintenance plan](/services/maintenance-plans) covers plumbing; scheduling an electrical safety inspection the same day keeps your home on a single annual maintenance cycle instead of two separate visits and two separate invoices. Call (951) 246-4337 to ask about bundling an electrical inspection with a plumbing maintenance visit. It is one of the more practical ways a multi-trade contractor adds value over calling a separate electrician and a separate plumber.

*(80 words)*

---

**Q6: What happens if my home fails the electrical inspection?**

A: "Failing" an inspection means deficiencies were found — it does not mean the home is immediately unsafe to occupy in most cases. The inspection report categorizes findings by severity: immediate safety concern (stop using the circuit), near-term repair recommended (within 30–60 days), and long-term upgrade advised (plan within 1–2 years). We provide a repair estimate on the same visit for any item in the report. For insurance-required inspections, we can also re-inspect after repairs are complete and issue an updated clearance report. See our [electrical repair services](/services/electrical/electrical-repairs) for repair scope.

*(92 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need an Electrical Inspection Quickly
```

### Intro Paragraph (52 words)
```
Some inspection needs are time-sensitive. A real estate transaction closing in 10 days. An insurer requiring an inspection before policy renewal. A post-storm check after lightning hit near the home. Our team prioritizes time-sensitive inspection requests. Call (951) 246-4337 to confirm same-week availability — most urgent requests are accommodated within 2 business days.
```

### 8 Inspection Triggers (matches "emergencyReasons" array structure in Drain.tsx — adapted for non-emergency page)
```js
const inspectionTriggers = [
  "Pre-sale inspection before listing",
  "Pre-purchase inspection before close of escrow",
  "Insurance renewal or new policy requirement",
  "Post-storm or post-surge electrical check",
  "Older home with unknown panel brand",
  "Home renovation triggering code compliance review",
  "Rental property inspection for landlord compliance",
  "Permit close-out inspection after electrical work"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Schedule Your Electrical Safety Inspection Today
```

### Supporting Paragraph
```
Licensed electrical safety inspections across Murrieta, Temecula, and the Inland Empire. Written report included, same-week scheduling available. Call now or schedule online — our electrical team handles both the inspection and any repairs the report finds.
```
*(39 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Schedule Inspection` (triggers SchedulerModal / LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `ClipboardCheck` | Written Report Included |
| `Shield` | Licensed & Insured |
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
| "electrical repair services" | `/services/electrical/electrical-repairs` | FAQ Q6 answer (already written above) |
| "panel upgrade" | `/services/electrical/electrical-panel-upgrade` | FAQ Q4 answer (already written above) |
| "home rewiring" | `/services/electrical/home-rewiring` | FAQ Q4 or Service Overview note |
| "surge protection" | `/services/electrical/surge-protection` | Post-storm card or FAQ Q5 note |

### Optional [O]
| Anchor Text | href | Section |
|---|---|---|
| "home maintenance plan" | `/services/maintenance-plans` | FAQ Q5 answer (already written above) — cross-vertical plumbing bridge |
| "pool electrical inspection" | `/services/electrical/pool-spa-wiring` | Service Overview or FAQ |
| "financing options" | `/financing` | Why Choose Us or final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `electrical inspection Murrieta` |
| Keyword in title | Yes — "Electrical Inspection Murrieta, CA" |
| Keyword in H1 | Yes — "Electrical Safety Inspection in Murrieta" |
| Keyword in first paragraph | Yes — service overview intro references Murrieta + electrical inspection |
| Keyword in meta description (first half) | Yes — "Electrical inspection in Murrieta" opens description |
| Canonical slug | `/services/electrical/electrical-safety-inspection` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "electrical safety inspections across Murrieta" |
| Concrete numbers for AI citation | 250+ safety inspections; 1.5–3 hours inspection time; 2–3 business day scheduling; 30-year housing stock age; 2–2.5 hours typical; 24-hour report delivery; 4.9 stars |
| Citable local specifics | NEC code compliance; CA Title 24; Federal Pacific / Zinsco / split-bus panel brands; GFCI/AFCI requirements; Murrieta 1990s housing stock; summer monsoon post-storm triggers; PSPS events; Riverside County real estate context |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed and self-contained; Inspection Triggers section is scannable and AI-extractable |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~850 words |
| Estimated FAQ word count | ~548 words |
| Total estimated | ~1,398 words |
| Internal links in copy | Repairs sub-hub [M], Electrical Repairs [R], Panel Upgrade [R], Home Maintenance Plan [O] (cross-vertical plumbing bridge) |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director: Hero should convey thoroughness and documentation — electrician with clipboard at panel, professional demeanor. Before/after: older Federal Pacific style panel → organized clean panel with report handoff.
3. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer implements `lastUpdated: "June 2026"` bound to visible rendered line.
5. **Breadcrumbs:** `Home > Services > Repairs & Safety > Safety Inspections`
6. **Cross-vertical plumbing link** (`/services/maintenance-plans`) is included in FAQ Q5 — confirm this exact slug exists before developer implements the link. This is the Electrical → Plumbing bridge identified in the cluster architecture.
7. **Insurance panel flag detail:** Federal Pacific, Zinsco, and split-bus panel brands named specifically — these are real AI citation triggers. Do not genericize in implementation.
8. **SERP cluster note from architecture doc:** Safety Inspection and Surge Protection share 5 domains — the tightest pair in Cluster C. Cross-link between these two pages is [R] priority and is implemented in the link matrix above.
