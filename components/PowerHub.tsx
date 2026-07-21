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
  Zap,
  Car,
  Cable,
  Battery,
  BatteryCharging,
} from "lucide-react";
import { ImagePromptPlaceholder } from "./ImagePromptPlaceholder";

// ─── Image prompt constants (sourced from seo/electrical-image-prompts/power-hub.md) ───

const HERO_PROMPT =
  "Photo of an electrician standing beside an open 200-amp electrical panel in an Inland Empire garage, one hand resting on the open panel cabinet door — a category-defining stance for power systems work. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Breaker rows clearly visible inside the open panel. Slightly blurred in the background: a Level 2 EV charger mounted on the garage wall, implying the breadth of power-upgrade services. Confident, composed posture — this tech owns the whole power infrastructure category. Overhead garage fluorescent with ambient garage-door daylight. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no exposed live wires (safety implication), no obvious shock or spark theatrics, no excessive sparks or lightning bolt clichés, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow, no overly posed corporate portrait stance";

const HERO_REF =
  "Attach gardnertecharrival.webp or gardnertecharrival2.webp — natural daylight field-work posture; the reference carries face and uniform style data. Do not describe face, age, or ethnicity.";

const BEFORE_AFTER_PROMPT =
  "Split-scene product photograph, single frame divided at vertical center. LEFT HALF: aging home electrical infrastructure — old 100-amp panel open with mixed wire types, faded labels, a basic 120V outlet on the garage wall nearby, no sub-panels visible, dim garage lighting. RIGHT HALF: modernized power infrastructure — clean 200-amp main panel with labeled breakers, sub-panel beside it, Level 2 EV charger mounted on the garage wall, conduit runs clean and strapped. Broad category-representation composition for a power-upgrade hub page. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Painted concrete garage wall background.";

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
  "Main breaker tripping repeatedly",
  "Panel sparking or making crackling sounds",
  "Complete power loss to multiple circuits",
  "Burning smell near electrical panel",
  "EV charger circuit causing breaker trips",
  "Generator transfer switch failure",
  "Service entrance damage after storm",
  "Hot panel box or warm breakers",
];

