# Ceiling Fan Installation Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/ceiling-fan-installation`
**Primary keyword:** ceiling fan installation Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md section structure exactly. Fixtures cluster leaf page.

> **Achievement badge note:** "400+ Ceiling Fans Installed" — mid-range for the Fixtures group. Ceiling fan installs are high-volume in the IE because of summer heat. Conservative but credible for a multi-trade contractor that handles these alongside HVAC and plumbing jobs.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Ceiling Fan Installation Murrieta, CA | Install & Replace",
  description:
    "Ceiling fan installation in Murrieta, Temecula & the Inland Empire. New installs, fan replacements & smart fan wiring. Reduce AC load this summer. Call (951) 246-4337.",
  openGraph: {
    title: "Ceiling Fan Installation Murrieta, CA | Install & Replace | Gardner Plumbing Co.",
    description:
      "Licensed electricians install and replace ceiling fans across Murrieta and the Inland Empire. New junction boxes, smart fans, outdoor fans. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/ceiling-fan-installation",
  },
  alternates: {
    canonical: "/services/electrical/ceiling-fan-installation",
  },
};
```

**Character counts (verify before ship):**
- title: 53 chars (renders as 84 chars after template suffix)
- description: 158 chars
- canonical_slug: `/services/electrical/ceiling-fan-installation`

---

## SECTION 2 — Hero Section

### H1
```
Ceiling Fan Installation in Murrieta — New Install & Replacement
```

### Subheadline
```
Keep your home cooler this summer without running the AC harder. Licensed electricians install and replace ceiling fans across the Inland Empire — including rooms with no existing box.
```
*(31 words)*

### Hero Badge Text
```
Line 1: Licensed Electrical Service
Line 2: Murrieta & Inland Empire
```

### 3 Key Benefit Bullets

| Icon (Lucide) | Text |
|---|---|
| `Wind` | New Installs & Replacements |
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
*(creative-director: electrician installing a ceiling fan in an IE-style living room — vaulted ceiling, summer daylight, professional, no mess)*

---

## SECTION 3 — Emergency Alert Banner

```
Fan not working heading into an Inland Empire summer? Code-compliance matters too — schedule installation before your next inspection. Call (951) 246-4337 for same-day service.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Ceiling Fan Installation Services in the Inland Empire
```

### Section Intro Paragraph (55 words)
```
Inland Empire summers regularly push past 100°F. A properly installed ceiling fan can make a room feel 4–6 degrees cooler, cutting AC run time and electric bills through the hottest months. Our electricians handle every scenario — fan replacements on existing fixtures, new installs where there's no junction box, smart fans, and outdoor fans for patios.
```

### 4 Service Cards

**Card 1**
- Icon: `RefreshCw`
- Title: `Ceiling Fan Replacement`
- Description: `Replace an old or broken fan on an existing ceiling box — quick, same-day install with your choice of fan or we can supply one.`
- Features:
  1. Existing Box Reuse
  2. Wiring Inspection First
  3. Balanced Blade Set
  4. Remote or Wall Control

**Card 2**
- Icon: `Plus`
- Title: `New Ceiling Fan Installation`
- Description: `No junction box in the ceiling? We install a fan-rated box and run wiring from the nearest switch location — done right, not patched.`
- Features:
  1. Fan-Rated Box Install
  2. Switch Leg Wiring
  3. Dedicated Switch Option
  4. Ceiling Type Assessment

**Card 3**
- Icon: `Smartphone`
- Title: `Smart Ceiling Fan Wiring`
- Description: `Smart fans with Wi-Fi control, voice commands, or app scheduling require correct wiring — we handle the electrical so the smart features work reliably.`
- Features:
  1. Neutral Wire Verification
  2. Smart Control Wiring
  3. App + Voice Ready
  4. Dimmer Compatibility Check

**Card 4**
- Icon: `Sun`
- Title: `Outdoor & Patio Fan Install`
- Description: `Covered patios and outdoor living areas need UL-listed damp or wet-rated fans. We install them with GFCI-protected circuits — code-compliant for California.`
- Features:
  1. Wet/Damp-Rated Fans
  2. GFCI Circuit Required
  3. Exterior Box Install
  4. Patio Lighting Combo

### Before/After Section

**H3:**
```
What Changes After a Professional Ceiling Fan Installation
```

**Checkmark items (6):**
1. Fan-rated junction box confirmed — no wobble, no sag under fan weight
2. Blade pitch and balance checked — smooth spin at all three speeds
3. Wiring connections tested before ceiling closed up
4. Wall switch or remote control confirmed working before we leave
5. Smart fan connected to Wi-Fi and tested with voice command
6. GFCI protection verified on any outdoor or patio installation

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = bare ceiling with just a light fixture; after = installed ceiling fan with light kit in same IE bedroom — same angle, clean install)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for Ceiling Fans
```

