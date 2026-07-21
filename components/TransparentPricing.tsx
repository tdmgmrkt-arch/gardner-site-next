"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GardnerPromise } from "./GardnerPromise";
import { ProtectHomeBanner } from "./ProtectHomeBanner";
import { SchedulerModal } from "./SchedulerModal";
import { Modal } from "./Modal";
import { LeadForm } from "./LeadForm";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  DollarSign,
  CheckCircle,
  Phone,
  Shield,
  Award,
  HelpCircle,
  MapPin,
  FileText,
  AlertTriangle,
  Star,
  Clock,
  Wrench,
  Droplets,
  Zap,
  ThumbsUp,
  Quote,
  X,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const PHONE_DISPLAY = "(951) 246-4337";
const PHONE_HREF = "tel:9512464337";

const comparisonRows = [
  { practice: "Trip fee or service call fee", competitors: "$75 – $300", gardner: "None" },
  { practice: "Written estimate before work begins", competitors: "Not always", gardner: "Always" },
  { practice: "Flat-rate pricing", competitors: "Varies", gardner: "Yes" },
  { practice: "Price changes after work starts", competitors: "Common", gardner: "Only with your approval" },
  { practice: "Free in-home estimate", competitors: "Rarely", gardner: "Yes" },
  { practice: "High-pressure upselling", competitors: "Common", gardner: "No" },
];

const drainPricingRows = [
  {
    service: "Single Fixture Drain Cleaning",
    range: "$150 – $350",
    notes: "Clears a blocked sink, bathtub, or shower drain using professional equipment.",
  },
  {
    service: "Toilet Drain Clearing",
    range: "$150 – $300",
    notes: "Removes blockages from a toilet drain line.",
  },
  {
    service: "Main Sewer Line Clearing",
    range: "$250 – $600",
    notes: "Clears blockages from the main line connecting your home to the municipal sewer.",
  },
  {
    service: "Hydro Jetting (High-Pressure Cleaning)",
    range: "$350 – $800",
    notes: "Removes grease buildup, mineral scale, and tree root intrusion using pressurized water.",
  },
  {
    service: "Sewer Camera Inspection",
    range: "$250 – $400",
    notes: "High-definition video inspection to locate cracks, root intrusion, or bellied pipe.",
  },
  {
    service: "Trenchless Sewer Line Repair (CIPP)",
    range: "$80 – $250 per linear foot",
    notes: "Cured-in-place pipe lining restores the sewer line without excavating the yard.",
  },
  {
    service: "Traditional Sewer Line Replacement",
    range: "$50 – $250 per linear foot",
    notes: "Full excavation and pipe replacement; typically $3,000 – $20,000 for a complete residential line.",
  },
];

const waterHeaterPricingRows = [
  {
    service: "Water Heater Repair",
    range: "$175 – $850",
    notes: "Replacing thermostats, heating elements, gas valves, or anode rods.",
  },
  {
    service: "Standard Tank Water Heater Replacement (40–50 gal.)",
    range: "$1,400 – $2,800",
    notes: "Includes removal of old unit, new tank, seismic strapping, expansion tank, and permit.",
  },
  {
    service: "High-Efficiency Tank Water Heater",
    range: "$1,800 – $3,200",
    notes: "Power-vented or high-efficiency models with lower operating costs.",
  },
  {
    service: "Tankless Gas Water Heater Installation",
    range: "$3,000 – $5,500",
    notes: "Includes gas line modifications, new venting, and permit.",
  },
  {
    service: "Tankless Electric Water Heater Installation",
    range: "$2,000 – $5,500+",
    notes: "May require electrical panel upgrade, which adds to total cost.",
  },
];

const leakRepairRows = [
  {
    service: "Faucet or Fixture Leak Repair",
    range: "$100 – $300",
    notes: "Tightening connections, replacing washers, cartridges, or O-rings.",
  },
  {
    service: "Pipe Leak Repair (Accessible)",
    range: "$200 – $700",
    notes: "Repairing or replacing a section of exposed pipe.",
  },
  {
    service: "Pipe Leak Repair (Behind Wall or Under Floor)",
    range: "$500 – $2,000",
    notes: "Includes access work and patch repair.",
  },
  {
    service: "Slab Leak Detection",
    range: "$150 – $400",
    notes: "Electronic and acoustic equipment to locate leaks under the concrete slab.",
  },
  {
    service: "Slab Leak Repair",
    range: "$1,200 – $5,000+",
    notes: "Concrete cutting, pipe repair or rerouting, and surface restoration.",
  },
  {
    service: "Main Water Line Repair",
    range: "$500 – $3,000",
    notes: "Repairing or replacing the line from the street meter to the home.",
  },
];

