# Furnace Maintenance — Image Prompts
**Page:** `/services/hvac/furnace-maintenance`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician kneeling in front of an open furnace cabinet, shining a flashlight into the burner assembly for a close inspection, careful preventive-maintenance posture. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Furnace panel removed, neat burner ports and heat exchanger visible, no signs of damage — this is a clean, working unit. Residential garage or utility closet setting, concrete floor. 50mm equivalent lens, cool ambient light with warm flashlight fill, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 124

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no visible gas flames or fire, no broken or burnt components (this is maintenance, not repair), no excessive lens flare
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician inspecting furnace burner assembly during annual maintenance service in Murrieta Inland Empire
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: close-up of a furnace burner assembly showing a dusty, neglected state — dust and lint accumulation on burner ports and surrounding surfaces, slight discoloration. RIGHT HALF: the same burner assembly after professional cleaning — ports clear, surfaces wiped clean, metal looks well-maintained. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral dark furnace-interior background, warm ambient work-light tone.
```

**Word count:** 87

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no gas flames or fire visible, no burn damage or failed components (this is maintenance, not repair)
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after furnace maintenance showing dusty burner assembly cleaned during Gardner HVAC tune-up service in the Inland Empire
```
