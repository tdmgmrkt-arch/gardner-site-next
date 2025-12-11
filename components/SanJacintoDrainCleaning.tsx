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

export function SanJacintoDrainCleaning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emergencyReasons = [
    "Valley residential drain failures",
    "Soboba Springs area backups",
    "Seasonal rain drainage issues",
    "Tree root system invasions",
    "Hemet Valley shared problems",
    "Family home sewer clogs",
    "Established neighborhood failures",
    "Valley heat-related pipe stress"
  ];

  const services = [
    {
      icon: Camera,
      title: "Valley Drain Inspection",
      description: "Thorough camera diagnostics for San Jacinto's residential properties and valley-specific drainage challenges.",
      features: ["Complete assessment", "Root detection", "Seasonal evaluation", "Problem identification"]
    },
    {
      icon: Droplets,
      title: "Residential Hydro-Jetting",
      description: "Professional hydro-jetting removes valley soil deposits and tree root intrusions from San Jacinto drain lines.",
      features: ["Root cutting power", "Valley-safe cleaning", "Residential focus", "Thorough scouring"]
    },
    {
      icon: Wrench,
      title: "Family Home Service",
      description: "Expert drain cleaning for San Jacinto's family-oriented residential neighborhoods and communities.",
      features: ["Family-friendly", "Clear explanations", "Efficient work", "Respectful service"]
    },
    {
      icon: Zap,
      title: "Valley Emergency Response",
      description: "24/7 emergency drain service throughout San Jacinto and the surrounding Hemet Valley area.",
      features: ["Quick valley response", "Always available", "Full equipment", "Coordinated service"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Responsive Service",
      description: "Fast arrival throughout San Jacinto's valley location with coordinated Hemet Valley coverage."
    },
    {
      icon: Shield,
      title: "Valley Specialists",
      description: "Expert knowledge of San Jacinto's specific valley drainage challenges and seasonal patterns."
    },
    {
      icon: DollarSign,
      title: "Fair Valley Pricing",
      description: "Honest estimates for San Jacinto families with clear pricing and no hidden fees."
    },
    {
      icon: Award,
      title: "Community Focus",
      description: "Committed to serving San Jacinto's residential community and family neighborhoods."
    }
  ];

  const faqs = [
    {
      question: "What makes San Jacinto's valley location create unique drain challenges?",
      answer: "San Jacinto sits in the San Jacinto Valley alongside Hemet, creating specific drainage characteristics that differ from hillside or coastal communities. The valley floor's relatively flat topography means drainage systems rely more on proper grade and flow than on natural elevation changes. Valley soil tends to retain moisture longer after rains, affecting ground conditions around drain pipes. Seasonal water table fluctuations can put pressure on sewer lines during wet periods. Summer heat is extreme in the valley, causing soil contraction that can shift pipes. These valley-specific factors require drain service providers who understand the local environment rather than applying generic approaches."
    },
    {
      question: "How do you coordinate service between San Jacinto and nearby Hemet?",
      answer: "San Jacinto and Hemet form a connected community within the valley, and we serve both cities as an integrated service area. Our technicians understand that many customers think of the area as Hemet Valley rather than separate municipalities. We provide seamless coverage across both cities with no additional charges or service differences based on city boundaries. When you call from San Jacinto, we don't transfer you or hand off to separate crews. The same experienced technicians serve the entire valley area. This integrated approach ensures consistent service quality and rapid response times throughout San Jacinto."
    },
    {
      question: "Why do you emphasize residential service for San Jacinto?",
      answer: "San Jacinto's character is predominantly residential and family-oriented, with neighborhoods like Soboba Springs representing typical valley family homes rather than dense commercial development. Our service approach reflects this residential focus. We schedule service around family routines, work efficiently to minimize disruption, and communicate clearly so homeowners understand what we're doing and why. Our technicians are experienced with the challenges family homes face including children's items accidentally flushed, heavy laundry loads from large families, and the general wear that active households create. We build relationships with San Jacinto families by providing reliable service that respects their homes and budgets."
    },
    {
      question: "What seasonal drain issues affect San Jacinto properties?",
      answer: "San Jacinto's valley location creates pronounced seasonal drainage patterns. Winter rains can saturate valley soil and temporarily raise water tables, putting pressure on sewer lines and sometimes revealing weak joints or cracks. Spring brings rapid tree and plant growth as temperatures warm, with roots aggressively seeking water sources including sewer lines. Summer heat is extreme in the valley, causing soil to contract and dry out, which can shift drain pipes and create new low spots where debris accumulates. Fall sees trees dropping leaves that can enter outdoor drains. We recommend scheduling preventive drain cleaning in spring or fall to prepare for the stresses of summer heat or winter rains."
    },
    {
      question: "Can tree roots from valley landscaping damage my drains?",
      answer: "Absolutely, and this is a common issue throughout San Jacinto. Valley landscaping includes many mature trees that have adapted to survive hot, dry summers by developing extensive root systems that seek any available moisture. Sewer lines provide consistent moisture that attracts roots, especially during dry summer months. Roots can penetrate even small cracks in pipes and then expand, creating blockages that worsen over time. Trees like cottonwoods, willows, and eucalyptus are particularly aggressive, but virtually any mature tree can invade sewer lines. Our hydro-jetting services cut through and remove roots while thoroughly cleaning pipes. Video camera inspections identify where roots have entered and assess whether pipe repair is needed beyond cleaning."
    },
    {
      question: "Do you provide service for the broader San Jacinto community?",
      answer: "Yes, we serve all of San Jacinto's residential areas including Soboba Springs and throughout the valley-wide community. Our service area encompasses the entire San Jacinto Valley region, and we've built relationships with families throughout the area by providing consistent, reliable drain cleaning and repair services. We understand San Jacinto's community character and the importance of being responsive to residents' needs. Whether you need scheduled preventive maintenance or emergency service, we provide the same professional attention to every San Jacinto customer. Many of our San Jacinto customers have used our services for years and refer family and neighbors, which we consider the highest compliment."
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
                      { label: "San Jacinto" }
                    ]}
                  />
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Droplets className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">San Jacinto Drain Cleaning</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                San Jacinto <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> Experts
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Professional drain cleaning throughout San Jacinto Valley. Serving Soboba Springs and all valley residential areas with family-friendly service focused on community needs.
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
                  alt="Professional San Jacinto drain cleaning service"
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
                      <div className="text-white font-bold text-sm">Valley's Trusted</div>
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
                  San Jacinto Drain Emergency?
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
              Expert Drain Cleaning Services for San Jacinto Valley Communities
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                San Jacinto represents a distinct valley community within Riverside County, characterized by established residential neighborhoods, family-oriented development, and a close relationship with neighboring Hemet that creates an integrated valley region. Gardner Plumbing Company serves San Jacinto as part of our comprehensive Hemet Valley coverage, understanding that residents often think of the area as a unified community rather than separate municipalities. Our service approach reflects San Jacinto's predominantly residential character and the specific drainage challenges that valley geography creates. From Soboba Springs to valley-wide residential areas, we provide drain cleaning solutions calibrated to local conditions rather than generic one-size-fits-all approaches.
              </p>
              <p>
                The San Jacinto Valley's flat topography creates drainage characteristics that differ significantly from hillside or coastal communities. Valley drainage systems rely heavily on proper pipe grade and flow rather than natural elevation changes to move waste water. The valley floor retains moisture longer after seasonal rains, affecting soil conditions around drain lines and sometimes creating temporary water table elevation. Extreme summer heat causes valley soil to contract and dry, shifting pipes and creating stress points where problems develop. Our <Link href="/services/drain-cleaning" className="text-red-400 hover:text-red-300 underline">professional drain cleaning services</Link> account for these valley-specific factors, using techniques appropriate for the local environment and seasonal patterns that San Jacinto residents experience year after year.
              </p>
              <p>
                Mature valley landscaping presents ongoing challenges for San Jacinto drainage systems. Trees throughout the valley have adapted to survive hot, dry summers by developing extensive root systems that aggressively seek any available moisture source. Sewer lines provide consistent water that attracts roots, especially during the driest summer months when other moisture sources disappear. Roots can penetrate tiny cracks in older pipes and then expand, creating blockages that worsen progressively until professional cleaning becomes necessary. Our <Link href="/services/hydro-jetting" className="text-red-400 hover:text-red-300 underline">hydro-jetting equipment</Link> cuts through and removes tree roots while thoroughly scouring pipes clean of accumulated debris. Video camera inspections identify exactly where roots have invaded and assess whether underlying pipe damage requires attention beyond cleaning.
              </p>
              <p>
                Emergency drain situations demand immediate professional response regardless of timing or location within San Jacinto Valley. A backed-up sewer line creates stress for any family, particularly when it occurs during evening hours, weekends, or holidays when many service companies are unavailable. Our <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">24/7 emergency plumbing service</Link> covers all of San Jacinto with rapid response and complete equipment to resolve urgent drainage problems. Our valley-wide coverage means the same experienced technicians serve both San Jacinto and Hemet with no service differences or boundary charges. When inspection reveals damaged pipes requiring replacement rather than cleaning, we provide comprehensive <Link href="/services/sewer-and-septic" className="text-red-400 hover:text-red-300 underline">sewer line repair and replacement</Link> services. For questions or to schedule service in San Jacinto, <Link href="/contact-us" className="text-red-400 hover:text-red-300 underline">contact our valley service team</Link> today.
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
              Valley-Focused <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Drain Solutions</span> for San Jacinto
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional drain cleaning technology adapted for San Jacinto Valley's residential community needs.
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
                  alt="Gardner Plumbing technician serving San Jacinto with professional drain cleaning"
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
                    <div className="text-gray-300 text-xs">Serving San Jacinto</div>
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
                San Jacinto's <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Trusted</span> Valley Specialists
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our valley-wide expertise and commitment to San Jacinto's residential community ensures reliable solutions for your drainage challenges.
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
              San Jacinto Drain Cleaning <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Answers to common questions from San Jacinto Valley homeowners about drain cleaning and maintenance.
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need Drain Help in San Jacinto?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our San Jacinto Valley drain experts are ready to solve your drainage problems. For urgent situations, we provide <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">24/7 emergency service</Link>.
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
                  San Jacinto Valley
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Drain emergencies strike without warning throughout San Jacinto Valley. From Soboba Springs to valley-wide residential areas, our emergency team responds rapidly with complete equipment.
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
                  alt="Emergency drain cleaning response in San Jacinto"
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
              Professional <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Drain Cleaning</span> in San Jacinto
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Serving Soboba Springs and all San Jacinto Valley residential areas with expert drain solutions and family-friendly service.
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
