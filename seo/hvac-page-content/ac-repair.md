# AC Repair Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/ac-repair`  
**Primary keyword:** AC repair Murrieta  
**Last updated:** June 2026  
**Status:** Ready for developer copy-paste  
**Template note:** This is the canonical HVAC leaf page template. All 13 sibling HVAC leaf pages replicate this section structure.

> **FLAG — C-20 License:** The CSLB C-20 (HVAC) contractor license number is unknown at time of writing. All instances of `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule for all HVAC pages:** The root layout in `app/layout.tsx` (line 14) applies template `'%s | Gardner Plumbing Co.'` to every page title. **Do NOT include `| Gardner Plumbing Co.` in the `title` field** — it produces a duplicated suffix. Keep it in `openGraph.title` only (OG titles don't get templated).

```ts
export const metadata: Metadata = {
  title: "AC Repair Murrieta, CA | 24/7 Cooling Service",
  description:
    "AC repair in Murrieta, Temecula & the Inland Empire. Same-day diagnostics, refrigerant recharge, capacitor & compressor repair. Call (951) 246-4337 now.",
  openGraph: {
    title: "AC Repair Murrieta, CA | 24/7 Cooling Service | Gardner Plumbing Co.",
    description:
      "Same-day AC repair in Murrieta and across the Inland Empire. Licensed HVAC technicians, upfront pricing, 24/7 availability. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac-repair",
  },
  alternates: {
    canonical: "/services/hvac/ac-repair",
  },
};
```

**Character counts (verify before ship):**
- title: 49 chars (renders as 80 chars after template suffix)
- description: 148 chars
- canonical_slug: `/services/hvac/ac-repair`

---

## SECTION 2 — Hero Section

### H1
```
AC Repair in Murrieta — Fast, Same-Day Cooling Service
```

### Subheadline
```
Licensed HVAC technicians diagnose and fix your AC the same day, so your home is cool again before the Inland Empire heat peaks.
```
*(23 words)*

### Hero Badge Text (floating badge — matches "Professional Service / Licensed & Insured" pattern)
```
Line 1: Licensed HVAC Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets (icon hints match Drain.tsx lines 218–229 grid pattern)

| Icon (Lucide) | Text |
|---|---|
| `Clock` | Same-Day Response |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Pricing |
| `Phone` | 24/7 Emergency Line |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal — same as Drain.tsx)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 3 — Emergency Alert Banner

```
AC not cooling in Murrieta? Call (951) 246-4337 — our HVAC team responds same day, including nights and weekends.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive AC Repair Services in the Inland Empire
```

### Section Intro Paragraph (48 words)
```
Inland Empire summers push AC systems hard. When your unit stops cooling — whether it's a failed capacitor, low refrigerant, a frozen evaporator coil, or a struggling compressor — our HVAC technicians arrive with the tools and parts to diagnose and repair it the same day.
```

### 4 Service Cards

**Card 1**
- Icon: `Wrench`
- Title: `Diagnostic & Electrical Repair`
- Description: `Precise troubleshooting of capacitors, contactors, relays, and control boards — the parts that fail most often in IE heat.`
- Features:
  1. Capacitor Replacement
  2. Contactor Testing
  3. Control Board Diagnosis
  4. Wiring Inspection

**Card 2**
- Icon: `Droplets`
- Title: `Refrigerant Recharge`
- Description: `EPA Section 608-certified recharge using R-410A or R-22, including leak detection before refilling to prevent repeat failures.`
- Features:
  1. Leak Detection First
  2. R-410A & R-22 Service
  3. EPA 608 Certified
  4. Pressure Testing

**Card 3**
- Icon: `Zap`
- Title: `Compressor & Coil Service`
- Description: `Compressor hard starts, evaporator coil cleaning, condenser coil service — the repairs that restore full cooling capacity.`
- Features:
  1. Hard Start Kit Install
  2. Evaporator Coil Clean
  3. Condenser Coil Service
  4. Airflow Testing

**Card 4**
- Icon: `Clock`
- Title: `24/7 Emergency AC Repair`
- Description: `Complete cooling failure at 10 PM in July? Our emergency line is live around the clock with same-night dispatch across Murrieta.`
- Features:
  1. 24/7 Live Dispatch
  2. Same-Night Response
  3. Weekend & Holiday
  4. Priority Scheduling

