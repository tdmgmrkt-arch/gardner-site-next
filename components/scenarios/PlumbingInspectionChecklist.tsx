"use client";

import Link from "next/link";
import { ImagePromptPlaceholder } from "@/components/ImagePromptPlaceholder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Phone,
  ClipboardList,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
  FileText,
  Home,
} from "lucide-react";

// ─── Image prompt constants (sourced from seo/scenario-image-prompts/plumbing-inspection-*.md) ───

const HERO_PROMPT =
  "Documentary photograph of a plumbing technician standing in a residential utility or laundry room, holding a professional clipboard with a checklist form visible on it. The technician is standing beside a water heater — a standard tank-style residential unit — with the main water shut-off valve and supply lines visible in the background. The technician's pen is touching the checklist, mid-notation, eyes on the clipboard. The technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag or tool belt visible. Warm interior residential lighting — a mix of overhead fluorescent and warm incandescent spill. Lived-in utility room — a dryer visible at the edge of frame, pipes on the wall, normal wear on the floor. 50mm equivalent lens, documentary photography style, no studio lighting. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no cartoon, no illustration, no text overlay, no watermark, no posed smile at camera, no excessively clean or staged utility room, no mid-stride action pose, no empty room with nothing but the water heater";

const HERO_REF =
  "Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Do not describe face, age, or ethnicity in the prompt.";

const MID_PROMPT =
  "Close-up still-life photograph of a printed plumbing inspection checklist document on a white desk surface. The paper has a professional letterhead header area at the top — the logo area is intentionally small and non-specific, just a placeholder block, not a real logo. Below the header is a columnar checklist with printed line items and small checkboxes. Several items have been checked off with pen marks — a mix of checkmarks and initials. A black ballpoint pen rests diagonally across the lower portion of the paper. Soft, even natural desk lighting from a window to one side — no harsh shadows. The rest of the desk surface is visible at the edges, clean and neutral. 50mm equivalent macro lens, flat lay documentary style, no people, no hands.";

const MID_NEGATIVE =
  "no people, no hands visible, no real or legible logo text on the document, no cartoon, no watermark, no harsh shadows, no stock-photo fake-clipboard look, no bright colored forms (white paper only), no CGI rendering, no tablet replacing the paper";

const TRUST_PROMPT =
  "Documentary photograph of three adults seated around a kitchen table reviewing a printed inspection report together. On one side of the table sits a couple — two adults in casual home-buying attire, looking engaged and attentive. Across from them sits a plumbing technician wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo visible. The technician is pointing to a specific item on a printed report document spread on the table. All three are looking at the document, not the camera. Natural window light from one side. The kitchen setting is a clean, well-lit modern residential kitchen. 50mm equivalent lens, documentary photography style. Style and likeness of attached reference image for the technician only.";

const TRUST_NEGATIVE =
  "no stock photo handshake, no fake smiles at camera, no white lab coat, no safety vest, no cartoon, no illustration, no text overlay, no watermark, no laptop replacing the paper report, no corporate conference room setting (must be a home kitchen), no posed group portrait";

const PHONE_DISPLAY = "(951) 246-4337";
const PHONE_HREF = "tel:9512464337";

const darkBg = {
  background: `
    radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
    linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
  `,
};

const altDarkBg = {
  background: `
    radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
    linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
  `,
};

function SectionBadge({
  icon: Icon,
  text,
  color = "red",
}: {
  icon: React.ElementType;
  text: string;
  color?: "red" | "blue" | "green" | "yellow";
}) {
  const colorMap = {
    red: "from-red-600/20 to-red-500/20 border-red-500/30",
    blue: "from-blue-600/20 to-blue-500/20 border-blue-500/30",
    green: "from-green-600/20 to-green-500/20 border-green-500/30",
    yellow: "from-yellow-600/20 to-yellow-500/20 border-yellow-500/30",
  };
  const iconColorMap = {
    red: "text-red-400",
    blue: "text-blue-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
  };
  return (
    <div
      className={`inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r ${colorMap[color]} rounded-full border backdrop-blur-sm`}
    >
      <Icon className={`h-5 w-5 ${iconColorMap[color]}`} aria-hidden="true" />
      <span className={`${iconColorMap[color]} font-semibold text-sm uppercase tracking-wider`}>
        {text}
      </span>
    </div>
  );
}

