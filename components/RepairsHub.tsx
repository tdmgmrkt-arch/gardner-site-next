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
  Wrench,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import { ImagePromptPlaceholder } from "./ImagePromptPlaceholder";

// ─── Image prompt constants (sourced from seo/electrical-image-prompts/repairs-safety-hub.md) ───

const HERO_PROMPT =
  "Photo of an electrician conducting a methodical panel check in an Inland Empire home utility area, medium shot showing the tech with diagnostic tools — the category-defining image for electrical repairs and safety. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Digital multimeter in one hand with probes approaching a breaker terminal, safety glasses resting on the bill of the cap — present but not theatrical. Clipboard or notepad visible at hip. Focused, composed, authoritative — this tech diagnoses and fixes anything electrical. Warm interior LED light with ambient daylight from a window. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no excessive sparks or lightning bolt clichés, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow, no theatrical safety-drama pose";

const HERO_REF =
  "Attach gardnertecharrival.webp or gardnertecharrival2.webp — natural daylight field-work posture; the reference carries face and uniform style data. Do not describe face, age, or ethnicity.";

const BEFORE_AFTER_PROMPT =
  "Split-scene product photograph, single frame divided at vertical center. LEFT HALF: residential electrical panel interior with multiple visible issues — double-tapped breakers, one red inspection-flag tag clipped to a breaker, scorched terminal on one side, unlabeled breaker rows, aluminum wiring mismatched at a copper breaker, flat even panel light. RIGHT HALF: same panel fully remediated and cleared — all breakers properly loaded and labeled in clear handwriting, no double taps, no scorching, a green compliance-cleared sticker on the inside of the door, wiring dressed cleanly. Broad safety-category representation. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Panel interior background.";

const BEFORE_AFTER_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment, no excessive sparks or lightning bolt clichés";

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
  "Burning smell from outlet or electrical panel",
  "Sparking at outlet, switch, or panel",
  "Breaker tripping immediately after reset",
  "Complete power loss to part of the home",
  "Hot outlet cover or switch plate",
  "Electrical panel making buzzing or crackling sounds",
  "Flickering lights throughout the entire home",
  "Power failure following a storm or surge event",
];

