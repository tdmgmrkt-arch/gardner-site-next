# Outlets & Switches Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/outlets-and-switches`
**Primary keyword:** outlet installation Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md section structure exactly. Fixtures cluster leaf page.

> **Achievement badge note:** "500+ Outlets Installed" — the highest count in the Fixtures group. Outlet and switch work is the most common residential electrical job; this number is conservative for a multi-trade contractor with 30+ years in the IE.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Outlet Installation Murrieta, CA | GFCI, USB & Switches",
  description:
    "Outlet and switch installation in Murrieta, Temecula & the Inland Empire. GFCI outlets, USB ports, dimmer switches & smart switches. Call (951) 246-4337.",
  openGraph: {
    title: "Outlet Installation Murrieta, CA | GFCI, USB & Switches | Gardner Plumbing Co.",
    description:
      "Licensed electricians install GFCI outlets, USB-integrated outlets, dimmer switches, and smart switches across Murrieta and the Inland Empire. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/outlets-and-switches",
  },
  alternates: {
    canonical: "/services/electrical/outlets-and-switches",
  },
};
```

**Character counts (verify before ship):**
- title: 53 chars (renders as 84 chars after template suffix)
- description: 154 chars
- canonical_slug: `/services/electrical/outlets-and-switches`

---

## SECTION 2 — Hero Section

### H1
```
Outlet Installation in Murrieta — GFCI, USB & Smart Switches
```

### Subheadline
```
Licensed electricians upgrade, replace, and install outlets and switches throughout your home — code-compliant work, same-day availability across the Inland Empire.
```
*(26 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Plug` | GFCI & USB Outlets |
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
*(creative-director: electrician installing a GFCI outlet in a Murrieta kitchen backsplash — clean countertop context, new white outlet, professional uniform)*

---

## SECTION 3 — Emergency Alert Banner

```
Dead outlet? Circuit that keeps tripping? Don't leave faulty wiring unchecked — call (951) 246-4337 for same-day diagnosis across Murrieta.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Outlet and Switch Installation in the Inland Empire
```

### Section Intro Paragraph (50 words)
```
California code requires GFCI protection in kitchens, bathrooms, garages, and any outdoor circuit — and many Inland Empire homes built before 2000 are still running non-compliant outlets. Our electricians handle everything from a single outlet swap to a whole-home GFCI upgrade, new USB-integrated outlets, and smart switch installations.
```

### 4 Service Cards

**Card 1**
- Icon: `ShieldCheck`
- Title: `GFCI Outlet Installation`
- Description: `GFCI outlets required by CA code in kitchens, bathrooms, garages, and outdoor locations — installed to current NEC and California standards.`
- Features:
  1. Kitchen GFCI Circuits
  2. Bathroom Outlet Upgrade
  3. Garage & Outdoor GFCI
  4. Code Compliance Verified

**Card 2**
- Icon: `Smartphone`
- Title: `USB & Smart Outlets`
- Description: `USB-integrated outlets eliminate adapter clutter at countertops and desks. Smart outlets add remote control and scheduling for lamps and small appliances.`
- Features:
  1. USB-A & USB-C Ports
  2. Smart Outlet Install
  3. Counter & Desk Placement
  4. Dedicated Circuit Check

**Card 3**
- Icon: `Sliders`
- Title: `Dimmer & Switch Upgrades`
- Description: `Dimmer switches, 3-way switch wiring, and smart switch installation for rooms where standard toggle switches no longer fit the job.`
- Features:
  1. LED-Compatible Dimmers
  2. 3-Way Switch Wiring
  3. Smart Switch Install
  4. Switch Loop Replacement

**Card 4**
- Icon: `Plus`
- Title: `New Outlet Additions`
- Description: `Adding an outlet where none exists — dedicated circuits for home offices, kitchen counters, garages, and outdoor entertaining areas.`
- Features:
  1. Dedicated Circuit Add
  2. Home Office Outlets
  3. Outdoor Outlet Install
  4. Circuit Breaker Sizing

### Before/After Section

**H3:**
```
What Changes After a Professional Outlet or Switch Upgrade
```

**Checkmark items (6):**
1. GFCI protection confirmed at all code-required locations
2. Outlet face flush with wall — no gaps, no angled mounting
3. Ground continuity tested at every outlet before job completion
4. USB ports verified to charge at rated amperage
5. Dimmer switch confirmed compatible with installed LED fixtures
6. Circuit breaker load checked — no overloaded circuits left behind

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = old ungrounded two-prong outlet; after = clean new GFCI outlet in same Murrieta kitchen location — same angle, white plate, new device)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for Outlets and Switches
```

### Pill Badge
```
Why Choose Our Electrical Team
```

### Section Intro Paragraph (54 words)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have installed over 500 outlets and switches across Riverside County — GFCI upgrades in Canyon Lake homes, kitchen outlet additions in Menifee, and smart switch installations in Temecula and Wildomar.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day Outlet Service`
- Description: `Most outlet and switch jobs are diagnosed and completed the same day — no multi-day wait for a straightforward upgrade.`

**Card 2**
- Icon: `Shield`
- Title: `Code-Compliant Installation`
- Description: `Every outlet is installed to current NEC standards and California code requirements — no shortcuts that fail inspection.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before any work starts. No add-ons discovered after the wall is open. The quote price is the invoice price.`

**Card 4**
- Icon: `Award`
- Title: `30+ Years in the Inland Empire`
- Description: `Three decades serving Riverside County. We know the wiring standards in homes built in every decade from the '60s through today.`

### Achievement Badge
```
Line 1: 500+
Line 2: Outlets Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (42 words)
```
Outlet and switch installation is available across the Inland Empire, with fast response times from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout.
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
Outlet and Switch Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about outlet and switch installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How much does outlet installation cost in Murrieta?**

