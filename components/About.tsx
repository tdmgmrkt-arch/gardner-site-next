"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import Image from "next/image";
import { LeadForm } from "./LeadForm"
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Shield, 
  Star, 
  CheckCircle, 
  Phone,
  Mail,
  Clock,
  Wrench,
  Building,
  Heart,
  Target,
  ShieldCheck,
  Wallet,
  ThumbsUp,
  Zap
} from "lucide-react";

export function About() {
const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { icon: Calendar, number: "30+", text: "Years in Business", subtext: "Trusted Experience" },
    { icon: Users, number: "5,000+", text: "Happy Customers", subtext: "Satisfied Clients" },
    { icon: Wrench, number: "15,000+", text: "Jobs Completed", subtext: "Successful Projects" },
    { icon: Star, number: "4.9", text: "Average Rating", subtext: "Customer Reviews" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in every interaction with our customers."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest quality in our workmanship, using premium materials and proven techniques."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen, understand, and deliver solutions that exceed expectations."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Count on us to be there when you need us most, with prompt service and dependable solutions."
    }
  ];

  const certifications = [
    { name: "California State License", number: "#1073177" },
    { name: "Background Checked", status: "Technicians" },
    { name: "American Home Shield", rating: "Preffered Vendor" },
    { name: "Moen Certified", specialty: "Installer" }
  ];

  const timeline = [
    { year: "1993", event: "Gardner Plumbing Co. founded", description: "Started as a small family business in Riverside County" },
    { year: "2000", event: "Team Expansion", description: "Grew to 5 licensed plumbers serving the region" },
    { year: "2010", event: "Commercial Division", description: "Expanded services to include commercial plumbing projects" },
    { year: "2015", event: "24/7 Emergency Service", description: "Launched round-the-clock emergency response" },
    { year: "2020", event: "Technology Upgrade", description: "Invested in advanced diagnostic and repair equipment" },
    { year: "2024", event: "30+ Years Strong", description: "Celebrating three decades of trusted service" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
  {/* Enhanced Background */}
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
    {/* Hero Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      {/* Left Column - Text Content */}
      <div className="order-2 lg:order-1 text-left">
        <div className="mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
            <Building className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">About Gardner Plumbing Co.</span>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Three Decades of <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Plumbing Excellence</span>
        </h1>

        {/* 👇 Mobile Image (with floating badge, hidden on desktop) */}
        <div className="block lg:hidden mb-6 relative group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/gardnertrucks.webp"
              alt="Professional Gardner Plumbing Co. technician ready to help with your plumbing needs"
              width={1000}
              height={700}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />


            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 glassmorphism-dark rounded-xl p-3 border border-white/20 shadow-lg bg-black/60 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">30+ Years</div>
                  <div className="text-gray-300 text-xs">Trusted Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
          Since 1993, Gardner Plumbing Co. has been the trusted choice for residential and commercial plumbing services throughout Riverside County. Our commitment to quality, integrity, and customer satisfaction has made us a cornerstone of the community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/contact-us">
            <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
              <span className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Contact Us Today
              </span>
            </Button>
          </a>
          <a href="/contact-us">
            <Button className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white border border-gray-500/30 hover:border-gray-400/50 px-8 py-3 transition-all duration-300 rounded-xl shadow-lg group">
              <span className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                office@gardnerplumbingco.com
              </span>
            </Button>
          </a>
        </div>
      </div>
      
      {/* Right Column - Image (desktop only) */}
      <div className="order-1 lg:order-2 hidden lg:block relative group">
        <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 max-w-lg w-full">
          <Image
            src="/GardnerTechVanTools.webp"
            alt="Professional Gardner Plumbing Co. technician ready to help with your plumbing needs"
            width={1200}
            height={900}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            style={{ aspectRatio: "4/3", objectPosition: "center center" }}
          />

          
          {/* Premium overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
          
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">30+ Years</div>
                <div className="text-gray-300 text-xs">Trusted Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
              <div className="relative flex items-center justify-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Our Achievements</h2>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-scale-in" style={{ 
                      backgroundColor: '#202020',
                      backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                      animationDelay: `${index * 150}ms`
                    }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                      
                      <CardContent className="relative z-10 p-4 sm:p-6 lg:p-8 text-center">
                        <div className="relative mb-4 sm:mb-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-luxury border border-red-400/20">
                            <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 drop-shadow-sm">{stat.number}</div>
                        <div className="text-gray-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">{stat.text}</div>
                        <div className="text-gray-400 text-xs sm:text-sm lg:text-base">{stat.subtext}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Image Placeholder */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/gardnertrucks.webp"
                  alt="Professional Gardner Plumbing Co. technician ready to help with your plumbing needs"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ aspectRatio: "4/3", objectPosition: "center center" }}
                />

                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
            </div>
            
            {/* Right Column - Text Content */}
            <div className="text-left">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Story</span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Built on <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Trust & Quality</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Gardner Plumbing Co. was founded in 1993 with a simple mission: provide honest, reliable plumbing services to our community. What started as a small family business has grown into one of Riverside County's most trusted plumbing companies.
                </p>
                <p>
                  Our founder believed that quality work and fair pricing should be the foundation of every customer relationship. This philosophy continues to guide us today as we serve thousands of satisfied customers across the region.
                </p>
                <p>
                  From emergency repairs to complete system installations, we've built our reputation one satisfied customer at a time. Our team of licensed professionals brings decades of combined experience to every job, ensuring quality results you can count on.
                </p>
              </div>
              
              <div className="mt-8 p-6 glassmorphism-dark rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Our Mission</h3>
                    <p className="text-blue-400 text-sm">Serving our community with excellence</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To provide exceptional plumbing services while building lasting relationships with our customers through honesty, reliability, and superior craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
          <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            {/* Premium Blue Banner Header */}
            <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
              background: `linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #2563eb 100%)`,
              boxShadow: `
                inset 0 2px 0 rgba(255, 255, 255, 0.2),
                inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                0 8px 32px rgba(30, 64, 175, 0.4)
              `
            }}>
              <div className="relative flex items-center justify-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Our Core Values</h2>
              </div>
            </div>
            
            {/* Values Cards */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-scale-in" style={{ 
                      backgroundColor: '#202020',
                      backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                      animationDelay: `${index * 100}ms`
                    }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                      
                      <div className="relative z-10">
                        <CardHeader className="text-center pb-4 pt-8">
                          <div className="relative mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-blue-500/20">
                              <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{value.title}</h3>
                        </CardHeader>
                        <CardContent className="px-6 pb-8">
                          <p className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{value.description}</p>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Trust Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                Why Customers Trust Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Built on <span className="text-gradient bg-gradient-to-r from-green-400 to-red-600 bg-clip-text text-transparent">Trust & Reliability</span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Every job is backed by our promise of quality workmanship, honest service, and dependable support. Here’s why thousands of homeowners count on us.
            </p>
          </div>

          {/* Trust Marker Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
              style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)' }}>
              <CardContent className="relative z-10 p-8 text-center">
                <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold text-white mb-2">Licensed & Insured</h3>
                <p className="text-gray-300 leading-relaxed">Your home is protected—our work meets all codes and standards.</p>
              </CardContent>
            </Card>

            <Card className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
              style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)' }}>
              <CardContent className="relative z-10 p-8 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold text-white mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-300 leading-relaxed">We’re always on call to respond to urgent plumbing emergencies.</p>
              </CardContent>
            </Card>

            <Card className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
              style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)' }}>
              <CardContent className="relative z-10 p-8 text-center">
                <Wallet className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold text-white mb-2">Upfront Pricing</h3>
                <p className="text-gray-300 leading-relaxed">No hidden fees—clear, honest estimates before any work begins.</p>
              </CardContent>
            </Card>

            <Card className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
              style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)' }}>
              <CardContent className="relative z-10 p-8 text-center">
                <ThumbsUp className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold text-white mb-2">Workmanship Guarantee</h3>
                <p className="text-gray-300 leading-relaxed">Every job is backed by our warranty for lasting peace of mind.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section -- OPTIMIZED */}
      <section className="py-10 sm:py-14 relative overflow-hidden">
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
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 drop-shadow-lg">
              Company <span className="text-gradient bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line - OPTIMIZED */}
            <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-red-600 rounded-full"></div>
            
            <div className="space-y-0">
              {timeline.map((item, index) => (
                // Timeline Item Loop - OPTIMIZED
                <div 
                  key={index} 
                  className="relative"
                >
                  <div className="absolute left-4 top-2 lg:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-600 to-red-600 rounded-full border-4 border-gray-800 shadow-md">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div 
                    className={`
                      pl-12 lg:pl-0 
                      w-full lg:w-1/2
                      ${index % 2 === 0 ? 'lg:pr-10 lg:text-right' : 'lg:pl-10 lg:text-left'}
                      pb-8 flex items-center
                    `}
                  >
                    <div className="glassmorphism-dark rounded-xl p-4 border border-white/10 shadow-md hover-lift transition-all duration-500 w-full">
                      <div className={`text-xl font-bold text-purple-400 mb-1 ${index % 2 === 0 ? '' : 'lg:text-left'}`}>{item.year}</div>
                      <h3 className={`text-lg font-bold text-white mb-2 ${index % 2 === 0 ? '' : 'lg:text-left'}`}>{item.event}</h3>
                      <p className={`text-gray-300 text-sm leading-relaxed ${index % 2 === 0 ? '' : 'lg:text-left'}`}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
          <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            {/* Premium Green Banner Header */}
            <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ 
              background: `linear-gradient(135deg, #059669 0%, #10b981 50%, #065f46 100%)`,
              boxShadow: `
                inset 0 2px 0 rgba(255, 255, 255, 0.2),
                inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                0 8px 32px rgba(5, 150, 105, 0.4)
              `
            }}>
              <div className="relative flex items-center justify-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Licenses & Certifications</h2>
              </div>
            </div>
            
            {/* Certifications Grid */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {certifications.map((cert, index) => (
                  <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ 
                    backgroundColor: '#202020',
                    backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)'
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                    
                    <CardContent className="relative z-10 p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-luxury">
                        <CheckCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-100 transition-colors duration-300">{cert.name}</h3>
                      <p className="text-green-400 font-semibold text-sm">
                        {cert.number || cert.rating || cert.status || cert.specialty}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id ="service-area" className="py-16 sm:py-20 relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Service Area</span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Proudly Serving <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Riverside County</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Gardner Plumbing Co. provides comprehensive plumbing services throughout Riverside County and surrounding areas. Our local knowledge and commitment to the community make us your trusted neighborhood plumbing experts.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Temecula", "Murrieta", "Perris", "Menifee",
                  "Canyon Lake", "Lake Elsinore", "Corona", "Moreno Valley",
                  "Riverside", "Hemet", "San Jacinto", "Wildomar"
                ].map((city, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 glassmorphism-dark rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium">{city}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href = "tel:9512464337">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 transition-all duration-300 rounded-xl shadow-lg group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Call (951) 246-4337
                  </span>
                </Button>
                </a>
              </div>
            </div>
            
            {/* Right Column - Map */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 self-start">
                {/* Google Maps Embed - OPTIMIZED */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109144.45437258422!2d-117.20587604273275!3d33.571118777583706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc9d0f093fb225%3A0xef87e6a2bf83ed0f!2sGardner%20Plumbing%20Company!5e0!3m2!1sen!2sus!4v1755821362571!5m2!1sen!2sus"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gardner Plumbing Co. Service Area - Riverside County"
                  className="w-full h-80 sm:h-96 lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Full Coverage</div>
                      <div className="text-gray-300 text-xs">Riverside County</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
          <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury p-8 sm:p-12 text-center hover-lift">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Ready to Work with <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Gardner Plumbing Co.?</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Experience the difference that three decades of trusted service makes. Contact us today for all your plumbing needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href = "tel:9512464337">
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 transition-all duration-300 rounded-xl shadow-lg border border-red-400/20 group">
                <span className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Call (951) 246-4337
                </span>
              </Button>
              </a>
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-xl shadow-lg border border-green-400/20 group">
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Get Free Estimate
                  </span>
                </Button>
            </div>
            
            {/* CTA Footer - OPTIMIZED */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.9 Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ✅ Modal */}
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <LeadForm />
        </Modal>
        
        </div>
    
  );
}