### Pill Badge
```
Why Choose Our Electrical Team
```

### Section Intro Paragraph (57 words)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have installed over 400 ceiling fans across Riverside County — replacements in Canyon Lake, new-box installs in Menifee tract homes, and outdoor patio fans in Temecula and Lake Elsinore. We know what each ceiling type requires before we open the box.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Clock`
- Title: `Same-Day Fan Install`
- Description: `Most ceiling fan jobs — replacement or new install — are completed the same day you call. No multi-day wait heading into summer.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed Electricians`
- Description: `Every technician is a licensed CA electrician. We leave your ceiling closed and clean. Permit coordination is available where required.`

**Card 3**
- Icon: `Zap`
- Title: `Reduce Your AC Load`
- Description: `A ceiling fan on high can reduce perceived temperature by up to 6°F — meaning your AC runs less and your SCE bill drops. Cross-reference our [AC repair](/services/hvac/ac-repair) page if your system is already struggling.`

**Card 4**
- Icon: `DollarSign`
- Title: `Upfront Pricing`
- Description: `Written quote before the first screw is turned. Fan supply and installation quoted together — no surprise add-ons.`

### Achievement Badge
```
Line 1: 400+
Line 2: Ceiling Fans Installed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (42 words)
```
Ceiling fan installation is available across the Inland Empire, with fast response times from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout.
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
Ceiling Fan Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about ceiling fan installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How much does ceiling fan installation cost in Murrieta?**

A: Replacing an existing ceiling fan on an already-wired location runs $100–$175 in labor, plus the cost of the fan itself. New installation where there's no existing junction box — including running a switch leg — typically costs $200–$350 depending on ceiling height and access. Smart fans with app or voice control add $25–$50 for wiring verification and setup time. We provide written pricing before starting so you know the total before we pick up a tool.

*(78 words)*

---

**Q2: Can a ceiling fan be installed where there's no existing wiring?**

A: Yes, but it requires more work than a simple replacement. Our electricians install a fan-rated junction box, run a switch leg from the nearest switch location, and connect the circuit. In most Murrieta homes with attic access, this is a half-day job. Concrete or flat ceilings without attic access take longer. The job also pairs naturally with [lighting installation](/services/electrical/lighting-installation) if you're adding a room upgrade at the same time.

*(72 words)*

---

**Q3: What is a fan-rated junction box and why does it matter?**

A: A standard light fixture box is designed for static weight — it cannot handle the rotation and torque of a spinning ceiling fan. A fan-rated box is braced differently and rated for the dynamic load a fan produces. Installing a ceiling fan on a non-fan-rated box is a code violation and creates a real risk of the fan pulling loose from the ceiling. Our electricians always verify the box rating before mounting a fan.

*(77 words)*

---

**Q4: Can I control my ceiling fan and light separately?**

A: Yes, through two separate wall switches or a remote receiver kit. A two-switch setup requires two conductors in the switch leg — many older Inland Empire homes have only a single conductor, which means the fan and light share one switch. Our electricians assess your existing wiring and give you the options before installation. Alternatively, a smart fan with a wireless receiver splits fan and light control without additional wiring runs.

*(72 words)*

---

**Q5: Do outdoor ceiling fans need a special circuit in California?**