const services = [
  {
    icon: Zap,
    title: "Panel & Service Upgrade",
    href: "/services/electrical/electrical-panel-upgrade",
    description:
      "200-amp panel upgrades, main breaker replacement, sub-panel installation, and SoCal Edison service entrance upgrades — the foundation of a modern home electrical system.",
    features: [
      "200-Amp Service Upgrade",
      "Main Breaker Replacement",
      "Sub-Panel Installation",
      "SCE Utility Coordination",
    ],
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    href: "/services/electrical/ev-charger-installation",
    description:
      "Level 2 home EV charger installation with dedicated 240V circuit and panel capacity check — Murrieta's most-requested electrical upgrade.",
    features: [
      "Level 2 (240V) Circuit",
      "Panel Capacity Assessment",
      "Tesla, ChargePoint & Universal",
      "NEC 625 Compliant",
    ],
  },
  {
    icon: Cable,
    title: "Home Rewiring",
    href: "/services/electrical/home-rewiring",
    description:
      "Full and partial home rewiring for 1990s–2000s Inland Empire homes — aluminum wiring replacement, knob-and-tube removal, and updated wire runs to modern code.",
    features: [
      "Aluminum Wiring Replacement",
      "Full & Partial Rewires",
      "Updated to NEC Standards",
      "Code-Compliant Installation",
    ],
  },
  {
    icon: Battery,
    title: "Generator Installation",
    href: "/services/electrical/generator-installation",
    description:
      "Standby generator electrical hookup, transfer switch installation, and load management wiring — keeping your home powered during SCE outages.",
    features: [
      "Transfer Switch Installation",
      "Standby Generator Hookup",
      "Load Management Wiring",
      "Generac & Kohler Compatible",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround on Upgrades",
    description:
      "Panel upgrades and EV charger installations are typically completed in a single day — scheduled and on-site within 48 hours for non-emergency upgrades.",
  },
  {
    icon: Shield,
    title: "Licensed, Bonded & Insured",
    description:
      "Every electrician holds a valid CA C-10 contractor license. Every job is done right and documented.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "Written quote before work starts. The price on the quote is the price on the invoice — no change orders after the job begins.",
  },
  {
    icon: Award,
    title: "30+ Years Serving Riverside County",
    description:
      "Three decades of local work means the team understands Murrieta's housing stock — the 1990s–2000s builds, their common panel defects, and how the local utility processes upgrades.",
  },
];

const faqs = [
  {
    question:
      "When should I upgrade my electrical panel in an Inland Empire home?",
    answer: (
      <>
        The four most common triggers for a panel upgrade in Murrieta and
        Temecula: you&apos;re installing an EV charger and the panel has no room
        for a 50-amp circuit; you&apos;re adding a new HVAC system that requires
        more amperage than the panel can support; breakers trip regularly under
        normal household load; or you&apos;re buying or selling a home and the
        inspector flags the panel. Most 1990s–2000s Inland Empire homes have
        100–150 amp panels — adequate for 1995 loads, undersized for 2026
        households. Our{" "}
        <Link
          href="/services/electrical/electrical-panel-upgrade"
          className="text-red-400 hover:text-red-300 underline"
        >
          panel upgrade service
        </Link>{" "}
        covers the full assessment and upgrade.
      </>
    ),
  },
  {
    question: "What are the signs my home needs rewiring?",
    answer: (
      <>
        The clearest indicators: outlets that stop working without tripping a
        GFCI; lights that dim when a major appliance runs; breakers that trip
        repeatedly on normal loads; an aluminum wiring home (common in
        1960s–1970s IE builds) that hasn&apos;t been updated; and any home where
        the wiring hasn&apos;t been touched since the original construction 30+
        years ago. Aluminum wiring requires attention — it expands and contracts
        differently than copper and poses a fire risk at connection points. Our{" "}
        <Link
          href="/services/electrical/home-rewiring"
          className="text-red-400 hover:text-red-300 underline"
        >
          home rewiring service
        </Link>{" "}
        can address partial rewires targeting problem areas or full replacements.
      </>
    ),
  },
  {
    question:
      "What's the difference between Level 1 and Level 2 EV charging at home?",
    answer: (
      <>
        Level 1 charging uses a standard 120-volt outlet — the cord that comes
        with your EV. It adds roughly 3–5 miles of range per hour of charging.
        For most daily drivers in Murrieta, overnight Level 1 charging is
        adequate if you drive under 40 miles per day. Level 2 charging uses a
        240-volt dedicated circuit and a wall-mounted charger. It adds 20–30
        miles of range per hour. If you drive more than 50 miles daily or have a
        longer-range EV, Level 2 is worth the installation cost. Our{" "}
        <Link
          href="/services/electrical/ev-charger-installation"
          className="text-red-400 hover:text-red-300 underline"
        >
          EV charger installation service
        </Link>{" "}
        covers both options and the panel assessment required for Level 2.
      </>
    ),
  },
  {
    question:
      "Do I need a permit to upgrade my panel or install an EV charger in Murrieta?",
    answer:
      "Yes to both. A panel upgrade (200-amp service upgrade) requires a permit through the City of Murrieta Building & Safety or Riverside County Building Department, plus inspection by the local electrical inspector. Level 2 EV charger installation on a new circuit also requires a permit. Permits are the homeowner's responsibility under California law; we can coordinate the paperwork on your behalf and list permit fees as a pass-through line on your quote. Unpermitted panel work creates open permit issues that surface during home sales and can void homeowner's insurance coverage.",
  },
  {
    question: "Does my home need a generator, and what type makes sense?",
    answer: (
      <>
        Whether you need a generator depends on your power-outage frequency and
        what you can&apos;t afford to lose. Murrieta and the broader Inland
        Empire experience SCE outages during high-fire-risk weather events and
        summer demand peaks. If you have medical equipment, a sump pump, a chest
        freezer worth of food, or a family with young children, a whole-home
        standby generator makes sense. Portable generators handle select loads;
        whole-home standby units (Generac, Kohler) start automatically and power
        your full home. Our{" "}
        <Link
          href="/services/electrical/generator-installation"
          className="text-red-400 hover:text-red-300 underline"
        >
          generator installation service
        </Link>{" "}
        covers the electrical hookup, transfer switch, and load management — not
        the generator purchase itself.
      </>
    ),
  },
  {
    question: "What area does your electrical upgrade service cover?",
    answer:
      "Our power system and upgrade team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Panel upgrades and EV charger installations are our most common jobs across the southwest Riverside County corridor. For the outer edges of the service area, scheduling timelines may extend by a day. Call (951) 246-4337 to confirm availability for your location and get a same-day quote.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function PowerHub() {
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
                      { label: "Power & Upgrades" },
                    ]}
                  />
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <BatteryCharging className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Licensed Power &amp; Upgrade Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                Power Systems &amp; Electrical Upgrades in{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Murrieta
                </span>
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                Last Updated: {lastUpdated}
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Panel upgrades, home rewiring, EV charger installation, and
                generator hookups — licensed electrical power work for Inland
                Empire homes built to handle modern demands.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Same-Day Response" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: DollarSign, text: "Upfront Pricing" },
                  { icon: Phone, text: "24/7 Emergency Line" },
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
                  src="/power-hub-hero.webp"
                  alt="Gardner electrician standing beside a 200-amp panel in a Murrieta garage representing power systems and electrical upgrade services"
                  width={1000}
                  height={600}
                  priority
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <BatteryCharging className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        Licensed Power &amp; Upgrade Service
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
                  Panel tripping breakers or no room for an EV charger circuit?
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
                  Same-day response · Murrieta &amp; Inland Empire
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
              <BatteryCharging className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Power System &amp; Upgrade Services We Offer in the{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
                Inland Empire
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Most Murrieta and Temecula homes were built in the 1990s and 2000s
              with 100–150 amp panels — undersized for today&apos;s EV chargers,
              smart HVAC systems, and high-demand appliances running
              simultaneously. Our licensed electrical team handles every power
              upgrade your home needs, from a 200-amp panel service upgrade to a
              full rewire. We also handle{" "}
              <Link
                href="/services/electrical/remodeling-electrical"
                className="text-red-400 hover:text-red-300 underline"
              >
                remodeling and new construction electrical
              </Link>{" "}
              when walls are open and the work is cleanest.
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
                </Link>
              );
            })}
          </div>

          {/* Before/After Section */}
          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What Changes After a Power System Upgrade
                </h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "Panel has room for EV charger, HVAC, and kitchen circuits — all running without tripped breakers",
                    "Aluminum wiring replaced — the #1 fire risk in 1970s–1980s Inland Empire homes",
                    "200-amp service provides headroom for solar, battery storage, and future load additions",
                    "Generator transfer switch installed — no more manually running extension cords during SCE outages",
                    "All circuits labeled, properly sized, and load-balanced across the panel",
                    "Installation documented and utility inspection signed off — no open permit issues at sale time",
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
                    src="/power-hub-before-after.webp"
                    alt="Before and after power systems upgrade showing aging electrical infrastructure modernized with 200-amp panel and EV charger by Gardner Electrical in Murrieta"
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
                  alt="Gardner Plumbing Co. licensed electrician and service van ready for panel upgrade and power system work in Murrieta"
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
                    <div className="text-white font-bold text-sm">550+</div>
                    <div className="text-gray-300 text-xs">
                      Power System Jobs
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
                Why Inland Empire Homeowners Choose Our{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  Electrical Upgrade Team
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                Gardner Plumbing Co. is a licensed electrical contractor serving
                Murrieta, Temecula, Menifee, and the greater Inland Empire (CA
                Contractor&apos;s License{" "}
                <span className="text-yellow-400 font-semibold">
                  &#123;&#123;CSLB_C10_LICENSE_TBD&#125;&#125;
                </span>
                ). Our electrical team has completed over 550 power system jobs
                across Riverside County — from 200-amp panel upgrades in Menifee
                to EV charger installations in Wildomar. Every major upgrade is
                code-compliant, utility-coordinated where required, and completed
                by a licensed electrician who signs the work.
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
              Power system and electrical upgrade service is available across the
              Inland Empire, dispatched from our Murrieta base. We cover
              Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona,
              Moreno Valley, Riverside, and Hemet — same-day availability for
              urgent calls. See also our{" "}
              <Link
                href="/services/electrical/fixtures"
                className="text-red-400 hover:text-red-300 underline"
              >
                fixture installation services
              </Link>{" "}
              and{" "}
              <Link
                href="/services/electrical/repairs"
                className="text-red-400 hover:text-red-300 underline"
              >
                electrical repairs and safety
              </Link>
              .
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
              Power System &amp; Upgrade{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions and Answers
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Common questions about panel upgrades, rewiring, EV chargers, and
              generator installation in Murrieta and the Inland Empire.
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
                    Questions &amp; Answers
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
                Can&apos;t find what you&apos;re looking for? Our electrical
                team is standing by to answer your questions and schedule your
                upgrade. Need immediate help? Call our{" "}
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
                When You Need Urgent{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Electrical Help
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A panel that refuses to hold a breaker, complete loss of power
                to major circuits, or sparking at the service entrance are
                situations that can&apos;t wait for a scheduled appointment. Our
                electrical team handles same-day urgent calls across the Inland
                Empire and maintains a 24/7 emergency line at (951) 246-4337 for
                after-hours situations.
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

            {/* Right Column — Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertecharrival.webp"
                  alt="Urgent electrical service — Gardner licensed electrician responding to power system emergency in the Inland Empire"
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
                  Upgrade Your Electrical System in Murrieta?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Electrical panel upgrades, EV charger installation, home
                rewiring, and generator hookups across Murrieta, Temecula, and
                the Inland Empire. Licensed electricians, code-compliant work,
                upfront pricing. Call now or schedule online — our electrical
                team picks up.
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
                <span className="text-gray-300">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Licensed &amp; Insured</span>
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
