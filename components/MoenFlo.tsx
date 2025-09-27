import { SchedulerModal } from "./SchedulerModal";
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

export function MoenFlo() {
  // Using your Moen Flow page data

const emergencyReasons = [ // Renamed from leakSources to match original variable name for styling
    "Burst Pipes & Supply Lines",
    "Leaking Toilets",
    "Faulty Appliances (Washers, etc.)",
    "Slab Leaks",
    "Frozen Pipes",
    "Dripping Faucets",
    "Water Heater Leaks",
    "Unusual Water Usage"
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
      question: "What is the Moen Flow Smart Water Monitor?",
      answer: "The Moen Flow is a smart home device that monitors your home's water usage 24/7. It learns your habits and can detect leaks as small as a drip per minute. If a catastrophic leak occurs, it can automatically shut off your water to prevent damage."
    },
    {
      question: "How does the automatic water shutoff work?",
      answer: "The Moen Flow is installed on your main water line. If it detects a major leak or you manually trigger it via the app, it closes an internal valve, stopping water flow to your entire home. Our certified installation ensures it's installed correctly for reliable operation."
    },
    {
      question: "Can I get discounts on my homeowner's insurance?",
      answer: "Many insurance providers offer significant discounts for homes with smart water monitors and automatic shutoff valves like the Moen Flow. Check with your provider for specific details on potential savings."
    },
    {
      question: "What can I do with the Moen app?",
      answer: "The app is your command center. You can view real-time water usage, set conservation goals, receive leak alerts, and remotely shut off your water from anywhere in the world. It provides complete control over your home's water."
    },
    {
      question: "Why do I need a certified professional for installation?",
      answer: "Proper installation on the main water line is crucial for the device to work correctly. As Certified Moen Installers, we ensure the device is placed optimally, calibrated, and connected to your network, guaranteeing its performance and protecting your warranty."
    },
    {
      question: "How long does the installation take?",
      answer: "A standard installation by our certified technicians typically takes between 1 to 2 hours. We handle everything from cutting the pipe to setting up the app, ensuring a seamless experience for you."
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: "Certified Installation",
      description: "Our Moen-certified technicians ensure your device is installed correctly on the main water line for optimal performance.",
      features: ["Moen Certified", "Warranty Protected", "System Calibration", "App Setup"]
    },
    {
      icon: Shield,
      title: "24/7 Leak Detection",
      description: "The device runs daily Health Tests and continuously monitors for leaks, from tiny drips to major bursts.",
      features: ["Micro-Leak Detection", "Pressure/Temp Alerts", "Freeze Detection", "Always On"]
    },
    {
      icon: Zap,
      title: "Auto Water Shutoff",
      description: "In the event of a catastrophic leak, the Moen Flow can automatically shut off your water to prevent damage.",
      features: ["Remote Shutoff", "Automatic Protection", "Emergency Override", "Peace of Mind"]
    },
    {
      icon: Droplets,
      title: "Usage Monitoring",
      description: "Track water usage by fixture, set conservation goals, and identify areas to save money on your water bill.",
      features: ["Real-time Data", "Usage by Fixture", "Conservation Goals", "Cost Savings"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Prevent Water Damage",
      description: "Stop catastrophic leaks in their tracks and protect your home from costly water damage repairs."
    },
    {
      icon: Droplets,
      title: "Conserve & Save",
      description: "Monitor water usage to identify waste, set goals, and lower your monthly water bill."
    },
    {
      icon: DollarSign,
      title: "Lower Insurance Rates",
      description: "Many insurance providers offer discounts for homes protected by a smart water shutoff device."
    },
    {
      icon: Award,
      title: "Moen Certified",
      description: "Our technicians are officially certified by Moen to provide expert installation and support."
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
          
          {/* Premium texture overlay - STYLED LIKE HYDRO-JETTING */}
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
              {/* Breadcrumb - STYLED LIKE HYDRO-JETTING */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <a href="/" className="hover:text-white">Home</a>
                  <ArrowRight className="h-4 w-4" />
                  <a href="/services" className="hover:text-white">Services</a>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-red-400">Moen Flow Installation</span>
                </div>
              </nav>

              {/* Badge - STYLED LIKE HYDRO-JETTING */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Award className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Certified Moen Installer</span>
              </div>
              
              {/* H1 - STYLED LIKE HYDRO-JETTING */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Moen Flow Smart Water <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Monitor Installation</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Protect your home 24/7 from water damage. We provide certified installation of the Moen Flow Smart Water Monitor to help you conserve water and prevent leaks.
              </p>

              {/* Key Benefits - STYLED LIKE HYDRO-JETTING */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "24/7 Leak Alerts" },
                  { icon: Shield, text: "Protect Your Home" },
                  { icon: DollarSign, text: "Save on Water Bills" },
                  { icon: Wrench, text: "Pro Installation" }
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
                  src="/moen-whole-house-water-filter-system.webp"
                  alt="Moen Flow Smart Water Monitor installed on a home's main water line"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Floating badge - STYLED LIKE HYDRO-JETTING */}
                <div className="absolute bottom-4 left-4 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">24/7 Leak Detection</div>
                      <div className="text-gray-300 text-xs">Automatic Shutoff</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview - This section uses the blue/green theme from the original style */}
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
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Camera className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">System Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Total Home <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Water Management</span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Our certified installation service ensures your Moen Flow system provides real-time data, automatic shutoff, and complete peace of mind.
            </p>
          </div>

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

          <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">From Worried to Worry-Free</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Get alerts for leaks anywhere in your home, 24/7</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Shut off your water from anywhere using the app</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Automatically stops water during a major leak to prevent damage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Track water usage to conserve and save money</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury">
                  <Image
                    src="/moen-flow-app-dashboard.webp"
                    alt="Moen Flow app dashboard showing water usage and protection status"
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 bg-gradient-to-r from-red-900/40 to-transparent flex items-center justify-center">
                        <span className="text-white font-bold bg-red-600/80 px-3 py-1 rounded-full text-sm">UNPROTECTED</span>
                      </div>
                      <div className="w-1/2 bg-gradient-to-l from-green-900/40 to-transparent flex items-center justify-center">
                        <span className="text-white font-bold bg-green-600/80 px-3 py-1 rounded-full text-sm">PROTECTED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - This section uses the green/blue theme from the original style */}
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
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                <Image
                src="/moen-whole-house-water-filter-system.webp"
                alt="Professional Gardner Plumbing Co. technician installing a Moen Flow device"
                width={1000}
                height={700}
                className="w-full h-96 object-cover rounded-3xl"
              />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Moen Certified</div>
                    <div className="text-gray-300 text-xs">Installer</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Certified Moen Installers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Riverside County's Trusted <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Certified</span> Moen Flow Installers
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-[16px]">
                As officially certified Moen installers, we have the expertise to perfectly integrate the Flo Smart Water Monitor into your home's plumbing system, ensuring flawless operation and protection.
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
              <a href="/contact-us">
                <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-xl shadow-lg border border-green-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Get Free Estimate
                  </span>
                </Button>
              </a>
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
            {/* H2 - STYLED LIKE HYDRO-JETTING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Serving All of{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional Moen Flow installation services are available throughout Riverside County with fast, reliable scheduling.
            </p>
          </div>
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
          <div className="text-center">
            <div className="glassmorphism-dark rounded-2xl p-8 border border-white/10 shadow-luxury inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don't See Your Area?
              </h3>
              <p className="text-gray-300 mb-6">
                We serve additional areas throughout Riverside County. Call to confirm service availability.
              </p>
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
            {/* H2 - STYLED LIKE HYDRO-JETTING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Moen Flow <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about the Moen Flow monitor, our installation process, and how it protects your home.
            </p>
          </div>

          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              {/* Premium Red Banner Header - STYLED LIKE HYDRO-JETTING */}
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
                      {/* Gradient Border Effect - STYLED LIKE HYDRO-JETTING */}
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

          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-glow">
                  <HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Have More Questions?</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Our Moen Flow experts are standing by to answer your questions and schedule your certified installation service.
              </p>
              {/* CTA Buttons - STYLED LIKE HYDRO-JETTING */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a href="/frequently-asked-questions">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 sm:py-4 transition-all duration-300 rounded-xl shadow-lg border border-blue-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                      View Full FAQ
                    </span>
                  </Button>
                </a>
                <a href="/contact-us">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 sm:py-4 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                      Contact Us
                    </span>
                  </Button>
                </a>
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
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Prevent Catastrophic Leaks
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Automatic Protection From Plumbing{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Disasters
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A burst pipe can release gallons of water per minute, causing thousands in damage. The Moen Flow detects these disasters and automatically shuts off the water to protect your home.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Leaks Detected & Prevented:
                </h3>
                {/* List - STYLED LIKE HYDRO-JETTING */}
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

            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/moen-whole-house-water-filter-system.webp"
                  alt="Certified Moen Flow installer working to prevent a plumbing emergency"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />


                {/* Floating Emergency Badge - STYLED LIKE HYDRO-JETTING */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Automatic Shutoff</div>
                      <div className="text-gray-300 text-xs">Damage Prevention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              {/* Icon - STYLED LIKE HYDRO-JETTING */}
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              {/* H2 - STYLED LIKE HYDRO-JETTING */}
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Ready for a Smarter, Safer Home <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">with Moen Flow?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Get peace of mind with 24/7 leak protection. Contact us for a free estimate on your Moen Flow installation.
              </p>
            </div>
            {/* CTA Buttons - STYLED LIKE HYDRO-JETTING */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="tel:9512464337" className="flex-1">
                <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
              </a>
              <a href="/contact-us" className="flex-1">
                <Button size="lg" className="w-full border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                  <span className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Get a Free Estimate
                  </span>
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center text-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Fast Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Moen Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}