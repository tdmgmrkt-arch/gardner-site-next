# Electrical Menu Labels, Slugs & Microcopy
## Gardner Plumbing Co. — Electrical Services Dropdown (Phase 1 of 2)

> These are final. Slugs become live URLs in Phase 2. No renames after web-developer implements routes.

URL pattern for all pages: `/services/electrical/<slug>`

---

## Full Table

| # | Page Type | Menu Label | Slug (`/services/electrical/___`) | Microcopy Descriptor | Primary Target Keyword |
|---|-----------|------------|-----------------------------------|----------------------|------------------------|
| — | **VERTICAL HUB** | Electrical | *(index — `/services/electrical`)* | Licensed electricians, IE | electrical services Murrieta |
| — | **SUB-HUB** | Fixtures | `fixtures` | Lighting, fans & outlets | electrical installation Murrieta |
| — | **SUB-HUB** | Power & Upgrades | `power` | Panels, rewiring & EV | electrical panel upgrade Murrieta |
| — | **SUB-HUB** | Repairs & Safety | `repairs` | Troubleshooting & inspections | electrical repair Murrieta |
| 1 | Leaf — Fixtures | Lighting Installation | `lighting-installation` | Indoor & outdoor installs | lighting installation Murrieta |
| 2 | Leaf — Fixtures | Outlets & Switches | `outlets-and-switches` | Upgrades, GFCI & USB | outlet installation Murrieta |
| 3 | Leaf — Fixtures | Ceiling Fans | `ceiling-fan-installation` | Install, replace & rewire | ceiling fan installation Murrieta |
| 4 | Leaf — Fixtures | Smart Home Solutions | `smart-home-electrical` | Automation & smart devices | smart home electrician Murrieta |
| 5 | Leaf — Fixtures | Pool & Spa Wiring | `pool-spa-wiring` | Code-compliant pool circuits | pool spa wiring Murrieta |
| 6 | Leaf — Power | Panel & Service Upgrade | `electrical-panel-upgrade` | 200A upgrades & replacements | electrical panel upgrade Murrieta |
| 7 | Leaf — Power | Home Rewiring | `home-rewiring` | Full & partial rewire service | home rewiring Murrieta |
| 8 | Leaf — Power | Remodeling & New Construction | `remodeling-electrical` | Rough-in & finish wiring | electrical contractor Murrieta remodel |
| 9 | Leaf — Power | EV Charger Installation | `ev-charger-installation` | Level 2 home EV charging | EV charger installation Murrieta |
| 10 | Leaf — Power | Generator Installation | `generator-installation` | Standby & portable hookup | generator installation Murrieta |
| 11 | Leaf — Repairs | Electrical Repairs | `electrical-repairs` | Diagnostics & fast fixes | electrical repair Murrieta |
| 12 | Leaf — Repairs | Emergency Electrical | `emergency-electrical` | 24/7 electrical response | emergency electrician Murrieta |
| 13 | Leaf — Repairs | Safety Inspections | `electrical-safety-inspection` | Code audits & panel checks | electrical inspection Murrieta |
| 14 | Leaf — Repairs | Surge Protection | `surge-protection` | Whole-home surge defense | surge protection Murrieta |

---

## Slug & Label Rationale (deviations from user spec)

**Sub-hub slugs — short over descriptive.**
Chose `fixtures`, `power`, and `repairs` (single-word where possible, two-word where needed) to match the HVAC pattern (`ac`, `heating`, `indoor-air-quality`). Short slugs keep URLs clean (`/services/electrical/fixtures/lighting-installation` vs. `/services/electrical/installation-and-fixtures/lighting-installation`). SEO value lives on the leaf pages, not the sub-hub slug.

**"Maintenance, Safety & Repairs" sub-hub display label shortened to "Repairs & Safety".**
"Maintenance, Safety & Repairs" is 4+ words and breaks 3-column dropdown header layout. "Repairs & Safety" is concise, leads with the higher-search-intent word ("repairs"), and covers the same scope. "Maintenance" is implicit in safety inspections and surge protection.

**"Electrical Panels & Service Upgrades" → "Panel & Service Upgrade" (menu label) + `electrical-panel-upgrade` (slug).**
The user's name is accurate but 5 words in a dropdown. "Panel & Service Upgrade" scans faster. Slug leads with `electrical-panel-upgrade` — the dominant search term in this market. "Service upgrade" (utility language) is woven into page body copy.

**"Electrical Repairs & Troubleshooting" → "Electrical Repairs" (menu label) + `electrical-repairs` (slug).**
"& Troubleshooting" adds length without adding menu scannability — every repair service involves troubleshooting. Dropped from label only; page H1 and body use the full phrase for keyword coverage.

**"Ceiling Fans" → `ceiling-fan-installation` (slug).**
"Ceiling fans" as a slug reads like a product category, not a service. `ceiling-fan-installation` is keyword-leading and matches the search term. Menu label stays "Ceiling Fans" — short and scannable.

**"Smart Home Solutions" → `smart-home-electrical` (slug).**
`smart-home-solutions` is generic and off-entity for an electrical contractor. `smart-home-electrical` ties the service to the trade for both Google entity association and AI citation. Menu label stays "Smart Home Solutions" — it's consumer-friendly language.

**"Remodeling & New Construction" menu label kept; slug shortened to `remodeling-electrical`.**
The full phrase is acceptable in a dropdown (4 words, familiar). Slug drops "new-construction" to keep it clean — new construction wiring is a secondary use case covered in the page body. Primary search intent is remodel electrical work.

**"Safety Inspections" → `electrical-safety-inspection` (slug).**
Prefixing with `electrical-` prevents slug ambiguity (site could eventually have plumbing inspection pages). Menu label stays "Safety Inspections" — the modifier is clear from context inside the Electrical dropdown.

