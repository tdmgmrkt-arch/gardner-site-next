import { Button } from "./ui/button";
import { Card } from "./ui/card";
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
  slug: "ultimate-water-leak-detection-guide-moreno-valley",
  category: "Leak Detection",
  title: "The Ultimate Water Leak Detection Guide for Moreno Valley Homes",
  author: "Gardner Plumbing Co.",
  date: "April 26, 2025",
  readTime: "7 min read",
  image: "/plumbingleak.webp",
  content: `
    <h2 class="text-2xl font-bold text-red-400 mb-4">Small Leaks, Big Problems</h2>
    <p>A hidden leak can wreak havoc on your home—raising your water bill, damaging your foundation, and even leading to mold growth. For homeowners in Moreno Valley, where soil conditions and aging plumbing systems can worsen leak risks, early detection is key. In this guide, we’ll show you how to spot water leaks, when to call in the pros, and how Gardner Plumbing Co. can help protect your property.</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">Why Leak Detection Matters in Moreno Valley</h3>
    <p>Moreno Valley homes—especially those built before the 1990s—often have aging pipes that are more prone to corrosion, slab leaks, and pinhole fractures. In addition, the area’s clay soil can shift during droughts or storms, increasing pressure on underground plumbing.</p>
    <p class="mt-4">Ignoring a leak can lead to:</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Water-damaged drywall or floors</li>
        <li>Mold and mildew growth</li>
        <li>High water bills</li>
        <li>Structural damage to your foundation</li>
    </ul>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">Common Signs You May Have a Hidden Leak</h3>
    <p>Not all leaks are obvious. Keep an eye out for these subtle indicators:</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Unexplained spike in your water bill</li>
        <li>Mildew smell or persistent dampness</li>
        <li>Warped floors or bubbling paint</li>
        <li>Hot spots on the floor (possible slab leak)</li>
        <li>Sound of running water when all fixtures are off</li>
    </ul>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic">If you live in a hilly neighborhood like Hidden Springs or a more established area like Edgemont, these warning signs are especially important to catch early.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">DIY Leak Checks You Can Try First</h3>
    <p>Before calling a plumber, you can try these homeowner-friendly checks:</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li><b>Meter Check:</b> Turn off all water sources and watch your water meter. If it moves, you likely have a leak.</li>
        <li><b>Toilet Dye Test:</b> Put food coloring in the toilet tank—if the color shows up in the bowl without flushing, the flapper valve is leaking.</li>
        <li><b>Check for Outdoor Leaks:</b> Look for wet patches in the yard, especially when it hasn’t rained.</li>
    </ul>
    <p class="mt-4">While DIY tests can be helpful, they often miss leaks behind walls or under the slab—which require professional equipment to detect.</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">Professional Leak Detection: What to Expect</h3>
    <p>At Gardner Plumbing Co., we use advanced acoustic listening devices and infrared cameras to pinpoint leaks without destructive digging. Whether it’s under concrete, behind drywall, or in your irrigation system, we find and fix the source with precision.</p>
    <p class="mt-4">Our Services Include:</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Slab leak detection and repair</li>
        <li>Whole-home plumbing inspection</li>
        <li>Pipe camera inspections</li>
        <li>Leak repair and pipe rerouting</li>
    </ul>
  `
};

// --- Other recent posts for the sidebar ---
const recentPosts = [
    { slug: "plumbing-upgrades-boost-home-value", title: "Plumbing Upgrades That Boost Your Home’s Value", category: "Home Improvement"},
    { slug: "5-signs-you-need-toilet-repair", title: "5 Signs You Need Toilet Repair in Perris", category: "Appliances"},
    { slug: "tankless-water-heaters-temecula-upgrade", title: "Tankless Water Heaters: Temecula’s Top Upgrade", category: "Water Heaters"},
];

export function UltimateWaterLeakDetectionGuideMorenoValley() {

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
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Protect Your Home — Schedule a Leak Inspection Today</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Don’t wait for small leaks to become big disasters. If you suspect a hidden water leak in your Moreno Valley home, call the experts at Gardner Plumbing Co. for fast, non-invasive diagnostics and honest, upfront pricing.</p>
                    <a href="/contact-us">
                        <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                            <Phone className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                            (951) 246–4337
                        </Button>
                    </a>
                </div>
             </div>
        </div>
      </section>
    </div>
  );
}

