"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/blogPosts"; // <-- import your central data

export function BlogSection() {
  // Grab the latest 4 posts (sorted by date if needed)
  const latestPosts = posts.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ 
            background: `
              radial-gradient(ellipse at bottom right, #2c2c2c 0%, #1f2937 50%, #111827 100%),
              linear-gradient(135deg, #1f2937 0%, #111827 50%, #000000 100%)
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
            <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Expert Content</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 drop-shadow-lg">
            Latest From Our <span className="text-gradient bg-gradient-to-r from-green-400 to-red-600 bg-clip-text text-transparent">Plumbing Blog</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Stay informed with expert plumbing advice, maintenance tips, and industry insights from Gardner Plumbing Co.'s experienced professionals.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            
            <div className="p-4 sm:p-6 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {latestPosts.map((post, index) => (
                  <Card
                  key={post.slug}
                  className="group relative border border-white/10 overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-scale-in flex flex-col bg-[#192332]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Card content wrapper */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full shadow">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/20">
                          <span className="text-white text-[10px] sm:text-xs font-medium">{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <CardHeader className="pb-3 pt-4 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                        <Calendar className="h-3 w-3 text-blue-400" />
                        <span className="text-[11px] sm:text-[12px]">{post.date}</span>
                      </div>
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 leading-tight group-hover:text-green-100 transition-colors duration-300">
                        {post.title}
                      </h4>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-grow px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-gray-300 mb-4 flex-grow text-xs sm:text-sm lg:text-base">
                        {post.excerpt}
                      </p>

                      <Link href={`/blog/${post.slug}`} className="mt-auto">
                        <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg py-2.5 sm:py-3 text-xs sm:text-sm">
                          <span className="flex items-center justify-center gap-1.5">
                            Read Article
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>



                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glassmorphism-dark rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">Want More Plumbing Tips?</h3>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Have questions about plumbing? Browse our FAQs or explore all our posts for expert advice and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
              <Link href="/frequently-asked-questions">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none px-6 py-3 rounded-lg">
                  Visit FAQ Page
                </Button>
              </Link>
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white border border-gray-500/30 px-6 py-3 rounded-lg">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
