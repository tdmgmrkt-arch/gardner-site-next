# Ceiling Fan Installation — Image Prompts
**Page:** `/services/electrical/fixtures/ceiling-fan-installation`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician on a stepladder attaching blades to a ceiling fan mounting bracket in a modern Inland Empire bedroom, slight upward angle showing tech working overhead. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Fan motor housing already mounted to ceiling box, one blade being fastened in hand, screwdriver visible. Warm interior LED light blending with afternoon daylight through a window. Calm, mid-task posture — not posed. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 122

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — natural daylight field-work posture; the reference carries face and uniform style data.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician installing a ceiling fan in a Murrieta bedroom
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = problem state. Right = restored state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: bare ceiling electrical box with a simple dome light fixture attached, outdated brass trim ring, soft single-bulb light below, neutral room light. RIGHT HALF: same ceiling location after installation — modern brushed-nickel ceiling fan with four blades and an integrated LED light kit mounted cleanly, fan blade span filling the frame, warm light kit glowing below. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Smooth white ceiling background.
```

**Word count:** 99

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC vents
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after ceiling fan installation showing bare light fixture replaced with modern ceiling fan by Gardner Electrical in Murrieta
```
