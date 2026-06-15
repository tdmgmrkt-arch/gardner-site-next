# Mini-Split AC — Image Prompts
**Page:** `/services/hvac/mini-split-ac`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician on a short stepladder mounting an indoor mini-split air handler head high on an interior wall of a modern Southern California home, warm ambient interior light supplemented by a nearby window. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Holding a torpedo level against the mounting bracket with one hand, drill holstered. Clean drywall, neutral paint, modern baseboard trim. Focused, mid-task. 50mm equivalent lens, natural indoor daylight, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 122

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no excessive lens flare, no outdoor setting, no window AC unit (wrong product), no central air registers
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician mounting a mini-split air handler on an interior wall in a Murrieta Inland Empire home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: blank interior drywall — clean but empty, painted a neutral greige, no HVAC equipment present, just a wall with baseboard trim at the bottom, warm ambient light. RIGHT HALF: same wall section now with a sleek white ductless mini-split air handler mounted high, refrigerant lineset cover running neatly down to the baseboard, unit looks professionally installed. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Residential interior feel.
```

**Word count:** 96

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no window AC unit, no central duct register
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after mini-split AC installation showing blank wall replaced with installed ductless air handler by Gardner HVAC in the Inland Empire
```