const fixturePricingRows = [
  {
    service: "Toilet Repair",
    range: "$125 – $350",
    notes: "Replacing flappers, fill valves, flush valves, or wax rings.",
  },
  {
    service: "Toilet Replacement",
    range: "$350 – $950",
    notes: "Removal of old toilet, installation of new unit, and proper sealing. Customer may supply fixture.",
  },
  {
    service: "Faucet Installation (Kitchen or Bathroom)",
    range: "$175 – $375",
    notes: "Professional installation of a new faucet. Customer may supply fixture.",
  },
  {
    service: "Shower or Tub Faucet Replacement",
    range: "$200 – $500",
    notes: "Replacing cartridge valves or complete shower valve assemblies.",
  },
  {
    service: "Garbage Disposal Replacement",
    range: "$200 – $625",
    notes: "Removal of old unit, installation of new disposal, and electrical connection check.",
  },
  {
    service: "Garbage Disposal Repair",
    range: "$100 – $250",
    notes: "Resetting, unclogging, or replacing internal components.",
  },
];

const pricingConcerns = [
  {
    question: "I got a lower quote from another company. Why is Gardner Plumbing Co. different?",
    answer:
      "A lower quote is not always a lower final cost. Some companies quote a low number to get in the door, then add charges for travel, materials, or \"complications\" discovered during the job. Gardner Plumbing Co. provides a written estimate that covers all expected costs. If a quote from another company does not include a written breakdown of parts and labor, ask for one before agreeing to any work.",
  },
  {
    question: "Why do plumbing prices vary so much between companies?",
    answer:
      "Several factors explain the range. Licensing and insurance cost money, and companies that carry proper coverage charge accordingly. The quality of parts matters — a low-cost repair using substandard materials may need to be redone within a year. Experience also affects pricing; a technician who has handled hundreds of similar jobs in Riverside County and neighboring communities works more efficiently and is less likely to cause additional damage.",
  },
  {
    question: "Is it cheaper to hire an unlicensed plumber?",
    answer:
      "The upfront cost may be lower, but the risks are significant. In California, plumbing work over $500 legally requires a licensed contractor. Unlicensed work may not meet building codes, can void homeowner's insurance, and may need to be torn out and redone before a home can be sold. Gardner Plumbing Co. is fully licensed (CSLB #1073177), bonded, and insured.",
  },
  {
    question: "Why can't you give me an exact price over the phone?",
    answer:
      "Every plumbing system is different. The age of the pipes, the accessibility of the problem, and the specific code requirements for your city or county all affect the price. A number given over the phone without seeing the job is a guess, not a quote. Our free in-home estimate provides a real, firm number.",
  },
  {
    question: "What if the job costs more than the estimate?",
    answer:
      "If a technician discovers something unexpected during the work — for example, a pipe that is more corroded than it appeared — they stop, explain the situation, and get your approval before doing any additional work. You are never charged for work you did not authorize.",
  },
];

