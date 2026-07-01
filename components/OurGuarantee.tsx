"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Tag,
  BadgeCheck,
  Phone,
  ArrowRight,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { ProtectHomeBanner } from "./ProtectHomeBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

/* ─────────────────────────────────────────────
   Pillar deep-dive data
   ───────────────────────────────────────────── */
const pillars = [
  {
    id: "callback",
    icon: ShieldCheck,
    title: "30-Day Callback Guarantee",
    tagline: "Same issue recurs? We come back at no charge.",
    summary:
      "If the same issue recurs within 30 days of our service visit, a Gardner Plumbing technician returns at no charge. Parts and labor are covered.",
    mechanics: [
      "The clock starts on the day of your original service visit.",
      'The return visit covers the exact same root cause — not a separate, unrelated problem in a different location.',
      "Parts replaced under the original job are re-supplied at no cost if they fail within the 30 days.",
      "Labor for the callback visit is fully covered — no trip fee, no hourly rate, no hidden charges.",
    ],
    scenario:
      "Example: A technician clears a kitchen drain on Monday. The drain backs up again the following Thursday. You call us. We dispatch, diagnose, and resolve it — zero charge to you, parts and labor included.",
  },
  {
    id: "estimate",
    icon: FileText,
    title: "Written Estimate Before Work Begins",
    tagline: "The number you sign is the number you pay.",
    summary:
      "The price on the written estimate is the price on the invoice. If anything changes mid-job, we stop, explain, and get your written approval before continuing.",
    mechanics: [
      "Every job begins with a written estimate delivered before tools come out.",
      "The estimate specifies scope, materials, and labor — no vague line items.",
      'If we open a wall and find additional damage that changes the scope, we stop work immediately, walk you through what we found, and present a revised estimate.',
      "We do not proceed past the scope change without your written sign-off — full stop.",
    ],
    scenario:
      "Example: We quote a water heater replacement at $1,400. Mid-job we discover the supply valves are corroded and need replacement. We stop, show you the valves, quote the add-on separately, and continue only once you approve in writing.",
  },
  {
    id: "no-trip-fees",
    icon: Tag,
    title: "No Trip Fees, No Pressure",
    tagline: "Free in-home estimate. Zero obligation.",
    summary:
      "Free in-home estimates. No dispatch fee, no service-call fee, no obligation to proceed.",
    mechanics: [
      "We send a licensed technician to your home to assess the problem and quote the repair — no charge for that visit.",
      "There is no dispatch fee, service-call fee, or fuel surcharge added to your invoice.",
      "If you receive the estimate and decide not to proceed, you owe nothing.",
      "We never use pressure tactics or inflated 'book rate' pricing to manufacture urgency.",
    ],
    scenario:
      "Example: You think you have a slab leak. We arrive, assess, and quote the repair. You want a second opinion before committing. That's fine — you pay nothing for the estimate visit, and we'll be here when you're ready.",
  },
  {
    id: "licensed",
    icon: BadgeCheck,
    title: "Fully Licensed, Bonded & Insured",
    tagline: "CSLB #1073177. Permits pulled on every job that requires them.",
    summary:
      "CSLB #1073177, fully bonded, fully insured. We pull permits and handle inspections on every job that requires them.",
    mechanics: [
      "Our California State License Board license number is #1073177 — verify it at cslb.ca.gov at any time.",
      "Every technician dispatched to your home works under this license and meets CSLB qualification standards.",
      "We carry full liability insurance and workers' compensation — your property and our team are covered.",
      "For jobs that require a permit (water heater replacements, repiping, sewer line work, and similar), we pull the permit and coordinate the inspection. You never have to chase the city.",
    ],
    scenario:
      "Example: A water heater replacement in Murrieta requires a city permit and inspection. We handle the permit application, schedule the inspection around your availability, and provide you with the closed-out permit for your home records.",
  },
];

/* ─────────────────────────────────────────────
   FAQ data
   ───────────────────────────────────────────── */
const faqs = [
  {
    question: "What counts as 'the same issue'?",
    answer:
      'The same issue means the same root cause at the same location. If we unclog the kitchen drain and it backs up again within 30 days, that\'s the same issue. If you call 28 days later because the bathroom toilet is slow — that\'s a different problem and a new job. When there\'s any doubt, we err on the side of the customer and send someone out.',
  },
  {
    question: "What if the original technician isn't available for the callback?",
    answer:
      "We dispatch whoever is closest and available. Every technician has access to the job notes from your original visit, so there's no need to re-explain the history. The guarantee belongs to Gardner Plumbing Co. — not to any individual technician.",
  },
  {
    question: "Is there a deductible or co-pay on the callback?",
    answer:
      "No. The callback visit is fully covered. No trip fee, no labor charge, no parts surcharge within the 30-day window for the same issue.",
  },
  {
    question: "Does the guarantee transfer to a new homeowner?",
    answer:
      "The 30-Day Callback Guarantee is tied to the service visit and runs to the end of its 30-day term regardless of ownership change. If you close on a home sale on day 15 of a 30-day window, the new owner has 15 days remaining. We'll honor it — just call with the original job number.",
  },
  {
    question: "How do I claim the callback guarantee?",
    answer:
      "Call (951) 246-4337 and tell the dispatcher you're calling under the 30-Day Callback Guarantee. Have the date of your original service handy. We'll confirm the job in our system and get a tech dispatched. No forms, no waiting on hold for a manager.",
  },
  {
    question: "What if the problem is worse than the original repair?",
    answer:
      "If the callback reveals that the issue has escalated due to a cause unrelated to our original work — for example, a tree root intrusion that wasn't present on day one — we'll diagnose it honestly, explain the new findings, and provide a written estimate for any additional scope. We will not charge you for the callback visit itself.",
  },
  {
    question: "Does the guarantee cover parts I supplied myself?",
    answer:
      "Parts and labor coverage within the 30-day window applies to materials we supplied and installed. If you provided the part and it failed, the part replacement is on you — but our labor to re-install it is covered under the guarantee.",
  },
];

