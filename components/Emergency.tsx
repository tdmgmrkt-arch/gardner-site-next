"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  AlertTriangle,
  Phone,
  Clock,
  Shield,
  ArrowRight,
  DollarSign,
  Wrench,
  CheckCircle,
  MapPin,
  HelpCircle,
  Star,
  Droplets,
  Flame,
  Zap,
  Home,
  Thermometer,
  Waves,
  PlugZap,
  ListChecks,
  PhoneCall,
  Truck,
  ClipboardList,
  BadgeCheck,
  WrenchIcon,
} from "lucide-react";
import { CleanVisitPromise } from "./CleanVisitPromise";

// ─── Data ──────────────────────────────────────────────────────────────────

const coverageGroups = [
  {
    label: "Riverside County Core",
    cities: [
      "Murrieta",
      "Temecula",
      "Menifee",
      "Perris",
      "Lake Elsinore",
      "Hemet",
      "San Jacinto",
      "Riverside",
      "Corona",
      "Eastvale",
      "Jurupa Valley",
      "Moreno Valley",
      "Garnet",
      "Pedley",
    ],
  },
  {
    label: "Extended Service Area",
    cities: [
      "Palm Springs",
      "Palm Desert",
      "Cathedral City",
      "North Palm Springs",
      "Banning",
      "Beaumont",
      "Cherry Valley",
      "Redlands",
      "Yucaipa",
      "Mentone",
      "Calimesa",
    ],
  },
];

const emergencies = [
  {
    icon: Droplets,
    title: "Burst Pipes and Major Pipe Leaks",
    desc:
      "A burst pipe can release several hundred gallons of water per hour, causing rapid structural damage, mold growth, and destruction of personal property. Gardner Plumbing technicians locate the break, shut off the affected supply line, and repair or replace the damaged section to stop the flooding and restore water service.",
    href: "/services/plumbing/burst-pipes",
  },
  {
    icon: Waves,
    title: "Slab Leaks",
    desc:
      "A slab leak occurs when a water line beneath a concrete foundation develops a crack or break. Warning signs include warm spots on the floor, the sound of running water when all fixtures are off, unexplained increases in the water bill, and cracks appearing in walls or flooring. Gardner Plumbing uses electronic leak detection equipment to pinpoint slab leaks without unnecessary excavation.",
    href: "/services/plumbing/leak-detection",
  },
  {
    icon: AlertTriangle,
    title: "Sewer Line Backups",
    desc:
      "When sewage backs up into sinks, bathtubs, or toilets, it creates an immediate health hazard and signals a blockage or break in the main sewer line. Gardner Plumbing technicians use hydro-jetting and sewer camera inspection to locate and clear the obstruction. Sewage backup is considered a high-priority emergency and receives same-day dispatch at any hour.",
    href: "/services/plumbing/backups",
  },
  {
    icon: Flame,
    title: "Gas Leaks",
    desc:
      "A gas leak is a life-safety emergency. If you smell sulfur or rotten eggs, hear a hissing sound near a gas line or appliance, or notice dead vegetation near a gas line, evacuate immediately and call your gas utility from outside. Once the utility company has secured the scene, Gardner Plumbing's licensed technicians locate and repair the damaged gas line and restore service safely.",
    href: "/services/plumbing/gas-lines",
  },
  {
    icon: Thermometer,
    title: "Water Heater Failures",
    desc:
      "A failing water heater can manifest as a sudden loss of hot water, visible leaking from the tank or connections, discolored water, or unusual rumbling sounds. A leaking water heater can cause significant floor and wall damage if not addressed quickly. Gardner Plumbing repairs and replaces both traditional storage-tank and tankless water heater systems on an emergency basis.",
    href: "/services/plumbing/water-heater-service",
  },
  {
    icon: Zap,
    title: "Overflowing Toilets",
    desc:
      "An overflowing toilet that cannot be stopped by shutting off the supply valve behind the toilet indicates a blockage in the drain line or a problem with the main sewer line. Gardner Plumbing technicians diagnose the root cause and clear the obstruction to prevent sewage from spreading further into the home.",
    href: "/services/plumbing/toilet-installation-and-repair",
  },
  {
    icon: Home,
    title: "No Water to the Property",
    desc:
      "A sudden loss of water service — when the utility company confirms there is no outage in the area — can indicate a broken main line, a failed pressure regulator, or a shut-off valve failure. Gardner Plumbing treats complete loss of water service as an emergency and dispatches a technician promptly.",
    href: "/services/plumbing/no-hot-water",
  },
  {
    icon: Droplets,
    title: "Severe Drain Clogs and Flooding",
    desc:
      "A completely blocked main drain line can cause wastewater to back up through multiple fixtures simultaneously. This situation escalates quickly and requires professional hydro-jetting or cable clearing equipment to resolve.",
    href: "/services/plumbing/drain-cleaning",
  },
];

