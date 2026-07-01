"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProtectHomeBanner } from "@/components/ProtectHomeBanner";
import {
  Phone,
  ClipboardList,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
  FileText,
  Home,
  Droplets,
  Clock,
  Shield,
  Flame,
  TrendingUp,
} from "lucide-react";

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
    cost: "Seller credit",
    body: "If a licensed plumber cannot locate and operate the main water shut-off during inspection, the home cannot be safely serviced. Any burst pipe, toilet supply line failure, or fixture leak becomes a race to the street meter. This is not normal. It must be corrected before closing or the seller must provide a credit for installation.",
  },
  {
    num: 2,
    title: "Sewer Camera Shows Root Intrusion or Pipe Bellies",
    cost: "$4,000 – $12,000",
    body: "Root intrusion from trees or shrubs can be cleared once — but if roots have breached the pipe wall, the line will fail again. Pipe bellies (sags in horizontal runs) trap waste and cause recurring blockages no amount of clearing will permanently fix. Either condition points toward a partial or full sewer line replacement depending on length and depth. Get a repair estimate and ask for a credit.",
  },
  {
    num: 3,
    title: "Galvanized Supply Lines Throughout the Home",
    cost: "$4,500 – $9,000",
    body: "Galvanized steel pipe corrodes from the inside. By the time exterior rust is visible, the interior diameter has already narrowed significantly. A home with all-galvanized supply lines needs a full repipe (typical Riverside County range depending on home size). This is not a patch job. It's a capital improvement and the price belongs in the purchase negotiation.",
  },
  {
    num: 4,
    title: "Multiple Slab Leak Repairs in the Same Home",
    cost: "$6,000 – $12,000",
    body: "One patched slab leak is common in Southern California. Two or three indicates the copper supply lines embedded in the slab are failing systemically — a consequence of age, soil movement, and hard-water corrosion acting together. A full repipe routed through the walls (above-slab) is the correct fix.",
  },
  {
    num: 5,
    title: "Water Heater 12+ Years Old with Corrosion at Base or T&P Valve",
    cost: "$1,200 – $4,500",
    body: "A water heater showing rust at the drain valve, base, or temperature-and-pressure relief valve is past its serviceable life and at risk of failure. Most home insurance carriers require replacement of units past 12 years at time of sale. Range covers tank replacement through tankless conversion. Put the number in the concession request.",
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: text + CTAs */}
            <div className="lg:col-span-7">
              <SectionBadge icon={ClipboardList} text="Home Buyer's Guide" color="green" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Plumbing Inspection Checklist:{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  What to Check Before You Buy a Home
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                A standard home inspection covers plumbing in about 20 minutes. A licensed plumber doing a dedicated plumbing inspection spends 60 to 90 minutes on the same system — and finds things a general inspector isn&apos;t trained or equipped to catch. A pre-purchase plumbing inspection typically costs $200 – $350. Catching a slab leak or corroded main line after closing costs $3,000 – $8,000 or more.
              </p>

              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                Gardner Plumbing Co. performs pre-purchase plumbing inspections across Riverside County, the Coachella Valley, and eastern San Bernardino County, and delivers a written report you can hand to your real estate agent or use in seller concession negotiations.
              </p>

              <p className="text-sm text-gray-500 mb-8">Last Updated: June 2026</p>

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
            </div>

            {/* Right: hero image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury border border-white/10">
                <Image
                  src="/plumbing-inspection-hero.webp"
                  alt="Gardner Plumbing technician conducting a 65-point plumbing inspection at a residential water heater and shutoff valve in Riverside County"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SITE-WIDE PROTECT-HOME BANNER ─────────────────────────────── */}
      <ProtectHomeBanner />

      {/* ── COST COMPARISON CALLOUT ─────────────────────────────────── */}
      <section className="py-12 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <TrendingUp className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
              <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">
                The Math
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight max-w-3xl mx-auto">
              A pre-purchase plumbing inspection is a{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                fraction of the cost
              </span>{" "}
              of what it catches.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Inspection cost */}
            <div className="relative rounded-2xl border border-green-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-green-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full">
                  <ClipboardList className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
                    Pre-Purchase Inspection
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $200 – $350
                </p>
                <p className="text-gray-400 text-sm">
                  60 – 90 minutes on-site + written report
                </p>
              </div>
            </div>
            {/* Fix after closing */}
            <div className="relative rounded-2xl border border-red-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-red-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-500/15 border border-red-500/30 rounded-full">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                    Fix After Closing
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $3,000 – $8,000+
                </p>
                <p className="text-gray-400 text-sm">
                  Slab leak, corroded main, or failed repipe
                </p>
              </div>
            </div>
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

          <div className="w-full">
            <p className="text-center text-xs sm:text-sm text-gray-500 mb-6 italic">
              Tap any item to see what inspectors look for and why it matters.
            </p>
            <Accordion
              type="multiple"
              className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 lg:grid-flow-col gap-3 lg:gap-4"
            >
              {checklistItems.map((item) => (
                <AccordionItem
                  key={item.num}
                  value={`item-${item.num}`}
                  className="relative overflow-hidden rounded-2xl border-none shadow-luxury"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl pointer-events-none" />
                  <AccordionTrigger className="relative z-10 group px-5 sm:px-6 py-4 sm:py-5 hover:no-underline">
                    <div className="flex gap-4 items-center flex-1 text-left">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg border border-green-400/40">
                        <span className="text-white font-bold text-base">{item.num}</span>
                      </div>
                      <span className="text-white font-bold text-base sm:text-lg leading-snug">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="relative z-10 px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="pl-14">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── 65-POINT INSPECTION + SoCal CONTEXT ─────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
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
              <div className="space-y-4">
                {[
                  {
                    icon: Home,
                    title: "Slab foundations, no crawl space.",
                    body: "Nearly all residential construction in the Inland Empire and Coachella Valley sits on a concrete slab. Every supply line runs through or under it — making any leak a potential jackhammer job and requiring camera or electronic detection to find.",
                  },
                  {
                    icon: Droplets,
                    title: "Some of the hardest water in California.",
                    body: "Colorado River and Eastern Municipal Water District sources carry high calcium and magnesium. Over years, that mineral load calcifies water heaters, narrows supply valves, and attacks copper soldering joints across the whole system.",
                  },
                  {
                    icon: Clock,
                    title: "1970s – 1990s housing stock is aging out.",
                    body: "Palm Springs, Cathedral City, and Palm Desert show accelerated fixture wear. Buyers in Corona, Hemet, Perris, and San Jacinto should ask about pipe material — that era used galvanized into the mid-1980s and copper that is now 35 – 50 years old.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 shadow-luxury hover:border-red-500/40 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex gap-4 items-start">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-red-600/30 to-red-500/20 border border-red-500/30 flex items-center justify-center mt-0.5">
                          <Icon className="h-4 w-4 text-red-400" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-base mb-1">{item.title}</p>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 RED FLAGS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={AlertTriangle} text="Deal Killers" color="red" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              5 Plumbing Red Flags That Should Kill a Deal{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                (or Trigger a Seller Concession)
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Most plumbing issues are negotiating chips. These five are different — they represent systemic problems that affect the safety, livability, or insurability of the home.
            </p>
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {redFlags.map((flag, i) => (
              <li
                key={flag.num}
                className={`group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500 ${
                  i === redFlags.length - 1 ? "lg:col-span-2" : ""
                }`}
                style={{
                  backgroundColor: "#202020",
                  backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                  {/* Header row: number + cost pill */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg border border-red-400/40">
                      <span className="text-white font-bold text-base">{flag.num}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full flex-shrink-0">
                      <AlertTriangle className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-bold text-red-300 whitespace-nowrap">
                        {flag.cost}
                      </span>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">
                    {flag.title}
                  </h3>
                  {/* Body */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                    {flag.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── "WHAT YOU GET" IMAGE SHOWCASE ─────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <SectionBadge icon={FileText} text="What You Get" color="green" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              A Written Report &amp;{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Real-Time Walkthrough
              </span>
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every Gardner inspection ends with a written 65-point report and a real-time walkthrough. Take the report to your agent, the seller, or your lender — it&apos;s written to be used.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left: checklist doc image */}
            <figure className="relative rounded-2xl overflow-hidden shadow-luxury border border-white/10 group">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/plumbing-inspection-checklist-doc.webp"
                  alt="Gardner Plumbing Co. 65-point plumbing inspection checklist with items checked off during a pre-purchase home inspection in Riverside County"
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 sm:p-6">
                <p className="text-white font-bold text-base sm:text-lg mb-1">The Written 65-Point Report</p>
                <p className="text-gray-300 text-sm">Every accessible component evaluated, condition noted, action recommended.</p>
              </figcaption>
            </figure>

            {/* Right: buyer/agent review image */}
            <figure className="relative rounded-2xl overflow-hidden shadow-luxury border border-white/10 group">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/plumbing-inspection-review.webp"
                  alt="Gardner Plumbing technician reviewing a plumbing inspection report with homebuyers at a kitchen table before purchase in Riverside County"
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 sm:p-6">
                <p className="text-white font-bold text-base sm:text-lg mb-1">Review With Your Real Estate Agent</p>
                <p className="text-gray-300 text-sm">Buyers use the report in concession negotiations — sellers use it to price honestly.</p>
              </figcaption>
            </figure>
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
          <div className="text-center mb-10">
            <SectionBadge icon={FileText} text="Related Resources" color="blue" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
              Keep Reading
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: "/services/plumbing/65-point-inspection",
                label: "65-Point Plumbing Inspection",
                desc: "The full evaluation Gardner performs on every home.",
                icon: ClipboardList,
                accent: "green",
              },
              {
                href: "/plumbing-help/slab-leak-what-to-do",
                label: "Slab Leak: What to Do",
                desc: "Signs, causes, and repair options for slab foundations.",
                icon: Home,
                accent: "red",
              },
              {
                href: "/services/plumbing/leak-detection",
                label: "Leak Detection",
                desc: "Electronic and camera-based leak location, no jackhammering.",
                icon: Droplets,
                accent: "blue",
              },
              {
                href: "/gardner-shield",
                label: "Gardner Shield",
                desc: "Post-purchase maintenance plan for ongoing plumbing health.",
                icon: Shield,
                accent: "green",
              },
              {
                href: "/services/plumbing/water-heater-service",
                label: "Water Heater Service",
                desc: "Tank and tankless repair, replacement, and efficiency service.",
                icon: Flame,
                accent: "red",
              },
              {
                href: "/plumbing-help/pipe-burst-what-to-do",
                label: "Pipe Burst: What to Do",
                desc: "Immediate steps to limit water damage before help arrives.",
                icon: AlertTriangle,
                accent: "red",
              },
            ].map((link) => {
              const Icon = link.icon;
              const accentClasses: Record<string, { border: string; iconBg: string; iconText: string; titleHover: string }> = {
                green: {
                  border: "hover:border-green-500/50",
                  iconBg: "bg-gradient-to-br from-green-600/30 to-green-500/20 border-green-500/30",
                  iconText: "text-green-400",
                  titleHover: "group-hover:text-green-300",
                },
                red: {
                  border: "hover:border-red-500/50",
                  iconBg: "bg-gradient-to-br from-red-600/30 to-red-500/20 border-red-500/30",
                  iconText: "text-red-400",
                  titleHover: "group-hover:text-red-300",
                },
                blue: {
                  border: "hover:border-blue-500/50",
                  iconBg: "bg-gradient-to-br from-blue-600/30 to-blue-500/20 border-blue-500/30",
                  iconText: "text-blue-400",
                  titleHover: "group-hover:text-blue-300",
                },
              };
              const styles = accentClasses[link.accent];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 shadow-luxury ${styles.border} hover:-translate-y-0.5 transition-all duration-300 overflow-hidden block`}
                >
                  <div className="relative z-10 flex gap-4 items-start">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${styles.iconBg} border flex items-center justify-center mt-0.5`}>
                      <Icon className={`h-5 w-5 ${styles.iconText}`} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <p className={`text-white font-semibold text-sm ${styles.titleHover} transition-colors duration-300`}>
                          {link.label}
                        </p>
                        <ArrowRight className={`h-3.5 w-3.5 ${styles.iconText} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300`} aria-hidden="true" />
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{link.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
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
