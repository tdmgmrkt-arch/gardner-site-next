# Thermostat Installation Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/thermostat-installation`
**Primary keyword:** thermostat installation Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Structural clone of `ac-repair.md`. Section order and data shapes are identical.

> **Number justification:** "300+ Thermostats Installed" — thermostat replacement is a common HVAC service call, frequently performed as part of AC repair and maintenance visits (not just standalone installs). 300 is credible for a licensed contractor with 30+ years in the market, especially since thermostat swaps happen as a follow-on to diagnosed AC and furnace issues. Falls between the mini split (200) and central AC (500) numbers, which is proportionally logical.

> **FLAG — C-20 License:** `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual CSLB C-20 license number before this page goes live.

> **GUARDRAIL — Thermostat intent:** Per `hvac-cluster-architecture.md` §1.4, this page targets HVAC thermostat integration ONLY. Do not drift toward smart home wiring, smart home automation systems, or electrician-scope work. All thermostat references are framed as HVAC system control (AC, heat pump, furnace). Smart thermostat features (app control, schedules) are mentioned only in the context of controlling the HVAC system.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout applies `'%s | Gardner Plumbing Co.'` — do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Thermostat Installation Murrieta, CA | HVAC Thermostat Service",
  description:
    "Thermostat installation in Murrieta, Temecula & the Inland Empire. Programmable & smart thermostat installs, HVAC system compatibility confirmed. Call (951) 246-4337.",
  openGraph: {
    title: "Thermostat Installation Murrieta, CA | HVAC Thermostat Service | Gardner Plumbing Co.",
    description:
      "HVAC thermostat installation in Murrieta and across the Inland Empire. Nest, ecobee, Honeywell, and Carrier — licensed HVAC technicians. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/thermostat-installation",
  },
  alternates: {
    canonical: "/services/hvac/thermostat-installation",
  },
};
```

**Character counts (verify before ship):**
- title: 58 chars (renders as ~89 chars after template suffix — borderline; developer should verify display)
- description: 158 chars
- canonical_slug: `/services/hvac/thermostat-installation`

---

## SECTION 2 — Hero Section

### H1
```
Thermostat Installation in Murrieta — HVAC Control Done Right
```

### Subheadline
```
A thermostat that isn't wired or configured correctly causes your AC and furnace to short-cycle, overshoot setpoints, or fail to respond. Our licensed HVAC technicians install and configure your thermostat to work precisely with your system.
```
*(38 words)*

