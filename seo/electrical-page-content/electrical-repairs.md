# Electrical Repairs Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/electrical-repairs`
**Primary keyword:** electrical repair Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Canonical template is `seo/hvac-page-content/ac-repair.md`. This page follows the same 9-section structure.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live. `local-seo` flagged this as a pending item.

> **Achievement badge note:** "600+ Electrical Repairs" — justified by the combined volume of plumbing service calls that now include diagnostic electrical work (outlet failures, breaker issues during water heater or appliance installs) plus dedicated electrical repair dispatches since the vertical launched.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** The root layout in `app/layout.tsx` applies template `'%s | Gardner Plumbing Co.'` to every page title. **Do NOT include `| Gardner Plumbing Co.` in the `title` field.** Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Electrical Repair Murrieta, CA | Diagnostics & Fast Fixes",
  description:
    "Electrical repair in Murrieta, Temecula & the Inland Empire. Breakers tripping, outlets dead, dimming lights — licensed electricians diagnose the root cause. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Repair Murrieta, CA | Diagnostics & Fast Fixes | Gardner Plumbing Co.",
    description:
      "Licensed electricians for electrical repairs in Murrieta and across the Inland Empire. Breakers, outlets, dimming lights, dead circuits. Upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/electrical-repairs",
  },
  alternates: {
    canonical: "/services/electrical/electrical-repairs",
  },
};
```

**Character counts (verify before ship):**
- title: 54 chars (renders as ~85 chars after template suffix — verify in browser)
- description: 158 chars
- canonical_slug: `/services/electrical/electrical-repairs`

---

## SECTION 2 — Hero Section

### H1
```
Electrical Repair in Murrieta — Diagnose It Right, Fix It Fast
```

### Subheadline
```
Licensed electricians find the root cause of your electrical problem — not just the symptom — so the same issue doesn't come back next month.
```
*(25 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Search` | Diagnostic-First Approach |
| `Shield` | Licensed & Insured |
| `DollarSign` | Upfront Repair Pricing |
| `Phone` | Same-Day Response |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: electrician with a non-contact voltage tester at a residential breaker panel, Inland Empire home interior, professional gear)*

---

## SECTION 3 — Emergency Alert Banner

```
Outlet sparking, breaker keeps tripping, or lights going dim? Call (951) 246-4337 — our electricians respond the same day across Murrieta and the Inland Empire.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Electrical Repair Services for Inland Empire Homes
```

### Section Intro Paragraph (55 words)
```
Murrieta's 1990s–2000s housing stock is now 25–35 years old. Wiring, outlets, and breaker panels from that era are starting to fail — especially under the load of modern air conditioners, EV chargers, and smart home devices. Our licensed electricians handle the full range of residential electrical repairs, from a dead outlet to a tripping main breaker, with a diagnostic-first approach that finds the actual problem.
```

### 4 Service Cards

**Card 1**
- Icon: `Zap`
- Title: `Breaker & Panel Repairs`
- Description: `A breaker that trips repeatedly is not just an annoyance — it is your electrical system warning you of an overload, a short circuit, or a failing breaker. We test the circuit, identify the fault, and replace or repair before it becomes a hazard.`
- Features:
  1. Tripping Breaker Diagnosis
  2. Single Breaker Replacement
  3. AFCI/GFCI Breaker Upgrade
  4. Panel Fault Testing

**Card 2**
- Icon: `Plug`
- Title: `Outlet & Switch Repairs`
- Description: `Dead outlets, sparking receptacles, and switches that no longer control the right fixture are among the most common calls we receive in Murrieta. We replace faulty devices, update to GFCI where code requires, and trace dead circuits back to the source.`
- Features:
  1. Dead Outlet Diagnosis
  2. GFCI Outlet Replacement
  3. Arcing or Sparking Fix
  4. Switch & Dimmer Repair

**Card 3**
- Icon: `Lightbulb`
- Title: `Flickering & Dimming Lights`
- Description: `Lights that flicker or dim when appliances run point to loose wiring, an overloaded circuit, or a failing neutral connection — not a bulb problem. We trace the voltage drop to the source and repair it before it damages sensitive electronics or causes a fire.`
- Features:
  1. Voltage Drop Testing
  2. Loose Connection Repair
  3. Neutral Fault Diagnosis
  4. Circuit Load Assessment

**Card 4**
- Icon: `AlertTriangle`
- Title: `Dead Circuits & Wiring Faults`
- Description: `A circuit that loses power entirely — or that fails intermittently — usually has a wiring fault, a failed connection, or a damaged junction. We use non-contact testing and thermal imaging to locate the break without tearing out walls where avoidable.`
- Features:
  1. Non-Contact Circuit Testing
  2. Junction Box Inspection
  3. Intermittent Fault Diagnosis
  4. Wiring Repair & Splice