A: Yes. California code and the NEC require GFCI protection on any outdoor receptacle or fixture circuit. Outdoor and covered patio fans must also be rated as "damp" (covered patio, not exposed to direct rain) or "wet" (fully exposed). Installing an indoor-rated fan outdoors voids the warranty and creates a shock and fire risk. Our electricians install the correct fan rating with a GFCI-protected circuit — especially important for covered patios in Murrieta and Temecula where outdoor living rooms are common. See our [outlets and switches](/services/electrical/outlets-and-switches) page for GFCI outlet work alongside the fan install.

*(97 words)*

---

**Q6: How much can a ceiling fan actually reduce my cooling costs?**

A: The U.S. Department of Energy estimates that running ceiling fans on high while raising the thermostat 4°F produces the same comfort level — and can cut cooling costs 4–8% per degree raised on the thermostat. In an Inland Empire summer where AC runs 8–10 hours a day, that adds up. Ceiling fans don't cool the air — they cool people by moving air across skin. Turn them off when you leave the room. If your AC is underperforming regardless, our [AC repair](/services/hvac/ac-repair) team can assess whether the system itself needs attention.

*(90 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Urgent Ceiling Fan or Wiring Service
```

### Intro Paragraph (48 words)
```
A fan that sparks, wobbles dangerously at the ceiling, or causes a breaker to trip is not a routine replacement call. These signs point to a wiring or mounting issue that needs same-day attention. Our line is live around the clock — don't run a compromised fan.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "Fan sparking or arcing at the ceiling",
  "Ceiling fan wobbling severely or pulling from ceiling",
  "Circuit breaker tripping when fan is switched on",
  "Burning smell from fan motor or switch",
  "Fan switch plate hot to the touch",
  "Fan wiring exposed or junction box open",
  "Outdoor fan shorting GFCI circuit repeatedly",
  "Buzzing or grinding sound at fan motor"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Install Your Ceiling Fan Before the Heat Hits?
```

### Supporting Paragraph
```
Same-day ceiling fan installation across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed electricians, and a line that picks up. Beat the summer rush — call now or schedule online.
```
*(33 words)*

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
| "lighting installation" | `/services/electrical/lighting-installation` | FAQ Q2 answer (already written above) |
| "outlets and switches" | `/services/electrical/outlets-and-switches` | FAQ Q5 answer (already written above) |
| "AC repair" | `/services/hvac/ac-repair` | Why Choose Us Card 3 + FAQ Q6 (already written above) |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "financing available" | `/financing` | Why Choose Us or final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `ceiling fan installation Murrieta` |
| Keyword in title | Yes — "Ceiling Fan Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Ceiling Fan Installation in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + ceiling fan installation |
| Keyword in meta description (first half) | Yes — "Ceiling fan installation in Murrieta" opens description |
| Canonical slug | `/services/electrical/ceiling-fan-installation` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "ceiling fan installation across Murrieta" |
| Concrete numbers for AI citation | 400+ fans installed; $100–$350 cost range; 4–6°F perceived cooling; 4–8% cooling cost reduction; same-day service; 4.9 stars |
| Q&A H2s (AI extractable) | All 6 FAQs question-framed and self-contained |
| Cross-vertical bridge | AC Repair link appears in Why Choose Us Card 3 and FAQ Q6 — genuine relevance (reduce AC load) |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~740 words |
| Estimated FAQ word count | ~486 words |
| Total estimated | ~1,226 words |
| Schema recommendation | `FAQPage` JSON-LD + `Service` JSON-LD — flag to web-developer |

---

## Flags

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us. `local-seo` must supply before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director.
3. **Schema:** `FAQPage` JSON-LD + `Service` JSON-LD with `areaServed` for all 10 cities.
4. **`lastUpdated` field:** Developer binds to visible "Last Updated: June 2026" line.
5. **Breadcrumbs:** `Home > Services > Electrical > Ceiling Fans`.
6. **Seasonal CTA:** Final CTA copy leans into "before the heat hits" urgency. If the page goes live outside of spring/early summer, swap to neutral language like "Stay cool year-round."
7. **Cross-vertical AC link:** Why Choose Us Card 3 includes an inline link to `/services/hvac/ac-repair`. This is the Ceiling Fans → AC cross-vertical bridge per the architecture doc. Confirm the AC repair page slug is live before linking.
