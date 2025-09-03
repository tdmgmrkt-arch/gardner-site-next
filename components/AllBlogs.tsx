import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export function AllBlogs() {
  const blogPosts = [
    {
      title: "5 Signs Your Water Heater Needs Replacement",
      excerpt: "Learn the warning signs that indicate it's time to replace your water heater before it fails completely, saving you from costly emergency repairs.",
      date: "December 15, 2024",
      category: "Water Heaters",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Winter Plumbing Prevention Expert Tips",
      excerpt: "Protect your pipes from freezing this winter with these essential maintenance tips from our experienced plumbing professionals.",
      date: "December 12, 2024", 
      category: "Maintenance",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "How to Handle Plumbing Emergencies",
      excerpt: "Quick action steps to take when faced with a plumbing emergency to minimize damage and protect your home until help arrives.",
      date: "December 8, 2024",
      category: "Emergency Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "The Benefits of Regular Drain Cleaning",
      excerpt: "Discover why professional drain cleaning should be part of your regular home maintenance routine and how it saves money long-term.",
      date: "December 5, 2024",
      category: "Drain Services",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      {/* Enhanced Background */}
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
        
        {/* Premium texture overlay */}
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
        
        {/* Enhanced Section Header */}
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

        {/* Enhanced Blog Posts Section */}
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
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">Recent Articles</h3>
              </div>
            </div>
            
            {/* Enhanced Blog Posts Cards */}
            <div className="p-4 sm:p-6 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500 animate-scale-in" style={{ 
                    backgroundColor: '#202020',
                    backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                    animationDelay: `${index * 100}ms`
                  }}>
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                    
                    <div className="relative z-10 overflow-hidden">
                      {/* Enhanced Blog Post Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-red-400/30">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 border border-white/20">
                            <span className="text-white text-[10px] sm:text-xs font-medium">{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-3 sm:pb-4 pt-4 sm:pt-6 flex-shrink-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-400 mb-2 sm:mb-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-400" />
                          </div>
                          <span className="text-[11px] sm:text-[12px]">{post.date}</span>
                        </div>
                        <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight group-hover:text-green-100 transition-colors duration-300">{post.title}</h4>
                      </CardHeader>
                      
                      <CardContent className="pt-0 flex flex-col flex-grow px-4 sm:px-6 pb-4 sm:pb-6">
                        <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow text-xs sm:text-sm lg:text-base group-hover:text-gray-200 transition-colors duration-300">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-full flex items-center justify-center group-hover:from-green-600 group-hover:to-green-500 transition-all duration-300">
                              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-gray-400 text-[10px] sm:text-xs font-medium">Expert Tips</span>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg sm:rounded-xl py-2.5 sm:py-3 mt-auto text-xs sm:text-sm group/btn">
                          <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                            Read Article
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="glassmorphism-dark rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-glow">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Want More Plumbing Tips?</h3>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Have questions about plumbing? Browse our FAQs or explore all our posts for expert advice and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
              <a href = "/frequently-asked-questions">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-3 lg:py-4 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg border border-red-400/20 text-sm sm:text-base group">
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <BookOpen className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
              Visist FAQ Page
                </span>
              </Button>
              </a>
              <a href = "/blog">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white border border-gray-500/30 hover:border-gray-400/50 px-6 sm:px-8 py-3 sm:py-3 lg:py-4 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base group">
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <ArrowRight className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
                  View All Posts
                </span>
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}