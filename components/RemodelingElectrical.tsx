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
  Award,
  HelpCircle,
  MapPin,
  Mail,
  Star,
  AlertTriangle,
  FileCheck,
  Layers,
  Home,
  Users,
  Hammer,
  Lightbulb,
  Calendar,
} from "lucide-react";
import { ImagePromptPlaceholder } from "./ImagePromptPlaceholder";

// ─── Image prompt constants (sourced from seo/electrical-image-prompts/remodeling-electrical.md) ───

const HERO_PROMPT =
  "Photo of an electrician installing electrical rough-in boxes and wiring in exposed wall framing during an Inland Empire home remodel, medium shot at the stud wall. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Blue plastic nail-in outlet box being fastened to a stud, Romex cable already run through the bay, Milwaukee drill holstered on hip. Active construction zone — bare studs, concrete subfloor, other trades' materials blurred in background. Warm LED work light with ambient window daylight. Focused, mid-task posture. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no finished drywall (this is rough-in stage), no green grass lawn, no snow";

const HERO_REF =
  "Attach gardnertecharrival.webp or gardnertecharrival2.webp — natural daylight field-work posture; the reference carries face and uniform style data. Do not describe face, age, or ethnicity in the prompt — the reference handles it.";

const BEFORE_AFTER_PROMPT =
  "Split-scene product photograph, single frame divided at vertical center. LEFT HALF: empty wall stud bay during a remodel — bare wood studs, no boxes, no wiring, raw construction-zone appearance, flat LED work light. RIGHT HALF: same stud bay after electrical rough-in — blue outlet box nailed to stud, Romex cable routed and stapled through drilled holes, switch box positioned at correct height, wire tails coiled inside boxes ready for inspection, everything neat and code-ready. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Bare stud and concrete subfloor background.";

const BEFORE_AFTER_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing pipes or fixtures, no HVAC equipment, no finished drywall";

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
  "Demo reveals knob-and-tube or aluminum wiring",
  "Panel has no capacity for new remodel circuits",
  "Previous unpermitted electrical found in walls",
  "Rough-in fails city inspection — rework required",
  "Double-tapped breakers found during panel review",
  "HVAC or plumbing conflicts with planned wire routes",
  "ADU requires SCE service upgrade not anticipated",
  "Remodel timeline at risk — electrician no-show from another contractor",
];

const services = [
  {
    icon: Hammer,
    title: "Remodel Rough-In Wiring",
    description:
      "Pre-drywall electrical for kitchen remodels, bathroom additions, and living space conversions. New circuits, box placement, and load verification — all before the walls close.",
    features: [
      "Circuit Layout Planning",
      "New Circuit Rough-In",
      "Panel Capacity Check",
      "Rough-In Inspection Ready",
    ],
  },
  {
    icon: Lightbulb,
    title: "Remodel Finish Wiring",
    description:
      "Post-drywall electrical: outlet and switch devices installed, recessed lighting connected, appliance circuits energized, and all circuits tested before the homeowner walks through.",
    features: [
      "Device & Fixture Install",
      "Appliance Circuit Hookup",
      "Recessed Lighting Trim",
      "Circuit Testing & Verification",
    ],
  },
  {
    icon: Home,
    title: "ADU & Room Addition Wiring",
    description:
      "Accessory dwelling units and room additions in Riverside County require a separate electrical permit and often a sub-panel. We handle the full scope from permit application to final inspection — including SCE coordination for ADUs with separate meters.",
    features: [
      "ADU Sub-Panel Installation",
      "Separate Meter Coordination",
      "Room Addition Circuits",
      "Detached Garage Wiring",
    ],
  },
  {
    icon: Users,
    title: "Multi-Trade Coordination",
    description:
      "Gardner handles plumbing, electrical, and HVAC. On a kitchen or bathroom remodel, that means one contractor coordinating all three trades — no scheduling conflicts between subs, no wiring laid over plumbing lines, and one point of contact for the homeowner.",
    features: [
      "Electrical + Plumbing Sequenced",
      "HVAC Rough-In Coordinated",
      "Single Project Timeline",
      "Fewer Change Orders",
    ],
  },
];

const benefits = [
  {
    icon: Calendar,
    title: "Timeline-Integrated Scheduling",
    description:
      "Our electricians schedule rough-in and finish visits around your drywall and flooring contractors — not the other way around. We show up on time because your project timeline depends on it.",
  },
  {
    icon: Shield,
    title: "Licensed Electricians",
    description:
      "Every tech holds a valid CA C-10 electrical license. Permit applications go under our license number — inspection is straightforward.",
  },
  {
    icon: Users,
    title: "Multi-Trade Contractor",
    description:
      "Plumbing, electrical, and HVAC under one contractor. Kitchen and bathroom remodels that require all three trades move faster and have fewer coordination failures when the same company runs the schedule.",
  },
  {
    icon: DollarSign,
    title: "Upfront Written Quotes",
    description:
      "Remodel electrical scope is quoted by phase — rough-in and finish — before work begins. No mid-project surprises as walls open. If hidden conditions affect scope, we document and discuss before proceeding.",
  },
];

