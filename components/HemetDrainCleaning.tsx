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

export function HemetDrainCleaning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emergencyReasons = [
    "Senior residence drain emergencies",
    "Valley heat-stressed pipe failures",
    "Older infrastructure collapses",
    "Seven Hills subdivision backups",
    "Diamond Valley area clogs",
    "Valle Vista drainage issues",
    "Florida Avenue district problems",
    "San Jacinto River area failures"
  ];

  const services = [
    {
      icon: Camera,
      title: "Aging System Inspection",
      description: "Comprehensive camera inspections for Hemet's older plumbing infrastructure and aging residential systems.",
      features: ["Gentle diagnostics", "Senior-friendly service", "Detailed reporting", "Age-appropriate assessment"]
    },
    {
      icon: Droplets,
      title: "Valley-Adapted Hydro-Jetting",
      description: "Professional hydro-jetting calibrated for Hemet Valley's heat-affected pipes and older drain systems.",
      features: ["Temperature-aware service", "Pressure-controlled", "Aging pipe protection", "Thorough cleaning"]
    },
    {
      icon: Wrench,
      title: "Senior Community Service",
      description: "Respectful, patient drain cleaning for Hemet's substantial retirement and senior community population.",
      features: ["Clear communication", "Accessibility-focused", "Fair pricing", "Trusted service"]
    },
    {
      icon: Zap,
      title: "Valley-Wide Emergency Care",
      description: "24/7 emergency response throughout Hemet Valley with understanding of senior residents' urgent needs.",
      features: ["Rapid assistance", "Patient approach", "Complete solutions", "Always available"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Respectful Service",
      description: "Patient, clear communication with Hemet's senior residents and valley homeowners."
    },
    {
      icon: Shield,
      title: "Aging System Experts",
      description: "Specialized knowledge of older plumbing common throughout Hemet's established neighborhoods."
    },
    {
      icon: DollarSign,
      title: "Senior-Friendly Pricing",
      description: "Fair, transparent rates for Hemet residents on fixed incomes with detailed explanations."
    },
    {
      icon: Award,
      title: "Valley Experience",
      description: "Decades serving Hemet Valley with understanding of heat impacts and aging infrastructure."
    }
  ];

  const faqs = [
    {
      question: "Do you provide senior-friendly drain cleaning service in Hemet?",
      answer: "Absolutely. Hemet's substantial retirement community population means many of our customers are seniors, and we've developed service approaches that respect their specific needs. Our technicians communicate clearly and patiently, explaining exactly what we're doing and why. We understand many seniors live on fixed incomes and provide transparent, detailed pricing so there are never surprises. We take time to answer all questions and ensure customers feel comfortable with recommended work. Our service is accessible, with technicians who understand mobility considerations and respect for homes that have been cared for over many years. We treat Hemet's senior residents with the courtesy and professionalism they deserve."
    },
    {
      question: "Why do older Hemet homes have more frequent drain problems?",
      answer: "Hemet features extensive established neighborhoods where homes have aged gracefully alongside their plumbing systems. Older infrastructure naturally experiences more problems than newer installations. Cast iron and clay pipes common in Hemet's vintage homes can corrode, crack, or collapse over decades. Tree roots from mature Valley landscaping invade aging sewer lines searching for water. Decades of use create mineral buildup that gradually reduces drain capacity. Hemet Valley's extreme summer heat also stresses older pipes through expansion and contraction cycles. We understand these age-related challenges and approach older Hemet homes with techniques specifically designed for aging plumbing. Often, regular preventive maintenance extends the life of older systems significantly."
    },
    {
      question: "Can you work with customers on accessible pricing for fixed incomes?",
      answer: "Yes, we understand many Hemet residents live on retirement income and budget carefully. We provide completely transparent pricing with detailed written estimates before beginning any work, so customers know exactly what they're paying and why. We explain all options, including the difference between essential repairs and optional upgrades, empowering customers to make informed decisions within their budgets. When major work is needed, we discuss phasing approaches that address urgent problems first. We never pressure customers or recommend unnecessary services. Our goal is building long-term relationships with Hemet families based on trust and fair dealing, not maximizing single-job revenue."
    },
    {
      question: "Should I schedule regular drain maintenance for my older Hemet home?",
      answer: "Yes, preventive maintenance becomes increasingly valuable as plumbing systems age. Older Hemet homes benefit significantly from annual or even semi-annual drain cleaning that removes accumulating buildup before it causes complete blockages. Regular maintenance also provides opportunities to inspect pipe condition and identify developing problems while they're still minor and affordable to address. Hemet Valley's summer heat stresses aging pipes, making fall maintenance timing particularly beneficial to address any damage before problems emerge. For seniors on fixed incomes especially, predictable maintenance costs are far preferable to unexpected emergency repairs. We can establish scheduled service that fits your budget and prevents crisis situations."
    },
    {
      question: "How does Hemet Valley's heat affect drainage systems?",
      answer: "Hemet Valley experiences extreme summer temperatures that impact plumbing in several ways. Heat causes pipes to expand, and the subsequent cooling contraction can stress aging joints and connections, particularly in older cast iron and clay systems. Soil around drain lines contracts during hot, dry periods, shifting pipes and creating low spots where debris accumulates. Extreme heat also accelerates tree root growth toward any moisture source, including sewer lines. Valley heat can dry out wax seals and gaskets in older plumbing. We recommend scheduling preventive drain maintenance before and after Hemet's hottest months to address any heat-related stresses and verify your system weathered summer successfully."
    },
    {
      question: "Do you handle both routine maintenance and emergency situations?",
      answer: "Yes, we provide the full spectrum of drain services for Hemet residents. Many customers schedule us for annual preventive maintenance that keeps aging systems functioning reliably. We also understand that drain emergencies happen despite best maintenance efforts, especially in older homes. Our 24/7 emergency service covers all of Hemet Valley because we know a backed-up sewer doesn't respect convenient timing, particularly for senior residents who may have mobility limitations or health concerns. Whether you need scheduled maintenance for your Seven Hills home or emergency response in Diamond Valley, we provide the same respectful, professional service. Building relationships with Hemet families means being there when they need us most."
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
                      { label: "Hemet" }
                    ]}
                  />
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Droplets className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Hemet Drain Cleaning</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Hemet <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> Specialists
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Trusted drain cleaning throughout Hemet Valley. Serving Seven Hills, Diamond Valley, Valle Vista, Florida Avenue area, San Jacinto River neighborhoods, and all of Hemet with senior-friendly, professional service.
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
                  alt="Professional Hemet drain cleaning service"
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
                      <div className="text-white font-bold text-sm">Hemet's Trusted</div>
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
                  Hemet Drain Emergency?
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
                  24/7 Service Available
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
              background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%), linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-justify">
              Trusted Drain Cleaning Services Throughout Hemet Valley
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hemet Valley represents a unique community within Riverside County, characterized by a substantial retirement population, established residential neighborhoods, and infrastructure that reflects the city's settled, mature character. Many Hemet residents are seniors who have lived in their homes for decades, caring for properties that hold deep personal significance. This demographic profile shapes our service approach at Gardner Plumbing Company. We understand that many Hemet customers are on fixed retirement incomes, value clear communication, and appreciate patient, respectful service. Our technicians are trained not just in plumbing technology but in the courtesy and professionalism that Hemet's senior community deserves and expects.
              </p>
              <p>
                Hemet's established neighborhoods throughout Seven Hills, Diamond Valley, Valle Vista, and along the Florida Avenue corridor feature homes with aging plumbing infrastructure that presents specific challenges. Older cast iron and clay sewer lines that have served faithfully for decades now show normal wear, requiring specialized cleaning approaches that preserve remaining pipe integrity while clearing blockages. Hemet Valley's extreme summer heat accelerates aging in these systems, causing expansion and contraction that stresses joints and connections. Mature landscaping with extensive root systems seeks moisture from sewer lines during hot, dry months. Our <Link href="/services/drain-cleaning" className="text-red-400 hover:text-red-300 underline">professional drain cleaning services</Link> address these age-related and climate-related challenges with techniques specifically calibrated for older infrastructure throughout Hemet.
              </p>
              <p>
                Preventive maintenance becomes increasingly valuable as plumbing systems age, making regular drain service particularly beneficial for Hemet homeowners. Annual or semi-annual drain cleaning removes accumulating mineral deposits and debris before they cause complete blockages, extending system life and preventing emergency situations. Our <Link href="/services/hydro-jetting" className="text-red-400 hover:text-red-300 underline">hydro-jetting equipment</Link> is pressure-adjustable to safely clean aging pipes without causing damage. Video camera inspections provide documentation of pipe condition and identify developing problems while they remain manageable and affordable to address. For seniors on fixed incomes, predictable maintenance costs are far preferable to unexpected emergency repairs, making scheduled preventive service an investment in peace of mind.
              </p>
              <p>
                Emergency drain situations require compassionate, professional response regardless of timing. A backed-up sewer creates stress for any homeowner, but particularly for senior residents who may have mobility limitations or health concerns. Our <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">24/7 emergency plumbing service</Link> covers all of Hemet Valley with technicians who understand that emergencies demand both technical expertise and respectful, patient service. When camera inspection reveals pipes damaged beyond effective cleaning, we provide comprehensive <Link href="/services/sewer-and-septic" className="text-red-400 hover:text-red-300 underline">sewer repair and replacement services</Link> with clear explanations and fair pricing. To schedule service or discuss your Hemet property's drainage needs, <Link href="/contact-us" className="text-red-400 hover:text-red-300 underline">contact our experienced team</Link> today.
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
              Specialized <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Drain Solutions</span> for Hemet
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Senior-friendly drain cleaning technology and respectful service for Hemet Valley's established community.
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
                  alt="Gardner Plumbing technician serving Hemet with professional drain cleaning"
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
                    <div className="text-gray-300 text-xs">Serving Hemet Valley</div>
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
                Hemet's <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Trusted</span> Drain Professionals
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our respectful approach and expertise with aging systems make us Hemet Valley's preferred choice for senior residents and established neighborhoods.
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
              Hemet Drain Cleaning <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Answers to common questions from Hemet Valley homeowners about drain cleaning and maintenance.
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need Drain Help in Hemet?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our Hemet drain experts are ready to solve your drainage problems with respectful, professional service. For urgent situations, we provide <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">24/7 emergency service</Link>.
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
              <Link href="/contact-us">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5" />
                    Contact Us
                  </span>
                </Button>
              </Link>
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
                24/7 Emergency Drain Service in{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Hemet Valley
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Drain emergencies strike without warning throughout Hemet Valley. From Seven Hills to Diamond Valley, our compassionate emergency team responds rapidly with complete equipment and respectful service.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  We Handle All Drain Emergencies:
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
                  alt="Emergency drain cleaning response in Hemet"
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
              Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> in Hemet
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Serving Seven Hills, Diamond Valley, Valle Vista, Florida Avenue area, San Jacinto River neighborhoods, and all of Hemet Valley with expert drain solutions.
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
