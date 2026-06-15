# Remodeling Electrical — Image Prompts
**Page:** `/services/electrical/power/remodeling-electrical`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician installing electrical rough-in boxes and wiring in exposed wall framing during an Inland Empire home remodel, medium shot at the stud wall. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Blue plastic nail-in outlet box being fastened to a stud, Romex cable already run through the bay, Milwaukee drill holstered on hip. Active construction zone — bare studs, concrete subfloor, other trades' materials blurred in background. Warm LED work light with ambient window daylight. Focused, mid-task posture. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 130

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no finished drywall (this is rough-in stage), no green grass lawn, no snow
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — natural daylight field-work posture; the reference carries face and uniform style data.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician installing electrical rough-in boxes during a home remodel in Murrieta
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = problem state. Right = restored state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: empty wall stud bay during a remodel — bare wood studs, no boxes, no wiring, raw construction-zone appearance, flat LED work light. RIGHT HALF: same stud bay after electrical rough-in — blue outlet box nailed to stud, Romex cable routed and stapled through drilled holes, switch box positioned at correct height, wire tails coiled inside boxes ready for inspection, everything neat and code-ready. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Bare stud and concrete subfloor background.
```

**Word count:** 100

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing pipes or fixtures, no HVAC equipment, no finished drywall
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after remodeling electrical showing empty stud bay roughed-in with outlets and wiring by Gardner Electrical in the Inland Empire
```
