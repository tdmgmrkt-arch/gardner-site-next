"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProtectHomeBanner } from "./ProtectHomeBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Home,
  Layers,
  Navigation,
  Droplets,
  Sparkles,
  Package,
  Phone,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────────────
   Behaviors data (6 — photo handoff excluded per owner)
   ───────────────────────────────────────────────────── */
const behaviors = [
  {
    icon: Home,
    number: 1,
    title: "Shoe Covers Before We Step Inside",
    body: "Every Gardner Plumbing technician puts on disposable booties at the door — before crossing the threshold. No exceptions, even for a quick diagnosis visit. Your floors are protected from the moment we arrive.",
    aibeat: "Your floors stay clean from the moment we arrive.",
  },
  {
    icon: Layers,
    number: 2,
    title: "Drop Cloths Down, Every Time",
    body: "A drop cloth goes under every work area before a single tool comes out of the bag. Pipe repairs, fixture installs, water heater swaps — the floor under the job is always covered. No scuffs, no scratches, no water rings.",
    aibeat: "No scuffs, scratches, or water rings on your floor.",
  },
  {
    icon: Navigation,
    number: 3,
    title: "Path Protection to the Work Area",
    body: "If the job is in a back bathroom or utility room, runner protection goes from the front entry to the work zone. Every room we walk through gets the same treatment as the room we're working in.",
    aibeat: "Protection covers the path, not just the job site.",
  },
  {
    icon: Droplets,
    number: 4,
    title: "Towels Around Every Fixture",
    body: "Fixtures get wrapped in clean shop towels before any work begins. This catches drips, protects finishes on faucets and valves, and keeps water off vanities and cabinets. Your hardware comes out of the job looking the same as it went in.",
    aibeat: "Your fixtures come out of the job looking the same as they went in.",
  },
  {
    icon: Sparkles,
    number: 5,
    title: "Full Cleanup Before We Call It Done",
    body: "When the work is complete, the technician sweeps or vacuums the work area, wipes down surfaces touched during the job, and removes all debris. The job isn't done until the area is clean.",
    aibeat: "You shouldn't have to clean up after your plumber.",
  },
  {
    icon: Package,
    number: 6,
    title: "Haul-Away of All Old Parts and Packaging",
    body: "Old parts, corroded pipe sections, fixture hardware, and all packaging leave on the Gardner Plumbing truck. Nothing lands in your garage, yard, or trash cans unless you ask for it specifically.",
    aibeat: "The job is done when your home looks like we were never there.",
  },
];

/* ─────────────────────────────────────────────────────
   FAQ data (4 questions — approved by owner)
   ───────────────────────────────────────────────────── */
const faqs = [
  {
    question: "Does Gardner Plumbing wear shoe covers?",
    answer:
      "Yes. Gardner Plumbing Co. technicians put on disposable shoe covers before entering your home on every service call. This applies to all visits — estimates, diagnostic calls, and full service jobs. The booties go on at the door, before the technician crosses the threshold.",
  },
  {
    question: "Does Gardner Plumbing clean up after the job?",
    answer:
      "Yes. Gardner Plumbing Co. performs a full post-job cleanup on every service call. The technician sweeps or vacuums the work area, wipes down surfaces touched during the job, and hauls away all old parts, pipe scraps, and packaging. The goal is for your home to look the way it did before we arrived.",
  },
  {
    question: "What does Gardner Plumbing do to protect my floors?",
    answer:
      "Gardner Plumbing Co. uses two layers of floor protection on every visit. Technicians wear disposable shoe covers from entry to exit. Before any work begins, drop cloths go under the work area and runner protection covers the path from the entry point to the job site. This covers floors, carpet, and hard surfaces throughout the home.",
  },
  {
    question: "What if the techs leave a mess?",
    answer:
      "If a Gardner Plumbing technician leaves your home without completing every step of the Clean Visit Promise, call our office at (951) 246-4337. We will send a technician back the same business day to make it right at no charge. No paperwork, no runaround. The Clean Visit Promise is a standard, not a suggestion — and it comes with a real recourse when we fall short.",
  },
];

