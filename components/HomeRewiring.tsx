"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchedulerModal } from "./SchedulerModal";
import { useState } from "react";
import Link from "next/link";
import { Modal } from "./Modal";
import { LeadForm } from "./LeadForm";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Clock,
  Shield,
  CheckCircle,
  Phone,
  DollarSign,
  Zap,
  Award,
  HelpCircle,
  MapPin,
  Mail,
  Star,
  AlertTriangle,
  FileCheck,
  Layers,
  Scissors,
  Home,
} from "lucide-react";
import { ImagePromptPlaceholder } from "./ImagePromptPlaceholder";

// ─── Image prompt constants (sourced from seo/electrical-image-prompts/home-rewiring.md) ───

const HERO_PROMPT =
  "Photo of an electrician feeding new Romex cable through a wall opening in an Inland Empire home during a remodel, medium shot showing the tech at the exposed framing. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. White NM-B Romex cable being threaded through a drilled stud hole, wire staple gun resting on a nearby stud, patched drywall visible at the edges of the work zone. Construction zone interior lighting, warm LED work light supplemented by ambient window daylight. Focused, mid-task. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow";

const HERO_REF =
  "Attach gardnertecharrival.webp or gardnertecharrival2.webp — natural daylight field-work posture; the reference carries face and uniform style data. Do not describe face, age, or ethnicity in the prompt — the reference handles it.";

const BEFORE_AFTER_PROMPT =
  "Split-scene product photograph, single frame divided at vertical center. LEFT HALF: exposed wall cavity showing old knob-and-tube wiring — ceramic knob insulators on studs, cloth-wrapped wire spanning between them, brittle and discolored insulation, flat even light. RIGHT HALF: same stud bay after rewiring — modern white NM-B Romex cable routed through drilled holes in studs, stapled cleanly every 12 inches, wire labeled at each termination point, no old wiring remnants. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Raw wood stud framing background.";

const BEFORE_AFTER_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing pipes or fixtures, no HVAC equipment";

// ─── Data ────────────────────────────────────────────────────────────────────

const cityLinks: Record<string, string> = {
  Temecula: "https://temeculaca.gov",
  Murrieta: "https://murrietaca.gov",
  Perris: "https://www.cityofperris.org",
  Menifee: "https://cityofmenifee.us",
  "Canyon Lake": "https://www.canyonlakeca.gov",
  "Lake Elsinore": "https://www.lake-elsinore.org",
  Corona: "https://www.coronaca.gov",
  "Moreno Valley": "https://moval.org",
  Riverside: "https://riversideca.gov",
  Hemet: "https://www.hemetca.gov",
};

const serviceAreas = [
  "Temecula",
  "Murrieta",
  "Perris",
  "Menifee",
  "Canyon Lake",
  "Lake Elsinore",
  "Corona",
  "Moreno Valley",
  "Riverside",
  "Hemet",
];

const emergencyReasons = [
  "Burning smell from an outlet or wall",
  "Breaker trips and will not reset",
  "Outlet sparks on contact",
  "Flickering lights throughout the home",
  "Warm or discolored outlet covers",
  "Insurance carrier requires immediate wiring action",
  "Knob-and-tube wiring found during a remodel",
  "Aluminum wiring identified — connections loosening",
];

const services = [
  {
    icon: AlertTriangle,
    title: "Knob-and-Tube Wiring Removal",
    description:
      "Knob-and-tube is ungrounded, cannot support modern loads, and is refused coverage by most California home insurers. We remove it completely and replace with grounded, NEC-compliant copper wiring.",
    features: [
      "Full Assessment First",
      "Ungrounded Circuit Replacement",
      "Grounding Added Throughout",
      "Insurance-Ready Documentation",
    ],
  },
  {
    icon: Zap,
    title: "Aluminum Wiring Replacement",
    description:
      "Aluminum wiring installed in 1960s and 70s homes expands and contracts differently than copper, loosening connections over time. The CPSC identifies it as a fire risk. We replace aluminum branch circuits with copper or install listed CO/ALR connectors where a full replacement is not feasible.",
    features: [
      "CPSC-Recognized Hazard Fix",
      "Copper Replacement Option",
      "CO/ALR Connector Option",
      "All Connections Re-inspected",
    ],
  },
  {
    icon: Layers,
    title: "Full Home Rewire",
    description:
      "Complete replacement of all branch circuits from the panel out — typically required when multiple systems are outdated, when upgrading to 200-amp service, or when a remodel exposes wiring that fails inspection.",
    features: [
      "All Circuits Replaced",
      "Panel Upgrade Coordinated",
      "Code-Compliant & Inspected",
      "New Circuit Directory",
    ],
  },
  {
    icon: Scissors,
    title: "Partial Rewire & Single Circuit",
    description:
      "Not every home needs a full rewire. A kitchen remodel, bathroom addition, or laundry circuit upgrade can be scoped to just the affected area — saving time and cost while achieving full code compliance for the work performed.",
    features: [
      "Room or Zone Scope",
      "Single Circuit Addition",
      "Remodel Rough-In Wiring",
      "Coordinated with Other Trades",
    ],
  },
];

