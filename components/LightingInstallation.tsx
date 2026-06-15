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
  Wrench,
  Zap,
  Award,
  HelpCircle,
  MapPin,
  Mail,
  Star,
  AlertTriangle,
  Lightbulb,
  Sun,
  Leaf,
  ChefHat,
} from "lucide-react";
import { ImagePromptPlaceholder } from "./ImagePromptPlaceholder";

// ─── Image prompt constants (sourced from seo/electrical-image-prompts/lighting-installation.md) ───

const HERO_PROMPT =
  "Photo of an electrician on a stepladder installing recessed LED ceiling lights in a modern Inland Empire home interior, ceiling-up perspective showing the tech working overhead. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Flathead screwdriver in hand, recessed housing partially seated in drywall cutout, new LED trim rings on adjacent cans already installed. Warm interior LED light mixing with ambient daylight from nearby windows. Calm, mid-task posture — not posed. 50mm equivalent lens, shallow depth of field. Cinematic realism, documentary photography style. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no excessive lens flare, no exposed live wires (safety implication), no obvious shock or spark theatrics, no plumbing tools or pipes, no HVAC equipment, no green grass lawn, no snow, no city skyline";

const HERO_REF =
  "Attach gardnertecharrival.webp or gardnertecharrival2.webp — natural daylight field-work posture; the reference carries face and uniform style data. Do not describe face, age, or ethnicity in the prompt — the reference handles it.";

const BEFORE_AFTER_PROMPT =
  "Split-scene product photograph, single frame divided at vertical center. LEFT HALF: dated incandescent ceiling fixture with yellowed plastic globe, dim warm light, slightly discolored ceiling around the base, flat even light exposing age. RIGHT HALF: same ceiling location after upgrade — clean recessed LED can light installed flush, bright crisp white light cone below, modern ceiling trim ring, no discoloration. Seamless lighting match across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral drywall ceiling background.";

const BEFORE_AFTER_NEGATIVE =
  "no people, no hands visible, no text overlay, no cartoon, no split-screen border or line artifact between halves, no wildly different lighting between left and right, no stock photo softness, no watermark, no plumbing fixtures, no HVAC vents";

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
  "Burning smell from a light fixture or switch",
  "Circuit breaker tripping when lighting is turned on",
  "Sparking at a fixture or outlet",
  "Flickering lights across multiple rooms",
  "Hot switch plate or outlet cover",
  "Outdoor fixture causing GFCI trips",
  "Complete circuit failure after fixture install",
  "Buzzing or crackling from light switch",
];

