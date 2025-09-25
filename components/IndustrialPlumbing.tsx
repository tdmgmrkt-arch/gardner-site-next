import { Button } from "./ui/button";
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
  Truck,
  MapPin,
  HelpCircle,
  Mail,
  Star,
  Droplets,
  Zap,
  FlaskConical,
  Server,
  Warehouse,
  Flame,
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

export function IndustrialPlumbing() {
  const serviceAreas = [
    "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake",
    "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Hemet",
  ];

  const offerings = [
    {
      icon: Flame,
      title: "Process & Utility Piping",
      desc: "Installation and repair of systems for compressed air, gases, steam, and water.",
      bullets: ["High-purity orbital welding", "Boiler & chiller hookups", "Seismic bracing"],
      link: "/contact-us",
    },
    {
      icon: FlaskConical,
      title: "Industrial Waste & Drains",
      desc: "Specialized drainage solutions for chemical, acid, and high-temp trade waste.",
      bullets: ["Acid waste systems (CPVC)", "Interceptor installation", "High-volume drainage"],
      link: "/services/sewer-and-septic",
    },
    {
      icon: Zap,
      title: "High-Pressure Hydro Jetting",
      desc: "Clearing large-diameter mains of industrial scale, debris, and blockages.",
      bullets: ["Scheduled line cleaning", "Confined space certified", "Restores full flow"],
      link: "/services/hydro-jetting",
    },
    {
      icon: Wrench,
      title: "Mechanical & Equipment",
      desc: "Hookups and plumbing for industrial machinery, pumps, and plant equipment.",
      bullets: ["Hydraulic lines", "Cooling tower piping", "Pump alignment & install"],
      link: "/contact-us",
    },
    {
      icon: Clock,
      title: "Shutdown Maintenance",
      desc: "Scheduled preventive maintenance and repairs during planned plant shutdowns.",
      bullets: ["Valve exercising programs", "System inspections", "Pre-shutdown planning"],
      link: "/services/maintenance-plans",
    },
    {
      icon: Shield,
      title: "Compliance & Safety",
      desc: "Backflow prevention, safety showers, and eyewash stations to meet OSHA/ANSI codes.",
      bullets: ["RPZ installation/testing", "Tempered water systems", "Annual certifications"],
      link: "/services/backflow-prevention",
    },
  ];

  const industries = [
    { icon: Factory, label: "Manufacturing Plants" },
    { icon: Warehouse, label: "Warehouses & Logistics" },
    { icon: Droplets, label: "Food & Beverage Processing" },
    { icon: FlaskConical, label: "Chemical & Pharmaceutical" },
    { icon: Server, label: "Data Centers / Tech" },
    { icon: Truck, label: "Fleet & Vehicle Maintenance" },
  ];

  const faqs = [
    {
      q: "Can you work during our scheduled plant shutdowns?",
      a: "Yes. We specialize in coordinating with your operations team to perform critical maintenance, repairs, and installations during planned shutdowns to eliminate production downtime.",
    },
    {
      q: "Are your plumbers certified for specialty piping like orbital welding?",
      a: "Absolutely. Our industrial team includes certified welders and technicians experienced with high-purity process piping, stainless steel, and other specialized industrial systems.",
    },
    {
      q: "How do you ensure jobsite safety in an industrial environment?",
      a: "Safety is our top priority. Our teams are OSHA-trained and adhere to strict safety protocols, including LOTO (Lockout/Tagout), confined space entry procedures, and site-specific safety plans.",
    },
    {
      q: "Do you handle industrial waste and chemical drain lines?",
      a: "Yes. We design, install, and repair specialized drainage systems for industrial and chemical waste, using appropriate materials like CPVC to ensure safety and compliance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span><ArrowRight className="h-4 w-4" /><span>Services</span><ArrowRight className="h-4 w-4" /><span className="text-red-400">Industrial Plumbing</span>
                </div>
              </nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Factory className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Industrial & Process Piping</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Specialized <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Industrial Plumbing</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Safety-focused plumbing services for manufacturing, warehousing, and processing facilities. We keep your operations running safely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl shadow-lg">
                    <span className="flex items-center gap-3"><Phone className="h-5 w-5" />Talk to an Industrial Specialist</span>
                  </Button>
                </a>
                <a href="/contact-us">
                  <Button size="lg" variant="outline" className="border-2 border-blue/60 text-black hover:bg-black hover:text-white px-8 py-4 rounded-xl">
                    <span className="flex items-center gap-3"><Calendar className="h-5 w-5" />Request Plant Assessment</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <Image src="/industrial-piping-facility.webp" alt="Complex industrial piping in a manufacturing plant" width={1000} height={600} className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    End-to-End <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Industrial Solutions</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {offerings.map((item) => (
                    <Card key={item.title} className="group relative border-none overflow-hidden shadow-luxury bg-[#202020]">
                        <CardHeader className="text-center pb-4 pt-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                <item.icon className="h-8 w-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
                        </CardHeader>
                        <CardContent className="px-6 pb-8">
                            <p className="text-gray-300 text-center mb-4">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <Image src="/gardnerteammembersunloading.webp" alt="Industrial plumbing technicians on a job site" width={1000} height={700} className="w-full h-96 object-cover rounded-3xl shadow-luxury" />
            </div>
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30">
                <Users className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Industrial Sectors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                Solutions for <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Demanding Environments</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((i) => (
                  <div key={i.label} className="flex items-center gap-3 p-4 glassmorphism-dark rounded-xl border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-lg flex items-center justify-center">
                      <i.icon className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-white font-medium">{i.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
<section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
  {/* Background Layers */}
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
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)
        `,
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16 sm:mb-20 animate-fade-in">
      <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
        <HelpCircle className="h-5 w-5 text-blue-400" />
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
          FAQ
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
        Industrial Plumbing{" "}
        <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
        Get clear answers to common industrial plumbing issues, repairs, and
        maintenance questions.
      </p>
    </div>

    {/* Accordion Card */}
    <div className="mb-16 sm:mb-20 animate-slide-up">
      <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
        {/* Header Bar */}
        <div
          className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8"
          style={{
            background: `linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #1D4ED8 100%)`,
            boxShadow: `
              inset 0 2px 0 rgba(255, 255, 255, 0.2),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2),
              0 8px 32px rgba(29, 78, 216, 0.4)
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

        {/* Accordion Items */}
        <div className="p-6 sm:p-8 lg:p-10">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 sm:space-y-6"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage:
                    "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                {/* Inner Dark Gradient */}
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>

                {/* Content */}
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
                    <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">
                      {f.a}
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


      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="py-12 sm:py-16" style={{ background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%)` }}>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Keep Your <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Plant Operational</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Contact our industrial team to discuss your project or maintenance needs.
              </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 text-white w-full py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" />Call (951) 246-4337</span>
                </Button>
              </a>
              <a href="/contact-us" className="flex-1">
                <Button size="lg" className="border-2 border-white/60 text-white bg-transparent w-full py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" />Message Us</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}