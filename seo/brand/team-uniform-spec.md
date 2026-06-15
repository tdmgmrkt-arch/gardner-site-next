# Gardner Plumbing Co. — Team Uniform Spec

> **Canonical reference for ALL image generation prompts involving a Gardner technician.**
> Every hero image prompt across HVAC, Electrical, and Plumbing pages must reflect this uniform.
> Source: real team reference photos provided by client 2026-06-12.

---

## Standard field uniform (use this exact description block)

```
Light gray button-up work shirt (collar style, two chest pockets, with a red Gardner Plumbing Co. logo patch on the left chest); navy / dark blue work pants; dark navy baseball cap with a small red Gardner Plumbing Co. logo on the front panel; black work boots; Milwaukee-branded red tool bag or tool boxes / red work gloves visible when handling equipment.
```

## Why this matters

The user generates final images in Gemini / Nano Banana / Imagen-family with **real Gardner team-member reference photos attached**. The reference image carries face and likeness, but the *uniform description in the prompt anchors what the model paints around that face* — so it must match the real uniform exactly. Mismatched uniform descriptions cause the generated tech to look "almost right but off" which damages brand trust.

## Reference photos provided by client (2026-06-12)

The client supplied two reference photos:
1. **AC condenser repair shot** — tech kneeling beside condenser unit with manifold gauges, residential stucco backdrop. Shows full uniform in field-work pose.
2. **Van interior loaded with Milwaukee tools** — tech inside service van with stacked red Milwaukee tool boxes. Shows uniform in equipment-handling pose.

These reference photos should be **attached to every Gemini generation** for any prompt where a Gardner tech appears. Recommended location to store the references locally for future use: `public/team-reference/` (gitignored — not for web display, only for the user's local generation workflow).

## What to AVOID describing

The prompt should NOT include:
- Specific tech facial features (handled by reference photo)
- Specific tech age, ethnicity, hair color (handled by reference photo)
- Stock-photo poses ("smiling at camera", "thumbs up", "arms crossed corporate portrait")
- Clothing that contradicts the real uniform (white lab coat, safety vest, generic blue overalls)
- Brand logos on uniform other than Gardner Plumbing Co.
- Tools branded other than Milwaukee (the real team uses Milwaukee — keep brand authenticity)

## Verticals

The uniform stays the same across all three verticals (Plumbing / HVAC / Electrical). The same tech in the same uniform handles whatever scenario the page is about — only the equipment, location, and posture change per page.

---

## Drop-in uniform block (for agents writing image prompts)

When writing the prompt body of a new page's hero image, drop in this exact phrasing in the position where the tech is first described:

> *"wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip"*

Adapt the equipment/tools mention based on the service (manifold gauges for AC repair, voltage meter for electrical work, pipe wrench for plumbing — but the rest of the uniform line stays verbatim).
