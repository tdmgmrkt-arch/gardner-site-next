# HVAC Menu Labels, Slugs & Microcopy
## Gardner Plumbing Co. — HVAC Services Dropdown (Phase 1 of 2)

> These are final. Slugs become live URLs in Phase 2. No renames after web-developer implements routes.

URL pattern for all pages: `/services/hvac/<slug>`

---

## Full Table

| # | Page Type | Menu Label | Slug (`/services/hvac/___`) | Microcopy Descriptor | Primary Target Keyword |
|---|-----------|------------|------------------------------|----------------------|------------------------|
| — | **HUB** | AC | `ac` | Cooling repair & installs | AC repair Murrieta |
| — | **HUB** | Heating | `heating` | Furnace & heat pump service | heating repair Murrieta |
| — | **HUB** | Indoor Air Quality | `indoor-air-quality` | Cleaner air, whole home | air quality Murrieta CA |
| 1 | Leaf — AC | AC Repair | `ac-repair` | 24/7 emergency cooling repair | AC repair Murrieta |
| 2 | Leaf — AC | AC Installation | `ac-installation` | New system, expert sizing | AC installation Murrieta |
| 3 | Leaf — AC | AC Maintenance | `ac-maintenance` | Tune-ups & seasonal prep | AC tune-up Murrieta |
| 4 | Leaf — AC | Mini-Split AC | `mini-split-ac` | Ductless cooling solutions | mini split AC Murrieta |
| 5 | Leaf — AC | Thermostat Installation | `thermostat-installation` | Smart & programmable installs | thermostat installation Murrieta |
| 6 | Leaf — Heating | Furnace Repair | `furnace-repair` | Fast diagnostics & repair | furnace repair Murrieta |
| 7 | Leaf — Heating | Furnace Installation | `furnace-installation` | New furnace, expert install | furnace installation Murrieta |
| 8 | Leaf — Heating | Furnace Maintenance | `furnace-maintenance` | Annual tune-ups & safety checks | furnace tune-up Murrieta |
| 9 | Leaf — Heating | Heat Pump Systems | `heat-pump-systems` | Efficient heating & cooling | heat pump installation Murrieta |
| 10 | Leaf — Heating | HVAC Maintenance Plans | `hvac-maintenance-plans` | Scheduled preventive service | HVAC maintenance plan Murrieta |
| 11 | Leaf — IAQ | Air Duct Cleaning | `air-duct-cleaning` | Whole-home duct cleaning | air duct cleaning Murrieta |
| 12 | Leaf — IAQ | Air Filtration Systems | `air-filtration-systems` | Whole-home air purification | whole home air filtration Murrieta |
| 13 | Leaf — IAQ | Whole-Home Humidifiers | `whole-home-humidifiers` | Balanced indoor humidity | whole home humidifier Murrieta |
| 14 | Leaf — IAQ | Whole-Home Dehumidifiers | `whole-home-dehumidifiers` | Moisture control solutions | whole home dehumidifier Murrieta |

---

## Slug & Label Rationale (deviations from user's original names)

- **AC hub slug: `ac`** — shorter and more direct than `air-conditioning`. Matches the leaf page pattern where `ac-repair`, `ac-installation`, etc. all lead with `ac`. Consistent entity signal across the sub-tree.
- **"Mini-Split / Ductless AC" → "Mini-Split AC"** — the slash reads poorly in a dropdown and adds visual noise. "Mini-Split AC" is the dominant search term (higher volume than "ductless AC" in the IE market). "Ductless" still appears in the microcopy descriptor and will appear in page body copy.
- **"AC Maintenance" (kept, not "Tune-Up")** — "AC Maintenance" is the GBP-aligned term. "Tune-up" appears in the target keyword and microcopy but not the menu label, keeping it consistent with "Furnace Maintenance" and the broader maintenance pattern across the site.
- **"HVAC Maintenance Plans" slug: `hvac-maintenance-plans`** — not `maintenance-plans` (already used at `/services/maintenance-plans` for plumbing). Collision avoided.
- **Hub microcopy descriptors** — kept under 5 words, matching the terse style of `{ desc: "24/7 response" }` and `{ desc: "Install & service" }` in the existing `serviceLinks` array.

