# Electrical Safety Inspection — Image Prompts
**Page:** `/services/electrical/repairs/electrical-safety-inspection`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician conducting a methodical safety inspection at an open residential electrical panel in an Inland Empire home, medium shot showing tech with clipboard reviewing the panel interior. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Clipboard with a printed inspection checklist in one hand, non-contact voltage tester in the other hand pointed at the panel. Calm, systematic posture — this is documentation and assessment, not emergency work. Warm interior LED light with ambient garage daylight. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 124

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
Gardner electrician conducting a safety inspection of a residential electrical panel in Murrieta
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = flagged/problem state. Right = cleared/compliant state. React overlays add BEFORE / AFTER labels — the image itself does not need text. React component will add annotation callouts for flagged vs. cleared items.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: residential electrical panel interior showing issues — two double-tapped breakers, one breaker with a red inspection tag attached, aluminum wiring on a copper-only breaker, faded or missing breaker labels, flat interior light. RIGHT HALF: same panel after inspection and remediation — no double taps, all breakers properly loaded, labels handwritten clearly on each breaker, green inspection-cleared sticker on the panel door, interior clean and organized. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Panel interior and utility room background.
```

**Word count:** 103

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no excessive sparks or lightning bolt clichés
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after electrical safety inspection showing flagged panel issues cleared and labeled by Gardner Electrical in the Inland Empire
```
