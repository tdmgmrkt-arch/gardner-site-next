"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProtectHomeBanner } from "./ProtectHomeBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import {
  Shield,
  ShieldCheck,
  Clock,
  CheckCircle,
  Phone,
  Calendar,
  Award,
  Star,
  Wrench,
  FileText,
  ArrowRight,
  ArrowDown,
  HelpCircle,
  Zap,
  Home,
  TrendingDown,
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
      <span
        className={`${iconColorMap[color]} font-semibold text-sm uppercase tracking-wider`}
      >
        {text}
      </span>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: FileText,
    title: "Annual System Inspection",
    description:
      "A licensed Gardner Plumbing technician conducts a comprehensive plumbing health check of every accessible fixture, valve, drain, and supply line. You receive a written report — not just a verbal summary.",
  },
  {
    icon: Wrench,
    title: "Scheduled Maintenance",
    description:
      "Proactive care on a set schedule: water heater flush, drain health check, fixture tune-up, and pressure test. We catch small problems before they turn into emergency calls.",
  },
  {
    icon: Zap,
    title: "Priority Emergency Access",
    description:
      "Shield members go to the front of the dispatch queue, 24 hours a day, 7 days a week. When the water is running where it shouldn't be, you don't wait behind the general queue.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty Coverage",
    description:
      "Parts and labor on covered repairs are backed beyond the standard warranty window. The tier you hold determines how many years of extended coverage you receive.",
  },
];

const howItWorksSteps = [
  {
    title: "Sign Up",
    detail:
      "Call us or complete the contact form. We confirm your tier, address, and billing — takes about five minutes.",
  },
  {
    title: "First Inspection Scheduled",
    detail:
      "We reach out within one business day to book your first annual inspection at a time that works for you.",
  },
  {
    title: "Shield Welcome Packet",
    detail:
      "You receive your member card and written summary of what's covered, your inspection report, and your maintenance schedule.",
  },
  {
    title: "Maintenance on Auto-Schedule",
    detail:
      "Subsequent visits are scheduled proactively. You don't have to remember — we reach out ahead of time.",
  },
];

const faqs = [
  {
    question: "What does The Gardner Shield include?",
    answer:
      "Every Gardner Shield membership includes an annual plumbing system inspection with a written report, scheduled maintenance visits (frequency depends on your tier), priority emergency dispatch, and extended warranty coverage on parts and labor for covered repairs. Silver Shield and Gold Shield members receive additional visits per year — 2 and 3 visits respectively.",
  },
  {
    question: "How is The Gardner Shield different from a warranty?",
    answer:
      "A warranty is reactive — it kicks in after something breaks. The Gardner Shield is proactive. It bundles scheduled maintenance designed to prevent failures in the first place, plus priority access and discounts when repairs are needed. The extended warranty component is one layer of the Shield, not the whole thing.",
  },
  {
    question: "Can I cancel my Gardner Shield membership?",
    answer:
      "Yes. Month-to-month memberships can be cancelled at any time with 30 days notice. Annual memberships paid up front can be cancelled for a prorated refund of unused months, minus any discounts already applied to repairs during the membership period. Call our office at (951) 246-4337 for details.",
  },
  {
    question: "Does The Gardner Shield cover emergency repairs?",
    answer:
      "The Shield guarantees priority dispatch for emergency calls — you move to the front of the queue immediately. Repair costs are billed at your member discount rate. The Shield does not cover the cost of every emergency repair, but your tier discount and extended warranty apply to eligible work.",
  },
  {
    question: "Can I transfer my Gardner Shield membership to a new home?",
    answer:
      "Gold Shield memberships are fully transferable to a new home address within our service area, which makes them a selling point when you list your property. Bronze Shield and Silver Shield memberships can be transferred for a $50 administration fee. Call us to process a transfer.",
  },
  {
    question: "What if I already have a home warranty?",
    answer:
      "Home warranties and The Gardner Shield serve different purposes and work well together. Home warranties are insurance products that require claim filings, deductibles, and third-party contractor dispatch — often with service delays. The Gardner Shield gives you a direct relationship with a licensed plumber you already trust, proactive maintenance your home warranty won't provide, and faster service when you need it.",
  },
  {
    question: "What isn't covered by The Gardner Shield?",
    answer:
      "The Shield is focused on plumbing system maintenance and covered repairs — a few things sit outside that scope: pre-existing conditions at sign-up (unless flagged in your inspection report), damage from third-party work or DIY repairs, cosmetic damage to fixtures or finishes, slab leak repairs (inspections are covered; repairs are billed at your member rate), appliances not connected to plumbing, and code-upgrade work required by city permit. If you're not sure whether something is covered, call us before the work — we'll tell you straight.",
  },
];

