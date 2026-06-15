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
  Wifi,
  Sliders,
  Thermometer,
  Network,
  Cpu,
} from "lucide-react";
import { ImagePromptPlaceholder } from "./ImagePromptPlaceholder";

// ─── Image prompt constants (sourced from seo/electrical-image-prompts/smart-home-electrical.md) ───

const HERO_PROMPT =
  "Photo of an electrician wiring a smart dimmer switch at an open wall box in a modern Inland Empire home hallway, close-medium shot showing the work at the wall. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Low-voltage smart switch module held to the wall box, neutral wire clearly visible being connected at the terminal, non-contact voltage tester resting on hip. This is hands-on electrical wiring work — not retail programming or app setup. Warm interior LED light with ambient daylight. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no tablet or phone prominently posed (this is wiring work not app setup), no green grass lawn, no snow";

const HERO_REF =
  "Attach gardnertecharrival.webp or gardnertecharrival2.webp — natural daylight field-work posture; the reference carries face and uniform style data. Do not describe face, age, or ethnicity in the prompt — the reference handles it.";

const BEFORE_AFTER_PROMPT =
  "Split-scene product photograph, single frame divided at vertical center. LEFT HALF: traditional toggle light switch and basic duplex outlet on a painted wall — beige plastic, aged, standard rocker switch, no USB ports, flat even light. RIGHT HALF: same wall position after upgrade — modern smart dimmer switch with LED status bar and touch surface beside a smart outlet with USB-A and USB-C ports, clean white decor-style faceplates. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral drywall background.";

const BEFORE_AFTER_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC equipment";

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
  "San Jacinto": "https://www.sanjacintoca.gov",
  Wildomar: "https://cityofwildomar.org",
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
  "Smart thermostat not communicating with HVAC system",
  "Dedicated circuit tripping under normal smart device load",
  "Smart switch causing repeated breaker faults",
  "Burning smell from smart switch or outlet location",
  "Panel breaker refusing to reset after smart device install",
  "Voltage fluctuations affecting smart device performance",
  "Low-voltage wiring fault disabling hub controller",
  "Smart outlet sparking or hot to the touch",
];

const services = [
  {
    icon: Zap,
    title: "Dedicated Circuit Wiring",
    description:
      "Smart home hubs, EV chargers, and high-draw appliances need dedicated circuits — not shared circuits that trip under combined load.",
    features: [
      "Hub & Controller Circuits",
      "Appliance Dedicated Lines",
      "Circuit Breaker Sizing",
      "Panel Capacity Check",
    ],
  },
  {
    icon: Sliders,
    title: "Smart Switch & Outlet Wiring",
    description:
      "Smart switches require a neutral wire — many Murrieta homes built before 1995 lack one at switch locations. We run the neutral and wire the device correctly.",
    features: [
      "Neutral Wire Addition",
      "Smart Switch Wiring",
      "Smart Outlet Install",
      "3-Way Smart Switch Config",
    ],
  },
  {
    icon: Thermometer,
    title: "Smart Thermostat Wiring",
    description:
      "Smart thermostats need a C-wire (common wire) to power their display and Wi-Fi. We run the C-wire and wire the thermostat to your HVAC system correctly.",
    features: [
      "C-Wire Installation",
      "Thermostat Base Wiring",
      "HVAC Circuit Verification",
      "Wi-Fi Readiness Check",
    ],
  },
  {
    icon: Network,
    title: "Low-Voltage Hub Cabling",
    description:
      "Control4, Lutron, and similar hub systems use structured low-voltage cabling — we run the wiring to the hub location and terminate connections cleanly.",
    features: [
      "Low-Voltage Cable Runs",
      "Hub Location Wiring",
      "In-Wall Cable Management",
      "Clean Terminations",
    ],
  },
];

const benefits = [
  {
    icon: Cpu,
    title: "Electrical Infrastructure First",
    description:
      "We wire the circuits and switches that make smart devices work — no integration programming, just solid electrical work.",
  },
  {
    icon: Shield,
    title: "Licensed Electricians",
    description:
      "Every technician is a licensed CA electrician. Smart switch wiring, C-wire runs, and low-voltage cabling done to code.",
  },
  {
    icon: Zap,
    title: "Multi-Trade Coordination",
    description:
      "Smart thermostat wiring involves both electrical and HVAC systems. Our team handles both — no handoff between contractors.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "Written quote before work starts. If we find the panel needs upgrading to support new smart circuits, we tell you before we touch anything.",
  },
];

