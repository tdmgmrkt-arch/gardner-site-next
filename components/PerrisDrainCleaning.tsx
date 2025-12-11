"use client";

import {Breadcrumbs} from "@/components/Breadcrumbs";
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
  Droplets,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  DollarSign,
  Wrench,
  Camera,
  Zap,
  Award,
  HelpCircle,
  Mail,
  Star,
  AlertTriangle
} from "lucide-react";

export function PerrisDrainCleaning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emergencyReasons = [
    "Sewage backup into home",
    "Completely clogged main line",
    "Multiple drains backing up simultaneously",
    "Raw sewage smell indoors",
    "Toilet overflow won't stop",
    "Kitchen sink won't drain at all",
    "Standing water in shower/tub",
    "Tree roots blocking sewer"
  ];

  const services = [
    {
      icon: Camera,
      title: "Sewer Camera Inspection",
      description: "High-tech video cameras identify exactly what's blocking your Perris property's drain lines.",
      features: ["Pinpoint accuracy", "Locate collapsed pipes", "Find root intrusion", "Color video recording"]
    },
    {
      icon: Droplets,
      title: "Professional Hydro-Jetting",
      description: "Industrial-strength water pressure completely clears and cleans drain pipes in Perris homes.",
      features: ["4000 PSI capability", "Removes all buildup", "Cuts through roots", "Chemical-free cleaning"]
    },
    {
      icon: Wrench,
      title: "Cable Drain Snaking",
      description: "Traditional but effective drain snaking services for routine clogs and blockages.",
      features: ["Multiple auger sizes", "Immediate relief", "Works on all drains", "Affordable option"]
    },
    {
      icon: Zap,
      title: "24-Hour Emergency Service",
      description: "Emergency drain cleaning available around the clock throughout Perris and surrounding areas.",
      features: ["Night service", "Weekend response", "Holiday availability", "No delay charges"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick response throughout Perris with most jobs completed same-day."
    },
    {
      icon: Shield,
      title: "Insured & Bonded",
      description: "Comprehensive insurance coverage protects your property during all drain work."
    },
    {
      icon: DollarSign,
      title: "Honest Estimates",
      description: "Clear pricing with written estimates before any drain cleaning work begins."
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "30+ years serving Perris with certified, background-checked technicians."
    }
  ];

  const faqs = [
    {
      question: "Why are drain clogs so common in Perris?",
      answer: "Perris sits in an area with naturally high mineral content in the water supply, which causes significant scale buildup inside pipes. Many older neighborhoods in Perris also have aging cast iron or clay sewer pipes that are prone to root intrusion and deterioration. The combination of hard water deposits and older infrastructure makes regular drain maintenance essential for Perris homeowners."
    },
    {
      question: "What areas of Perris do you serve for drain cleaning?",
      answer: "We provide drain cleaning throughout all of Perris, including established neighborhoods near Perris Boulevard, newer developments off the 215 freeway, properties around Perris Lake, and rural areas on the city's outskirts. We're familiar with the unique plumbing challenges in different parts of Perris and arrive prepared with the right equipment for your specific location."
    },
    {
      question: "How long does professional drain cleaning take?",
      answer: "Simple drain cleaning typically takes 30-60 minutes. More complex jobs involving main sewer lines or severe blockages may require 2-3 hours, especially if we need to perform a video inspection first. We'll provide a time estimate when we assess your specific situation. Most Perris homeowners find we complete their drain cleaning faster than expected."
    },
    {
      question: "Should I try chemical drain cleaners before calling?",
      answer: "We strongly advise against chemical drain cleaners. They rarely solve the underlying problem and often damage pipes, especially in older Perris homes with metal piping. The chemicals can also create dangerous fumes and make our work more hazardous. Professional drain cleaning is safer, more effective, and actually costs less than repeatedly buying chemical products that don't work."
    },
    {
      question: "What if my drain clogs again after you clean it?",
      answer: "All our drain cleaning services include a 30-day warranty. If the same drain clogs within 30 days, we'll return to re-clear it at no charge. This rarely happens because we thoroughly clean drains rather than just punching holes through blockages. However, the guarantee provides complete peace of mind for Perris homeowners."
    },
    {
      question: "Can drain cleaning prevent future plumbing problems?",
      answer: "Absolutely. Regular professional drain cleaning removes buildup before it causes complete blockages, prevents sewage backups that lead to water damage, identifies developing problems through camera inspection, and extends the life of your plumbing system. Many Perris homeowners save thousands in avoided emergency repairs through annual preventive drain cleaning."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
              `
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
                      { label: "Drain Cleaning", href: "/services/drain-cleaning" },
                      { label: "Perris" }
                    ]}
                  />
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Droplets className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Perris Drain Cleaning</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> in Perris
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Reliable drain cleaning services throughout Perris, CA. From routine maintenance to emergency sewer backups, we clear clogs fast with professional equipment and experienced technicians you can trust.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Same-Day Service" },
                  { icon: Shield, text: "30-Day Guarantee" },
                  { icon: DollarSign, text: "Upfront Pricing" },
                  { icon: Phone, text: "24/7 Emergency" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-green-400" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9514285551">
                  <Button size="lg" className="min-w-[220px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call (951) 428-5551
                    </span>
                  </Button>
                </a>
                <SchedulerModal/>
              </div>
            </div>

            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/draincleaningserviceintro.webp"
                  alt="Professional drain cleaning service in Perris, California"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Droplets className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Perris Specialists</div>
                      <div className="text-gray-300 text-xs">Licensed & Insured</div>
                    </div>
                  </div>
                </div>
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
              0 8px 32px rgba(139, 0, 0, 0.4)
            `,
          }}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-white animate-pulse flex-shrink-0" />
                <span className="text-white font-bold text-lg sm:text-xl">
                  Perris Drain Emergency?
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <Link href="tel:9514285551">
                  <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
                    <Phone className="h-5 w-5 text-red-100" />
                    <span className="text-white font-bold text-lg">
                      (951) 428-5551
                    </span>
                  </div>
                </Link>
                <span className="text-red-100 font-semibold text-sm sm:text-base">
                  24/7 Emergency Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-justify">
              Perris's Trusted Drain Cleaning Professionals
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Perris homeowners face unique drain challenges due to the area's hard water and aging infrastructure. Whether you're near Perris Lake, along the 215 corridor, or in one of Perris's established residential neighborhoods, Gardner Plumbing Company provides fast, professional drain cleaning that solves problems the first time.
              </p>
              <p>
                Many Perris homes were built decades ago with cast iron or clay sewer pipes that are now reaching the end of their useful life. These older pipes are susceptible to root intrusion from mature trees, corrosion from mineral-laden water, and general deterioration. Our <Link href="/services/hydro-jetting" className="text-red-400 hover:text-red-300 underline">hydro-jetting services</Link> can thoroughly clean these pipes, extending their life and preventing costly replacements. For severely damaged lines, we also provide <Link href="/services/sewer-and-septic" className="text-red-400 hover:text-red-300 underline">sewer repair services</Link>.
              </p>
              <p>
                We use advanced video camera technology to inspect your drain lines before cleaning, identifying exactly what's causing the blockage. This diagnostic approach ensures we use the right method - whether it's cable snaking for simple clogs or high-pressure hydro-jetting for stubborn buildup and root intrusion. You'll see the problem and understand the solution before we begin work.
              </p>
              <p>
                Drain emergencies don't respect schedules. That's why we offer <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">24/7 emergency drain cleaning</Link> throughout Perris. When sewage backs up into your home or a toilet won't stop overflowing, our emergency team responds quickly with fully equipped trucks ready to solve the problem. We understand the urgency and stress of drain emergencies, and we work efficiently to restore your plumbing and protect your property from water damage. For comprehensive <Link href="/services/drain-cleaning" className="text-red-400 hover:text-red-300 underline">drain cleaning solutions</Link>, contact Gardner Plumbing Company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Droplets className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Complete <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Drain Cleaning</span> Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional drain cleaning services for Perris homes and businesses using advanced equipment and proven techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{
                  backgroundColor: '#202020',
                  backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>

                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg">
                          <IconComponent className="h-10 w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertechvanbackground.webp"
                  alt="Professional plumber ready to provide drain cleaning in Perris"
                  width={1000}
                  height={750}
                  className="w-full h-180 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>

              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">30+ Years</div>
                    <div className="text-gray-300 text-xs">Perris Service</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Perris's <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Reliable</span> Drain Cleaning Team
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We understand Perris plumbing systems. Our experience with local water conditions and infrastructure ensures we provide the right solution every time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group hover-lift">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-xl flex items-center justify-center group-hover:from-green-600 group-hover:to-green-500 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-green-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2">{benefit.title}</h4>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-xl shadow-lg border border-green-400/20 group">
                <span className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Free Estimate
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Perris Drain Cleaning <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">FAQs</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Common questions about drain cleaning services in Perris, CA.
            </p>
          </div>

          <div className="mb-16 sm:mb-20">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden">
              <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{
                background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                boxShadow: `inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4)`
              }}>
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
                      className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl"
                      style={{
                        backgroundColor: '#202020',
                        backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>

                      <div className="relative z-10">
                        <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 px-6 sm:px-8 py-6 sm:py-8 transition-colors duration-300 text-base sm:text-lg font-semibold">
                          <span className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center">
                              <HelpCircle className="h-4 w-4 text-blue-400" />
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

          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-luxury text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">More Questions About Drain Cleaning?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our Perris drain cleaning experts are available to answer your questions and provide free estimates. <Link href="/contact-us" className="text-red-400 hover:text-red-300 underline">Contact us today</Link> for fast, professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:9514285551">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    Call (951) 428-5551
                  </span>
                </Button>
              </Link>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg">
                <span className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5" />
                  Schedule Service
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Emergency Service
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Emergency Drain Cleaning in{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Perris, CA
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Sewage backups and drain emergencies require immediate attention. Our 24/7 emergency team serves all of Perris with rapid response and fully equipped service vehicles.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  We Handle These Emergencies:
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
                <a href="tel:9514285551">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Emergency: (951) 428-5551
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertecharrival.webp"
                  alt="Emergency drain cleaning response in Perris"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />
                <div className="absolute top-6 right-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">24/7</div>
                      <div className="text-gray-300 text-xs">Available</div>
                    </div>
                  </div>
                </div>
              </div>
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
            boxShadow: `0 -12px 32px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.6)`
          }}
        >
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> in Perris
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Serving all of Perris including Perris Boulevard, the 215 corridor, Perris Lake area, and surrounding neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="tel:9514285551">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    Call (951) 428-5551
                  </span>
                </Button>
              </a>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg bg-transparent">
                <span className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5" />
                  Get Free Estimate
                </span>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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
                <span className="text-gray-300">5.0 Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LeadForm />
      </Modal>
    </div>
  );
}
