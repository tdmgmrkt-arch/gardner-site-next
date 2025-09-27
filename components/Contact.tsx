"use client";

import Link from "next/link";
import { SchedulerModal } from "./SchedulerModal";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import Image from "next/image";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { useState, type FormEvent, type ChangeEvent } from "react"; 
import { Label } from "./ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Send,
  Shield,
  Wrench,
  Home,
  Building,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  CreditCard,
  Percent,
  Tag,
  Gift
} from "lucide-react";

export function Contact() {
const [schedulerOpen, setSchedulerOpen] = useState(false);

  // --- Component State and Data ---
  const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    primary: "(951) 246-4337",
    secondary: "24/7 Emergency Line",
    action: "Call Now",
    href: "tel:9512464337"   // 📞 Click-to-call
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@gardnerplumbing.com",
    secondary: "Response within 24 hours",
    action: "Send Email",
    href: "mailto:info@gardnerplumbing.com"   // 📧 Opens email client
  },
  {
    icon: MapPin,
    title: "Service Area",
    primary: "Riverside County",
    secondary: "Temecula, Murrieta & Surrounding",
    action: "View Coverage",
    href: "/about-us#service-area"   // 📍 Internal route or map link
  },
  {
    icon: Clock,
    title: "Office Hours",
    primary: "Mon-Fri: 8AM-4PM",
    secondary: "Emergency: 24/7",
    action: "Schedule Service",
    isScheduler: true    // 🕑 Online booking
  }
];

  const serviceAreas = [
    "Temecula", "Murrieta", "Perris", "Menifee", "Canyon Lake", 
    "Lake Elsinore", "Corona", "Moreno Valley", "Riverside", "Wildomar",
    "Winchester", "French Valley", "Sun City", "Hemet", "San Jacinto"
  ];

  const emergencyServices = [
    { icon: Wrench, service: "Burst Pipes", response: "30 min response" },
    { icon: Home, service: "Water Heater Failure", response: "Same day service" },
    { icon: Building, service: "Sewer Backup", response: "Emergency cleanup" },
    { icon: Phone, service: "Gas Line Issues", response: "Immediate response" }
  ];

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    desiredService: "",
    consent: false,
  });

  // State for submission success message
  const [success, setSuccess] = useState("");

  // --- Event Handlers ---

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/kfDjJzsEadItLomlnfYH/webhook-trigger/bc3b8cb4-2ed4-49b5-85a9-99ba593b29ad",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            postal_code: formData.postalCode,
            desired_service: formData.desiredService,
            terms_and_conditions: formData.consent,
          }),
        }
      );

      if (response.ok) {
        setSuccess("✅ Thanks! Your request has been submitted. We’ll contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          postalCode: "",
          desiredService: "",
          consent: false,
        });
      } else {
        setSuccess("❌ There was an error submitting the form. Please try again.");
      }
    } catch (err) {
      console.error("⚡ Submission error:", err);
      setSuccess("⚡ Submission failed, please check your connection and try again.");
    }
  };

  // --- JSX Render ---
  return (
    <div className="min-h-screen">
      {/* Combined Contact Hero & Information Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{ 
              background: `
                radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
              `
            }}
          />
          
          {/* Premium texture overlay */}
          <div 
            className="absolute inset-0 opacity-15"
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
          {/* Two Column Layout - Hero Content and Hero Image + Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Left Column - Hero Content */}
            <div className="text-left animate-fade-in">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgba(255,255,255,1)] mb-8 drop-shadow-lg leading-tight">
                Contact <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Gardner Plumbing Co.</span>
              </h1>
              
              {/* Hero Image */}
              <div className="relative group mb-8">
                <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 max-w-lg">
                <Image
                  src="/GardnerPlumbingCoCSrep.webp"
                  alt="Professional Gardner Plumbing Co. technician ready to help with your plumbing needs"
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ aspectRatio: "4/3", objectPosition: "center center" }}
                />

                  
                  {/* Premium overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Ready to Help</div>
                        <div className="text-gray-300 text-xs">Call (951) 246-4337</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                Ready to solve your plumbing needs? Our expert team is here to help with professional service, transparent pricing, and 30+ years of experience serving <Link href="/about-us" className="text-red-400 hover:text-red-300 underline">Riverside County</Link>. We follow <a href="https://www.iapmo.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">IAPMO plumbing codes</a>.
              </p>
              
             {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="tel:9512464337" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call (951) 246-4337
                    </span>
                  </Button>
                  </Link>
                <Link href="mailto:office@gardnerplumbingco.com" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <span className="flex items-center justify-center gap-3">
                      <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      office@gardnerplumbingco.com
                    </span>
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column - Contact Information Cards */}
            <div className="space-y-8 animate-slide-up mt-16">

              {/* Contact Information Cards */}
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
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Phone className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg">Contact Information</h2>
                  </div>
                </div>
                
                {/* Contact Cards */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-fade-in" style={{ 
                          backgroundColor: '#202020',
                          backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                          animationDelay: `${index * 150}ms`
                        }}>
                          {/* Gradient Border Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                          <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                          
                          <CardContent className="relative z-10 p-4 text-center">
                          <div className="relative mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mx-auto shadow-lg border border-red-400/20">
                              <IconComponent className="h-6 w-6 text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
                          </div>

                          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-100 transition-colors duration-300">{info.title}</h3>
                          <p className="text-base text-gray-300 font-semibold mb-1 group-hover:text-gray-200 transition-colors duration-300">{info.primary}</p>
                          <p className="text-xs text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">{info.secondary}</p>

                          {/* Action */}
                          {info.isScheduler ? (
                            <SchedulerModal />
                          ) : (
                            <a href={info.href} target={info.href?.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">
                              <Button
                                size="sm"
                                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg py-1 text-sm group/btn"
                              >
                                <span className="flex items-center justify-center gap-2">
                                  {info.action}
                                  <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </span>
                              </Button>
                            </a>
                          )}
                        </CardContent>


                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Trust Badges - Horizontal Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-green-100 transition-colors duration-300">Licensed & Insured</h3>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Certified professionals</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-blue-100 transition-colors duration-300">Guaranteed Work</h3>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">100% satisfaction</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <Star className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-purple-100 transition-colors duration-300">30+ Years Experience</h3>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Trusted local experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Offers Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
            <div 
              className="absolute inset-0"
              style={{ 
                background: `
                  radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
                  linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
                `
              }}
            />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Left Column - Contact Form & Special Offers */}
            <div className="space-y-8 animate-fade-in">
              {/* Contact Form */}
              <div
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 w-full border border-white/20"
                style={{
                  background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
                  boxShadow: `
                    0 25px 50px rgba(0, 0, 0, 0.4),
                    0 10px 25px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                    0 0 0 1px rgba(220, 38, 38, 0.1)
                  `,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl sm:rounded-3xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />

                <div className="text-center mb-4 sm:mb-6 relative z-10">
                   <div className="relative group mb-4">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                       <Image
                          src="/gpcsrep2.webp"
                          alt="Gardner Plumbing Co. customer service representative"
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />

                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                         <div className="absolute bottom-4 left-4 text-left">
                            <h3 className="text-xl font-bold text-white">Request Service</h3>
                         </div>
                      </div>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-10">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="group">
                      <Label htmlFor="firstName" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
                        First Name*
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("firstName", e.target.value)}
                        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-red-500/20"
                        required
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="lastName" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
                        Last Name*
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("lastName", e.target.value)}
                        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-red-500/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <Label htmlFor="email" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
                      Email*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                      className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-red-500/20"
                      required
                    />
                  </div>

                  {/* Phone + ZIP */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="group">
                      <Label htmlFor="phone" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
                        Phone*
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-red-500/20"
                        required
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="postalCode" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
                        ZIP Code*
                      </Label>
                      <Input
                        id="postalCode"
                        type="text"
                        placeholder="92555"
                        value={formData.postalCode}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("postalCode", e.target.value)}
                        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-red-500/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Desired Service */}
                  <div className="group relative">
                    <Label
                      htmlFor="desiredService"
                      className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm group-focus-within:text-red-400 transition-colors"
                    >
                      Desired Service*
                    </Label>
                    <select
                      id="desiredService"
                      value={formData.desiredService}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => handleInputChange("desiredService", e.target.value)}
                      className="appearance-none border-2 border-gray-600 bg-gray-800/70 text-white focus:border-red-500 focus:ring-red-500/20 focus:bg-gray-800 h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg shadow-sm hover:border-red-400 hover:bg-gray-800/90 backdrop-blur-sm w-full px-3 pr-8 cursor-pointer"
                      required
                    >
                      <option value="" disabled hidden> Select a service </option>
                      <option value="Drain Cleaning">Drain Cleaning</option>
                      <option value="Leak Detection">Leak Detection</option>
                      <option value="Water Heaters">Water Heaters</option>
                      <option value="Toilet Repair">Toilet Repair</option>
                      <option value="Piping & Repiping">Piping & Repiping</option>
                      <option value="Garbage Disposals">Garbage Disposals</option>
                      <option value="Commercial Plumbing">Commercial Plumbing</option>
                      <option value="Hydro Jetting">Hydro Jetting</option>
                      <option value="Sewer & Septic">Sewer & Septic</option>
                      <option value="Maintenance Plans">Maintenance Plans</option>
                      <option value="Emergency Service">Emergency Service</option>
                      <option value="Moen Flo Installation">Moen Flo Installation</option>
                      <option value="System Inspections">System Inspections</option>
                      <option value="Gas Lines">Gas Lines</option>
                      <option value="Water Filtration">Water Filtration</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 top-7 right-3 flex items-center">
                      <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-2 sm:space-x-3 pt-1 sm:pt-2 group">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", !!checked)}
                      className="mt-0.5 sm:mt-1 border-2 border-gray-500 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded shadow-sm hover:border-red-400 transition-colors bg-gray-800/50"
                    />
                    <Label htmlFor="consent" className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">
                      I agree to receive SMS messages from Gardner Plumbing Co.{" "}
                      <a href="/privacy-policy" className="text-red-400 underline hover:text-red-300">
                        privacy policy
                      </a>
                      . Reply STOP to opt-out.
                    </Label>
                  </div>

                  {/* Submit */}
                  <div className="pt-3 sm:pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!formData.consent}
                      className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-bold w-full rounded-xl border-2 border-red-400/20 hover-lift disabled:opacity-50"
                    >
                      <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                      SEND REQUEST
                    </Button>
                    {success && (
                      <p className="text-green-400 font-semibold mt-3 text-center text-sm">{success}</p>
                    )}
                  </div>
                </form>
              </div>
              
              {/* Special Offers Card */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift animate-slide-up">
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`, boxShadow: `inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4)` }}>
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Gift className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Special Offers</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                        <CreditCard className="h-6 w-6 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-green-100 transition-colors duration-300">Financing Available</h4>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Easy payment plans</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Percent className="h-6 w-6 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-blue-100 transition-colors duration-300">0% APR Plans</h4>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Qualified customers</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Tag className="h-6 w-6 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-100 transition-colors duration-300">Exclusive Coupons</h4>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Save on services</p>
                    </div>
                  </div>
                  <a href = "/financing">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 transition-all duration-300 rounded-xl shadow-lg border border-green-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Gift className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      View Current Specials
                    </span>
                  </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Stacked Cards */}
            <div className="space-y-8 animate-slide-up">
              {/* Service Areas Card */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`, boxShadow: `inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4)` }}>
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <MapPin className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Service Areas</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    Proudly serving Riverside County and surrounding communities.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {serviceAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                        <CheckCircle className="h-4 w-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                        <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 24/7 Emergency Card */}
              <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
                <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`, boxShadow: `inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 8px 32px rgba(139, 0, 0, 0.4)` }}>
                  <div className="relative flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Shield className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">24/7 Emergency</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <Image
                    src="/gplumbingtruckguy.webp"
                    alt="Gardner Plumbing Co. service van"
                    width={1000}
                    height={700}
                    className="w-full h-auto object-cover rounded-2xl mb-6"
                  />

                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    Plumbing emergencies don't wait. Our certified technicians are available 24/7 for urgent issues.
                  </p>
                  <div className="space-y-4">
                    {emergencyServices.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div key={service.service} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg border border-red-400/20">
                            <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold group-hover:text-red-100 transition-colors duration-300">{service.service}</h4>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{service.response}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-red-400 group-hover:translate-x-1 group-hover:text-red-300 transition-all duration-300" />
                        </div>
                      );
                    })}
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