const faqs = [
  {
    question: "What does a smart home electrician actually do?",
    answer:
      "A smart home electrician handles the physical wiring that smart devices require — dedicated circuits for high-draw devices, neutral wires at switch locations, C-wires for smart thermostats, and low-voltage cabling for hub controllers. The electrician does not program your devices, set up your Wi-Fi network, or configure your automation scenes. The electrical work has to be correct before any of that matters. If the circuit is wrong, the device fails regardless of how the app is set up.",
  },
  {
    question:
      "My smart switches keep losing connection — is that a wiring problem?",
    answer: (
      <>
        Often, yes. Smart switches that drop connection frequently are usually
        missing a neutral wire or are on a shared circuit with devices that cause
        voltage fluctuations. Both problems are electrical, not network issues.
        Our electricians verify neutral wire presence, check circuit load, and
        test voltage stability at the switch location before calling the job
        done. If the panel is the source of the instability, we flag that before
        starting any switch work. For broader outlet issues, see our{" "}
        <Link
          href="/services/electrical/outlets-and-switches"
          className="text-red-400 hover:text-red-300 underline"
        >
          outlets and switches
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    question: "What is a C-wire and why does my smart thermostat need one?",
    answer: (
      <>
        The C-wire (common wire) is a continuous power supply for a smart
        thermostat&apos;s display, Wi-Fi, and onboard sensors. Most smart
        thermostats — Nest, Ecobee, Honeywell T6 Pro — require a C-wire to
        avoid display dropout and battery-drain issues. Murrieta homes built
        before 2000 often have only 4-wire thermostat wiring (R, G, Y, W) with
        no C-wire. Our electricians run a C-wire from the air handler to the
        thermostat location — typically a 2-hour job. See our{" "}
        <Link
          href="/services/hvac/thermostat-installation"
          className="text-red-400 hover:text-red-300 underline"
        >
          thermostat installation
        </Link>{" "}
        page for the full HVAC-side process.
      </>
    ),
  },
  {
    question:
      "Does my electrical panel need to be upgraded for smart home devices?",
    answer: (
      <>
        Most smart home devices draw modest power individually — a smart switch
        uses under 5 watts. The concern is aggregate load. Adding an EV charger,
        smart appliances, and whole-home audio simultaneously can push a 100-amp
        panel to its limits. Before adding multiple smart home circuits, our
        electricians review your current panel load and available breaker slots.
        If an upgrade is needed, we provide a quote for the{" "}
        <Link
          href="/services/electrical/electrical-panel-upgrade"
          className="text-red-400 hover:text-red-300 underline"
        >
          electrical panel upgrade
        </Link>{" "}
        before any smart home wiring begins.
      </>
    ),
  },
  {
    question: "Can you wire smart lighting controls across my whole house?",
    answer: (
      <>
        Yes. Whole-home smart lighting uses smart switches at every switch
        location — all requiring neutral wires — and often a central smart hub
        or integration with Google Home or Amazon Alexa. Our electricians run
        neutral wires where missing, install smart switches throughout, and
        verify each switch is wired to the correct load. We handle the physical
        wiring. The app pairing and automation scene setup is done by the
        homeowner or a separate smart home integrator. See our{" "}
        <Link
          href="/services/electrical/lighting-installation"
          className="text-red-400 hover:text-red-300 underline"
        >
          lighting installation
        </Link>{" "}
        page for fixture and recessed lighting work that often pairs with smart
        switch upgrades.
      </>
    ),
  },
  {
    question: "How much does smart home wiring cost in Murrieta?",
    answer:
      "Smart home wiring costs depend heavily on scope. A single smart thermostat with C-wire installation typically runs $150–$250 for the electrical work. Smart switch installation — including neutral wire runs if needed — averages $100–$175 per switch location. Dedicated circuit additions for smart home hubs or high-draw devices run $200–$350 per circuit. A whole-home smart switch upgrade across 15–20 locations generally runs $1,500–$3,500, depending on panel capacity and neutral wire status throughout the home. We provide a written, itemized quote before any work begins.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function SmartHomeElectrical() {
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
                      { label: "Smart Home Solutions" },
                    ]}
                  />
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Wifi className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Licensed Electrical Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                Smart Home Electrician in Murrieta —{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Wiring, Circuits & Smart Panels
                </span>
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                Last Updated: {lastUpdated}
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Smart home devices need the right electrical infrastructure to
                work reliably. Licensed electricians wire dedicated circuits,
                smart switches, and smart thermostat connections across the
                Inland Empire.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Wifi, text: "Smart Device Wiring" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: DollarSign, text: "Upfront Pricing" },
                  { icon: Phone, text: "Same-Day Scheduling" },
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
                  src="/smart-home-electrical-hero.webp"
                  alt="Gardner electrician wiring a smart switch during home electrical upgrade in Murrieta"
                  width={1000}
                  height={600}
                  priority
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Wifi className="h-4 w-4 text-white" />
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
                  Smart devices failing because the wiring can&apos;t support them?
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
                  Electrical assessment · Murrieta
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
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Wifi className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Comprehensive{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
                Smart Home Electrical Wiring
              </span>{" "}
              in the Inland Empire
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Smart home devices — lighting controls, smart thermostats, security
              cameras, EV chargers, and whole-home audio — all require the
              electrical infrastructure to support them. That means dedicated
              circuits with proper amperage, smart-compatible switches with
              neutral wires, and panels with room to grow. Our electricians handle
              the wiring and circuit work, so your smart devices actually perform
              as advertised. View{" "}
              <Link
                href="/services/electrical/fixtures"
                className="text-red-400 hover:text-red-300 underline"
              >
                electrical installation services
              </Link>
              .
            </p>
          </div>

          {/* Services Grid */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>

                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg">
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
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

          {/* Before/After Section */}
          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What Changes After Smart Home Electrical Wiring
                </h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "Dedicated circuits confirmed — no shared load causing device drops or resets",
                    "Neutral wires present at all smart switch locations",
                    "C-wire installed and smart thermostat confirmed communicating with HVAC",
                    "Panel capacity verified — no overcrowding of breaker slots",
                    "Low-voltage cabling run in-wall — no exposed conduit or surface raceways",
                    "All smart devices tested at operating load before electrician leaves",
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
                    src="/smart-home-electrical-before-after.webp"
                    alt="Before and after smart home electrical upgrade showing traditional toggle switch replaced with smart dimmer by Gardner Electrical in the Inland Empire"
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
            {/* Left Column — Image (reuse brand asset) */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500 h-96 lg:h-full lg:min-h-[600px]">
                <Image
                  src="/gardnertechvanbackground.webp"
                  alt="Gardner Plumbing Co. electrician and service van ready for smart home wiring"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_30%] rounded-3xl"
                />

                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">150+</div>
                    <div className="text-gray-300 text-xs">
                      Smart Home Wiring Jobs
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
                Why Inland Empire Homeowners{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  Choose Our Electrical Team
                </span>{" "}
                for Smart Home Wiring
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                Gardner Plumbing Co. is a licensed electrical contractor serving
                Murrieta, Temecula, Menifee, and the greater Inland Empire (CA
                Contractor&apos;s License{" "}
                <span className="text-yellow-400 font-semibold">
                  &#123;&#123;CSLB_C10_LICENSE_TBD&#125;&#125;
                </span>
                ). Our electricians have completed over 150 smart home wiring
                jobs across Riverside County — dedicated circuits for hubs in
                Temecula, smart switch upgrades in Menifee, and C-wire
                installations for smart thermostats across Murrieta and Wildomar.
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
                          {index === 2 && (
                            <>
                              {" "}See our{" "}
                              <Link
                                href="/services/hvac/thermostat-installation"
                                className="text-red-400 hover:text-red-300 underline"
                              >
                                thermostat installation
                              </Link>{" "}
                              page for the HVAC side.
                            </>
                          )}
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
              Smart home electrical wiring is available across the Inland Empire,
              with fast response times from our Murrieta base. We cover Temecula,
              Menifee, Perris, Canyon Lake, Lake Elsinore, Corona, Moreno Valley,
              Riverside, and Hemet — same-day availability throughout.
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
                radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Smart Home Wiring{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions and Answers
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about smart home electrical wiring
              in Murrieta and the Inland Empire.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              {/* Red Banner Header */}
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

              {/* FAQ Content */}
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
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>

                      <div className="relative z-10">
                        <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-500 px-6 sm:px-8 py-6 sm:py-8 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                          <span className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-blue-600 group-hover/trigger:to-blue-500 transition-all duration-300">
                              <HelpCircle className="h-4 w-4 text-blue-400 group-hover/trigger:text-white transition-colors duration-300" />
                            </div>
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-6 sm:pb-8 pt-0 px-6 sm:px-8 ml-12 border-l-2 border-blue-500/20 text-base sm:text-lg leading-relaxed">
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

          {/* FAQ CTA */}
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
                Can&apos;t find what you&apos;re looking for? Our electricians
                are standing by to answer your questions and assess your smart
                home wiring needs. Need immediate help? Call our{" "}
                <Link
                  href="tel:9512464337"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  24/7 emergency line
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
            {/* Left Column — Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Emergency Service
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                When Smart Home Wiring Needs{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Immediate Attention
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Smart home wiring failures are usually inconvenient, not
                dangerous — but some situations need same-day service. A
                dedicated circuit that trips under normal smart device load, a
                smart switch causing breaker faults, or a thermostat that
                won&apos;t communicate with the HVAC system are all situations
                that need prompt diagnosis.
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

            {/* Right Column — Image (reuse brand asset) */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertecharrival.webp"
                  alt="Emergency electrical service — Gardner electrician responding to smart home wiring fault"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />

                {/* Floating Emergency Badge */}
                <div className="absolute top-6 right-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">24/7</div>
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
                  Wire Your Home for Smart Devices?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Smart home electrical wiring across Murrieta, Temecula, and the
                Inland Empire. Dedicated circuits, smart switch wiring,
                thermostat connections — licensed electricians, upfront pricing,
                a line that picks up. Call now or schedule online.
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
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Same-Day Service</span>
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
