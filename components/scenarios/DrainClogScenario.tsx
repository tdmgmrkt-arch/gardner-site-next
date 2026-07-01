"use client";

import Link from "next/link";
import { ImagePromptPlaceholder } from "@/components/ImagePromptPlaceholder";
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
  Droplets,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Clock,
  Wrench,
  FileText,
  AlertTriangle,
  Shield,
  Home,
  TrendingUp,
  ClipboardList,
} from "lucide-react";

// ─── Image prompt constants (sourced from seo/scenario-image-prompts/drain-clog-*.md) ───

const HERO_PROMPT =
  "Documentary photograph of a plumbing technician kneeling beside a kitchen island or counter, holding a tablet in both hands, reviewing camera inspection footage on the tablet screen. The tablet screen shows a drain pipe interior with visible root intrusion — the camera feed is legible as a circular pipe interior image with organic material inside. The technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Focused expression, eyes on the tablet screen, not the camera. Modern suburban kitchen setting, natural window light from one side creating soft directional shadows. 50mm equivalent lens, documentary photography style, no studio lighting. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no cartoon, no illustration, no text overlay, no watermark, no posed smile at camera, no excessive lens flare, no green lawn or outdoor setting (kitchen scene), no snow, no city skyline, no mid-stride or action-hero pose";

const HERO_REF =
  "Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Do not describe face, age, or ethnicity in the prompt.";

const MID_PROMPT =
  "Close-up action photograph of a hydro-jetting nozzle at the entrance of a drain cleanout, spraying a high-pressure fan of water into a dark pipe opening. The stainless-steel jetting nozzle is mounted on a black flexible hose, partially inserted into the cleanout. Water sprays in a tight, bright arc from the forward jets — the spray is crisp and real, not CGI. The cleanout and surrounding concrete or asphalt surface are wet. Flat overcast daylight or mixed shade lighting. Sharp focus on the nozzle and water stream; the pipe interior fades to dark. 35mm equivalent lens, documentary technical photography, no people, no hands in frame.";

const MID_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no watermark, no CGI water simulation, no studio backdrop, no soft stock-photo blurriness, no indoor plumbing setting (this is a cleanout exterior shot), no exaggerated steam or fog";

const TRUST_PROMPT =
  "Still-life photograph of an immaculate modern kitchen sink, viewed from slightly above at a 30-degree angle. Water flows cleanly in a single steady stream from the faucet into the drain — the stream is clear and unobstructed. The sink basin is spotless stainless steel. The countertop around it is a neutral stone surface, clean and dry. Soft natural window light from the left side creates gentle shadows. No dirty dishes, no clutter. The subject is the drain and water flow — normalcy restored. 35mm equivalent lens, architectural still-life style, no people, no text.";

const TRUST_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no watermark, no dirty dishes, no cluttered countertop, no harsh shadows, no exaggerated sparkle or overexposed highlights, no stock-photo perfection with fake-looking water, no CGI water";

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

const steps = [
  {
    num: 1,
    title: "Do not pour chemical drain cleaner down the drain.",
    body: "Drano, Liquid-Plumr, and similar products are lye-based. They generate heat, accelerate corrosion in older PVC and galvanized pipe, and dissolve organic tissue partially — enough to push a clog deeper without removing it. They also leave a caustic residue that puts a technician at risk when opening the line. Skip them entirely.",
  },
  {
    num: 2,
    title: "Count how many drains are affected.",
    body: "Walk through the house. Turn on the kitchen faucet, flush a toilet, run the shower. If more than one fixture drains slowly or backs up, you have a main line problem. The main sewer line runs beneath your home and connects every fixture. A blockage there affects everything downstream. Skip to Step 5.",
  },
  {
    num: 3,
    title: "If it is a single drain, try a cup plunger.",
    body: "A standard cup plunger works on sinks and tubs. Cover the overflow opening with a wet cloth first — this creates suction rather than releasing it. Give it 10 to 15 firm strokes. If water begins draining, run hot water for two minutes to flush any loosened debris through. If the clog does not clear within two plunging attempts, stop.",
  },
  {
    num: 4,
    title: "Stop sending water toward the problem.",
    body: "Turn off the dishwasher and washing machine. Do not run baths or flush toilets more than necessary. Every gallon you add behind a blocked line increases hydrostatic pressure and raises the chance of sewage backing up into lower fixtures — floor drains, tub drains, even the shower pan.",
  },
  {
    num: 5,
    title: "Call Gardner Plumbing Co. at (951) 246-4337.",
    body: "At this point you have done what homeowners can safely do. A professional will arrive with a motorized drain auger (snake) for straightforward clogs and a hydro-jet for stubborn or recurring blockages. Routine drain snaking takes 30 to 60 minutes. Most homeowners are back to normal the same day.",
  },
];