type OurGuaranteeProps = {
  reviewCount?: string
  ratingLabel?: string
}

export function OurGuarantee({ reviewCount = "900+", ratingLabel = "4.9" }: OurGuaranteeProps) {
  return (
    <div className="min-h-screen">
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
            {/* Left Column — Content */}
            <div className="text-left animate-fade-in">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "The Gardner Promise" },
                ]}
              />

              {/* Kicker badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-red-400" aria-hidden="true" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Our Promise to You
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                The Gardner{" "}
                <span
                  className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Promise
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-red-500 mb-6">
                We Own It.
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Gardner Plumbing Co. backs every service call with four hard commitments —
                specific, written, and honored without argument.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:9512464337">
                  <button className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    Call (951) 246-4337
                  </button>
                </a>
                <Link href="/contact-us">
                  <button className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
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

            {/* Right Column — Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/guarantee.webp"
                  alt="The Gardner Promise — 30-day callback guarantee from Gardner Plumbing Co."
                  width={1537}
                  height={1023}
                  priority
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                {/* Floating promise badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">We Own It.</div>
                      <div className="text-gray-300 text-xs">30-Day Callback Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProtectHomeBanner />

      {/* ── FOUR PILLARS — CARD GRID ────────────── */}
      <section
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        aria-label="Four pillars overview"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Four Commitments.{" "}
              <span
                className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Hard Terms.
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every job. Every technician. Every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <a
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  className="group relative border-none overflow-hidden rounded-2xl shadow-luxury hover-lift transition-all duration-500 block"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage:
                      "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    animationDelay: `${index * 80}ms`,
                  }}
                  aria-label={`Jump to ${pillar.title}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />

                  <div className="relative z-10 p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600/30 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg border border-red-500/20 group-hover:border-red-500/60">
                      <Icon
                        className="h-7 w-7 text-red-400 group-hover:text-white transition-all duration-500"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {pillar.tagline}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEEP-DIVE SUBSECTIONS ────────────────── */}
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
            aria-labelledby={`pillar-${pillar.id}-heading`}
          >
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background: isEven
                    ? `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)`
                    : `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)`,
                }}
              />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Pillar header */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-red-400" aria-hidden="true" />
                  <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">
                    Pillar {index + 1} of 4
                  </span>
                </div>

                <h2
                  id={`pillar-${pillar.id}-heading`}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                >
                  {pillar.title}
                </h2>
                <p className="text-lg text-red-400 font-semibold mb-6">
                  {pillar.tagline}
                </p>

                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                  {pillar.summary}
                </p>
              </div>

              {/* Mechanics */}
              <div
                className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury p-6 sm:p-8 mb-8"
                style={{ borderColor: "rgba(220,38,38,0.2)" }}
              >
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  How it works
                </h3>
                <ul className="space-y-4">
                  {pillar.mechanics.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scenario */}
              <div
                className="rounded-2xl p-6 sm:p-8 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(17,24,39,0.95) 100%)",
                  borderColor: "rgba(220,38,38,0.3)",
                }}
              >
                <p className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">
                  Real-world example
                </p>
                <p className="text-gray-300 leading-relaxed">{pillar.scenario}</p>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── FAQ SECTION ─────────────────────────── */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        aria-labelledby="promise-faq-heading"
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
                Guarantee FAQ
              </span>
            </div>
            <h2
              id="promise-faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            >
              Common Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Plain answers. No fine print designed to wriggle out of claims.
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
                  Questions About The Gardner Promise
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl"
                    style={{
                      backgroundColor: "#202020",
                      backgroundImage:
                        "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                    <div className="relative z-10">
                      <AccordionTrigger className="text-left hover:no-underline text-white hover:text-red-400 data-[state=open]:text-red-500 px-6 sm:px-8 py-6 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                        <span className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-red-600 group-hover/trigger:to-red-500 transition-all duration-300 flex-shrink-0">
                            <HelpCircle className="h-4 w-4 text-red-400 group-hover/trigger:text-white transition-colors duration-300" />
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

    </div>
  );
}
