# Repairs and Safety Hub — Image Prompts
**Page:** `/services/electrical/repairs`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician conducting a methodical panel check in an Inland Empire home utility area, medium shot showing the tech with diagnostic tools — the category-defining image for electrical repairs and safety. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Digital multimeter in one hand with probes approaching a breaker terminal, safety glasses resting on the bill of the cap — present but not theatrical. Clipboard or notepad visible at hip. Focused, composed, authoritative — this tech diagnoses and fixes anything electrical. Warm interior LED light with ambient daylight from a window. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 130

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no excessive sparks or lightning bolt clichés, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow, no theatrical safety-drama pose
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — natural daylight field-work posture; the reference carries face and uniform style data.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician conducting a systematic electrical safety check at a residential panel in the Inland Empire
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = multi-issue system state. Right = cleared, code-compliant system state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: residential electrical panel interior with multiple visible issues — double-tapped breakers, one red inspection-flag tag clipped to a breaker, scorched terminal on one side, unlabeled breaker rows, aluminum wiring mismatched at a copper breaker, flat even panel light. RIGHT HALF: same panel fully remediated and cleared — all breakers properly loaded and labeled in clear handwriting, no double taps, no scorching, a green compliance-cleared sticker on the inside of the door, wiring dressed cleanly. Broad safety-category representation. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Panel interior background.
```

**Word count:** 109

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no excessive sparks or lightning bolt clichés
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after electrical safety repair showing multi-issue panel flagged and cleared to code-compliant status by Gardner Electrical in Murrieta
```