const faqs = [
  {
    q: "How much does drain cleaning cost in Riverside County?",
    a: "Standard drain snaking by a licensed plumber in Riverside County typically runs $150 – $300 for a single fixture. Hydro-jetting, used for recurring clogs, grease-packed lines, or root intrusion, ranges from $350 – $600 depending on line length and access. Main sewer line work runs higher. Gardner Plumbing Co. provides a written estimate before any work begins — no surprise charges.",
  },
  {
    q: "Can I use Drano or chemical drain cleaners?",
    a: "No. Chemical drain cleaners such as Drano and Liquid-Plumr are corrosive lye compounds. They partially dissolve organic clogs but rarely eliminate them — the remainder gets pushed deeper into the line. Repeated use accelerates corrosion in PVC fittings and older galvanized pipe. They also create a hazardous environment for the plumber who opens the line afterward. A drain auger or hydro-jet removes the clog physically without damaging your pipes.",
  },
  {
    q: "How do I know if it's a main line clog and not just one drain?",
    a: "If two or more fixtures are slow or backed up at the same time — for example, flushing the toilet causes the shower drain to gurgle, or the washing machine drains and water backs up into the kitchen sink — the blockage is in the main sewer lateral, not a branch line. Main line clogs require professional equipment (a motorized auger or hydro-jet) and cannot be resolved with a plunger or over-the-counter product. Call immediately and stop running water.",
  },
  {
    q: "How long does drain cleaning take?",
    a: "A standard drain snake on a single fixture takes 30 to 60 minutes from arrival to completion. Hydro-jetting a main sewer line runs 60 to 90 minutes. If a camera inspection reveals a collapsed section or root intrusion requiring additional work, the technician explains the scope and timeline before proceeding.",
  },
  {
    q: "What is hydro-jetting and when is it necessary?",
    a: "Hydro-jetting is a drain-cleaning method that uses highly pressurized water — typically 3,000 to 4,000 PSI — to scour pipe interiors. Unlike an auger, which punches through a clog, hydro-jetting removes the clog and cleans the pipe wall. It is the appropriate method when clogs recur within weeks of snaking, when a camera shows heavy grease coating, or when root intrusion is present. It is not necessary for every clog — the camera inspection determines which method is right.",
  },
  {
    q: "Will one drain cleaning fix it permanently?",
    a: "It depends on the cause. A hair clog cleared with an auger often stays clear for months or years if the homeowner uses a hair catcher over the drain. A kitchen grease clog will return if cooking oil continues going down the drain. Root intrusion into a clay lateral will return — roots regrow after hydro-jetting, typically within 12 to 18 months. For chronic root problems, the long-term fix is pipe lining or lateral replacement. Gardner Plumbing Co. explains the options and costs after the camera inspection, before any work begins.",
  },
  {
    q: "How do I prevent drain clogs going forward?",
    a: "Four practical steps: (1) Put a fine-mesh hair catcher over every tub and shower drain. (2) Never pour cooking grease or oil down the kitchen sink — collect it in a can and dispose of it in the trash. (3) Run hot water for 30 seconds after washing dishes to push soap residue through the trap. (4) Schedule professional drain cleaning every 12 to 24 months as preventive maintenance — this is especially important for homes in older Riverside County neighborhoods where pipe age increases clog frequency and root risk. Gardner Plumbing Co. offers the Gardner Shield maintenance plan, which includes annual drain inspection as a covered service.",
  },
];