const callNowItems = [
  "Water is actively flooding the home and cannot be stopped by shutting off a local valve.",
  "A gas leak is suspected.",
  "Sewage is backing up into the home through drains, toilets, or floor drains.",
  "The home has no access to running water.",
  "A pipe has burst or a major leak is threatening walls, ceilings, flooring, or electrical systems.",
  "A water heater is actively leaking onto the floor.",
  "A toilet is overflowing and cannot be stopped.",
];

const canWaitItems = [
  "A single faucet is dripping slowly.",
  "One drain is running slowly but is not completely blocked.",
  "A toilet runs continuously but is not overflowing.",
  "Water pressure is slightly lower than normal but water is still flowing.",
  "A water heater is producing lukewarm water but is not leaking.",
];

const steps = [
  {
    num: "01",
    icon: PhoneCall,
    title: "Immediate Answer and Assessment",
    desc: "Your call is answered immediately — 24 hours a day, 7 days a week, 365 days a year. A live dispatcher gathers details about the problem and assesses the severity of the situation. Guidance on steps to take before the technician arrives — such as locating and shutting off the main water supply valve — is provided during the call. There is no voicemail box and no third-party answering service.",
  },
  {
    num: "02",
    icon: Truck,
    title: "Technician Dispatch",
    desc: "The dispatcher identifies the closest available on-call technician and sends them to the property. The caller receives an estimated arrival time. Within Gardner Plumbing's core service area — including Murrieta, Temecula, Riverside, Corona, and surrounding cities — this window is typically 45 minutes.",
  },
  {
    num: "03",
    icon: ListChecks,
    title: "On-Site Diagnosis",
    desc: "Upon arrival, the technician performs a thorough assessment of the problem, identifies the root cause, and explains the findings to the homeowner or property manager in plain language.",
  },
  {
    num: "04",
    icon: ClipboardList,
    title: "Upfront Written Estimate",
    desc: "Before any repair work begins, the technician provides a clear, written estimate that covers all labor and materials. Gardner Plumbing does not begin work without the customer's approval of the quoted price. The price on the written estimate is the price on the invoice.",
  },
  {
    num: "05",
    icon: BadgeCheck,
    title: "Repair and Verification",
    desc: "The technician completes the repair using professional-grade materials, tests the repaired system to confirm it is functioning correctly, and cleans up the work area before leaving. If a follow-up visit is needed for a more complex repair, the technician explains the next steps and timeline clearly.",
  },
];

const promise = [
  {
    icon: CheckCircle,
    title: "30-Day Callback Guarantee",
    desc: "If the same issue recurs within 30 days of our service visit, a Gardner Plumbing technician returns at no charge. Parts and labor are covered.",
  },
  {
    icon: ClipboardList,
    title: "Written Estimate Before Work Begins",
    desc: "The price on the written estimate is the price on the invoice. If anything changes mid-job, we stop, explain, and get your written approval before continuing.",
  },
  {
    icon: DollarSign,
    title: "No Trip Fees, No Pressure",
    desc: "Free in-home estimates. No dispatch fee, no service-call fee, no obligation to proceed.",
  },
  {
    icon: Shield,
    title: "Fully Licensed, Bonded & Insured",
    desc: "CSLB #1073177, fully bonded, fully insured.",
  },
];

