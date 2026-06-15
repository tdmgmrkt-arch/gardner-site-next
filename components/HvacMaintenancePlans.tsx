"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
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
} from "lucide-react";
import { ImagePromptPlaceholder } from "./ImagePromptPlaceholder";

// ─── Image prompt constants (sourced from seo/hvac-image-prompts/hvac-maintenance-plans.md) ───

const HERO_PROMPT =
  "Photo of an HVAC technician standing beside a residential furnace in a garage utility area, holding a clipboard with an inspection checklist, reviewing completed checkboxes in an organized, professional manner. Technician is wearing a light gray button-up work shirt with a red Gardner Plumbing Co. patch on the left chest, navy work pants, dark navy ball cap with red Gardner logo, black work boots, red Milwaukee tool bag on hip. Clean working furnace behind him, tools organized nearby, calm and methodical posture suggesting scheduled preventive service. Warm garage ambient light, concrete floor. 50mm equivalent lens, documentary photography style. No studio lighting. Style and likeness of attached reference image.";

const HERO_NEGATIVE =
  "no stock photo look, no white lab coat, no safety vest, no Carhartt tan jacket, no orange or yellow hi-vis vest, no cartoon, no illustration, no text overlay, no watermark, no visible gas flames or fire, no emergency or urgent-repair posture, no excessive lens flare";

const HERO_REF =
  "Attach the two real Gardner team reference photos (provided 2026-06-12) — uniform & face/likeness reference. Don't describe face, age, or ethnicity.";

const BEFORE_AFTER_PROMPT =
  "Split-scene product photograph, single frame divided at vertical center. LEFT HALF: a flat-lay of an overdue service reminder notice and a crumpled, handwritten list of repair costs — suggesting reactive, unplanned HVAC spending. RIGHT HALF: a clean flat-lay of a professional HVAC maintenance plan service agreement document beside a small organized toolkit and a branded service checklist card — suggesting organized, scheduled care. Consistent soft top-down lighting across both halves, straight-on 35mm lens, no people, no hands, technical documentation style. Neutral gray surface, documents sharp and legible in composition but no actual readable text detail needed.";

const BEFORE_AFTER_NEGATIVE =
  "no people, no hands visible, no readable text or fine-print legible, no cartoon, no split-screen border or line artifact, no wildly different lighting between halves, no stock photo softness, no watermark, no dramatic emergency scenes, no fire, no flooded rooms";

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
  "AC failure in summer — plan members dispatched first",
  "Furnace failure in winter — priority same-day response",
  "Refrigerant leak discovered — plan covers leak detection",
  "Capacitor or contactor failure — plan discount applies",
  "Igniter failure mid-season — plan discount applies",
  "Heat exchanger cracked — plan member repair quote first",
  "Thermostat failure — priority scheduling",
  "System not responding — 24/7 emergency line available",
];

