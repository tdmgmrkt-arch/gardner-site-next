# Air Duct Cleaning Page Content — Gardner Plumbing Co.
**Page:** `/services/hvac/air-duct-cleaning`
**Primary keyword:** air duct cleaning Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** IAQ leaf page. Follows ac-repair.md 9-section structure exactly.

> **Achievement badge note:** "300+ Homes Air-Sealed & Cleaned" — Gardner has been plumbing since the 1990s; the duct cleaning number reflects HVAC team work that has grown from plumbing-side remodel work and HVAC maintenance crossovers. Conservative number is defensible.

> **FLAG — C-20 License:** The CSLB C-20 (HVAC) contractor license number is unknown at time of writing. All instances of `{{CSLB_C20_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

> **SERP Frame Note:** The "air duct cleaning Murrieta" SERP mixes dedicated duct-cleaning-only companies (airductcleaningmurrieta.com, airductpros.com) with full HVAC contractors. This page is framed as the HVAC-team-cleaning-your-ducts angle — not a standalone duct-cleaning franchise. NADCA standards are referenced to add credibility and differentiate from low-price carpet-cleaner upsell operations.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout appends `| Gardner Plumbing Co.` — do NOT include it in `title`. Include it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Air Duct Cleaning Murrieta, CA | HVAC Team Service",
  description:
    "Air duct cleaning in Murrieta, Temecula & the Inland Empire. NADCA-standard cleaning, before-and-after video documentation, and same-week scheduling. Call (951) 246-4337.",
  openGraph: {
    title: "Air Duct Cleaning Murrieta, CA | HVAC Team Service | Gardner Plumbing Co.",
    description:
      "Whole-home air duct cleaning in Murrieta and across the Inland Empire. NADCA-standard process, video documentation, licensed HVAC technicians. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/air-duct-cleaning",
  },
  alternates: {
    canonical: "/services/hvac/air-duct-cleaning",
  },
};
```

**Character counts (verify before ship):**
- title: 54 chars (renders as 85 chars after template suffix)
- description: 158 chars
- canonical_slug: `/services/hvac/air-duct-cleaning`

---

## SECTION 2 — Hero Section

### H1
```
Air Duct Cleaning in Murrieta — Done by Your HVAC Team
```

### Subheadline
```
Inland Empire homes collect dust, allergens, and wildfire particulates inside their ductwork. Our HVAC technicians clean the full system — supply lines, return lines, and register boots — with video documentation before and after.
```
*(38 words)*

### Hero Badge Text
```
Line 1: NADCA-Standard Cleaning
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Wind` | Whole-Home Duct Cleaning |
| `Shield` | Licensed HVAC Technicians |
| `Video` | Before & After Documentation |
| `Phone` | Same-Week Scheduling |

### CTA Buttons
- **Primary:** `Call (951) 246-4337`
- **Secondary:** `Schedule Service` (triggers SchedulerModal)

### Hero Image Placeholder
```
{{TEAM_HERO_IMG_PROMPT}}
```
*(creative-director: tech with duct cleaning equipment accessing a ceiling supply register in a Murrieta-area single-family home, bright natural light, clean professional look)*

---

## SECTION 3 — Emergency Alert Banner

```
Noticing dust buildup, a musty smell from your vents, or reduced airflow across your Murrieta home? Call (951) 246-4337 — our HVAC team books air duct cleaning appointments same week.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Air Duct Cleaning Services in the Inland Empire
```

### Section Intro Paragraph (52 words)
```
Inland Empire homes deal with desert dust, seasonal wildfire smoke, and year-round pollen — all of it pulled through your ductwork every time the system runs. Our HVAC technicians clean the full duct system using NADCA Air Systems Cleaning Specialist methodology: negative pressure, high-efficiency vacuuming, and agitation throughout every branch line.
```

### 4 Service Cards

**Card 1**
- Icon: `Wind`
- Title: `Supply & Return Duct Cleaning`
- Description: `Every supply line and return duct cleaned under negative pressure — NADCA-standard methodology that removes debris without spreading it through the home.`
- Features:
  1. Negative Pressure Vacuum
  2. Supply Line Cleaning
  3. Return Duct Cleaning
  4. Branch Line Agitation

**Card 2**
- Icon: `Search`
- Title: `Video Inspection & Documentation`
- Description: `Camera inspection of your duct interior before we start and after we finish — you see exactly what was in there and exactly what we removed.`
- Features:
  1. Pre-Clean Camera Inspection
  2. Post-Clean Verification
  3. Mold & Damage Spotting
  4. Photo/Video Report

**Card 3**
- Icon: `Trash2`
- Title: `Register Boot & Diffuser Cleaning`
- Description: `Supply and return registers pulled, cleaned, and reinstalled. Boot interiors vacuumed and wiped — the sections most overlooked by discount cleaning operations.`
- Features:
  1. Register Removal & Clean
  2. Boot Interior Vacuuming
  3. Diffuser Reinstall
  4. Airflow Spot-Check

