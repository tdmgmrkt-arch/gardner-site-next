# Thermostat Installation — Image Prompts
**Page:** `/services/hvac/thermostat-installation`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Close-medium photo of an HVAC technician's hands and upper body installing a smart thermostat on an interior wall, warm SoCal residential interior, soft window light from the side. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Holding a flathead screwdriver and attaching the thermostat base plate to the wall, wiring partially visible. Neutral painted drywall background, slight depth of field putting the thermostat sharp. 50mm equivalent lens, natural indoor daylight, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 122

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no brand name visible on thermostat face, no old round mercury thermostat (wrong era), no excessive lens flare
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician installing a smart thermostat on a wall in a Murrieta Inland Empire home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: an old beige rectangular programmable thermostat mounted on a white interior wall — chunky plastic housing, small LCD readout, yellowed from age, slightly crooked on the wall. RIGHT HALF: same wall location with a modern round smart thermostat — clean circular profile, large color display, sleek minimal design, new wall plate, looks factory-fresh. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Warm interior ambient light, neutral painted drywall background.
```

**Word count:** 99

### Negative Prompt

```
no people, no hands visible, no text overlay, no brand name visible, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no industrial or commercial setting
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after thermostat upgrade showing old beige thermostat replaced with modern smart thermostat by Gardner HVAC in the Inland Empire
```