---

## JSON Block — `electricalLinks` map for Header.tsx

Paste into the `// ---------- Link maps ----------` section alongside `serviceLinks`, `hvacLinks`, etc.

```typescript
const electricalLinks: Record<string, string> = {
  // Fixtures
  "Lighting Installation":      "/services/electrical/lighting-installation",
  "Outlets & Switches":         "/services/electrical/outlets-and-switches",
  "Ceiling Fans":               "/services/electrical/ceiling-fan-installation",
  "Smart Home Solutions":       "/services/electrical/smart-home-electrical",
  "Pool & Spa Wiring":          "/services/electrical/pool-spa-wiring",

  // Power & Upgrades
  "Panel & Service Upgrade":    "/services/electrical/electrical-panel-upgrade",
  "Home Rewiring":              "/services/electrical/home-rewiring",
  "Remodeling & New Construction": "/services/electrical/remodeling-electrical",
  "EV Charger Installation":    "/services/electrical/ev-charger-installation",
  "Generator Installation":     "/services/electrical/generator-installation",

  // Repairs & Safety
  "Electrical Repairs":         "/services/electrical/electrical-repairs",
  "Emergency Electrical":       "/services/electrical/emergency-electrical",
  "Safety Inspections":         "/services/electrical/electrical-safety-inspection",
  "Surge Protection":           "/services/electrical/surge-protection",
};
```

---

## Service Arrays for Dropdown Panels (name + desc — matches `acServices` pattern in Header.tsx)

### Fixtures Panel

```typescript
const fixturesServices: { name: string; desc: string }[] = [
  { name: "Lighting Installation",   desc: "Indoor & outdoor installs" },
  { name: "Outlets & Switches",      desc: "Upgrades, GFCI & USB" },
  { name: "Ceiling Fans",            desc: "Install, replace & rewire" },
  { name: "Smart Home Solutions",    desc: "Automation & smart devices" },
  { name: "Pool & Spa Wiring",       desc: "Code-compliant pool circuits" },
];
```

### Power & Upgrades Panel

```typescript
const powerServices: { name: string; desc: string }[] = [
  { name: "Panel & Service Upgrade",        desc: "200A upgrades & replacements" },
  { name: "Home Rewiring",                  desc: "Full & partial rewire service" },
  { name: "Remodeling & New Construction",  desc: "Rough-in & finish wiring" },
  { name: "EV Charger Installation",        desc: "Level 2 home EV charging" },
  { name: "Generator Installation",         desc: "Standby & portable hookup" },
];
```

### Repairs & Safety Panel

```typescript
const repairsServices: { name: string; desc: string }[] = [
  { name: "Electrical Repairs",    desc: "Diagnostics & fast fixes" },
  { name: "Emergency Electrical",  desc: "24/7 electrical response" },
  { name: "Safety Inspections",    desc: "Code audits & panel checks" },
  { name: "Surge Protection",      desc: "Whole-home surge defense" },
];
```

---

## Hub Routes (parent landing pages)

| Hub | Slug | Full URL |
|-----|------|----------|
| Vertical hub | *(index)* | `/services/electrical` |
| Fixtures | `fixtures` | `/services/electrical/fixtures` |
| Power & Upgrades | `power` | `/services/electrical/power` |
| Repairs & Safety | `repairs` | `/services/electrical/repairs` |

> Note for Phase 2: sub-hub pages are GBP secondary category landing pages. Write them using the `secondary-category-page` SOP. Leaf pages are standard service pages. The vertical hub (`/services/electrical`) follows the `homepage.md` SOP structure adapted for a vertical index.

---

## Phase 2 Flags

| Flag | Detail |
|------|--------|
| **Brand-vertical dissonance — stronger than HVAC** | Section H2s on ALL 18 electrical pages must NOT use "Gardner Plumbing" as a subject. Use "Our electrical team," "Inland Empire homeowners," or trade-generic framing. One canonical entity mention per page body (intro or CTA block only). |
| **`/services/electrical/emergency-electrical` vs. `/services/plumbing/emergency-service`** | Plumbing emergency page already exists at `/services/plumbing/emergency-service`. Electrical emergency is a distinct service — no redirect needed, but internal links must point to the correct vertical. Confirm no cross-linking confusion during Phase 2 implementation. |
| **`/services/electrical/remodeling-electrical` scope** | Page covers both remodel and new construction wiring. H1 leads with remodel (primary search intent); new construction is a secondary H2. Brief Phase 2 writer accordingly so the page doesn't drift into generic contractor content. |
| **EV Charger page — permit callout required** | Murrieta / Riverside County requires a permit for Level 2 EV charger installation. Page body must reference this — it's a local credibility signal and AI citation trigger. |
| **Pool & Spa Wiring — NEC 680 reference** | Pool wiring pages that cite NEC Article 680 (the actual code governing pool electrical) rank and cite better than generic pages. Flag for Phase 2 writer. |
| **`/services/electrical/electrical-panel-upgrade` — SoCal Edison angle** | Panel upgrade pages in SoCal benefit from mentioning SoCal Edison service entrance requirements and their rebate programs. Flag for Phase 2 writer. |
| **State license number** | If Gardner holds a C-10 (Electrical) contractor license separate from the C-36 (Plumbing), include the license number on the vertical hub and sub-hub pages. Confirm with client before Phase 2 writing begins. |
| **`isElectricalOpen` state + `electricalTimeoutRef`** | Web-developer will need to add a third dropdown state and timeout ref pair in Header.tsx, matching the `isHvacOpen` / `hvacTimeoutRef` pattern at lines 14 and 18. |
