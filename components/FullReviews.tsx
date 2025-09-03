import { SchedulerModal } from "./SchedulerModal";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { 
  Star, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  BadgeCheck,
  MapPin, 
  DollarSign,
  AlertTriangle,
  Calendar,
  Award,
  Users,
  ThumbsUp,
  MessageCircle,
  ExternalLink,
  Edit3,
  TrendingUp,
  Wrench,
  Quote,
} from "lucide-react";

const iconMap = {
  Star,
  ThumbsUp,
  Users,
  TrendingUp,
  Award,
  Clock,
};

export const featuredReviews = [
  {
    name: "Sarah Johnson",
    location: "Temecula, CA",
    rating: 5,
    date: "2 weeks ago",
    service: "Water Heater Installation",
    review: "Outstanding service from start to finish! Gardner Plumbing installed our new tankless water heater professionally and efficiently. The technician was knowledgeable, clean, and explained everything clearly. We've had hot water instantly ever since. Highly recommend!",
    verified: true
  },
  {
    name: "Mike Rodriguez",
    location: "Murrieta, CA", 
    rating: 5,
    date: "1 month ago",
    service: "Emergency Repair",
    review: "Called Gardner Plumbing on a Sunday night when our water heater started leaking everywhere. They came out within 2 hours and fixed the problem completely. Fair pricing and exceptional emergency service. These guys are the real deal!",
    verified: true
  },
  {
    name: "Jennifer Chen",
    location: "Menifee, CA",
    rating: 5,
    date: "3 weeks ago", 
    service: "Drain Cleaning",
    review: "Professional, reliable, and honest. Gardner Plumbing cleared our stubborn kitchen drain that other companies couldn't fix. They arrived on time, diagnosed the issue quickly, and had us back to normal in no time. Fair pricing too!",
    verified: true
  },
  {
    name: "David Thompson",
    location: "Corona, CA",
    rating: 5,
    date: "1 week ago",
    service: "Plumbing Repair",
    review: "Excellent workmanship and customer service. Fixed multiple plumbing issues in our older home with expertise and care. The technician was courteous, explained the work needed, and cleaned up afterwards. Will definitely use again!",
    verified: true
  },
  {
    name: "Maria Gonzalez",
    location: "Lake Elsinore, CA",
    rating: 5,
    date: "2 months ago",
    service: "Water Heater Maintenance",
    review: "Gardner Plumbing has been maintaining our water heater for 3 years now. Always professional, always on time, and they've kept our 12-year-old unit running like new. Their maintenance program is worth every penny!",
    verified: true
  },
  {
    name: "Robert Kim",
    location: "Perris, CA",
    rating: 5,
    date: "3 days ago",
    service: "Pipe Repair",
    review: "Quick response for a burst pipe emergency. The team arrived within an hour, assessed the damage, and had everything repaired the same day. Professional, efficient, and reasonably priced. Saved us from a major disaster!",
    verified: true
  }
];

export const reviewStats = [
  {
    icon: "Star",
    title: "5.0 Star Rating",
    description: "Average rating from 500+ verified customers across Riverside County",
    value: "5.0/5"
  },
  {
    icon: "ThumbsUp",
    title: "98% Satisfaction",
    description: "Customer satisfaction rate based on post-service surveys",
    value: "98%"
  },
  {
    icon: "Users",
    title: "15,000+ Customers",
    description: "Satisfied customers served throughout Riverside County",
    value: "15,000+"
  },
  {
    icon: "TrendingUp",
    title: "30+ Years",
    description: "Building trust and reputation in the community since 1990",
    value: "30+ Years"
  }
];


export const platforms = [
  {
    name: "Google Reviews",
    rating: 4.9,
    reviews: "400+",
    icon: "G"
  },
  {
    name: "Yelp",
    rating: 4.8,
    reviews: "100+",
    icon: "Y"
  },
  {
    name: "FrontDoorPro",
    rating: 4.8,
    reviews: "500+",
    icon: "FDP"
  },
  {
    name: "American Home Shield",
    rating: 5.0,
    reviews: 94,
    icon: "AHS"
  }
];

export const serviceHighlights = [
  {
    icon: "Clock",
    title: "Same-Day Service",
    description: "Most issues resolved within hours of our arrival"
  },
  {
    icon: "Shield",
    title: "Licensed & Insured",
    description: "Fully licensed plumbers with comprehensive insurance"  
  },
  {
    icon: "DollarSign",
    title: "Upfront Pricing",
    description: "No hidden fees or surprise charges ever"
  },
  {
    icon: "Award",
    title: "30+ Years Experience",
    description: "Three decades serving Riverside County families"
  }
];

