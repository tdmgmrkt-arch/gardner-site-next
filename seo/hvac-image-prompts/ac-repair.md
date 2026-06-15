# AC Repair — Image Prompts
**Page:** `/services/hvac/ac-repair`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician kneeling beside a residential AC condenser unit in a Southern California suburban backyard, midday directional sunlight, golden-hour-adjacent warmth. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Holding a refrigerant manifold gauge set, hose connected to service port. Calm, focused posture — not posed, mid-task. Shallow depth of field, 50mm equivalent lens, slight background bokeh on stucco house wall and desert-dry landscaping. Cinematic realism, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 121

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim. Do not paraphrase per page — copy/paste.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no cartoon, no illustration, no text overlay, no watermark, no excessive lens flare, no overly bright exposure, no green grass lawn (wrong region), no snow, no city skyline
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — these show the tech in uniform in natural daylight, which matches the field-work posture this slot requires.

The reference image carries face and uniform style data. Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner HVAC technician diagnosing AC condenser unit at a Murrieta home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** The image must be a single frame split cleanly at the vertical centerline. Left half shows damaged/dirty state. Right half shows the same component clean and restored. React overlays add "BEFORE" and "AFTER" labels — the image itself does not need text. Same camera angle, same lighting across both halves.

**No reference image required — this is a component-only shot with no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: close-up of a dirty residential AC condenser coil — bent fins, heavy dust buildup, dead leaves packed into the unit, slight surface rust on housing, flat overcast light exposing grime. RIGHT HALF: identical condenser coil after professional service — fins straightened, coil clean and bright aluminum, housing wiped down, looks near-new. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Muted background — concrete pad, wood fence.
```

**Word count:** 95

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no refrigerant gauges (this is the coil itself)
```

### Reference Image Guidance

No reference image required. Submit the prompt alone. This is a hardware/equipment composition — the Imagen model handles it without a face reference.

### Suggested Alt Text

```
Before and after AC condenser coil cleaning showing dirt buildup removed by Gardner HVAC service
```

---

## Phase 2 Template Reuse Note

This two-slot structure (hero + before/after) is the visual template for all 18 HVAC pages and can extend to the 18 electrical pages in Phase 3. Here is what stays constant versus what changes per page.

**Stays constant across all pages:**

- Output dimensions: 1000 × 600 px hero, 800 × 400 px before/after
- Compositional rule: bottom-left of hero is reserved for the badge overlay
- Lighting vocabulary: Southern California natural daylight, warm directional, no studio
- **Uniform language — VERBATIM from `seo/brand/team-uniform-spec.md`:** *"light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip"*. Do not paraphrase. The uniform anchors brand consistency across the entire site.
- Environment language: Inland Empire residential settings (stucco walls, concrete, desert-dry landscaping)
- Lens language: 50mm equivalent for hero (tech in context), 35mm straight-on for before/after (documentation)
- Reference image attachment: the user attaches the two real Gardner team reference photos (provided 2026-06-12) directly in Gemini at generation time
- Negative prompt core: the stock-photo-look, white lab coat, cartoon, text overlay blocklist carries forward unchanged

**Changes per page:**

- The specific equipment or scenario (condenser → furnace → ductwork → mini-split → air handler, etc.)
- The problem state in the before half (ice buildup for frozen coil, burnt capacitor for capacitor replacement, etc.)
- The action the tech is performing (manifold gauges for AC repair, flue inspection for furnace, duct sealing for air duct work, etc.)
- The alt text (always include the specific service name and a location signal — city or "Inland Empire")
- The page slug in the file name (this file is `ac-repair.md`; next would be `ac-installation.md`, `furnace-repair.md`, etc.)

To generate a new page's prompts, duplicate this file, update the three variable sections above, and adjust the negative prompt only if the new service has unique avoidance needs (e.g., electrical pages should add "no gas flames" to negatives).
