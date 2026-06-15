# Furnace Installation — Image Prompts
**Page:** `/services/hvac/furnace-installation`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician carefully guiding a new upflow furnace cabinet into position inside a residential utility closet or garage alcove, hands braced on the sides of the unit, steady deliberate posture. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Brand-new furnace in white or gray metal cabinet, flue collar visible at top, concrete floor beneath. Ambient garage fluorescent light with slight warm fill. 50mm equivalent lens, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 121

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no visible gas flames or fire, no two-person team shot (single tech only), no outdoor setting, no excessive lens flare
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician positioning a new furnace during installation at a Murrieta Inland Empire home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: an old residential furnace cabinet in a utility closet — weathered sheet metal, dust-coated, older-style rectangular housing, possibly a vent flue showing age. RIGHT HALF: the same closet space now occupied by a clean new high-efficiency furnace — modern white or light gray cabinet, PVC flue pipes, brand-new sheet metal collar, factory-fresh appearance. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Fluorescent utility light, concrete floor at bottom edge.
```

**Word count:** 96

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no gas flames or fire, no outdoor setting
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after furnace installation showing old worn furnace replaced with new high-efficiency unit by Gardner HVAC in the Inland Empire
```
