"use client";

import { useState } from "react";
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
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Clock,
  Shield,
  FileText,
  Wrench,
  Droplets,
  TrendingUp,
  ClipboardList,
  Home,
} from "lucide-react";

// ─── Image prompt constants (sourced from seo/scenario-image-prompts/pipe-burst-*.md) ───

const HERO_PROMPT =
  "Documentary photograph of a plumbing technician arriving at a flooded suburban garage in Riverside County, California. The technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. The technician is standing in the open garage doorway, one hand gripping a pipe wrench and a Milwaukee tool bag at their side, eyes scanning the floor where water is pooling on a concrete garage floor — a visible wet streak runs from the wall toward the drain. Soft overcast daylight from the open garage door. Residential stucco exterior visible behind the technician. 50mm equivalent lens, documentary photography style, no studio lighting. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no cartoon, no illustration, no text overlay, no watermark, no excessive lens flare, no overly dramatic flood water (small puddle, not a river), no green lawn (wrong region), no snow, no city skyline, no mid-stride running pose";

const HERO_REF =
  "Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Do not describe face, age, or ethnicity in the prompt.";

const MID_PROMPT =
  "Extreme macro close-up of a burst copper pipe section on a white surface or workbench, showing a fracture point with visible calcium and hard-water mineral scaling encrusting the pipe exterior around the break — chalky white-gray calcium deposits, the copper surface beneath showing oxidation and patina. Water beading and running off the fracture edge, catching soft directional light. The fracture is a clean split seam, not a dramatic explosion. Muted, flat overcast bench lighting. 50mm macro equivalent lens, technical documentation style. No people, no hands, no background clutter. The pipe itself is the entire subject.";

const MID_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no watermark, no exaggerated Hollywood geyser, no dramatic steam, no CGI look, no stock photo softness, no plastic pipe (must be copper), no extreme close-up so tight the context is lost";

const TRUST_PROMPT =
  "Documentary photograph of a professional dispatcher in a small plumbing dispatch office, sitting at a desk with dual computer monitors showing a dispatch map and call log, wearing a headset with a small boom microphone. The dispatcher has a calm, focused expression, looking at the screens — not at the camera. Warm overhead office lighting with a cool monitor glow on the face. The desk shows a notepad with handwritten address notes, a coffee cup, normal office clutter. The room feels professional and functional, not sterile. No Gardner branding visible on screen — screens show generic map and list UI. 35mm equivalent lens, documentary photography style.";

const TRUST_NEGATIVE =
  "no cartoon, no illustration, no text overlay, no watermark, no exaggerated call-center rows of people, no headset with huge foam ear cups, no 911-style emergency room look, no fake smile at camera, no stock photo pose, no overly bright or overexposed lighting";

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
    title: "Shut off the main water valve.",
    body: "The main shutoff is usually a gate valve or ball valve near your water meter — in Riverside County neighborhoods, that meter box is typically in the front yard near the sidewalk or curb. Turn it clockwise (gate valve) or 90 degrees until the handle is perpendicular to the pipe (ball valve). Water stops flowing to the entire house.",
  },
  {
    num: 2,
    title: "Turn off the water heater.",
    body: "Water heaters connected to a line that just burst can overheat or crack the tank once the cold-water supply is cut. Switch a gas heater to \"Pilot\" mode; flip the breaker for an electric heater. This takes 30 seconds and prevents a second problem.",
  },
  {
    num: 3,
    title: "Cut power to any room with standing water.",
    body: "Water and live circuits kill. Go to your main breaker panel and switch off the breaker for any room where water is collecting. If the panel itself is wet or you cannot reach it safely, call 911 before touching anything.",
  },
  {
    num: 4,
    title: "Open outdoor spigots to drain remaining pressure.",
    body: "After shutting the main valve, water still sitting in the pipes can continue draining through the break. Open one or two outdoor hose bibs to let that residual water drain away from the house instead of through the burst section.",
  },
  {
    num: 5,
    title: "Move valuables off wet floors.",
    body: "Electronics, rugs, documents, and furniture absorb water fast. Move anything off the floor in affected rooms while you can still do it safely. Flooring and drywall can dry; a soaked laptop or photo album usually cannot.",
  },
  {
    num: 6,
    title: "Document everything before cleanup starts.",
    body: "Take photos and a short video of standing water, the visible break, and any damaged belongings. Your homeowner's insurance adjuster will need this. Do not mop up or remove debris until you have documentation.",
  },
  {
    num: 7,
    title: "Call Gardner Plumbing Co. at (951) 246-4337.",
    body: "Gardner Plumbing Co. dispatches licensed technicians across Riverside County, eastern San Bernardino County, and the Coachella Valley around the clock. Give the dispatcher your address and describe what you see — the technician on the way will already know what to bring.",
  },
];

