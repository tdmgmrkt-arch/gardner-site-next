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

export function CanyonLakeDrainCleaning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emergencyReasons = [
    "Main sewer line failure",
    "Septic system backup",
    "Multiple drains clogged at once",
    "Raw sewage in yard or home",
    "Kitchen grease trap overflow",
    "Shower drain completely blocked",
    "Laundry room flooding from drain",
    "Tree root sewer invasion"
  ];

  const services = [
    {
      icon: Camera,
      title: "Sewer Line Camera Inspection",
      description: "Advanced video technology reveals hidden problems in Canyon Lake sewer lines and drain pipes.",
      features: ["HD video quality", "Exact problem location", "Permanent recording", "Detailed assessment"]
    },
    {
      icon: Droplets,
      title: "Hydro-Jetting Cleaning",
      description: "Powerful water jets remove stubborn blockages and buildup from Canyon Lake residential drains.",
      features: ["Up to 4000 PSI", "Complete cleaning", "Root destruction", "Environmentally safe"]
    },
    {
      icon: Wrench,
      title: "Cable Snaking Service",
      description: "Traditional mechanical snaking clears common drain clogs quickly and affordably.",
      features: ["Multiple cable options", "All drain types", "Fast resolution", "Budget-friendly"]
    },
    {
      icon: Zap,
      title: "Around-the-Clock Emergency",
      description: "24/7 emergency drain service throughout Canyon Lake for urgent plumbing situations.",
      features: ["Always available", "Quick dispatch", "Complete equipment", "No surcharges"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Immediate Service",
      description: "Rapid response throughout Canyon Lake's gated community with same-day availability."
    },
    {
      icon: Shield,
      title: "Fully Licensed",
      description: "California state-licensed plumbers with specialized drain cleaning certification."
    },
    {
      icon: DollarSign,
      title: "Honest Pricing",
      description: "Transparent estimates with complete cost breakdown before starting any work."
    },
    {
      icon: Award,
      title: "Local Expertise",
      description: "30+ years serving Canyon Lake with deep understanding of local plumbing systems."
    }
  ];

  const faqs = [
    {
      question: "Why do Canyon Lake homes have unique drain challenges?",
      answer: "Canyon Lake's gated community features a mix of lakefront properties, hillside homes, and properties on septic systems rather than city sewer. Lakefront homes often deal with additional moisture and soil movement affecting drain lines, while hillside properties face challenges from slopes and landscaping. Many homes also have older plumbing systems that require specialized knowledge to service properly."
    },
    {
      question: "Do you service both city sewer and septic systems in Canyon Lake?",
      answer: "Yes. We're experienced with both Canyon Lake's city sewer connections and the many properties on private septic systems. Our technicians understand the different requirements and regulations for each system type. We can safely clean drains connected to septic systems without damaging the delicate bacterial balance necessary for proper septic function."
    },
    {
      question: "How do you access homes in Canyon Lake's gated community?",
      answer: "We work with Canyon Lake homeowners to arrange access through the gate. When you schedule service, we'll coordinate arrival times and gate entry procedures. For emergency calls, you can provide temporary gate access codes, or we can meet you at the gate entrance. We're familiar with the community's access requirements and make the process smooth."
    },
    {
      question: "Can tree roots from lakeside landscaping damage my drains?",
      answer: "Absolutely. Canyon Lake's lush landscaping, especially mature trees near the lake and throughout hillside properties, often send roots into sewer lines searching for water. These roots can completely block pipes over time. Our video camera inspections identify root intrusions, and hydro-jetting services can cut through and remove roots while thoroughly cleaning your pipes."
    },
    {
      question: "What's included in your drain cleaning service?",
      answer: "Our comprehensive drain cleaning includes initial assessment and problem diagnosis, video camera inspection when needed, selection of appropriate cleaning method (snaking or hydro-jetting), complete blockage removal, verification that water flows properly, cleanup of work area, and detailed explanation of what we found and any preventive recommendations. Everything is included in our upfront price quote."
    },
    {
      question: "How often should Canyon Lake homeowners schedule drain cleaning?",
      answer: "We recommend annual drain cleaning for most Canyon Lake homes, especially properties with mature landscaping, older plumbing systems, or those on septic systems. Lakefront properties may benefit from twice-yearly service due to increased moisture and tree root activity. Regular maintenance prevents emergency situations and extends the life of your plumbing infrastructure."
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
                      { label: "Canyon Lake" }
                    ]}
                  />
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Droplets className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Canyon Lake Drain Cleaning</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Canyon Lake <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> Specialists
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Expert drain cleaning for Canyon Lake's unique gated community. Serving lakefront properties, hillside homes, and all residences with professional solutions for sewer and septic systems.
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
                  alt="Professional drain cleaning service in Canyon Lake, California"
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
                      <div className="text-white font-bold text-sm">Canyon Lake Pros</div>
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
                  Canyon Lake Drain Emergency?
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
                  24/7 Response Available
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
              Professional Drain Cleaning Services in Canyon Lake, CA
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
              <p>
                Canyon Lake's private gated community presents unique plumbing challenges that require specialized knowledge and experience. From lakefront properties dealing with moisture and soil conditions to hillside homes navigating slope-related drainage issues, Gardner Plumbing Company understands the distinct needs of Canyon Lake residences. Our technicians are familiar with navigating the community's access requirements and addressing the specific plumbing infrastructure found throughout this exclusive neighborhood.
              </p>
              <p>
                Many Canyon Lake homes operate on private septic systems rather than city sewer connections, which requires different approaches to drain cleaning. Our team is fully trained in servicing both system types safely and effectively. We understand the importance of protecting your septic system's bacterial balance while thoroughly cleaning drains, and we use methods specifically designed for septic-safe operation. For homes on city sewer, we provide comprehensive <Link href="/services/drain-cleaning" className="text-red-400 hover:text-red-300 underline">drain cleaning services</Link> using the latest technology.
              </p>
              <p>
                The lush landscaping that makes Canyon Lake so beautiful also creates plumbing challenges. Mature trees along the lakefront and throughout hillside properties send invasive roots into sewer lines, causing blockages that worsen over time. Our <Link href="/services/hydro-jetting" className="text-red-400 hover:text-red-300 underline">hydro-jetting services</Link> effectively cut through and remove tree roots while thoroughly scouring pipes clean. We also provide video camera inspections to identify exactly where roots have penetrated your lines and assess overall pipe condition.
              </p>
              <p>
                Emergency drain problems in Canyon Lake require immediate attention, whether it's a backed-up septic system or a main sewer line failure. Our <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">24/7 emergency service</Link> covers the entire Canyon Lake community with rapid response. We coordinate gate access smoothly and arrive fully equipped to handle any drain emergency. When drain cleaning isn't enough and pipes need repair or replacement, we also offer complete <Link href="/services/sewer-and-septic" className="text-red-400 hover:text-red-300 underline">sewer line repair services</Link> to restore your plumbing system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - continuing with same structure as before but keeping it concise for space */}
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
              Specialized <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Drain Services</span> for Canyon Lake
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive drain cleaning solutions designed for Canyon Lake's unique gated community requirements.
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

      {/* Why Choose Us - keeping same structure, abbreviated for space */}
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
                  alt="Professional drain cleaning technician serving Canyon Lake"
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
                    <div className="text-gray-300 text-xs">Canyon Lake Area</div>
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
                Canyon Lake's <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Preferred</span> Drain Professionals
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Experienced with Canyon Lake's gated community access, septic systems, lakefront properties, and unique plumbing infrastructure.
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
              Canyon Lake Drain Cleaning <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">FAQs</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Common questions about drain cleaning in Canyon Lake's unique community.
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Canyon Lake Drain Problems?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our drain specialists understand Canyon Lake's unique requirements. <Link href="/contact-us" className="text-red-400 hover:text-red-300 underline">Contact us</Link> for expert service.
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
                  Request Service
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
                24/7 Emergency Drain Service for{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Canyon Lake
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Drain and sewer emergencies in Canyon Lake require specialists who understand the community. Our emergency team responds quickly with full equipment and gate access coordination.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Emergency Situations:
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
                  alt="Emergency drain service in Canyon Lake"
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
              Expert <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> in Canyon Lake
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Serving Canyon Lake's gated community with specialized drain cleaning for lakefront properties, hillside homes, and all residences.
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
                  Schedule Service
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