const checklistItems = [
  {
    num: 1,
    title: "Main Water Shut-Off — Location and Function",
    body: "The main shut-off controls all water flow into the home. Every buyer needs to know where it is before closing. Inspectors confirm it opens and closes fully and doesn't show signs of corrosion or calcification. A stuck or missing shut-off is a liability — one burst pipe and you can't stop the damage.",
  },
  {
    num: 2,
    title: "Water Pressure — Measured at the Tap",
    body: "Residential water pressure should read between 40 and 80 PSI. Pressure above 80 PSI stresses joints, fittings, and water heater tanks, shortening the life of every fixture in the house. Pressure below 40 PSI indicates a supply problem at the meter or a failing pressure-regulating valve (PRV). We measure it with a gauge — not by feel.",
  },
  {
    num: 3,
    title: "Pipe Material Throughout the Home",
    body: "The supply lines and drain lines are identified and documented: copper, PEX, PVC, CPVC, cast iron, or galvanized steel. Galvanized pipe is the major concern — it corrodes from the inside out, restricts flow, and can shed rust into the water supply. Homes in Corona, Hemet, and Perris built before 1985 frequently still have galvanized supply lines.",
  },
  {
    num: 4,
    title: "Water Heater — Age, Type, and Venting",
    body: "A tank water heater has an 8- to 12-year service life. A unit 10 or more years old with signs of corrosion around the base or T&P valve is a near-term replacement. Inspectors note the serial number (manufacturer date is encoded in it), the fuel type, and whether the venting is intact and correctly pitched. Tankless units get checked for scale buildup — in hard-water Coachella Valley cities like Palm Springs and Palm Desert, an uncleaned tankless unit can lose 25 – 40% of its heating efficiency within 3 years.",
  },
  {
    num: 5,
    title: "Drain Flow Test — Every Fixture",
    body: "Each sink, tub, and shower drain gets water run through it. Slow drains indicate partial blockages in the branch lines. A drain that backs up during a simple flow test signals a bigger obstruction in the main line — which requires a camera to diagnose properly. Don't skip a single fixture: drain problems are additive, and sellers know which bathroom runs slow.",
  },
  {
    num: 6,
    title: "Toilet Flush and Fill Mechanisms",
    body: "Every toilet gets flushed. Inspectors check that the flapper seals completely (no phantom running), the fill valve shuts off cleanly, and the base doesn't rock or show water staining on the subfloor. A rocking toilet indicates a failed wax ring — left long enough, that's subfloor rot.",
  },
  {
    num: 7,
    title: "Sewer Line Camera Inspection — Main Line Health",
    body: "This is the single most important item on this list. A sewer camera inspection runs a camera through the main line from the clean-out to the street connection. It confirms the line is clear of root intrusion, debris, and bellied sections (sags where waste pools instead of draining). A sewer camera inspection on a residential property in Riverside County typically costs $150 – $250 and takes 30 – 45 minutes. It is the most cost-effective way to avoid a $4,000 – $12,000 sewer line replacement after closing.",
  },
  {
    num: 8,
    title: "Supply Valve Condition Under Sinks and Behind Toilets",
    body: "The isolation valves under every sink and behind every toilet are operated manually. Old compression valves — common in homes built before 2000 — frequently seize open or develop slow drips when turned. A seized valve means you can't isolate a leak without shutting off the main. Replacement is straightforward, but buyers should know the scope.",
  },
  {
    num: 9,
    title: "Hose Bibs and Outdoor Fixtures",
    body: "Outdoor hose bibs are checked for drip leaks and freeze damage. This matters more than buyers expect in the Coachella Valley: Cathedral City, Palm Springs, and the eastern desert cities see enough cold snaps that non-freeze-resistant hose bibs crack. Split bibs are a common deferred repair that sellers miss.",
  },
  {
    num: 10,
    title: "Evidence of Past Slab Leaks",
    body: "Riverside County and the Inland Empire sit predominantly on slab foundations. A history of slab leaks leaves physical evidence: mismatched flooring sections, fresh tile patches in otherwise worn floors, baseboards with water staining, or a water meter that moves when all fixtures are off. One prior slab leak is manageable. Multiple slab leak patches in the same home suggest a systemic supply-line failure.",
  },
  {
    num: 11,
    title: "Hard-Water Damage on Fixtures and Appliances",
    body: "Riverside County water is calcium-heavy. Mineral buildup on showerheads, aerators, and dishwasher connections is normal and manageable. Heavy scaling inside supply valves or at copper fittings indicates long-term hard-water damage and shortens fixture life. This is cosmetic in the short term but points to accelerated wear across the entire system.",
  },
  {
    num: 12,
    title: "Sewer Clean-Out Access",
    body: "A sewer clean-out is a capped access point that lets a plumber clear a main-line blockage without digging up the yard. Many homes — especially in Moreno Valley, San Jacinto, and Banning — were built without one or have had the cap buried during landscaping. No accessible clean-out means any future sewer service costs $300 – $600 more and takes longer. Note it and factor it in.",
  },
];

