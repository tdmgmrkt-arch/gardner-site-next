// Scan scraped Google reviews and group the best story-driven 5-star reviews by theme.
// Output: seo/google-reviews-shortlist.md — for the owner to pick favorites.

const fs = require("fs");
const path = require("path");

const raw = JSON.parse(
  fs.readFileSync(path.join(__dirname, "google-reviews-raw.json"), "utf8")
);
const reviews = raw.reviews.filter((r) => r.rating === 5 && r.text);

// Themed keyword matchers — a review qualifies if it matches the keyword regex.
// "Story signals" boost score: mention of a tech name, follow-up, clean, explained, etc.
const themes = [
  {
    slug: "water-heater",
    label: "WATER HEATER (replacement, install, no hot water, tankless)",
    keywords: /(water heater|tankless|hot water|water heater install|water heater replace)/i,
  },
  {
    slug: "slab-leak",
    label: "SLAB LEAK / LEAK DETECTION",
    keywords: /(slab leak|slab|leak detect|leak detection|under (the )?slab|hidden leak|warm spot)/i,
  },
  {
    slug: "drain-cleaning",
    label: "DRAIN CLEANING / MAIN LINE / HYDRO-JETTING / CAMERA INSPECTION",
    keywords: /(drain|main line|hydro.?jet|sewer|clog|backed up|backup|camera|snake|rooter|root)/i,
  },
  {
    slug: "burst-pipe-emergency",
    label: "BURST PIPE / EMERGENCY / AFTER HOURS",
    keywords: /(burst|broke|broken pipe|burst pipe|emergency|after hours|midnight|sunday|weekend|holiday|leak.*flooding|flood)/i,
  },
  {
    slug: "faucet-fixture-install",
    label: "FAUCET / DISPOSAL / FIXTURE INSTALL",
    keywords: /(faucet|disposal|garbage disposal|fixture|sink|toilet install|new toilet|valve replace|shut.?off)/i,
  },
  {
    slug: "maintenance-inspection",
    label: "MAINTENANCE PLAN / ANNUAL INSPECTION / SHIELD",
    keywords: /(inspection|maintenance|annual|tune.?up|preventative|preventive|shield|membership|plan)/i,
  },
  {
    slug: "clean-visit",
    label: "CLEAN VISIT / SHOE COVERS / DROP CLOTHS / CLEANED UP",
    keywords: /(clean(ed)?( up)?|shoe cover|drop cloth|tidy|spotless|left.*(home|house|kitchen|bathroom).*(clean|spotless|tidy)|swept|protected.*floor|covered.*floor)/i,
  },
  {
    slug: "transparent-pricing",
    label: "TRANSPARENT PRICING / UPFRONT QUOTE / NO SURPRISE FEES",
    keywords: /(upfront|up.?front|transparent|honest pric|fair pric|no.{0,10}surprise|matched.*(estimate|quote|invoice)|estimate.*(match|same|matched)|free estimate|no.{0,10}hidden|no.{0,10}upsell|honest)/i,
  },
];

// Story signal patterns — each matched bumps score.
const storySignals = [
  /\b(chris|jerome|eddie|kyle|antonio|carlos|mike|david|austin|tyler|jose|adam|josh|matt|tim|tom|frank|aaron|brandon|justin|nick|brian|sean|robert|ricardo|miguel|ryan|jorge|gabriel|alex|jason)\b/i,
  /follow[- ]?up|followed up|called.*back|next day|day after|days later|week later/i,
  /explained|walked.*through|showed me|went over/i,
  /clean|cleaned up|shoe cover|drop cloth|swept|tidy/i,
  /price.*(match|same|matched|quoted|upfront)|estimate.*match/i,
  /on time|arrived.*(early|on time|fast|quick)|same.?day/i,
  /no.{0,10}upsell|no.{0,10}pressure|honest/i,
  /text(ed)?.*photo|sent.*photo/i,
];

function scoreReview(r) {
  let s = 0;
  s += Math.min(r.text.length / 30, 15); // longer = better, capped
  for (const sig of storySignals) {
    if (sig.test(r.text)) s += 3;
  }
  return s;
}

