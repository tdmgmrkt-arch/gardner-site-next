// BurstPipes.tsx
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
  Zap
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

export function BurstPipes() {
const [isModalOpen, setIsModalOpen] = useState(false);

const emergencyReasons = [
    "Visible water spraying from pipe",
    "Sudden, major drop in water pressure",
    "Water stains rapidly appearing on walls/ceiling",
    "Sound of running water when all fixtures are off",
    "Flooding in basement or crawlspace",
    "Puddles forming under sinks or near appliances",
    "Frozen pipes with no water flow",
    "Hissing sounds behind walls"
  ];

  const serviceAreas = [
    "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake",
    "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Hemet"
  ];

  const faqs = [
    {
      question: "What's the first thing I should do if a pipe bursts?",
      answer: "Immediately locate and shut off your home's main water valve to stop the flow of water. Then, call us right away for emergency service. If the leak is near electrical outlets, turn off the power at the breaker box as a safety precaution."
    },
    {
      question: "How do you find leaks that are hidden behind walls?",
      answer: "We use advanced, non-invasive leak detection equipment, including acoustic sensors and thermal imaging cameras. This technology allows us to pinpoint the exact location of the leak with minimal damage to your property."
    },
    {
      question: "How long does a pipe repair take?",
      answer: "Most common pipe repairs can be completed within 1 to 3 hours. More complex situations, like a main line break under a slab, may take longer. We always aim to work as quickly and efficiently as possible to minimize disruption."
    },
    {
      question: "Can you fix the water damage as well?",
      answer: "Yes, we are a full-service provider. Our team can handle both the immediate pipe repair and the subsequent water damage restoration, including water extraction, structural drying, and sanitization to prevent mold growth."
    },
    {
      question: "How can I prevent my pipes from bursting in the future?",
      answer: "Regular plumbing inspections can identify corroded or weak pipes before they fail. For cold weather, insulating exposed pipes in basements, crawlspaces, and attics is the most effective way to prevent freezing and bursting."
    },
    {
      question: "Do you offer repiping services for old homes?",
      answer: "Absolutely. If you have an older home with galvanized or polybutylene pipes, we offer complete whole-home repiping services using modern, durable materials like copper and PEX to ensure a reliable, long-lasting plumbing system."
    }
  ];

  const services = [
    {
      icon: Zap,
      title: "Emergency Pipe Repair",
      description: "24/7 rapid response to locate, access, and repair burst or leaking pipes to prevent further damage.",
      features: ["Leak Detection", "Pipe Clamping", "Section Replacement", "Valve Repair"]
    },
    {
      icon: Droplets,
      title: "Water Damage Mitigation",
      description: "Immediate water extraction and cleanup services to mitigate damage after a pipe burst.",
      features: ["Water Extraction", "Damage Assessment", "Initial Cleanup", "Drying Equipment Setup"]
    },
    {
      icon: Wrench,
      title: "Pipe Replacement & Repiping",
      description: "Durable solutions for old or damaged pipes, including whole-home repiping with PEX or copper.",
      features: ["Copper & PEX", "Whole-Home Repiping", "Slab Leak Repair", "Code-Compliant"]
    },
    {
      icon: Shield,
      title: "Frozen Pipe Thawing",
      description: "Safe and effective thawing techniques for frozen pipes to restore water flow and prevent bursts.",
      features: ["Safe Thawing Methods", "Pipe Insulation", "Preventative Advice", "System Inspection"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapid 24/7 Response",
      description: "Our emergency teams are on standby to minimize water damage at any time of day or night."
    },
    {
      icon: Shield,
      title: "Damage Prevention",
      description: "Fast action protects your home's structure, foundation, and belongings from costly water damage."
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "No surprises. You'll receive a clear, detailed estimate before any repair work begins."
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Decades of expertise in diagnosing and resolving all types of pipe failures quickly and correctly."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%), linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)` }}/>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)` }}/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span><ArrowRight className="h-4 w-4" /><span>Services</span><ArrowRight className="h-4 w-4" /><span className="text-red-400">Burst Pipe Repair</span>
                </div>
              </nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" /><span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Emergency Leak Repair</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Emergency <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Burst Pipe</span> Repair
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                24/7 rapid response for burst and leaking pipes. We stop the flood, repair the damage, and protect your home.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ icon: Clock, text: "24/7 Emergency" }, { icon: Shield, text: "Prevent Damage" }, { icon: Wrench, text: "All Pipe Types" }, { icon: Phone, text: "Immediate Dispatch" }].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300"><item.icon className="h-5 w-5 text-green-400" /><span className="font-medium">{item.text}</span></div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="min-w-[220px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />Call (951) 246-4337</span>
                </Button>
                <SchedulerModal/>
              </div>
            </div>
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image src="/burstedoutdoorpipe.webp" alt="Water spraying from a burst pipe in a residential wall" width={1000} height={600} className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center"><AlertTriangle className="h-4 w-4 text-white" /></div>
                    <div><div className="text-white font-bold text-sm">Immediate Response</div><div className="text-gray-300 text-xs">24/7 Leak Control</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="relative overflow-hidden">
        <div className="relative overflow-hidden py-2 sm:py-3" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`, boxShadow: `inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4), 0 -8px 32px rgba(139, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.6), 0 -12px 24px rgba(0, 0, 0, 0.4)` }}>
          <div className="absolute inset-0 opacity-30" style={{ background: `linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)` }}/>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-white animate-pulse flex-shrink-0" /><span className="text-white font-bold text-lg sm:text-xl">Active Leak or Pipe Burst?</span></div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a href="tel:9512464337" className="w-full sm:w-auto">
                  <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2"><Phone className="h-5 w-5 text-red-100" /><span className="text-white font-bold text-lg">(951) 246-4337</span></div>
                </a>
                <span className="text-red-100 font-semibold text-sm sm:text-base">Shut Off Main Water Valve & Call Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Overview */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%), linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)` }}/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Wrench className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Comprehensive <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Pipe Repair</span> Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              From emergency repairs on burst pipes to complete home repiping, our certified technicians use state-of-the-art equipment to protect your property.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => (
              <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)', animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg">
                        <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{service.title}</h3>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /><span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Quality Repairs, Lasting Protection</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Stops leaks at the source to prevent hidden mold and rot.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Restores full water pressure and flow to your fixtures.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Uses high-quality materials for a durable, long-term fix.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Ensures all work is done to meet or exceed plumbing codes.</span></div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury">
                  <Image src="/pipe-repair-before-after.webp" alt="Before and after of a corroded pipe replaced with a new one" width={800} height={400} className="w-full h-64 object-cover"/>
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gradient-to-r from-red-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded-full text-sm">FAILED PIPE</span></div>
                    <div className="w-1/2 bg-gradient-to-l from-green-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-green-600/80 px-3 py-1 rounded-full text-sm">NEW REPAIR</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us, Service Areas, FAQ, Emergency, and Final CTA sections would follow the same structure as the provided files, filled with content relevant to Burst Pipes. */}
      {/* For brevity, I will add the remaining sections in a condensed format. You can expand them using the templates. */}
      
      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%), linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)` }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                        <Image src="/gardnertecharrival.webp" alt="Professional Gardner Plumbing Co. technician arriving for an emergency call" width={1000} height={600} className="w-full h-96 object-cover rounded-3xl"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    </div>
                    <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"><Award className="h-4 w-4 text-white" /></div>
                            <div><div className="text-white font-bold text-sm">30+ Years</div><div className="text-gray-300 text-xs">Experience</div></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                        <Shield className="h-5 w-5 text-green-400" /><span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why Choose Gardner Plumbing Co.</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                        Riverside County's <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Trusted</span> Emergency Plumbers
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        When disaster strikes, you need experts you can trust. We combine decades of experience with advanced technology to provide the fastest, most reliable burst pipe repair services in the region.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group hover-lift">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-xl flex items-center justify-center group-hover:from-green-600 group-hover:to-green-500 transition-all duration-300 flex-shrink-0">
                                    <benefit.icon className="h-6 w-6 text-green-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div><h4 className="font-bold text-white text-lg mb-2 group-hover:text-green-100 transition-colors duration-300">{benefit.title}</h4><p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{benefit.description}</p></div>
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-xl shadow-lg border border-green-400/20 group">
                        <span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" /> Get A Quote Now</span>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-area" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%), linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)` }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">Serving All of <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Riverside County</span></h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">Our emergency pipe repair teams are strategically located to provide rapid response throughout Riverside County.</p>
            </div>
            <div className="grid gap-4 mb-12" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
                {serviceAreas.map((area, index) => (
                    <a key={index} href={cityLinks[area] ?? "#"} target="_blank" rel="noopener noreferrer" className="glassmorphism-dark rounded-xl p-4 border border-white/10 text-center hover:border-blue-500/30 transition-all duration-300 hover-lift block">
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
    <div className="text-center mb-16 sm:mb-20 animate-fade-in">
      <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
        <HelpCircle className="h-5 w-5 text-blue-400" />
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
          FAQ
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
        Burst Pipe{" "}
        <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
        Answers to common questions about emergency pipe repair and leak
        detection.
      </p>
    </div>

    <div className="mb-16 sm:mb-20 animate-slide-up">
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
              Questions & Answers
            </h3>
          </div>
        </div>

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
  </div>
</section>
      
      {/* Emergency Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%), linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)` }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                      <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                          <AlertTriangle className="h-5 w-5 text-red-400" /><span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Emergency Service</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                          24/7 Burst Pipe <span className="text-gradient bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Emergency</span> Response
                      </h2>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">A burst pipe is a true <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">emergency</Link>. Our teams are available 24/7/365 to provide immediate assistance, stop the <Link href="/services/water-damage" className="text-red-400 hover:text-red-300 underline">water damage</Link>, and begin repairs following <a href="https://www.iicrc.org/consumers/care/water-damage/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">IICRC standards</a>.</p>
                      <div className="mb-8">
                          <h3 className="text-xl font-bold text-white mb-6">Signs You Have a Pipe Emergency:</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {emergencyReasons.map((reason, index) => (
                                  <div key={index} className="flex items-center gap-3 text-gray-300"><AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0" /><span className="text-sm">{reason}</span></div>
                              ))}
                          </div>
                      </div>
                      <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                          <span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />Emergency: (951) 246-4337</span>
                      </Button>
                  </div>
                  <div className="relative group">
                      <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                          <Image src="/gardnertech2.webp" alt="Emergency plumber arriving at night to handle a burst pipe" width={1000} height={700} className="w-full h-120 object-cover rounded-3xl"/>
                          <div className="absolute top-6 right-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center"><Clock className="h-4 w-4 text-white" /></div>
                                  <div><div className="text-white font-bold text-sm">24/7</div><div className="text-gray-300 text-xs">Emergency Service</div></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden">
        <div className="py-12 sm:py-16" style={{ background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%), linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)` }}>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Need Emergency <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Pipe Repair</span> Service?
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Don't wait for water damage to get worse. Contact our 24/7 emergency team now for immediate help.
              </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg border border-red-400/20 group flex-1">
                <span className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> Call (951) 246-4337</span>
              </Button>
              <Button size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl shadow-lg bg-transparent flex-1">
                <span className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> Request Service Online</span>
              </Button>
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