export function DrainClogScenario() {
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
                { label: "Drain Clog — What to Do" },
              ]}
            />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: text + CTAs */}
            <div className="lg:col-span-7">
              <SectionBadge icon={Droplets} text="Drain Guide" color="red" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Drain Won&apos;t Stop Backing Up —{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  What to Do Right Now
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
                If your drain keeps backing up, do this first: check whether one drain is affected or several. A single slow drain is usually a localized clog you may be able to address yourself. Two or more drains backing up at the same time — kitchen sink, shower, and toilet all slow at once — signals a main sewer line blockage. That is not a DIY situation. Stop using water and call a licensed plumber immediately. Gardner Plumbing Co. handles drain emergencies across Riverside County, including Murrieta, Riverside, Corona, Hemet, and 21 other cities, 24 hours a day at{" "}
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
                <ImagePromptPlaceholder
                  slot="hero"
                  aspectRatio="4/5"
                  targetWidth={1200}
                  targetHeight={1500}
                  targetFileName="drain-clog-hero.webp"
                  prompt={HERO_PROMPT}
                  negativePrompt={HERO_NEGATIVE}
                  referenceImageNote={HERO_REF}
                  altText="Gardner Plumbing technician reviewing camera inspection footage on a tablet showing tree root intrusion in a drain pipe"
                  className="w-full h-full"
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
              Fixing it now is cheaper than{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                replacing the line.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Professional drain cleaning */}
            <div className="relative rounded-2xl border border-green-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-green-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full">
                  <Wrench className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
                    Professional Drain Cleaning
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $150 – $450
                </p>
                <p className="text-gray-400 text-sm">
                  Snake, hydro-jet, or camera + clear line
                </p>
              </div>
            </div>
            {/* Main line replacement */}
            <div className="relative rounded-2xl border border-red-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-red-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-500/15 border border-red-500/30 rounded-full">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                    Main Line Replacement
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $4,000 – $12,000+
                </p>
                <p className="text-gray-400 text-sm">
                  Repeated ignored clogs, root damage, or pipe collapse
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={Clock} text="Act Now" color="red" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              What to Do in the{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Next 15 Minutes
              </span>
            </h2>
          </div>

          <ol className="space-y-5">
            {steps.map((step) => (
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

      {/* ── WHAT HAPPENS + WHY CLOGS FORM ──────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* What happens when Gardner arrives */}
            <div>
              <SectionBadge icon={Wrench} text="What Happens Next" color="red" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                What Happens When{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Gardner Plumbing Arrives
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Camera inspection first.",
                    body: "A waterproof camera goes into the line so the technician can show you exactly what is causing the blockage — grease accumulation, a crushed pipe section, or root intrusion — on a screen, in real time. You see what they see before any work begins.",
                  },
                  {
                    title: "Snaking vs. hydro-jetting — the right tool for the job.",
                    body: "A drain snake (auger) breaks through soft clogs: hair, soap scum, food debris. Hydro-jetting uses water pressurized to 3,500 PSI to scour pipe walls clean, cut through roots, and flush mineral scale. The technician recommends one method or the other based on what the camera shows — not on what costs more.",
                  },
                  {
                    title: "Written estimate before work begins.",
                    body: "The Gardner Promise requires a written price before any tool goes into the line. The price on the estimate is the price on the invoice.",
                  },
                  {
                    title: "Clean exit.",
                    body: "Gardner Plumbing Co.'s technician protects work areas with drop cloths and shoe covers, and cleans the area before leaving.",
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

            {/* Why clogs form */}
            <div>
              <SectionBadge icon={AlertTriangle} text="Know the Cause" color="red" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Why Drains Clog — and{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  How to Read the Signs
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
                    Most drain clogs build gradually over months. In kitchens, the culprit is almost always a grease-and-soap combination. Cooking oil poured down the drain cools and solidifies on pipe walls. Over time the passage narrows until water can barely move through.
                  </p>
                  <p>
                    Bathroom drains fail differently. Hair catches on the drain stopper and on the pivot rod of pop-up assemblies. Soap scum binds it into a dense plug. Southern California hard water accelerates this. Riverside County tap water carries 250 to 350 parts per million of dissolved calcium and magnesium — roughening the interior surface and giving grease and hair something to adhere to.
                  </p>
                  <p>
                    The other major cause in Riverside County is tree root intrusion. Older neighborhoods in Corona, Riverside, and Hemet were developed in the 1950s through 1970s with clay and cast-iron sewer laterals. Those pipes develop cracks as they age, and tree roots — drawn to moisture — infiltrate at every joint and fissure. A camera inspection is the only way to confirm root intrusion; once confirmed, hydro-jetting combined with a root-inhibiting treatment is the standard remedy.
                  </p>
                </div>
              </div>

              {/* Trust image placeholder — clean sink post-service */}
              <div className="mt-6">
                <ImagePromptPlaceholder
                  slot="before-after"
                  aspectRatio="4/3"
                  targetWidth={800}
                  targetHeight={600}
                  targetFileName="drain-clog-clean-sink.webp"
                  prompt={TRUST_PROMPT}
                  negativePrompt={TRUST_NEGATIVE}
                  altText="Clean kitchen sink with water draining freely after professional drain cleaning service by Gardner Plumbing"
                  className="w-full rounded-2xl min-h-48"
                />
              </div>
            </div>
          </div>

          {/* Mid image placeholder — hydro-jet nozzle */}
          <div className="mt-10">
            <ImagePromptPlaceholder
              slot="before-after"
              aspectRatio="3/2"
              targetWidth={1200}
              targetHeight={800}
              targetFileName="drain-clog-hydrojet.webp"
              prompt={MID_PROMPT}
              negativePrompt={MID_NEGATIVE}
              altText="Hydro-jetting nozzle spraying high-pressure water into a residential drain cleanout to clear a severe clog"
              className="w-full rounded-2xl min-h-64"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionBadge icon={HelpCircle} text="FAQ" color="blue" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Drain Clog{" "}
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
        <div className="absolute inset-0" style={darkBg} />
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
                href: "/services/plumbing/drain-cleaning",
                label: "Drain Cleaning Service",
                desc: "Full service page for professional drain cleaning across Riverside County.",
                icon: Wrench,
                accent: "red",
              },
              {
                href: "/services/plumbing/sewer-and-septic",
                label: "Sewer and Septic Service",
                desc: "Main line inspections, lateral repairs, and sewer replacement.",
                icon: AlertTriangle,
                accent: "red",
              },
              {
                href: "/plumbing-help/pipe-burst-what-to-do",
                label: "What to Do If a Pipe Bursts",
                desc: "Immediate steps to limit water damage.",
                icon: Droplets,
                accent: "blue",
              },
              {
                href: "/plumbing-help/slab-leak-what-to-do",
                label: "Signs You May Have a Slab Leak",
                desc: "Unexplained wet floors and rising water bills explained.",
                icon: Home,
                accent: "red",
              },
              {
                href: "/gardner-shield",
                label: "Gardner Shield Maintenance Plan",
                desc: "Annual plumbing checkups that catch drain problems before they become emergencies.",
                icon: Shield,
                accent: "green",
              },
              {
                href: "/plumbing-help/plumbing-inspection-checklist",
                label: "Plumbing Inspection Checklist",
                desc: "What to check before you buy a home.",
                icon: ClipboardList,
                accent: "blue",
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
