"use client";

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
  ArrowRight, 
  Phone, 
  DollarSign,
  Wrench,
  Calendar,
  Camera,
  Zap,
  Award,
  HelpCircle,
  MapPin,
  Mail,
  Star,
  AlertTriangle
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

export function Drain() {

const [isModalOpen, setIsModalOpen] = useState(false);

const emergencyReasons = [
  "Complete drain blockage",
  "Multiple drains backing up",
  "Sewage backup in home",
  "Kitchen sink not draining",
  "Shower or tub standing water",
  "Toilet repeatedly overflowing",
  "Strong sewer odor indoors",
  "Recurring stubborn clogs"
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
      question: "How do I know if I need professional drain cleaning?",
      answer: "Signs include slow-draining sinks, gurgling sounds, foul odors from drains, water backing up in tubs or showers, or clogs that keep coming back even after using a plunger or store-bought drain cleaner."
    },
    {
      question: "Can you clear all types of drain clogs?",
      answer: "Yes! We handle everything from kitchen grease and soap scum buildup to bathroom hair clogs, toilet blockages, and even tree root intrusions in sewer lines. We use the right tools for each situation to ensure a complete cleaning."
    },
    {
      question: "Is chemical drain cleaner safe to use?",
      answer: "No. Over-the-counter chemical cleaners can corrode your pipes, damage plumbing fixtures, and are harmful to the environment. Professional drain cleaning is a safer, more effective solution that protects your plumbing system."
    },
    {
      question: "How often should I have my drains cleaned?",
      answer: "For most homes, we recommend professional drain cleaning once every 1–2 years as preventive maintenance. Homes with heavy usage or frequent clogs may need service more often."
    },
    {
      question: "Do you offer camera inspections?",
      answer: "Yes. For stubborn or recurring clogs, we use video camera inspections to look inside your pipes and identify the exact cause of the problem. This allows us to provide a long-term solution, not just a quick fix."
    },
    {
      question: "Can drain cleaning prevent future plumbing emergencies?",
      answer: "Absolutely. Regular professional drain cleaning removes buildup before it causes major blockages, backups, or sewage overflows, helping you avoid costly repairs and water damage."
    }
  ];

const services = [
    {
      icon: Droplets,
      title: "Hydro-Jetting",
      description: "High-pressure water jetting to clear the toughest blockages and clean pipe walls thoroughly.",
      features: ["Eco-Friendly", "Root Cutting", "Grease Removal", "Scale Buildup Removal"]
    },
    {
      icon: Camera,
      title: "Video Inspection",
      description: "Advanced camera technology to locate blockages and assess pipe condition accurately.",
      features: ["Real-Time Viewing", "Digital Recording", "Precise Location", "Damage Assessment"]
    },
    {
      icon: Wrench,
      title: "Drain Snaking",
      description: "Professional drain augers and snakes to break through clogs and restore flow.",
      features: ["Various Sizes", "Flexible Tools", "Safe Method", "Immediate Results"]
    },
    {
      icon: Zap,
      title: "Emergency Service",
      description: "24/7 emergency drain cleaning when you need it most - nights, weekends, and holidays.",
      features: ["24/7 Availability", "Rapid Response", "Emergency Equipment", "Weekend Service"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "Same-day service available with most clogs cleared within hours of our arrival."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed plumbers with comprehensive insurance for your peace of mind."
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "No hidden fees or surprise charges - you'll know the exact cost before we start."
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of drain cleaning expertise serving Riverside County homeowners."
    }
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
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
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
                  <span className="text-red-400">Drain Cleaning</span>
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Droplets className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Expert Drain Cleaning</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> Services
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Fast, effective drain cleaning throughout Riverside County. Same-day service available with 30+ years of experience clearing even the toughest clogs. Our methods comply with <a href="https://www.epa.gov/watersense" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">EPA WaterSense standards</a>.
              </p>

              {/* Key Benefits */}
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
                  src="/draincleaningserviceintro.webp"
                  alt="Professional plumber using hydro-jetting equipment to clean drains"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Droplets className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Professional Service</div>
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
                  Clogged Drain Emergency?
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
                  24/7 Service Available
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
              <Droplets className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Complete <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Drain Cleaning</span> Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              From simple clogs to complex blockages, our experienced technicians use the latest equipment and techniques to restore your drains to perfect working condition. We also provide <Link href="/services/hydro-jetting" className="text-red-400 hover:text-red-300 underline">hydro-jetting services</Link> for thorough cleaning.
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
                <h3 className="text-2xl font-bold text-white mb-6">See the Difference Professional Drain Cleaning Makes</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Removes years of buildup and blockages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Restores full water flow and drainage speed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Eliminates foul odors and prevents future clogs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Extends the life of your plumbing system</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury">
                  <Image
                    src="/draincleaningbeforeandafter.webp"
                    alt="Before and after drain cleaning results showing clear vs clogged pipes"
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
                  src="/gardnertechvanbackground.webp"
                  alt="Professional Gardner Plumbing Co. technician with drain cleaning equipment"
                  width={1000}
                  height={750}
                  className="w-full h-180 object-cover rounded-3xl"
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
                Riverside County's Most <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Trusted</span> Drain Experts
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                With over three decades of experience serving Riverside County, we've cleared thousands of drains and earned our reputation as the area's most reliable <Link href="/about-us" className="text-red-400 hover:text-red-300 underline">plumbing professionals</Link>.
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
        Professional drain cleaning and repair services available throughout
        Riverside County with fast response times to your location.
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
                radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
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
              Drain Cleaning and Repair <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our drain cleaning and repair services, technology, and process.
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
                Can't find what you're looking for? Our drain cleaning and repair experts are standing by to answer your questions and schedule your professional drain cleaning service. Need immediate help? Visit our <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">emergency service page</Link>.
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
          24/7 Drain Cleaning{" "}
          <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Emergency
          </span>{" "}
          Service
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Don't let a clogged drain cause major damage. We provide 24/7
          emergency drain cleaning throughout Riverside County with rapid
          response times.
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

      {/* Right Column - Image */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
          <Image
            src="/gardnertecharrival.webp"
            alt="Emergency drain cleaning service - technician responding to urgent blockage"
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
                Ready for a Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Three decades of trusted service. Contact us for expert drain cleaning and repair.
              </p>
            </div>
           <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>

              <Button size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group bg-transparent flex-1">
                <span className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  Get Free Inspection
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