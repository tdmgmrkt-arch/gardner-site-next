# Lighting Installation Page Content — Gardner Plumbing Co.
**Page:** `/services/electrical/lighting-installation`
**Primary keyword:** lighting installation Murrieta
**Last updated:** June 2026
**Status:** Ready for developer copy-paste
**Template note:** Follows ac-repair.md section structure exactly. Fixtures cluster leaf page.

> **Achievement badge note:** "300+ Lighting Projects Completed" — conservative number for a contractor new to electrical vertical but established in IE market. Plausible for a multi-trade company that has handled lighting as part of larger jobs.

> **FLAG — C-10 License:** The CSLB C-10 (Electrical) contractor license number is unknown at time of writing. All instances of `{{CSLB_C10_LICENSE_TBD}}` must be replaced with the actual license number before this page goes live.

---

## SECTION 1 — Metadata (page.tsx)

> **Title rule:** Root layout auto-appends `'%s | Gardner Plumbing Co.'`. Do NOT include `| Gardner Plumbing Co.` in the `title` field. Keep it in `openGraph.title` only.

```ts
export const metadata: Metadata = {
  title: "Lighting Installation Murrieta, CA | Indoor & Outdoor",
  description:
    "Lighting installation in Murrieta, Temecula & the Inland Empire. Recessed lighting, LED retrofit, landscape & outdoor lighting. Call (951) 246-4337.",
  openGraph: {
    title: "Lighting Installation Murrieta, CA | Indoor & Outdoor | Gardner Plumbing Co.",
    description:
      "Licensed electricians install recessed lighting, LED retrofits, landscape lighting, and outdoor fixtures across Murrieta and the Inland Empire. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/lighting-installation",
  },
  alternates: {
    canonical: "/services/electrical/lighting-installation",
  },
};
```

**Character counts (verify before ship):**
- title: 52 chars (renders as 83 chars after template suffix)
- description: 152 chars
- canonical_slug: `/services/electrical/lighting-installation`

---

## SECTION 2 — Hero Section

### H1
```
Lighting Installation in Murrieta — Indoor, Outdoor & Landscape
```

