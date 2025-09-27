import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { Input } from "./ui/input";
import Image from "next/image";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  DollarSign,
  Wrench,
  AlertTriangle,
  Star,
  Calendar,
  Award,
  Mail,
  Zap
} from "lucide-react";

export function MaintenanceAgreement() {
  const maintenanceFeatures = [
    { icon: Wrench, title: "Up to 56 PT\nTune-Up", description: "Comprehensive system inspection and maintenance to keep your plumbing running smoothly.", features: ["Full System Check", "Performance Testing", "Safety Inspection", "Written Report"] },
    { icon: Clock, title: "24 Hour\nResponse Time", description: "Priority emergency service with guaranteed rapid response when you need it most.", features: ["Priority Service", "Emergency Response", "Weekend Coverage", "Holiday Service"] },
    { icon: DollarSign, title: "Up to 25%\nDiscount on Repairs", description: "Significant savings on all repair services and parts with your maintenance agreement.", features: ["Repair Discounts", "Parts Savings", "Labor Discounts", "Equipment Savings"] },
    { icon: Shield, title: "Extended\nWarranty", description: "Enhanced warranty coverage on all repairs and maintenance work performed.", features: ["Extended Coverage", "Parts Warranty", "Labor Warranty", "Peace of Mind"] }
  ];

  const benefits = [
    { icon: DollarSign, title: "Cost Savings", description: "Save money through early problem detection and exclusive member discounts on repairs and services." },
    { icon: Clock, title: "Extended Equipment Life", description: "Regular maintenance extends the lifespan of your plumbing fixtures and prevents premature failure." },
    { icon: Star, title: "Improved Water Quality", description: "Clean and inspect water lines to ensure optimal water quality for your family's health and safety." },
    { icon: Shield, title: "Priority Service", description: "Jump to the front of the line with priority emergency service and guaranteed response times." }
  ];

  const includedServices = [
    "Up to 56 PT Tune-Up",
    "Extend equipment life",
    "24 hour response time",
    "Priority Service",
    "Fully Transferable",
    "Annual Water heater flush",
    "Never a premium charge",
    "Up to 25% Discount on Repairs",
    "Maximize energy efficiency",
    "Multi Year/Unit Discount",
    "Annual Plumbing safety inspection",
    "Comfort Guarantee (Hotel Stay)",
    "Up to 10% Discount on new equipment purchases",
    "Maintenance/Safety Inspections per year",
    "Periodic specials and promotions",
    "Extended warranty on repairs",
    "One free drain clearing per year",
    "Written Maintenance Report"
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
              
              {/* Premium texture overlay */}
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
              {/* Breadcrumb */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>Services</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-red-400">Maintenance Agreement</span>
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Maintenance Agreement</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Get Started with Your <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Maintenance Agreement</span> Now
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Secure your home's future with comprehensive plumbing maintenance agreements that provide numerous benefits and peace of mind for homeowners. View our complete <Link href="/services" className="text-red-400 hover:text-red-300 underline">plumbing services</Link>.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Priority Service" },
                  { icon: Shield, text: "25% Discount" },
                  { icon: DollarSign, text: "Cost Savings" },
                  { icon: Phone, text: "24/7 Response" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-5 w-5 text-green-400" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href = "tel:9512464337">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
                </a>
                <Button size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                  <span className="flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Sign Up Today
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnervanready.webp"
                  alt="Professional plumbers using hydro-jetting equipment to clear drain"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none -z-10"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Maintenance Plan</div>
                      <div className="text-gray-300 text-xs">Peace of Mind</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="relative">
        <div
          className="relative py-2 sm:py-3"
          style={{
            background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
            boxShadow: `
              inset 0 2px 0 rgba(255, 255, 255, 0.2),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2),
              0 8px 32px rgba(139, 0, 0, 0.4),
              0 -8px 32px rgba(139, 0, 0, 0.3),
              0 12px 24px rgba(0, 0, 0, 0.6),
              0 -12px 24px rgba(0, 0, 0, 0.4)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-30 -z-10 pointer-events-none"
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-white animate-pulse flex-shrink-0" />
                <span className="text-white font-bold text-lg sm:text-xl">Protect Your Home</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a href="tel:9512464337" className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
                  <Phone className="h-5 w-5 text-red-100" />
                  <span className="text-white font-bold text-lg">(951) 246-4337</span>
                </a>
                <span className="text-red-100 font-semibold text-sm sm:text-base">Sign Up for a Maintenance Plan Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
        <section
          className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
              linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
            `
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Wrench className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Preventative Maintenance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Complete <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Maintenance</span> Programs
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Regular maintenance is key to preventing major plumbing issues before they arise. Our experienced plumbers conduct thorough inspections and routine maintenance, identifying and addressing minor problems early. Learn about <Link href="/services/emergency-service" className="text-red-400 hover:text-red-300 underline">emergency services</Link> when you need them.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {maintenanceFeatures.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ 
                  backgroundColor: '#202020',
                  backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                  animationDelay: `${index * 100}ms`
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none -z-10"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg pointer-events-none -z-10"></div>
                  
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg">
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300 whitespace-pre-line">{service.title}</h3>
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
        </div>
      </section>

      {/* Sign-Up Form Section */}
      <section
          className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
            `
          }}
        >

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Sign Up Today</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Complete The Info Below To <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Sign Up</span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Join our maintenance program and secure your home's plumbing future with comprehensive coverage and peace of mind.
            </p>
          </div>

          {/* Form Container with Same Styling as Other Sections */}
          <div className="glassmorphism-dark rounded-3xl p-8 lg:p-12 border border-white/10 shadow-luxury">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-white font-medium">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="address" className="text-white font-medium">Address</Label>
                  <Input 
                    id="address" 
                    placeholder="Your address"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-white font-medium">Mobile Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="(951) 246-4337"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-green-500 focus:ring-green-500/20 h-12 rounded-xl transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="plan" className="text-white font-medium">Type of Plan</Label>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white h-12 rounded-xl focus:border-green-500 transition-all duration-300">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="bronze" className="text-white hover:bg-gray-700">Bronze - 1 Visit Per Year $99</SelectItem>
                    <SelectItem value="silver" className="text-white hover:bg-gray-700">Silver - 2 Visits Per Year $179</SelectItem>
                    <SelectItem value="gold" className="text-white hover:bg-gray-700">Gold - 3 Visits Per Year $249</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label className="text-white font-medium">Are you the owner of the property?</Label>
                <div className="flex gap-8">
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="owner-yes" name="owner" value="yes" className="w-4 h-4 text-green-500 bg-transparent border-white/20 focus:ring-green-500/20" />
                    <Label htmlFor="owner-yes" className="text-white">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="owner-no" name="owner" value="no" className="w-4 h-4 text-green-500 bg-transparent border-white/20 focus:ring-green-500/20" />
                    <Label htmlFor="owner-no" className="text-white">No, I'm the Tenant</Label>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="opt-in" className="mt-1 border-white/20 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
                <Label htmlFor="opt-in" className="text-white text-sm leading-relaxed">
                  Yes, I agree to receive SMS and Email alerts from Gardner Plumbing Co.
                </Label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-xl shadow-lg border border-green-400/20 group transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Sign Up for Maintenance Program
                </span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
            linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
          `
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">What's Included</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Your Maintenance <span className="text-gradient bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text text-transparent">Agreement</span> Includes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service, index) => (
              <div key={index} className="glassmorphism-dark rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group hover-lift">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:text-green-300 transition-colors duration-300" />
                  <span className="text-white font-medium group-hover:text-purple-100 transition-colors duration-300">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
            linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
          `
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
              <Star className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Program Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Advantages of Our <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Maintenance</span> Program
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ 
                  backgroundColor: '#202020',
                  backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none -z-10"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg pointer-events-none -z-10"></div>
                  
                  <CardContent className="relative z-10 p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600/30 to-blue-500/30 rounded-2xl flex items-center justify-center group-hover:from-green-600 group-hover:to-blue-500 transition-all duration-500 flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-green-400 group-hover:text-white transition-all duration-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-100 transition-colors duration-300">{benefit.title}</h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Energy Efficiency Card */}
          <Card className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ 
            backgroundColor: '#202020',
            backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)'
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none -z-10"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg pointer-events-none -z-10"></div>
            
            <CardContent className="relative z-10 p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center group-hover:from-yellow-600 group-hover:to-orange-500 transition-all duration-500 flex-shrink-0">
                  <Zap className="h-8 w-8 text-yellow-400 group-hover:text-white transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-100 transition-colors duration-300">Energy Efficiency</h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A well-maintained plumbing system operates more efficiently, which can lead to lower utility bills. For example, regular maintenance of your water heater can improve its efficiency, reducing energy consumption and saving you money. Our expert technicians ensure that your entire system is running optimally, contributing to overall energy efficiency in your home.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Gardner Plumbing Co. Section */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
            linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
          `
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/GardnerEmployeeArrival.webp"
                  alt="Professional Gardner Plumbing Co. technician with hydro-jetting equipment"
                  width={1000}
                  height={700}
                  className="w-full h-96 object-cover rounded-3xl"
                />

                </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">30+ Years</div>
                    <div className="text-gray-300 text-xs">Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Why Gardner Plumbing Co.</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Your <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Trusted</span> Local Plumbing Experts
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Investing in a plumbing maintenance agreement with Gardner Plumbing Co. is a wise decision for any homeowner. From preventing costly repairs and extending the lifespan of your plumbing fixtures to improving water quality and ensuring peace of mind, the benefits are clear. Professional standards follow <a href="https://www.phccweb.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">PHCC industry guidelines</a>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href = "tel:9512464337">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg border border-blue-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
                </a>
                <Button variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                  <span className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    office@gardnerplumbingco.com
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