const benefits = [
  {
    icon: FileCheck,
    title: "Code Compliance, Documented",
    description:
      "Every rewire we complete is code-compliant, inspected, and documented for your insurance carrier and county records. We provide the paperwork you need to reinstate coverage. Permits are the homeowner's responsibility under California law — we coordinate on your behalf and list fees as a pass-through line.",
  },
  {
    icon: Shield,
    title: "Licensed Electricians",
    description:
      "Every tech holds a valid CA C-10 electrical license. No subcontracting rewire work to uncredentialed crews.",
  },
  {
    icon: Home,
    title: "Minimal Disruption Approach",
    description:
      "We use existing access points and structural openings wherever possible. Most partial rewires require limited drywall work — we document every access point and coordinate with your drywall contractor.",
  },
  {
    icon: DollarSign,
    title: "Upfront Written Scope",
    description:
      "You receive a written scope and quote before work begins. Rewires have no hidden labor-hour surprises — we quote the job, not the hours.",
  },
];

const faqs = [
  {
    question: "How do I know if my home needs rewiring in Murrieta?",
    answer: (
      <>
        The clearest signals are age and wiring type. Homes built before 1975 in
        Murrieta, Riverside, Hemet, and Corona commonly have knob-and-tube or
        aluminum wiring. Beyond age, watch for these: outlets that feel warm to
        the touch, lights that flicker when appliances run, breakers that trip
        more than once per month on a normal circuit, or a home insurance renewal
        that asks about wiring type. An insurance carrier denying or limiting
        coverage based on wiring is the most common trigger for homeowners calling
        us. A wiring assessment takes one visit — we tell you exactly what&apos;s
        present and what it would take to bring the home current. See also our{" "}
        <Link
          href="/services/electrical/electrical-safety-inspection"
          className="text-red-400 hover:text-red-300 underline"
        >
          electrical safety inspection page
        </Link>
        .
      </>
    ),
  },
  {
    question: "How long does a full home rewire take?",
    answer:
      "A full rewire on a typical Inland Empire single-family home — 1,500 to 2,500 square feet — takes 3 to 7 days of electrical work, depending on access conditions and panel status. Permit processing adds 3 to 7 business days before we can start. Total project timeline from signed scope to final inspection runs 2 to 3 weeks in most cases. Partial rewires (single room or zone) typically take 1 to 2 days on-site. When city inspections are required, permits and inspections are the homeowner's responsibility — we can coordinate the paperwork on your behalf when needed. If you're also doing a panel upgrade, we coordinate both at the same time.",
  },
  {
    question: "Does a home rewire require opening the walls?",
    answer:
      "Partial wall opening is almost always necessary for a full rewire — there is no reliable method to route new wiring through finished walls without some access points. Our electricians minimize cut points by using existing penetrations, attic access, and crawl space routing where available. We document every access point with photos and provide recommendations for drywall patching. For partial rewires limited to one room or zone, wall impact is significantly less. Homes with accessible attics and crawl spaces require less cutting than slab-on-grade construction. We include an access assessment in the quote visit so you know what to expect before work begins.",
  },
  {
    question: "Will my homeowner's insurance cover the rewiring cost?",
    answer: (
      <>
        Standard homeowner&apos;s insurance policies do not cover rewiring as a
        maintenance item — it is considered a preventive upgrade, not a covered
        loss. Where insurance becomes relevant is on the back end: completing the
        rewire and submitting documentation to your carrier can reinstate coverage
        that was suspended, reduce your premium, or satisfy a policy endorsement
        condition. Some carriers issue a notice requiring rewiring within a set
        timeframe as a condition of continued coverage. If your carrier has issued
        such a notice, send us a copy — we&apos;ve handled this scenario before
        and can scope the work to satisfy the carrier&apos;s specific
        requirements. Financing options are available; see our{" "}
        <Link
          href="/financing"
          className="text-red-400 hover:text-red-300 underline"
        >
          financing page
        </Link>
        .
      </>
    ),
  },
  {
    question: "What is the difference between a full rewire and a partial rewire?",
    answer: (
      <>
        A full rewire replaces every branch circuit in the home — from the panel
        to every outlet, switch, and fixture. This is the right scope when
        knob-and-tube or aluminum wiring is present throughout, when the panel is
        also being upgraded to 200-amp service, or when an insurance carrier
        requires whole-home compliance. A partial rewire replaces wiring in a
        defined area — a kitchen, bathroom, garage, or single circuit addition.
        Partial rewires are appropriate for remodels where work is isolated to one
        zone, or when a specific problem circuit needs to be corrected without
        touching the rest of the home. Our{" "}
        <Link
          href="/services/electrical/remodeling-electrical"
          className="text-red-400 hover:text-red-300 underline"
        >
          remodeling electrical page
        </Link>{" "}
        covers partial rewires as part of a broader renovation.
      </>
    ),
  },
  {
    question: "How much does home rewiring cost in Murrieta?",
    answer: (
      <>
        Costs vary significantly based on scope. A single-circuit addition or
        correction runs $300 to $800. A partial rewire covering one room or zone
        typically ranges from $1,500 to $4,000. A full home rewire — all circuits
        replaced, code-compliant and inspection-ready — generally runs $8,000 to
        $18,000 for a standard Inland Empire single-family home, with cost driven
        by square footage, access conditions, and whether a panel upgrade is
        included. We provide itemized written quotes after the assessment visit.
        There is no charge for the assessment on rewiring projects. For projects
        where cost is a concern, our{" "}
        <Link
          href="/financing"
          className="text-red-400 hover:text-red-300 underline"
        >
          financing page
        </Link>{" "}
        covers available payment options — including 0% deferred financing on
        qualifying electrical work.
      </>
    ),
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function HomeRewiring() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const lastUpdated = "June 2026";

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
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
                radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="absolute top-[-75px] mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Breadcrumbs
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Services", href: "/services" },
                      { label: "Electrical", href: "/services/electrical" },
                      { label: "Home Rewiring" },
                    ]}
                  />
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Zap className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Licensed Electrical Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                Home Rewiring in Murrieta —{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Safe, Code-Compliant
                </span>{" "}
                Electrical Wiring
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                Last Updated: {lastUpdated}
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Knob-and-tube wiring, aluminum circuits, and 1960s-era wiring are
                fire hazards that also make homes uninsurable. Our licensed
                electricians replace old wiring with code-compliant copper — full
                rewires, partial rewires, and single-circuit upgrades across the
                Inland Empire.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Same-Week Scheduling" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: DollarSign, text: "Upfront Pricing" },
                  { icon: FileCheck, text: "Inspection-Ready Work" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-green-400" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button
                    size="lg"
                    className="min-w-[220px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call (951) 246-4337
                    </span>
                  </Button>
                </a>
                <SchedulerModal />
              </div>
            </div>

            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/home-rewiring-hero.webp"
                  alt="Gardner electrician pulling new Romex wiring through wall framing during a home rewire in the Inland Empire"
                  width={1000}
                  height={600}
                  priority
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        Licensed Electrical Service
                      </div>
                      <div className="text-gray-300 text-xs">
                        Murrieta & Inland Empire
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Alert Banner ── */}
      <section className="relative overflow-hidden">
        <div
          className="relative overflow-hidden py-2 sm:py-3"
          style={{
            background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
            boxShadow: `
              inset 0 2px 0 rgba(255, 255, 255, 0.2),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2),
              0 8px 32px rgba(139, 0, 0, 0.4),
              0 -8px 32px rgba(139, 0, 0, 0.3),
              0 12px 24px rgba(0, 0, 0, 0.6),
              0 -12px 24px rgba(0, 0, 0, 0.4)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(135deg,
                transparent 0%,
                rgba(255, 255, 255, 0.1) 25%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.1) 75%,
                transparent 100%
              )`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-white animate-pulse flex-shrink-0" />
                <span className="text-white font-bold text-lg sm:text-xl">
                  Old wiring causing problems or a failed insurance inspection in Murrieta?
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <Link href="tel:9512464337" className="w-full sm:w-auto">
                  <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
                    <Phone className="h-5 w-5 text-red-100" />
                    <span className="text-white font-bold text-lg">
                      (951) 246-4337
                    </span>
                  </div>
                </Link>
                <span className="text-red-100 font-semibold text-sm sm:text-base">
                  Assessment same week · clear scope & price
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Overview ── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-full border border-yellow-500/30 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Home Rewiring Services in the{" "}
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Inland Empire
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Riverside County and the broader Inland Empire contain significant
              housing stock from the 1950s through 1970s — much of it still
              running on the original knob-and-tube or aluminum wiring. That
              wiring was not designed for modern electrical loads, does not meet
              current NEC standards, and is frequently cited as the reason
              insurance carriers decline or cancel coverage. Our electricians
              handle the full scope: assessment, scope definition,
              rewiring, and final inspection. View our{" "}
              <Link
                href="/services/electrical/power"
                className="text-red-400 hover:text-red-300 underline"
              >
                power systems and upgrades
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage:
                      "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>

                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-600/30 to-red-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-yellow-600 group-hover:to-red-500 transition-all duration-500 shadow-lg">
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400 group-hover:text-white transition-all duration-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What Changes After a Professional Home Rewire
                </h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "All branch circuits grounded — outlets accept modern 3-prong plugs correctly",
                    "Wiring rated for current NEC amperage requirements on each circuit",
                    "Insurance carrier receives documentation of code-compliant wiring",
                    "Breakers sized correctly for each circuit — no more overloaded runs",
                    "Aluminum or knob-and-tube wiring fully removed and disposed of",
                    "City inspection signed off — work record updated with county",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury w-full h-64">
                  <Image
                    src="/home-rewiring-before-after.webp"
                    alt="Before and after home rewiring showing knob-and-tube wiring replaced with modern Romex by Gardner Electrical in Murrieta"
                    width={800}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 bg-gradient-to-r from-red-900/40 to-transparent flex items-center justify-center">
                        <span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded-full text-sm">
                          BEFORE
                        </span>
                      </div>
                      <div className="w-1/2 bg-gradient-to-l from-green-900/40 to-transparent flex items-center justify-center">
                        <span className="text-white font-bold bg-green-600/80 px-3 py-1 rounded-full text-sm">
                          AFTER
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500 h-96 lg:h-full lg:min-h-[600px]">
                <Image
                  src="/gardnertechvanbackground.webp"
                  alt="Gardner Plumbing Co. electrician and service van ready for home rewiring work"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_30%] rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>

              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">75+</div>
                    <div className="text-gray-300 text-xs">
                      Full & Partial Rewires
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Why Choose Our Electrical Team
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Why Inland Empire Homeowners{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">
                  Choose Us
                </span>{" "}
                for Home Rewiring
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                Gardner Plumbing Co. is a licensed electrical contractor serving
                Murrieta, Temecula, Menifee, and the greater Inland Empire (CA
                Contractor&apos;s License{" "}
                <span className="text-yellow-400 font-semibold">
                  &#123;&#123;CSLB_C10_LICENSE_TBD&#125;&#125;
                </span>
                ). Our electricians have completed over 75 full and partial rewires
                across Riverside County — including knob-and-tube removal in
                Hemet&apos;s older neighborhoods, aluminum wiring replacement in
                Riverside, and remodel-triggered partial rewires across Murrieta
                and Temecula tract homes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group hover-lift"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-xl flex items-center justify-center group-hover:from-green-600 group-hover:to-green-500 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-green-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2 group-hover:text-green-100 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-xl shadow-lg border border-green-400/20 group"
              >
                <span className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Free Estimate
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section id="service-area" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Service Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Serving Murrieta, Temecula, and All of{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Home rewiring service is available across the Inland Empire,
              dispatched from our Murrieta base. We cover Temecula, Menifee,
              Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley,
              Riverside, and Hemet — with same-week scheduling throughout.
            </p>
          </div>

          <div
            className="grid gap-4 mb-12"
            style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            {serviceAreas.map((area, index) => (
              <a
                key={index}
                href={cityLinks[area] ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the official website for ${area}`}
                className="glassmorphism-dark rounded-xl p-4 border border-white/10 text-center hover:border-blue-500/30 transition-all duration-300 hover-lift block"
              >
                <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <span className="text-white font-medium">{area}</span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <div className="glassmorphism-dark rounded-2xl p-8 border border-white/10 shadow-luxury inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don&apos;t See Your Area?
              </h3>
              <p className="text-gray-300 mb-6">
                We serve additional areas throughout Riverside County. Call to
                confirm service availability.
              </p>
              <a href="tel:9512464337" className="w-full sm:w-auto">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    Check Service Area
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
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
                radial-gradient(circle at 15% 85%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Home Rewiring{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions and Answers
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about home rewiring in Murrieta and
              the Inland Empire.
            </p>
          </div>

          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              <div
                className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8"
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
                    background: `linear-gradient(135deg,
                      transparent 0%,
                      rgba(255, 255, 255, 0.1) 25%,
                      rgba(255, 255, 255, 0.2) 50%,
                      rgba(255, 255, 255, 0.1) 75%,
                      transparent 100%
                    )`,
                  }}
                />
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                    <HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                    Questions & Answers
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4 sm:space-y-6"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl"
                      style={{
                        backgroundColor: "#202020",
                        backgroundImage:
                          "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>

                      <div className="relative z-10">
                        <AccordionTrigger className="text-left hover:no-underline text-white hover:text-yellow-400 data-[state=open]:text-yellow-500 px-6 sm:px-8 py-6 sm:py-8 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                          <span className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-600/30 to-yellow-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-yellow-600 group-hover/trigger:to-yellow-500 transition-all duration-300">
                              <HelpCircle className="h-4 w-4 text-yellow-400 group-hover/trigger:text-white transition-colors duration-300" />
                            </div>
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-6 sm:pb-8 pt-0 px-6 sm:px-8 ml-12 border-l-2 border-yellow-500/20 text-base sm:text-lg leading-relaxed">
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

          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-glow">
                  <HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Have More Questions?
                </h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Can&apos;t find what you&apos;re looking for? Our electrical team
                is standing by to answer your questions and schedule your wiring
                assessment. Need immediate help? Call our{" "}
                <Link
                  href="tel:9512464337"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  emergency line
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link href="/frequently-asked-questions">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 sm:py-4 transition-all duration-300 rounded-xl shadow-lg border border-blue-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                      View Full FAQ
                    </span>
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 sm:py-4 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                      Contact Us
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Section ── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Emergency Service
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                When Old Wiring Becomes an{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Urgent Electrical Problem
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Knob-and-tube and aluminum wiring don&apos;t announce failure in
                advance. When an old circuit overloads — a burning smell, a
                breaker that won&apos;t reset, outlets that spark — that&apos;s a
                same-day call. Our electricians respond to wiring emergencies
                across Murrieta and the Inland Empire seven days a week.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Common Emergency Situations:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {emergencyReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <span className="text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Emergency: (951) 246-4337
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertecharrival.webp"
                  alt="Emergency electrical service — Gardner electrician responding to wiring problem"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />

                <div className="absolute top-6 right-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">7 Days</div>
                      <div className="text-gray-300 text-xs">
                        Emergency Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="relative overflow-hidden">
        <div
          className="py-12 sm:py-16"
          style={{
            background: `
              radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
            `,
            boxShadow: `
              0 -12px 32px rgba(0, 0, 0, 0.4),
              0 12px 32px rgba(0, 0, 0, 0.6),
              0 -8px 24px rgba(31, 41, 55, 0.3),
              0 8px 24px rgba(31, 41, 55, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Ready to{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Replace Old Wiring in Your Home?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Home rewiring across Murrieta, Temecula, and the Inland Empire.
                Written scopes, code-compliant work, and insurance-ready documentation.
                Call now or schedule a wiring assessment — our electrical team
                picks up.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg border border-red-400/20 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>

              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group bg-transparent flex-1"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  Get Free Estimate
                </span>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center text-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Code-Compliant Work</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">4.9 Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LeadForm />
      </Modal>
    </div>
  );
}
