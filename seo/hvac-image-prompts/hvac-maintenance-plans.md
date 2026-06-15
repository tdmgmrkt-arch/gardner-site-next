# HVAC Maintenance Plans — Image Prompts
**Page:** `/services/hvac/hvac-maintenance-plans`
**Generated:** 2026-06-12
**Tool:** Gemini / Nano Banana (Imagen-family) with reference image attachment where noted

---

## Slot 1: Hero Image

**Output specs:** 1000 × 600 px | 5:3 landscape | `object-cover` | `rounded-3xl`
**Compositional constraint:** Keep bottom-left quadrant relatively clear — a glassmorphism badge overlay (approx. 180 × 70 px) sits there in the rendered UI.

### Prompt

```
Photo of an HVAC technician standing beside a residential furnace in a garage utility area, holding a clipboard with an inspection checklist, reviewing completed checkboxes in an organized, professional manner. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Clean working furnace behind him, tools organized nearby, calm and methodical posture suggesting scheduled preventive service. Warm garage ambient light, concrete floor. 50mm equivalent lens, documentary photography style. No studio lighting. Style and likeness of attached reference image.
```

**Word count:** 118

### Negative Prompt

```
no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no visible gas flames or fire, no emergency or urgent-repair posture, no excessive lens flare
```

### Reference Image Guidance

Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.

### Suggested Alt Text

```
Gardner HVAC technician reviewing maintenance checklist during scheduled service plan visit in Murrieta Inland Empire
```

---

## Slot 2: Before / After Image

**Output specs:** 800 × 400 px | 2:1 landscape | `h-64 object-cover` | `rounded-2xl`
**Critical:** Single frame split at vertical centerline. Same camera angle and lighting across both halves. React overlays add BEFORE / AFTER labels — image itself has no text.

**No reference image required — component-only shot, no people.**

### Prompt

```
Split-scene product photograph, single frame divided at vertical center. LEFT HALF: a flat-lay of an overdue service reminder notice and a crumpled, handwritten list of repair costs — suggesting reactive, unplanned HVAC spending. RIGHT HALF: a clean flat-lay of a professional HVAC maintenance plan service agreement document beside a small organized toolkit and a branded service checklist card — suggesting organized, scheduled care. Consistent soft top-down lighting across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral gray surface, documents sharp and legible in composition but no actual readable text detail needed.
```

**Word count:** 103

### Negative Prompt

```
no people, no hands visible, no readable text or fine-print legible, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no dramatic emergency scenes, no fire, no flooded rooms
```

### Reference Image Guidance

No reference image required. Submit the prompt alone.

### Suggested Alt Text

```
Before and after concept showing reactive HVAC repair costs versus organized Gardner HVAC maintenance plan service in the Inland Empire
```