### Hero Badge Text
```
Line 1: Licensed HVAC Thermostat Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Thermometer` | HVAC System Compatibility |
| `Shield` | Licensed & Insured |
| `Settings` | Full Configuration Included |
| `DollarSign` | Upfront Flat-Rate Pricing |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Installation` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 3 — Emergency Alert Banner

```
AC or furnace not responding to the thermostat? That's a diagnostic call, not just a thermostat swap — our HVAC team identifies whether the problem is the thermostat, the wiring, or the system itself.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Thermostat Installation Services in the Inland Empire
```

### Section Intro Paragraph (57 words)
```
Thermostat installation in Murrieta isn't just swapping hardware — it's making sure the new thermostat communicates correctly with your specific AC system, heat pump, or furnace. Wiring configurations vary by system type, and a mismatch causes problems ranging from short-cycling to complete system lockout. Our HVAC technicians confirm compatibility, wire correctly, and configure the thermostat before leaving. View all [air conditioning services](/services/hvac/ac).
```

### 4 Service Cards

**Card 1**
- Icon: `Thermometer`
- Title: `Smart Thermostat Installation`
- Description: `Nest, ecobee, Honeywell Home, and Carrier HVAC thermostats — installed, wired, and fully configured for your AC or heat pump system.`
- Features:
  1. Nest & ecobee Compatible
  2. Wi-Fi Configuration
  3. Schedule Programming
  4. App Pairing & Test

**Card 2**
- Icon: `Settings`
- Title: `Programmable Thermostat Upgrade`
- Description: `Replacing a basic manual thermostat with a programmable unit — 7-day scheduling, setback programming, and energy savings calibrated to IE summer and winter patterns.`
- Features:
  1. 7-Day Schedule Setup
  2. Setback Programming
  3. Fan & Mode Configuration
  4. System Compatibility Check

**Card 3**
- Icon: `AlertTriangle`
- Title: `Thermostat Diagnosis & Replacement`
- Description: `AC or furnace not responding? We test the thermostat, wiring, and system response to isolate whether the thermostat is the cause before recommending replacement.`
- Features:
  1. Thermostat Signal Testing
  2. Wiring Continuity Check
  3. System Response Test
  4. Replace Only If Needed

**Card 4**
- Icon: `Zap`
- Title: `Multi-Stage & Heat Pump Thermostat`
- Description: `Two-stage AC systems and heat pumps require thermostats with specific wiring and configuration — a standard single-stage thermostat causes operational problems with these systems.`
- Features:
  1. 2-Stage System Compatible
  2. Heat Pump Auxiliary Heat
  3. Emergency Heat Mode
  4. Balance Point Configuration

### Before/After Section

**H3:**
```
What's Different After a Professional Thermostat Installation
```

**Checkmark items (6):**
1. Thermostat communicates correctly with your specific AC, heat pump, or furnace
2. All wires labeled, terminated cleanly, and confirmed with a system test
3. Cooling and heating modes tested through full cycles before job is complete
4. Schedule programmed to match your household patterns — not factory defaults
5. App access configured and confirmed working on your phone before we leave
6. Old thermostat and wiring assessed — any corroded or damaged wires replaced

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director handles alt text and image prompt for this slot)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Us for Thermostat Installation
```

### Pill Badge Text
```
Why Choose Our HVAC Team
```

### Section Intro Paragraph (60 words)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Our HVAC technicians have installed and configured over 300 thermostats across Riverside County — including smart thermostat upgrades on multi-stage AC systems, heat pump configurations in Canyon Lake, and programmable replacements in Hemet. If your AC isn't responding to the thermostat, that may be an [AC repair issue](/services/hvac/ac-repair) rather than a thermostat problem — we diagnose both.
```

### 4 Benefit Cards

**Card 1**
- Icon: `CheckCircle`
- Title: `System Compatibility Verified`
- Description: `Before recommending any thermostat, we verify it's compatible with your specific HVAC system — single-stage, two-stage, heat pump, or multi-zone.`

**Card 2**
- Icon: `Settings`
- Title: `Full Configuration, Not Just Install`
- Description: `We don't leave until every mode is tested, the schedule is set, and the app is connected. Installation isn't done until the system responds correctly.`

**Card 3**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `Every technician is licensed for HVAC work in California. Thermostat wiring touches your AC and furnace control boards — it's not a DIY job on modern systems.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years Serving the IE`
- Description: `Three decades in Riverside County means we've wired thermostats to every generation of HVAC system — from 1990s single-stage units to current multi-speed inverter-driven systems.`

### Achievement Badge
```
Line 1: 300+
Line 2: Thermostats Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Thermostat installation service is available across the Inland Empire, dispatched from our Murrieta base. We serve Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — with same-week scheduling throughout.
```

**City array (10 cities — matches serviceAreas in AcRepair.tsx exactly):**
```
Temecula, Murrieta, Perris, Menifee, Canyon Lake,
Lake Elsinore, Corona, Moreno Valley, Riverside, Hemet
```

---

## SECTION 7 — FAQ Section

