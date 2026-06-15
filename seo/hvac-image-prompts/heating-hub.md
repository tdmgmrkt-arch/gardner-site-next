# Heating Hub — Image Prompts
**Page:** `/services/hvac/heating`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician standing in a residential garage utility area with one hand resting on a furnace cabinet, confident authoritative stance, visible ductwork and metal flue pipe behind him conveying the full heating system. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Furnace cabinet beside him is clean and modern, supply duct collar at top, concrete floor, garage utility space. Ambient fluorescent garage light with slight warm fill. 50mm equivalent lens, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 122

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no visible gas flames or fire, no outdoor setting, no posed thumbs-up or smile-at-camera pose, no excessive lens flare
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician standing beside a residential furnace in an Inland Empire home utility area
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: an old 80-percent efficiency furnace cabinet in a utility closet — dated rectangular housing, conventional B-vent flue pipe going up, dusty exterior, older-style filter slot. RIGHT HALF: the same closet space with a new 95-percent high-efficiency furnace — modern cabinet, two PVC pipes for intake and exhaust going through the wall, clean fresh installation. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Fluorescent utility light, concrete floor visible at bottom.
```

**Word count:** 96

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no gas flames or fire, no outdoor unit in this shot, no heat pump (furnace only comparison here)
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after heating upgrade showing old 80-percent efficiency furnace replaced with new high-efficiency unit by Gardner HVAC in the Inland Empire
```
