#!/usr/bin/env python3
"""Build a self-contained HTML page with one-click-copy buttons for all
remaining image generation prompts (HVAC + Electrical).

Reads from `seo/{hvac,electrical}-image-prompts/*.md` spec files, extracts
the prompt / negative prompt / alt text per slot, and emits HTML with
embedded CSS + JS — no external dependencies, just open in browser.
"""
from __future__ import annotations

import html
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
HVAC_DIR = REPO / "seo" / "hvac-image-prompts"
ELEC_DIR = REPO / "seo" / "electrical-image-prompts"
OUT = REPO / "REMAINING_IMAGE_PROMPTS.html"

# Pending pages — (slug, label, slots_pending)
# slots_pending: "hero", "ba", or "both"
HVAC_PENDING = []

ELEC_PENDING = []

# Map slug → on-disk target path. Some hub slugs differ from the spec filename.
HVAC_TARGET_BASE = {
    "hvac-vertical-hub": "hvac/hvac-hub",
    "ac-hub": "hvac/ac-hub",
    "indoor-air-quality-hub": "hvac/indoor-air-quality-hub",
    "heating-hub": "hvac/heating-hub",
}
ELEC_TARGET_BASE = {
    "electrical-vertical-hub": "electrical/electrical-vertical-hub",
    "fixtures-hub": "electrical/fixtures-hub",
    "power-hub": "electrical/power-hub",
    "repairs-safety-hub": "electrical/repairs-safety-hub",
}


def parse_spec(path: Path) -> dict:
    """Extract slot 1 + slot 2 prompt/negative/alt from a spec markdown file."""
    text = path.read_text(encoding="utf-8")
    result: dict[str, dict[str, str]] = {"hero": {}, "ba": {}}

    # Split into slot 1 and slot 2 chunks
    slot1_match = re.search(
        r"^## Slot 1:.*?(?=^## Slot 2:|\Z)", text, re.MULTILINE | re.DOTALL
    )
    slot2_match = re.search(
        r"^## Slot 2:.*?(?=^## |^---\s*$|\Z)", text, re.MULTILINE | re.DOTALL
    )

    chunks = {"hero": slot1_match.group(0) if slot1_match else "",
              "ba": slot2_match.group(0) if slot2_match else ""}

    for slot, chunk in chunks.items():
        # Triple-backtick code blocks under specific headings
        # Capture: ### Prompt → ```...```, ### Negative Prompt → ```...```,
        # ### Suggested Alt Text → ```...```
        prompt = _extract_code(chunk, "Prompt")
        negative = _extract_code(chunk, "Negative Prompt")
        alt = _extract_code(chunk, "Suggested Alt Text")
        ref_match = re.search(
            r"### Reference Image Guidance\s*\n+(.*?)(?=^### |\Z)",
            chunk, re.MULTILINE | re.DOTALL,
        )
        ref = ref_match.group(1).strip() if ref_match else ""

        result[slot] = {
            "prompt": prompt,
            "negative": negative,
            "alt": alt,
            "reference": ref,
        }
    return result


def _extract_code(chunk: str, heading: str) -> str:
    """Pull the code-fence content under a `### {heading}` heading."""
    pattern = rf"### {re.escape(heading)}\s*\n+```\s*\n(.*?)\n```"
    m = re.search(pattern, chunk, re.DOTALL)
    return m.group(1).strip() if m else ""


def render_field(label: str, value: str, copy_id: str, multiline: bool = True) -> str:
    if not value:
        value = "(missing in spec — check source file)"
    escaped = html.escape(value)
    tag = "pre" if multiline else "code"
    return f"""
        <div class="field">
          <div class="field-head">
            <span class="field-label">{label}</span>
            <button class="copy-btn" data-target="{copy_id}">Copy</button>
          </div>
          <{tag} id="{copy_id}" class="block">{escaped}</{tag}>
        </div>"""


def render_slot(slug: str, target_base: str, slot: str, slot_data: dict, label: str) -> str:
    slot_label = "Hero (1000×600)" if slot == "hero" else "Before / After (800×400)"
    # File basename only — user saves directly to public/ root, no subfolder
    file_name = f"{target_base.split('/')[-1]}-{'hero' if slot == 'hero' else 'before-after'}.webp"
    safe_id = re.sub(r"[^a-z0-9]+", "-", f"{slug}-{slot}".lower())
    return f"""
      <article class="slot-card" data-search="{html.escape(label.lower())} {slug} {slot} {target_base}">
        <header class="slot-head">
          <div class="slot-title">
            <h3>{html.escape(label)}</h3>
            <span class="slot-tag slot-tag-{slot}">{slot_label}</span>
          </div>
          <div class="save-to">
            <span class="save-label">Save as:</span>
            <code class="path">{html.escape(file_name)}</code>
            <button class="copy-btn small" data-text="{html.escape(file_name)}">Copy filename</button>
          </div>
        </header>
        {render_field("Prompt", slot_data.get("prompt", ""), f"prompt-{safe_id}")}
        {render_field("Negative prompt", slot_data.get("negative", ""), f"neg-{safe_id}")}
        {render_field("Alt text", slot_data.get("alt", ""), f"alt-{safe_id}", multiline=True)}
        <details class="ref-details">
          <summary>Reference image guidance</summary>
          <p>{html.escape(slot_data.get("reference", ""))}</p>
        </details>
      </article>"""


