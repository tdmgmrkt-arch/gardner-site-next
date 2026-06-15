# AC Installation — Image Prompts
**Page:** `/services/hvac/ac-installation`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician installing a brand-new outdoor AC condenser unit on a clean concrete pad beside a Southern California suburban home, midday directional sunlight, warm SoCal daylight. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Crouching and tightening a fitting with a torque wrench, fresh lineset visible, stucco wall behind, desert-dry landscaping framing the scene. Focused and mid-task — not posed. Shallow depth of field, 50mm equivalent lens, slight background bokeh on stucco. Cinematic realism, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 126

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no excessive lens flare, no overly bright exposure, no green grass lawn (wrong region), no snow, no city skyline, no old or rusted equipment
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician installing a new AC condenser unit at a Murrieta Inland Empire home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: empty concrete equipment pad beside a stucco suburban home — bare pad, disconnected lineset stub at wall, slightly weathered. RIGHT HALF: the same concrete pad now with a shiny new residential AC condenser unit installed — clean lineset running neatly up the stucco wall, new electrical disconnect box, unit looks factory-fresh. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Warm SoCal natural daylight, muted stucco background.
```

**Word count:** 95

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no indoor setting
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after AC installation showing empty concrete pad replaced with new condenser unit by Gardner HVAC in the Inland Empire
```