const services = [
  {
    icon: Shield,
    title: "Basic Plan",
    description:
      "Annual furnace OR AC tune-up — one visit, one system. Ideal for homeowners who want one system covered and handle the other separately.",
    features: [
      "1 System Tune-Up Per Year",
      "Safety Inspection Included",
      "Plan Member Discount on Repairs",
      "Flexible Scheduling",
    ],
  },
  {
    icon: Award,
    title: "Premium Plan",
    description:
      "Two annual visits — one AC tune-up in spring, one furnace tune-up in fall. Both systems covered under one agreement. The most popular plan for Inland Empire homeowners.",
    features: [
      "2 Annual System Tune-Ups",
      "Spring AC + Fall Furnace Visit",
      "Priority Scheduling",
      "15% Discount on Repairs",
    ],
  },
  {
    icon: Zap,
    title: "Ultimate Plan",
    description:
      "Everything in Premium plus an annual duct inspection, filter replacements, and front-of-line dispatch for any repair call — including nights and weekends.",
    features: [
      "2 Annual Tune-Ups",
      "Annual Duct Inspection",
      "Filter Replacements Included",
      "Priority Emergency Dispatch",
    ],
  },
  {
    icon: Wrench,
    title: "What Every Plan Includes",
    description:
      "Every tier includes a licensed technician visit, full safety inspection, combustion analysis on furnace visits, and refrigerant check on AC visits.",
    features: [
      "Licensed Technician Visit",
      "Full Safety Inspection",
      "Combustion Analysis (Furnace)",
      "Refrigerant Check (AC)",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Never Miss a Tune-Up",
    description:
      "We reach out to schedule your visits — you don't have to remember. Spring AC service and fall furnace service happen automatically.",
  },
  {
    icon: Shield,
    title: "Priority Emergency Scheduling",
    description:
      "Plan members move ahead of the general call queue. In summer heat or a December cold snap, that matters — average plan-member response is under 90 minutes.",
  },
  {
    icon: DollarSign,
    title: "Repair Discounts Built In",
    description:
      "Premium and Ultimate plan members receive a minimum 15% discount on any repair, applied automatically. Most members recover the plan cost in their first repair call.",
  },
  {
    icon: Award,
    title: "Both Systems, One Agreement",
    description:
      "No separate contracts for heating and cooling. One agreement, one annual renewal, two visits. Cancel anytime with 30 days' notice.",
  },
];

const faqs = [
  {
    question:
      "What is the difference between an HVAC maintenance plan and a furnace tune-up?",
    answer: (
      <>
        A furnace tune-up is a single annual visit — you call, we come out, we
        service your furnace, you receive an invoice. That&apos;s it. An HVAC
        maintenance plan is an ongoing service agreement covering both your
        heating and cooling systems under one contract. You enroll once, and we
        schedule two visits per year going forward — spring AC service and fall
        furnace service — with priority scheduling and repair discounts applied
        automatically. If you only need your furnace serviced this year, our{" "}
        <Link
          href="/services/hvac/furnace-maintenance"
          className="text-red-400 hover:text-red-300 underline"
        >
          furnace maintenance service
        </Link>{" "}
        is the right choice. If you want both systems covered year-round without
        remembering to schedule, the plan is the better fit.
      </>
    ),
  },
  {
    question: "How much does an HVAC maintenance plan cost in Murrieta?",
    answer:
      "Plan pricing varies by tier — Basic, Premium, and Ultimate — and is quoted based on system type and age. Most Inland Empire homeowners find the Premium plan (two annual visits, priority scheduling, 15% repair discount) pays for itself after one avoided emergency repair call. Call (951) 246-4337 or submit the estimate form and we'll quote your specific system within 24 hours. Pricing is locked for 12 months at enrollment.",
  },
  {
    question:
      "What is included in the spring AC visit under the maintenance plan?",
    answer: (
      <>
        The spring AC tune-up covers: refrigerant pressure check and recharge if
        low, coil cleaning (evaporator and condenser), capacitor and contactor
        testing, electrical connection inspection, thermostat calibration, and
        airflow measurement at supply registers. If low refrigerant is found, we
        locate the leak first before recharging — plan members receive the leak
        detection at no additional charge. See the{" "}
        <Link
          href="/services/hvac/ac-maintenance"
          className="text-red-400 hover:text-red-300 underline"
        >
          AC maintenance page
        </Link>{" "}
        for the full checklist.
      </>
    ),
  },
  {
    question:
      "What is included in the fall furnace visit under the maintenance plan?",
    answer: (
      <>
        The fall furnace tune-up covers: combustion analysis and CO output
        testing, heat exchanger inspection, burner cleaning and adjustment, gas
        pressure verification, igniter amp draw test, flame sensor cleaning,
        blower motor inspection, and thermostat calibration. The CO safety test
        is included on every furnace visit — not an add-on. If the inspection
        reveals a repair need, plan members receive a written quote and the
        applicable discount before work begins. See the{" "}
        <Link
          href="/services/hvac/furnace-maintenance"
          className="text-red-400 hover:text-red-300 underline"
        >
          furnace maintenance page
        </Link>{" "}
        for the full checklist.
      </>
    ),
  },
  {
    question: "Can I cancel my HVAC maintenance plan at any time?",
    answer:
      "Yes. Plans are cancellable with 30 days' written notice. There is no early termination penalty if you cancel after your first completed visit. If you cancel before the first visit, you receive a full refund. We don't use lock-in contracts — if the plan isn't working for you, you cancel. Most members renew annually; average plan retention across our Riverside County customer base is over 3 years.",
  },
  {
    question: "Do you offer a combined HVAC and plumbing maintenance plan?",
    answer: (
      <>
        Our HVAC maintenance plans cover heating and cooling systems. We also
        offer a separate{" "}
        <Link
          href="/services/maintenance-plans"
          className="text-red-400 hover:text-red-300 underline"
        >
          plumbing maintenance plan
        </Link>{" "}
        covering water heater, shut-off valves, drain health, and other home
        plumbing systems. Both plans can run simultaneously — many homeowners
        carry both as a complete home comfort package. Call to ask about bundle
        pricing when enrolling in more than one plan.
      </>
    ),
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function HvacMaintenancePlans() {
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
                      { label: "HVAC", href: "/services/hvac" },
                      { label: "HVAC Maintenance Plans" },
                    ]}
                  />
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  HVAC Service Agreement
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                HVAC Maintenance Plan in Murrieta —{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Annual Heating
                </span>{" "}
                and Cooling Service
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                Last Updated: {lastUpdated}
              </p>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Two service visits per year — one for your AC before summer, one
                for your furnace before winter — under a single annual agreement
                with priority scheduling and plan discounts.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "2 Annual Service Visits" },
                  { icon: Shield, text: "Priority Scheduling" },
                  { icon: DollarSign, text: "Plan Member Discounts" },
                  { icon: Phone, text: "Easy Enrollment" },
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
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="min-w-[220px] w-full justify-center sm:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-green-400/20 group"
                >
                  <span className="flex items-center justify-center gap-3">
                    Enroll Now
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Column — Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/hvac-maintenance-plans-hero.webp"
                  alt="Gardner HVAC technician reviewing maintenance checklist during scheduled service plan visit in Murrieta Inland Empire"
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
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        HVAC Service Agreement
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
                  Tired of reactive repairs?
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
                  An HVAC plan keeps heating and cooling running year-round
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
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                Plan Tiers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              What an{" "}
              <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                HVAC Maintenance Plan
              </span>{" "}
              Covers
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              An HVAC maintenance plan is a subscription service agreement —
              not a one-time service call. You enroll, and we schedule two
              visits per year: one AC tune-up in the spring before Inland Empire
              heat arrives, and one furnace tune-up in the fall before heating
              season. Plan members also receive priority scheduling and discounts
              on any repairs needed between visits. View{" "}
              <Link
                href="/services/hvac/heating"
                className="text-red-400 hover:text-red-300 underline"
              >
                all heating services
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
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>

                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600/30 to-blue-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-green-600 group-hover:to-blue-500 transition-all duration-500 shadow-lg">
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-green-400 group-hover:text-white transition-all duration-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-100 transition-colors duration-300">
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
                  What Changes When You Join an HVAC Maintenance Plan
                </h3>
                <div className="space-y-4 text-gray-300">
                  {[
                    "Both AC and furnace serviced annually — no scheduling to remember",
                    "Priority dispatch — plan members move to the front of the line",
                    "Plan-member discount applied automatically to any repair invoice",
                    "Combustion analysis every fall — CO safety confirmed before heating season",
                    "Refrigerant pressure verified every spring — no surprise cooling failures in July",
                    "Service records maintained — documentation for warranty and home sale",
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
                    src="/hvac/hvac-maintenance-plans-before-after.webp"
                    alt="Before and after concept showing reactive HVAC repair costs versus organized Gardner HVAC maintenance plan service in the Inland Empire"
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
                  alt="Gardner Plumbing Co. HVAC technician and service van ready for maintenance plan service"
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
                    <div className="text-white font-bold text-sm">500+</div>
                    <div className="text-gray-300 text-xs">
                      Active Maintenance Plans
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
                  Why Choose Our HVAC Team
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Why Inland Empire Homeowners{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  Choose Our
                </span>{" "}
                HVAC Maintenance Plans
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                Gardner Plumbing Co. is a licensed HVAC contractor serving
                Murrieta, Temecula, Menifee, and the greater Inland Empire (CA
                Contractor&apos;s License{" "}
                <span className="text-yellow-400 font-semibold">
                  &#123;&#123;CSLB_C20_LICENSE_TBD&#125;&#125;
                </span>
                ). Over 500 active maintenance agreements cover homes across
                Riverside County — from Temecula to Hemet. An HVAC maintenance
                plan is separate from a standalone furnace tune-up or AC
                tune-up. If you only want one system serviced this year, see our
                individual{" "}
                <Link
                  href="/services/hvac/furnace-maintenance"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  furnace maintenance
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/hvac/ac-maintenance"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  AC maintenance
                </Link>{" "}
                pages.
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
                  Enroll Now
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
              HVAC maintenance plan enrollment is available for homeowners
              across the Inland Empire, with service dispatched from our
              Murrieta base. We cover Temecula, Menifee, Perris, Canyon Lake,
              Lake Elsinore, Corona, Moreno Valley, Riverside, and Hemet.
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
              HVAC Maintenance Plan{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions and Answers
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about HVAC maintenance plans in
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
                Can&apos;t find what you&apos;re looking for? Call us at{" "}
                <Link
                  href="tel:9512464337"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  (951) 246-4337
                </Link>{" "}
                and we&apos;ll walk you through plan options for your specific
                HVAC system. Enrollment takes about 5 minutes.
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
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Plan Member Benefits
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                What Happens When a{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Plan Member Needs Emergency Repair
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A maintenance plan doesn&apos;t prevent every failure — but it
                changes how you experience one. Plan members skip the standard
                call queue. Premium and Ultimate members receive front-of-line
                emergency dispatch. Our dedicated line is live 24/7. When an AC
                fails in July or a furnace fails in December, plan members get
                there faster.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Plan Member Emergency Scenarios:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {emergencyReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
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
                  alt="Gardner HVAC service team arriving for priority emergency dispatch for plan member in Murrieta"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />

                {/* Floating Emergency Badge */}
                <div className="absolute top-6 right-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Under 90 Min</div>
                      <div className="text-gray-300 text-xs">
                        Plan Member Response
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
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Ready to Enroll in an{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  HVAC Maintenance Plan?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                HVAC maintenance plans covering Murrieta, Temecula, and the
                Inland Empire. Two annual visits, priority scheduling, and
                plan-member repair discounts. Call now or enroll online — our
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
                  Enroll Now
                </span>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center text-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">2 Visits Per Year</span>
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
