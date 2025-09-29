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
  Wrench,
  Phone,
  Calendar,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  DollarSign,
  Users,
  MapPin,
  HelpCircle,
  Mail,
  Star,
  Droplets,
  FileCheck2,
  Settings,
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

export function BackflowPrevention() {
  const serviceAreas = [
    "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake",
    "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Hemet",
  ];

  const offerings = [
    {
      icon: FileCheck2,
      title: "Annual Backflow Testing",
      desc: "Certified testing for all backflow assemblies to meet local water authority requirements.",
      bullets: ["AWWA Certified Testers", "Digital Test Reports", "Submission to Water District"],
      link: "/contact-us",
    },
    {
      icon: Wrench,
      title: "Backflow Repair & Rebuilds",
      desc: "Fast and reliable repairs for devices that fail testing, using OEM parts.",
      bullets: ["On-the-spot repairs", "OEM-spec rebuild kits", "Post-repair re-certification"],
      link: "/contact-us",
    },
    {
      icon: Shield,
      title: "New Device Installation",
      desc: "Code-compliant installation of new backflow preventers for any application.",
      bullets: ["RP, DCVA, PVB Assemblies", "Theft-deterrent enclosures", "Proper sizing & placement"],
      link: "/contact-us",
    },
    {
      icon: Settings,
      title: "Compliance Management",
      desc: "Complete program for property managers to track and schedule testing across multiple sites.",
      bullets: ["Annual reminders", "Multi-site portfolio tracking", "Digital records archive"],
      link: "/services/maintenance-plans",
    },
  ];

  const benefits = [
    { icon: Users, title: "Certified & Licensed Testers", desc: "Our technicians hold current certifications required by local water authorities." },
    { icon: Clock, title: "Hassle-Free Compliance", desc: "We handle the testing, paperwork, and submission for you." },
    { icon: DollarSign, title: "Avoid Fines & Penalties", desc: "Stay compliant with regulations and avoid costly fines or water service interruption." },
    { icon: Shield, title: "Protect Your Water Supply", desc: "Ensure your property is not a source of contamination for the community water system." },
  ];

  const faqs = [
    {
      q: "What is backflow and why is it dangerous?",
      a: "Backflow is the unwanted reverse flow of contaminated water into the clean public water supply. It can be caused by back-siphonage or back-pressure and poses a serious public health risk.",
    },
    {
      q: "Why is annual backflow testing required by the city?",
      a: "Backflow preventers are mechanical devices with internal seals, springs, and moving parts that can wear out or fail. Annual testing is mandated by law to ensure they are functioning correctly to protect the public water supply.",
    },
    {
      q: "What happens if my backflow device fails the test?",
      a: "If a device fails, it must be repaired or replaced immediately to bring it into compliance. Our technicians are equipped to perform most repairs on the spot, followed by a re-test to certify its operation.",
    },
    {
      q: "Do you submit the test results to the water authority for me?",
      a: "Yes. As part of our service, we complete all required legal documentation and submit the certified test results directly to your local water district on your behalf.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span><ArrowRight className="h-4 w-4" /><span>Services</span><ArrowRight className="h-4 w-4" /><span className="text-red-400">Backflow Prevention</span>
                </div>
              </nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Water Safety & Compliance</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Certified <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Backflow Prevention</span> Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Protect your water supply and stay compliant with local regulations. We provide certified backflow testing, repairs, and installations for <Link href="/services/commercial-plumbing" className="text-red-400 hover:text-red-300 underline">commercial properties</Link>. Our services meet <a href="https://www.awwa.org/policy-statement/cross-connection" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">AWWA standards</a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9512464337">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl shadow-lg">
                    <span className="flex items-center gap-3"><Phone className="h-5 w-5" />(951) 246-4337</span>
                  </Button>
                </a>
                <Link href="/contact-us">
                  <Button size="lg" variant="outline" className="border-2 border-blue/60 text-black hover:bg-black hover:text-white px-8 py-4 rounded-xl">
                    <span className="flex items-center gap-3"><Calendar className="h-5 w-5" />Schedule a Test</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <Image src="/backflowservices.webp" alt="Commercial backflow preventer assembly on the side of a building" width={1000} height={600} className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    Our <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Backflow Services</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {offerings.map((item) => (
                    <Card key={item.title} className="group relative border-none overflow-hidden shadow-lg bg-[#202020]">
                        <CardHeader className="text-center pb-4 pt-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center mx-auto">
                                <item.icon className="h-8 w-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
                        </CardHeader>
                        <CardContent className="px-6 pb-8">
                            <p className="text-gray-300 text-center">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <Image src="/gardnercrewarrival.webp" alt="Technician testing a backflow device with gauges" width={1000} height={700} className="w-full h-96 object-cover rounded-3xl shadow-luxury" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                The Gardner <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Compliance Advantage</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600/30 to-orange-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <b.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{b.title}</h4>
                      <p className="text-gray-400">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
  {/* Background */}
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
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
        Backflow{" "}
        <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
        Everything you need to know about backflow prevention, testing, and compliance.
      </p>
    </div>

    {/* Accordion Wrapper */}
    <div className="mb-16 sm:mb-20 animate-slide-up">
      <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
        {/* Section Header Bar */}
        <div
          className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8"
          style={{
            background: `linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #1D4ED8 100%)`,
            boxShadow: `
              inset 0 2px 0 rgba(255, 255, 255, 0.2),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2),
              0 8px 32px rgba(37, 99, 235, 0.4)
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
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                {/* Inner Layer */}
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>

                {/* Question/Answer */}
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
                Schedule Your <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Backflow Test</span> Today
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Ensure your property is compliant and your water is safe. Contact us to schedule service.
              </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 text-white w-full py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" />(951) 246-4337</span>
                </Button>
              </a>
              <a href="/contact-us" className="flex-1">
                <Button size="lg" className="border-2 border-white/60 text-white bg-transparent w-full py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2"><Calendar className="h-4 w-4" />Book Online</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}