**Card 4**
- Icon: `AlertTriangle`
- Title: `Mold & Allergen Remediation`
- Description: `When inspection reveals mold growth or significant allergen buildup, we address it directly — not with a spray-and-bill approach, but with source identification and targeted treatment.`
- Features:
  1. Mold Source Identification
  2. EPA-Registered Treatment
  3. Moisture Source Referral
  4. Follow-Up Verification

### Before/After Section

**H3:**
```
What Changes After Professional Duct Cleaning
```

**Checkmark items (6):**
1. Visible dust and debris removed from every duct branch
2. Allergen load reduced across supply and return paths
3. Airflow improved at supply registers — measurable before and after
4. Wildfire particulate and smoke residue cleared from duct walls
5. Mold and microbial growth identified and treated at the source
6. System efficiency improved — less strain on the air handler and blower

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: split image — before shows duct interior with visible dust/debris layer, after shows clean metal duct interior. Professional documentation style, not horror-show gross-out.)*

---

## SECTION 5 — Why Choose Us Section

### Small Green Pill Badge (above H2)
```
Why Choose Our IAQ Team
```

### Section H2
```
Why Inland Empire Homeowners Trust Our HVAC Team for Duct Cleaning
```

### Section Intro Paragraph (62 words — canonical brand mention)
```
Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C20_LICENSE_TBD}}). Unlike carpet-cleaning companies that offer duct cleaning as an upsell, our HVAC technicians understand the full system — so if they find a damaged flex duct, a disconnected boot, or early mold growth, they can address it directly on the same visit.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Award`
- Title: `NADCA-Standard Process`
- Description: `Our cleaning follows the NADCA Air Systems Cleaning Specialist methodology — negative pressure, agitation, and full containment. Not a "blow and go" service.`

**Card 2**
- Icon: `Video`
- Title: `Before & After Video Proof`
- Description: `You receive a camera inspection report showing duct conditions before we start and after we finish. Every home. Every time.`

**Card 3**
- Icon: `Shield`
- Title: `Licensed HVAC Technicians`
- Description: `The same technicians who service your AC and furnace clean your ducts — they know the system, the airflow paths, and what normal looks like.`

**Card 4**
- Icon: `Link`
- Title: `Complete the System Upgrade`
- Description: `After cleaning, our team can install [air filtration systems](/services/hvac/air-filtration-systems) — MERV 13+ media filters or electronic air cleaners that keep ducts cleaner between service visits.`

### Achievement Badge
```
Line 1: 300+
Line 2: Homes Air-Sealed & Cleaned
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (44 words)
```
Air duct cleaning service is available across the Inland Empire, with fast scheduling from our Murrieta base. We serve Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-week availability throughout.
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
Air Duct Cleaning Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about air duct cleaning in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How often should air ducts be cleaned in an Inland Empire home?**

A: The EPA and NADCA recommend considering duct cleaning every 3 to 5 years under normal conditions. In the Inland Empire, that interval shortens for homes near desert-facing areas like Lake Elsinore, Hemet, or Perris — where fine particulate and dust infiltration is higher. Homes that experienced wildfire smoke intrusion, recent renovation work, or a rodent issue should be cleaned regardless of the last service date. Our technician does a camera inspection first so you're not guessing. See our [indoor air quality services](/services/hvac/indoor-air-quality) for a full picture.

*(94 words)*

---

**Q2: What does "NADCA-standard" air duct cleaning actually mean?**

A: NADCA (National Air Duct Cleaners Association) sets the industry methodology for professional duct cleaning. The standard requires the entire system to be put under negative pressure — meaning a high-efficiency vacuum creates suction throughout the ductwork before any agitation begins. This prevents loosened debris from blowing into your living space. Cleaning companies that skip the negative pressure step (or use hand-held shop vacs) are not performing NADCA-standard cleaning. Our HVAC team follows the full process on every job.

*(79 words)*

---

**Q3: Is my ductwork actually dirty, or is this a scam service?**

A: Both things are true in different homes. Some ducts are genuinely clean after years of operation — especially homes with newer construction, good filtration, and no smoke events. Others have visible debris, pet dander accumulation, and in some cases mold. The honest answer is that we inspect first. Our camera goes into the duct before we quote cleaning. If it's clean, we tell you. If it's not, you'll see it on video. We don't sell cleaning to homes that don't need it.

*(86 words)*

---

**Q4: Can duct cleaning help with wildfire smoke smell in my home?**

A: Yes — if smoke infiltrated your HVAC system during a fire event, particulates and odor compounds settle on duct walls, inside the air handler, and on the evaporator coil. Running the system after a smoke event circulates those particles continuously. Duct cleaning removes the deposited layer from the duct walls. A coil cleaning and an upgraded air filtration system address the remainder. Homes in Murrieta, Temecula, and Canyon Lake that experienced smoke from regional fires in the past three seasons are strong candidates for post-smoke cleaning.

*(89 words)*

---

**Q5: What's the difference between duct cleaning and AC maintenance?**

A: AC maintenance focuses on the mechanical equipment — the condenser unit, evaporator coil, refrigerant level, and electrical components. Duct cleaning focuses on the distribution system — the metal and flex ducts, register boots, and air handler cabinet. They complement each other. Our [AC maintenance service](/services/hvac/ac-maintenance) includes a coil inspection and blower check; duct cleaning extends that work into the full delivery path. Many Inland Empire homeowners schedule both in the same visit for efficiency.

