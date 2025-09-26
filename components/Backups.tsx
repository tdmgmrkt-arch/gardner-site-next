// Backups.tsx
"use client";

import { SchedulerModal } from "./SchedulerModal";
import { useState } from "react";
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
  Droplets, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  DollarSign,
  Wrench,
  Award,
  HelpCircle,
  MapPin,
  Mail,
  Star,
  AlertTriangle,
  Zap,
  Camera
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

export function Backups() {
const [isModalOpen, setIsModalOpen] = useState(false);

const emergencyReasons = [
    "Sewage coming up in tubs or showers",
    "Multiple drains clogged at once",
    "Toilets overflowing with wastewater",
    "Foul sewage odor throughout the home",
    "Gurgling sounds from multiple drains",
    "Water backing up in floor drains",
    "Sewage visible in outdoor cleanout",
    "Contaminated water flooding"
  ];

  const serviceAreas = [
    "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake",
    "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Hemet"
  ];

  const faqs = [
    {
      question: "What causes a main sewer line to back up?",
      answer: "The most common causes are tree root intrusion into the pipes, severe grease buildup from kitchen drains, foreign objects (like 'flushable' wipes), and collapsed or broken pipes due to age or ground shifting."
    },
    {
      question: "Is a sewer backup a serious health risk?",
      answer: "Yes, absolutely. Sewage contains bacteria, viruses, and other pathogens that can cause serious illness. It's classified as 'black water' and should only be handled by trained professionals with proper protective equipment. Stay out of the affected area."
    },
    {
      question: "How do you clear a main line clog?",
      answer: "For tough main line clogs, we primarily use hydro jetting. This method uses high-pressure water to scour the inside of the pipe, completely removing roots, grease, and debris. For smaller clogs, a professional-grade drain auger may be used."
    },
    {
      question: "Do you also handle the cleanup and sanitization?",
      answer: "Yes. Our service is comprehensive. After clearing the clog, we offer full cleanup and sanitization services to safely remove all contaminated materials, clean the affected area, and apply antimicrobial treatments to ensure your home is safe."
    },
    {
      question: "How can I prevent this from happening again?",
      answer: "Avoid putting grease, coffee grounds, and non-flushable items down your drains. If you have large trees, consider a preventative annual camera inspection and cleaning to manage root growth before it causes a major blockage."
    },
    {
      question: "What is a sewer camera inspection?",
      answer: "We use a high-definition, waterproof camera to travel through your sewer line, giving us a clear view of its condition. This helps us identify the exact cause and location of the backup, whether it's roots, a break, or a blockage."
    }
  ];

  const services = [
    {
      icon: Zap,
      title: "Main Line Clog Removal",
      description: "Emergency clearing of main sewer line backups using advanced hydro jetting and augering equipment.",
      features: ["Hydro Jetting", "Root Removal", "Grease Clogs", "24/7 Response"]
    },
    {
      icon: Shield,
      title: "Backup Cleanup & Sanitization",
      description: "Safe removal of hazardous wastewater and thorough cleaning and disinfection of affected areas.",
      features: ["Wastewater Extraction", "Decontamination", "Odor Removal", "Safe Disposal"]
    },
    {
      icon: Camera,
      title: "Sewer Camera Inspection",
      description: "Pinpoint diagnostics to find the root cause of the backup, from root intrusion to collapsed pipes.",
      features: ["Problem Location", "Pipe Condition Assessment", "No Guesswork", "Digital Recording"]
    },
    {
      icon: Wrench,
      title: "Preventative Maintenance",
      description: "Scheduled drain cleaning and maintenance plans to prevent future catastrophic backups.",
      features: ["Annual Hydro Jetting", "Root Treatment", "Grease Trap Cleaning", "System Checkups"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Sewer backups can't wait. Our team is ready day or night to protect your home and health."
    },
    {
      icon: Shield,
      title: "Health & Safety Priority",
      description: "We follow strict safety protocols for handling hazardous materials to ensure your family's safety."
    },
    {
      icon: Droplets,
      title: "Complete Problem Resolution",
      description: "We don't just clear the clog; we diagnose the cause and offer permanent solutions."
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Decades of expertise in solving the most challenging sewer and drain problems in Riverside County."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span><ArrowRight className="h-4 w-4" /><span>Services</span><ArrowRight className="h-4 w-4" /><span className="text-red-400">Sewer & Drain Backups</span>
                </div>
              </nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" /><span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Emergency Backup Service</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Emergency <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Sewer & Drain</span> Backup
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                24/7 emergency service for hazardous sewer backups. We clear the line, clean the mess, and restore safety to your home.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ icon: Clock, text: "24/7 Emergency" }, { icon: Shield, text: "Sanitization" }, { icon: Zap, text: "Hydro Jetting" }, { icon: Phone, text: "Immediate Dispatch" }].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300"><item.icon className="h-5 w-5 text-green-400" /><span className="font-medium">{item.text}</span></div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="min-w-[220px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5" />Call (951) 246-4337</span>
                </Button>
                <SchedulerModal/>
              </div>
            </div>
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <Image src="/sewerbackup.webp" alt="Sewer water backing up into a residential shower" width={1000} height={600} className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"/>
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center"><AlertTriangle className="h-4 w-4 text-white" /></div>
                    <div><div className="text-white font-bold text-sm">Hazardous Spill</div><div className="text-gray-300 text-xs">Professional Cleanup Required</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Banner */}
      <section className="relative overflow-hidden">
        <div className="relative overflow-hidden py-2 sm:py-3" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)` }}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-white animate-pulse" /><span className="text-white font-bold text-lg sm:text-xl">Active Sewer Backup? Health Hazard!</span></div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a href="tel:9512464337"><div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2"><Phone className="h-5 w-5 text-red-100" /><span className="text-white font-bold text-lg">(951) 246-4337</span></div></a>
                <span className="text-red-100 font-semibold text-sm sm:text-base">Avoid Contact & Call Immediately</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Wrench className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
              Complete <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Backup & Clog</span> Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              We provide a full suite of services to not only resolve your immediate backup but also diagnose the cause and prevent it from happening again.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group relative border-none overflow-hidden shadow-luxury bg-[#202020]">
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <service.icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm"><CheckCircle className="h-4 w-4 text-green-400" /><span>{feature}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Hydro Jetting: The Ultimate Clean</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Obliterates tree roots that invade sewer lines.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Scours years of grease and sludge from pipe walls.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Restores the pipe to its original diameter for maximum flow.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Provides a long-lasting solution, not just a temporary fix.</span></div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury">
                  <Image src="/hydrojetbefore&after.webp" alt="Before and after of a sewer pipe cleaned with hydro jetting" width={800} height={400} className="w-full h-64 object-cover"/>
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gradient-to-r from-red-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded-full text-sm">CLOGGED PIPE</span></div>
                    <div className="w-1/2 bg-gradient-to-l from-green-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-green-600/80 px-3 py-1 rounded-full text-sm">CLEANED PIPE</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <Image src="/gardnertecharrival2.webp" alt="Gardner Plumbing Co. technician ready for an emergency sewer call" width={1000} height={700} className="w-full h-180 object-cover rounded-3xl"/>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" /><span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why Choose Gardner Plumbing Co.</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                Riverside County's <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Backup & Drain</span> Experts
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                When you're facing a hazardous sewer backup, you need a team with the right equipment and experience. We respond quickly, work safely, and provide solutions that last.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Serving All of <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Riverside County</span>
            </h2>
          </div>
          <div className="grid gap-4 mb-12" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {serviceAreas.map((area) => (
              <a key={area} href={cityLinks[area] ?? "#"} target="_blank" rel="noopener noreferrer" className="glassmorphism-dark rounded-xl p-4 border border-white/10 text-center hover:border-blue-500/30 transition-all duration-300">
                <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2" /><span className="text-white font-medium">{area}</span>
              </a>
            ))}
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
                radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #374151 0%, #1f2937 50%, #000000 100%)
              `
            }}
          />
          
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
          
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Water Filtration <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about whole-house filters, reverse osmosis systems, and water softeners.
            </p>
          </div>

          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
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
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-16 relative">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Need Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Sewer Backup</span> Service?
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
              Contact our 24/7 team immediately to handle hazardous sewer backups safely and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg">
                  <Phone className="h-4 w-4 mr-2" /> Call (951) 246-4337
              </Button>
              <Button onClick={() => setIsModalOpen(true)} size="lg" className="border-2 border-white/60 text-white bg-transparent px-6 py-3 rounded-xl shadow-lg">
                  <Mail className="h-4 w-4 mr-2" /> Get Free Estimate
              </Button>
            </div>
        </div>
      </section>
      
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LeadForm />
      </Modal>
    </div>
  );
}