"use client";

import { Modal } from "./Modal";
import { LeadForm } from "./LeadForm";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Star, Quote, ThumbsUp, FileText, Users, CheckCircle, Phone } from "lucide-react";

export function Reviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviews = [
    {
      text: "Great installer and great work. Super easy to work with. Up front and honest through the whole process. Definitely recommend!",
      name: "Christopher M.",
      location: "Temecula",
      rating: 5,
      service: "Water Heater Installation"
    },
    {
      text: "Jerome was extremely helpful. Clear and concise in everything he did, patient, and a pleasure to work with.",
      name: "Marshall M.",
      location: "Murrieta", 
      rating: 5,
      service: "Emergency Plumbing"
    },
    {
      text: "Quick booking, fair pricing, and the tech was professional, courteous and informative. Would definitely hire again!",
      name: "Aletha N.",
      location: "Temecula",
      rating: 5,
      service: "Drain Cleaning"
    },
    {
      text: "Outstanding service! They arrived on time, diagnosed the problem quickly, and had everything fixed within an hour. Highly recommended!",
      name: "David R.",
      location: "Murrieta",
      rating: 5,
      service: "Leak Repair"
    }
  ];

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{ 
              background: `
                radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
                linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)
              `
            }}
          />
          
          {/* Premium texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gold-500/20 to-gold-700/20 rounded-full border border-yellow-500/30 backdrop-blur-sm">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Customer Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 drop-shadow-lg">
              What Customers Say About <span className="text-gradient bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Gardner Plumbing Co.</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Don't take our word for it - hear from satisfied customers who trust Gardner Plumbing Co. for all their plumbing needs.
            </p>
          </div>

          {/* Enhanced Customer Reviews Section */}
          <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              {/* Premium Red Banner Header with Rating */}
              <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10" style={{ 
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
                <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                      <Quote className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">Customer Reviews</h3>
                  </div>
                  
                  {/* Inline Rating Display */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 fill-current drop-shadow-sm" />
                          <div className="absolute inset-0 bg-yellow-300/15 rounded-full blur-sm"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Rating text */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="text-lg sm:text-xl font-bold text-white drop-shadow-sm tracking-tight">4.9/5</div>
                      <div className="text-yellow-300 font-medium text-xs sm:text-sm tracking-wide drop-shadow-sm">Excellence Rating</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Review Cards Section */}
              <div className="p-4 sm:p-6 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {reviews.map((review, index) => (
                    <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-scale-in h-full flex flex-col" style={{ 
                      backgroundColor: '#202020',
                      backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                      animationDelay: `${index * 100}ms`
                    }}>
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <CardHeader className="text-center pb-3 sm:pb-4 pt-6 sm:pt-8 flex-shrink-0">
                          <div className="relative mb-4 sm:mb-6">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500 shadow-lg backdrop-blur-sm border border-blue-500/20">
                              <Quote className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-blue-400 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                          </div>
                          <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current drop-shadow-sm" />
                            ))}
                          </div>
                          <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-100 transition-colors duration-300">{review.name}</h4>
                          <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">{review.location}</p>
                        </CardHeader>
                        <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col flex-grow">
                          <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300 text-center italic text-sm sm:text-base">"{review.text}"</p>
                          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-shrink-0">
                            <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400" />
                              </div>
                              <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{review.service}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-400" />
                              </div>
                              <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Verified Customer</span>
                            </div>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg sm:rounded-xl py-2.5 sm:py-3 text-sm sm:text-base group/btn flex-shrink-0">
                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                              Read Full Review
                              <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                            </span>
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {/* Premium Review Platform Badges */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                    {/* Verified Platforms Label */}
                    <div className="text-center order-first w-full sm:w-auto sm:order-none">
                      <div className="text-xs sm:text-sm font-semibold text-white mb-1">Verified On</div>
                      <div className="text-[10px] sm:text-xs text-gray-400">Review Platforms</div>
                    </div>
                    
                    {/* Google Reviews Badge */}
                    <a 
                      href="https://www.google.com/search?q=gardner+plumbing+co+google+reviews" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-white/20 backdrop-blur-sm hover-lift transition-all duration-300"
                        style={{
                          background: `linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                          boxShadow: `0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                        }}
                      >
                        <div className="relative px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                          {/* Google Icon */}
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-sm sm:rounded-md flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 rounded-sm flex items-center justify-center">
                              <span className="text-white font-bold text-[10px] sm:text-xs">G</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-white">4.9</span>
                            <div className="text-[10px] sm:text-xs text-gray-300 font-medium">Google</div>
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* Yelp Reviews Badge */}
                    <a 
                      href="https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-white/20 backdrop-blur-sm hover-lift transition-all duration-300"
                        style={{
                          background: `linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                          boxShadow: `0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                        }}
                      >
                        <div className="relative px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                          {/* Yelp Icon */}
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-sm sm:rounded-md flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-xs sm:text-sm">Y</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-white">4.8</span>
                            <div className="text-[10px] sm:text-xs text-gray-300 font-medium">Yelp</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    {/* Additional Platforms Indicator */}
                    <div className="text-center">
                      <div className="text-[10px] sm:text-xs text-gray-400 font-medium">500+ Reviews</div>
                      <div className="text-[9px] sm:text-xs text-gray-500">Live Ratings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="glassmorphism-dark rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-glow">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Ready to Experience Our Service?</h3>
              </div>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Join hundreds of satisfied customers in Temecula, Murrieta, Perris, Menifee, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and surrounding areas who trust Gardner Plumbing Co. for exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-3 lg:py-4 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg border border-red-400/20 text-sm sm:text-base group">
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <ThumbsUp className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
                    Get Your Free Quote
                  </span>
                </Button>
                <a href="/reviews">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white border border-gray-500/30 hover:border-gray-400/50 px-6 sm:px-8 py-3 sm:py-3 lg:py-4 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base group">
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                      <FileText className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
                      Read More Reviews
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div> {/* closes max-w-7xl container */}
      </section>

      {/* ✅ Modal outside section */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LeadForm />
      </Modal>
    </>
  );
}