def render_section(title: str, color_class: str, pending_count: int, items_html: str) -> str:
    return f"""
    <section class="vertical-section">
      <header class="vertical-head {color_class}">
        <h2>{title}</h2>
        <span class="count">{pending_count} prompts remaining</span>
      </header>
      <div class="slot-list">{items_html}</div>
    </section>"""


def main() -> None:
    hvac_items = []
    hvac_count = 0
    for slug, label, slots in HVAC_PENDING:
        spec = parse_spec(HVAC_DIR / f"{slug}.md")
        target_base = HVAC_TARGET_BASE.get(slug, f"hvac/{slug}")
        if slots in ("hero", "both"):
            hvac_items.append(render_slot(slug, target_base, "hero", spec["hero"], label))
            hvac_count += 1
        if slots in ("ba", "both"):
            hvac_items.append(render_slot(slug, target_base, "ba", spec["ba"], label))
            hvac_count += 1

    elec_items = []
    elec_count = 0
    for slug, label, slots in ELEC_PENDING:
        spec = parse_spec(ELEC_DIR / f"{slug}.md")
        target_base = ELEC_TARGET_BASE.get(slug, f"electrical/{slug}")
        if slots in ("hero", "both"):
            elec_items.append(render_slot(slug, target_base, "hero", spec["hero"], label))
            elec_count += 1
        if slots in ("ba", "both"):
            elec_items.append(render_slot(slug, target_base, "ba", spec["ba"], label))
            elec_count += 1

    total = hvac_count + elec_count

    body = (
        render_section("HVAC", "hvac", hvac_count, "\n".join(hvac_items))
        + render_section("Electrical", "elec", elec_count, "\n".join(elec_items))
    )

    html_doc = TEMPLATE.replace("{{TOTAL}}", str(total)) \
                       .replace("{{HVAC_COUNT}}", str(hvac_count)) \
                       .replace("{{ELEC_COUNT}}", str(elec_count)) \
                       .replace("{{BODY}}", body)

    OUT.write_text(html_doc, encoding="utf-8")
    print(f"Wrote {OUT} ({total} prompts: {hvac_count} HVAC + {elec_count} Electrical)")