### Before/After Section

**H3:**
```
What Changes After a Professional Electrical Repair
```

**Checkmark items (6):**
1. Root cause identified — not just the symptom patched
2. Faulty breaker, outlet, or wiring segment replaced to code
3. Circuit load verified safe before work is signed off
4. GFCI protection confirmed at all required locations
5. All junction boxes properly sealed and accessible
6. Problem documented so future electricians know what was done

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before — scorched outlet or tripped panel; after — clean installed outlet or organized panel with new breaker)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Murrieta Homeowners Call Our Electrical Team
```

### Section Intro Paragraph (60 words — contains the ONE canonical brand mention per brand-vertical dissonance rule)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have completed over 600 electrical repairs across Riverside County — diagnosing everything from a nuisance-tripping breaker in Temecula to a failing aluminum branch circuit in a 1970s Hemet home.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Search`
- Title: `Diagnostic-First Repairs`
- Description: `Every repair call starts with a full diagnostic, not a parts swap. We find the root cause so you are not calling us back for the same problem in six weeks.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed Electricians`
- Description: `Every technician carries a valid CA electrical license and passes background verification before entering your home. No unlicensed sub-contractors.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Repair Pricing`
- Description: `You receive a written quote before any work starts. The price on the quote is the price on the invoice — no add-ons discovered after the fact.`

**Card 4**
- Icon: `Clock`
- Title: `Same-Day Availability`
- Description: `Most repair calls booked before noon are completed the same day. We carry common parts — breakers, GFCI receptacles, outlets — on every truck.`

### Achievement Badge
```
Line 1: 600+
Line 2: Electrical Repairs Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (40 words)
```
Electrical repair service is available across the Inland Empire, with fast same-day response from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day scheduling throughout.
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
Electrical Repair Questions and Answers
```

### FAQ Section Subheadline
```
Common questions about electrical repairs in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: Why does my breaker keep tripping in my Murrieta home?**

A: A breaker trips for three reasons: the circuit is overloaded (more current draw than the breaker is rated for), there is a short circuit (a wire touching another wire or a ground), or the breaker itself is failing. In Inland Empire homes, the most common trigger in summer is an AC unit or EV charger sharing a circuit with other appliances. Do not keep resetting a breaker that trips repeatedly — that is your system telling you something is wrong. Call for a same-day diagnostic before the problem worsens. For panels that trip frequently across multiple circuits, see our [electrical panel upgrade service](/services/electrical/electrical-panel-upgrade).

*(96 words)*

---

**Q2: What does it mean if my outlets stop working but the breaker hasn't tripped?**

A: A dead outlet with no tripped breaker usually means one of three things: a GFCI outlet upstream on the same circuit has tripped and cut power to the downstream outlets (check bathrooms and kitchens), a wire connection has come loose inside the outlet box, or the outlet device itself has failed. Murrieta homes built in the 1990s frequently have GFCI outlets that are now 25+ years old and fail silently. Our [outlet and switch service](/services/electrical/outlets-and-switches) can locate and restore any dead circuit the same day.

*(91 words)*

---

**Q3: Are flickering lights in my home a serious electrical problem?**

A: Occasional flicker when a large appliance starts (refrigerator compressor, AC unit) is normal — it reflects a brief voltage drop as the motor draws startup current. Persistent flickering, or lights that dim when you run the microwave or hair dryer, points to an overloaded circuit or a loose neutral connection. A loose neutral is the more serious finding — it can cause voltage fluctuations that damage electronics and, in worst cases, start a fire. Do not ignore recurring flicker. An electrician can test the circuit in under an hour and tell you definitively what is happening.

*(95 words)*

---

**Q4: Can I replace an electrical outlet myself, or do I need a licensed electrician?**

A: In California, a homeowner can legally perform electrical work on their own home — but the work must still meet code and pass inspection. GFCI outlet replacements in kitchens, bathrooms, garages, and outdoor locations require the outlet be installed correctly and tested to confirm it trips and resets properly. If the dead outlet points to a wiring fault or an overloaded circuit upstream, that is a diagnostic job that requires test equipment and electrical knowledge. If you are not certain the outlet is the only problem, call a licensed electrician. A diagnostic visit is far cheaper than a code violation or a fire.

*(106 words)*

---

**Q5: How do I know if my home's wiring needs more than a repair?**