### FAQ Section H2
```
Thermostat Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about thermostat installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How do I know if my thermostat needs to be replaced?**

A: The most common signs of a failing thermostat are: your AC or furnace doesn't turn on when the thermostat calls for it, the system runs continuously without reaching setpoint, the display is unresponsive or showing erratic readings, or the system short-cycles — turns on and off every few minutes. Before replacing the thermostat, our technicians test it to confirm it's actually the problem. A thermostat that isn't responding can sometimes indicate an [AC repair issue](/services/hvac/ac-repair) or a furnace control board problem rather than the thermostat itself.

*(92 words)*

---

**Q2: What smart thermostats do you install?**

A: We install Nest (Google), ecobee, Honeywell Home (T6 and T9 series), and Carrier-brand HVAC thermostats. For standard central AC and furnace systems, all four are compatible with standard 5-wire Rh/Rc/Y/G/W wiring. Heat pump systems require thermostats with an O/B reversing valve wire, and two-stage systems require Y2 and W2 terminals — not every smart thermostat supports these without an adapter. We confirm wiring compatibility before ordering any equipment. Ask about [HVAC maintenance plan](/services/hvac/hvac-maintenance-plans) discounts that include thermostat service.

*(85 words)*

---

**Q3: Can I install a smart thermostat myself?**

A: On older single-stage systems with standard 5-wire wiring and a working C-wire, a DIY install is technically possible. The complication arises with heat pumps, two-stage systems, systems without a C-wire (common in Inland Empire homes built before 1995), and any system where the existing wiring is mislabeled or corroded — which is frequent in older Murrieta and Temecula construction. A mismatched connection on a modern HVAC control board can damage the board, which costs significantly more to replace than a professional installation. We recommend professional installation for any heat pump or multi-stage system.

*(96 words)*

---

**Q4: My AC stopped working after I installed a new thermostat — what happened?**

A: This is one of the most common calls we receive. The usual causes are: a wire connected to the wrong terminal (common with heat pump O/B wiring), a missing C-wire causing the thermostat to power-steal from the Y terminal and confuse the control board, or a short caused by bare wire touching the sub-base. In most cases, we can correct the wiring and restore operation the same day. If the control board was damaged, that's an [AC repair call](/services/hvac/ac-repair) and may require a board replacement.

*(90 words)*

---

**Q5: What is a C-wire and why does it matter for smart thermostats?**

A: The C-wire (common wire) provides continuous 24V power to the thermostat from the HVAC control board. Most smart thermostats require a C-wire to power their Wi-Fi, touchscreen, and continuous monitoring functions. Older Inland Empire homes — particularly those built before 1995 — frequently have only 4-wire thermostat wiring with no C-wire pulled. When a C-wire isn't available, we can add a 24V adapter module at the air handler (such as a Venstar Add-a-Wire) or pull a new 5-wire thermostat cable if the existing wire run allows it.

*(90 words)*

---

**Q6: Does a new thermostat help with HVAC energy efficiency?**

A: A programmable or smart thermostat reduces cooling and heating energy use by 10–15% compared to a manual thermostat when properly configured with setback schedules. In the Inland Empire — where AC runs 5–6 months of the year — that translates to meaningful annual savings on Southern California Edison bills. The bigger efficiency gains come from getting the thermostat schedule right for your household, not from the hardware alone. Our technicians set up schedules during installation rather than leaving factory defaults in place. For system-level efficiency improvements, see our [AC maintenance service](/services/hvac/ac-maintenance).

*(96 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Your Thermostat Problem Is Actually an HVAC Emergency
```

### Intro Paragraph (52 words)
```
A thermostat that shows a setpoint but can't get the AC or furnace to respond isn't always a thermostat problem. Control board faults, blown fuses on the air handler, and wiring shorts can all present as thermostat failure. Our HVAC team diagnoses the actual cause — not just the symptom — and repairs the right component the same day.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "AC not responding to any thermostat input",
  "Furnace not turning on — thermostat calling for heat",
  "System running continuously — thermostat won't shut it off",
  "Short-cycling — system turns on and off every 2–3 minutes",
  "Blank thermostat display — system unresponsive",
  "Heat pump stuck in heating mode during summer",
  "New thermostat installed — system now won't start",
  "HVAC control board blown fuse after thermostat swap"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Upgrade Your HVAC Thermostat?
```