TEMPLATE = r"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gardner Plumbing — Remaining Image Prompts</title>
<style>
  :root {
    --bg: #0f1115;
    --bg-2: #161a22;
    --bg-3: #1c2230;
    --fg: #e6e9ef;
    --fg-dim: #9aa3b2;
    --accent-red: #dc2626;
    --accent-red-hi: #ef4444;
    --accent-green: #16a34a;
    --accent-yellow: #facc15;
    --accent-blue: #3b82f6;
    --border: #2a3142;
    --code-bg: #0a0d12;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); color: var(--fg); font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.5; }

  .top {
    position: sticky; top: 0; z-index: 50;
    background: linear-gradient(180deg, #11151c 0%, rgba(15,17,21,0.95) 100%);
    border-bottom: 1px solid var(--border);
    padding: 16px 24px;
    backdrop-filter: blur(8px);
  }
  .top-row { display: flex; align-items: center; gap: 24px; max-width: 1180px; margin: 0 auto; }
  .top h1 { margin: 0; font-size: 18px; font-weight: 700; }
  .top h1 span { color: var(--fg-dim); font-weight: 400; }
  .progress { display: flex; gap: 10px; margin-left: auto; align-items: center; font-size: 13px; color: var(--fg-dim); }
  .progress .num { color: var(--fg); font-weight: 700; font-size: 16px; }
  .search {
    flex: 1; max-width: 380px;
    padding: 8px 12px;
    background: var(--bg-3);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--fg);
    font-size: 14px;
  }
  .search:focus { outline: none; border-color: var(--accent-red-hi); }

  .container { max-width: 1180px; margin: 0 auto; padding: 24px; }

  .vertical-section { margin-bottom: 48px; }
  .vertical-head {
    display: flex; align-items: baseline; gap: 16px;
    padding: 14px 18px;
    border-radius: 12px;
    margin-bottom: 16px;
    border: 1px solid var(--border);
  }
  .vertical-head.hvac { background: linear-gradient(135deg, #1a1f2e 0%, #1e2a3e 100%); }
  .vertical-head.elec { background: linear-gradient(135deg, #2a1f1a 0%, #3e251e 100%); }
  .vertical-head h2 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.01em; }
  .vertical-head .count { color: var(--fg-dim); font-size: 13px; }

  .slot-list { display: grid; gap: 16px; }
  .slot-card {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }
  .slot-head {
    padding: 14px 18px;
    background: var(--bg-3);
    border-bottom: 1px solid var(--border);
    display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
    flex-wrap: wrap;
  }
  .slot-title h3 { margin: 0 0 4px; font-size: 16px; font-weight: 700; }
  .slot-tag {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .slot-tag-hero { background: rgba(220, 38, 38, 0.18); color: #fca5a5; }
  .slot-tag-ba { background: rgba(59, 130, 246, 0.18); color: #93c5fd; }
  .save-to { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .save-label { color: var(--fg-dim); font-size: 12px; }
  .path {
    background: var(--code-bg);
    color: var(--accent-yellow);
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-family: ui-monospace, "SF Mono", Consolas, monospace;
  }

  .field {
    padding: 14px 18px;
    border-top: 1px solid var(--border);
  }
  .field-head {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 8px;
  }
  .field-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
    color: var(--fg-dim);
  }
  .block {
    margin: 0;
    padding: 14px 16px;
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: #d4d8e0;
    font-family: ui-monospace, "SF Mono", Consolas, monospace;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-x: auto;
    user-select: text;
    cursor: text;
  }
  pre.block { display: block; }
  code.block { display: block; padding: 12px 14px; }

  .copy-btn {
    background: var(--accent-red);
    border: none;
    color: white;
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 120ms ease, transform 80ms ease;
    min-height: 28px;
  }
  .copy-btn:hover { background: var(--accent-red-hi); }
  .copy-btn:active { transform: translateY(1px); }
  .copy-btn.small { padding: 4px 10px; font-size: 11px; min-height: 24px; }
  .copy-btn.copied { background: var(--accent-green); }
  .copy-btn.failed { background: var(--accent-yellow); color: #1c1c0d; }

  .ref-details {
    padding: 12px 18px 16px;
    border-top: 1px solid var(--border);
    font-size: 13px;
    color: var(--fg-dim);
  }
  .ref-details summary {
    cursor: pointer;
    color: var(--fg);
    font-size: 12px;
    font-weight: 600;
    user-select: none;
  }
  .ref-details p { margin: 8px 0 0; line-height: 1.55; }

  .slot-card.hidden { display: none; }

  footer { text-align: center; padding: 32px 16px; color: var(--fg-dim); font-size: 12px; }
</style>
</head>
<body>
  <div class="top">
    <div class="top-row">
      <h1>Gardner Plumbing — Image Prompts <span>· {{TOTAL}} remaining</span></h1>
      <input class="search" id="search" type="search" placeholder="Filter by slug, vertical, slot…" autofocus>
      <div class="progress">
        <span><span class="num">{{HVAC_COUNT}}</span> HVAC</span>
        <span><span class="num">{{ELEC_COUNT}}</span> Electrical</span>
      </div>
    </div>
  </div>

  <main class="container">
    {{BODY}}
  </main>

  <footer>
    Generated from <code>seo/{hvac,electrical}-image-prompts/*.md</code>. Open this file in your browser, click any Copy button.
  </footer>

<script>
(() => {
  async function copyText(text, btn) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (!ok) throw new Error('execCommand returned false');
      }
      const orig = btn.textContent;
      btn.classList.remove('failed');
      btn.classList.add('copied');
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.classList.remove('copied'); btn.textContent = orig; }, 1600);
    } catch (e) {
      const orig = btn.textContent;
      btn.classList.add('failed');
      btn.textContent = 'Select manually';
      setTimeout(() => { btn.classList.remove('failed'); btn.textContent = orig; }, 2400);
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.dataset.text;
    if (text != null) return copyText(text, btn);
    const targetId = btn.dataset.target;
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (!el) return;
    copyText(el.textContent, btn);
  });

  const search = document.getElementById('search');
  const cards = Array.from(document.querySelectorAll('.slot-card'));
  function filter() {
    const q = search.value.trim().toLowerCase();
    cards.forEach(c => {
      const hay = c.dataset.search || '';
      c.classList.toggle('hidden', q && !hay.includes(q));
    });
  }
  search.addEventListener('input', filter);
})();
</script>
</body>
</html>
"""


if __name__ == "__main__":
    main()
