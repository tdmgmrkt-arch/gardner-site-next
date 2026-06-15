# AC Maintenance — Image Prompts
**Page:** `/services/hvac/ac-maintenance`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician cleaning an outdoor AC condenser coil with a soft-bristle brush in a sunny Southern California residential backyard, bright directional daylight. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Leaning over the open top of the condenser unit, brushing debris from the coil fins, focused posture. Concrete pad underfoot, stucco house wall and desert-dry shrubs in background. 50mm equivalent lens, shallow depth of field, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 121

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no excessive lens flare, no green grass lawn, no snow, no city skyline, no water hose spraying (different service)
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician cleaning AC condenser coils during tune-up service in Murrieta Inland Empire
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: close-up of a residential AC condenser coil with heavy dust buildup, dead leaves, cottonwood debris packed between fins, surface grime on the aluminum, flat light showing every detail of the fouling. RIGHT HALF: the identical coil section after professional cleaning — fins clear, aluminum bright, no debris, looks near-new. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Warm neutral background, concrete pad visible at bottom edge.
```

**Word count:** 98

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no full-unit wide shot (this is a close-up coil detail)
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after AC condenser coil cleaning showing debris buildup removed during Gardner HVAC maintenance service in the Inland Empire
```
