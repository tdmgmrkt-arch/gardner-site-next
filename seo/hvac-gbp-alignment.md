# Gardner Plumbing Co. — HVAC GBP Alignment Advisory
**Date:** 2026-06-12
**Author:** local-seo agent
**Phase:** 1 advisory (pre-launch)
**Purpose:** Validate proposed HVAC website IA against GBP category structure before Phase 2 content build.

---

## 1. GBP Category Recommendations Post-Expansion

### Primary Category — Do Not Touch
**Plumber** stays as primary. This is the established map pack signal for the revenue-driving trade.
Changing it for HVAC expansion would be a category suicide move.

### Secondary Categories to Add (HVAC block)

Recommend adding **3** HVAC secondary categories from the slot budget:

| # | Category Name (exact GBP string) | Rationale |
|---|---|---|
| 1 | **Air conditioning contractor** | Unlocks AC repair/install/maintenance query clusters. High-intent summer traffic. |
| 2 | **Heating contractor** | Unlocks furnace repair/install and heat pump queries. Inland Empire winters are mild but real. |
| 3 | **Air duct cleaning service** | Dedicated category for the IAQ vertical. Separate query pool from the AC/heating categories — worth its own slot. |

**On "HVAC contractor" specifically:** Add it *only if* a slot is available after current plumbing secondaries are counted. Here is the overlap logic:

- "HVAC contractor" catches broad queries that neither "Air conditioning contractor" nor "Heating contractor" individually owns (e.g., "HVAC company near me," "HVAC technician").
- However, if the slot budget is tight, "Air conditioning contractor" + "Heating contractor" together cover more specific intent than "HVAC contractor" alone.
- **Recommended priority if you have the slot:** Add "HVAC contractor" as a 4th HVAC secondary. If forced to choose between it and either of the two above, drop it — specificity wins.

**Action required before implementing:** Share the current secondary category list so we can audit the slot count precisely. GBP allows 9 secondary categories. If Gardner already has 6+ plumbing secondaries (e.g., Drainage service, Water heater installation service, Septic system service, Bathroom remodeler, Emergency plumber), the math gets tight. Do not drop established plumbing categories for HVAC — protect the core revenue.

---

## 2. GBP Services List — Page Name vs. GBP Service Name Flags

The GBP Services panel attaches services to the category they live under. Each leaf page should have a matching Services entry. Flags below are where the natural GBP service name differs from the proposed page name.

### AC hub — category: "Air conditioning contractor"
| Page Name | GBP Service Name | Flag |
|---|---|---|
| AC Repair | AC Repair | No change |
| AC Installation | AC Installation | No change |
| AC Maintenance | AC Tune-Up / AC Maintenance | GBP commonly displays "AC Tune-Up" — use both in the service description; page name is fine |
| Mini-Split / Ductless AC | Ductless Mini-Split Installation | GBP services tend to be noun-heavy — trim the slash, lean toward "Ductless Mini-Split Systems" |
| Thermostat Installation | Thermostat Installation | No change — **see note below on category mapping** |

### Heating hub — category: "Heating contractor"
| Page Name | GBP Service Name | Flag |
|---|---|---|
| Furnace Repair | Furnace Repair | No change |
| Furnace Installation | Furnace Installation | No change |
| Furnace Maintenance | Furnace Tune-Up / Furnace Maintenance | Same as AC Maintenance — both terms are valid; use "Furnace Tune-Up" in the GBP description if space allows |
| Heat Pump Systems | Heat Pump Installation | GBP services are action-oriented — "Heat Pump Systems" reads as a product category, not a service. Rename GBP service entry to "Heat Pump Installation & Repair" |
| HVAC Maintenance Plans | HVAC Maintenance Plans | No change — but see note on category placement below |

### IAQ hub — category: "Air duct cleaning service"
| Page Name | GBP Service Name | Flag |
|---|---|---|
| Air Duct Cleaning | Air Duct Cleaning | No change |
| Air Filtration Systems | Air Filtration Installation | Same rename logic as Heat Pump — add action verb in GBP |
| Whole-Home Humidifiers | Whole-Home Humidifier Installation | Add action verb |
| Whole-Home Dehumidifiers | Whole-Home Dehumidifier Installation | Add action verb |

---

## 3. Three-Parent Grouping Sanity Check

**AC / Heating / IAQ maps cleanly to GBP.** Google's category structure has distinct buckets for air conditioning, heating, and air quality — you are not fighting the taxonomy. No rearrangement needed at the hub level.

**Two items worth flagging:**