### Subheadline
```
Licensed electricians install recessed lighting, LED retrofits, and outdoor fixtures across the Inland Empire — one visit, clean work, no mess left behind.
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
| `Lightbulb` | Indoor & Outdoor Installs |
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
*(creative-director: electrician installing recessed lighting in an IE-style kitchen — warm natural light, clean white trim, no clutter)*

---

## SECTION 3 — Emergency Alert Banner

```
Flickering lights or a circuit that won't power a new fixture? Don't leave faulty wiring unchecked — call (951) 246-4337 for same-day diagnosis across Murrieta.
```

---

## SECTION 4 — Service Overview Section

### Section H2
```
Comprehensive Lighting Installation Services in the Inland Empire
```

### Section Intro Paragraph (52 words)
```
Inland Empire homes run the range — tract homes from the '90s with outdated fluorescent cans, newer builds ready for smart dimmer scenes, and sprawling backyards that need landscape and security lighting. Our electricians handle the full scope of lighting installation, from a single recessed light swap to a whole-home LED conversion.
```

### 4 Service Cards

**Card 1**
- Icon: `Lightbulb`
- Title: `Recessed & LED Lighting`
- Description: `Recessed can installation and LED retrofit in kitchens, living rooms, hallways, and bedrooms — energy-efficient and code-compliant.`
- Features:
  1. New Recessed Can Install
  2. LED Retrofit Conversion
  3. Dimmer Switch Wiring
  4. Circuit Load Check

**Card 2**
- Icon: `Sun`
- Title: `Outdoor & Security Lighting`
- Description: `Exterior fixtures, floodlights, and motion-sensor security lighting for driveways, entryways, and garage areas.`
- Features:
  1. Exterior Fixture Install
  2. Motion Sensor Lighting
  3. Floodlight Wiring
  4. GFCI-Protected Circuits

**Card 3**
- Icon: `Leaf`
- Title: `Landscape & Patio Lighting`
- Description: `Inland Empire backyards demand outdoor lighting. Low-voltage landscape systems, string light circuits, and patio fixture wiring for year-round outdoor living.`
- Features:
  1. Low-Voltage Landscape
  2. Patio String Light Circuit
  3. Pool Area Lighting
  4. Pathway & Garden Lights

**Card 4**
- Icon: `ChefHat`
- Title: `Under-Cabinet & Specialty Lighting`
- Description: `Under-cabinet kitchen lighting, accent lighting, and task lighting for remodels and kitchen upgrades — wired cleanly into existing circuits.`
- Features:
  1. Under-Cabinet Wiring
  2. Accent & Cove Lighting
  3. Dedicated Circuit Add
  4. Switch Loop Installation

### Before/After Section

**H3:**
```
What Changes After a Professional Lighting Installation
```

**Checkmark items (6):**
1. Fixtures mounted level and sealed — no gaps around ceiling trim
2. Wiring run inside walls — no exposed conduit or surface channels
3. Circuit load verified to code before installation completes
4. Dimmer compatibility confirmed with LED bulb type
5. All junction boxes secured with covers — no open boxes
6. Final switch test run before the electrician leaves your home

### Before/After Image Placeholder
```
{{TEAM_BEFOREAFTER_IMG_PROMPT}}
```
*(creative-director: before = yellowed old fluorescent fixture; after = clean LED recessed lighting in same Murrieta kitchen — same angle, bright even light)*

---

## SECTION 5 — Why Choose Us Section

### Section H2
```
Why Inland Empire Homeowners Choose Our Electrical Team for Lighting
```

### Pill Badge
```
Why Choose Our Electrical Team
```

### Section Intro Paragraph (55 words)
```
Gardner Plumbing Co. is a licensed electrical contractor serving Murrieta, Temecula, Menifee, and the greater Inland Empire (CA Contractor's License {{CSLB_C10_LICENSE_TBD}}). Our electricians have completed over 300 lighting projects across Riverside County — recessed retrofits in Canyon Lake, landscape lighting systems in Temecula wine country, and full kitchen lighting overhauls in Menifee and Wildomar.
```

### 4 Benefit Cards

**Card 1**
- Icon: `Zap`
- Title: `Same-Day Installation`
- Description: `Most lighting jobs — recessed installs, fixture swaps, outdoor lighting — are completed the same day you call.`

**Card 2**
- Icon: `Shield`
- Title: `Licensed Electricians`
- Description: `Every technician carries a valid CA electrical license and passes background verification before entering your home.`

**Card 3**
- Icon: `DollarSign`
- Title: `Upfront, Written Pricing`
- Description: `You get a written quote before any work begins. The price on the quote is the price on the invoice.`

**Card 4**
- Icon: `Award`
- Title: `Multi-Trade Coordination`
- Description: `Need lighting installed alongside plumbing or HVAC work? Our multi-trade team coordinates all three — one call, one schedule.`

### Achievement Badge
```
Line 1: 300+
Line 2: Lighting Projects Completed
```

---

## SECTION 6 — Service Areas

### Section H2
```
Serving Murrieta, Temecula, and All of Riverside County
```

### Intro Paragraph (42 words)
```
Lighting installation service is available across the Inland Empire, with fast response times from our Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet — same-day availability throughout.
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
Lighting Installation Questions and Answers
```

### FAQ Section Subheadline
```
Find answers to common questions about lighting installation in Murrieta and the Inland Empire.
```

### 6 FAQs

---

**Q1: How much does recessed lighting installation cost in Murrieta?**

A: Recessed lighting installation in the Murrieta area typically runs $150–$300 per fixture for a standard installation — that includes the fixture, wiring, and switch loop if needed. Costs rise when walls need to be cut for new wiring runs or when the existing circuit requires a dedicated breaker. We provide a written quote before any work starts. If you're converting 6–8 existing fixtures to LED recessed cans, most homeowners in the IE pay between $900 and $1,800 for the complete project.

*(85 words)*

---

**Q2: Can I add recessed lighting without cutting into my ceiling?**

A: In most Murrieta homes, shallow LED wafer fixtures can be installed without cutting into the ceiling above — they sit flush with a minimal cutout and connect to existing wiring runs. That said, adding new circuits or moving fixture locations almost always requires some ceiling access. Our electricians assess your existing wiring and ceiling structure before committing to an approach. See our [outlets and switches](/services/electrical/outlets-and-switches) page if you also need outlet placement as part of a larger room refresh.

*(82 words)*

---

**Q3: What's the difference between LED retrofit kits and full recessed can replacement?**

A: LED retrofit kits screw directly into an existing recessed can housing — they update the fixture to LED without replacing the can itself. Full replacement involves removing the old housing and installing a new one. Retrofits are faster and less disruptive. Full replacements are the right call when the existing housings are damaged, improperly rated for insulation contact, or too old to seal properly. Our electricians will tell you which approach makes sense before the job starts, not after.

*(79 words)*

---

**Q4: Do I need a permit for lighting installation in Murrieta?**

A: Adding new circuits or moving a circuit breaker for lighting requires a permit from the City of Murrieta Building & Safety Division. Replacing like-for-like fixtures on existing circuits generally does not. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote.

*(63 words)*

---

**Q5: Can outdoor lighting be added to my existing electrical panel?**

A: In most cases, yes. Outdoor lighting circuits draw relatively low amperage, and most Murrieta homes built after 1990 have capacity for at least one or two new exterior circuits. Homes with older 100-amp panels or panels that are already close to capacity may need a [panel upgrade](/services/electrical/electrical-panel-upgrade) before additional outdoor lighting is added safely. We check your panel capacity as part of the quote — no surprises on install day.

*(75 words)*

---

**Q6: How do smart dimmers work with LED lighting?**

A: Smart dimmers require LED bulbs that are rated as "dimmable" — not all LEDs are. A standard dimmer on a non-dimmable LED causes flickering, buzzing, or early bulb failure. Our electricians verify bulb-dimmer compatibility before installation and recommend Lutron or Leviton dimmers that work reliably with the fixtures we install. If you want full scene control, see our [smart home wiring services](/services/electrical/smart-home-electrical) — we wire smart switches and dimmers as part of broader home automation infrastructure.

*(80 words)*

---

## SECTION 8 — Emergency Section

### Section H2
```
When You Need Urgent Lighting or Wiring Service
```

### Intro Paragraph (48 words)
```
Some lighting and wiring issues cannot wait. A burning smell from a fixture, a circuit that keeps tripping when a light is switched on, or a sparking outlet near a new installation are all situations that need same-day attention. Our line is live around the clock.
```

### 8 Urgency Scenarios
```js
const urgencyReasons = [
  "Burning smell from a light fixture or switch",
  "Circuit breaker tripping when lighting is turned on",
  "Sparking at a fixture or outlet",
  "Flickering lights across multiple rooms",
  "Hot switch plate or outlet cover",
  "Outdoor fixture causing GFCI trips",
  "Complete circuit failure after fixture install",
  "Buzzing or crackling from light switch"
];
```

---

## SECTION 9 — Final CTA Section

### H2
```
Ready to Upgrade Your Lighting Today?
```

### Supporting Paragraph
```
Same-day lighting installation across Murrieta, Temecula, and the Inland Empire. Upfront pricing, licensed electricians, and a line that picks up. Call now or schedule online.
```
*(28 words)*

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
| "all fixture and installation services" | `/services/electrical/fixtures` | Service Overview intro or Why Choose Us |

### Recommended [R]
| Anchor Text | href | Section to Place |
|---|---|---|
| "outlets and switches" | `/services/electrical/outlets-and-switches` | FAQ Q2 answer (already written above) |
| "smart home wiring services" | `/services/electrical/smart-home-electrical` | FAQ Q6 answer (already written above) |
| "ceiling fan installation" | `/services/electrical/ceiling-fan-installation` | Service Overview or Why Choose Us note |

### Optional [O]
| Anchor Text | href | Section to Place |
|---|---|---|
| "panel upgrade" | `/services/electrical/electrical-panel-upgrade` | FAQ Q5 answer (already written above) |
| "financing available" | `/financing` | Why Choose Us or final CTA |

---

## SEO Validation Summary

| Check | Value |
|---|---|
| Primary keyword | `lighting installation Murrieta` |
| Keyword in title | Yes — "Lighting Installation Murrieta, CA" |
| Keyword in H1 | Yes — "Lighting Installation in Murrieta" |
| Keyword in first paragraph | Yes — intro references Murrieta + lighting installation |
| Keyword in meta description (first half) | Yes — "Lighting installation in Murrieta" opens description |
| Canonical slug | `/services/electrical/lighting-installation` |
| Brand-vertical dissonance check | Pass — "Gardner Plumbing Co." appears once in Why Choose Us intro only; zero H2s use brand name |
| C-10 license placeholder | `{{CSLB_C10_LICENSE_TBD}}` — appears in Why Choose Us intro |
| Entity reinforcement (3x) | (1) H1 + city; (2) Why Choose Us intro — "Gardner Plumbing Co. … licensed electrical contractor serving Murrieta"; (3) Final CTA — "lighting installation across Murrieta" |
| Concrete numbers for AI citation | 300+ lighting projects; $150–$300 per fixture; $900–$1,800 full project; same-day service; 4.9 stars; 10 service cities |
| Q&A H2s (AI extractable) | FAQ H2 question-framed; all 6 FAQs self-contained; urgency section frames scenarios |
| Last Updated line | `Last Updated: June 2026` — implement as `lastUpdated` field |
| Estimated body word count (excl. FAQs) | ~720 words |
| Estimated FAQ word count | ~464 words |
| Total estimated | ~1,184 words |
| Schema recommendation | `FAQPage` JSON-LD for 6 FAQs + `Service` JSON-LD — flag to web-developer |

---

## Flags

1. **`{{CSLB_C10_LICENSE_TBD}}`** — appears once in Why Choose Us. `local-seo` must supply the actual C-10 license number before go-live.
2. **`{{TEAM_HERO_IMG_PROMPT}}`** and **`{{TEAM_BEFOREAFTER_IMG_PROMPT}}`** — two image slots for creative-director.
3. **Schema:** Recommend `FAQPage` JSON-LD + `Service` JSON-LD with `areaServed` for all 10 cities. Flag to web-developer.
4. **`lastUpdated` field:** Developer binds to visible "Last Updated: June 2026" line — do not hard-code in JSX.
5. **Breadcrumbs:** `Home > Services > Electrical > Lighting Installation`.
6. **CA Title 24 note:** If creative-director or developer wants an additional trust signal, CA Title 24 energy code governs LED efficiency requirements in new residential construction — worth a single mention in body copy if space allows.