---

## JSON Block — `hvacLinks` map for Header.tsx

Paste this directly into the `// ---------- Link maps ----------` section alongside `serviceLinks`, `commercialLinks`, and `emergencyLinks`.

```typescript
const hvacLinks: Record<string, string> = {
  // AC
  "AC Repair":              "/services/hvac/ac-repair",
  "AC Installation":        "/services/hvac/ac-installation",
  "AC Maintenance":         "/services/hvac/ac-maintenance",
  "Mini-Split AC":          "/services/hvac/mini-split-ac",
  "Thermostat Installation":"/services/hvac/thermostat-installation",

  // Heating
  "Furnace Repair":         "/services/hvac/furnace-repair",
  "Furnace Installation":   "/services/hvac/furnace-installation",
  "Furnace Maintenance":    "/services/hvac/furnace-maintenance",
  "Heat Pump Systems":      "/services/hvac/heat-pump-systems",
  "HVAC Maintenance Plans": "/services/hvac/hvac-maintenance-plans",

  // Indoor Air Quality
  "Air Duct Cleaning":          "/services/hvac/air-duct-cleaning",
  "Air Filtration Systems":     "/services/hvac/air-filtration-systems",
  "Whole-Home Humidifiers":     "/services/hvac/whole-home-humidifiers",
  "Whole-Home Dehumidifiers":   "/services/hvac/whole-home-dehumidifiers",
};
```

---

## Service Arrays for Dropdown Panels (name + desc — matches existing pattern at Header.tsx lines 345–368)

### AC Panel

```typescript
const acServices = [
  { name: "AC Repair",               desc: "24/7 emergency cooling repair" },
  { name: "AC Installation",         desc: "New system, expert sizing" },
  { name: "AC Maintenance",          desc: "Tune-ups & seasonal prep" },
  { name: "Mini-Split AC",           desc: "Ductless cooling solutions" },
  { name: "Thermostat Installation", desc: "Smart & programmable installs" },
];
```

### Heating Panel

```typescript
const heatingServices = [
  { name: "Furnace Repair",          desc: "Fast diagnostics & repair" },
  { name: "Furnace Installation",    desc: "New furnace, expert install" },
  { name: "Furnace Maintenance",     desc: "Annual tune-ups & safety checks" },
  { name: "Heat Pump Systems",       desc: "Efficient heating & cooling" },
  { name: "HVAC Maintenance Plans",  desc: "Scheduled preventive service" },
];
```

### Indoor Air Quality Panel

```typescript
const iaqServices = [
  { name: "Air Duct Cleaning",         desc: "Whole-home duct cleaning" },
  { name: "Air Filtration Systems",    desc: "Whole-home air purification" },
  { name: "Whole-Home Humidifiers",    desc: "Balanced indoor humidity" },
  { name: "Whole-Home Dehumidifiers",  desc: "Moisture control solutions" },
];
```

---

## Hub Routes (parent landing pages)

| Hub | Slug | Full URL |
|-----|------|----------|
| AC | `ac` | `/services/hvac/ac` |
| Heating | `heating` | `/services/hvac/heating` |
| Indoor Air Quality | `indoor-air-quality` | `/services/hvac/indoor-air-quality` |

> Note for Phase 2: hub pages at `/services/hvac/ac`, `/services/hvac/heating`, and `/services/hvac/indoor-air-quality` are GBP secondary category landing pages. Write them using the `secondary-category-page` SOP. Leaf pages are standard service pages.

---

## Phase 2 Flags

- **Brand-vertical dissonance rule applies to all 17 pages.** Section H2s must NOT use "Gardner Plumbing" as a subject. Use "Our HVAC Team," "Inland Empire homeowners," or the generic contractor framing. Keep one canonical entity mention per page body.
- **`/services/hvac/air-duct-cleaning` is a new slug.** If a plumbing-section link to an existing `/services/air-duct-cleaning` page exists anywhere on the site, web-developer must add a `301` redirect or update the internal link during Phase 2 implementation.
- **`/services/hvac/hvac-maintenance-plans` is distinct from `/services/maintenance-plans`** (plumbing). Both pages can coexist. Internal links must point to the correct vertical.
