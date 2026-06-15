# HVAC Vertical Hub — Image Prompts
**Page:** `/services/hvac`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician leaning confidently against the side of a Gardner Plumbing Co. service van parked in a residential Inland Empire driveway, arms loosely at sides, strong authoritative posture representing the full HVAC service offering. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. A residential AC condenser unit visible in the background near the house. Warm SoCal afternoon directional sunlight, stucco home, desert-dry landscaping. 50mm equivalent lens, shallow depth of field with van and yard soft behind the tech. Documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 129

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no posed thumbs-up or smile-at-camera, no green grass lawn (wrong region), no snow, no city skyline, no excessive lens flare
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician leaning on service van in an Inland Empire residential driveway representing full HVAC services
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: an aging mismatched residential HVAC setup — old weathered AC condenser on a concrete pad beside the house, with a dated conventional-flue furnace visible through a nearby utility closet door or window, the two units clearly from different eras. RIGHT HALF: the same property corner with a modern matched HVAC system — sleek new AC condenser on the pad, and through the open utility closet a new high-efficiency furnace with PVC flue pipes, both units clean and current-generation. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Warm SoCal daylight, stucco wall, concrete pad.
```

**Word count:** 117

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no green lawn (wrong region), no swimming pool equipment, no gas flames or fire
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after full HVAC system replacement showing aging mismatched AC and furnace replaced with modern matched system by Gardner HVAC in the Inland Empire
```
