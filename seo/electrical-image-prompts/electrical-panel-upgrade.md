# Electrical Panel Upgrade — Image Prompts
**Page:** `/services/electrical/power/electrical-panel-upgrade`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician working at an open residential electrical panel inside a garage in the Inland Empire, medium shot showing the tech and panel together. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Non-contact voltage tester in hand, breaker rows clearly visible, wires dressed neatly inside the panel cabinet. Concrete garage wall background, overhead fluorescent supplemented by ambient garage-door daylight. Focused, methodical posture. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 121

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no excessive sparks or lightning bolt clichés, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — natural daylight field-work posture; the reference carries face and uniform style data.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician upgrading residential electrical panel in a Murrieta garage
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = problem state. Right = restored state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: old residential electrical panel with the door open — 100-amp capacity, a mix of aluminum and cloth-insulated wiring visible, several double-tapped breakers, rust on the panel interior, breaker labels faded or missing, flat garage light. RIGHT HALF: new 200-amp panel installed — clean Square D or Eaton breaker rows, all breakers labeled in neat handwriting, wires bundled and routed cleanly, neutral bar fully terminated, panel interior bright and uncluttered. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Concrete wall background.
```

**Word count:** 107

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no excessive sparks or lightning bolt clichés
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after electrical panel upgrade showing 100-amp panel replaced with 200-amp service by Gardner Electrical in Murrieta
```