const redFlags = [
  {
    num: 1,
    title: "No Accessible Main Water Shut-Off",
    body: "If a licensed plumber cannot locate and operate the main water shut-off during inspection, the home cannot be safely serviced. Any burst pipe, toilet supply line failure, or fixture leak becomes a race to the street meter. This is not normal. It must be corrected before closing or the seller must provide a credit for installation.",
  },
  {
    num: 2,
    title: "Sewer Camera Shows Root Intrusion or Pipe Bellies",
    body: "Root intrusion from trees or shrubs can be cleared once — but if roots have breached the pipe wall, the line will fail again. Pipe bellies (sags in horizontal runs) trap waste and cause recurring blockages no amount of clearing will permanently fix. Either condition points toward a partial or full sewer line replacement at $4,000 – $12,000 depending on length and depth. Get a repair estimate and ask for a credit.",
  },
  {
    num: 3,
    title: "Galvanized Supply Lines Throughout the Home",
    body: "Galvanized steel pipe corrodes from the inside. By the time exterior rust is visible, the interior diameter has already narrowed significantly. A home with all-galvanized supply lines needs a full repipe — typically $4,500 – $9,000 in Riverside County depending on home size. This is not a patch job. It's a capital improvement and the price belongs in the purchase negotiation.",
  },
  {
    num: 4,
    title: "Multiple Slab Leak Repairs in the Same Home",
    body: "One patched slab leak is common in Southern California. Two or three indicates the copper supply lines embedded in the slab are failing systemically — a consequence of age, soil movement, and hard-water corrosion acting together. A full repipe routed through the walls (above-slab) is the correct fix and typically runs $6,000 – $12,000.",
  },
  {
    num: 5,
    title: "Water Heater 12+ Years Old with Corrosion at the Base or T&P Valve",
    body: "A water heater showing rust at the drain valve, base, or temperature-and-pressure relief valve is past its serviceable life and at risk of failure. Most home insurance carriers require replacement of units past 12 years at time of sale. Budget $1,200 – $2,800 for a tank replacement or $2,500 – $4,500 for a tankless conversion in Riverside County, and put the number in the concession request.",
  },
];