const faqs = [
  {
    question: "How quickly does Gardner Plumbing respond to emergency calls?",
    answer:
      "Within Gardner Plumbing's core service area — including Murrieta, Temecula, Menifee, Riverside, Corona, Eastvale, and surrounding cities across Riverside County and neighboring communities — technicians typically arrive within a 45-minute window from the time of the call. Response times to outlying communities depend on traffic conditions and technician location at the time of dispatch.",
  },
  {
    question: "Does someone always answer the phone, even at 3 a.m.?",
    answer:
      "Yes. Gardner Plumbing's phones are answered 24 hours a day, 7 days a week, including holidays. A live dispatcher is available to take your call and begin the intake process immediately. If you need to speak directly with an on-call technician, that option is available. Calls are never sent to voicemail.",
  },
  {
    question: "How many technicians are on call at night and on weekends?",
    answer:
      "Gardner Plumbing maintains a dedicated rotation of on-call technicians for after-hours, weekend, and holiday coverage. The number of technicians on call at any given time is scaled to meet demand across the 25-city service area. Dispatchers prioritize calls based on severity and location to ensure the fastest possible response.",
  },
  {
    question: "Is emergency plumbing service more expensive than a regular appointment?",
    answer:
      "Emergency service calls outside of standard business hours typically include an after-hours dispatch fee in addition to the cost of the repair. Gardner Plumbing provides a full, written estimate before any work begins, so customers know the total cost upfront. There are no hidden charges added after the repair is complete.",
  },
  {
    question: "What should I do before the plumber arrives?",
    answer:
      "If it is safe to do so, shut off the water supply to the affected area. For a localized issue such as a leaking toilet or sink, use the small shut-off valve located behind or beneath the fixture. For a burst pipe or flooding situation, locate the main water shut-off valve for the property and turn it off. Move furniture, electronics, and valuables away from the water. Avoid using electrical outlets or switches near standing water. The dispatcher can walk you through these steps over the phone if needed.",
  },
  {
    question: "Can Gardner Plumbing fix most emergencies in one visit?",
    answer:
      "The majority of common plumbing emergencies — including burst pipes, water heater failures, sewer backups, and overflowing toilets — are resolved during the initial service visit. Gardner Plumbing technicians carry an extensive inventory of parts and materials in their service vehicles. In cases where a specialized part is required or a more complex repair is needed, the technician will stabilize the situation to prevent further damage and schedule the follow-up repair promptly.",
  },
  {
    question: "Does Gardner Plumbing handle gas line emergencies?",
    answer:
      "Yes. Gardner Plumbing's licensed technicians are qualified to locate and repair gas line leaks and damaged gas supply lines. However, if a gas leak is actively occurring, the first step is always to evacuate the building and call the gas utility company (SoCalGas) to shut off the supply at the meter. Once the utility company has made the scene safe, Gardner Plumbing can perform the necessary gas line repairs.",
  },
];

