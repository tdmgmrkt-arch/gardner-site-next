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

export function MenifeeDrainCleaning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emergencyReasons = [
    "Sewer line completely blocked",
    "Water backing up from drains",
    "Foul sewage odors indoors",
    "Multiple fixtures not draining",
    "Bathtub or shower flooding",
    "Basement drain backup",
    "Main line obstruction",
    "Storm drain blockage"
  ];

  const services = [
    {
      icon: Zap,
      title: "Emergency Drain Clearing",
      description: "Urgent drain cleaning available 24/7 throughout Menifee for critical plumbing emergencies.",
      features: ["Immediate response", "Nights & weekends", "Fully equipped trucks", "Expert technicians"]
    },
    {
      icon: Droplets,
      title: "Hydro-Jetting Service",
      description: "High-pressure water jetting thoroughly cleans drain pipes in Menifee homes and businesses.",
      features: ["Powerful cleaning", "Removes all buildup", "Safe for pipes", "Long-lasting results"]
    },
    {
      icon: Wrench,
      title: "Mechanical Drain Snaking",
      description: "Traditional cable snaking provides effective, affordable drain cleaning for common clogs.",
      features: ["Cost-effective", "Proven method", "Various cable types", "Quick results"]
    },
    {
      icon: Camera,
      title: "Video Camera Inspection",
      description: "See inside your pipes with HD video inspection technology that finds hidden problems.",
      features: ["Accurate diagnosis", "Locate damage", "Digital records", "Prevention planning"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Serving Menifee with fast dispatch and typically same-day service availability."
    },
    {
      icon: Shield,
      title: "Certified & Insured",
      description: "State-certified plumbers with full liability insurance for your complete protection."
    },
    {
      icon: DollarSign,
      title: "Clear Pricing",
      description: "Detailed written estimates with no hidden fees before we begin drain cleaning."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Three decades of successful drain cleaning throughout Menifee and Riverside County."
    }
  ];

  const faqs = [
    {
      question: "What makes Menifee drain clogs different from other areas?",
      answer: "Menifee's mix of older and newer construction creates unique challenges. Established areas around Newport Road have aging sewer systems vulnerable to root intrusion, while newer developments near I-215 sometimes experience issues from construction debris or improper installation. Additionally, Menifee's hard water accelerates mineral buildup in pipes throughout the city."
    },
    {
      question: "How do I know if I need hydro-jetting versus regular drain snaking?",
      answer: "Hydro-jetting is recommended for recurring clogs, slow drainage throughout your home, visible grease buildup, or main sewer line problems. Regular snaking works well for isolated clogs in single fixtures. During our initial assessment, we'll inspect your drains and recommend the most effective and economical solution for your specific situation in Menifee."
    },
    {
      question: "What parts of Menifee do you service for drain cleaning?",
      answer: "We service all of Menifee including Sun City, Quail Valley, Heritage Lake, Wheatfield, Newport Road corridor, areas near Menifee Town Center, and all neighborhoods throughout the city. Our technicians are familiar with the infrastructure differences across Menifee and come prepared for local plumbing characteristics."
    },
    {
      question: "Is professional drain cleaning worth the cost?",
      answer: "Absolutely. Professional drain cleaning prevents expensive emergency repairs, protects your home from water damage caused by backups, extends the life of your plumbing system, and actually costs less over time than repeated use of chemical cleaners that don't solve underlying problems. Most Menifee homeowners find professional cleaning saves money in the long run."
    },
    {
      question: "How can I prevent drains from clogging in my Menifee home?",
      answer: "Install drain screens to catch hair and debris, never pour grease down kitchen drains, run hot water after disposal use, schedule annual professional drain cleaning, avoid flushing anything except toilet paper, and have trees near sewer lines inspected regularly. We provide customized prevention plans based on your home's age, location, and plumbing configuration."
    },
    {
      question: "Do you guarantee your drain cleaning work?",
      answer: "Yes. Every drain cleaning job includes our 30-day guarantee. If the same drain clogs again within 30 days, we'll return to address it at no additional cost. This warranty demonstrates our commitment to thorough, quality work that solves problems completely rather than providing temporary fixes."
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
                      { label: "Menifee" }
                    ]}
                  />
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Droplets className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Menifee Drain Cleaning</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Menifee's Trusted <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> Company
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Professional drain cleaning throughout Menifee including Sun City, Quail Valley, Heritage Lake, and all surrounding neighborhoods. Expert solutions for every drain problem with guaranteed satisfaction.
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
                  alt="Professional drain cleaning service in Menifee, California"
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
                      <div className="text-white font-bold text-sm">Menifee's Best</div>
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
                  Menifee Drain Emergency?
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
                  We're Available 24/7
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
              Expert Drain Cleaning Services Throughout Menifee
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Menifee's rapid growth has brought modern neighborhoods alongside established communities, each with distinct plumbing needs. Gardner Plumbing Company serves them all - from Sun City's mature properties to the newest developments near Menifee Town Center. Our technicians understand the plumbing infrastructure throughout Menifee and arrive prepared to handle any drain cleaning challenge.
              </p>
              <p>
                Whether you live in Quail Valley, Heritage Lake, or along the Newport Road corridor, drain problems create the same frustration and inconvenience. Slow drains, recurring clogs, and sewage backups disrupt your daily life and potentially damage your home. Our <Link href="/services/drain-cleaning" className="text-red-400 hover:text-red-300 underline">professional drain cleaning services</Link> resolve these issues completely using advanced equipment and proven techniques that provide lasting results.
              </p>
              <p>
                We begin every drain cleaning job with a thorough assessment. For complex blockages or recurring problems, we use high-definition video camera inspection to see inside your pipes and identify the exact cause - whether it's grease buildup, root intrusion, pipe deterioration, or foreign objects. This diagnostic approach ensures we select the most effective cleaning method, from traditional cable snaking to powerful <Link href="/services/hydro-jetting" className="text-red-400 hover:text-red-300 underline">hydro-jetting</Link> that scours pipes completely clean.
              </p>
              <p>
                Emergency drain problems require immediate attention. Our <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">24/7 emergency service</Link> covers all of Menifee with rapid response times and fully equipped trucks. When sewage backs up into your home or a main line blocks completely, we understand the urgency. Our emergency team responds quickly to minimize damage, restore your plumbing, and get your household back to normal. For serious pipe damage, we also offer comprehensive <Link href="/services/sewer-and-septic" className="text-red-400 hover:text-red-300 underline">sewer line repair</Link> and replacement services.
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
              Full-Service <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Drain Cleaning</span> in Menifee
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Complete drain cleaning solutions for residential and commercial properties throughout Menifee.
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
                  alt="Experienced drain cleaning technician serving Menifee homes"
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
                    <div className="text-gray-300 text-xs">Menifee Area</div>
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
                Menifee's <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Premier</span> Drain Cleaning Service
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Local expertise meets professional service. We know Menifee's plumbing infrastructure and deliver reliable solutions backed by our satisfaction guarantee.
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
              Menifee Drain Cleaning <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">FAQs</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Answers to common drain cleaning questions from Menifee homeowners and businesses.
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need Drain Cleaning in Menifee?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our drain cleaning professionals are ready to help. <Link href="/contact-us" className="text-red-400 hover:text-red-300 underline">Contact Gardner Plumbing Company</Link> for fast, reliable service throughout Menifee.
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
                24/7 Emergency Drain Service in{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Menifee
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Drain emergencies create stress and potential property damage. Our emergency response team serves all of Menifee around the clock with immediate service when you need it most.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Emergency Situations We Resolve:
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
                  alt="Emergency drain cleaning service in Menifee"
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
                      <div className="text-gray-300 text-xs">Service</div>
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
              Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> in Menifee
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Serving Sun City, Quail Valley, Heritage Lake, Wheatfield, Newport Road area, and all Menifee neighborhoods.
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
