# AC Hub — Image Prompts
**Page:** `/services/hvac/ac`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Portrait-style photo of an HVAC technician standing confidently beside a clean modern residential AC condenser unit on a concrete pad at a Southern California suburban home, Gardner service van slightly out of focus in the background, natural directional SoCal afternoon sunlight. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Relaxed authoritative stance, not posed or stiff — natural weight shift, arms at sides. Stucco house wall and desert-dry landscaping framing the scene. 50mm equivalent lens, shallow depth of field. Documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 129

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no excessive lens flare, no green grass lawn, no snow, no city skyline, no posed thumbs-up or smile-at-camera pose
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician standing beside a residential AC condenser unit in the Inland Empire
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: an old worn residential AC condenser unit on a concrete pad — rusted housing, bent fins, weathered plastic panels, clearly aging. RIGHT HALF: the same concrete pad with a brand-new modern AC condenser installed — clean white or gray housing, fresh refrigerant lines, new electrical disconnect, looks factory-fresh. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Warm SoCal natural daylight, stucco wall in background.
```

**Word count:** 88

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no indoor setting, no window AC unit
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after AC replacement showing old worn condenser unit replaced with new modern unit by Gardner HVAC in the Inland Empire
```
