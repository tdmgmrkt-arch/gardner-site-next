// WaterDamage.tsx
"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
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

export function WaterDamage() {
const [isModalOpen, setIsModalOpen] = useState(false);

const emergencyReasons = [
    "Flooding from burst pipes",
    "Appliance failure (washing machine, dishwasher)",
    "Sewer line backup",
    "Water heater leak",
    "Roof or window leaks after a storm",
    "Standing water in basement or crawl space",
    "Visible mold growth after a leak",
    "Saturated carpets, walls, or ceilings"
  ];

  const serviceAreas = [
    "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake",
    "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Hemet"
  ];

  const faqs = [
    {
      question: "How quickly should I act after discovering water damage?",
      answer: "Immediately. The faster you act, the more damage can be prevented. Mold can begin to grow within 24-48 hours. Call us 24/7 for an immediate emergency response to extract water and begin the drying process."
    },
    {
      question: "Will my insurance cover water damage restoration?",
      answer: "Most homeowner's insurance policies cover sudden and accidental water damage, like from a burst pipe. We have extensive experience working directly with all major insurance carriers and can help you navigate the claims process."
    },
    {
      question: "How long does the restoration process take?",
      answer: "The timeline depends on the extent of the damage. Water extraction can take a day, while structural drying with our specialized equipment typically takes 3-5 days. Repairs and reconstruction follow the drying phase."
    },
    {
      question: "Can my wet carpet and furniture be saved?",
      answer: "It depends on the type of water (clean, gray, or black) and how long the items were saturated. We use professional techniques to clean and restore items whenever possible, but some materials may need to be replaced, especially if contaminated by sewage."
    },
    {
      question: "What is the difference between water mitigation and restoration?",
      answer: "Mitigation is the emergency response to prevent further damage. This includes stopping the leak, extracting water, and setting up drying equipment. Restoration is the process of repairing and rebuilding the affected areas to their pre-damage condition."
    },
    {
      question: "Do I need to be concerned about mold?",
      answer: "Yes. Mold is a serious health risk and a primary concern after any water intrusion. Our IICRC-certified process focuses on rapid, thorough drying to prevent mold growth. If mold is already present, we offer professional mold remediation services."
    }
  ];

  const services = [
    {
      icon: Zap,
      title: "Emergency Water Extraction",
      description: "24/7 rapid removal of standing water using powerful, truck-mounted extraction equipment.",
      features: ["Immediate Dispatch", "Standing Water Removal", "Saturated Carpet Extraction", "Reduces Drying Time"]
    },
    {
      icon: Droplets,
      title: "Structural Drying",
      description: "Strategic placement of high-velocity air movers and dehumidifiers to dry structures thoroughly.",
      features: ["Moisture Mapping", "Dehumidification", "Air Mover Placement", "Prevents Mold Growth"]
    },
    {
      icon: Wrench,
      title: "Damage Repair & Reconstruction",
      description: "Full-service repairs, from replacing drywall and flooring to complete structural reconstruction.",
      features: ["Drywall & Flooring", "Cabinetry Repair", "Painting & Finishing", "Full Reconstruction"]
    },
    {
      icon: Shield,
      title: "Mold Remediation",
      description: "Safe and effective removal of mold colonies and application of antimicrobial agents to prevent return.",
      features: ["IICRC Certified", "Containment & Air Scrubbing", "Safe Mold Removal", "Antimicrobial Treatment"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Immediate Response",
      description: "We're on call around the clock to minimize damage and start the restoration process immediately."
    },
    {
      icon: Award,
      title: "IICRC Certified",
      description: "Our technicians are certified by the industry's highest standard for restoration, ensuring proper procedures."
    },
    {
      icon: Shield,
      title: "Insurance Claim Assistance",
      description: "We work directly with your insurance company, providing all necessary documentation for a smooth claim."
    },
    {
      icon: DollarSign,
      title: "Prevent Future Problems",
      description: "Our thorough drying and mold prevention techniques protect your property value and family's health."
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
    <Breadcrumbs
      items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Water Damage Restoration" } // no href = current page
      ]}
    />
  </div>
</nav>              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-red-400" /><span className="text-red-400 font-semibold text-sm uppercase tracking-wider">IICRC Certified Restoration</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                24/7 <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Water Damage</span> Restoration
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Immediate response for water extraction, structural drying, and property restoration. We stop the damage, prevent mold, and restore your home.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ icon: Clock, text: "24/7 Emergency" }, { icon: Award, text: "IICRC Certified" }, { icon: Wrench, text: "Full Reconstruction" }, { icon: Shield, text: "Mold Prevention" }].map((item, idx) => (
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
                <Image src="/waterrestorationemergency.webp" alt="Professional water damage restoration equipment drying a residential living room" width={1000} height={600} className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center"><Zap className="h-4 w-4 text-white" /></div>
                    <div><div className="text-white font-bold text-sm">Structural Drying</div><div className="text-gray-300 text-xs">Advanced Dehumidification</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="relative overflow-hidden">
        <div className="relative overflow-hidden py-2 sm:py-3" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)` }}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-white animate-pulse flex-shrink-0" /><span className="text-white font-bold text-lg sm:text-xl">Dealing with a Flood or Major Leak?</span></div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a href="tel:9512464337" className="w-full sm:w-auto">
                  <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2"><Phone className="h-5 w-5 text-red-100" /><span className="text-white font-bold text-lg">(951) 246-4337</span></div>
                </a>
                <span className="text-red-100 font-semibold text-sm sm:text-base">24/7 Emergency Dispatch</span>
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
        <Wrench className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
        IICRC Certified <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Restoration</span> Solutions
      </h2>
      <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
        From immediate water extraction to final repairs, our certified process ensures your property is dried, cleaned, and restored correctly to prevent future issues like mold.
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
          <h3 className="text-2xl font-bold text-white mb-6">From Disaster to Done Right</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Complete removal of all standing water and moisture.</span></div>
            <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Thorough structural drying to prevent dangerous mold growth.</span></div>
            <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Deodorization and sanitization for a safe, clean home environment.</span></div>
            <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" /><span>Full restoration of your property to its pre-damage condition.</span></div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury">
            <Image src="/water-damage-before-after.webp" alt="Before and after of a room that underwent water damage restoration" width={800} height={400} className="w-full h-64 object-cover"/>
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-gradient-to-r from-red-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded-full text-sm">AFTER FLOOD</span></div>
              <div className="w-1/2 bg-gradient-to-l from-green-900/40 to-transparent flex items-center justify-center"><span className="text-white font-bold bg-green-600/80 px-3 py-1 rounded-full text-sm">FULLY RESTORED</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us Section */}
<section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
  <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%), linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)` }}></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                  <Image src="/gardnertecharrival.webp" alt="Gardner Plumbing Co. technician arriving for an emergency call" width={1000} height={600} className="w-full h-96 object-cover rounded-3xl"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"><Award className="h-4 w-4 text-white" /></div>
                      <div><div className="text-white font-bold text-sm">IICRC Certified</div><div className="text-gray-300 text-xs">Industry Standard</div></div>
                  </div>
              </div>
          </div>
          <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                  <Shield className="h-5 w-5 text-green-400" /><span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why Choose Gardner Plumbing Co.</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                  Your <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Trusted</span> Restoration Partner
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  When facing water damage, you need a team that acts fast and has the certified expertise to restore your property safely and completely. We're that partner for countless homeowners in Riverside County.
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
                  <span className="flex items-center justify-center gap-3"><Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" /> Get A Free Assessment</span>
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
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">Our emergency restoration teams are on call 24/7 to provide rapid response across the entire county.</p>
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
  <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%)` }}/>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 sm:mb-20 animate-fade-in">
      <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
        <HelpCircle className="h-5 w-5 text-blue-400" />
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">Water Damage <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span></h2>
      <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">Key information about our water extraction, drying, and restoration process.</p>
    </div>
    <div className="mb-16 sm:mb-20 animate-slide-up">
      <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
        <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`, boxShadow: `inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4)` }}>
          <div className="absolute inset-0 opacity-30" style={{ background: `linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)` }}/>
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
                  24/7 Water Damage <span className="text-gradient bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Emergency</span> Response
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">Water damage doesn't wait for business hours. Our certified teams are on call 24/7 to respond immediately, mitigate damage, and begin the restoration process.</p>
              <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-6">Common Water Emergencies:</h3>
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
                  <Image src="/gardnertech2.webp" alt="Technician responding to an emergency water damage call at night" width={1000} height={700} className="w-full h-120 object-cover rounded-3xl"/>
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
          Need <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Immediate</span> Water Damage Help?
        </h2>
        <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
          Don't wait. The faster we respond, the more of your property we can save. Call our 24/7 emergency line now.
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

<Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}><LeadForm /></Modal>
</div>
);
}