const faqs = [
  {
    question: "How much does a plumber cost in Riverside County and neighboring communities?",
    answer:
      "For most standard service calls in Riverside County and neighboring communities, homeowners pay between $125 and $600. The average service call for a common repair such as a drain clearing or toilet fix typically falls between $150 and $450. More complex projects — water heater replacements, sewer line repairs, and slab leaks — range from $1,200 to $20,000 depending on scope.",
  },
  {
    question: "Does Gardner Plumbing Co. charge a trip fee?",
    answer:
      "No. Gardner Plumbing Co. does not charge a trip fee, dispatch fee, or service call fee. The estimate visit is free.",
  },
  {
    question: "How much does drain cleaning cost in Southern California?",
    answer:
      "Drain cleaning for a single fixture typically costs $150 to $350 in Southern California. Main sewer line clearing runs $250 to $600. Hydro jetting, which is used for severe buildup or recurring blockages, typically costs $350 to $800.",
  },
  {
    question: "How much does water heater installation cost in Southern California?",
    answer:
      "A standard tank water heater replacement in Southern California typically costs $1,400 to $2,800 fully installed, including the unit, labor, code-required upgrades, and permit. Tankless water heater installations range from $3,000 to $5,500 due to additional gas line and venting requirements.",
  },
  {
    question: "How much does sewer line repair cost in Southern California?",
    answer:
      "Sewer line repair in Southern California ranges from $80 to $250 per linear foot for trenchless repair. A full residential sewer line replacement typically costs $3,000 to $20,000 depending on the length of the line, the method used, and whether permits and inspections are required.",
  },
  {
    question: "How much does leak repair cost in Southern California?",
    answer:
      "Accessible pipe leak repairs typically cost $200 to $700. Slab leak detection costs $150 to $400, and slab leak repair ranges from $1,200 to $5,000 or more depending on the extent of the damage and whether pipe rerouting is necessary.",
  },
  {
    question: "How much does toilet replacement cost in Southern California?",
    answer:
      "Professional toilet replacement in Southern California typically costs $350 to $950, including removal of the old unit, installation of the new toilet, and sealing. The cost of the toilet itself varies depending on the model chosen.",
  },
  {
    question: "How much does garbage disposal installation cost in Southern California?",
    answer:
      "Garbage disposal replacement by a licensed plumber in Southern California typically costs $200 to $625, including removal of the old unit and installation of the new one.",
  },
  {
    question: "How much does faucet installation cost in Southern California?",
    answer:
      "Professional faucet installation in Southern California typically costs $175 to $375 for a standard kitchen or bathroom faucet when the customer supplies the fixture.",
  },
  {
    question: "Does plumbing work require a permit in Southern California?",
    answer:
      "Many plumbing projects in Southern California require a permit, including water heater replacements, sewer line work, gas line modifications, and whole-home repiping. Permits and city inspections are the property owner's responsibility under California law. When your job requires them, we'll tell you upfront and can coordinate the paperwork on your behalf — permit fees appear as a separate pass-through line on your quote.",
  },
  {
    question: "What is flat-rate plumbing pricing?",
    answer:
      "Flat-rate pricing means the price is set for the job, not for the hour. You pay the quoted amount regardless of how long the work takes. This protects you from paying more if a job takes longer than expected. Gardner Plumbing Co. uses flat-rate pricing for all standard services.",
  },
];

const serviceAreaCities = [
  "Banning", "Beaumont", "Calimesa", "Cathedral City", "Cherry Valley",
  "Corona", "Eastvale", "Garnet", "Hemet", "Jurupa Valley",
  "Lake Elsinore", "Menifee", "Mentone", "Moreno Valley", "Murrieta",
  "North Palm Springs", "Palm Springs", "Palm Desert", "Pedley", "Perris",
  "Redlands", "Riverside", "San Jacinto", "Temecula", "Yucaipa",
];

// ─── Shared sub-components ─────────────────────────────────────────────────

function SectionBadge({ icon: Icon, text, color = "red" }: { icon: React.ElementType; text: string; color?: "red" | "blue" | "green" | "yellow" }) {
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
    <div className={`inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r ${colorMap[color]} rounded-full border backdrop-blur-sm`}>
      <Icon className={`h-5 w-5 ${iconColorMap[color]}`} />
      <span className={`${iconColorMap[color]} font-semibold text-sm uppercase tracking-wider`}>{text}</span>
    </div>
  );
}

function PricingTable({ rows }: { rows: { service: string; range: string; notes: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-lg">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)" }}>
            <th className="text-left px-5 py-4 text-white font-semibold text-base">Service</th>
            <th className="text-left px-5 py-4 text-white font-semibold text-base whitespace-nowrap">Typical Price Range</th>
            <th className="text-left px-5 py-4 text-white font-semibold text-base hidden md:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-white/10 transition-colors hover:bg-white/5"
              style={{ backgroundColor: idx % 2 === 0 ? "rgba(32,32,32,0.95)" : "rgba(26,26,26,0.95)" }}
            >
              <td className="px-5 py-4 text-white font-medium align-top">{row.service}</td>
              <td className="px-5 py-4 text-red-400 font-bold align-top whitespace-nowrap">{row.range}</td>
              <td className="px-5 py-4 text-gray-400 align-top hidden md:table-cell leading-relaxed">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
      {children}
    </h2>
  );
}

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

