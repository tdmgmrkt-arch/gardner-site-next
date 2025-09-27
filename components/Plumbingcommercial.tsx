import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Building2,
  Wrench,
  Phone,
  Calendar,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  DollarSign,
  Users,
  Factory,
  Store,
  Hotel,
  School,
  Utensils,
  Dumbbell,
  Truck,
  MapPin,
  HelpCircle,
  Mail,
  Star,
  Droplets,
  Zap,
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

export function Plumbingcommercial() {
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
    "Hemet",
  ];

  const offerings = [
    {
      icon: Wrench,
      title: "Full-System Design & Install",
      desc: "Code-compliant design/build for new construction and tenant improvements.",
      bullets: ["Value engineering", "Permit support", "As-builts & closeout"],
      link: "/contact-us",
    },
    {
      icon: Zap,
      title: "Piping & Repiping",
      desc: "Copper, PEX, steel, and PVC for domestic, drain, and vent systems.",
      bullets: ["Corrosion solutions", "Isolation valving", "Phased work"],
      link: "/services/piping-and-repiping",
    },
    {
      icon: Droplets,
      title: "Drain & Sewer",
      desc: "Stoppages cleared and lines restored with minimal downtime.",
      bullets: ["Camera inspection", "Localized repair", "Grease management"],
      link: "/services/sewer-and-septic",
    },
    {
      icon: Zap,
      title: "Hydro Jetting",
      desc: "High-pressure jetting to cut roots, grease, and scale from mains.",
      bullets: ["Maintenance plans", "Video verification", "24/7 availability"],
      link: "/services/hydro-jetting",
    },
    {
      icon: Clock,
      title: "Preventive Maintenance",
      desc: "Scheduled service to avoid failures and keep operations running.",
      bullets: ["Custom PM routes", "Reporting & tracking", "Priority response"],
      link: "/services/maintenance-plans",
    },
    {
      icon: Shield,
      title: "Backflow & Compliance",
      desc: "Testing, repair, and replacement to meet local regulations.",
      bullets: ["Annual testing", "Repairs & rebuilds", "Certification"],
      link: "/contact-us",
    },
  ];

  const industries = [
    { icon: Store, label: "Retail / Shopping Centers" },
    { icon: Hotel, label: "Hospitality / Hotels" },
    { icon: School, label: "Schools / Campuses" },
    { icon: Factory, label: "Industrial / Warehouses" },
    { icon: Utensils, label: "Restaurants / Kitchens" },
    { icon: Dumbbell, label: "Gyms / Health Clubs" },
  ];

  const benefits = [
    { icon: Users, title: "Dedicated Commercial Team", desc: "Experienced foremen and techs who understand occupancy and safety constraints." },
    { icon: Clock, title: "Minimal Downtime", desc: "Night/weekend scheduling and phased work to keep you open." },
    { icon: DollarSign, title: "Upfront, Itemized Pricing", desc: "Clear scopes and estimates before we start." },
    { icon: Shield, title: "Licensed • Insured • Bonded", desc: "COIs available upon request; jobsite safety first." },
  ];

  const faqs = [
    {
      q: "Do you offer after-hours commercial service?",
      a: "Yes. We schedule night and weekend work to reduce business interruption and can dispatch 24/7 for emergencies.",
    },
    {
      q: "Can you provide proposals from plans?",
      a: "Absolutely. Send PDFs or CAD exports; we’ll provide a detailed scope, takeoffs, and a clear proposal.",
    },
    {
      q: "Do you maintain service logs for multi-site clients?",
      a: "Yes. We track work history, images, recommended PM intervals, and provide consolidated reporting.",
    },
    {
      q: "Are permits and inspections included?",
      a: "We coordinate permitting and inspections when required and include those costs in our proposals unless otherwise noted.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="text-left animate-fade-in">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>Services</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-red-400">Commercial Plumbing</span>
                </div>
              </nav>

              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Building2 className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Commercial Plumbing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Reliable{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Commercial Plumbing
                </span>{" "}
                for Your Business
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                From design/build to <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">urgent repairs</Link> and maintenance, we keep your facility compliant and operational with minimal downtime. Our work follows <a href="https://www.ibc-codes.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">IBC standards</a>.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock, text: "Night/Weekend Work" },
                  { icon: DollarSign, text: "Upfront Pricing" },
                  { icon: Star, text: "Top-Rated Local" },
                ].map((i, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <i.icon className="h-5 w-5 text-red-400" />
                    <span className="font-medium">{i.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call (951) 246-4337
                    </span>
                  </Button>
                </a>
                <a href="/contact-us">
                  <Button size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <span className="flex items-center justify-center gap-3">
                      <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Request Proposal
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnercrewarrival.webp"
                  alt="Commercial plumbing crew on a jobsite"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                <div className="absolute bottom-6 right-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Truck className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">On-Site Quickly</div>
                      <div className="text-gray-300 text-xs">Minimize downtime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
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
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <Wrench className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Commercial Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              End-to-End <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Facility Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Design, install, repair, and maintain — all with one accountable partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
                  style={{ backgroundColor: "#202020", backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-red-600 group-hover:to-orange-500 transition-all duration-500 shadow-lg">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mt-4 group-hover:text-red-100 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <p className="text-gray-300 text-center mb-4">{item.desc}</p>
                      <ul className="space-y-2 mb-6">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-center">
                        <a href={item.link}>
                          <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-5 py-2 rounded-lg shadow-lg border border-red-400/20 group/btn">
                            <span className="flex items-center gap-2">
                              Learn More
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
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
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnerteammembersunloading.webp"
                  alt="Commercial plumbing technicians on site"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Users className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Built for{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Busy Facilities
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((i) => {
                  const Icon = i.icon;
                  return (
                    <div key={i.label} className="flex items-center gap-3 p-4 glassmorphism-dark rounded-xl border border-white/10">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-red-400" />
                      </div>
                      <span className="text-white font-medium">{i.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg border border-red-400/20">
                    Talk to a Commercial Specialist
                  </Button>
                </a>
                <a href="/contact-us">
                  <Button variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-xl">
                    Request Site Walk
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Serving Businesses Across{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rapid response for multi-site portfolios and single-location facilities.
            </p>
          </div>

          <div className="grid gap-4 mb-12" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {serviceAreas.map((area) => (
              <a
                key={area}
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

          <div className="text-center">
            <div className="glassmorphism-dark rounded-2xl p-8 border border-white/10 shadow-luxury inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">Not Listed Here?</h3>
              <p className="text-gray-300 mb-6">Call to confirm coverage or schedule a site assessment.</p>
              <a href="tel:9512464337">
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

      {/* FAQ */}
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
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Commercial Plumbing{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Quick answers about proposals, scheduling, and operations.
            </p>
          </div>

          <div className="mb-16 sm:mb-20">
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Questions & Answers</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
                  {faqs.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl"
                      style={{ backgroundColor: "#202020", backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                      <div className="relative z-10">
                        <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-500 px-6 sm:px-8 py-6 sm:py-8 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                          <span className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-blue-600 group-hover/trigger:to-blue-500 transition-all duration-300">
                              <HelpCircle className="h-4 w-4 text-blue-400 group-hover/trigger:text-white transition-colors duration-300" />
                            </div>
                            {f.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-6 sm:pb-8 pt-0 px-6 sm:px-8 ml-12 border-l-2 border-blue-500/20 text-base sm:text-lg leading-relaxed">
                          <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">{f.a}</div>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Inline CTA */}
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in text-center">
            <p className="text-gray-300 mb-6">
              Ready for a proposal or maintenance plan? We’ll walk the site and tailor the scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9512464337">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5" />
                    Talk to Sales
                  </span>
                </Button>
              </a>
              <a href="/contact-us">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl shadow-lg border border-blue-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5" />
                    Request Walk-Through
                  </span>
                </Button>
              </a>
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
            boxShadow: `
              0 -12px 32px rgba(0, 0, 0, 0.4),
              0 12px 32px rgba(0, 0, 0, 0.6),
              0 -8px 24px rgba(31, 41, 55, 0.3),
              0 8px 24px rgba(31, 41, 55, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Keep Your{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Business Running
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                One partner for installs, repairs, and maintenance — on your schedule.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg border border-red-400/20 group w-full">
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>
              <a href="/contact-us" className="flex-1">
                <Button size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group bg-transparent w-full">
                  <span className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Message Us
                  </span>
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center text-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Night/Weekend Work</span>
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
    </div>
  );
}
