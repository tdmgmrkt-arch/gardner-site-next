# Surge Protection — Image Prompts
**Page:** `/services/electrical/repairs/surge-protection`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician installing a whole-home surge protection module at the top of a residential main electrical panel in an Inland Empire garage, close-medium shot on the panel work. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Surge protector device being seated into a double-pole breaker slot at the top of the panel, lead wires visible at the device terminals, non-contact tester resting on the panel door. Focused, precise, detail-oriented posture. Overhead garage fluorescent with ambient daylight. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 127

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
Gardner electrician installing a whole-home surge protector at the main panel in a Murrieta home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = problem state. Right = protected state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: top section of a residential electrical panel with no surge protection — empty double-pole breaker slot at the top of the breaker row, standard panel interior, flat panel lighting. RIGHT HALF: same top panel section after surge protection installation — whole-home surge protective device mounted in the double-pole slot, green status LED indicator visible on the device face, lead wires neatly dressed against the side of the panel interior. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Panel interior background.
```

**Word count:** 99

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no excessive sparks or lightning bolt clichés
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after whole-home surge protection installation showing surge protector added to main panel by Gardner Electrical in Murrieta
```
