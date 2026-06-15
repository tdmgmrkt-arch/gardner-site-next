# Power Hub — Image Prompts
**Page:** `/services/electrical/power`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician standing beside an open 200-amp electrical panel in an Inland Empire garage, one hand resting on the open panel cabinet door — a category-defining stance for power systems work. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Breaker rows clearly visible inside the open panel. Slightly blurred in the background: a Level 2 EV charger mounted on the garage wall, implying the breadth of power-upgrade services. Confident, composed posture — this tech owns the whole power infrastructure category. Overhead garage fluorescent with ambient garage-door daylight. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 131

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no excessive sparks or lightning bolt clichés, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow, no overly posed corporate portrait stance
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — natural daylight field-work posture; the reference carries face and uniform style data.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician standing beside a 200-amp panel in a Murrieta garage representing power systems and electrical upgrade services
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = aging infrastructure state. Right = modern integrated power state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: aging home electrical infrastructure — old 100-amp panel open with mixed wire types, faded labels, a basic 120V outlet on the garage wall nearby, no sub-panels visible, dim garage lighting. RIGHT HALF: modernized power infrastructure — clean 200-amp main panel with labeled breakers, sub-panel beside it, Level 2 EV charger mounted on the garage wall, conduit runs clean and strapped. Broad category-representation composition for a power-upgrade hub page. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Painted concrete garage wall background.
```

**Word count:** 106

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no excessive sparks or lightning bolt clichés
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after power systems upgrade showing aging electrical infrastructure modernized with 200-amp panel and EV charger by Gardner Electrical in Murrieta
```
