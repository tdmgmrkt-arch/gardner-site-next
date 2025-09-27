import { DollarSign, UserCheck, CheckCircle, Clock, Award, Shield, Star, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

export function WhyChooseUs() {
  const features = [
    {
      icon: DollarSign,
      title: "Transparent\nPricing",
      description: "Clear, upfront pricing with no hidden fees or surprises. You'll know the exact cost before we start any work on your system.",
      stats: "No Hidden Fees"
    },
    {
      icon: UserCheck,
      title: "Licensed\nExperts",
      description: "Our team consists of fully licensed, certified professionals with extensive plumbing training and expertise.",
      stats: "Fully Licensed"
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "We stand behind every job with comprehensive warranties and satisfaction guarantees. Your peace of mind is our priority.",
      stats: "100% Guaranteed"
    },
    {
      icon: Clock,
      title: "Reliable\nService",
      description: "Punctual, professional service that respects your time and property. We arrive when scheduled and complete work efficiently.",
      stats: "On-Time Promise"
    }
  ];

  const achievements = [
    { icon: Award, number: "30+", text: "Years in Business", subtext: "Trusted Experience", href: "/about-us" },
    { icon: Users, number: "15K+", text: "Happy Customers", subtext: "Satisfied Clients", href: "/reviews"},
    { icon: Star, number: "4.9", text: "Customer Rating", subtext: "Excellent Reviews", href: "reviews"},
    { icon: Shield, number: "100%", text: "Licensed & Insured", subtext: "Full Protection", href: "about-us" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      {/* Enhanced Background */}
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
        
        {/* Premium texture overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Section Header - Two Column Layout */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          {/* Two Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* Left-aligned Badge */}
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(255,255,255,1)] mb-6 sm:mb-8 drop-shadow-lg leading-tight">
                Why Choose <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Gardner Plumbing Co.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                Three decades of excellence in <Link href="/services" className="text-red-400 hover:text-red-300 underline">plumbing services</Link>. We combine traditional craftsmanship with modern technology to deliver unmatched quality and customer satisfaction throughout Riverside County. Our standards meet <a href="https://www.phccweb.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">industry best practices</a>.
              </p>
            </div>
            
            {/* Right Column - Professional Technician Image */}
            <div className="relative group mt-6 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 max-w-sm sm:max-w-lg w-full mx-auto lg:mx-0">
                <Image
                  src="/satisfiedgardnercustomer.webp"
                  alt="Gardner Plumbing Co. professional technician ready to provide expert plumbing services"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ aspectRatio: "4/3", objectPosition: "top center" }}
                />
                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 glassmorphism-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs sm:text-sm">Expert Technician</div>
                      <div className="text-gray-300 text-[10px] sm:text-xs">Licensed & Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Achievement Stats */}
        <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            {/* Premium Red Banner Header */}
            <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8" style={{ 
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
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">Our Achievements</h3>
              </div>
            </div>
            
            {/* Enhanced Cards Section */}
            <div className="p-4 sm:p-6 lg:p-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-scale-in" style={{ 
                      backgroundColor: '#202020',
                      backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                      animationDelay: `${index * 150}ms`
                    }}>
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                      
                      <CardContent className="relative z-10 p-3 sm:p-4 lg:p-8 text-center">
                        <div className="relative mb-3 sm:mb-4 lg:mb-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-luxury border border-red-400/20">
                            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 lg:h-10 lg:w-10 text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
                        </div>
                        <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 lg:mb-3 drop-shadow-sm group-hover:text-red-100 transition-colors duration-300">{achievement.number}</div>
                        <div className="text-gray-300 font-semibold mb-1 text-xs sm:text-sm lg:text-lg group-hover:text-gray-200 transition-colors duration-300">{achievement.text}</div>
                        <div className="text-gray-400 text-[10px] sm:text-xs lg:text-base group-hover:text-gray-300 transition-colors duration-300">{achievement.subtext}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Features Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            {/* Premium Red Banner Header */}
            <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8" style={{ 
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
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">Why We're Different</h3>
              </div>
            </div>
            
            {/* Enhanced Team Image Section */}
            <div className="relative">
              <div className="relative group overflow-hidden">
                <Image
                  src= "/gardnerteamplumbingwbs.webp"
                  alt="Professional Gardner Plumbing Co. team members ready to serve"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-[200px] sm:h-[300px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating achievement badges */}
                <div className="absolute top-3 sm:top-6 left-3 sm:left-6 group/badge">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105" style={{
                    background: `linear-gradient(145deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)`,
                    border: `1px solid rgba(255, 215, 0, 0.3)`,
                    boxShadow: `
                      0 20px 40px rgba(0, 0, 0, 0.5),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      0 0 30px rgba(255, 215, 0, 0.2)
                    `
                  }}>
                    {/* Premium gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, 
                          rgba(255, 215, 0, 0.1) 0%, 
                          rgba(255, 193, 7, 0.15) 50%, 
                          rgba(255, 215, 0, 0.1) 100%
                        )`
                      }}
                    />
                    
                    {/* Metallic shine effect */}
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `linear-gradient(135deg, 
                          transparent 0%, 
                          rgba(255, 255, 255, 0.1) 40%, 
                          rgba(255, 255, 255, 0.3) 50%, 
                          rgba(255, 255, 255, 0.1) 60%, 
                          transparent 100%
                        )`
                      }}
                    />
                    
                    <div className="relative p-2 sm:p-4 flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover/badge:from-yellow-300 group-hover/badge:to-yellow-500 transition-all duration-500">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white drop-shadow-sm group-hover/badge:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="absolute -inset-1 bg-yellow-400/30 rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg sm:text-xl drop-shadow-lg group-hover/badge:text-yellow-100 transition-colors duration-300">30+</div>
                        <div className="text-yellow-300 text-xs sm:text-sm font-semibold tracking-wide group-hover/badge:text-yellow-200 transition-colors duration-300">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 group/badge" style={{ animationDelay: '200ms' }}>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105" style={{
                    background: `linear-gradient(145deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)`,
                    border: `1px solid rgba(255, 215, 0, 0.3)`,
                    boxShadow: `
                      0 20px 40px rgba(0, 0, 0, 0.5),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      0 0 30px rgba(255, 215, 0, 0.2)
                    `
                  }}>
                    {/* Premium gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, 
                          rgba(255, 215, 0, 0.1) 0%, 
                          rgba(255, 193, 7, 0.15) 50%, 
                          rgba(255, 215, 0, 0.1) 100%
                        )`
                      }}
                    />
                    
                    {/* Metallic shine effect */}
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `linear-gradient(135deg, 
                          transparent 0%, 
                          rgba(255, 255, 255, 0.1) 40%, 
                          rgba(255, 255, 255, 0.3) 50%, 
                          rgba(255, 255, 255, 0.1) 60%, 
                          transparent 100%
                        )`
                      }}
                    />
                    
                    <div className="relative p-2 sm:p-4 flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover/badge:from-yellow-300 group-hover/badge:to-yellow-500 transition-all duration-500">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-white drop-shadow-sm group-hover/badge:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="absolute -inset-1 bg-yellow-400/30 rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg sm:text-xl drop-shadow-lg group-hover/badge:text-yellow-100 transition-colors duration-300">4.9★</div>
                        <div className="text-yellow-300 text-xs sm:text-sm font-semibold tracking-wide group-hover/badge:text-yellow-200 transition-colors duration-300">Customer Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Cards Section - positioned below for mobile, overlapping for desktop */}
              <div className="lg:absolute lg:top-[85%] left-0 right-0 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-scale-in" style={{ 
                        backgroundColor: '#202020',
                        backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                        animationDelay: `${index * 100}ms`
                      }}>
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                        <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                        
                        <div className="relative z-10">
                          <CardHeader className="text-center pb-3 sm:pb-4 pt-6 sm:pt-8 flex-shrink-0">
                            <div className="relative mb-4 sm:mb-6">
                              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-red-500/20">
                                <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-red-400 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                              </div>
                              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                            </div>
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-100 transition-colors duration-300">
                              {feature.title.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index < feature.title.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </h4>
                          </CardHeader>
                          <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col flex-grow">
                            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-center text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                            <div className="text-green-400 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 tracking-wide uppercase text-center bg-green-400/10 py-2 px-3 sm:px-4 rounded-lg border border-green-400/20">{feature.stats}</div>
                            <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg sm:rounded-xl py-2.5 sm:py-3 mt-auto text-sm sm:text-base group/btn">
                              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                Learn More
                                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Proper padding for cards below image - only on large screens */}
            <div className="hidden lg:block pb-[500px]"></div>
            {/* Mobile spacing */}
            <div className="lg:hidden pb-6 sm:pb-8"></div>
          </div>
        </div>

        {/* Enhanced Trust Elements Banner */}
        <div className="glassmorphism-dark rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Enhanced Company Description */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center sm:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-glow">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Trusted & Reliable</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                30+ years serving the community with unwavering commitment to quality and <Link href="/reviews" className="text-red-400 hover:text-red-300 underline">customer satisfaction</Link>.
              </p>
            </div>
            
            {/* Enhanced Service Features */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
                {[
                  { icon: Clock, text: "Prompt Service" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: CheckCircle, text: "Quality Guaranteed" },
                  { icon: Star, text: "5-Star Rated" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                    <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                    <span className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced BBB Badge */}
            <div className="lg:col-span-1 flex justify-center items-center order-last sm:order-none">
              <div className="relative group">
                <Image
                  src="/American-Home-Shield.webp"
                  alt="Trusted American Home Shield Contractor"
                  width={450}
                  height={300}
                  loading="lazy"
                  className="w-20 sm:w-24 lg:w-36 h-auto max-w-full filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Enhanced Contact & CTA */}
            <div className="lg:col-span-1 text-center">
              <div className="mb-3 sm:mb-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-sm">(951) 246-4337</div>
                <div className="text-gray-300 text-xs sm:text-sm">Call for Free Estimate</div>
              </div>
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 w-full sm:w-auto rounded-lg sm:rounded-xl shadow-lg border border-red-400/20 text-sm sm:text-base group">
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <UserCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300" />
                  Get Quote
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