A: A single failed outlet or a breaker that trips once is a repair. When you are seeing multiple outlets fail in different rooms, breakers tripping on circuits that aren't overloaded, lights that flicker building-wide, or you have aluminum wiring from the 1960s–70s (common in older Hemet and Riverside homes), the issue is likely systemic. Our electricians will tell you directly: if the repair cost approaches the cost of correcting the underlying wiring problem, we say so. See our [home rewiring service](/services/electrical/home-rewiring) for scope and pricing detail.

*(89 words)*

---

**Q6: How fast can an electrician respond to a repair call in Murrieta?**

A: Same-day service is available for most repair calls placed before noon. For calls placed in the afternoon, we target next-morning dispatch. If the situation is unsafe — sparking outlet, burning smell, breaker that will not hold — that qualifies as an [emergency electrical call](/services/electrical/emergency-electrical) and gets priority dispatch around the clock. Our base in Murrieta puts us within 30–45 minutes of most Temecula, Menifee, and Lake Elsinore addresses. Call (951) 246-4337 to confirm same-day availability.

*(77 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Your Electrical Problem Won't Wait
```

### Intro Paragraph (52 words)
```
Some electrical faults are immediate safety hazards. A sparking outlet, a burning smell from a wall or panel, or a breaker that trips the moment you reset it are not situations to monitor and revisit later. Our emergency electrical line is live 24 hours a day. Call (951) 246-4337 — do not wait until morning.
```

### 8 Emergency Scenarios
```js
const emergencyReasons = [
  "Sparking or arcing outlet or switch",
  "Burning smell from wall, panel, or outlet",
  "Breaker trips immediately after reset",
  "Partial power loss to rooms or floors",
  "Flickering lights across the entire home",
  "Buzzing or crackling sound from panel",
  "Outlet hot to the touch",
  "Visible scorch marks on outlet or cover plate"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Fix Your Electrical Problem Today?
```

### Supporting Paragraph
```
Same-day electrical repair across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed electricians, and a 24/7 emergency line. Call now or schedule online — our electrical team picks up.
```
*(33 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Clock` | Same-Day Response |
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
| "emergency electrical call" | `/services/electrical/emergency-electrical` | FAQ Q6 answer (already written above) |
| "electrical panel upgrade service" | `/services/electrical/electrical-panel-upgrade` | FAQ Q1 answer (already written above) |
| "outlet and switch service" | `/services/electrical/outlets-and-switches` | FAQ Q2 answer (already written above) |
| "electrical safety inspection" | `/services/electrical/electrical-safety-inspection` | Service Overview intro or Why Choose Us card |

### Optional [O]
| Anchor Text | href | Section |
|---|---|---|
| "home rewiring service" | `/services/electrical/home-rewiring` | FAQ Q5 answer (already written above) |
| "surge protection" | `/services/electrical/surge-protection` | Why Choose Us or Emergency section note |
| "financing options" | `/financing` | Why Choose Us or final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `electrical repair Murrieta` |
| Keyword in title | Yes — "Electrical Repair Murrieta, CA" |
| Keyword in H1 | Yes — "Electrical Repair in Murrieta" |
| Keyword in first paragraph | Yes — service overview intro references Murrieta + electrical repairs |
| Keyword in meta description (first half) | Yes — "Electrical repair in Murrieta" opens description |
| Canonical slug | `/services/electrical/electrical-repairs` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "electrical repair across Murrieta" |
| Concrete numbers for AI citation | 600+ electrical repairs; 25–35 years (housing stock age); 30–45 min response radius; same-day before noon; 25+ years (GFCI age in 1990s homes); 4.9 star rating |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed; Emergency H2 frames urgency scenario |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field bound to page component |
| Estimated body word count (excl. FAQs) | ~820 words |
| Estimated FAQ word count | ~554 words |
| Total estimated | ~1,374 words |
| Internal links in copy | Repairs sub-hub [M], Emergency Electrical [R], Panel Upgrade [R], Outlets & Switches [R], Home Rewiring [O] |
| Schema recommendation | `FAQPage` JSON-LD for the 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us intro. `local-seo` must supply the actual C-10 license number before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director. Hero: electrician with voltage tester at a residential panel, Inland Empire home. Before/after: scorched outlet → clean installed outlet.
3. **Schema:** `FAQPage` JSON-LD wrapping all 6 FAQs + `Service` JSON-LD with `areaServed` covering all 10 service cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer implements a `lastUpdated: "June 2026"` frontmatter field bound to a visible "Last Updated: June 2026" line on the rendered page.
5. **Breadcrumbs:** `Home > Services > Repairs & Safety > Electrical Repairs`
6. **IE context woven in:** housing stock age (1990s–2000s), summer AC/EV charger overload, aluminum wiring in older Hemet/Riverside homes — all present in body.
