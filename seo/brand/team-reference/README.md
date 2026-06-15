# Team Reference Photos

> **Drop the two real Gardner Plumbing team reference photos here** for your Gemini / Nano Banana image generation workflow.

## Required files

Save your two reference photos as:

- `gardner-tech-condenser-reference.webp` — the AC condenser repair shot (tech kneeling beside outdoor unit, manifold gauges)
- `gardner-tech-van-interior-reference.webp` — the van interior shot (tech with red Milwaukee tool boxes)

These are NOT served by Next.js (they're outside `/public`) — they exist solely for your local image generation workflow.

## How to use

When generating any HVAC, Electrical, or Plumbing hero image in Gemini / Nano Banana / Imagen:

1. Open the page's image prompt file (e.g., `seo/hvac-image-prompts/ac-repair.md`)
2. Copy the **Slot 1: Hero Image** prompt
3. Attach BOTH reference photos as image inputs in Gemini
4. Paste the prompt
5. The references carry face + likeness + uniform style. The prompt's uniform description (see `seo/brand/team-uniform-spec.md`) anchors what the model paints around them.

## Privacy / commit note

These photos contain real team members. Consider whether you want them committed to the repo. If not, add this to `.gitignore`:

```
seo/brand/team-reference/*.webp
seo/brand/team-reference/*.png
seo/brand/team-reference/*.jpg
seo/brand/team-reference/*.jpeg
```

The `README.md` and the folder structure stay tracked; the actual photo files stay local.