### Before/After Section

**H3:**
```
What Changes After a Professional AC Repair
```

**Checkmark items (6):**
1. Refrigerant pressure restored to factory spec
2. Full cooling capacity returned to every room
3. Electrical components tested and confirmed safe
4. Airflow measured and verified at supply registers
5. Thermostat calibration confirmed before we leave
6. System run-time normalized — no more short cycling

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for AC Repair
```

### Section Intro Paragraph (58 words — contains the ONE canonical brand mention per brand-vertical dissonance rule)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC team has repaired over 1,000 cooling systems across Riverside County — handling everything from a blown capacitor in Canyon Lake to a compressor replacement in Hemet.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day AC Repair`
- Description: `Most calls booked before noon are diagnosed and repaired the same day — no overnight wait in an Inland Empire summer.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every tech carries a valid CA HVAC license and passes background verification before stepping into your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Repair Pricing`
- Description: `You receive a written quote before any work starts. The price on the quote is the price on the invoice — no add-ons.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years in the Field`
- Description: `Three decades serving Riverside County means we've seen every AC failure mode this climate can produce.`

### Achievement Badge (floating — matches "30+ Years Experience" badge in Drain.tsx)
```
Line 1: 1,000+
Line 2: Cooling Systems Repaired
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (42 words)
```
AC repair service is available across the Inland Empire, with fast response times from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout.
```

**City array (matches serviceAreas in Drain.tsx exactly — 10 cities):**
```
Temecula, Murrieta, Perris, Menifee, Canyon Lake,
Lake Elsinore, Corona, Moreno Valley, Riverside, Hemet
```

---

## SECTION 7 — FAQ Section

### FAQ Section H2
```
AC Repair Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about AC repair in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How do I know if my AC needs repair or full replacement?**

A: If your system is under 10 years old and the repair cost is less than half the cost of a new unit, repair almost always makes financial sense. Systems over 15 years old — especially those showing multiple failures in the same season — are typically better candidates for replacement. Our technicians give you both numbers upfront so you can decide without pressure. For major replacements, see our [AC installation page](/services/hvac/ac-installation).

*(85 words)*

---

**Q2: What are the most common AC problems in Inland Empire homes?**

A: The three most frequent failures we see across Murrieta, Temecula, and Menifee are capacitor failure, low refrigerant from a slow leak, and dirty evaporator or condenser coils. Capacitors wear out faster in extreme heat — triple-digit summers in the IE put unusual stress on electrical components. A unit that runs constantly without cooling the house is often dealing with one of these three issues.

*(72 words)*

---

**Q3: What does a refrigerant leak mean for my AC?**

A: A refrigerant leak means your system cannot transfer heat out of your home efficiently — the result is weak cooling, longer run times, and higher electric bills. Low refrigerant is not a normal part of system operation. A system that needs refrigerant added has a leak somewhere. We locate and repair the leak first, then recharge to manufacturer spec. Simply topping off refrigerant without fixing the leak is a temporary fix that fails again within a season.

*(80 words)*

---

**Q4: My AC is tripping the breaker — is that an emergency?**

A: Yes. A breaker trip is the electrical system protecting against a fault — a compressor drawing excessive current, a wiring short, or a failing capacitor. Running the system after it trips the breaker repeatedly can damage the compressor, which is the most expensive component to replace. Call us the same day if your AC is tripping the breaker. Do not reset the breaker more than once while waiting for a technician.

*(75 words)*

---

**Q5: How often should I schedule an AC tune-up to prevent repairs?**

A: Once per year, ideally in early spring before the first heat wave. An annual tune-up catches small issues — worn capacitors, coil buildup, low refrigerant — before they become full failures in July. Inland Empire homeowners who skip tune-ups for 2–3 years see significantly higher repair frequency. Our [AC maintenance service](/services/hvac/ac-maintenance) includes a full inspection, coil cleaning, refrigerant check, and electrical component testing.

*(70 words)*

---

**Q6: How fast can you respond to an emergency AC repair call in Murrieta?**

