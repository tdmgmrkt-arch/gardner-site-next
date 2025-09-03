import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Wrench,
  Droplets,
  Zap,
  Home,
  Building,
  Phone,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const professionalTechnician = "/GardnerPlumbingCoEmergencyTech.webp";
const customerServiceRep = "/GardnerPlumbingCoCSrep.webp";
const gardnerTruck = "/GPTRUCK.webp";
const facilityImage = "/gardnertrucks.webp";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link: string;
};

export function Services() {
  const residentialServices: ServiceItem[] = [
    {
      icon: Droplets,
      title: "Drain\nCleaning",
      description:
        "Professional drain clearing and maintenance services to keep your plumbing flowing smoothly.",
      features: ["Hydro-Jetting", "Video Inspection", "Root Removal", "Preventive Maintenance"],
      link: "/services/drain-cleaning",
    },
    {
      icon: Wrench,
      title: "Leak Detection/\nRepair",
      description:
        "Advanced leak detection technology and expert repair services for quick, efficient solutions.",
      features: ["Electronic Detection", "Slab Leak Repair", "Pipe Replacement", "Emergency Service"],
      link: "/services/leak-detection",
    },
    {
      icon: Zap,
      title: "Water Heater Service",
      description:
        "Complete water heater installation, repair, and maintenance for optimal performance.",
      features: ["Tank & Tankless", "Energy Efficient", "Same-Day Service", "Warranty Included"],
      link: "/services/water-heater-service",
    },
    {
      icon: Home,
      title: "Bathroom Plumbing",
      description:
        "Complete bathroom plumbing solutions from fixture repairs to full bathroom remodels.",
      features: ["Toilet Repair", "Shower/Tub Installation", "Fixture Upgrades", "Pipe Relocation"],
      link: "/services/toilet-installation-and-repair",
    },
  ];

  const commercialServices: ServiceItem[] = [
    {
      icon: Building,
      title: "Commercial Plumbing",
      description: "Professional plumbing solutions for businesses and commercial properties.",
      features: ["System Design", "Maintenance Plans", "Emergency Service", "Code Compliance"],
      link: "/services/commercial-plumbing",
    },
    {
      icon: Wrench,
      title: "Hydro-Jetting",
      description:
        "High-pressure water jetting for thorough pipe cleaning and blockage removal.",
      features: ["Eco-Friendly", "Root Cutting", "Grease Removal", "Video Verification"],
      link: "/services/hydro-jetting",
    },
    
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
            <div className="text-left">
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                  <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Premium Services
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(255,255,255,1)] mb-6 sm:mb-8 drop-shadow-lg leading-tight">
                Professional <span className="text-white">Plumbing</span>{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                From routine maintenance to emergency repairs, Gardner Plumbing Co.
                provides comprehensive plumbing solutions for homes and businesses throughout
                Riverside County communities.
              </p>
            </div>

            {/* Image */}
            <div className="relative group mt-6 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 max-w-sm sm:max-w-lg w-full mx-auto lg:mx-0">
                <Image
                  src={facilityImage}
                  alt="Gardner Plumbing Co. facility and fleet"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ aspectRatio: "4/3" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 glassmorphism-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Wrench className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs sm:text-sm">Professional Fleet</div>
                      <div className="text-gray-300 text-[10px] sm:text-xs">Ready to Serve</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Residential */}
        <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            <div
              className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"
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
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <Home className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  Residential Services
                </h3>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {residentialServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.title}
                      className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-fade-in"
                      style={{
                        backgroundColor: "#202020",
                        backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />

                      <div className="relative z-10">
                        <CardHeader className="text-center pb-3 sm:pb-4 pt-6 sm:pt-8 flex-shrink-0">
                          <a href={service.link} className="block focus:outline-none">
                            <div className="relative mb-4 sm:mb-6">
                              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-red-500/20">
                                <Icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                              </div>
                              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                            </div>

                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-100 transition-colors duration-300">
                              {service.title.split("\n").map((line, i, arr) => (
                                <span key={i}>
                                  {line}
                                  {i < arr.length - 1 && <br />}
                                </span>
                              ))}
                            </h4>
                          </a>
                        </CardHeader>

                        <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col flex-grow">
                          <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-center text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                            {service.description}
                          </p>

                          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm group/item">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                                  <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400 transition-transform duration-300" />
                                </div>
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <a href={service.link}>
                            <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg sm:rounded-xl py-2.5 sm:py-3 text-sm sm:text-base group/btn">
                              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                Learn More
                                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                          </a>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <div className="mt-10 flex justify-center">
                <a href="/services">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-2">
                      View All Services
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Commercial */}
        <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            <div
              className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"
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
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <Building className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  Commercial Services
                </h3>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {commercialServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.title}
                      className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
                      style={{
                        backgroundColor: "#202020",
                        backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />

                      <CardContent className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
                        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4 sm:gap-6 flex-grow">
                          <a href={service.link} className="relative block">
                            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-red-500/20">
                              <Icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                          </a>

                          <div className="flex-1">
                            <a href={service.link} className="no-underline">
                              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-red-100 transition-colors duration-300">
                                {service.title}
                              </h4>
                            </a>
                            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg group-hover:text-gray-200 transition-colors duration-300">
                              {service.description}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                              {service.features.map((f) => (
                                <li
                                  key={f}
                                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm group/item"
                                >
                                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                                    <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400 transition-transform duration-300" />
                                  </div>
                                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {f}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            <a href={service.link} className="block">
                              <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base group/btn">
                                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                  Get Quote
                                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </span>
                              </Button>
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              {/* Single Button under Commercial services grid */}
              <div className="mt-10 flex justify-center">
                <a href="/services">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 
                                    text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-2">
                      View All Services
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Enhanced Emergency Services */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            {/* Banner with link to emergency page */}
            <a
              href="/services/emergency-service"
              className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 block focus:outline-none"
              style={{
                background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                boxShadow: `
                  inset 0 2px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                  0 8px 32px rgba(139, 0, 0, 0.4)
                `,
              }}
              aria-label="Go to Emergency Plumbing service"
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
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  24/7 Emergency Service
                </h3>
              </div>
            </a>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
                {/* Left column */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                    Always Available When You Need Us
                  </h4>
                  <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
                    <a href="/services/emergency-service" className="relative group block">
                      <Image
                        src={professionalTechnician}
                        alt="Professional Gardner Plumbing Co. technician providing reliable emergency service"
                        width={400}
                        height={500}
                        loading="lazy"
                        className="w-full max-w-xs mx-auto rounded-xl sm:rounded-2xl border border-gray-600/30 shadow-luxury group-hover:shadow-2xl transition-all duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </a>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    Plumbing emergencies don't wait for business hours. Our emergency team is
                    available 24/7 to handle urgent plumbing issues with rapid response and
                    professional expertise.
                  </p>
                </div>

                {/* Middle column */}
                <div className="flex flex-col order-3 lg:order-2">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <a href="/services/emergency-service" className="relative group block">
                      <Image
                        src={gardnerTruck}
                        alt="Gardner Plumbing Co. service van ready for emergency calls"
                        width={500}
                        height={400}
                        loading="lazy"
                        className="w-full max-w-sm mx-auto rounded-xl sm:rounded-2xl shadow-luxury group-hover:shadow-2xl transition-all duration-500"
                      />

                    </a>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { icon: Clock, title: "24/7 Availability", desc: "Day, night, weekends & holidays", link: "/emergency-service" },
                      { icon: Shield, title: "Licensed & Insured", desc: "Full protection & peace of mind", href: "about-us" },
                      { icon: CheckCircle, title: "Rapid Response", desc: "Fast arrival times guaranteed", href: "/emergency-service" },
                      { icon: Wrench, title: "Fully Equipped Trucks", desc: "All tools & parts ready to go", href: "/about-us"},
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glassmorphism-dark rounded-lg sm:rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 group/item hover-lift"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-lg sm:rounded-xl flex items-center justify-center group-hover/item:from-red-600 group-hover/item:to-red-500 transition-all duration-300">
                          <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 group-hover/item:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-base sm:text-lg group-hover/item:text-red-100 transition-colors duration-300">
                            {item.title}
                          </div>
                          <div className="text-gray-400 text-xs sm:text-sm group-hover/item:text-gray-300 transition-colors duration-300">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div className="text-center order-1 lg:order-3 flex flex-col">
                  <div
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-luxury hover-lift"
                    style={{
                      background: `linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%)`,
                      boxShadow: `
                        0 20px 40px rgba(139, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                      `,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-40"
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
                    <div className="relative p-4 sm:p-6 text-center">
                      <a href="tel:9512464337" aria-label="Call (951) 246-4337 for emergency service" className="block">
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                          (951) 246-4337
                        </div>
                      </a>
                      <div className="text-red-100 font-semibold mb-1 text-sm sm:text-base drop-shadow-sm">
                        Call Now for Emergency Service
                      </div>
                      <div className="text-white/80 text-xs sm:text-sm drop-shadow-sm">
                        Available 24 hours a day, 7 days a week
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <a href="/services/emergency-service" className="relative group block">
                      <Image
                        src={customerServiceRep}
                        alt="Gardner Plumbing Co. customer service representative ready to take your emergency call"
                        width={400}
                        height={500}
                        loading="lazy"
                        className="w-full max-w-xs mx-auto rounded-xl sm:rounded-2xl border border-red-600/30 shadow-luxury group-hover:shadow-2xl transition-all duration-500"
                      />

                    </a>
                  </div>

                  <a href="tel:9512464337">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 mt-auto rounded-xl sm:rounded-2xl shadow-luxury border border-red-400/20 hover-lift group text-sm sm:text-base"
                    >
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300" />
                        Emergency Call Now
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Emergency */}
      </div>
    </section>
  );
}