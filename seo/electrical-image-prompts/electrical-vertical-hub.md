# Electrical Vertical Hub — Image Prompts
**Page:** `/services/electrical`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician standing beside the Gardner Plumbing Co. branded service van in a residential Inland Empire driveway, midday SoCal directional sunlight, golden-hour-adjacent warmth. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Digital multimeter held at side in one hand, the other hand resting on the open van door. Stucco home exterior in background, desert-dry landscaping, wide driveway — Inland Empire residential context unmistakable. Confident, composed stance — this is the category-owning electrical tech. Van company graphics softly visible. Shallow depth of field, 50mm equivalent lens. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 129

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no excessive sparks or lightning bolt clichés, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow, no city skyline, no overly posed corporate portrait stance
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — the arrival posture and van context match this shot directly. This is the closest compositional match in the reference library.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician beside the service van in a Murrieta residential driveway representing full-service electrical work in the Inland Empire
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = aging mismatched infrastructure state. Right = modern integrated electrical system. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: aging residential electrical overview — old 100-amp panel open with cloth-wrapped wiring visible, a scorched two-prong outlet on the wall beside it, no GFCI protection, dated toggle switches, flat utility light. RIGHT HALF: modern integrated electrical system — 200-amp panel closed and labeled, new GFCI outlet with USB ports on the wall, smart rocker switch beside it, Level 2 EV charger mounted further along the wall — the full ecosystem of a modernized home. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Painted concrete and drywall wall background suggesting garage or utility hall.
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
Before and after full electrical system overview showing aging infrastructure modernized with panel upgrade, GFCI outlets, and EV charger by Gardner Electrical in the Inland Empire
```
