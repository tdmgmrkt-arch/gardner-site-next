# Electrical Repairs — Image Prompts
**Page:** `/services/electrical/repairs/electrical-repairs`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician using a digital multimeter to diagnose a wall outlet in an Inland Empire home, tight-medium shot centered on the tech and the wall. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Multimeter probes inserted into outlet slots, digital readout visible, open junction box nearby showing wire connections — diagnostic troubleshooting vibe. Warm interior LED light with ambient daylight from a window. Focused, methodical, not rushed. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 120

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
Gardner electrician diagnosing outlet wiring with a multimeter during an electrical repair in Murrieta
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = problem state. Right = restored state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: damaged wall outlet — faceplate scorched with heat discoloration around the slots, cracked plastic body, visible burn marks on the surrounding drywall paint, flat even light. RIGHT HALF: same wall location after repair — clean new outlet installed flush, unscorched white faceplate, fresh painted drywall surround, no discoloration. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral drywall wall background.
```

**Word count:** 88

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no obvious shock or spark theatrics on the after half
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after electrical repair showing scorched outlet replaced with new component by Gardner Electrical in the Inland Empire
```