type CleanVisitPromisePageProps = {
  reviewCount?: string
  ratingLabel?: string
}

export function CleanVisitPromisePage({ reviewCount = "900+", ratingLabel = "4.9" }: CleanVisitPromisePageProps) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "The Clean Visit Promise" },
              ]}
            />

            {/* Kicker badge */}
            <div className="inline-flex items-center gap-3 mb-8 mt-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-red-400" aria-hidden="true" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Our Clean Home Standard
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              The Clean Visit{" "}
              <span
                className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Promise
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-red-400 mb-6">
              Gardner Plumbing Co. Protects Your Home on Every Visit
            </p>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-2xl">
              A plumber fixes the leak. That part you expect. What you shouldn't have to worry
              about is whether your floors, cabinets, and hallway come out of the job looking the
              same as they went in.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
              Gardner Plumbing Co. has served Riverside County homes for 30+ years. In that time,
              one complaint has ended more contractor relationships than bad workmanship: the mess
              left behind. We built the Clean Visit Promise to make sure that complaint never
              applies to us.
            </p>

            <p className="text-sm text-gray-500 mb-8">Last Updated: June 2026</p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:9512464337">
                <button
                  type="button"
                  className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group min-h-[44px]"
                >
                  <Phone
                    className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  Call (951) 246-4337
                </button>
              </a>
              <Link href="/contact-us">
                <button
                  type="button"
                  className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group min-h-[44px]"
                >
                  <ArrowRight
                    className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  Get a Free Estimate
                </button>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" aria-hidden="true" />
                <strong className="text-white">CSLB #1073177</strong>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" aria-hidden="true" />
                {reviewCount} five-star Google reviews
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" aria-hidden="true" />
                30+ years serving Riverside County
              </span>
            </div>
            </div>

            {/* Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertecharrival2.webp"
                  alt="Gardner Plumbing Co. technician arriving at a customer's home with disposable shoe covers"
                  width={1000}
                  height={600}
                  className="w-full h-[500px] lg:h-[600px] object-cover object-[center_53%] rounded-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="absolute top-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Booties on at the door</div>
                      <div className="text-gray-300 text-xs">Every visit. Every time.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProtectHomeBanner />

      {/* ── WHY WE BUILT THIS ─────────────────────── */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        aria-labelledby="why-we-built-heading"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-red-400" aria-hidden="true" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Why We Built This
              </span>
            </div>

            <h2
              id="why-we-built-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
            >
              A Standard, Not a{" "}
              <span
                className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Sentence
              </span>
            </h2>
          </div>

          <div className="glassmorphism-dark rounded-2xl p-7 sm:p-9 lg:p-12 border border-white/10 shadow-luxury">
              <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed mb-4">
                Most plumbers will tell you they "clean up after themselves."{" "}
                <span className="text-red-400">
                  That's not a standard — it's a sentence.
                </span>
              </p>
              <p className="text-gray-300 text-[16px] leading-relaxed mb-4">
                It doesn't tell you whether they'll lay down protection before they start, whether
                they'll haul away the old water heater, or whether "clean up" means a quick look
                around or an actual sweep of the work area.
              </p>
              <p className="text-gray-300 text-[16px] leading-relaxed">
                Gardner Plumbing Co. codified exactly what happens on every service visit — before
                the work starts, during the job, and before the technician walks back out your
                door. The Clean Visit Promise is 6 specific behaviors, not a general intention.
                Every tech on our crew follows them on every call, whether it's a 20-minute drain
                clear or a full-day water heater replacement.
              </p>
          </div>
        </div>
      </section>

      {/* ── 6-BEHAVIOR DETAIL CARDS ───────────────── */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        aria-labelledby="behaviors-heading"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="behaviors-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            >
              The 6-Step Clean Visit{" "}
              <span
                className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Promise
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every step. Every call. Every technician.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {behaviors.map((behavior) => {
              const Icon = behavior.icon;
              return (
                <div
                  key={behavior.number}
                  className="group relative border-none overflow-hidden rounded-2xl shadow-luxury hover-lift transition-all duration-500"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />

                  <div className="relative z-10 p-6 sm:p-8 flex items-start gap-5">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, #8B0000 0%, #DC2626 100%)`,
                        }}
                      >
                        <span className="text-white font-bold text-xs tracking-widest">STEP</span>
                        <span className="text-white font-bold text-lg leading-none">
                          {behavior.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon
                          className="h-5 w-5 text-red-400 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <h3 className="text-lg font-bold text-white group-hover:text-red-100 transition-colors duration-300 leading-snug">
                          {behavior.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed mb-4">
                        {behavior.body}
                      </p>
                      {/* AI beat */}
                      <div
                        className="rounded-xl px-4 py-3 border"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(17,24,39,0.95) 100%)",
                          borderColor: "rgba(220,38,38,0.25)",
                        }}
                      >
                        <p className="text-red-400 text-sm font-semibold">{behavior.aibeat}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS IF WE MISS IT ────────────── */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        aria-labelledby="accountability-heading"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-red-400" aria-hidden="true" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Our Accountability
              </span>
            </div>

            <h2
              id="accountability-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
            >
              What Happens If We{" "}
              <span
                className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Miss It
              </span>
            </h2>
          </div>

          <div
            className="glassmorphism-dark rounded-2xl border shadow-luxury p-7 sm:p-9 lg:p-12"
            style={{ borderColor: "rgba(220,38,38,0.3)" }}
          >
            <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed mb-4">
              If a Gardner Plumbing technician leaves your home without completing every step of
              the Clean Visit Promise, call our office at{" "}
              <a
                href="tel:9512464337"
                className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors duration-200"
              >
                (951) 246-4337
              </a>
              .{" "}
              <span className="text-red-400">
                We will send a technician back the same business day to make it right at no
                charge.
              </span>{" "}
              No paperwork, no runaround.
            </p>
            <p className="text-gray-300 text-[16px] leading-relaxed">
              This accountability beat is what separates a named standard from a marketing
              sentence. Any plumber can say "we clean up." Not every plumber will tell you
              exactly what happens when they don't.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────── */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        aria-labelledby="cvp-faq-heading"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #374151 0%, #1f2937 50%, #000000 100%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 85%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Clean Visit FAQ
              </span>
            </div>
            <h2
              id="cvp-faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            >
              Common Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Straight answers about what to expect when Gardner Plumbing is in your home.
            </p>
          </div>

          <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            {/* Red banner header */}
            <div
              className="relative overflow-hidden px-6 sm:px-8 py-6"
              style={{
                background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                boxShadow: `
                  inset 0 2px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                  0 8px 32px rgba(139, 0, 0, 0.4)
                `,
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)`,
                }}
              />
              <div className="relative flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <HelpCircle className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  Questions About The Clean Visit Promise
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`cvp-faq-${index}`}
                    className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl"
                    style={{
                      backgroundColor: "#202020",
                      backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                    <div className="relative z-10">
                      <AccordionTrigger className="text-left hover:no-underline text-white hover:text-red-400 data-[state=open]:text-red-500 px-6 sm:px-8 py-6 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                        <span className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-red-600 group-hover/trigger:to-red-500 transition-all duration-300 flex-shrink-0">
                            <HelpCircle
                              className="h-4 w-4 text-red-400 group-hover/trigger:text-white transition-colors duration-300"
                              aria-hidden="true"
                            />
                          </div>
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6 sm:pb-8 pt-0 px-6 sm:px-8 ml-12 border-l-2 border-red-500/20 text-base leading-relaxed">
                        <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">
                          {faq.answer}
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

    </>
  );
}