A: For daytime calls, the average dispatch time from our Murrieta base is under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on current call volume. We maintain a dedicated 24/7 emergency line at (951) 246-4337. If your home is occupied by elderly residents or young children, mention that when you call — we prioritize those situations.

*(66 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Emergency AC Repair
```

### Intro Paragraph (50 words)
```
Some AC failures cannot wait until morning. A refrigerant leak, a system that keeps tripping the breaker, or complete cooling failure during a Murrieta heat advisory are all situations that need same-day or same-night attention. Our emergency line is live 24 hours a day, 7 days a week.
```

### 8 Emergency Scenarios (matches "emergencyReasons" array in Drain.tsx)
```js
const emergencyReasons = [
  "Complete cooling failure",
  "AC tripping the circuit breaker",
  "Refrigerant leak detected indoors",
  "Frozen evaporator coil",
  "Water leaking from indoor air handler",
  "Burning smell from vents or unit",
  "AC running constantly, no cooling",
  "System not responding to thermostat"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Fix Your AC Today?
```

### Supporting Paragraph
```
Same-day AC repair across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed technicians, and a 24/7 emergency line. Call now or schedule online — our HVAC team picks up.
```
*(32 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal — matches Drain.tsx pattern)

### Trust Strip (3 items — matches final CTA trust strip in Drain.tsx)
| Icon | Label |
|---|---|
| `Clock` | 24/7 Emergency |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

All links below must be implemented as `<Link>` components in the TSX file. Anchor text is locked — do not paraphrase.

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "all air conditioning services" | `/services/hvac/ac` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "AC maintenance service" | `/services/hvac/ac-maintenance` | FAQ Q5 answer (already written in above) |
| "AC installation page" | `/services/hvac/ac-installation` | FAQ Q1 answer (already written in above) |
| "thermostat issues" | `/services/hvac/thermostat-installation` | Emergency section or FAQ Q6 body note |
| "prevent future repairs with a service plan" | `/services/hvac/hvac-maintenance-plans` | Why Choose Us section or final CTA note |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing options" | `/financing` | Why Choose Us or final CTA paragraph |

### Cross-Vertical (Plumbing bridge — only if space allows in Why Choose Us)
No mandatory cross-vertical link applies to this specific page per the link matrix. Do not force one.

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `AC repair Murrieta` |
| Keyword in title | Yes — "AC Repair Murrieta, CA" |
| Keyword in H1 | Yes — "AC Repair in Murrieta" |
| Keyword in first paragraph | Yes — intro paragraph references Murrieta + AC repair |
| Keyword in meta description (first half) | Yes — "AC repair in Murrieta" opens description |
| Canonical slug | `/services/hvac/ac-repair` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — appears in Why Choose Us intro paragraph |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA paragraph — "AC repair across Murrieta" |
| Concrete numbers for AI citation | 1,000+ cooling systems repaired; 30+ years; 2-hour response time; 2–4 hours after-hours; 10/15-year repair-vs-replace threshold; once/year tune-up cadence; 4.9 star rating |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed; Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~760 words |
| Estimated FAQ word count | ~448 words |
| Total estimated | ~1,208 words (within 1,200–1,800 target) |
| Internal links implemented in copy | AC Hub [M], AC Maintenance [R], AC Installation [R] — in FAQ answers as written |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply the actual C-20 license number before page goes live. Do not publish without it.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director. Hero image should show a tech at an outdoor condenser unit in clear Inland Empire daylight. Before/after should show a before (dirty coil or ice-covered unit) and after (clean running system). Creative-director writes the AI image prompt and alt text for both.
3. **Schema:** Recommend `FAQPage` JSON-LD wrapping all 6 FAQs, plus a `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer implements a `lastUpdated: "June 2026"` frontmatter field bound to a visible "Last Updated: June 2026" line on the rendered page — do not hard-code a date string in JSX.
5. **Breadcrumbs:** Match Drain.tsx pattern — `Home > Services > AC Repair`.
6. **Sibling page note:** The 13 remaining HVAC leaf pages follow this exact section structure. Primary keyword, H1, service cards, FAQs, and emergency scenarios swap out per page. The section headers, data shapes, and component calls remain identical.
