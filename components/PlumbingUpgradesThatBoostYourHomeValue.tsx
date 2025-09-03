import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";
import { 
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Phone,
  ArrowRight,
  Twitter,
  Facebook,
  Linkedin
} from "lucide-react";
import React from 'react';


// --- Blog Post Data ---
// In a real app, this data would be fetched based on the page's URL slug.
const postData = {
  slug: "plumbing-upgrades-boost-home-value",
  category: "Home Improvement",
  title: "Plumbing Upgrades That Boost Your Home’s Value (And Are Worth Every Penny)",
  author: "Gardner Plumbing Co.",
  date: "May 15, 2025",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop",
  content: `
    <h2 class="text-2xl font-bold text-red-400 mb-4">Why Smart Plumbing Pays Off in Lake Elsinore</h2>
    <p>Home improvement in Lake Elsinore isn’t just about looks—it’s also about boosting resale value and functionality. And when it comes to ROI, plumbing upgrades often fly under the radar. Whether you’re planning to sell soon or simply want a more efficient home, investing in the right plumbing features can dramatically increase property value while offering everyday comfort.</p>
    <p>In this guide, we’ll break down the top plumbing improvements that Lake Elsinore homeowners should consider—and why now is the perfect time to act.</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">1. Tankless Water Heater Installation</h3>
    <p>Tankless water heaters are a game-changer in today’s market. They provide endless hot water, take up less space, and use up to 30% less energy compared to traditional tanks.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Why It Matters in Lake Elsinore:</b> With energy efficiency being a top priority in California, a tankless unit appeals to environmentally-conscious buyers. It’s also a great feature in larger homes common around Tuscany Hills and Canyon Hills where water demand is high.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">2. Whole-House Water Filtration System</h3>
    <p>Installing a filtration system improves water quality throughout your home by removing chlorine, sediment, and hard minerals. This upgrade protects your plumbing fixtures, boosts appliance longevity, and improves taste and skin health.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Added Bonus:</b> Lake Elsinore’s hard water can lead to buildup in pipes and water heaters. A filtration system is a long-term value-add and a key selling point for potential buyers.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">3. Bathroom Fixture Upgrades</h3>
    <p>Replacing outdated faucets, showerheads, and toilets with modern, water-saving models makes an immediate visual and functional impact. It’s one of the most cost-effective ways to refresh your space while meeting low-flow California building code standards.</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Dual-flush toilets</li>
        <li>Brushed nickel or matte black fixtures</li>
        <li>Rainfall showerheads with pressure optimization</li>
    </ul>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">4. Smart Leak Detection Devices</h3>
    <p>Installing smart water monitors can detect leaks early and alert you via your smartphone—protecting your home from costly damage.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Lake Elsinore:</b> Homes near the lake or in older communities are more prone to shifting foundations and hidden leaks. These systems add peace of mind to homeowners and buyers alike.</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">5. Sewer Line Inspection and Replacement (If Needed)</h3>
    <p>For older homes, a clean sewer line report during a home inspection can make or break a sale. Proactively replacing damaged or root-invaded lines can prevent costly last-minute issues.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Tip:</b> Include the inspection report in your home’s disclosure packet to reassure buyers.</p>
  `
};

// --- Other recent posts for the sidebar ---
const recentPosts = [
    { slug: "ultimate-water-leak-detection-guide", title: "The Ultimate Water Leak Detection Guide", category: "Leak Detection"},
    { slug: "5-signs-you-need-toilet-repair", title: "5 Signs You Need Toilet Repair in Perris", category: "Appliances"},
    { slug: "tankless-water-heaters-temecula-upgrade", title: "Tankless Water Heaters: Temecula’s Top Upgrade", category: "Water Heaters"},
];

export function PlumbingUpgradesThatBoostYourHomeValue() {

  // In a real app, you might get the base URL dynamically.
  const baseUrl = "https://yourwebsite.com"; 
  const shareUrl = `${baseUrl}/blog/${postData.slug}`;
  const shareTitle = encodeURIComponent(postData.title);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%)` }} />
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)` }}/>
        </div>

        {/* Post Hero */}
        <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <a href="/blog" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300 mb-4">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to All Posts</span>
                </a>
                <p className="text-base font-semibold text-red-400 uppercase tracking-wider mb-2">{postData.category}</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">{postData.title}</h1>
                <div className="flex justify-center items-center space-x-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{postData.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{postData.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{postData.readTime}</span>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Feature Image */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 sm:-mb-24 z-10">
            <img src={postData.image} alt={postData.title} className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-gray-800/50"/>
        </div>

        {/* Post Content Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm pt-24 sm:pt-32 pb-16 sm:pb-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
                    {/* Main Content */}
                    <main className="lg:col-span-8">
                        <div className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white"
                             dangerouslySetInnerHTML={{ __html: postData.content }}
                        />
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 mt-12 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            {/* Author Card */}
                            <Card className="bg-gray-800/30 border border-white/10 text-center shadow-lg">
                                <div className="p-6">
                                    <img src="/gardner-logo-icon.png" alt="Gardner Plumbing Co. Logo" className="w-20 h-20 mx-auto rounded-full bg-gray-700 p-2 mb-4 border-2 border-red-500/50" />
                                    <h4 className="text-xl font-bold text-white mb-2">About the Author</h4>
                                    <p className="text-gray-400 text-sm mb-4">This article was written by the expert team at <strong>Gardner Plumbing Co.</strong>, bringing over 30 years of experience to Riverside County.</p>
                                </div>
                            </Card>

                             {/* Share Card */}
                            <Card className="bg-gray-800/30 border border-white/10 shadow-lg">
                               <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-4 text-center">Share This Post</h4>
                                <div className="flex justify-center space-x-2">
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="border-gray-600 hover:bg-red-500/20 hover:text-white rounded-full p-3 h-12 w-12"><Facebook className="h-5 w-5"/></Button>
                                    </a>
                                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer">
                                      <Button variant="outline" className="border-gray-600 hover:bg-red-500/20 hover:text-white rounded-full p-3 h-12 w-12"><Twitter className="h-5 w-5"/></Button>
                                    </a>
                                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
                                      <Button variant="outline" className="border-gray-600 hover:bg-red-500/20 hover:text-white rounded-full p-3 h-12 w-12"><Linkedin className="h-5 w-5"/></Button>
                                    </a>
                                </div>
                               </div>
                            </Card>

                            {/* Recent Posts Card */}
                            <Card className="bg-gray-800/30 border border-white/10 shadow-lg">
                               <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Recent Posts</h4>
                                <ul className="space-y-4">
                                    {recentPosts.map(post => (
                                        <li key={post.slug}>
                                            <a href={`/blog/${post.slug}`} className="group block bg-black/20 p-4 rounded-lg hover:bg-red-500/10 transition-colors duration-300">
                                                <p className="text-xs text-red-400 font-semibold mb-1">{post.category}</p>
                                                <p className="text-gray-200 group-hover:text-white font-semibold">{post.title}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                               </div>
                            </Card>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        
        {/* Final CTA Section */}
        <div className="relative py-16 sm:py-20">
             <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-900/50"></div>
             <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-10 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/30 rounded-3xl text-center shadow-2xl">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to Upgrade Your Plumbing?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">From Tuscany Hills to Historic Downtown, our team at Gardner Plumbing Co. helps homeowners make high-ROI upgrades that pay off in value and performance.</p>
                    <a href="/contact-us">
                        <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                            <Phone className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                            Get a Free Estimate
                        </Button>
                    </a>
                </div>
             </div>
        </div>
      </section>
    </div>
  );
}