// ─── Main component ────────────────────────────────────────────────────────

type TransparentPricingProps = {
  reviewCount?: string
  ratingLabel?: string
}

export function TransparentPricing({ reviewCount = "900+", ratingLabel = "4.9" }: TransparentPricingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <nav className="mb-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Transparent Pricing" },
              ]}
            />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <DollarSign className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  No Surprises. No Trip Fees. Just Fair Prices.
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Transparent{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Gardner Plumbing Co. provides upfront, written pricing for all plumbing repairs and
                installations across Riverside County and neighboring communities.
                You know the full cost before any work begins — every time.
              </p>

              {/* Trust strip */}
              <p className="text-base text-gray-400 mb-10 font-medium">
                30+ Years &nbsp;·&nbsp; {reviewCount} Five-Star Google Reviews &nbsp;·&nbsp; No Trip Fees, No Surprises &nbsp;·&nbsp; CSLB #1073177
              </p>

              {/* Key trust points */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: FileText, text: "Written estimate every time" },
                  { icon: DollarSign, text: "Flat-rate pricing" },
                  { icon: Shield, text: "No hidden fees" },
                  { icon: ThumbsUp, text: "No obligation estimates" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-w-[220px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <FileText className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Get a Free Estimate
                    </span>
                  </Button>
                </Link>
                <a href={PHONE_HREF} className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-w-[220px] border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call {PHONE_DISPLAY}
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/transparent-pricing.webp"
                  alt="Gardner Plumbing Co. transparent pricing — upfront, written estimates with no trip fees"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Written Estimates</div>
                      <div className="text-gray-300 text-xs">Flat-Rate, No Surprises</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProtectHomeBanner />

      {/* ── 2. WHAT TRANSPARENT PRICING MEANS ──────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge icon={DollarSign} text="Our Pricing Commitment" color="red" />
            <SectionHeading>
              What Transparent Pricing Means at{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Gardner Plumbing Co.
              </span>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* LEFT: philosophy + 3 "No" promises */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Lead philosophy */}
              <div className="glassmorphism-dark rounded-2xl p-7 sm:p-9 border border-white/10 shadow-luxury">
                <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed mb-4">
                  Transparent pricing means one thing:{" "}
                  <span className="text-red-400">
                    you know the full cost before any work begins.
                  </span>
                </p>
                <p className="text-gray-300 text-[16px] leading-relaxed">
                  When a Gardner Plumbing Co. technician arrives, they diagnose the problem,
                  explain every option in plain language, and hand you a written estimate. That
                  written number is the number you pay. If the job turns out to be more complex
                  once work is underway, we stop, explain, and get your approval before continuing.
                  You are always in control.
                </p>
              </div>

              {/* 3 "No" promise badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "No Trip Fees", sub: "Free in-home estimates" },
                  { label: "No Surprise Add-Ons", sub: "Written quote = invoice" },
                  { label: "No Pressure Sales", sub: "Walk away anytime" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="relative rounded-xl p-5 border border-red-500/30 shadow-lg overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(220,38,38,0.12) 0%, rgba(17,24,39,0.95) 100%)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/40 flex-shrink-0">
                        <X className="h-5 w-5 text-red-400" aria-hidden="true" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm leading-tight">{item.label}</p>
                        <p className="text-gray-400 text-xs mt-1 leading-snug">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: 4-step process */}
            <aside
              className="lg:col-span-2 rounded-2xl border border-white/10 shadow-luxury p-7 sm:p-9 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, rgba(220,38,38,0.10) 0%, rgba(17,24,39,0.95) 60%, rgba(220,38,38,0.06) 100%)",
              }}
              aria-label="How transparent pricing works in your home"
            >
              {/* Corner glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #DC2626 0%, transparent 70%)" }}
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">
                  How It Works In Your Home
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight">
                  Four steps, every visit.
                </h3>

                <ol className="space-y-5">
                  {[
                    {
                      title: "We Diagnose",
                      detail:
                        "Our technician assesses the issue on-site — no phone-call guesses.",
                    },
                    {
                      title: "We Explain Every Option",
                      detail:
                        "Plain language, all repair paths, trade-offs spelled out.",
                    },
                    {
                      title: "You Get a Written Estimate",
                      detail: "A firm number — parts, labor, and any permit fees included.",
                    },
                    {
                      title: "You Approve. Then We Work.",
                      detail:
                        "If scope changes mid-job, we stop and re-quote before continuing.",
                    },
                  ].map((step, i) => (
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

          {/* Trust strip — full width below */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              The foundation of how Gardner Plumbing Co. has earned the trust of homeowners
              across{" "}
              <span className="text-white font-semibold">
                Riverside County and neighboring communities
              </span>{" "}
              for more than{" "}
              <span className="text-red-400 font-bold">30 years</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. FREE ESTIMATES ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <SectionBadge icon={ThumbsUp} text="Free Estimates" color="green" />
              <SectionHeading>
                Free Estimates —{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  No Obligation, No Pressure
                </span>
              </SectionHeading>
              <div className="space-y-5 text-gray-300 text-[16px] leading-relaxed">
                <p>
                  Gardner Plumbing Co. provides free, in-home estimates for all plumbing services.
                  Every home and plumbing system is different. A price quoted over the phone without
                  seeing the actual problem is rarely accurate, and an inaccurate quote helps no one.
                  An in-person estimate allows the technician to assess the exact scope of work,
                  identify any code requirements specific to your home, and give you a firm, reliable
                  number.
                </p>
                <p>
                  Gardner Plumbing Co. is interested in building a long-term relationship with every
                  customer — not closing a one-time sale. That means no high-pressure sales tactics,
                  no rushing you into a decision, and no pushing services you do not need. While not
                  every job requires a formal written estimate, Gardner Plumbing Co. always has
                  either a verbal or written agreement in place before any work begins. You always
                  know what the job will cost and what is included before a single wrench is turned.
                </p>
                <p className="font-medium text-white">
                  There is no charge for the estimate visit, and there is no obligation to proceed
                  with the work. If you choose not to move forward, you owe nothing.
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/transparent-pricing-homeowners.webp"
                  alt="Gardner Plumbing Co. technician reviewing a written estimate with homeowners — free, no-obligation in-home pricing"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center">
                      <ThumbsUp className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Free Estimate</div>
                      <div className="text-gray-300 text-xs">No charge, no obligation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip — stats moved below grid */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Star, stat: reviewCount, label: "Five-Star Google Reviews" },
              { icon: Award, stat: "30+", label: "Years Serving Southern California" },
              { icon: Shield, stat: "CSLB\n#1073177", label: "Licensed, Bonded & Insured" },
              { icon: DollarSign, stat: "$0", label: "Trip Fee — Always Free" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glassmorphism-dark rounded-2xl p-6 border border-white/10 text-center hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 whitespace-pre-line leading-tight">{item.stat}</div>
                  <div className="text-gray-400 text-xs leading-snug">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge icon={CheckCircle} text="Side-by-Side Comparison" color="blue" />
            <SectionHeading>
              How Gardner Plumbing Co.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Pricing Compares
              </span>{" "}
              to Other Companies
            </SectionHeading>
            <p className="text-[16px] text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The plumbing industry across Riverside County and neighboring communities
              has a well-known problem with hidden fees and unclear pricing.
              Understanding the difference helps homeowners make confident decisions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-lg max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #1e40af 100%)" }}>
                  <th className="text-left px-5 py-4 text-white font-semibold text-base">Pricing Practice</th>
                  <th className="text-left px-5 py-4 text-white font-semibold text-base">Many Competitors</th>
                  <th className="text-left px-5 py-4 text-white font-semibold text-base">Gardner Plumbing Co.</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-white/10 transition-colors hover:bg-white/5"
                    style={{ backgroundColor: idx % 2 === 0 ? "rgba(32,32,32,0.95)" : "rgba(26,26,26,0.95)" }}
                  >
                    <td className="px-5 py-4 text-gray-200 font-medium align-middle">{row.practice}</td>
                    <td className="px-5 py-4 text-red-400 align-middle">{row.competitors}</td>
                    <td className="px-5 py-4 align-middle">
                      <span className="inline-flex items-center gap-2 text-green-400 font-semibold">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        {row.gardner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. PRICING INTRO + DISCLAIMER ───────────────────────────────── */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge icon={DollarSign} text="Plumbing Service Pricing" color="yellow" />
            <SectionHeading>
              Plumbing Service Pricing in{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Southern California
              </span>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* Left: intro + what affects pricing */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div
                className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury p-6 sm:p-8"
              >
                <p className="text-[16px] text-gray-300 leading-relaxed">
                  The price ranges throughout this page represent average costs for common
                  plumbing services across{" "}
                  <span className="text-white font-semibold">
                    Riverside County and neighboring communities
                  </span>{" "}
                  — provided for general reference only. Every home is different, and the only
                  way to get an accurate number is through a free in-home estimate. Gardner
                  Plumbing Co. provides a firm written quote after assessing your specific
                  situation.
                </p>
              </div>

              <div
                className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury p-6 sm:p-8 flex-1"
              >
                <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-5">
                  What actually affects your final price
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    "Age and condition of your plumbing system",
                    "Accessibility of pipes and fixtures",
                    "Permit and code requirements in your city",
                    "Materials and fixtures selected",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-300 text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: prominent disclaimer */}
            <aside
              className="lg:col-span-2 rounded-2xl border-2 border-yellow-500/40 p-6 sm:p-8 shadow-luxury relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, rgba(120,80,0,0.28) 0%, rgba(17,24,39,0.95) 60%, rgba(120,80,0,0.18) 100%)",
              }}
              aria-label="Pricing disclaimer"
            >
              {/* Accent corner glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #facc15 0%, transparent 70%)" }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center border border-yellow-500/40 shadow-lg flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-yellow-400/80 uppercase tracking-widest">
                      Read Before Pricing Tables
                    </p>
                    <p className="text-yellow-100 font-bold text-lg leading-tight">
                      Important Pricing Disclaimer
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-yellow-100/85 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1" aria-hidden="true">•</span>
                    <span>All prices listed are averages — every job is unique.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1" aria-hidden="true">•</span>
                    <span>
                      Subject to change based on materials, labor, code requirements, and job
                      complexity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1" aria-hidden="true">•</span>
                    <span>
                      Ranges reflect Southern California market conditions, 2025–2026.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1" aria-hidden="true">•</span>
                    <span>
                      All prices include labor and standard materials. Permit fees are included
                      in written estimates.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1" aria-hidden="true">•</span>
                    <span className="font-semibold text-yellow-100">
                      The only accurate price is a free in-home estimate.
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 6. DRAIN CLEANING & SEWER SERVICES ─────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionBadge icon={Droplets} text="Drain & Sewer" color="blue" />
            <SectionHeading>
              Drain Cleaning and{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Sewer Services
              </span>
            </SectionHeading>
            <p className="text-[16px] text-gray-300 max-w-3xl leading-relaxed mb-4">
              Drain and sewer problems are among the most common plumbing calls across
              Riverside County and neighboring communities. Pricing varies based on the
              location of the blockage, the method required to clear it, and whether the main sewer
              line is involved.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
              <strong className="text-gray-300">What affects sewer line cost:</strong> Many homes in
              the region were built before the 1970s and still have clay or cast-iron sewer lines.
              Tree root intrusion is extremely common. The depth of the line, the length of pipe
              involved, and whether the work requires city permits and inspections all affect the
              final price.
            </p>
          </div>
          <PricingTable rows={drainPricingRows} />
        </div>
      </section>

      {/* ── 7. WATER HEATER ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionBadge icon={Zap} text="Water Heaters" color="red" />
            <SectionHeading>
              Water Heater Installation{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                and Repair
              </span>
            </SectionHeading>
            <p className="text-[16px] text-gray-300 max-w-3xl leading-relaxed">
              Water heater pricing in Southern California is higher than the national average because
              California building codes require specific upgrades — including seismic strapping,
              thermal expansion tanks, and proper T&amp;P valve discharge routing — on every
              installation.
            </p>
          </div>
          <PricingTable rows={waterHeaterPricingRows} />
        </div>
      </section>

      {/* ── 8. LEAK REPAIR ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionBadge icon={Wrench} text="Leak Repair" color="blue" />
            <SectionHeading>
              Leak{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Repair
              </span>
            </SectionHeading>
            <p className="text-[16px] text-gray-300 max-w-3xl leading-relaxed">
              Plumbing leaks range from minor dripping faucets to serious slab leaks hidden beneath
              the concrete foundation. The location and severity of the leak are the primary drivers
              of cost.
            </p>
          </div>

          <PricingTable rows={leakRepairRows} />

          {/* Slab leak callout */}
          <div className="mt-8 glassmorphism-dark rounded-2xl p-6 sm:p-8 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-2">What affects leak repair cost in Southern California</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Slab leaks are particularly common across Riverside County and neighboring
                  communities because of the region's shifting soil and seismic
                  activity, which stresses underground pipes over time. Homes built on slab
                  foundations — the majority of homes in the area — require concrete cutting to
                  access pipes beneath the floor. The extent of the damage and whether pipe
                  rerouting is necessary determine the final cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FIXTURE INSTALLATION & REPAIR ────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionBadge icon={Wrench} text="Fixtures" color="green" />
            <SectionHeading>
              Fixture Installation{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                and Repair
              </span>
            </SectionHeading>
            <p className="text-[16px] text-gray-300 max-w-3xl leading-relaxed">
              Fixture pricing covers the labor for installation or repair. For replacements,
              customers may supply their own fixture. Gardner Plumbing Co. also sources fixtures
              when requested — ask your technician during the free estimate.
            </p>
          </div>
          <PricingTable rows={fixturePricingRows} />
        </div>
      </section>

      {/* ── 10. THE GARDNER PROMISE ──────────────────────────────────────── */}
      <GardnerPromise />

      {/* ── 11. COMMON PRICING CONCERNS ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge icon={HelpCircle} text="Straight Answers" color="yellow" />
            <SectionHeading>
              Common Pricing Concerns —{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Answered Directly
              </span>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {pricingConcerns.map((concern, idx) => {
              const isLastOrphan =
                idx === pricingConcerns.length - 1 && pricingConcerns.length % 2 !== 0;
              return (
              <article
                key={idx}
                className={`group relative overflow-hidden rounded-2xl shadow-luxury hover-lift transition-all duration-500 ${
                  isLastOrphan ? "lg:col-span-2" : ""
                }`}
                style={{
                  backgroundColor: "#202020",
                  backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                {/* Hover accent border (brand red) */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/15 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />

                <div className={`relative z-10 p-6 sm:p-8 ${isLastOrphan ? "lg:max-w-3xl lg:mx-auto" : ""}`}>
                  {/* Customer question block */}
                  <div className="flex gap-4 mb-6">
                    {/* Number + quote icon (neutral) */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                        <Quote className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <span className="mt-2 text-xs font-bold text-gray-500 tracking-widest">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Quoted customer question */}
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                        Customer Concern
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug italic">
                        &ldquo;{concern.question}&rdquo;
                      </h3>
                    </div>
                  </div>

                  {/* Divider (brand red marks the shift to Gardner's voice) */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-red-500/30" />
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest whitespace-nowrap">
                      Gardner&rsquo;s Direct Answer
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 via-red-500/30 to-transparent" />
                  </div>

                  {/* Answer */}
                  <div className="flex gap-3">
                    <CheckCircle
                      className="h-5 w-5 text-red-400 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <p className="text-gray-300 text-[15px] leading-relaxed">
                      {concern.answer}
                    </p>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ACCORDION ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
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
            <SectionHeading>
              FAQ — Plumbing{" "}
              <span className="bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </SectionHeading>
            <p className="text-[16px] text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Straightforward answers to the most common questions about plumbing costs in
              Riverside County and neighboring communities.
            </p>
          </div>

          <div>
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden">
              {/* Header banner */}
              <div
                className="relative overflow-hidden px-6 sm:px-8 py-6"
                style={{
                  background: "linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)",
                }}
              >
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <HelpCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Questions &amp; Answers</h3>
                </div>
              </div>

              {/* FAQ items */}
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
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0 mt-0.5">
                              <HelpCircle className="h-4 w-4 text-blue-400 group-hover:text-white transition-colors duration-300" />
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
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div
        className="fixed bottom-0 inset-x-0 lg:hidden z-50 flex"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 transition-colors min-h-[56px]"
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact-us"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 transition-colors min-h-[56px] border-l border-white/20"
        >
          <FileText className="h-5 w-5" />
          <span>Free Estimate</span>
        </Link>
      </div>

      {/* Lead form modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LeadForm />
      </Modal>
    </div>
  );
}