const faqs = [
  {
    q: "How long does it take to fix a burst pipe?",
    a: "Most burst pipe repairs take 1 – 3 hours once the technician is on site. A straightforward section replacement on an accessible supply line is typically on the shorter end. A slab leak or a failure inside a finished wall takes longer because access work is required before the repair can begin. The Gardner Plumbing technician gives you a time estimate after assessing the break — before work starts.",
  },
  {
    q: "How much does burst pipe repair cost in Riverside County?",
    a: "Burst pipe repair in Riverside County typically ranges from $350 – $1,400 for a single accessible section, and $1,400 – $3,500 or more when the failure is under a concrete slab or inside a finished wall requiring drywall removal. Hard-water scaling and older polybutylene or galvanized pipe can raise the cost if surrounding pipe also needs replacement. Gardner Plumbing Co. provides a written estimate before any work begins — the price you see is the price you pay.",
  },
  {
    q: "Will homeowner's insurance cover a burst pipe?",
    a: "Most standard homeowner's insurance policies cover sudden and accidental water damage from a burst pipe — including structural repairs to floors, walls, and ceilings. They generally do not cover the pipe repair itself or damage caused by long-term leaks that were not reported promptly. Document the damage with photos before cleanup begins and call your insurance carrier the same day. The written findings from your Gardner Plumbing technician can support your claim.",
  },
  {
    q: "Can I shut off the main water valve myself?",
    a: "Yes. The main shutoff valve is designed to be operated by the homeowner. In most Riverside County homes, the meter box is in the front yard near the curb — open the box lid and look for the house-side shutoff (the street-side valve belongs to the water utility). A gate valve requires multiple clockwise turns to fully close; a ball valve closes with a single 90-degree turn. If the valve is corroded and will not turn, do not force it. Call (951) 246-4337 and let the dispatcher know — the technician brings tools for stuck valves.",
  },
  {
    q: "How fast can Gardner Plumbing get to my house?",
    a: "Gardner Plumbing Co. technicians are dispatched from locations across Riverside County. For most service-area addresses — including Murrieta, Temecula, Menifee, Riverside, Corona, Hemet, Moreno Valley, Palm Springs, and Palm Desert — the average on-site arrival is 60 – 90 minutes after the call is placed. Exact timing depends on current call volume and your location. The dispatcher gives you an honest window when you call.",
  },
  {
    q: "What if it's after hours or a weekend?",
    a: "Gardner Plumbing Co. runs 24/7 emergency dispatch every day of the year — evenings, weekends, and holidays included. Call (951) 246-4337 at any hour. A live person answers, not a voicemail or after-hours service. Emergency response is available for any active leak, burst pipe, or flooding situation regardless of day or time.",
  },
  {
    q: "How do I prevent this from happening again?",
    a: "The most effective step is a whole-home plumbing inspection, especially for homes built before 1995. A licensed plumber can identify polybutylene or galvanized pipe that is near failure, assess hard-water scaling inside copper fittings, and spot exposed lines in garages or crawlspaces that are at risk during cold snaps. Gardner Plumbing Co. offers the Gardner Shield — an annual maintenance plan that includes a full inspection and priority dispatch. Ask about it when you call, or visit our Gardner Shield page. Pipe insulation on any line in an unconditioned space costs under $50 in materials and is the single highest-return preventative measure for Coachella Valley and pass-area homes.",
  },
];