export const whyCustomersChooseUs = [
  "Professional, uniformed technicians",
  "Clean, organized work practices", 
  "Transparent pricing and communication",
  "Quality parts and materials used",
  "Comprehensive warranties on work",
  "Available 24/7 for emergencies",
  "Local family-owned business",
  "30+ years of proven experience"
];

export function FullReviews() {
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
                  <span className="text-red-400">Customer Reviews</span>
                </div>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Star className="h-5 w-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">5-Star Customer Reviews</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                What Our <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Customers</span> Say About Us
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Read authentic reviews from satisfied customers throughout Riverside County who trust Gardner Plumbing for all their plumbing needs.
              </p>

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
                <a 
                  href="https://www.google.com/search?q=gardner+plumbing+co+google+reviews&oq=gardner+plumbing+co+google+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDUyNDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&zx=1756502743158&no_sw_cr=1#lrd=0x80dc9d0f093fb225:0xef87e6a2bf83ed0f,3,,,,"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="min-w-[220px] w-full justify-center sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-blue-400/20 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Leave Review
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/satisfiedgardnercustomer.webp"
                  alt="Happy customers with Gardner Plumbing technician showing satisfaction and trust"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />

                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">5.0 Stars</div>
                      <div className="text-gray-300 text-xs">1,200+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Emergency Alert Banner */}
      <section className="relative overflow-hidden">
        <div
          className="relative overflow-hidden py-2 sm:py-3"
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4 text-center">
              <Star className="h-6 w-6 text-white animate-pulse" />
              <span className="text-white font-bold text-lg">Experience Our 5-Star Service</span>
              <span className="text-red-100">Call Now: (951) 246-4337</span>
              <span className="text-white font-semibold">Join 1,200+ Satisfied Customers!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Stats Overview */}
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
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Review Statistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Our <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Track Record</span> Speaks for Itself
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Over 30 years of building trust and delivering exceptional plumbing services throughout Riverside County.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
          {reviewStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
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
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">{stat.value}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{stat.title}</h3>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{stat.description}</p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Platform Reviews */}
        <div className="glassmorphism-dark rounded-3xl p-8 border border-white/10 shadow-luxury">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Trusted Across All Major Review Platforms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              // Define platform-specific styling
              const getPlatformIcon = (platformName: string) => {
                switch (platformName) {
                  case "Google Reviews":
                    return (
                      <a href="https://www.google.com/search?q=gardner+plumbing+co+google+reviews&oq=gardner+plumbing+co+google+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDUyNDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#mpd=~15743885065226403356/customers/reviews" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg viewBox="0 0 24 24" className="w-8 h-8">
                          <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    </a>

                    );
                  case "Yelp":
                    return (
                      <a href="https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="w-12 h-12 bg-[#d32323] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </a>

                    );
                  case "FrontDoorPro":
                    return (
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold text-xs">FDP</span>
                      </div>
                    );
                  case "American Home Shield":
                    return (
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold text-xs">AHS</span>
                      </div>
                    );
                  default:
                    return (
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                    );
                }
              };

              const getPlatformColors = (platformName: string) => {
                switch (platformName) {
                  case "Google Reviews":
                    return {
                      hoverBorder: "hover:border-blue-500/30",
                      rating: "text-[#4285f4]",
                      stars: "text-[#fbbc05]"
                    };
                  case "Yelp":
                    return {
                      hoverBorder: "hover:border-red-500/30",
                      rating: "text-[#d32323]",
                      stars: "text-yellow-400"
                    };
                  case "FrontDoorPro":
                    return {
                      hoverBorder: "hover:border-purple-500/30",
                      rating: "text-purple-400",
                      stars: "text-yellow-400"
                    };
                  case "American Home Shield":
                    return {
                      hoverBorder: "hover:border-orange-500/30",
                      rating: "text-orange-400",
                      stars: "text-yellow-400"
                    };
                  default:
                    return {
                      hoverBorder: "hover:border-gray-500/30",
                      rating: "text-gray-400",
                      stars: "text-yellow-400"
                    };
                }
              };

              const colors = getPlatformColors(platform.name);

              return (
                <div key={index} className={`text-center p-6 glassmorphism-dark rounded-2xl border border-white/10 ${colors.hoverBorder} transition-all duration-300 group`}>
                  {getPlatformIcon(platform.name)}
                  <h4 className="font-bold text-white mb-2">{platform.name}</h4>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${colors.stars} fill-current`} />
                    ))}
                  </div>
                  <div className={`${colors.rating} font-bold text-xl mb-1`}>{platform.rating}</div>
                  <div className="text-gray-400 text-sm">{platform.reviews} reviews</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

      {/* Featured Customer Reviews */}
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

        <div id = "customer-testimonials" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
              <MessageCircle className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Customer Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
              Real Stories from <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Real Customers</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Read authentic reviews from homeowners throughout Riverside County who have experienced our exceptional plumbing services firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
            {featuredReviews.map((review, index) => (
               <Card 
      className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" 
      style={{ 
        backgroundColor: '#202020',
        backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
      
      <div className="relative z-10 p-8">
        {/* Review Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center font-bold text-white text-lg">
              {review.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-white">{review.name}</h4>
                {review.verified && (
                  <BadgeCheck className="h-4 w-4 text-green-400" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-3 w-3" />
                <span>{review.location}</span>
                <span>•</span>
                <span>{review.date}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Service Badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30">
          <Wrench className="h-3 w-3 text-blue-400" />
          <span className="text-blue-400 text-xs font-medium">{review.service}</span>
        </div>

        {/* Review Text */}
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-400/20" />
          <p className="text-gray-300 leading-relaxed pl-6 group-hover:text-gray-200 transition-colors duration-300">
            "{review.review}"
          </p>
        </div>
      </div>
    </Card>
    ))}
</div>

          {/* Review Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a href="https://www.google.com/search?q=gardner+plumbing+co+google+reviews&oq=gardner+plumbing+co+google+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDUyNDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&zx=1756502743158&no_sw_cr=1#lrd=0x80dc9d0f093fb225:0xef87e6a2bf83ed0f,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-xl shadow-lg border border-green-400/20 group">
                <span className="flex items-center justify-center gap-3">
                  <Edit3 className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Leave Us a Review
                </span>
              </Button>
            </a>

            
                        <a href="https://www.google.com/search?q=gardner+plumbing+co+google+reviews&oq=gardner+plumbing+co+google+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDUyNDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&zx=1756502743158&no_sw_cr=1#lrd=&mpd=~15743885065226403356/customers/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group">
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Read All Google Reviews</span>
                </span>
              </Button>
            </a>

            
            <a href="https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-[#d32323] hover:bg-[#b01e1e] text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group">
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="font-medium">View All Yelp Reviews</span>
                </span>
              </Button>
            </a>

          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden h-96 rounded-3xl border border-white/10 shadow-luxury group-hover:shadow-2xl transition-all duration-500 mb-8">
               <Image
                  src="/GardnerEmployeeArrival.webp"
                  alt="Happy customers shaking hands with Gardner Plumbing technician showing trust and satisfaction"
                  width={1000}
                  height={700}
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />

              
              {/* Floating Achievement Badge */}
              <div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <ThumbsUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">98% Satisfaction</div>
                    <div className="text-gray-300 text-xs">Rate</div>
                  </div>
                </div>
              </div>
              </div>

              {/* Service Highlights Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceHighlights.map((highlight, index) => {
                  const iconMap = { Clock, Shield, DollarSign, Award };
                  const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover-lift">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2 group-hover:text-blue-100 transition-colors duration-300">{highlight.title}</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Why Choose Gardner Plumbing</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                What Makes Us <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Different</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our commitment to excellence and customer satisfaction has earned us thousands of 5-star reviews. Here's what sets us apart:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {whyCustomersChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
              <a href = "/contact-us">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl shadow-lg border border-blue-400/20 group">
                <span className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Experience Our 5-Star Service
                </span>
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
            <Star className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Join Our Satisfied Customers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            Ready to Experience <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">5-Star Service?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Join over 1,200 satisfied customers who trust Gardner Plumbing for reliable, professional plumbing services throughout Riverside County.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href = "tel:9512464337">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-10 py-4 rounded-xl shadow-lg border border-red-400/20 group">
              <span className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Call (951) 246-4337 Now
              </span>
            </Button>
            </a>
             <SchedulerModal/>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-400" />
                <span>Same-Day Service Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span>30+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}