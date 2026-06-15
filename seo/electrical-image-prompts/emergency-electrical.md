# Emergency Electrical — Image Prompts
**Page:** `/services/electrical/repairs/emergency-electrical`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI. Badge will read "24/7 EMERGENCY RESPONSE."

### Prompt

```
Photo of an electrician arriving at an Inland Empire residential home at dusk, medium shot showing the tech approaching the front door with flashlight and tool bag. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Bright LED flashlight beam cutting through early-evening light, Gardner-branded service van with headlights on parked partially visible at curb behind the tech. Urgency and professionalism — tech in motion, purposeful stride. Dusk blue-hour ambient light with warm porch light from the house. 50mm equivalent lens. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 126

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics (urgency comes from context not pyrotechnics), no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — arrival posture shot is particularly relevant here.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician arriving for 24/7 emergency electrical service at a Murrieta home at dusk
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = problem state. Right = restored state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Dramatic evening/emergency lighting tone is appropriate for the before half; after half returns to safe, well-lit.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: electrical breaker panel interior with a tripped breaker — one breaker clearly in the off-tripped position, faint scorch mark on the breaker face, dark dramatic low-key lighting suggesting a power-loss situation. RIGHT HALF: same panel after emergency repair — tripped breaker replaced and reset, all breakers in proper on position, panel interior lit brightly and clean, no scorch marks. Seamless composition across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Panel interior background.
```

**Word count:** 94

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no excessive sparks or lightning bolt clichés even on the before half, no wildly different lighting between left and right (keep it readable)
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after emergency electrical repair showing tripped and scorched breaker restored by Gardner Electrical in Murrieta
```