const services = [
  {
    icon: Wrench,
    title: "Electrical Repairs",
    href: "/services/electrical/electrical-repairs",
    description:
      "Diagnosis and repair for tripping breakers, flickering lights, dead outlets, wiring faults, and circuit overloads — Murrieta's most common electrical repair calls.",
    features: [
      "Breaker Diagnosis & Repair",
      "Flickering Lights Fix",
      "Dead Outlet Troubleshooting",
      "Wiring Fault Diagnosis",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Electrical",
    href: "/services/electrical/emergency-electrical",
    description:
      "24/7 emergency electrician for sparking outlets, burning smells, panel failures, and complete power loss — dispatched from Murrieta across the Inland Empire.",
    features: [
      "24/7 Live Dispatch",
      "Same-Night Response",
      "Weekend & Holiday Coverage",
      "Murrieta-Based — Fast Response",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Safety Inspections",
    href: "/services/electrical/electrical-safety-inspection",
    description:
      "Full home electrical safety audit — panel condition, wiring age, GFCI coverage, code compliance, and fire risk assessment for Inland Empire homeowners.",
    features: [
      "Panel Condition Review",
      "GFCI Coverage Audit",
      "Wiring Age Assessment",
      "Written Inspection Report",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Surge Protection",
    href: "/services/electrical/surge-protection",
    description:
      "Whole-home surge protection device (SPD) installation at the main panel — one device that guards every circuit in the house from SCE grid events.",
    features: [
      "Whole-Home SPD Install",
      "Panel-Level Protection",
      "Electronics & Appliance Guard",
      "SCE Grid Event Defense",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Emergency Dispatch",
    description:
      "The emergency line at (951) 246-4337 is live 24 hours a day. Daytime calls average under 2 hours dispatch. After-hours calls are typically on-site within 2–4 hours.",
  },
  {
    icon: Shield,
    title: "Licensed, Bonded & Insured",
    description:
      "Every electrician holds a valid CA C-10 contractor license and passes background verification. No unlicensed repair work — the license is on every invoice.",
  },
  {
    icon: DollarSign,
    title: "Upfront Repair Pricing",
    description:
      "Diagnostic fee quoted before work begins. Repair cost quoted after diagnosis — before any work starts. No surprise charges on a repair call.",
  },
  {
    icon: Award,
    title: "30+ Years Serving Riverside County",
    description:
      "Three decades of local work means the team has diagnosed every common failure mode in Inland Empire homes — the wiring faults that age produces, the panels that overheat.",
  },
];

const faqs = [
  {
    question:
      "What are the most common electrical problems in Inland Empire homes?",
    answer:
      "The five most frequent repair calls we see across Murrieta, Temecula, and Menifee: breakers that trip under normal load (often a sign of a failing breaker or overloaded circuit), outlets that stop working without a visible GFCI trip (loose connection or a tripped GFCI upstream), flickering lights that aren't a bulb issue (loose connection or a failing circuit), arc fault trips in bedroom circuits (AFCI breakers doing their job — but pointing to a wiring issue), and outdoor outlets that go dead after rain (GFCI failure or water intrusion). Most of these are diagnosed and repaired in a single visit.",
  },
  {
    question:
      "When is an electrical problem an emergency vs. a scheduled repair?",
    answer:
      "Treat it as an emergency — call (951) 246-4337 now — if you see or smell any of these: burning smell from an outlet, switch, or panel; sparking at any electrical device or the panel; breakers that trip and immediately trip again when reset; complete power loss to a portion of the home with no clear cause; or a hot outlet cover or switch plate. Schedule a standard repair appointment for: breakers that trip occasionally under heavy load, outlets that stop working, or lights that flicker intermittently. The first list involves active hazard potential. The second list is inconvenient but not immediately dangerous.",
  },
  {
    question:
      "How often should I get an electrical safety inspection in Murrieta?",
    answer: (
      <>
        For homes built before 2005 in the Inland Empire, every 5–7 years is a
        reasonable cadence for a full electrical safety audit. For homes with
        older wiring (1960s–1980s builds with aluminum wiring or original
        panels) and homes that haven&apos;t had an inspection in over 10 years,
        every 3–5 years is more appropriate. Pre-purchase inspections are
        strongly recommended before buying any Murrieta or Temecula home — an
        electrical inspection goes beyond what a standard home inspector covers.
        Our{" "}
        <Link
          href="/services/electrical/electrical-safety-inspection"
          className="text-red-400 hover:text-red-300 underline"
        >
          safety inspection service
        </Link>{" "}
        includes a written report you can use in negotiations or for insurance
        purposes.
      </>
    ),
  },
  {
    question: "Is whole-home surge protection worth it?",
    answer:
      "For Inland Empire homes, yes. SoCal Edison's grid experiences voltage events during high-demand summer periods and during the shut-off events tied to fire risk weather. A panel-level surge protection device (SPD) costs $300–$600 installed and protects every circuit in the house in a single installation. Point-of-use power strips protect the devices plugged into them — not the appliances, HVAC systems, or smart devices on other circuits. A whole-home SPD does both. Homes with EV chargers, solar inverters, and smart appliances have significantly more at risk from a surge event than a 2005-era home with basic appliances.",
  },
  {
    question:
      "What is the difference between an electrical repair and a rewiring project?",
    answer: (
      <>
        A repair addresses a specific failure: a bad outlet, a failing breaker,
        a loose connection, a tripped GFCI that won&apos;t reset. The scope is
        limited to the problem and its immediate cause. A rewiring project
        addresses the wiring system itself — replacing wire runs that have
        degraded, removing aluminum wiring from connection points, or updating
        the entire home from an older wiring standard to current NEC code.
        Repairs are typically completed in a single visit. Rewiring is a
        multi-day project involving permit and inspection. Our electricians will
        tell you clearly at diagnosis which category your situation falls into.
        See our{" "}
        <Link
          href="/services/electrical/home-rewiring"
          className="text-red-400 hover:text-red-300 underline"
        >
          home rewiring service
        </Link>{" "}
        for full-scope rewiring.
      </>
    ),
  },
  {
    question:
      "What area does your electrical repair and safety service cover?",
    answer:
      "The repair and safety team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Emergency dispatch is based in Murrieta — daytime response is typically under 2 hours for southwest Riverside County. For the outer service area cities, same-day emergency availability depends on current call volume. Call (951) 246-4337 to confirm your location and get a dispatch time estimate.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function RepairsHub() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const lastUpdated = "June 2026";

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        {/* Background */}
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
                radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column — Content */}
            <div className="text-left animate-fade-in">
              {/* Breadcrumb */}
              <nav className="absolute top-[-75px] mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Breadcrumbs
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Services", href: "/services" },
                      { label: "Electrical", href: "/services/electrical" },
                      { label: "Repairs & Safety" },
                    ]}
                  />
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  24/7 Emergency Electrical
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                Electrical Repairs &amp; Safety in{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Murrieta
                </span>
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                Last Updated: {lastUpdated}
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Electrical troubleshooting, 24/7 emergency electrician, safety
                inspections, and whole-home surge protection — serving Murrieta,
                Temecula, Menifee, and the Inland Empire.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "24/7 Emergency Response" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: DollarSign, text: "Upfront Pricing" },
                  { icon: Phone, text: "Live Dispatch Line" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-green-400" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
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

            {/* Right Column — Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/repairs-safety-hub-hero.webp"
                  alt="Gardner electrician conducting a systematic electrical safety check at a residential panel in the Inland Empire"
                  width={1000}
                  height={600}
                  priority
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"></div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        24/7 Emergency Electrical
                      </div>
                      <div className="text-gray-300 text-xs">
                        Murrieta &amp; Inland Empire
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
                  Electrical emergency in Murrieta? Our licensed electricians respond 24/7, including nights and weekends.
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
                  Murrieta &amp; across the Inland Empire
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
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <Wrench className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Electrical Repair &amp; Safety Services We Provide in the{" "}
              <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Inland Empire
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Inland Empire homes built in the 1990s and 2000s have wiring,
              panels, and outlets that are now 25–30 years old. At that age,
              electrical problems become more frequent — and more important to
              address before they become hazards. Whether something is broken
              right now or you want a proactive inspection before it fails, our
              licensed electrical team covers both ends of the spectrum.
            </p>
          </div>

          {/* Services Grid — each card links to a child leaf */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link key={index} href={service.href} className="block group">
                  <Card
                    className="relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 h-full"
                    style={{
                      backgroundColor: "#202020",
                      backgroundImage:
                        "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>

                    <div className="relative z-10">
                      <CardHeader className="text-center pb-4 pt-8">
                        <div className="relative mb-6">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-red-600 group-hover:to-orange-500 transition-all duration-500 shadow-lg">
                            <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
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
                </Link>
              );
            })}
          </div>

          {/* Before/After Section */}
          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What Changes After a Professional Electrical Repair or
                  Inspection
                </h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "Tripping breakers diagnosed and fixed — not just reset and hoped for the best",
                    "Dead outlets traced to the source — loose connection, failed GFCI, or wiring fault identified and repaired",
                    "GFCI protection confirmed in every required location: kitchen, bathroom, garage, and outdoor circuits",
                    "Panel documented — labeled breakers, no double-tapped circuits, no breakers showing signs of overheating",
                    "Whole-home surge protector installed — every circuit in the house protected from the next utility event",
                    "Written inspection report: what was found, what was repaired, and what to monitor going forward",
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
                    src="/repairs-safety-hub-before-after.webp"
                    alt="Before and after electrical safety repair showing multi-issue panel flagged and cleared to code-compliant status by Gardner Electrical in Murrieta"
                    width={800}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />

                  {/* BEFORE/AFTER split overlay */}
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
            {/* Left Column — Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500 h-96 lg:h-full lg:min-h-[600px]">
                <Image
                  src="/gardnertechvanbackground.webp"
                  alt="Gardner Plumbing Co. licensed electrician and service van ready for electrical repair and safety inspection work in Murrieta"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_30%] rounded-3xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">1,100+</div>
                    <div className="text-gray-300 text-xs">
                      Repairs &amp; Inspections
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Why Choose Our Electrical Team
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Why Murrieta Homeowners Call Our{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  Electrical Repair Team
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                Gardner Plumbing Co. is a licensed electrical contractor serving
                Murrieta, Temecula, Menifee, and the greater Inland Empire (CA
                Contractor&apos;s License{" "}
                <span className="text-yellow-400 font-semibold">
                  &#123;&#123;CSLB_C10_LICENSE_TBD&#125;&#125;
                </span>
                ). Our electrical team has completed over 1,100 repairs and
                inspections across Riverside County — from troubleshooting
                tripping breakers in Perris to whole-home safety inspections in
                Hemet. Every repair is diagnosed to the root cause, not just
                reset. Every inspection produces a written report.
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
              Electrical repair and safety service is available across the
              Inland Empire, with 24/7 emergency dispatch from our Murrieta
              base. We cover Temecula, Menifee, Perris, Canyon Lake, Lake
              Elsinore, Corona, Moreno Valley, Riverside, and Hemet. See also
              our{" "}
              <Link
                href="/services/electrical/fixtures"
                className="text-red-400 hover:text-red-300 underline"
              >
                fixture installation services
              </Link>{" "}
              and{" "}
              <Link
                href="/services/electrical/power"
                className="text-red-400 hover:text-red-300 underline"
              >
                power system upgrades
              </Link>{" "}
              for other electrical needs.
            </p>
          </div>

          {/* Grid of cities */}
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

          {/* CTA */}
          <div className="text-center">
            <div className="glassmorphism-dark rounded-2xl p-8 border border-white/10 shadow-luxury inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                Not sure if we cover your area?
              </h3>
              <p className="text-gray-300 mb-6">
                Call us and we&apos;ll confirm your location and get you a
                dispatch time.
              </p>
              <a href="tel:9512464337">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (951) 246-4337
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
                radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(180deg, #1a1a1a 0%, #111827 100%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-full border border-yellow-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Electrical Repair &amp; Safety Questions and Answers
            </h2>
            <p className="text-lg text-gray-400">
              Common questions about electrical repairs, emergency service,
              inspections, and surge protection in Murrieta and the Inland
              Empire.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glassmorphism-dark rounded-xl border border-white/10 px-6 overflow-hidden hover:border-red-500/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white font-semibold text-lg py-6 hover:text-red-300 transition-colors duration-300 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Emergency Section ── */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, #450a0a 0%, #1f0000 50%, #000000 100%),
                linear-gradient(135deg, #1a0000 0%, #450a0a 50%, #1f0000 100%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/30 to-red-500/30 rounded-full border border-red-500/40 backdrop-blur-sm">
              <AlertTriangle className="h-5 w-5 text-red-300 animate-pulse" />
              <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">
                Emergency Service
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              When You Need Emergency Electrical Service
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A burning smell from an outlet, sparks at the panel, a breaker
              that won&apos;t hold, or complete power loss to a section of your
              home — these aren&apos;t problems to wait on. Our licensed{" "}
              <Link
                href="/services/electrical/emergency-electrical"
                className="text-red-400 hover:text-red-300 underline"
              >
                emergency electricians
              </Link>{" "}
              are dispatched from Murrieta 24 hours a day, 7 days a week. Call
              (951) 246-4337 and describe what you&apos;re seeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {emergencyReasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 glassmorphism-dark rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {reason}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:9512464337">
              <Button
                size="lg"
                className="min-w-[280px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-10 py-5 rounded-xl shadow-lg border border-red-400/20 group animate-pulse-slow"
              >
                <span className="flex items-center justify-center gap-3 text-xl font-bold">
                  <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Call (951) 246-4337 Now
                </span>
              </Button>
            </a>
            <p className="text-gray-400 mt-4 text-sm">
              24/7 emergency dispatch · Licensed electricians · Murrieta &amp;
              Inland Empire
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center bottom, #374151 0%, #1f2937 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 70%, rgba(220, 38, 38, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(139, 0, 0, 0.15) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Solve Your Electrical Problem in Murrieta?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Electrical repairs, 24/7 emergency service, safety inspections, and
            surge protection across Murrieta, Temecula, and the Inland Empire.
            Licensed electricians, upfront pricing. Call now or schedule online
            — our electrical team picks up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:9512464337">
              <Button
                size="lg"
                className="min-w-[240px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-10 py-5 rounded-xl shadow-lg border border-red-400/20 group"
              >
                <span className="flex items-center justify-center gap-3 text-lg font-bold">
                  <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Call (951) 246-4337
                </span>
              </Button>
            </a>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="min-w-[240px] bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-10 py-5 rounded-xl group backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-3 text-lg font-bold">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Get Free Estimate
              </span>
            </Button>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {[
              { icon: Clock, label: "24/7 Emergency" },
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Star, label: "4.9 Star Rating" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-400">
                <item.icon className="h-5 w-5 text-green-400" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Form Modal ── */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <LeadForm onSuccess={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
