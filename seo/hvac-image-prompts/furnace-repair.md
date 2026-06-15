# Furnace Repair — Image Prompts
**Page:** `/services/hvac/furnace-repair`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician crouching in front of an open furnace cabinet in a residential garage, probing an internal component with a digital multimeter, focused troubleshooting posture. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Furnace access panel removed and leaning against the wall, interior wiring and burner assembly visible. Garage concrete floor, utility shelving in soft background. 50mm equivalent lens, cool ambient garage light with warm work-light fill, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 122

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no visible gas flames or fire, no open flame depiction, no excessive lens flare, no outdoor setting
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician diagnosing a furnace with a multimeter during repair service in Murrieta Inland Empire
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: close-up of a furnace ignitor or control board component showing burn marks, corrosion, and discoloration — clear sign of failure, flat even light exposing damage. RIGHT HALF: identical component or replacement part installed clean — no corrosion, no burn marks, bright contacts, looks factory-new. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral dark furnace-interior background, slight warm work-light tone.
```

**Word count:** 90

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no gas flames or fire visible, no full furnace exterior shot (this is a close-up component detail)
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after furnace repair showing burnt corroded component replaced with clean new part by Gardner HVAC in the Inland Empire
```
