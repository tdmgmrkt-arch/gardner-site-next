"use client";

import Link from "next/link";
import Image from "next/image";
import { ProtectHomeBanner } from "@/components/ProtectHomeBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Phone,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Clock,
  Wrench,
  FileText,
  Shield,
  Droplets,
  Home,
  TrendingUp,
  ClipboardList,
} from "lucide-react";

// ─── Image prompt constants (sourced from seo/scenario-image-prompts/slab-leak-*.md) ───

const HERO_PROMPT =
  "Documentary photograph of a plumbing technician crouched low on a residential kitchen tile floor, pressing a ground microphone acoustic listening device against the tile surface with one hand. The technician is wearing headphones over the dark navy ball cap, eyes focused downward on the floor, listening intently. The other hand rests flat on the floor for balance. The technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag visible beside them on the floor. Warm interior residential lighting — recessed lights and natural window light combined. The kitchen floor is standard residential tile. No visible water damage in frame. 50mm equivalent lens, documentary photography style, no studio lighting. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no cartoon, no illustration, no text overlay, no watermark, no posed smile at camera, no excessive lens flare, no visible flood water or damage in the hero frame, no mid-stride action pose, no jackhammer visible";

const HERO_REF =
  "Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Do not describe face, age, or ethnicity in the prompt.";

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
  color?: "red" | "blue" | "green";
}) {
  const colorMap = {
    red: "from-red-600/20 to-red-500/20 border-red-500/30",
    blue: "from-blue-600/20 to-blue-500/20 border-blue-500/30",
    green: "from-green-600/20 to-green-500/20 border-green-500/30",
  };
  const iconColorMap = {
    red: "text-red-400",
    blue: "text-blue-400",
    green: "text-green-400",
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

const signs = [
  {
    num: 1,
    title: "Your water bill spiked with no obvious cause.",
    body: "A water bill that jumps $50 – $200 in a single billing cycle, with no change in household usage, points strongly to a pressurized leak under the slab. Hot-water-line slab leaks are especially common in Riverside County because the hard water erodes copper fittings from the inside over time.",
  },
  {
    num: 2,
    title: "You feel a warm or hot spot on your floor.",
    body: "Slab leaks on hot-water lines raise the temperature of the concrete directly above the break. Walk barefoot across tile, hardwood, or laminate and note any section that feels noticeably warmer than the rest of the floor. This is one of the most reliable self-diagnostic tests a homeowner can perform.",
  },
  {
    num: 3,
    title: "You hear water running when everything is off.",
    body: "Turn off every faucet, appliance, and irrigation zone. Stand in a quiet room. A faint hissing or rushing sound — especially near exterior walls or in the center of the house — suggests water is moving through a pipe it shouldn't be.",
  },
  {
    num: 4,
    title: "Your water pressure dropped suddenly.",
    body: "A pressurized line that's breached bleeds pressure before water reaches your fixtures. If your shower suddenly feels weak or faucets run slower than normal, a leak in the supply line — including under the slab — is a likely cause.",
  },
  {
    num: 5,
    title: "You smell mildew in one specific area of the house.",
    body: "Water escaping a slab pipe wicks upward through concrete and subfloor. When it reaches organic material — wood framing, carpet pad, drywall — it creates the conditions for mold within 24 – 48 hours. A musty smell concentrated in one room, without a visible water source, is a red flag.",
  },
  {
    num: 6,
    title: "Your flooring is buckling, cracking, or separating.",
    body: "Prolonged moisture from a slab leak softens the subfloor and causes tile grout to crack, hardwood planks to buckle, or carpet to develop damp patches. If the damage appears in a pattern — along one wall, in one corner — trace it to the nearest plumbing run.",
  },
  {
    num: 7,
    title: "You notice cracks in walls or a door frame that no longer closes squarely.",
    body: "Water under a slab changes the soil's load-bearing capacity. In Riverside County, where expansive clay soil is common in cities like Menifee, Perris, and parts of Corona, even a slow leak can shift a slab enough to crack drywall or rack a door frame. Foundation movement is a late-stage symptom — if you're here, call today.",
  },
];

const actionSteps = [
  {
    num: 1,
    title: "Check your water meter with everything off.",
    body: "Locate the meter at the street. Turn off every faucet, toilet, appliance, and irrigation zone inside the house. Watch the meter's low-flow indicator (a small triangle or dial) for 60 seconds. If it moves, water is flowing somewhere — likely a leak. Take a photo of the meter reading, wait 30 minutes without using any water, then check again. A rising number confirms a leak.",
  },
  {
    num: 2,
    title: "Note exactly where the warm spot or damp area is.",
    body: "Walk the perimeter and interior of the house. Mark the spot with a piece of tape. When a technician arrives with acoustic detection equipment, your observation cuts the diagnostic time from 2 – 3 hours to under an hour. Specific location data matters.",
  },
  {
    num: 3,
    title: "Shut off the water to that zone if you know how.",
    body: "If you have individual shut-offs under sinks or at the water heater and the warm spot is near the hot-water side of the house, shutting off the water heater supply can slow the leak. If you're not certain which valve controls which line, shut off the main supply at the street. A few hours without water is far less expensive than a flooded subfloor.",
  },
  {
    num: 4,
    title: "Call for professional leak detection — don't dig, don't drill.",
    body: "Slab leaks require acoustic listening equipment, electronic amplification, and sometimes thermal imaging to locate accurately. A homeowner breaking concrete to find a leak they heard \"somewhere over there\" regularly causes $3,000 – $6,000 in unnecessary repair costs. Detection technology narrows the break to a 12-inch section. Call Gardner Plumbing Co. at (951) 246-4337 — 24/7 emergency dispatch is available.",
  },
];

const faqs = [
  {
    q: "How much does slab leak detection cost in Riverside County?",
    a: "Slab leak detection in Riverside County typically costs $250 – $450 for a residential property. That covers acoustic listening, electronic amplification, pressure testing, and a pinpointed leak location. Gardner Plumbing Co. provides the detection results and a written repair estimate before any work on the concrete begins.",
  },
  {
    q: "Will my homeowner's insurance cover a slab leak?",
    a: "Most California homeowner's insurance policies (HO-3) cover the water damage from a slab leak — damaged flooring, wet drywall, mold remediation — but do not cover the cost of repairing the broken pipe itself or the concrete access. If your policy includes a \"service line\" or \"equipment breakdown\" rider, that may cover the pipe repair. Ask your insurer for your specific coverage terms. Gardner Plumbing Co. provides itemized documentation for all insurance claims.",
  },
  {
    q: "Do you have to break the concrete to fix a slab leak?",
    a: "Not always, and never the whole floor. Gardner Plumbing Co. uses acoustic equipment and electronic correlators to locate the break to within 12 – 18 inches before any concrete is opened. Depending on the pipe condition and repair method, a reroute option runs the new line above the slab through walls or ceilings, avoiding concrete work entirely. A spot repair does require cutting a targeted section of slab — typically 18 – 24 inches square — not a trench across the room.",
  },
  {
    q: "How long does slab leak repair take?",
    a: "Detection typically takes 1 – 3 hours. A spot repair can usually be completed the same day in 4 – 6 hours. A full pipe reroute typically takes 1 – 2 days depending on the pipe routing through the home. Epoxy lining timelines vary. Gardner technicians walk through the repair timeline and any temporary water shutoffs before work begins.",
  },
  {
    q: "Can a slab leak fix itself?",
    a: "No. A breach in a pressurized pipe does not seal on its own. The leak continues 24 hours a day, every day, until the pipe is repaired. A slow slab leak that shows only a modest water bill increase in month one will typically expand as the surrounding soil softens and the pipe joint shifts further. Early detection and repair is significantly less expensive than addressing the same leak after months of foundation moisture and interior water damage.",
  },
  {
    q: "How dangerous is an unrepaired slab leak?",
    a: "An unrepaired slab leak creates three compounding risks. First, water cost: a moderate slab leak wastes 20 – 50 gallons per day, adding $30 – $90 per month to water bills indefinitely. Second, structure: prolonged moisture under a slab softens the subgrade soil, which in Riverside County's expansive-clay areas can accelerate foundation movement and lead to cracked slabs, sticking doors, and wall cracks. Third, indoor air quality: moisture wicking into subfloors and wall cavities creates conditions for mold growth within 24 – 48 hours of saturation. Mold remediation in a single room costs $1,500 – $5,000 before any plumbing repair is considered.",
  },
  {
    q: "How do I prevent slab leaks?",
    a: "Four measures reduce risk in Riverside County homes. First, install a whole-home water softener — hard water is the primary cause of copper pipe corrosion in this area. Second, maintain water pressure below 80 psi using a pressure-reducing valve; high pressure stresses pipe joints. Third, consider a smart water monitor like Moen Flo, which detects flow anomalies and can shut off the main supply automatically if a leak starts. Fourth, schedule a plumbing inspection on any home over 20 years old with original copper supply lines. Gardner Plumbing Co. offers the Gardner Shield maintenance plan, which includes annual system checks.",
  },
];

export function SlabLeakScenario() {
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
                { label: "Slab Leak — What to Do" },
              ]}
            />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: text + CTAs */}
            <div className="lg:col-span-7">
              <SectionBadge icon={AlertTriangle} text="Slab Leak Guide" color="red" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                How to Know If You Have a Slab Leak —{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  and What to Do Next
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
                A slab leak is a break in a water line running beneath your home&apos;s concrete foundation. The three most common warning signs are a water bill that spiked without explanation, a warm or damp spot on your floor, and the sound of running water when every faucet and fixture in the house is off. If you notice any one of these, don&apos;t wait — call a licensed plumber for professional detection before the leak weakens your foundation or drives water into your walls.
              </p>

              <p className="text-base text-gray-300 mb-4 leading-relaxed">
                Gardner Plumbing Co. serves 25 cities across Riverside County, eastern San Bernardino County, and the Coachella Valley — including Murrieta, Temecula, Menifee, Riverside, Corona, Eastvale, Palm Springs, Palm Desert, Redlands, and Yucaipa. Call 24/7:{" "}
                <a href={PHONE_HREF} className="text-red-400 font-semibold hover:text-red-300 transition-colors">
                  {PHONE_DISPLAY}
                </a>.
              </p>

              <p className="text-sm text-gray-500 mb-8">Last Updated: June 2026</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF}>
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    Call {PHONE_DISPLAY} — 24/7
                  </button>
                </a>
                <Link href="/contact-us">
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                    Request Service Online
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury border border-white/10">
                <Image
                  src="/slab-leak-hero.webp"
                  alt="Gardner Plumbing technician using acoustic leak detection equipment to locate a slab leak beneath a Riverside County home's kitchen floor"
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

      {/* ── 7 SIGNS ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={AlertTriangle} text="Warning Signs" color="red" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              7 Signs You Have a{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Slab Leak
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Each one is a standalone indicator — you don&apos;t need all seven to have a problem.
            </p>
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {signs.map((sign, i) => (
              <li
                key={sign.num}
                className={`group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500 ${
                  i === signs.length - 1 ? "lg:col-span-2" : ""
                }`}
                style={{
                  backgroundColor: "#202020",
                  backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                <div className="relative z-10 p-6 sm:p-7 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg border border-red-400/40 mt-0.5">
                    <span className="text-white font-bold text-base">{sign.num}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">{sign.title}</p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{sign.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHAT TO DO IN THE NEXT HOUR ──────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={Clock} text="Act Now" color="red" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              What to Do in the{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Next Hour
              </span>
            </h2>
          </div>

          <ol className="space-y-5">
            {actionSteps.map((step) => (
              <li
                key={step.num}
                className="group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                <div className="relative z-10 p-6 sm:p-7 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg border border-red-400/40 mt-0.5">
                    <span className="text-white font-bold text-base">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">{step.title}</p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

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
              Slab leaks get{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                more expensive by the week.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Detection + spot repair */}
            <div className="relative rounded-2xl border border-green-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-green-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full">
                  <Wrench className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
                    Detection + Spot Repair
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $1,500 – $4,000
                </p>
                <p className="text-gray-400 text-sm">
                  Acoustic detection isolates the leak to one foot
                </p>
              </div>
            </div>
            {/* Ignore it 90 days */}
            <div className="relative rounded-2xl border border-red-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-red-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-500/15 border border-red-500/30 rounded-full">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                    Ignore It 90 Days
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $8,000 – $20,000+
                </p>
                <p className="text-gray-400 text-sm">
                  Full repipe, flooring replacement, mold remediation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW GARDNER DETECTS ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Detection — text left */}
            <div>
              <SectionBadge icon={Wrench} text="Precision Detection" color="red" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                How Gardner Detects Slab Leaks{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Without Jackhammering Your Whole House
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Acoustic listening equipment",
                    body: "A trained technician presses a ground microphone against the slab surface and listens for the distinct frequency of pressurized water escaping a pipe.",
                  },
                  {
                    title: "Electronic amplification",
                    body: "Correlators compare the arrival time of the leak sound at two access points, calculating the exact distance from each end. This isolates the break to within a foot.",
                  },
                  {
                    title: "Thermal imaging",
                    body: "On hot-water line breaks, an infrared camera reads the temperature differential in the slab surface. Warm moisture traveling upward creates a visible heat signature.",
                  },
                  {
                    title: "Pressure testing",
                    body: "The suspected line is isolated and pressurized with nitrogen. A pressure drop confirms the leak is on that section, not elsewhere in the system.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 shadow-luxury hover:border-red-500/40 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            </div>

            {/* Right: stacked images — thermal on top, technician on bottom */}
            <div className="space-y-6">
              <figure className="relative rounded-2xl overflow-hidden shadow-luxury border border-white/10">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src="/slab-leak-thermal.webp"
                    alt="Thermal imaging scan of a kitchen floor showing a warm-spot heat signature from a hot-water slab leak beneath the concrete foundation"
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-5">
                  <p className="text-white font-bold text-sm sm:text-base">Thermal Imaging in Action</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Warm spot = pressurized hot-water leak beneath the slab.</p>
                </figcaption>
              </figure>

              <figure className="relative rounded-2xl overflow-hidden shadow-luxury border border-white/10">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/slab-leak-explain.1.webp"
                    alt="Gardner Plumbing technician performing acoustic slab leak detection on a Riverside County home kitchen floor"
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-5">
                  <p className="text-white font-bold text-sm sm:text-base">On-Site Detection</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Isolate the leak to within a foot before any concrete comes up.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT COSTS ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <SectionBadge icon={Shield} text="What It Costs" color="green" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              What Does Slab Leak Repair{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Actually Cost?
              </span>
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gardner Plumbing Co. gives you a written estimate before any work begins — three repair paths depending on what the detection finds.
            </p>
          </div>
          {/* 4-card pricing grid — 2 cols on md+, 1 col on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {[
              {
                icon: Wrench,
                label: "Step 1 — Detection",
                title: "Pinpoint the Leak",
                cost: "$250 – $450",
                body: "Acoustic listening, electronic amplification, pressure testing, and a written estimate before any work begins. Gardner isolates the leak to within a foot before any concrete comes up.",
              },
              {
                icon: CheckCircle,
                label: "Repair Option A",
                title: "Spot Repair",
                cost: "$1,500 – $2,500",
                body: "Targeted section of pipe exposed, damaged section cut out and replaced, concrete patched. Best for a single isolated break on an otherwise sound pipe.",
              },
              {
                icon: ArrowRight,
                label: "Repair Option B",
                title: "Pipe Reroute",
                cost: "$2,000 – $4,000",
                body: "New supply line run above the slab — through walls or ceiling — bypassing the under-slab pipe entirely. Best when multiple failures suggest the buried line is at end of life.",
              },
              {
                icon: Droplets,
                label: "Repair Option C",
                title: "Epoxy Pipe Lining",
                cost: "$3,000 – $5,000+",
                body: "A resin liner pulled through the existing pipe, sealing the interior without excavation. Not appropriate for all pipe sizes or materials — the detection determines candidacy.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                    {/* Header row: icon + cost pill */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg border border-green-400/40">
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full flex-shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-green-300 whitespace-nowrap">
                          {item.cost}
                        </span>
                      </div>
                    </div>
                    {/* Label */}
                    <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1.5">
                      {item.label}
                    </p>
                    {/* Title */}
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2 leading-snug">
                      {item.title}
                    </h3>
                    {/* Body */}
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Insurance note — subtle callout below the grid */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              Most standard homeowner&apos;s insurance policies cover water damage from a slab leak but not the pipe repair itself. Gardner Plumbing Co. provides detailed documentation for insurance claims. See <Link href="/guarantee" className="text-red-400 hover:text-red-300 transition-colors">our guarantee</Link> for written commitments on every job.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a href={PHONE_HREF} className="flex-1">
              <button className="w-full min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                Call Now — 24/7 Dispatch
              </button>
            </a>
            <Link href="/contact-us" className="flex-1">
              <button className="w-full min-h-[44px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-4 rounded-xl transition-all duration-300 group bg-transparent">
                <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                Book Detection Online
              </button>
            </Link>
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
              Slab Leak{" "}
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
                href: "/plumbing-help/pipe-burst-what-to-do",
                label: "What to Do If a Pipe Bursts",
                desc: "Step-by-step for active flooding.",
                icon: AlertTriangle,
                accent: "red",
              },
              {
                href: "/services/plumbing/leak-detection",
                label: "Leak Detection Service",
                desc: "How Gardner's detection process works, equipment, and service area.",
                icon: Droplets,
                accent: "blue",
              },
              {
                href: "/gardner-shield",
                label: "Gardner Shield Maintenance Plan",
                desc: "Annual plumbing inspections and priority scheduling.",
                icon: Shield,
                accent: "green",
              },
              {
                href: "/guarantee",
                label: "The Gardner Promise",
                desc: "Written commitments on every service call.",
                icon: CheckCircle,
                accent: "green",
              },
              {
                href: "/plumbing-help/plumbing-inspection-checklist",
                label: "Plumbing Inspection Checklist",
                desc: "What to check before you buy a home.",
                icon: ClipboardList,
                accent: "blue",
              },
              {
                href: "/plumbing-help/drain-clog-what-to-do",
                label: "Drain Clog: What to Do",
                desc: "Signs, steps, and when to call a pro.",
                icon: Home,
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