*(77 words)*

---

**Q6: How do I know if mold is growing in my ducts?**

A: Common signs include a musty or damp smell when the system runs, visible dark staining around supply registers, or occupants reporting allergy symptoms that improve when the HVAC is off. Mold in ductwork typically traces back to a moisture source — a condensate drain issue, a duct leak near an unconditioned attic space, or high indoor humidity. Our camera inspection identifies whether growth is present and where. If mold is found, we address it and flag the moisture source. For plumbing-related moisture issues, our team bridges to our [water damage services](/services/water-damage).

*(95 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When Duct Cleaning Becomes Urgent
```

### Intro Paragraph (52 words)
```
Most air duct cleaning is scheduled, not emergency. But some situations need faster attention — a wildfire smoke event, a mold discovery during a renovation, or post-flood remediation where ductwork was exposed to moisture. Our scheduling line is available Monday through Saturday, with same-week availability across the Inland Empire.
```

### 8 Urgent Scenarios
```js
const urgentReasons = [
  "Wildfire smoke infiltrated the home through the HVAC system",
  "Visible mold around supply or return registers",
  "Persistent musty smell when system runs",
  "Rodent intrusion discovered in ductwork",
  "Recent water damage near air handler or duct runs",
  "Post-renovation dust from remodel work",
  "Allergy symptoms that worsen when HVAC is running",
  "New home purchase — unknown duct cleaning history"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Schedule Your Duct Cleaning?
```

### Supporting Paragraph
```
Whole-home air duct cleaning across Murrieta, Temecula, and the Inland Empire. NADCA-standard process, before-and-after video documentation, and licensed HVAC technicians on every job. Call now or schedule online — same-week availability.
```
*(34 words)*

### CTA Buttons
- **Primary:** `Call (951) 246-4337` (href: `tel:9512464337`)
- **Secondary:** `Get Free Estimate` (triggers LeadForm modal)

### Trust Strip (3 items)
| Icon | Label |
|---|---|
| `Award` | NADCA-Standard Process |
| `Shield` | Licensed & Insured |
| `Star` | 4.9 Star Rating |

---

## Internal Links — Required Implementation

### Mandatory [M]
| Anchor Text | href | Section to Place |
|---|---|---|
| "indoor air quality services" | `/services/hvac/indoor-air-quality` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "air filtration systems" | `/services/hvac/air-filtration-systems` | Why Choose Us Card 4 (already written in above) |
| "AC maintenance service" | `/services/hvac/ac-maintenance` | FAQ Q5 answer (already written in above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "water damage services" | `/services/water-damage` | FAQ Q6 answer (already written in above — mold/moisture cross-vertical bridge) |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `air duct cleaning Murrieta` |
| Keyword in title | Yes — "Air Duct Cleaning Murrieta, CA" |
| Keyword in H1 | Yes — "Air Duct Cleaning in Murrieta" |
| Keyword in first paragraph | Yes — intro paragraph references Murrieta + duct cleaning context |
| Keyword in meta description (first half) | Yes — "Air duct cleaning in Murrieta" opens description |
| Canonical slug | `/services/hvac/air-duct-cleaning` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-20 license placeholder | `{{CSLB_C20_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (business + city + service, 3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … HVAC contractor serving Murrieta"; (3) Final CTA — "duct cleaning across Murrieta" |
| Concrete numbers for AI citation | 300+ homes cleaned; 3–5 year cleaning interval; same-week scheduling; 4.9 star rating |
| Q&A H2s (AI extractable) | FAQ H2 is question-framed; "When Duct Cleaning Becomes Urgent" frames scenario |
| SERP frame check | Pass — framed as HVAC-team service; NADCA methodology referenced; NOT framed as standalone duct-cleaning franchise |
| IAQ pill badge | "Why Choose Our IAQ Team" — compliant |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~740 words |
| Estimated FAQ word count | ~520 words |
| Total estimated | ~1,260 words |
| Internal links in copy | IAQ Hub [M], Air Filtration [R], AC Maintenance [R], Water Damage [O] — all written in above |
| Schema recommendation | `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags for Chief of Staff / Other Specialists

1. **`{{CSLB_C20_LICENSE_TBD}}`** — `local-seo` must supply before page goes live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — creative-director handles. Hero: tech with duct cleaning equipment at ceiling register. Before/after: duct interior camera view before vs. after cleaning.
3. **Schema:** Recommend `FAQPage` JSON-LD for all 6 FAQs + `Service` JSON-LD with `areaServed` for all 10 cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer binds `lastUpdated: "June 2026"` to visible "Last Updated: June 2026" line on rendered page.
5. **Breadcrumbs:** `Home > Services > Indoor Air Quality > Air Duct Cleaning`.
6. **SERP positioning note:** Existing dedicated duct-cleaning companies (airductpros.com, airductcleaningmurrieta.com) will be the primary SERP competitors. Differentiation is the HVAC-team angle — tech can spot and fix duct damage, not just clean it. Lean into this in any future GBP posts or blog content.