// ─── Props ────────────────────────────────────────────────────────────────────

type GardnerShieldProps = {
  reviewCount?: string;
  ratingLabel?: string;
};

// ─── Component ────────────────────────────────────────────────────────────────

export function GardnerShield({
  reviewCount = "900+",
  ratingLabel = "4.9",
}: GardnerShieldProps) {
  const [selectedTier, setSelectedTier] = useState<string>("");

  const enrollTier = (tier: "bronze" | "silver" | "gold") => {
    setSelectedTier(tier);
    setTimeout(() => {
      document.getElementById("enroll-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <div className="min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)
            `,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-10" aria-label="Breadcrumb">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "The Gardner Shield" },
              ]}
            />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: content */}
            <div>
              {/* Hero badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-red-400" aria-hidden="true" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Membership Program
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                The Gardner{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Shield
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Year-Round Protection for Your Home&rsquo;s Plumbing
              </p>

              {/* Trust strip */}
              <p className="text-base text-gray-400 mb-10 font-medium">
                {reviewCount} Five-Star Google Reviews &nbsp;&middot;&nbsp;{" "}
                {ratingLabel}&#9733; Rated &nbsp;&middot;&nbsp; CSLB #1073177 &nbsp;&middot;&nbsp; 30+ Years
              </p>

              {/* Key benefits grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: ShieldCheck, text: "Priority emergency access" },
                  { icon: TrendingDown, text: "up to 10% repair discount" },
                  { icon: Wrench, text: "Proactive maintenance" },
                  { icon: Award, text: "Extended warranty coverage" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <item.icon
                      className="h-5 w-5 text-green-400 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-medium text-sm sm:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="flex-1 sm:flex-none">
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                    <Phone
                      className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    Call {PHONE_DISPLAY}
                  </button>
                </a>
                <Link href="/contact-us" className="flex-1 sm:flex-none">
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <Calendar
                      className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    Schedule Inspection
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnervanready.webp"
                  alt="Gardner Plumbing Co. service van ready to respond — The Gardner Shield membership program"
                  width={1000}
                  height={600}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        The Gardner Shield
                      </div>
                      <div className="text-gray-300 text-xs">
                        Year-Round Protection
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProtectHomeBanner />

      {/* ── 2. WHAT IS THE GARDNER SHIELD ───────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={Shield} text="Our Membership Program" color="red" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              What Is{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                The Gardner Shield?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed max-w-4xl mx-auto">
              Most homeowners only call a plumber when something breaks.{" "}
              <span className="text-red-400">
                The Gardner Shield is built on the opposite idea.
              </span>
            </p>
          </div>

          {/* Two-column body + highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left: narrative */}
            <div className="lg:col-span-6 relative">
              <div className="glassmorphism-dark rounded-3xl p-8 lg:p-10 border border-white/10 shadow-luxury h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-red-600 to-transparent rounded-full" />
                <div className="space-y-5 text-gray-300 text-[16px] lg:text-[17px] leading-relaxed">
                  <p>
                    The Gardner Shield is Gardner Plumbing Co.&rsquo;s named membership program
                    for Riverside County homeowners. It bundles annual inspections, scheduled
                    maintenance visits, priority emergency dispatch, and extended warranty
                    coverage into <span className="text-white font-semibold">one simple annual membership</span> — so your
                    plumbing is being looked after on a regular schedule, not just when something
                    goes wrong.
                  </p>
                  <p>
                    This is <span className="text-white font-semibold">not a warranty plan</span>.
                    It&rsquo;s not a service contract with fine print designed to avoid paying out.
                    It&rsquo;s a direct relationship with the same licensed plumbing company that&rsquo;s
                    been serving Murrieta, Temecula, and the greater Riverside County area for
                    <span className="text-red-400 font-semibold"> 30+ years</span> — now on a schedule,
                    not just on a crisis.
                  </p>
                  <p>
                    Shield members get better pricing on repairs, faster response on emergencies,
                    and the peace of mind that comes from knowing a professional has actually
                    looked at your plumbing system in the last twelve months.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: benefit highlights */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {[
                {
                  icon: Calendar,
                  title: "Scheduled, Not Reactive",
                  body: "Annual inspections and maintenance visits on a set cadence — not a panic call.",
                },
                {
                  icon: Zap,
                  title: "Priority Emergency Dispatch",
                  body: "Members jump to the front of the line when something does go wrong.",
                },
                {
                  icon: TrendingDown,
                  title: "Better Pricing on Repairs",
                  body: "Member rates on every repair, plus extended warranty coverage on the work.",
                },
                {
                  icon: Home,
                  title: "Built for Riverside County Homes",
                  body: "Designed around the plumbing systems and water conditions we see every day locally.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-4 lg:p-5 shadow-luxury hover:border-red-500/40 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/30 to-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500">
                        <Icon className="h-6 w-6 text-red-400 group-hover:text-white transition-colors duration-500" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base lg:text-lg mb-1 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm lg:text-[15px] leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE 4 SHIELD PILLARS ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={ShieldCheck} text="What Every Member Gets" color="red" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              The 4 Shield{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Pillars
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every Gardner Shield tier — Bronze, Silver, and Gold — is built on
              these four commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group relative border-none overflow-hidden rounded-2xl shadow-luxury hover-lift transition-all duration-500"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage:
                      "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />

                  <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">
                    <div className="mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-600/30 to-red-500/20 rounded-xl flex items-center justify-center group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg border border-red-500/20 group-hover:border-red-500/60">
                        <Icon
                          className="h-7 w-7 text-red-400 group-hover:text-white transition-all duration-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* Left: intro */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div>
                <SectionBadge icon={Calendar} text="Getting Started" color="red" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                  How{" "}
                  <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    It Works
                  </span>
                </h2>
              </div>

              <div className="glassmorphism-dark rounded-2xl p-7 sm:p-9 border border-white/10 shadow-luxury flex-1">
                <div className="relative w-full aspect-[1474/486] rounded-xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                  <Image
                    src="/gpcsrep2.webp"
                    alt="Gardner Plumbing customer service representative ready to help schedule your Gardner Shield enrollment"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-[16px] text-gray-300 leading-relaxed mb-6">
                  Signing up for The Gardner Shield takes about five minutes. After that, we
                  handle the scheduling — you don&rsquo;t have to remember when your next
                  maintenance visit is due.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={PHONE_HREF}>
                    <button className="min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                      <Phone
                        className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                      />
                      Call {PHONE_DISPLAY}
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: 4-step process */}
            <aside
              className="lg:col-span-2 rounded-2xl border border-white/10 shadow-luxury p-7 sm:p-9 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, rgba(220,38,38,0.10) 0%, rgba(17,24,39,0.95) 60%, rgba(220,38,38,0.06) 100%)",
              }}
              aria-label="How The Gardner Shield onboarding works"
            >
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-3xl"
                style={{
                  background: "radial-gradient(circle, #DC2626 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">
                  Your First 30 Days
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight">
                  Four steps to full coverage.
                </h3>

                <ol className="space-y-5">
                  {howItWorksSteps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg border border-red-400/40">
                        <span className="text-white font-bold text-sm">{i + 1}</span>
                      </div>
                      <div className="flex-1 pt-0.5">
                        <p className="text-white font-bold text-[15px] leading-tight">
                          {step.title}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mt-1">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 5. MEMBERSHIP TIERS + SIGN-UP FORM ──────────────────────────── */}
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge icon={Star} text="Membership Tiers" color="yellow" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Shield Level
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Three tiers. Every one includes the 4 Shield Pillars. Choose the level
              of coverage that fits your home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

            {/* Shield Bronze */}
            <div
              className="relative rounded-2xl shadow-luxury overflow-hidden flex flex-col"
              style={{
                backgroundColor: "#202020",
                backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
              }}
            >
              <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
              <div className="relative z-10 p-7 sm:p-8 flex flex-col flex-1">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
                      Entry Tier
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-1 whitespace-nowrap">
                      Bronze Shield
                    </h3>
                    <div className="flex items-baseline gap-2 mt-4 mb-1">
                      <span className="text-4xl font-bold text-white">$99</span>
                      <span className="text-gray-400 text-sm">/year</span>
                    </div>
                    <p className="text-gray-500 text-xs">1 Visit Per Year</p>
                  </div>
                  <Image
                    src="/bronzesheild.png"
                    alt="Bronze Shield tier badge"
                    width={160}
                    height={160}
                    className="h-28 w-auto flex-shrink-0 -mr-2 sm:-mr-3"
                  />
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    "Annual plumbing system inspection",
                    "Written inspection report",
                    "Up to 56 PT tune-up",
                    "Priority booking (non-emergency)",
                    "Up to 25% discount on repairs",
                    "Extended warranty on covered repairs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle
                        className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => enrollTier("bronze")}
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
                  >
                    Enroll Online
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={PHONE_HREF}
                    className="text-center text-xs text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            {/* Shield Silver — MOST POPULAR */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col border-2 border-red-500 lg:scale-105 lg:z-10 transform-gpu"
              style={{
                backgroundColor: "#202020",
                backgroundImage: "linear-gradient(145deg, #1a0a0a 0%, #1a1010 100%)",
                boxShadow:
                  "0 0 0 1px rgba(248, 113, 113, 0.25), 0 25px 60px -15px rgba(220, 38, 38, 0.55), 0 12px 30px -10px rgba(0, 0, 0, 0.65)",
              }}
            >
              {/* Most Popular badge */}
              <div
                className="absolute top-0 inset-x-0 flex justify-center"
                aria-label="Most Popular"
              >
                <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-1.5 rounded-b-xl shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl" />
              <div className="relative z-10 p-7 sm:p-8 flex flex-col flex-1 pt-12">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">
                      Recommended
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-1 whitespace-nowrap">
                      Silver Shield
                    </h3>
                    <div className="flex items-baseline gap-2 mt-4 mb-1">
                      <span className="text-4xl font-bold text-white">$179</span>
                      <span className="text-gray-400 text-sm">/year</span>
                    </div>
                    <p className="text-gray-500 text-xs">2 Visits Per Year</p>
                  </div>
                  <Image
                    src="/silversheild.png"
                    alt="Silver Shield tier badge"
                    width={160}
                    height={160}
                    className="h-28 w-auto flex-shrink-0 -mr-2 sm:-mr-3"
                  />
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    "Everything in Bronze Shield",
                    "2 maintenance visits per year",
                    "24-hour response time guarantee",
                    "Priority emergency dispatch — 24/7",
                    "Never a premium charge",
                    "Annual water heater flush",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle
                        className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => enrollTier("silver")}
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300"
                  >
                    Enroll Online
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={PHONE_HREF}
                    className="text-center text-xs text-red-200/80 hover:text-white transition-colors duration-200"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            {/* Shield Gold */}
            <div
              className="relative rounded-2xl shadow-luxury overflow-hidden flex flex-col"
              style={{
                backgroundColor: "#202020",
                backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
              }}
            >
              <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
              <div className="relative z-10 p-7 sm:p-8 flex flex-col flex-1">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
                      Premium Tier
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-1 whitespace-nowrap">
                      Gold Shield
                    </h3>
                    <div className="flex items-baseline gap-2 mt-4 mb-1">
                      <span className="text-4xl font-bold text-white">$249</span>
                      <span className="text-gray-400 text-sm">/year</span>
                    </div>
                    <p className="text-gray-500 text-xs">3 Visits Per Year</p>
                  </div>
                  <Image
                    src="/goldsheild.png"
                    alt="Gold Shield tier badge"
                    width={160}
                    height={160}
                    className="h-28 w-auto flex-shrink-0 -mr-2 sm:-mr-3"
                  />
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    "Everything in Silver Shield",
                    "3 maintenance visits per year",
                    "One free drain clearing per year",
                    "Up to 10% discount on new equipment",
                    "Comfort Guarantee (Hotel Stay)",
                    "Fully transferable on home sale",
                    "Multi-year/unit discount available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle
                        className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => enrollTier("gold")}
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
                  >
                    Enroll Online
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={PHONE_HREF}
                    className="text-center text-xs text-yellow-200/70 hover:text-yellow-100 transition-colors duration-200"
                  >
                    Or call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Sign-up form (inside same section as tiers to avoid background seam) */}
          <div id="enroll-form" className="scroll-mt-24 pt-20 sm:pt-24 lg:pt-28">
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <span className="text-green-400 font-semibold text-sm">
                  Selected your tier? Sign up below
                </span>
                <ArrowDown className="h-4 w-4 text-green-400" aria-hidden="true" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Complete The Info Below To{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                Sign Up
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Join our maintenance program and secure your home&rsquo;s plumbing future with comprehensive coverage and peace of mind.
            </p>
          </div>

          {/* Form Container — matches tier-card styling */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-luxury"
            style={{
              backgroundColor: "#202020",
              backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
              boxShadow:
                "0 0 0 1px rgba(34, 197, 94, 0.20), 0 30px 70px -20px rgba(0, 0, 0, 0.75), 0 15px 35px -10px rgba(34, 197, 94, 0.15)",
            }}
          >
            <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl" />
            {/* Accent bar */}
            <div
              className="relative h-1.5"
              style={{
                background: "linear-gradient(90deg, #22c55e 0%, #16a34a 50%, #22c55e 100%)",
              }}
            />
            <div className="relative z-10 p-8 lg:p-12">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="gs-name" className="text-white font-medium">Name</Label>
                  <Input
                    id="gs-name"
                    placeholder="Your full name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="gs-address" className="text-white font-medium">Address</Label>
                  <Input
                    id="gs-address"
                    placeholder="Your address"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="gs-phone" className="text-white font-medium">Mobile Phone</Label>
                  <Input
                    id="gs-phone"
                    type="tel"
                    placeholder="(951) 246-4337"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="gs-email" className="text-white font-medium">Email Address</Label>
                  <Input
                    id="gs-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="gs-plan" className="text-white font-medium">Type of Plan</Label>
                <Select value={selectedTier} onValueChange={setSelectedTier}>
                  <SelectTrigger
                    id="gs-plan"
                    className="bg-white/5 border-white/20 text-white h-12 rounded-xl focus:border-green-500 transition-all duration-300"
                  >
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="bronze" className="text-white hover:bg-gray-700">
                      Bronze Shield - 1 Visit Per Year $99
                    </SelectItem>
                    <SelectItem value="silver" className="text-white hover:bg-gray-700">
                      Silver Shield - 2 Visits Per Year $179
                    </SelectItem>
                    <SelectItem value="gold" className="text-white hover:bg-gray-700">
                      Gold Shield - 3 Visits Per Year $249
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label className="text-white font-medium">Are you the owner of the property?</Label>
                <div className="flex gap-8">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="gs-owner-yes"
                      name="gs-owner"
                      value="yes"
                      className="w-4 h-4 text-green-500 bg-transparent border-white/20 focus:ring-green-500/20"
                    />
                    <Label htmlFor="gs-owner-yes" className="text-white">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="gs-owner-no"
                      name="gs-owner"
                      value="no"
                      className="w-4 h-4 text-green-500 bg-transparent border-white/20 focus:ring-green-500/20"
                    />
                    <Label htmlFor="gs-owner-no" className="text-white">No, I&rsquo;m the Tenant</Label>
                  </div>
                </div>
              </div>

              {/* SMS Consent Disclosure - TCR Compliant */}
              <div className="flex items-start gap-2 sm:gap-3">
                <Checkbox
                  id="gs-opt-in"
                  className="mt-0.5 border-white/20 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 flex-shrink-0"
                  required
                />
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="gs-opt-in" className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">
                    By submitting this form and signing up for texts, you agree to receive informational (appointment reminders, account notifications, etc.) and marketing (offers and promotions, etc.) messages from Gardner Plumbing at the number provided. Message frequency may vary. Msg &amp; data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Customer opt-in data will not be shared or sold to third parties for marketing purposes.
                  </Label>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                    <a href="/privacy-policy" className="text-green-400 underline hover:text-green-300">
                      Privacy Policy
                    </a>
                    <span className="text-gray-500">|</span>
                    <a href="/terms-and-services" className="text-green-400 underline hover:text-green-300">
                      Terms &amp; Conditions
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-green-400/20 transition-all duration-300 group"
              >
                <Calendar
                  className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                Sign Up for Gardner Shield
              </button>
            </form>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionBadge icon={HelpCircle} text="FAQ" color="blue" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Gardner Shield{" "}
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
                      backgroundImage:
                        "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                    <div className="relative z-10">
                      <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-400 px-6 sm:px-8 py-6 transition-colors duration-300 text-base font-semibold">
                        <span className="flex items-start gap-4 pr-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0 mt-0.5">
                            <HelpCircle
                              className="h-4 w-4 text-blue-400 group-hover:text-white transition-colors duration-300"
                              aria-hidden="true"
                            />
                          </div>
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6 sm:pb-8 px-6 sm:px-8 ml-12 text-base leading-relaxed">
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

      {/* ── 7. FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-red-400" aria-hidden="true" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Enroll Today
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Protect Your Home with{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  The Gardner Shield
                </span>
              </h2>

              <p className="text-[16px] text-gray-300 mb-4 leading-relaxed">
                Gardner Plumbing Co. has served Murrieta, Temecula, Riverside, and 25
                cities across the greater Inland Empire for 30+ years. The Gardner Shield
                puts that experience on a proactive schedule — so your plumbing doesn&rsquo;t
                become a crisis.
              </p>

              <p className="text-sm text-gray-500 mb-8">
                CSLB #1073177 &nbsp;&middot;&nbsp; Licensed, Bonded &amp; Insured &nbsp;&middot;&nbsp;{" "}
                {reviewCount} Five-Star Google Reviews
              </p>

              {/* Trust strip */}
              <div
                className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury px-6 py-5 mb-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(17,24,39,0.95) 50%, rgba(220,38,38,0.06) 100%)",
                  borderColor: "rgba(220,38,38,0.25)",
                }}
              >
                <p className="text-sm sm:text-base font-semibold text-gray-300 tracking-wide text-center">
                  <span className="text-red-400 font-bold">CSLB #1073177</span>
                  <span className="mx-3 text-gray-600" aria-hidden="true">
                    &middot;
                  </span>
                  {reviewCount} five-star Google reviews
                  <span className="mx-3 text-gray-600" aria-hidden="true">
                    &middot;
                  </span>
                  30+ years serving Riverside County
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="flex-1 sm:flex-none">
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                    <Phone
                      className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    Call {PHONE_DISPLAY}
                  </button>
                </a>
                <Link href="/contact-us" className="flex-1 sm:flex-none">
                  <button className="w-full sm:w-auto min-w-[220px] min-h-[44px] inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <ArrowRight
                      className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    Get Free Estimate
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/GardnerEmployeeArrival.webp"
                  alt="Gardner Plumbing Co. technician arriving at a home — The Gardner Shield membership program"
                  width={1000}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">30+ Years</div>
                      <div className="text-gray-300 text-xs">Serving Riverside County</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <p className="text-center text-gray-600 text-xs mt-12">
          Last Updated: June 2026
        </p>
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
          <Calendar className="h-5 w-5" aria-hidden="true" />
          <span>Schedule</span>
        </Link>
      </div>

    </div>
  );
}