const faqs = [
  {
    question:
      "Do I need a permit for electrical work during a kitchen or bathroom remodel in Murrieta?",
    answer: (
      <>
        Yes. Any new circuit, panel modification, or wiring change in a remodel
        requires a permit from the City of Murrieta Building Department. That
        includes new outlet circuits in a kitchen remodel, exhaust fan wiring in a
        bathroom, or a dedicated circuit for a new appliance. The permit triggers a
        rough-in inspection (before drywall) and a final inspection (after finish
        wiring) — both are required for the permit to close. Unpermitted remodel
        electrical creates problems at resale and may not be covered if a wiring
        fault causes a loss. We pull the permit as part of every remodel electrical
        scope. See also our note on{" "}
        <Link
          href="/services/electrical/home-rewiring"
          className="text-red-400 hover:text-red-300 underline"
        >
          home rewiring
        </Link>{" "}
        if the remodel exposes outdated wiring that needs replacement.
      </>
    ),
  },
  {
    question:
      "What is the difference between rough-in and finish electrical wiring?",
    answer:
      "Rough-in wiring is the work done before drywall is installed — routing new circuits from the panel, setting electrical boxes in the right locations, and running wire through wall cavities and ceiling joists. Finish wiring is the work done after drywall is up and painted — installing outlet and switch devices, connecting light fixtures, wiring appliances, and testing every circuit. Both phases require a separate inspection. Missing the rough-in window (by drywalling before inspection) means cutting open walls later. We coordinate with your drywall contractor to ensure rough-in inspection happens before walls close — this is one of the most common project failures we prevent.",
  },
  {
    question:
      "How does hiring one contractor for electrical, plumbing, and HVAC save money on a remodel?",
    answer: (
      <>
        Multi-trade conflicts are a major source of remodel cost overruns. When
        separate contractors manage their own schedules, plumbing and electrical
        rough-in often collide — one trade installs pipes in locations that block
        the other&apos;s planned wire runs. Resolving those conflicts mid-project
        means rework, delay, and change orders. When the same contractor handles
        all three trades, the rough-in sequence is coordinated before anyone
        touches a wall. HVAC ductwork, plumbing drains, and electrical circuits
        are routed around each other in the planning phase rather than the demo
        phase. Our{" "}
        <Link
          href="/services/hvac/ac-installation"
          className="text-red-400 hover:text-red-300 underline"
        >
          HVAC installation services
        </Link>{" "}
        and{" "}
        <Link
          href="/services/maintenance-plans"
          className="text-red-400 hover:text-red-300 underline"
        >
          plumbing services
        </Link>{" "}
        are available on the same project timeline as your remodel electrical.
      </>
    ),
  },
  {
    question: "What electrical work does an ADU require in Riverside County?",
    answer:
      "An ADU (accessory dwelling unit) in Riverside County requires its own electrical permit, separate from the main home's existing permit history. Typically this includes: a dedicated sub-panel fed from the main service (or a separate meter from SCE for a detached ADU), circuits for all habitable spaces per CA Title 24 energy code, GFCI protection in kitchens and bathrooms per NEC, arc-fault circuit interrupter (AFCI) protection in sleeping areas, and smoke/CO detector wiring per California residential code. Detached ADUs often require SCE coordination for the service connection. We handle the full scope — sub-panel, permit, inspection, and utility coordination — so the ADU electrical is complete and signed off before the county issues the certificate of occupancy.",
  },
  {
    question:
      "Can you handle the electrical if we're also adding plumbing and HVAC to the remodel?",
    answer: (
      <>
        Yes — that&apos;s the scenario where our multi-trade structure saves the
        most time. Kitchen remodels requiring new gas lines or water supply changes,
        bathroom additions needing drain rough-in alongside electrical, or new HVAC
        mini-split systems needing dedicated circuits — we coordinate all three
        trades on the same project. One schedule, one point of contact, one permit
        coordinator. Our{" "}
        <Link
          href="/services/hvac/ac-installation"
          className="text-red-400 hover:text-red-300 underline"
        >
          HVAC services
        </Link>{" "}
        include mini-split and heat pump installations that require dedicated
        electrical circuits, which our electricians rough-in and finish as part of
        the same job. If the remodel also exposes outdated wiring, our{" "}
        <Link
          href="/services/electrical/home-rewiring"
          className="text-red-400 hover:text-red-300 underline"
        >
          home rewiring page
        </Link>{" "}
        outlines how we handle that scope.
      </>
    ),
  },
  {
    question: "How much does remodel electrical work cost in Murrieta?",
    answer: (
      <>
        Remodel electrical cost depends on scope. A standard kitchen remodel
        electrical package — new circuits for refrigerator, dishwasher, microwave,
        and counter outlets plus recessed lighting rough-in — typically runs $2,500
        to $5,000, permit included. A bathroom addition with exhaust fan, GFCI
        circuits, and light fixture wiring typically runs $800 to $2,000. An ADU
        with sub-panel installation runs $3,000 to $7,000 depending on distance
        from the main panel and whether a separate SCE meter is required. All
        quotes are written and issued per phase — rough-in and finish — before work
        begins.{" "}
        <Link
          href="/services/electrical/electrical-panel-upgrade"
          className="text-red-400 hover:text-red-300 underline"
        >
          Panel upgrades
        </Link>{" "}
        may be required if the remodel adds significant load; we flag that in the
        assessment.
      </>
    ),
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function RemodelingElectrical() {
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
                      { label: "Remodeling Electrical" },
                    ]}
                  />
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Layers className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Licensed Electrical Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                Remodeling Electrician in Murrieta —{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Rough-In to Finish
                </span>{" "}
                Wiring
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                Last Updated: {lastUpdated}
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Kitchen remodel, bathroom addition, ADU, or new construction in the
                Inland Empire? Our licensed electricians handle the full electrical
                scope — rough-in before the drywall goes up, finish wiring after —
                coordinated with plumbing and HVAC on the same job.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Layers, text: "Rough-In & Finish Wiring" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Users, text: "Multi-Trade Coordination" },
                  { icon: FileCheck, text: "Permitted Every Phase" },
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
                  src="/remodeling-electrical-hero.webp"
                  alt="Gardner electrician installing electrical rough-in boxes during a home remodel in Murrieta"
                  width={1000}
                  height={600}
                  priority
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Layers className="h-4 w-4 text-white" />
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
                  Starting a remodel in Murrieta and need an electrician lined up before the walls close?
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
                  Rough-in consultations scheduled early
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
              <Hammer className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Remodeling Electrical Services in the{" "}
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Inland Empire
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Remodels move in phases — and so does the electrical work. Rough-in
              wiring happens before drywall: new circuits routed, boxes set, panel
              capacity confirmed. Finish wiring comes after drywall: devices
              installed, fixtures connected, circuits tested. Missing the rough-in
              window adds cost and damage to finished walls. Our electricians
              schedule around your project timeline, coordinate with your other
              trades, and pull the permit so inspection happens on your schedule,
              not around it. View our{" "}
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
                  What a Complete Remodel Electrical Scope Delivers
                </h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "All new circuits sized for current NEC standards — no overloaded runs in the renovation zone",
                    "Rough-in inspection passed before drywall — no wall-opening surprises later",
                    "Finish devices installed to spec — outlets, switches, and fixtures all tested",
                    "Panel capacity confirmed to support new load without affecting existing circuits",
                    "ADU or addition sub-panel installed and metered per SCE requirements",
                    "Full permit closed with city — project record updated for county and insurance purposes",
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
                    src="/remodeling-electrical-before-after.webp"
                    alt="Before and after remodeling electrical showing empty stud bay roughed-in with outlets and wiring by Gardner Electrical in the Inland Empire"
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
                  alt="Gardner Plumbing Co. electrician and service van ready for remodeling electrical work"
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
                    <div className="text-white font-bold text-sm">150+</div>
                    <div className="text-gray-300 text-xs">
                      Remodel Electrical Jobs
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
                for Remodels
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                Gardner Plumbing Co. is a licensed electrical contractor serving
                Murrieta, Temecula, Menifee, and the greater Inland Empire (CA
                Contractor&apos;s License{" "}
                <span className="text-yellow-400 font-semibold">
                  &#123;&#123;CSLB_C10_LICENSE_TBD&#125;&#125;
                </span>
                ). Our electricians have completed over 150 remodel and new
                construction electrical jobs across Riverside County — from kitchen
                and bathroom rewires in Murrieta to ADU sub-panel installations in
                Temecula and garage conversions in Menifee. Because we also handle
                plumbing and HVAC, remodel jobs move faster with fewer scheduling
                gaps.
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
              Remodeling electrical service is available across the Inland Empire,
              dispatched from our Murrieta base. We cover Temecula, Menifee,
              Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside,
              and Hemet — with coordinated multi-trade scheduling throughout.
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
              Remodeling Electrical{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions and Answers
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about remodel and new construction
              electrical in Murrieta and the Inland Empire.
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
                is standing by to answer your questions and schedule a project
                consultation. Need immediate help? Call our{" "}
                <Link
                  href="tel:9512464337"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  direct line
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
                When a Remodel Reveals an{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Electrical Problem
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Remodels expose hidden conditions — aluminum wiring, overloaded
                circuits, or double-tapped breakers that weren&apos;t visible
                before the walls opened. When the demo phase of your remodel
                reveals a wiring problem that affects scope or safety, our
                electricians can assess and re-quote the same week so your project
                doesn&apos;t stall.
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
                  alt="Emergency electrical service — Gardner electrician responding to remodel wiring problem"
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
                      <div className="text-white font-bold text-sm">Same Week</div>
                      <div className="text-gray-300 text-xs">
                        Re-Quote Available
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
                  Start Your Remodel Electrical Work?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Remodeling electrical across Murrieta, Temecula, and the Inland
                Empire. Rough-in, finish wiring, ADU circuits, and multi-trade
                coordination. Call now or schedule a project consultation — our
                electrical team picks up.
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
                <span className="text-gray-300">Permitted Every Phase</span>
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