// Bucket reviews by theme — a review can appear in multiple themes.
const buckets = themes.map((t) => ({
  ...t,
  matches: [],
}));

for (const r of reviews) {
  for (const b of buckets) {
    if (b.keywords.test(r.text)) {
      b.matches.push({ ...r, score: scoreReview(r) });
    }
  }
}

// Sort each bucket by score desc, keep top 10
for (const b of buckets) {
  b.matches.sort((a, b2) => b2.score - a.score);
  b.matches = b.matches.slice(0, 10);
}

// Render markdown
let md = `# Google Review Shortlist — by Theme\n\n`;
md += `_Auto-generated from \`seo/google-reviews-raw.json\` (820 5-star reviews scraped from Google Maps)._\n\n`;
md += `**How to use:** For each theme below, pick your 1-2 favorite reviews. Reply with the picks (e.g. "Theme 1: #2 and #4"). Those picks become the real testimonials in \`components/StoryTestimonials.tsx\`.\n\n`;
md += `Reviews are sorted by a "story signal" score (length + mentions of tech names, follow-ups, cleanup, transparent pricing, etc.) — top of the list = most story-driven.\n\n`;
md += `---\n\n`;

for (const b of buckets) {
  md += `## ${b.label}\n\n`;
  if (b.matches.length === 0) {
    md += `_No matching reviews found._\n\n---\n\n`;
    continue;
  }
  b.matches.forEach((r, i) => {
    md += `### Option ${i + 1} — ${r.author} (${r.date})\n\n`;
    md += `> ${r.text.replace(/\n+/g, " ")}\n\n`;
    if (r.ownerResponse) {
      md += `_Owner response:_ ${r.ownerResponse.replace(/\n+/g, " ").slice(0, 200)}...\n\n`;
    }
  });
  md += `---\n\n`;
}

fs.writeFileSync(path.join(__dirname, "google-reviews-shortlist.md"), md);

