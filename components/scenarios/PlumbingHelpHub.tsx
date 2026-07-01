"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProtectHomeBanner } from "@/components/ProtectHomeBanner";
import {
  Zap,
  Droplet,
  Home,
  ClipboardCheck,
  Phone,
  ArrowRight,
  BookOpen,
  DollarSign,
  Wrench,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE_DISPLAY = "(951) 246-4337";
const PHONE_HREF = "tel:9512464337";

// ─── Shared visual helpers ────────────────────────────────────────────────────

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

// ─── Scenario card data ────────────────────────────────────────────────────────

type BadgeVariant = "emergency" | "diagnostic" | "awareness";

const scenarios: {
  icon: React.ElementType;
  badge: string;
  badgeVariant: BadgeVariant;
  heading: string;
  hook: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}[] = [
  {
    icon: Zap,
    badge: "Emergency",
    badgeVariant: "emergency",
    heading: "Pipe Burst?",
    hook: "Shut off the main valve, then call. Every hour of water flow costs $150–300 in damage.",
    href: "/plumbing-help/pipe-burst-what-to-do",
    image: "/pipe-burst-hero.webp",
    imageAlt: "Gardner Plumbing technician responding to a burst pipe emergency in a Riverside County home",
    imagePosition: "center 65%",
  },
  {
    icon: Droplet,
    badge: "Emergency",
    badgeVariant: "emergency",
    heading: "Drain Won't Stop Backing Up?",
    hook: "One drain is a plunger job. Multiple drains = main line — don't DIY.",
    href: "/plumbing-help/drain-clog-what-to-do",
    image: "/drain-clog-hero.webp",
    imageAlt: "Gardner Plumbing technician reviewing camera inspection footage of a clogged drain line",
    imagePosition: "center 60%",
  },
  {
    icon: Home,
    badge: "Diagnostic",
    badgeVariant: "diagnostic",
    heading: "Think You Have a Slab Leak?",
    hook: "Warm spot on the floor + water bill spike = call for detection immediately.",
    href: "/plumbing-help/slab-leak-what-to-do",
    image: "/slab-leak-hero.webp",
    imageAlt: "Gardner Plumbing technician performing acoustic slab leak detection on a kitchen floor",
    imagePosition: "center 70%",
  },
  {
    icon: ClipboardCheck,
    badge: "Awareness",
    badgeVariant: "awareness",
    heading: "Buying or Selling a Home?",
    hook: "12-point plumbing inspection checklist. Catch issues before you sign.",
    href: "/plumbing-help/plumbing-inspection-checklist",
    image: "/plumbing-inspection-hero.webp",
    imageAlt: "Gardner Plumbing technician conducting a pre-purchase plumbing inspection with a clipboard",
    imagePosition: "center 30%",
  },
];

const badgeStyles: Record<BadgeVariant, string> = {
  emergency: "bg-red-600/20 text-red-400 border-red-500/30",
  diagnostic: "bg-blue-600/20 text-blue-400 border-blue-500/30",
  awareness: "bg-green-600/20 text-green-400 border-green-500/30",
};

// ─── "How to Use These Guides" bullets ───────────────────────────────────────

const guideFeatures = [
  {
    icon: BookOpen,
    title: "What to do right now",
    body: "First steps you can take before help arrives — ranked by urgency so you act on what matters most.",
  },
  {
    icon: DollarSign,
    title: "What it typically costs",
    body: "Realistic Riverside County price ranges, not national averages or best-case figures.",
  },
  {
    icon: Wrench,
    title: "What to expect from Gardner",
    body: "How the call, dispatch, and repair actually work — no surprises when the technician arrives.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PlumbingHelpHub() {
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
                { label: "Plumbing Help" },
              ]}
            />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: text + CTAs */}
            <div className="lg:col-span-7">
              <SectionBadge icon={BookOpen} text="Help Guides" color="red" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Plumbing Help —{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  What to Do When Things Go Wrong
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Gardner Plumbing Co. has published problem-answer guides for the most common plumbing emergencies in Riverside County. Each guide walks you through what to do right now, what it typically costs, and when to call. Written by our licensed technicians{" "}
                <span className="text-gray-400">(CSLB #1073177)</span>.
              </p>

              <p className="text-sm text-gray-500 mb-8">Last Updated: June 2026</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF}>
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    Emergency? Call {PHONE_DISPLAY}
                  </button>
                </a>
                <a href="#guides">
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                    Browse Help Guides
                  </button>
                </a>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury border border-white/10">
                <Image
                  src="/GardnerTechVanTools.webp"
                  alt="Gardner Plumbing Co. technician with service van and tools, ready for a Riverside County emergency call"
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

      <ProtectHomeBanner />

      {/* ── SCENARIO CARDS ─────────────────────────────────────────────── */}
      <section
        id="guides"
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden scroll-mt-16"
        aria-labelledby="guides-heading"
      >
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={ClipboardCheck} text="Problem Guides" color="red" />
            <h2
              id="guides-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
            >
              Pick Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Situation
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Each guide is written for the moment you are in — not generic advice, but
              specific steps for Riverside County homes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {scenarios.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500 block"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                  aria-label={`${card.heading} — Read the guide`}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/15 via-transparent to-red-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  {/* Left-edge accent */}
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image banner with icon + badge overlaid */}
                    <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-2xl">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        style={{ objectPosition: card.imagePosition }}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {/* Dark gradient overlay for icon/badge legibility */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />
                      {/* Icon top-left */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-red-600/90 to-red-500/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-red-400/40">
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {/* Badge top-right */}
                      <span
                        className={`absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-sm ${badgeStyles[card.badgeVariant]}`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300 leading-snug">
                      {card.heading}
                    </h3>

                    {/* Hook */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow mb-6">
                      {card.hook}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors duration-300">
                      Read the guide
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW TO USE THESE GUIDES ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={BookOpen} text="How These Guides Work" color="blue" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              What Every Guide{" "}
              <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                Covers
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Each page follows the same three-part pattern — so you always know where to find
              what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {guideFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group relative border-none overflow-hidden rounded-2xl shadow-luxury transition-all duration-500"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                  <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full">
                    <div className="mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600/30 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500 shadow-lg border border-blue-500/20 group-hover:border-blue-500/60">
                        <Icon className="h-7 w-7 text-blue-400 group-hover:text-white transition-all duration-500" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                      {feature.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ───────────────────────────────────────────── */}
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