const shutoffValves = [
  {
    icon: Home,
    title: "Main Water Shut-Off Valve",
    desc: "Controls all water entering the property. Typically located near the water meter — often at the front of the property near the street, or inside the garage. Turning this valve off stops all water flow to the home.",
  },
  {
    icon: Droplets,
    title: "Toilet Shut-Off Valve",
    desc: "Located on the wall behind and below the toilet tank. Turning it clockwise stops water flow to the toilet.",
  },
  {
    icon: Wrench,
    title: "Sink Shut-Off Valves",
    desc: "Located in the cabinet under the sink. There are typically two valves — one for hot water and one for cold.",
  },
  {
    icon: Thermometer,
    title: "Water Heater Shut-Off Valve",
    desc: "Located on the cold-water supply line above or near the water heater. Turning this valve off stops water from entering the tank.",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

type EmergencyProps = {
  /** Formatted review count e.g. "923" — from live Google Places API */
  reviewCount?: string
  /** Formatted rating e.g. "4.9" — from live Google Places API */
  ratingLabel?: string
}

export function Emergency({ reviewCount = "900+", ratingLabel = "4.9" }: EmergencyProps) {
  return (
    <div className="min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
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
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div className="text-left animate-fade-in">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Breadcrumbs
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Services", href: "/services" },
                      { label: "Emergency Service" },
                    ]}
                  />
                </div>
              </nav>

              {/* Live dispatcher strip */}
              <div
                className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-red-500/50"
                style={{
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 60%, #B91C1C 100%)`,
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                <span className="text-white font-bold text-sm uppercase tracking-wider">
                  Live Dispatcher Available Now
                </span>
              </div>

              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  24/7 Emergency Plumbing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                24/7 Emergency Plumbing Services in{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Southern California
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-xl">
                Gardner Plumbing Co. provides around-the-clock emergency plumbing across Riverside County and neighboring communities. With{" "}
                <strong className="text-white">30+ years</strong> of experience,{" "}
                <strong className="text-white">{reviewCount} five-star Google reviews</strong>, and a{" "}
                <strong className="text-white">45-minute arrival window</strong> in our core service area — a trained technician can be at your door fast.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: PhoneCall, text: "Live Dispatchers 24/7/365" },
                  { icon: Clock, text: "45-Min Arrival — Core Area" },
                  { icon: Shield, text: "CSLB #1073177 Licensed" },
                  { icon: DollarSign, text: "Written Upfront Estimate" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-red-400 flex-shrink-0" />
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group min-h-[52px]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call (951) 246-4337
                    </span>
                  </Button>
                </a>
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent min-h-[52px]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <ArrowRight className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Get Help Now
                    </span>
                  </Button>
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-400">
                Last Updated: June 2026
              </p>
            </div>

            {/* Right image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertech2.webp"
                  alt="Gardner Plumbing Co. emergency technician arriving on site — Murrieta, CA"
                  width={1000}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">45-Min Arrival Window</div>
                      <div className="text-gray-300 text-xs">Core service area</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alert Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="relative overflow-hidden py-2 sm:py-3"
          style={{
            background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
            boxShadow: `
              inset 0 2px 0 rgba(255,255,255,0.2),
              inset 0 -2px 0 rgba(0,0,0,0.2),
              0 8px 32px rgba(139,0,0,0.4),
              0 -8px 32px rgba(139,0,0,0.3),
              0 12px 24px rgba(0,0,0,0.6),
              0 -12px 24px rgba(0,0,0,0.4)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-white animate-pulse flex-shrink-0" />
                <span className="text-white font-bold text-lg sm:text-xl">
                  Plumbing Emergency?
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a href="tel:9512464337" className="w-full sm:w-auto">
                  <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2 min-h-[44px]">
                    <Phone className="h-5 w-5 text-red-100" />
                    <span className="text-white font-bold text-lg">(951) 246-4337</span>
                  </div>
                </a>
                <span className="text-red-100 font-semibold text-sm sm:text-base">
                  Live Dispatchers Available Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. HOW GARDNER'S EMERGENCY SYSTEM WORKS ──────────────────────── */}
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
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <PhoneCall className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              How Gardner Plumbing's{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Emergency System Works
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gardner Plumbing operates a dedicated emergency dispatch system that runs 24 hours a day, 365 days a year. Here is how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: PhoneCall,
                title: "24/7 Call Answering — Always Available, Never Voicemail",
                desc: "Every call to Gardner Plumbing is answered 24 hours a day, 7 days a week. Live dispatchers and on-call technicians are always reachable — no voicemail box, no third-party answering service.",
              },
              {
                icon: Shield,
                title: "Dedicated On-Call Technicians",
                desc: "Gardner Plumbing maintains a rotating team of on-call technicians available every evening, weekend, and holiday. These are the same experienced, fully licensed plumbers who handle daytime service calls — not a reduced or outsourced crew.",
              },
              {
                icon: Truck,
                title: "Fully Stocked Service Vehicles",
                desc: "Each technician arrives in a fully stocked service truck carrying the parts and tools needed to handle the most common plumbing emergencies. This allows most emergency repairs to be completed in a single visit, without waiting for parts or a follow-up appointment.",
              },
              {
                icon: Clock,
                title: "45-Minute Arrival Window",
                desc: "Within Gardner Plumbing's core service area — including Murrieta, Temecula, Riverside, Corona, and surrounding cities — technicians typically arrive within 45 minutes of the initial call.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className="relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 h-full"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-red-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mt-4 leading-snug">
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <p className="text-gray-300 text-center text-sm leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. COVERAGE AREAS ────────────────────────────────────────────── */}
      <section id="service-area" className="py-16 sm:py-20 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Coverage Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Emergency Plumbing{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Coverage Areas
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gardner Plumbing Co. serves 25 cities across Riverside County and neighboring communities — including Murrieta, Temecula, Menifee, Riverside, Corona, Eastvale, Hemet, Moreno Valley, Perris, and Lake Elsinore. If your city is not listed below, call us directly — coverage for surrounding communities may be available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {coverageGroups.map((group) => (
              <div
                key={group.label}
                className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury overflow-hidden"
              >
                {/* Group header */}
                <div
                  className="px-6 py-4 border-b border-white/10"
                  style={{
                    background: `linear-gradient(135deg, rgba(220,38,38,0.25) 0%, rgba(185,28,28,0.15) 100%)`,
                  }}
                >
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-400 flex-shrink-0" />
                    {group.label}
                  </h3>
                </div>
                {/* Cities */}
                <ul className="p-6 space-y-2">
                  {group.cities.map((city) => (
                    <li key={city} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glassmorphism-dark rounded-2xl p-8 border border-white/10 shadow-luxury text-center">
            <h3 className="text-xl font-bold text-white mb-3">Don't See Your City?</h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Call Gardner Plumbing directly. Dispatchers can confirm response times for your specific location — coverage for surrounding communities is available.
            </p>
            <a href="tel:9512464337">
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg min-h-[44px]">
                <span className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call to Confirm Coverage
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. COMMON EMERGENCIES ────────────────────────────────────────── */}
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
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Emergencies We Handle
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Common Plumbing{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Emergencies We Handle
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The following situations qualify as plumbing emergencies and warrant an immediate call to Gardner Plumbing Co.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {emergencies.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.href} className="block group h-full">
                  <div
                    className="relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 h-full rounded-2xl p-6"
                    style={{
                      backgroundColor: "#202020",
                      backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center group-hover:from-red-600 group-hover:to-orange-500 transition-all duration-500 shadow-lg flex-shrink-0 mt-1">
                        <Icon className="h-7 w-7 text-red-400 group-hover:text-white transition-all duration-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. EMERGENCY VS. CAN WAIT ────────────────────────────────────── */}
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <ListChecks className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Know the Difference
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              What Qualifies as a Plumbing Emergency{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                vs. What Can Wait
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Understanding the difference between a true emergency and a routine repair helps homeowners make informed decisions about when to call for immediate service. When in doubt, call Gardner Plumbing — dispatchers can assess the situation and advise whether immediate dispatch is necessary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Call Now */}
            <div className="glassmorphism-dark rounded-2xl border border-red-500/30 shadow-luxury overflow-hidden">
              <div
                className="px-6 py-5 border-b border-red-500/20"
                style={{
                  background: `linear-gradient(135deg, rgba(139,0,0,0.6) 0%, rgba(220,38,38,0.4) 100%)`,
                }}
              >
                <h3 className="text-white font-bold text-xl flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-300" />
                  Call Now — Immediate Emergency
                </h3>
                <p className="text-red-200 text-sm mt-1">These conditions warrant a call at any hour of the day or night</p>
              </div>
              <ul className="p-6 space-y-4">
                {callNowItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed">
                    <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Can Wait */}
            <div className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury overflow-hidden">
              <div
                className="px-6 py-5 border-b border-white/10"
                style={{
                  background: `linear-gradient(135deg, rgba(55,65,81,0.8) 0%, rgba(31,41,55,0.8) 100%)`,
                }}
              >
                <h3 className="text-white font-bold text-xl flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  Can Wait — Schedule Standard Service
                </h3>
                <p className="text-gray-400 text-sm mt-1">These issues are inconvenient but do not require after-hours emergency dispatch</p>
              </div>
              <ul className="p-6 space-y-4">
                {canWaitItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <CheckCircle className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-6">
                <p className="text-gray-400 text-sm italic">
                  When in doubt, call Gardner Plumbing. A live dispatcher can help assess the situation and advise whether immediate dispatch is necessary or whether scheduling a next-day appointment is appropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHAT TO EXPECT WHEN YOU CALL ─────────────────────────────── */}
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
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <ClipboardList className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              What to Expect When You{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Call Gardner Plumbing
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gardner Plumbing follows a consistent, five-step process for every emergency service call.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative border-none overflow-hidden shadow-luxury rounded-2xl"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                  <div className="relative z-10 flex items-start gap-6 p-6 sm:p-8">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, #8B0000 0%, #DC2626 100%)`,
                        }}
                      >
                        <span className="text-white font-bold text-xs tracking-widest">STEP</span>
                        <span className="text-white font-bold text-xl leading-none">{step.num}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-5 w-5 text-red-400" />
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. THE GARDNER PROMISE ───────────────────────────────────────── */}
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <Star className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                The Gardner Promise
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              The Gardner Promise{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                We Own It
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gardner Plumbing Co. has built a reputation for showing up fast, diagnosing accurately, and fixing problems right the first time — backed by commitments that protect every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {promise.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 rounded-2xl"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                  <div className="relative z-10 flex items-start gap-5 p-6 sm:p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Icon className="h-7 w-7 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust strip */}
          <div className="mt-12 glassmorphism-dark rounded-2xl p-6 border border-white/10 shadow-luxury">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-white">30+</span>
                <span className="text-gray-400 text-sm">Years Serving Southern California</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-white">{reviewCount}</span>
                <span className="text-gray-400 text-sm">Five-Star Google Reviews</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-white">25</span>
                <span className="text-gray-400 text-sm">Cities Served</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-white">45</span>
                <span className="text-gray-400 text-sm">Minute Arrival Window — Core Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLEAN VISIT PROMISE ─────────────────────────────────────────── */}
      <CleanVisitPromise reviewCount={reviewCount} />

      {/* ── 8. EMERGENCY PLUMBING FAQ ────────────────────────────────────── */}
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
                radial-gradient(circle at 15% 85%, rgba(59,130,246,0.1) 0%, transparent 50%),
                radial-gradient(circle at 85% 15%, rgba(220,38,38,0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Emergency Plumbing{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-base text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Get answers about emergency response times, pricing, what to do before we arrive, and gas line emergencies.
            </p>
          </div>

          <div className="mb-16 sm:mb-20">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              {/* Red header */}
              <div
                className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8"
                style={{
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                  boxShadow: `inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.2), 0 8px 32px rgba(139,0,0,0.4)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)`,
                  }}
                />
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                    <HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Questions & Answers</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl"
                      style={{
                        backgroundColor: "#202020",
                        backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                      <div className="relative z-10">
                        <AccordionTrigger className="text-left hover:no-underline text-white hover:text-red-400 data-[state=open]:text-red-400 px-6 sm:px-8 py-6 sm:py-8 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                          <span className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-red-600 group-hover/trigger:to-orange-500 transition-all duration-300 flex-shrink-0">
                              <HelpCircle className="h-4 w-4 text-red-400 group-hover/trigger:text-white transition-colors duration-300" />
                            </div>
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-6 sm:pb-8 pt-0 px-6 sm:px-8 ml-12 border-l-2 border-red-500/20 text-base sm:text-lg leading-relaxed">
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

          {/* Inline CTA */}
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-luxury hover-lift text-center">
            <p className="text-gray-300 mb-6">
              Unsure if it's an emergency? Call and a live dispatcher will guide you through shutting off water or gas and determine whether immediate dispatch is necessary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9512464337">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg border border-red-400/20 min-h-[44px]">
                  <span className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </span>
                </Button>
              </a>
              <Link href="/contact-us">
                <Button className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-xl shadow-lg transition-all duration-300 bg-transparent min-h-[44px]">
                  <span className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5" />
                    Get Help Now
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. PREPARE NOW: KNOW YOUR SHUT-OFF VALVES ────────────────────── */}
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <WrenchIcon className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Be Prepared
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Prepare Now: Know Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Shut-Off Valves
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              One of the most effective ways to limit damage during a plumbing emergency is to know where your water shut-off valves are located before an emergency occurs. Gardner Plumbing recommends that every homeowner locate and test the following valves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {shutoffValves.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 rounded-2xl"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                  <div className="relative z-10 p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 glassmorphism-dark rounded-2xl p-6 border border-red-500/20 shadow-luxury text-center">
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              If you are unsure where any of these valves are located,{" "}
              <strong className="text-white">a Gardner Plumbing dispatcher can walk you through the process over the phone during an emergency call.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div
        className="fixed bottom-0 inset-x-0 lg:hidden z-50 pb-[env(safe-area-inset-bottom)]"
        style={{
          background: `linear-gradient(135deg, #111827 0%, #1f2937 100%)`,
          boxShadow: `0 -4px 24px rgba(0,0,0,0.5)`,
          borderTop: `1px solid rgba(220,38,38,0.3)`,
        }}
      >
        <div className="flex gap-3 px-4 py-3">
          <a href="tel:9512464337" className="flex-1">
            <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-xl min-h-[48px] font-bold">
              <span className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </span>
            </Button>
          </a>
          <Link href="/contact-us" className="flex-1">
            <Button className="w-full border-2 border-red-500/60 text-white bg-transparent hover:bg-red-600/20 rounded-xl min-h-[48px] font-semibold">
              <span className="flex items-center justify-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Get Help
              </span>
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