// ── HTML render ───────────────────────────────────────────────────────────────
const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const cleanOwnerResponse = (s) =>
  s.replace(/^Response from the owner\s+\S+\s+\S+\s+ago/i, "").trim();

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gardner Plumbing — Review Shortlist</title>
  <style>
    :root {
      --bg: #0f172a;
      --bg-card: #1e293b;
      --bg-card-hover: #273449;
      --border: #334155;
      --text: #e2e8f0;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --accent: #f59e0b;
      --accent-hover: #fbbf24;
      --star: #facc15;
      --quote-border: #475569;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 0;
    }
    header {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      padding: 32px 24px;
      border-bottom: 2px solid var(--accent);
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(8px);
    }
    header h1 {
      margin: 0 0 8px 0;
      font-size: 24px;
      letter-spacing: -0.5px;
    }
    header p {
      margin: 0;
      color: var(--text-muted);
      font-size: 14px;
    }
    .meta-strip {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 12px;
      font-size: 13px;
      color: var(--text-dim);
    }
    .meta-pill {
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.3);
      color: var(--accent);
      padding: 4px 12px;
      border-radius: 12px;
      font-weight: 600;
    }
    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 24px;
    }
    .toc {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px 24px;
      margin-bottom: 32px;
    }
    .toc h2 {
      margin: 0 0 12px 0;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-muted);
    }
    .toc ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 8px;
    }
    .toc a {
      color: var(--text);
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      border-radius: 8px;
      transition: all 0.15s;
      font-size: 14px;
    }
    .toc a:hover {
      background: var(--bg-card-hover);
      border-color: var(--accent);
      color: var(--accent);
    }
    .toc .count {
      background: rgba(245, 158, 11, 0.15);
      color: var(--accent);
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
    }
    section.theme {
      margin-bottom: 48px;
      scroll-margin-top: 140px;
    }
    section.theme h2 {
      font-size: 20px;
      margin: 0 0 4px 0;
      color: var(--accent);
      border-bottom: 1px solid var(--border);
      padding-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .back-top {
      font-size: 12px;
      color: var(--text-dim);
      text-decoration: none;
      font-weight: normal;
      text-transform: none;
      padding: 4px 10px;
      border: 1px solid var(--border);
      border-radius: 6px;
      transition: all 0.15s;
    }
    .back-top:hover {
      color: var(--accent);
      border-color: var(--accent);
    }
    .review-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px 24px;
      margin-top: 16px;
      transition: border-color 0.15s, transform 0.15s;
    }
    .review-card:hover {
      border-color: var(--accent);
    }
    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 12px;
    }
    .option-tag {
      background: var(--accent);
      color: #0f172a;
      font-weight: 700;
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 6px;
      letter-spacing: 0.5px;
    }
    .author {
      font-weight: 600;
      color: var(--text);
      font-size: 15px;
    }
    .date {
      color: var(--text-dim);
      font-size: 13px;
    }
    .stars {
      color: var(--star);
      font-size: 14px;
      letter-spacing: 1px;
    }
    .review-text {
      color: var(--text);
      font-size: 15px;
      line-height: 1.65;
      border-left: 3px solid var(--quote-border);
      padding-left: 16px;
      margin: 12px 0 0 0;
    }
    .owner-response {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px 16px;
      margin-top: 12px;
      font-size: 13px;
      color: var(--text-muted);
    }
    .owner-response strong {
      color: var(--text);
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 1px;
    }
    .empty {
      color: var(--text-dim);
      font-style: italic;
      padding: 16px;
      background: var(--bg-card);
      border-radius: 8px;
      border: 1px dashed var(--border);
    }
    @media (max-width: 640px) {
      header { padding: 20px 16px; }
      main { padding: 16px; }
      .review-card { padding: 16px; }
      section.theme h2 { font-size: 17px; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Gardner Plumbing — Google Review Shortlist</h1>
    <p>Story-driven candidates grouped by theme. Pick your favorites and reply with the picks.</p>
    <div class="meta-strip">
      <span class="meta-pill">${reviews.length} 5-star reviews scanned</span>
      <span class="meta-pill">${buckets.length} themes</span>
      <span class="meta-pill">Sorted by story-signal score</span>
    </div>
  </header>
  <main>
    <div class="toc" id="top">
      <h2>Jump to theme</h2>
      <ul>
        ${buckets
          .map(
            (b) =>
              `<li><a href="#${b.slug}"><span>${esc(b.label)}</span><span class="count">${b.matches.length}</span></a></li>`
          )
          .join("\n        ")}
      </ul>
    </div>

    ${buckets
      .map((b) => {
        if (b.matches.length === 0) {
          return `<section class="theme" id="${b.slug}">
      <h2>${esc(b.label)}<a class="back-top" href="#top">↑ Back to top</a></h2>
      <p class="empty">No matching reviews found.</p>
    </section>`;
        }
        const cards = b.matches
          .map(
            (r, i) => `
      <div class="review-card">
        <div class="review-header">
          <span class="option-tag">OPTION ${i + 1}</span>
          <span class="author">${esc(r.author)}</span>
          <span class="stars">★★★★★</span>
          <span class="date">${esc(r.date)}</span>
        </div>
        <p class="review-text">${esc(r.text).replace(/\n+/g, "<br><br>")}</p>
        ${
          r.ownerResponse
            ? `<div class="owner-response"><strong>Owner reply:</strong> ${esc(cleanOwnerResponse(r.ownerResponse)).slice(0, 400)}${cleanOwnerResponse(r.ownerResponse).length > 400 ? "..." : ""}</div>`
            : ""
        }
      </div>`
          )
          .join("");
        return `<section class="theme" id="${b.slug}">
      <h2>${esc(b.label)}<a class="back-top" href="#top">↑ Back to top</a></h2>
      ${cards}
    </section>`;
      })
      .join("\n\n    ")}
  </main>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, "google-reviews-shortlist.html"), html);

console.log(
  `Wrote shortlist. Total 5-star reviews scanned: ${reviews.length}. Themes: ${buckets.length}.`
);
console.log(`  → seo/google-reviews-shortlist.md`);
console.log(`  → seo/google-reviews-shortlist.html`);
buckets.forEach((b) =>
  console.log(`  ${b.slug.padEnd(28)} → ${b.matches.length} candidates`)
);
