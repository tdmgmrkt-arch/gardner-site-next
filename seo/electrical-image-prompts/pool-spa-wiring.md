# Pool and Spa Wiring — Image Prompts
**Page:** `/services/electrical/fixtures/pool-spa-wiring`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an electrician kneeling beside a pool equipment pad in a sunny Inland Empire backyard, midday directional SoCal sunlight. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Sub-panel door open beside the pad, green bonding wire visible running to pool pump housing, non-contact voltage tester in hand. Residential in-ground pool visible blurred in background, desert-dry landscaping. Safety-compliance vibe — methodical, not dramatic. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.
```

**Word count:** 122

**Uniform reference:** see `seo/brand/team-uniform-spec.md` for the canonical Gardner field uniform. The uniform line in this prompt MUST match that spec verbatim.

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no pool cleaning nets or brushes (this is electrical not pool maintenance), no pool service technician vibe, no green grass lawn, no snow
```

### Reference Image Guidance

Attach one of the following real Gardner team photos when generating:
- `gardnertecharrival.webp` or `gardnertecharrival2.webp` — natural daylight field-work posture; the reference carries face and uniform style data.

Do not describe face, age, or ethnicity in the prompt — the reference handles it.

### Suggested Alt Text

```
Gardner electrician inspecting pool equipment sub-panel wiring and bonding at a Murrieta home
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Left = problem state. Right = restored state. React overlays add BEFORE / AFTER labels — the image itself does not need text. Same angle, same lighting across both halves. React overlays will add annotation labels for compliance callouts.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: pool equipment pad with unprotected wiring — exposed conduit runs, no GFCI breaker visible, corroded wire connectors at pump motor terminals, surface rust on sub-panel housing, flat daylight. RIGHT HALF: same equipment pad after professional electrical service — weatherproof sub-panel closed and labeled, GFCI breaker visible inside, green bonding wire run neatly to pump housing, clean conduit strapping, weatherproof fittings. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Concrete pad and desert-dry landscaping background.
```

**Word count:** 108

### Negative Prompt

```
no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no pool cleaning equipment, no plumbing fixtures, no HVAC equipment, no pool service vibe
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after pool electrical wiring showing code-compliant GFCI panel and bonding installation by Gardner Electrical in the Inland Empire
```
