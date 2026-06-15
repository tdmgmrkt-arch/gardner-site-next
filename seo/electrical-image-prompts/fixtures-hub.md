# Fixtures Hub — Image Prompts
**Page:** `/services/electrical/fixtures`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician standing confidently in the main living area of a modern Inland Empire home, wide-medium shot that captures the breadth of the fixtures category. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Tech faces the camera with calm professional stance — arms relaxed, tool bag visible. Overhead recessed LED cans lit above the tech, ceiling fan with light kit visible blurred in the adjacent room, a GFCI outlet on the wall to one side. Multiple fixture types readable in a single frame without feeling staged. Warm interior LED light plus afternoon daylight through windows. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 133

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow, no overly posed corporate portrait stance
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — the standing professional posture translates well to this category-defining shot.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician in a Murrieta home interior representing the full range of fixture installation services including lighting, outlets, and ceiling fans
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = dated state. Right = modern integrated state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: section of a 1990s-era home interior wall and ceiling — yellowed incandescent dome light on ceiling, beige two-prong outlets on wall, no USB ports, aged toggle switches with yellowed plastic, flat even light. RIGHT HALF: same wall and ceiling section after electrical fixture upgrades — flush recessed LED can installed in ceiling, modern GFCI outlet with USB ports on wall, smart rocker switch with LED status bar replacing the toggle, all faceplates clean white. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral drywall and ceiling background.
```

**Word count:** 110

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after electrical fixtures upgrade showing dated 1990s lighting and outlets modernized by Gardner Electrical in the Inland Empire
```
