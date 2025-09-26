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
  Thermometer
} from "lucide-react";

const cityLinks: Record<string, string> = {
  Temecula: "https://temeculaca.gov", Murrieta: "https://murrietaca.gov", Perris: "https://www.cityofperris.org", Menifee: "https://cityofmenifee.us", "Canyon Lake": "https://www.canyonlakeca.gov", "Lake Elsinore": "https://www.lake-elsinore.org", Corona: "https://www.coronaca.gov", "Moreno Valley": "https://moval.org", Riverside: "https://riversideca.gov", Hemet: "https://www.hemetca.gov", "San Jacinto": "https://www.sanjacintoca.gov", Wildomar: "https://cityofwildomar.org",
};

export function NoHotWater() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emergencyReasons = [ "No hot water at all", "Water is only lukewarm or cold", "Pilot light will not stay lit", "Circuit breaker for heater keeps tripping", "Leaking from the tank or connections", "Rumbling or popping noises from the tank", "Smell of gas near a gas water heater", "Rusty or discolored hot water" ];
  const serviceAreas = [ "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake", "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Hemet" ];
  
  const faqs = [
    { question: "Why do I have no hot water?", answer: "For gas heaters, it's often a failed thermocouple or a pilot light issue. For electric heaters, it's commonly a tripped breaker or a burned-out heating element or thermostat. Our technicians can diagnose the exact cause quickly." },
    { question: "Is it safe to try and relight my pilot light myself?", answer: "While many units have instructions, we recommend calling a professional, especially if you smell gas or are unsure of the process. An underlying issue may be causing the pilot to go out, which needs to be addressed by a technician." },
    { question: "How long does a typical water heater repair take?", answer: "Most common repairs, such as replacing a thermocouple, heating element, or thermostat, can be completed in 1-2 hours. We carry a wide range of parts on our trucks to fix the issue on the first visit." },
    { question: "Should I repair my old water heater or replace it?", answer: "If your water heater is over 8-10 years old, leaking from the tank, or requires frequent, costly repairs, replacement is often the more cost-effective solution. We will provide honest advice and upfront pricing for both options." },
  ];
  
  const services = [ { icon: Zap, title: "Emergency Diagnostics", description: "Fast and accurate troubleshooting to identify the cause of your hot water failure.", features: ["Gas & Electric", "Thermostat Testing", "Element Check", "Pressure Relief Valve"] }, { icon: Wrench, title: "Same-Day Part Replacement", description: "Our trucks are stocked with common parts to fix your heater on the first visit.", features: ["Thermocouples", "Heating Elements", "Thermostats", "Gas Control Valves"] }, { icon: Thermometer, title: "Emergency Replacement", description: "When a repair isn't possible, we offer fast installation of new, high-efficiency water heaters.", features: ["Tank & Tankless", "Fast Installation", "Old Unit Disposal", "Code-Compliant Setup"] }, { icon: Shield, title: "Leak & Safety Repair", description: "Addressing dangerous leaks or pressure issues to ensure your water heater operates safely.", features: ["Leak Repair", "T&P Valve Replacement", "Gas Line Check", "Safe Operation"] } ];
  const benefits = [ { icon: Clock, title: "Fast Hot Water Restoration", description: "Our top priority is to diagnose the problem and restore your hot water as quickly as possible, often same-day." }, { icon: Shield, title: "Licensed & Insured Experts", description: "All work is performed by licensed, insured plumbers who specialize in water heater technology." }, { icon: Wrench, title: "Repair vs. Replace Options", description: "We provide clear, upfront pricing for both repair and replacement so you can make an informed choice." }, { icon: Award, title: "Service for All Brands", description: "With 30+ years of experience, we have the expertise to service any make or model of water heater." } ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="text-left animate-fade-in">
                    <nav className="mb-6"><div className="flex items-center space-x-2 text-sm text-gray-400"><span>Home</span><ArrowRight className="h-4 w-4" /><span>Services</span><ArrowRight className="h-4 w-4" /><span className="text-red-400">No Hot Water</span></div></nav>
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm"><Thermometer className="h-5 w-5 text-red-400" /><span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Same-Day Water Heater Repair</span></div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">No Hot Water? <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Fast Emergency</span> Service</h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">Our expert technicians provide rapid diagnostics and repair to restore your hot water today.</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {[{ icon: Clock, text: "Same-Day Service" }, { icon: Wrench, text: "All Brands Repaired" }, { icon: DollarSign, text: "Upfront Pricing" }, { icon: Phone, text: "24/7 Emergency" }].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-300"><item.icon className="h-5 w-5 text-green-400" /><span className="font-medium">{item.text}</span></div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="min-w-[220px] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group"><span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5" />Restore My Hot Water</span></Button>
                        <SchedulerModal/>
                    </div>
                </div>
                <div className="relative group animate-slide-up">
                    <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                        <Image src="/GardnerPlumbingCoEmergencyTech.webp" alt="Technician diagnosing a residential water heater that is not producing hot water" width={1000} height={600} className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"/>
                        <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center"><Zap className="h-4 w-4 text-white" /></div>
                                <div><div className="text-white font-bold text-sm">Expert Diagnostics</div><div className="text-gray-300 text-xs">Gas & Electric Systems</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-2 sm:py-3" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)` }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-white animate-pulse" /><span className="text-white font-bold text-lg sm:text-xl">Woke Up to a Cold Shower?</span></div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a href="tel:9512464337"><div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2"><Phone className="h-5 w-5 text-red-100" /><span className="text-white font-bold text-lg">(951) 246-4337</span></div></a>
              <span className="text-red-100 font-semibold text-sm sm:text-base">Call for Same-Day Repair</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Wrench className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Complete <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Water Heater</span> Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              From emergency diagnostics and same-day repairs to full system replacements, we have the expertise to restore your hot water quickly and reliably.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => (
              <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)', animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 shadow-lg">
                        <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100">{service.title}</h3>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /><span>{feature}</span></li>
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
                <h3 className="text-2xl font-bold text-white mb-6">Professional Installation Makes All The Difference</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Proper sizing for maximum efficiency and performance.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Code-compliant installation for safety and reliability.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Energy-efficient operation to reduce your utility bills.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1" /><span>Extended equipment life with a proper installation.</span></div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury">
                  <Image src="/waterheaterbeforeandafter.webp" alt="Before and after of a professional water heater installation" width={800} height={400} className="w-full h-64 object-cover"/>
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gradient-to-r from-red-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded-full text-sm">BEFORE</span></div>
                    <div className="w-1/2 bg-gradient-to-l from-green-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-green-600/80 px-3 py-1 rounded-full text-sm">AFTER</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)` }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                    <Image src="/waterheater-techs.webp" alt="Gardner Plumbing technician working on a water heater" width={1000} height={600} className="w-full h-96 object-cover rounded-3xl"/>
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
                  Riverside County's Most <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Trusted</span> Water Heater Experts
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With over three decades of experience, we've repaired and installed thousands of water heaters for homeowners, earning our reputation for reliable, fast, and professional service.
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
                  <span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" /> Get A Free Estimate</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="service-area" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%), linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)` }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">Serving All of <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Riverside County</span></h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">Our technicians are available for same-day water heater service throughout the region.</p>
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

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">Hot Water Heater <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span></h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">Get answers to your questions about water heater repairs and replacements.</p>
          </div>
          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`, boxShadow: `inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4)` }}>
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
                    <AccordionItem key={index} value={`item-${index}`} className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl" style={{ backgroundColor: '#202020', backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)", animationDelay: `${index * 100}ms` }}>
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
                          <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">{faq.answer}</div>
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

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%)` }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                        <AlertTriangle className="h-5 w-5 text-red-400" /><span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Emergency Service</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                        24/7 Water Heater <span className="text-gradient bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Emergency</span> Service
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">Hot water problems can’t wait. We provide 24/7 emergency water heater repair across Riverside County with fast, reliable response times.</p>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-6">Common Emergency Situations:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {emergencyReasons.map((reason, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-300"><AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0" /><span className="text-sm">{reason}</span></div>
                            ))}
                        </div>
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                        <span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5" />Emergency: (951) 246-4337</span>
                    </Button>
                </div>
                <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                        <Image src="/gardnertecharrival.webp" alt="Emergency water heater repair - technician responding to urgent call" width={1000} height={600} className="w-full h-96 object-cover rounded-3xl"/>
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

      <section className="relative overflow-hidden">
        <div className="py-12 sm:py-16" style={{ background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%)` }}>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Ready for Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Water Heater Service?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Contact us for expert Water Heater installation and repair.
              </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg flex-1">
                <span className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" />Call (951) 246-4337</span>
              </Button>
              <Button size="lg" className="border-2 border-white/60 text-white bg-transparent px-6 py-3 rounded-xl shadow-lg flex-1">
                <span className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" />Get Free Inspection</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}><LeadForm /></Modal>
    </div>
  );
}