const faqs = [
  {
    q: "How much does a plumbing inspection cost?",
    a: "A dedicated pre-purchase plumbing inspection in Riverside County typically costs $200 – $350. Gardner Plumbing Co. provides a written report with every inspection. A sewer camera inspection, if added, typically costs an additional $150 – $250. Both are far less than the cost of a slab leak, failed sewer line, or whole-home repipe discovered after closing.",
  },
  {
    q: "Do I need a plumbing inspection if the home inspection passed?",
    a: "Yes. A general home inspector evaluates plumbing for visible defects in roughly 15 – 20 minutes. A licensed plumber performing a dedicated inspection spends 60 to 90 minutes on the same system with trade-specific tools — pressure gauge, camera, drain-flow tests on every fixture. General home inspectors are not trained to diagnose slab leak evidence, evaluate water pressure regulation, or run a sewer camera. A passed home inspection means the inspector found no visible defects. It does not mean the plumbing system is in good condition.",
  },
  {
    q: "What is a sewer line camera inspection?",
    a: "A sewer camera inspection threads a flexible camera through the main drain line from the clean-out access point to the connection at the city sewer or septic system. The camera feeds live video that lets the technician identify root intrusion, crushed pipe sections, pipe bellies (sags), and buildup. The inspection typically takes 30 – 45 minutes. For any home with mature trees in the yard, a history of slow drains, or construction before 1990, a sewer camera inspection is not optional — it's the only way to know the condition of the main line before you own it.",
  },
  {
    q: "How long does a plumbing inspection take?",
    a: "Gardner Plumbing Co.'s 65-point plumbing inspection takes 60 to 90 minutes for a typical single-family home. Larger homes or homes with multiple bathrooms, a pool, or irrigation systems take longer. Add 30 – 45 minutes if a sewer camera inspection is included. Plan for 2 hours total if you want the full picture.",
  },
  {
    q: "Can plumbing issues kill a real estate deal?",
    a: "Yes, in the right circumstances. Root intrusion or bellied sewer lines, galvanized supply lines throughout, multiple past slab leaks, or a water heater in imminent failure can give a buyer legal grounds to request repairs, concessions, or cancellation under most California purchase contracts. More often, serious plumbing findings become negotiating points. A written inspection report from a licensed plumber gives your real estate agent a concrete, credible document to put in front of the seller.",
  },
  {
    q: "Who pays for the plumbing inspection — buyer or seller?",
    a: "In California, the buyer typically pays for the plumbing inspection as part of due diligence, the same way the buyer pays for a general home inspection. The cost is not recoverable if the deal falls through. However, if inspection findings lead to a seller credit or price reduction, buyers routinely recover the inspection cost many times over. Some sellers commission a plumbing inspection before listing — a seller-paid pre-listing inspection — to remove uncertainty and speed closing.",
  },
  {
    q: "What if the inspection finds problems after I've already bought the house?",
    a: "Gardner Plumbing Co. serves homeowners at every stage — not just buyers in escrow. If you moved into a home and discovered plumbing problems that weren't disclosed, a licensed plumber can document the condition, estimate repair costs, and provide a written report that supports a disclosure complaint or legal claim. More practically: knowing what you have lets you prioritize repairs correctly and budget for them. Call (951) 246-4337 for a post-purchase plumbing inspection. Gardner Plumbing Co. serves 25 cities across Riverside County, eastern San Bernardino County, and the Coachella Valley.",
  },
];