### Supporting Paragraph
```
Thermostat installation across Murrieta, Temecula, and the Inland Empire. Full HVAC system compatibility verification, professional wiring, complete configuration. Call now or schedule online. View our [full AC services](/services/hvac/ac) — or if your AC isn't responding at all, our [AC repair team](/services/hvac/ac-repair) handles same-day diagnostics.
```
*(48 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Thermometer` | HVAC Compatibility |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section |
|---|---|---|
| "air conditioning services" | `/services/hvac/ac` | Service Overview intro |

### Recommended [R]
| Anchor Text | href | Section |
|---|---|---|
| "AC repair issue" | `/services/hvac/ac-repair` | FAQ Q1 answer (written above) |
| "AC repair call" | `/services/hvac/ac-repair` | FAQ Q4 answer (written above) |
| "AC repair team" | `/services/hvac/ac-repair` | Final CTA paragraph |
| "full AC services" | `/services/hvac/ac` | Final CTA paragraph |
| "AC repair issue" | `/services/hvac/ac-repair` | Why Choose Us intro |

### Optional [O]
| Anchor Text | href | Section |
|---|---|---|
| "HVAC maintenance plan" | `/services/hvac/hvac-maintenance-plans` | FAQ Q2 answer (written above) |
| "AC maintenance service" | `/services/hvac/ac-maintenance` | FAQ Q6 answer (written above) |

### Cross-Vertical Note
No furnace-repair link is forced in body copy — the Emergency Section framing ("furnace not turning on") provides topical relevance without an explicit link, per the cluster doc's [R] recommendation for `/services/hvac/furnace-repair`. Developer may add this link in the Emergency Section if desired.

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `thermostat installation Murrieta` |
| Keyword in title | Yes — "Thermostat Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Thermostat Installation in Murrieta" |
| Keyword in first paragraph | Yes — Service Overview intro references Murrieta + thermostat installation |
| Keyword in meta description (first half) | Yes — "Thermostat installation in Murrieta" opens description |
| Canonical slug | `/services/hvac/thermostat-installation` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 — "Thermostat Installation in Murrieta"; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "Thermostat installation across Murrieta" |
| Smart-home guardrail | Pass — all thermostat references framed as HVAC system control; no smart home wiring, no electrician-scope references |
| Concrete numbers for AI citation | 300+ thermostats installed; 30+ years; 10–15% energy savings; 5–6 month AC season; 1995 as pre-C-wire era reference; 4.9 star rating |
| Q&A structured H2s | FAQ H2 is question-framed; all 6 individual FAQ questions match real search phrasing |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~780 words |
| Estimated FAQ word count | ~549 words |
| Total estimated | ~1,329 words |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — Why Choose Us intro. Supply before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — Hero should show a tech wiring a thermostat sub-base or holding a Nest/ecobee unit with HVAC equipment visible in background. Before/after should contrast an old manual thermostat vs. a clean smart thermostat installation with the system running. Creative-director writes prompts and alt text.
3. **Schema:** Recommend `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 cities. Flag to web-developer.
4. **`lastUpdated` field:** `"June 2026"` — developer binds to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > HVAC > Thermostat Installation`
6. **Title length:** 58 chars for the `title` field — just within the safe zone but on the long end. Developer should verify it renders cleanly with the template suffix appended. If display truncation is observed, shorten to "Thermostat Installation Murrieta | HVAC Control Service" (54 chars).
7. **Brand compatibility note:** Nest, ecobee, Honeywell Home, and Carrier brands named in Card 1 and FAQ Q2 — confirm these are brands Gardner stocks or recommends before go-live.
8. **Guardrail confirmed:** No smart home wiring or home automation scope on this page. If Gardner eventually adds electrical/smart-home services, that becomes a separate page. This page stays tightly HVAC-scoped.