const services = [
  {
    icon: Lightbulb,
    title: "Recessed & LED Lighting",
    description:
      "Recessed can installation and LED retrofit in kitchens, living rooms, hallways, and bedrooms — energy-efficient and code-compliant.",
    features: [
      "New Recessed Can Install",
      "LED Retrofit Conversion",
      "Dimmer Switch Wiring",
      "Circuit Load Check",
    ],
  },
  {
    icon: Sun,
    title: "Outdoor & Security Lighting",
    description:
      "Exterior fixtures, floodlights, and motion-sensor security lighting for driveways, entryways, and garage areas.",
    features: [
      "Exterior Fixture Install",
      "Motion Sensor Lighting",
      "Floodlight Wiring",
      "GFCI-Protected Circuits",
    ],
  },
  {
    icon: Leaf,
    title: "Landscape & Patio Lighting",
    description:
      "Inland Empire backyards demand outdoor lighting. Low-voltage landscape systems, string light circuits, and patio fixture wiring for year-round outdoor living.",
    features: [
      "Low-Voltage Landscape",
      "Patio String Light Circuit",
      "Pool Area Lighting",
      "Pathway & Garden Lights",
    ],
  },
  {
    icon: ChefHat,
    title: "Under-Cabinet & Specialty Lighting",
    description:
      "Under-cabinet kitchen lighting, accent lighting, and task lighting for remodels and kitchen upgrades — wired cleanly into existing circuits.",
    features: [
      "Under-Cabinet Wiring",
      "Accent & Cove Lighting",
      "Dedicated Circuit Add",
      "Switch Loop Installation",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Same-Day Installation",
    description:
      "Most lighting jobs — recessed installs, fixture swaps, outdoor lighting — are completed the same day you call.",
  },
  {
    icon: Shield,
    title: "Licensed Electricians",
    description:
      "Every technician carries a valid CA electrical license and passes background verification before entering your home.",
  },
  {
    icon: DollarSign,
    title: "Upfront, Written Pricing",
    description:
      "You get a written quote before any work begins. The price on the quote is the price on the invoice.",
  },
  {
    icon: Award,
    title: "Multi-Trade Coordination",
    description:
      "Need lighting installed alongside plumbing or HVAC work? Our multi-trade team coordinates all three — one call, one schedule.",
  },
];

const faqs = [
  {
    question: "How much does recessed lighting installation cost in Murrieta?",
    answer: (
      <>
        Recessed lighting installation in the Murrieta area typically runs
        $150–$300 per fixture for a standard installation — that includes the
        fixture, wiring, and switch loop if needed. Costs rise when walls need
        to be cut for new wiring runs or when the existing circuit requires a
        dedicated breaker. We provide a written quote before any work starts. If
        you&apos;re converting 6–8 existing fixtures to LED recessed cans, most
        homeowners in the IE pay between $900 and $1,800 for the complete
        project.
      </>
    ),
  },
  {
    question: "Can I add recessed lighting without cutting into my ceiling?",
    answer: (
      <>
        In most Murrieta homes, shallow LED wafer fixtures can be installed
        without cutting into the ceiling above — they sit flush with a minimal
        cutout and connect to existing wiring runs. That said, adding new
        circuits or moving fixture locations almost always requires some ceiling
        access. Our electricians assess your existing wiring and ceiling
        structure before committing to an approach. See our{" "}
        <Link
          href="/services/electrical/outlets-and-switches"
          className="text-red-400 hover:text-red-300 underline"
        >
          outlets and switches
        </Link>{" "}
        page if you also need outlet placement as part of a larger room refresh.
      </>
    ),
  },
  {
    question:
      "What's the difference between LED retrofit kits and full recessed can replacement?",
    answer:
      "LED retrofit kits screw directly into an existing recessed can housing — they update the fixture to LED without replacing the can itself. Full replacement involves removing the old housing and installing a new one. Retrofits are faster and less disruptive. Full replacements are the right call when the existing housings are damaged, improperly rated for insulation contact, or too old to seal properly. Our electricians will tell you which approach makes sense before the job starts, not after.",
  },
  {
    question: "Do I need a permit for lighting installation in Murrieta?",
    answer:
      "Adding new circuits or moving a circuit breaker for lighting requires a permit from the City of Murrieta Building & Safety Division. Replacing like-for-like fixtures on existing circuits generally does not. Our electricians pull all required permits before work begins — we handle the paperwork, the inspection scheduling, and the final sign-off. You don't need to coordinate with the city separately.",
  },
  {
    question: "Can outdoor lighting be added to my existing electrical panel?",
    answer: (
      <>
        In most cases, yes. Outdoor lighting circuits draw relatively low
        amperage, and most Murrieta homes built after 1990 have capacity for at
        least one or two new exterior circuits. Homes with older 100-amp panels
        or panels that are already close to capacity may need a{" "}
        <Link
          href="/services/electrical/electrical-panel-upgrade"
          className="text-red-400 hover:text-red-300 underline"
        >
          panel upgrade
        </Link>{" "}
        before additional outdoor lighting is added safely. We check your panel
        capacity as part of the quote — no surprises on install day.
      </>
    ),
  },
  {
    question: "How do smart dimmers work with LED lighting?",
    answer: (
      <>
        Smart dimmers require LED bulbs that are rated as &quot;dimmable&quot;
        — not all LEDs are. A standard dimmer on a non-dimmable LED causes
        flickering, buzzing, or early bulb failure. Our electricians verify
        bulb-dimmer compatibility before installation and recommend Lutron or
        Leviton dimmers that work reliably with the fixtures we install. If you
        want full scene control, see our{" "}
        <Link
          href="/services/electrical/smart-home-electrical"
          className="text-red-400 hover:text-red-300 underline"
        >
          smart home wiring services
        </Link>{" "}
        — we wire smart switches and dimmers as part of broader home automation
        infrastructure.
      </>
    ),
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function LightingInstallation() {
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
                      { label: "Lighting Installation" },
                    ]}
                  />
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Lightbulb className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Licensed Electrical Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                Lighting Installation in Murrieta —{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Indoor, Outdoor & Landscape
                </span>
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                Last Updated: {lastUpdated}
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Licensed electricians install recessed lighting, LED retrofits,
                and outdoor fixtures across the Inland Empire — one visit, clean
                work, no mess left behind.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Lightbulb, text: "Indoor & Outdoor Installs" },
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
                  src="/lighting-installation-hero.webp"
                  alt="Gardner electrician installing recessed LED ceiling lights in a Murrieta home"
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
                      <Lightbulb className="h-4 w-4 text-white" />
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
                  Flickering lights or a circuit that won&apos;t power a new fixture?
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
                  Same-day diagnosis · Murrieta
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
              <Lightbulb className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Comprehensive{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
                Lighting Installation
              </span>{" "}
              Services in the Inland Empire
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Inland Empire homes run the range — tract homes from the &apos;90s
              with outdated fluorescent cans, newer builds ready for smart
              dimmer scenes, and sprawling backyards that need landscape and
              security lighting. Our electricians handle the full scope of
              lighting installation, from a single recessed light swap to a
              whole-home LED conversion. View{" "}
              <Link
                href="/services/electrical/fixtures"
                className="text-red-400 hover:text-red-300 underline"
              >
                all fixture and installation services
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
                  What Changes After a Professional Lighting Installation
                </h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "Fixtures mounted level and sealed — no gaps around ceiling trim",
                    "Wiring run inside walls — no exposed conduit or surface channels",
                    "Circuit load verified to code before installation completes",
                    "Dimmer compatibility confirmed with LED bulb type",
                    "All junction boxes secured with covers — no open boxes",
                    "Final switch test run before the electrician leaves your home",
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
                    src="/lighting-installation-before-after.webp"
                    alt="Before and after lighting upgrade showing dated incandescent fixture replaced with recessed LED by Gardner Electrical in Murrieta"
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
                  alt="Gardner Plumbing Co. electrician and service van ready for lighting installation"
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
                    <div className="text-white font-bold text-sm">300+</div>
                    <div className="text-gray-300 text-xs">
                      Lighting Projects Completed
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
                for Lighting
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                Gardner Plumbing Co. is a licensed electrical contractor serving
                Murrieta, Temecula, Menifee, and the greater Inland Empire (CA
                Contractor&apos;s License{" "}
                <span className="text-yellow-400 font-semibold">
                  &#123;&#123;CSLB_C10_LICENSE_TBD&#125;&#125;
                </span>
                ). Our electricians have completed over 300 lighting projects
                across Riverside County — recessed retrofits in Canyon Lake,
                landscape lighting systems in Temecula wine country, and full
                kitchen lighting overhauls in Menifee and Wildomar. You can also{" "}
                <Link
                  href="/services/electrical/ceiling-fan-installation"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  add ceiling fan installation
                </Link>{" "}
                alongside your lighting upgrade.
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
              Lighting installation service is available across the Inland
              Empire, with fast response times from our Murrieta base. We cover
              Temecula, Menifee, Perris, Canyon Lake, Lake Elsinore, Corona,
              Moreno Valley, Riverside, and Hemet — same-day availability
              throughout.
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
              Lighting Installation{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions and Answers
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about lighting installation in
              Murrieta and the Inland Empire.
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
                are standing by to answer your questions and schedule your
                lighting installation. Need immediate help? Call our{" "}
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
                  Lighting or Wiring Service
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Some lighting and wiring issues cannot wait. A burning smell
                from a fixture, a circuit that keeps tripping when a light is
                switched on, or a sparking outlet near a new installation are
                all situations that need same-day attention. Our line is live
                around the clock.
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
                  alt="Emergency electrical service — Gardner electrician responding to urgent lighting fault"
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
                  Upgrade Your Lighting Today?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Same-day lighting installation across Murrieta, Temecula, and
                the Inland Empire. Upfront pricing, licensed electricians, and a
                line that picks up. Call now or schedule online.
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