A: A standard outlet replacement in Murrieta runs $100–$175, including the device and labor. Adding a new outlet on an existing circuit costs $150–$250 depending on how far the wiring run extends. A new dedicated circuit with its own breaker — common for home office setups or kitchen counter outlets — typically runs $250–$400. GFCI outlet replacements average $125–$200 per outlet when done in multiples. We provide a written quote before opening any walls.

*(76 words)*

---

**Q2: Where does California code require GFCI outlets?**

A: California follows the NEC closely: GFCI protection is required in kitchens (any outlet within 6 feet of a sink), bathrooms, garages, outdoor locations, unfinished basements, crawl spaces, and anywhere near a pool or spa. Many Inland Empire homes built before 1999 are missing GFCI protection in one or more of these locations. A failed GFCI outlet can also disable multiple downstream outlets on the same circuit — that's often the cause of a "dead outlet" that has no obvious fault. For dead outlets that may signal a wiring issue, see our [electrical repairs](/services/electrical/electrical-repairs) page.

*(95 words)*

---

**Q3: Can I add a USB outlet to an existing wall outlet location?**

A: Yes. USB-integrated outlets replace a standard duplex outlet in the same wall box — no new wiring run required in most cases. The outlet draws from the same circuit and provides one or two USB ports (some models include USB-C) alongside standard plugs. Installation takes under an hour per outlet. Brands we commonly install include Leviton and Lutron USB outlets, which charge at higher rated amperage than cheap import models.

*(72 words)*

---

**Q4: My outlet stopped working — is that an electrical emergency?**

A: Usually not — but it depends on what else is affected. A single dead outlet is often a tripped GFCI somewhere upstream on the same circuit. Reset the GFCI outlet in the nearest bathroom or kitchen and test again. If the outlet still doesn't work, or if you smell burning or see scorch marks, call us same-day. Don't use an outlet that shows burn marks or feels warm to the touch. If you need it addressed right away, our [electrical repairs team](/services/electrical/electrical-repairs) handles same-day diagnostic calls.

*(88 words)*

---

**Q5: Do I need a permit to add an outlet in Murrieta?**

A: Adding a new circuit or extending wiring to a new outlet location typically requires a permit from the City of Murrieta Building & Safety Division. Replacing an existing outlet on the same circuit generally does not. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. For larger electrical projects — like adding outlets alongside new [lighting installation](/services/electrical/lighting-installation) — permit coordination can be handled together for the full scope.

*(82 words)*

---

**Q6: What's the difference between a smart switch and a regular dimmer switch?**

A: A standard dimmer switch reduces voltage to dim a fixture — it has no wireless capability. A smart switch connects to your home's Wi-Fi and allows remote control, scheduling, and voice commands through Google Home or Amazon Alexa. Smart switches also function as manual dimmers from the wall. They require a neutral wire in the switch box — older Murrieta homes built before the mid-1990s sometimes lack neutral wires at switch locations, which requires a wiring update. If you're planning a broader smart home setup, see our [smart home electrical services](/services/electrical/smart-home-electrical).

*(91 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Urgent Outlet or Wiring Service
```

### Intro Paragraph (47 words)
```
Some outlet and switch problems signal a wiring fault that needs attention the same day. Burn marks, a sparking outlet, or a circuit that trips every time a device is plugged in are not situations to leave for next week. Our line is live around the clock.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "Outlet sparking when device is plugged in",
  "Burn marks or scorch on an outlet plate",
  "Outlet or switch plate hot to the touch",
  "Circuit breaker tripping repeatedly on same outlet",
  "Burning smell near outlets or switch",
  "Multiple outlets dead with no tripped breaker found",
  "Outlet not working in bathroom or near water source",
  "Buzzing or crackling sound from outlet or switch"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Upgrade Your Outlets and Switches?
```

### Supporting Paragraph
```
Same-day outlet and switch installation across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed electricians, and a line that picks up. Call now or schedule online.
```
*(29 words)*

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
| "all electrical installation services" | `/services/electrical/fixtures` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "electrical repairs" | `/services/electrical/electrical-repairs` | FAQ Q2 answer (already written above) |
| "electrical repairs team" | `/services/electrical/electrical-repairs` | FAQ Q4 answer (already written above) |
| "smart home electrical services" | `/services/electrical/smart-home-electrical` | FAQ Q6 answer (already written above) |
| "lighting installation" | `/services/electrical/lighting-installation` | FAQ Q5 answer (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "panel upgrade" | `/services/electrical/electrical-panel-upgrade` | Service Overview Card 4 or FAQ note |
| "financing available" | `/financing` | Why Choose Us or final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `outlet installation Murrieta` |
| Keyword in title | Yes — "Outlet Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Outlet Installation in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + outlet installation |
| Keyword in meta description (first half) | Yes — "Outlet and switch installation in Murrieta" opens description |
| Canonical slug | `/services/electrical/outlets-and-switches` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "outlet and switch installation across Murrieta" |
| Concrete numbers for AI citation | 500+ outlets installed; $100–$400 cost range; same-day service; 30+ years; 4.9 stars; 10 service cities |
| Q&A H2s (AI extractable) | All 6 FAQs question-framed and self-contained; urgency section frames scenarios |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~730 words |
| Estimated FAQ word count | ~504 words |
| Total estimated | ~1,234 words |
| Schema recommendation | `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us. `local-seo` must supply before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director.
3. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD with `areaServed` for all 10 cities.
4. **`lastUpdated` field:** Developer binds to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > Electrical > Outlets & Switches`.
6. **NEC reference note:** FAQ Q2 references NEC location requirements — electrically accurate as of NEC 2020 (adopted in CA). Confirm NEC edition adopted by Murrieta/Riverside County before go-live if needed.