export function PlumbingInspectionChecklist() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8" aria-label="Breadcrumb">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Plumbing Help", href: "/plumbing-help" },
                { label: "Plumbing Inspection Checklist" },
              ]}
            />
          </nav>

          <SectionBadge icon={ClipboardList} text="Home Buyer's Guide" color="green" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight max-w-4xl">
            Plumbing Inspection Checklist:{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              What to Check Before You Buy a Home
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed max-w-5xl">
            A standard home inspection covers plumbing in about 20 minutes. A licensed plumber doing a dedicated plumbing inspection spends 60 to 90 minutes on the same system — and finds things a general inspector isn&apos;t trained or equipped to catch. A pre-purchase plumbing inspection typically costs $200 – $350. Catching a slab leak or corroded main line after closing costs $3,000 – $8,000 or more.
          </p>

          <p className="text-base text-gray-300 mb-4 leading-relaxed max-w-5xl">
            Gardner Plumbing Co. performs pre-purchase plumbing inspections across Riverside County, the Coachella Valley, and eastern San Bernardino County, and delivers a written report you can hand to your real estate agent or use in seller concession negotiations.
          </p>

          <p className="text-sm text-gray-500 mb-10">Last Updated: June 2026</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF}>
              <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </button>
            </a>
            <Link href="/services/plumbing/65-point-inspection">
              <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                <ClipboardList className="h-5 w-5" aria-hidden="true" />
                See the 65-Point Inspection
              </button>
            </Link>
          </div>

          {/* Hero image placeholder */}
          <div className="mt-10">
            <ImagePromptPlaceholder
              slot="hero"
              aspectRatio="3/2"
              targetWidth={1200}
              targetHeight={800}
              targetFileName="plumbing-inspection-hero.webp"
              prompt={HERO_PROMPT}
              negativePrompt={HERO_NEGATIVE}
              referenceImageNote={HERO_REF}
              altText="Gardner Plumbing technician conducting a 65-point plumbing inspection at a residential water heater and shutoff valve in Riverside County"
              className="w-full rounded-3xl min-h-80"
            />
          </div>
        </div>
      </section>

      {/* ── 12-POINT CHECKLIST ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={CheckCircle} text="12-Point Checklist" color="green" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              The 12 Things Every Plumbing{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Inspection Should Cover
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              A thorough plumbing inspection covers every point where water enters, moves through, or leaves the home.
            </p>
          </div>

          <ol className="space-y-5 max-w-5xl mx-auto">
            {checklistItems.map((item) => (
              <li
                key={item.num}
                className="group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                <div className="relative z-10 p-6 sm:p-7 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg border border-green-400/40 mt-0.5">
                    <span className="text-white font-bold text-base">{item.num}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">{item.title}</p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5 RED FLAGS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={AlertTriangle} text="Deal Killers" color="yellow" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              5 Plumbing Red Flags That Should Kill a Deal{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                (or Trigger a Seller Concession)
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Most plumbing issues are negotiating chips. These five are different — they represent systemic problems that affect the safety, livability, or insurability of the home.
            </p>
          </div>

          <ol className="space-y-5 max-w-5xl mx-auto">
            {redFlags.map((flag) => (
              <li
                key={flag.num}
                className="group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                <div className="relative z-10 p-6 sm:p-7 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg border border-yellow-400/40 mt-0.5">
                    <span className="text-white font-bold text-base">{flag.num}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">{flag.title}</p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{flag.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 65-POINT INSPECTION + SoCal CONTEXT ─────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* 65-point */}
            <div>
              <SectionBadge icon={ClipboardList} text="Our Inspection" color="green" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                What Gardner&apos;s{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  65-Point Inspection Covers
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Documented 65-point checklist, not a technician's memory.",
                    body: "Every inspection follows a documented process covering every accessible component — including gas line connections, drain-vent stack condition, water filtration equipment, and irrigation system shut-offs.",
                  },
                  {
                    title: "Written report in hand at the end.",
                    body: "Buyers receive a written report itemizing each point evaluated, condition noted, and any recommended action — a document your real estate agent can use in negotiation.",
                  },
                  {
                    title: "Technician walkthrough on-site.",
                    body: "The technician walks through findings with you before leaving. If a sewer camera is added, the camera footage is reviewed with you in real time.",
                  },
                  {
                    title: "More thorough than a general home inspection.",
                    body: "Performed by a licensed plumber (CSLB #1073177) using trade-specific tools, not a general inspector checking boxes in 20 minutes.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 shadow-luxury hover:border-green-500/40 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex gap-4 items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-white font-bold text-base mb-1">{item.title}</p>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/services/plumbing/65-point-inspection">
                  <button className="w-full min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg border border-green-400/20 transition-all duration-300 group">
                    <ClipboardList className="h-5 w-5" aria-hidden="true" />
                    See Full 65-Point Inspection Details
                  </button>
                </Link>
              </div>

              {/* Mid image placeholder — checklist document close-up */}
              <div className="mt-6">
                <ImagePromptPlaceholder
                  slot="before-after"
                  aspectRatio="3/2"
                  targetWidth={1200}
                  targetHeight={800}
                  targetFileName="plumbing-inspection-checklist-doc.webp"
                  prompt={MID_PROMPT}
                  negativePrompt={MID_NEGATIVE}
                  altText="Gardner Plumbing Co. 65-point plumbing inspection checklist with items checked off during a pre-purchase home inspection in Riverside County"
                  className="w-full rounded-2xl min-h-64"
                />
              </div>
            </div>

            {/* SoCal context */}
            <div>
              <SectionBadge icon={Home} text="Southern California" color="red" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Southern California-Specific{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Plumbing Concerns
                </span>
              </h2>
              <div
                className="rounded-2xl p-6 sm:p-8 border border-white/10 shadow-luxury"
                style={{
                  background: "linear-gradient(160deg, rgba(220,38,38,0.08) 0%, rgba(17,24,39,0.95) 60%, rgba(220,38,38,0.04) 100%)",
                }}
              >
                <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Riverside County homes present a specific set of plumbing risks that don&apos;t apply the same way in most other U.S. markets. Nearly all residential construction in the Inland Empire and Coachella Valley sits on a concrete slab — no crawl space, no basement. That means every supply line and drain line runs through or under the slab, making any leak a potential jackhammer job and making visual inspection of those lines impossible without a camera or electronic leak detection equipment.
                  </p>
                  <p>
                    The region&apos;s water supply is also among the hardest in California. Water from the Colorado River and Eastern Municipal Water District sources carries high calcium and magnesium concentrations. Over years, that mineral load calcifies inside water heaters, narrows supply valves, attacks copper soldering joints, and reduces tankless heater efficiency significantly.
                  </p>
                  <p>
                    Homes in Palm Springs, Cathedral City, and Palm Desert show accelerated mineral wear on every fixture. Buyers of 1970s through 1990s homes in Corona, Hemet, Perris, and San Jacinto should specifically ask about pipe material and supply line age — that era&apos;s housing stock used galvanized pipe into the mid-1980s and original copper that is now 35 to 50 years old.
                  </p>
                </div>
              </div>

              {/* Trust image placeholder — homebuyer group review */}
              <div className="mt-6">
                <ImagePromptPlaceholder
                  slot="before-after"
                  aspectRatio="4/3"
                  targetWidth={800}
                  targetHeight={600}
                  targetFileName="plumbing-inspection-review.webp"
                  prompt={TRUST_PROMPT}
                  negativePrompt={TRUST_NEGATIVE}
                  referenceImageNote="Attach the two real Gardner team reference photos (provided 2026-06-12) for the technician face/likeness only. The homebuyer couple should be generic adults."
                  altText="Gardner Plumbing technician reviewing a plumbing inspection report with homebuyers at a kitchen table before purchase in Riverside County"
                  className="w-full rounded-2xl min-h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionBadge icon={HelpCircle} text="FAQ" color="blue" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Plumbing Inspection{" "}
              <span className="bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions Answered
              </span>
            </h2>
          </div>

          <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden">
            <div
              className="relative overflow-hidden px-6 sm:px-8 py-6"
              style={{
                background: "linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)",
              }}
            >
              <div className="relative flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <HelpCircle className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">Questions &amp; Answers</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl"
                    style={{
                      backgroundColor: "#202020",
                      backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                    <div className="relative z-10">
                      <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-400 px-6 sm:px-8 py-6 transition-colors duration-300 text-base font-semibold">
                        <span className="flex items-start gap-4 pr-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <HelpCircle className="h-4 w-4 text-blue-400" aria-hidden="true" />
                          </div>
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6 sm:pb-8 px-6 sm:px-8 ml-12 text-base leading-relaxed">
                        <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">
                          {faq.a}
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED RESOURCES ────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionBadge icon={FileText} text="Related Resources" color="blue" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 drop-shadow-lg">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: "/services/plumbing/65-point-inspection", label: "65-Point Plumbing Inspection", desc: "What Gardner Plumbing Co. checks on every full-system evaluation." },
              { href: "/plumbing-help/slab-leak-what-to-do", label: "Slab Leak: What to Do", desc: "Signs, causes, and repair options for Southern California slab foundations." },
              { href: "/services/plumbing/leak-detection", label: "Leak Detection", desc: "Electronic and camera-based leak location for supply and drain lines." },
              { href: "/gardner-shield", label: "Gardner Shield", desc: "Post-purchase maintenance plan for ongoing plumbing health." },
              { href: "/services/plumbing/water-heater-service", label: "Water Heater Service", desc: "Tank and tankless repair, replacement, and efficiency service." },
              { href: "/plumbing-help/pipe-burst-what-to-do", label: "What to Do If a Pipe Bursts", desc: "Immediate steps to limit water damage." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 shadow-luxury hover:border-green-500/40 transition-all duration-300 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex gap-3 items-start">
                  <ArrowRight className="h-4 w-4 text-green-400 flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1 group-hover:text-green-300 transition-colors duration-300">{link.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{link.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY CTA ────────────────────────────────────────── */}
      <div
        className="fixed bottom-0 inset-x-0 lg:hidden z-50 flex"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 transition-colors min-h-[56px]"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact-us"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 transition-colors min-h-[56px] border-l border-white/20"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
          <span>Get Estimate</span>
        </Link>
      </div>
    </div>
  );
}