**Thermostat Installation** — this page sits in the AC hub, but thermostats control both heating and cooling. In GBP Services, attach it to "Air conditioning contractor" (primary HVAC category) rather than heating, since AC is the higher-traffic vertical in Inland Empire's climate. The website page location in /hvac/ac is fine — just be consistent in GBP service placement.

**HVAC Maintenance Plans** — currently placed in the Heating hub. Maintenance plans span both AC and heating, so this is slightly awkward. Two options:
- Option A (recommended): Move the website page to a flat `/services/hvac/maintenance-plans` URL (outside the heating hub) and attach the GBP service to "HVAC contractor" if that category is added, or to "Air conditioning contractor" as the dominant-season category. This makes the page naturally linkable from both AC and Heating hub pages without it feeling like it belongs to one.
- Option B: Leave it in the Heating hub for now — it is not wrong, just mildly suboptimal for coherence. Revisit if the page underperforms.

---

## 4. Brand-Vertical Dissonance — "Gardner Plumbing" Doing HVAC

**The risk is real but manageable.** Specific GBP considerations:

**Map pack click-through:** A searcher looking for "AC repair Murrieta" who sees "Gardner Plumbing Co." in the map pack may hesitate — the brand name signals plumbing. This is a CTR tax, not a rankings problem. GBP does not penalize you for serving multiple trades, but user trust signals (reviews, photos) need to reflect HVAC work to reduce that hesitation.

**Review dilution signals:** If 95% of Gardner's existing GBP reviews mention pipes, drains, and water heaters, early HVAC customers will see a profile that looks like a plumbing company. Mitigate this by:
- Getting HVAC-specific reviews as soon as Phase 2 launches (coordinate with ghl-engineer on a targeted review request flow for HVAC job completions specifically)
- Adding HVAC photos to the profile immediately at launch — Google's photo algorithm reads image context; it matters for what queries the profile surfaces for

**"Plumbing" in the business name:** Google cannot be forced to ignore the business name. Long-term, if HVAC becomes a material revenue line, the client should consider whether a DBA like "Gardner Plumbing & Air" or "Gardner Home Services" is worth exploring. This is a client conversation, not a GBP configuration decision — flag to client-comms when appropriate. Do not keyword-stuff the GBP name field — use only the legal/DBA name.

**This is the same pattern as water-heater-sos expanding into HVAC.** Same brand-vertical tension applies. The fix is the same: build the GBP signals (photos, reviews, posts, services) to reflect HVAC faster than the brand name confuses.

---

## 5. GBP Post Timing — HVAC Launch Cadence

Do not announce everything at once. Staged by conversion value and search volume:

**Week 1–2 (launch week):** One post per week announcing AC services broadly. Keep it local and seasonal — June in Murrieta means AC is the hook. No mention of IAQ yet.

**Week 3–4:** Shift post topics to specific AC services (AC repair, AC tune-up). Let the auto-poster's `industry_context` be updated to include HVAC language so daily posts begin weaving in cooling-season content.

**Month 2:** Begin Heating posts (furnace services, heat pump). Inland Empire gets real heating calls in November–January but the shoulder season starts in October — do not wait.

**Month 2–3:** Introduce IAQ posts (air duct cleaning, air filtration). IAQ is lower search volume and should not lead the launch.

**Ongoing:** The auto-poster handles daily cadence once `industry_context` is updated. Reserve manual posts for:
- Announcing each major service hub going live (one post per hub)
- Any HVAC-specific seasonal events (first heat wave, first cold snap)
- Any offer or financing tied to HVAC

**Auto-poster `industry_context` update (Phase 2 trigger):** When Phase 2 launches, update Gardner's `industry_context` to include the HVAC expansion. Draft a revised fragment at that time and run `GET /preview` before going live.

---

## Phase 2 Action Items (for reference when work comes through)

- [ ] Get current secondary category list from client — count available slots
- [ ] Add 3 HVAC secondary categories (AC contractor, Heating contractor, Air duct cleaning service) + HVAC contractor if slot available
- [ ] Add GBP Services entries for all 14 leaf pages using names from Section 2 above
- [ ] Upload HVAC photos to GBP (minimum 10 at launch — AC units, furnaces, ductwork, team doing HVAC work)
- [ ] Coordinate with ghl-engineer on HVAC-specific review request trigger
- [ ] Update auto-poster `industry_context` for Gardner to reflect HVAC expansion
- [ ] Decide on HVAC Maintenance Plans page URL (Section 3 Option A vs B)
