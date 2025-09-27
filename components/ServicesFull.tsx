import { Button } from "./ui/button";
import Link from "next/link";
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
  Settings,
  Hammer,
  Thermometer,
  Layers,
  AlertTriangle,
  Camera,
  Recycle,
  MapPin
} from "lucide-react";

export function ServicesFull() {
  const residentialServices = [
    {
      icon: Droplets,
      title: "Drain\nCleaning",
      description: "Professional drain clearing and maintenance services to keep your plumbing flowing smoothly.",
      features: ["Hydro-Jetting", "Video Inspection", "Root Removal", "Preventive Maintenance"],
      link: "/services/drain-cleaning"
    },
    {
      icon: Wrench,
      title: "Leak Detection/\nRepair",
      description: "Advanced leak detection technology and expert repair services for quick, efficient solutions.",
      features: ["Electronic Detection", "Slab Leak Repair", "Pipe Replacement", "Emergency Service"],
      link: "/services/leak-detection"
    },
    {
      icon: Zap,
      title: "Water Heater Service",
      description: "Complete water heater installation, repair, and maintenance for optimal performance.",
      features: ["Tank & Tankless", "Energy Efficient", "Same-Day Service", "Warranty Included"],
      link: "/services/water-heater-service"
    },
    {
      icon: Home,
      title: "Bathroom Plumbing",
      description: "Complete bathroom plumbing solutions from fixture repairs to full bathroom remodels.",
      features: ["Toilet Repair", "Shower/Tub Installation", "Fixture Upgrades", "Pipe Relocation"]
    },
    {
      icon: Settings,
      title: "Kitchen\nPlumbing",
      description: "Professional kitchen plumbing services for all your culinary space needs.",
      features: ["Garbage Disposal", "Faucet Installation", "Dishwasher Hookup", "Sink Replacement"]
    },
    {
      icon: Layers,
      title: "Pipe\nReplacement",
      description: "Complete pipe replacement services using modern materials and techniques.",
      features: ["Copper Piping", "PEX Installation", "Slab Repairs", "Whole House Repiping"],
      link: "/services/piping-and-repiping"
    },
    {
      icon: Thermometer,
      title: "Water Pressure\nSolutions",
      description: "Diagnose and fix water pressure issues throughout your home.",
      features: ["Pressure Testing", "Booster Pumps", "Valve Replacement", "System Optimization"]
    },
    {
      icon: Camera,
      title: "Video Camera\nInspection",
      description: "Advanced camera technology to inspect and diagnose pipe problems.",
      features: ["HD Video Recording", "Locate Blockages", "Damage Assessment", "Detailed Reports"]
    }
  ];

  const commercialServices = [
    {
      icon: Building,
      title: "Commercial Plumbing",
      description: "Professional plumbing solutions for businesses and commercial properties.",
      features: ["System Design", "Maintenance Plans", "Emergency Service", "Code Compliance"],
      link: "/services/commercial-plumbing"
    },
    {
      icon: Wrench,
      title: "Hydro-Jetting",
      description: "High-pressure water jetting for thorough pipe cleaning and blockage removal.",
      features: ["Eco-Friendly", "Root Cutting", "Grease Removal", "Video Verification"],
      link: "/services/hydro-jetting"
    },
    {
      icon: Hammer,
      title: "Industrial\nPlumbing",
      description: "Heavy-duty plumbing solutions for industrial facilities and manufacturing.",
      features: ["Process Piping", "Steam Systems", "Chemical Lines", "Safety Compliance"]
    },
    {
      icon: Recycle,
      title: "Backflow\nPrevention",
      description: "Professional backflow testing and prevention system installation.",
      features: ["Annual Testing", "Device Installation", "Repair Services", "Certification"]
    }
  ];

  const specialtyServices = [
    {
      icon: AlertTriangle,
      title: "Sewer Line\nRepair",
      description: "Complete sewer line inspection, cleaning, and repair services.",
      features: ["Trenchless Repair", "Full Replacement", "Root Removal", "Video Inspection"],
      link: "/services/sewer-and-septic"
    },
    {
      icon: MapPin,
      title: "Gas Line\nServices",
      description: "Safe and professional gas line installation and repair services.",
      features: ["Leak Detection", "Line Installation", "Pressure Testing", "Safety Inspections"],
      link: "/services/gas-lines"
    },
    {
      icon: Shield,
      title: "Water Quality\nSolutions",
      description: "Comprehensive water testing and filtration system installation.",
      features: ["Water Testing", "Filtration Systems", "Softener Installation", "UV Sterilization"],
      link: "/services/water-filtration-system"
    },
    {
      icon: Settings,
      title: "Fixture\nInstallation",
      description: "Professional installation of all plumbing fixtures and appliances.",
      features: ["Toilets & Sinks", "Bathtubs & Showers", "Faucets & Valves", "Appliance Hookups"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Enhanced Background with Premium Gradients */}
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
          
          {/* Premium texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Section Header - Two Column Layout */}
          <div className="mb-16 sm:mb-20 animate-fade-in">
            {/* Two Column Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="text-left">
                {/* Left-aligned Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                    <Wrench className="h-5 w-5 text-red-400" />
                    <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Complete Services</span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgba(255,255,255,1)] mb-8 drop-shadow-lg leading-tight">
                  Professional <span className="text-white">Plumbing</span> <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  From routine maintenance to <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">emergency repairs</Link>, Gardner Plumbing Co. provides comprehensive plumbing solutions for homes and businesses throughout Temecula, Murrieta, Perris, Menifee, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and surrounding Riverside County communities.
                </p>
              </div>
              
              {/* Right Column - Fleet Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 max-w-lg w-full">
                  <Image
                    src="/gardnertrucks.webp"
                    alt="Gardner Plumbing Co. professional facility and fleet of service vehicles ready to serve customers"
                    width={1000}
                    height={750}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: '4/3' }}
                  />

                  
                  {/* Premium overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                        <Wrench className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Professional Fleet</div>
                        <div className="text-gray-300 text-xs">Ready to Serve</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Residential Services */}
          <div className="mb-20 sm:mb-24 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              {/* Premium Red Banner Header */}
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
                    <Home className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Residential Services</h2>
                </div>
              </div>
              
              {/* Enhanced Cards Section */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {residentialServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-fade-in" style={{ 
                        backgroundColor: '#202020',
                        backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                        animationDelay: `${index * 100}ms`
                      }}>
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                        <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                        
                        <div className="relative z-10">
                          <CardHeader className="text-center pb-4 pt-8 flex-shrink-0">
                            <div className="relative mb-6">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-red-500/20">
                                <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                              </div>
                              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                              {service.title.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index < service.title.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </h3>
                          </CardHeader>
                          <CardContent className="px-6 pb-8 flex flex-col flex-grow">
                            <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm group/item">
                                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                                    <CheckCircle className="h-3 w-3 text-green-400 transition-transform duration-300" />
                                  </div>
                                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <a href={service.link}>
                            <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-3 group/btn">
                              <span className="flex items-center justify-center gap-2">
                                Learn More
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                            </a>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Commercial Services */}
          <div className="mb-20 sm:mb-24 animate-slide-up">
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
                <div id = 'commercial-services' className="relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                    <Building className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Commercial Services</h2>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                  {commercialServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ 
                        backgroundColor: '#202020',
                        backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)'
                      }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                        <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                        
                        <CardContent className="relative z-10 p-8 lg:p-10 flex flex-col flex-grow">
                          <div className="flex flex-col sm:flex-row items-start gap-6 flex-grow">
                            <div className="relative mx-auto sm:mx-0">
                              <div className="w-20 h-20 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-2xl flex items-center justify-center group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-red-500/20">
                                <IconComponent className="h-10 w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                              </div>
                              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">{service.title}</h3>
                              <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-3 text-sm group/item justify-center sm:justify-start">
                                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                                      <CheckCircle className="h-3 w-3 text-green-400 transition-transform duration-300" />
                                    </div>
                                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <a href={service.link}>
                              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-3 px-8 group/btn">
                                <span className="flex items-center justify-center gap-2">
                                  Learn More
                                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
              </div>
            </div>
          </div>

          {/* Enhanced Specialty Services */}
          <div className="mb-20 sm:mb-24 animate-slide-up">
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
                    <Settings className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Specialty Services</h2>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {specialtyServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-fade-in" style={{ 
                        backgroundColor: '#202020',
                        backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                        animationDelay: `${index * 100}ms`
                      }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                        <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                        
                        <div className="relative z-10">
                          <CardHeader className="text-center pb-4 pt-8 flex-shrink-0">
                            <div className="relative mb-6">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-red-500/20">
                                <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-red-400 group-hover:text-white transition-all duration-500" />
                              </div>
                              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                              {service.title.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index < service.title.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </h3>
                          </CardHeader>
                          <CardContent className="px-6 pb-8 flex flex-col flex-grow">
                            <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm group/item">
                                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                                    <CheckCircle className="h-3 w-3 text-green-400 transition-transform duration-300" />
                                  </div>
                                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <a href={service.link}>
                            <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-3 group/btn">
                              <span className="flex items-center justify-center gap-2">
                                Learn More
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                            </a>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Emergency Services */}
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
                    <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">24/7 Emergency Service</h2>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Always Available When You Need Us</h3>
                    <div className="mb-6 flex justify-center lg:justify-start">
                      <div className="relative group">
                        <Image
                          src="/GardnerPlumbingCoEmergencyTech.webp"
                          alt="Professional Gardner Plumbing technician providing reliable service"
                          width={400}
                          height={500}
                          className="w-full max-w-xs mx-auto rounded-2xl border border-gray-600/30 shadow-luxury group-hover:shadow-2xl transition-all duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Plumbing emergencies don't wait for business hours. Our emergency team is available 24/7 to handle urgent plumbing issues with rapid response and professional expertise.
                    </p>
                  </div>
                  
                  <div className="flex flex-col order-3 lg:order-2">
                    <div className="mb-6 flex justify-center">
                      <div className="relative group">
                        <Image
                          src="/GARDNERPPLUMBINGTRUCK.webp"
                          alt="Gardner Plumbing Co. service van ready for emergency calls"
                          width={500}
                          height={400}
                          className="w-full max-w-sm mx-auto rounded-2xl shadow-luxury group-hover:shadow-2xl transition-all duration-500"
                        />

                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { icon: Clock, title: "24/7 Availability", desc: "Day, night, weekends & holidays" },
                        { icon: Shield, title: "Licensed & Insured", desc: "Full protection & peace of mind" },
                        { icon: CheckCircle, title: "Rapid Response", desc: "Fast arrival times guaranteed" },
                        { icon: Wrench, title: "Fully Equipped Trucks", desc: "All tools & parts ready to go" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 group/item hover-lift">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-xl flex items-center justify-center group-hover/item:from-red-600 group-hover/item:to-red-500 transition-all duration-300">
                            <item.icon className="h-6 w-6 text-red-400 group-hover/item:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <div className="font-semibold text-white text-lg group-hover/item:text-red-100 transition-colors duration-300">{item.title}</div>
                            <div className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center order-1 lg:order-3 flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-luxury hover-lift" style={{ 
                      background: `linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%)`,
                      boxShadow: `
                        0 20px 40px rgba(139, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                      `
                    }}>
                      <div 
                        className="absolute inset-0 opacity-40"
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
                      <div className="relative p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">(951) 246-4337</div>
                        <div className="text-red-100 font-semibold mb-1 drop-shadow-sm">Call Now for Emergency Service</div>
                        <div className="text-white/80 text-sm drop-shadow-sm">Available 24 hours a day, 7 days a week</div>
                      </div>
                    </div>
                    <div className="mb-6 flex justify-center">
                      <div className="relative group">
                        <Image
                          src="/GardnerPlumbingCoCSrep.webp"
                          alt="Gardner Plumbing customer service representative ready to take your emergency call"
                          width={400}
                          height={500}
                          className="w-full max-w-xs mx-auto rounded-2xl border border-red-600/30 shadow-luxury group-hover:shadow-2xl transition-all duration-500"
                        />

                      </div>
                    </div>
                    <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 transition-all duration-300 mt-auto rounded-2xl shadow-luxury border border-red-400/20 hover-lift group">
                      <span className="flex items-center justify-center gap-3">
                        <Phone className="h-5 w-5 transition-transform duration-300" />
                        Emergency Call Now
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}