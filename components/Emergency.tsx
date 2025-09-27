"use client";

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
  Calendar,
  MapPin,
  HelpCircle,
  Mail,
  Star,
  Droplets,
  Flame,
  Zap,
  Home,
  Building2,
} from "lucide-react";

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

export function Emergency() {
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

  const emergencies = [
    { icon: Droplets, title: "Burst / Leaking Pipes", desc: "Immediate shutoff & repair to stop water damage.", href: "/services/drain-cleaning" },
    { icon: AlertTriangle, title: "Slab Leaks", desc: "Rapid detection and mitigation to protect your foundation.", href: "/services/leak-detection" },
    { icon: Zap, title: "No Hot Water", desc: "Emergency water heater diagnostics & replacement.", href: "/services/water-heater-service" },
    { icon: Flame, title: "Gas Leaks", desc: "Licensed, safe isolation and repair of gas lines.", href: "/services/gas-lines"},
    { icon: Home, title: "Backed-Up Drains", desc: "Main line stoppages cleared fast — 24/7.", href: "/services/drain-cleaning" },
    { icon: Building2, title: "Commercial Emergencies", desc: "Priority response to keep your business open.", href: "/services/#commercial-services" },
  ];

  const benefits = [
    { icon: Clock, title: "24/7 Availability", desc: "Day, night, weekends, and holidays." },
    { icon: Shield, title: "Licensed & Insured", desc: "Fully vetted technicians and protected work." },
    { icon: DollarSign, title: "Upfront Pricing", desc: "Clear estimates before any work begins." },
    { icon: Star, title: "Top-Rated Local", desc: "Trusted by hundreds of Riverside County customers." },
  ];

  const faqs = [
    {
      question: "What counts as a plumbing emergency?",
      answer:
        "Active leaks, burst pipes, sewage backups, gas smells, no hot water, overflowing fixtures, or anything causing water damage or safety hazards. If you’re unsure, call us — we’ll triage fast.",
    },
    {
      question: "How fast can you arrive?",
      answer:
        "We prioritize true emergencies with the closest on-call tech. Arrival times vary by location and traffic, but we move immediately once dispatched.",
    },
    {
      question: "Do you charge extra for after-hours?",
      answer:
        "We offer fair, transparent emergency rates. You’ll know the cost upfront before we proceed.",
    },
    {
      question: "Can you work with insurance?",
      answer:
        "Yes. We can provide photos and documentation to support your claim and coordinate directly when needed.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="text-left animate-fade-in">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>Services</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-red-400">Emergency Service</span>
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  24/7 Emergency Plumbing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Fast, Professional{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Emergency Plumbing
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Burst pipe? Sewage backup? No hot water? Get rapid, expert help anywhere in Riverside County — day or night. Our <Link href="/services" className="text-red-400 hover:text-red-300 underline">emergency services</Link> follow <a href="https://www.phccweb.org/emergency-response" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">industry protocols</a>.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Rapid Dispatch" },
                  { icon: Phone, text: "Live 24/7 Answering" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: DollarSign, text: "Upfront Pricing" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-red-400" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="tel:9512464337">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call (951) 246-4337
                    </span>
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <span className="flex items-center justify-center gap-3">
                      <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Request Service
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertech2.webp"
                  alt="Emergency plumber responding to a late-night call"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
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
                  Plumbing Emergency?
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a href="tel:9512464337" className="w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
                  <Phone className="h-5 w-5 text-red-100" />
                  <span className="text-white font-bold text-lg">
                    (951) 246-4337
                  </span>
                </div>
                </a>
                <span className="text-red-100 font-semibold text-sm sm:text-base">
                  24/7 Service Available
                </span>
              </div>
            </div>
          </div>
        </div>
        </section>

      {/* What we handle */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Fast Help For{" "}
              <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Critical Problems
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {emergencies.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="block group h-full"
                >
                  <Card
                    className="relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 h-full"
                    style={{
                      backgroundColor: "#202020",
                      backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />
                    <div className="relative z-10">
                      <CardHeader className="text-center pb-4 pt-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-red-600 group-hover:to-orange-500 transition-all duration-500 shadow-lg">
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mt-4 group-hover:text-red-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="px-6 pb-8">
                        <p className="text-gray-300 text-center">{item.desc}</p>
                      </CardContent>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section> 

      {/* Why choose us */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertech2.webp"
                  alt="Emergency service truck dispatching to a job"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              </div>

              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Licensed & Insured</div>
                    <div className="text-gray-300 text-xs">Professional techs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Wrench className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Why Choose Gardner Plumbing Co.
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                When Minutes Matter,{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Call the Pros
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8">
                We’ve helped Riverside County families and businesses through thousands of emergencies. From shutting off water and stabilizing the situation to permanent repairs — we handle it all.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 hover-lift">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-xl flex items-center justify-center group-hover:from-red-600 group-hover:to-orange-500 transition-all duration-300 flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2 group-hover:text-red-100 transition-colors duration-300">
                          {b.title}
                        </h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call Now
                    </span>
                  </Button>
                </a>
                <Link href="/contact-us">
                  <Button className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <span className="flex items-center justify-center gap-3">
                      <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Request Callback
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id ="service-area" className="py-16 sm:py-20 relative overflow-hidden">
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
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Serving All of{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Priority emergency response across the county — fast dispatch to your location.
            </p>
          </div>

          <div className="grid gap-4 mb-12" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {serviceAreas.map((area) => (
              <a
                key={area}
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
              <h3 className="text-2xl font-bold text-white mb-4">Don’t See Your Area?</h3>
              <p className="text-gray-300 mb-6">We may still be able to help. Call to confirm emergency coverage.</p>
              <a href="tel:9512464337">
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

      {/* FAQ */}
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
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Emergency Plumbing{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Get answers about emergency response, pricing, and what to do before we arrive.
            </p>
          </div>

          <div className="mb-16 sm:mb-20">
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
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
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
                          <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">{faq.answer}</div>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Inline CTA */}
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in text-center">
            <p className="text-gray-300 mb-6">
              Unsure if it’s an emergency? Call and we’ll guide you through shutting off water or gas and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9512464337">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </span>
                </Button>
              </a>
              <a href="/contact-us">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl shadow-lg border border-blue-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5" />
                    Request Service
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
                Need{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Emergency Plumbing
                </span>{" "}
                Right Now?
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                We’re ready 24/7. Call now for immediate assistance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg border border-red-400/20 group w-full">
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>
              <a href="/contact-us" className="flex-1">
                <Button size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group bg-transparent w-full">
                  <span className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Message Us
                  </span>
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center text-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">24/7 Emergency</span>
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
    </div>
  );
}