export function PipeBurstScenario() {
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
                { label: "Pipe Burst — What to Do" },
              ]}
            />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: text + CTAs */}
            <div className="lg:col-span-7">
              <SectionBadge icon={AlertTriangle} text="Emergency Guide" color="red" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Pipe Burst in Your Riverside County Home —{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  What to Do Right Now
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
                Shut off your main water valve immediately — it is usually in your front yard near the street, in a garage utility closet, or at the side of the house. Then call Gardner Plumbing Co. at{" "}
                <a href={PHONE_HREF} className="text-red-400 font-semibold hover:text-red-300 transition-colors">
                  {PHONE_DISPLAY}
                </a>. Live dispatch runs 24 hours a day, 7 days a week. Every hour of uncontrolled water flow causes an average of $150 – $300 in additional damage, so the valve comes first and everything else comes second.
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
                  targetFileName="pipe-burst-hero.webp"
                  prompt={HERO_PROMPT}
                  negativePrompt={HERO_NEGATIVE}
                  referenceImageNote={HERO_REF}
                  altText="Gardner Plumbing technician arriving at a flooded garage in Riverside County for emergency burst pipe repair"
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
              Every hour with water flowing{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                costs money.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Emergency call */}
            <div className="relative rounded-2xl border border-green-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-green-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full">
                  <Phone className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
                    Emergency Call
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $450 – $900
                </p>
                <p className="text-gray-400 text-sm">
                  60-min arrival window + repair on the spot
                </p>
              </div>
            </div>
            {/* Wait 6 hours */}
            <div className="relative rounded-2xl border border-red-500/30 overflow-hidden shadow-luxury">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-red-500/5 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-500/15 border border-red-500/30 rounded-full">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                    Wait 6 Hours
                  </span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  $3,000 – $15,000+
                </p>
                <p className="text-gray-400 text-sm">
                  Water damage restoration, flooring, drywall, mold remediation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO DO IN 15 MINUTES ────────────────────────────────── */}
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
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Seven steps to limit damage before the technician arrives.
            </p>
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

      {/* ── WHEN GARDNER ARRIVES ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <SectionBadge icon={Wrench} text="What Happens Next" color="red" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                When Gardner Plumbing{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Arrives
                </span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Gardner Plumbing Co. serves 25 cities across Riverside County, eastern San Bernardino County, and the Coachella Valley — including Murrieta, Temecula, Menifee, Riverside, Corona, Eastvale, Palm Springs, Palm Desert, Redlands, and Yucaipa.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Live dispatcher, not a voicemail.",
                    body: "A real person answers at (951) 246-4337 every hour of every day. They confirm your address, ask what you are seeing, and route the nearest available technician.",
                  },
                  {
                    title: "ETA confirmation before the truck rolls.",
                    body: "The dispatcher gives you an arrival window. For most Riverside County addresses, the technician is on site within 60 – 90 minutes of your call.",
                  },
                  {
                    title: "Written estimate before any work starts.",
                    body: "The technician locates and assesses the break, then hands you a written estimate. That number is the number on your invoice. Nothing proceeds without your approval.",
                  },
                  {
                    title: "Repair, then review.",
                    body: "After the repair, the technician walks you through what failed, why, and what to watch for. If your insurance claim process requires documentation, Gardner Plumbing Co. can provide a written description of findings.",
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

            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-6 sm:p-8 border border-white/10 shadow-luxury"
                style={{
                  background: "linear-gradient(160deg, rgba(220,38,38,0.10) 0%, rgba(17,24,39,0.95) 60%, rgba(220,38,38,0.06) 100%)",
                }}
              >
                <h3 className="text-xl font-bold text-white mb-6 leading-tight">Why Pipes Burst in Riverside County</h3>
                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p>
                    The Inland Empire has a large stock of homes built between 1975 and 1995. Many of those homes used Schedule 40 PVC for interior supply lines and polybutylene for branch lines. PVC becomes brittle over decades and can crack suddenly under normal water pressure. Polybutylene — a gray plastic pipe widely recalled in the 1990s — deteriorates from the inside out.
                  </p>
                  <p>
                    The region&apos;s hard water is the second major factor. Riverside County water runs high in calcium and magnesium, depositing inside copper fittings and at soldered joints over time. A fitting that looks fine from the outside can have a nearly closed bore from scaling on the inside.
                  </p>
                  <p>
                    Temperatures in the Coachella Valley, Hemet, and the mountain passes above Banning can drop into the mid-20s on winter nights. Exposed supply lines in garages, crawlspaces, and exterior walls freeze, expand, and split — often silently overnight.
                  </p>
                </div>
                <div className="mt-8">
                  <a href={PHONE_HREF}>
                    <button className="w-full min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      Call Now — 24/7 Dispatch
                    </button>
                  </a>
                </div>

                {/* Trust image placeholder — dispatcher */}
                <div className="mt-6">
                  <ImagePromptPlaceholder
                    slot="before-after"
                    aspectRatio="4/3"
                    targetWidth={800}
                    targetHeight={600}
                    targetFileName="pipe-burst-dispatcher.webp"
                    prompt={TRUST_PROMPT}
                    negativePrompt={TRUST_NEGATIVE}
                    altText="Live Gardner Plumbing Co. dispatcher answering emergency burst pipe calls 24 hours a day across Riverside County"
                    className="w-full rounded-2xl min-h-48"
                  />
                </div>
              </div>
            </div>

            {/* Mid image placeholder — burst pipe close-up */}
            <div className="lg:col-span-12 mt-4">
              <ImagePromptPlaceholder
                slot="before-after"
                aspectRatio="3/2"
                targetWidth={1200}
                targetHeight={800}
                targetFileName="pipe-burst-scaling.webp"
                prompt={MID_PROMPT}
                negativePrompt={MID_NEGATIVE}
                altText="Close-up of a burst copper pipe with hard-water calcium scaling at the fracture point, common in Riverside County homes"
                className="w-full rounded-2xl min-h-64"
              />
            </div>
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
              Burst Pipe{" "}
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
                href: "/services/plumbing/burst-pipes",
                label: "Burst Pipe Repair — Full Service Page",
                desc: "What Gardner Plumbing repairs, materials used, and service area detail.",
                icon: Wrench,
                accent: "red",
              },
              {
                href: "/services/plumbing/emergency-service",
                label: "24/7 Emergency Plumbing Service",
                desc: "All emergency scenarios, not just burst pipes.",
                icon: AlertTriangle,
                accent: "red",
              },
              {
                href: "/services/plumbing/leak-detection",
                label: "Leak Detection",
                desc: "When the source of water isn't obvious.",
                icon: Droplets,
                accent: "blue",
              },
              {
                href: "/gardner-shield",
                label: "Gardner Shield Prevention Plan",
                desc: "Annual inspection and priority dispatch to prevent the next emergency.",
                icon: Shield,
                accent: "green",
              },
              {
                href: "/plumbing-help/drain-clog-what-to-do",
                label: "What to Do When a Drain Clogs",
                desc: "Step-by-step guide for drain emergencies.",
                icon: Droplets,
                accent: "blue",
              },
              {
                href: "/plumbing-help/slab-leak-what-to-do",
                label: "What to Do When You Have a Slab Leak",
                desc: "Signs, causes, and what to do next.",
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
