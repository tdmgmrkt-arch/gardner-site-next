"use client";

import { SchedulerModal } from "./SchedulerModal";
import { useState } from "react";
import Link from "next/link";
import { Modal } from "./Modal";
import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { 
  Flame, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  DollarSign,
  Wrench,
  Calendar,
  MapPin,
  AlertTriangle,
  Camera,
  Zap,
  Mail,
  Star,
  Award,
  HelpCircle,
  Thermometer,
  Truck,
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

export function GasLine() {
const [isModalOpen, setIsModalOpen] = useState(false);

const emergencyReasons = [
   "Gas smell indoors or outdoors",
    "Gas line leak detected",
    "Damaged gas line from digging",
    "Appliance won't light or stay lit",
    "Gas pressure issues",
    "Carbon monoxide detector alarm",
  ];

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
    "Hemet"
  ];

  const faqs = [
    {
      question: "How much does gas line installation cost?",
      answer:
        "Gas line installation typically costs $500-$2,000 depending on the length and complexity. We provide upfront pricing before starting any work, so you'll know exactly what you'll pay.",
    },
    {
      question: "How long does gas line installation take?",
      answer:
        "Most gas line installations take 4-8 hours. Simple connections can be completed in 4 hours, while complex runs or multiple appliances may take a full day.",
    },
    {
      question: "Do you offer emergency gas line service?",
      answer:
        "Yes! We provide 24/7 emergency gas line service throughout Riverside County. Call us immediately for urgent issues like gas leaks or gas smell emergencies.",
    },
    {
      question: "What are signs I need gas line repair?",
      answer:
        "Common signs include: gas smell near appliances or outdoors, hissing sounds near gas lines, dead vegetation near gas lines, dirt blowing from underground, or appliances not working properly.",
    },
    {
      question:
        "Are you licensed for gas line work?",
      answer:
        "Absolutely! We are fully licensed and certified for gas line installation, repair, and inspection. All work meets local codes and safety standards with proper permits.",
    },
    {
      question: "Do you guarantee your gas line work?",
      answer:
        "Yes! We offer comprehensive warranties on both parts and labor. All gas line work includes pressure testing and safety certification with our workmanship guarantee.",
    },
  ];

const services = [
    {
      icon: Zap,
      title: "Gas Line\nInstallation",
      description:
        "Professional installation of new gas lines for appliances, fire pits, pool heaters, and outdoor kitchens with proper sizing and safety compliance.",
      features: [
        "New Appliance Lines",
        "Outdoor Gas Features",
        "Proper Sizing",
        "Code Compliance",
      ],
    },
    {
      icon: Wrench,
      title: "Gas Line\nRepair",
      description:
        "Expert repair services for damaged or leaking gas lines with emergency response and safety-first approach to restore service safely.",
      features: [
        "Leak Detection",
        "Emergency Response",
        "Safety Testing",
        "Warranty Included",
      ],
    },
    {
      icon: Thermometer,
      title: "Gas Line\nInspection",
      description:
        "Comprehensive gas line safety inspections and pressure testing to ensure your system meets all safety codes and regulations.",
      features: [
        "Safety Inspections",
        "Pressure Testing",
        "Code Compliance",
        "Certification Provided",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Emergency\nService",
      description:
        "24/7 emergency gas line service for leaks, damage, or safety concerns - immediate response for gas emergencies throughout Riverside County.",
      features: [
        "24/7 Availability",
        "Immediate Response",
        "Safety Equipment",
        "Emergency Repairs",
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Response",
      description:
        "Same-day service available with emergency gas line issues prioritized for immediate safety response.",
    },
    {
      icon: Shield,
      title: "Licensed & Certified",
      description:
        "Fully licensed gas technicians with comprehensive insurance and safety certifications for your protection.",
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description:
        "No hidden fees or surprise charges - you'll know the exact cost before we start any gas line work.",
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description:
        "Three decades of gas line expertise serving Riverside County with thousands of safe installations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        {/* Enhanced Background */}
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
          
          {/* Premium texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-left animate-fade-in">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>Services</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-red-400">Gas Line</span>
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Flame className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Certified Gas Line Experts</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Gas Line</span> Services
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Expert gas line installation, repair, and inspection throughout Riverside County. Licensed and certified gas technicians ensuring your family's safety with every service.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Same-Day Service" },
                  { icon: Shield, text: "Safety Certified" },
                  { icon: DollarSign, text: "Licensed & Insured" },
                  { icon: Phone, text: "24/7 Emergency" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-green-400" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                              <Button size="lg" className="min-w-[220px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                                <span className="flex items-center justify-center gap-3">
                                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                  Call (951) 246-4337
                                </span>
                              </Button>
                              <SchedulerModal/>
                            </div>
                          </div>

            {/* Right Column - Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gaslineinspection.webp"
                  alt="Professional technician installing gas line with safety equipment"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 eft-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Flame className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Licensed & Certified</div>
                      <div className="text-gray-300 text-xs">Safety First</div>
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
                  Gas Line Emergency?
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
                  24/7 Emergency Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
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
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Flame className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Complete <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Gas Line</span> Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              From new installations to emergency repairs, our licensed gas technicians provide comprehensive gas line services for residential and commercial properties.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ 
                  backgroundColor: '#202020',
                  backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                  animationDelay: `${index * 100}ms`
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                  
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg">
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{service.title}</h3>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Before/After Image Section */}
          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Professional Gas Line Installation Makes All the Difference</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Proper sizing for optimal gas pressure and flow</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Code-compliant installation for maximum safety</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Pressure testing and leak detection included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Licensed installation with proper permits</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury">
                  <Image
                    src="/gaslinebefore&after.webp"
                    alt="Before and after of professional gas line installation"
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent">
                    {/* Split overlay effect */}
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 bg-gradient-to-r from-red-900/40 to-transparent flex items-center justify-center">
                        <span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded-full text-sm">BEFORE</span>
                      </div>
                      <div className="w-1/2 bg-gradient-to-l from-green-900/40 to-transparent flex items-center justify-center">
                        <span className="text-white font-bold bg-green-600/80 px-3 py-1 rounded-full text-sm">AFTER</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/GardnerEmployeCustomerEstimate.webp"
                  alt="Professional Gardner Plumbing Co. technician working on gas line"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />

                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">30+ Years</div>
                    <div className="text-gray-300 text-xs">Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why Choose Gardner Plumbing Co.</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Riverside County's Most <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Trusted</span> Gas Line Experts
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                With over three decades of experience serving Riverside County, we've installed and repaired thousands of gas lines and earned our reputation as the area's most reliable gas line professionals.
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
                        <h4 className="font-bold text-white text-lg mb-2 group-hover:text-green-100 transition-colors duration-300">{benefit.title}</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{benefit.description}</p>
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
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Service Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Serving All of{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional gas line services throughout Riverside County
              with fast response <br></br> times to your location.
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

    {/* Call to action */}
    <div className="text-center">
      <div className="glassmorphism-dark rounded-2xl p-8 border border-white/10 shadow-luxury inline-block">
        <h3 className="text-2xl font-bold text-white mb-4">
          Don't See Your Area?
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

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{ 
              background: `
                radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #374151 0%, #1f2937 50%, #000000 100%)
              `
            }}
          />
          
          {/* Premium texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 85% 15%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Gas Line Installation and Repair <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our gas line services, safety procedures, and installation process.
            </p>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              {/* Premium Red Banner Header */}
              <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
                background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                boxShadow: `
                  inset 0 2px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                  0 8px 32px rgba(139, 0, 0, 0.4)
                `
              }}>
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, 
                      transparent 0%, 
                      rgba(255, 255, 255, 0.1) 25%, 
                      rgba(255, 255, 255, 0.2) 50%, 
                      rgba(255, 255, 255, 0.1) 75%, 
                      transparent 100%
                    )`
                  }}
                />
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                    <HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Questions & Answers</h3>
                </div>
              </div>
              
              {/* Enhanced FAQ Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl"
                      style={{ 
                        backgroundColor: '#202020',
                        backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Gradient Border Effect */}
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

          {/* Enhanced CTA Section */}
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-glow">
                  <HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Have More Questions?</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Can't find what you're looking for? Our gas line installation and repair experts are standing by to answer your questions and schedule your professional service today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a href = "/frequently-asked-questions">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 sm:py-4 transition-all duration-300 rounded-xl shadow-lg border border-blue-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                    View Full FAQ
                  </span>
                </Button>
                </a>
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 sm:py-4 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                    Contact Us
                  </span>
                </Button>
              </div>
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
          radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
          linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
        `,
      }}
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Column - Content */}
      <div>
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
            Emergency Service
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
          24/7 Gas Line{" "}
          <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Emergency
          </span>{" "}
          Service
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Gas emergencies require immediate attention. We provide 24/7 emergency
          gas line service across Riverside County with rapid response for your
          safety.
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

      {/* Right Column - Image */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
          <Image
            src="/gardnertech2.webp"
            alt="Emergency gas line repair - technician responding to urgent call"
            width={1000}
            height={800}
            className="w-full h-120 object-cover rounded-3xl"
          />


          {/* Floating Emergency Badge */}
          <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">24/7</div>
                <div className="text-gray-300 text-xs">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ closes right column properly */}
    </div>
  </div>
</section>


      {/* Final CTA Section */}
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
            `
          }}
        >
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Ready for Professional{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Gas Line Service?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Three decades of trusted service. Contact us for expert gas line
                installation and repair.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg border border-red-400/20 group w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>

              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
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


      {/* ✅ Modal */}
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <LeadForm />
    </Modal>
    
    </div>
  );
}