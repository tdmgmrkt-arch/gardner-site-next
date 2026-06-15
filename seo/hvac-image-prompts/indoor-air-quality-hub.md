# Indoor Air Quality Hub — Image Prompts
**Page:** `/services/hvac/indoor-air-quality`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician standing in a clean modern Southern California interior holding an air quality monitoring instrument at chest height, reading the device display with a focused expression. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Modern clean home interior — neutral walls, natural window light, uncluttered. The IAQ monitor is a compact handheld device, display panel facing the viewer. Bright warm interior daylight. 50mm equivalent lens, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 119

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no industrial dust mask theatrics, no exaggerated haze or fog, no outdoor setting, no excessive lens flare
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician measuring indoor air quality with a monitoring instrument in a Murrieta Inland Empire home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: a handheld air quality meter lying flat showing a red or orange poor air quality reading on its digital display, placed on a neutral surface. RIGHT HALF: the same air quality meter showing a green good air quality reading on its display, same surface and framing. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Soft neutral ambient light, clean gray or white tabletop, device sharp and centered.
```

**Word count:** 88

### Negative Prompt

```
no people, no hands visible, no text overlay beyond device display, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no dramatic hazy interior background, no industrial setting
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after indoor air quality improvement showing poor air quality reading improved to good by Gardner HVAC service in the Inland Empire
```
