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
  slug: "prevent-drain-clogs-rainy-season",
  category: "Drain Cleaning",
  title: "How to Prevent Drain Clogs During Murrieta’s Rainy Season: Expert Advice",
  author: "Gardner Plumbing Co.",
  date: "March 25, 2025",
  readTime: "5 min read",
  image: "/raindrainclog.webp",
  content: `
    <h2 class="text-2xl font-bold text-red-400 mb-4">Why Drain Clogs Spike During the Wet Season</h2>
    <p>Murrieta’s rainy season may be short, but when the storms roll in, they bring more than just puddles and wet driveways. Homeowners often experience a spike in clogged drains, especially in older properties or homes with trees nearby. Heavy rainfall can flush debris into outdoor drains and expose pre-existing issues in indoor plumbing. In this article, we’ll explain why clogs are more common during the rainy months and what you can do to prevent costly water damage or sewer backups.</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">What Causes Drain Clogs in the Rainy Season?</h3>
    <p>While clogs can happen any time of year, the rainy season adds new pressure to your drainage system.</p>
    <p class="mt-4">Common Culprits Include:</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Yard debris like leaves and soil entering outdoor drains</li>
        <li>Tree root intrusions seeking water through cracked pipes</li>
        <li>Grease and food buildup from increased indoor cooking during cooler months</li>
        <li>Poorly maintained gutter systems that back up and flood entry points</li>
    </ul>
    <p class="mt-4">When these issues aren’t addressed early, they can result in sewage backups, water damage, or even health hazards.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">Signs Your Drains May Be at Risk</h3>
    <p>Murrieta homeowners should stay alert for these red flags:</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Slow drainage in sinks, tubs, or showers</li>
        <li>Gurgling sounds from toilets or drains</li>
        <li>Water backing up during heavy rain</li>
        <li>Foul odors from sinks or yard drains</li>
        <li>Standing water in yard or driveway</li>
    </ul>
    <p class="mt-4">If you notice any of these signs before or during a storm, it’s best to call a professional plumber right away.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">Preventative Tips: Keep Your Drains Flowing</h3>
    <h4 class="text-lg font-semibold text-white mt-6 mb-2">1. Clean Gutters and Downspouts</h4>
    <p>Gutters should be cleaned at least twice per year—ideally before the rainy season begins. Clogged gutters can force water to overflow and seep into your home or overwhelm outdoor drains.</p>
    <h4 class="text-lg font-semibold text-white mt-6 mb-2">2. Install Drain Covers and Screens</h4>
    <p>Protect your yard and patio drains with mesh screens that prevent debris from entering. These inexpensive tools can save you from big repair bills.</p>
    <h4 class="text-lg font-semibold text-white mt-6 mb-2">3. Schedule Seasonal Drain Cleaning</h4>
    <p>Professional drain cleaning in late fall or early winter helps remove buildup before the first big storm hits. At Gardner Plumbing Co., we use hydro jetting and advanced rooter tools to safely clean your pipes without damage.</p>
    <h4 class="text-lg font-semibold text-white mt-6 mb-2">4. Avoid Flushing Grease or Wipes</h4>
    <p>During colder months, grease can harden faster in your pipes. Never pour fats or oils down the drain, and avoid flushing wipes—even those labeled “flushable.”</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">How We Help Murrieta Homeowners Stay Dry</h3>
    <p>Our local team at Gardner Plumbing Co. knows the Murrieta area well—from the hillside homes in Copper Canyon to the family neighborhoods near Los Alamos. We offer:</p>
    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Emergency drain clearing</li>
        <li>Annual inspection plans</li>
        <li>Root intrusion detection</li>
        <li>Outdoor yard drain installation and maintenance</li>
    </ul>
    <p class="mt-4">We’re licensed, local, and available when you need us most.</p>
  `
};

// --- Other recent posts for the sidebar ---
const recentPosts = [
    { slug: "plumbing-upgrades-boost-home-value", title: "Plumbing Upgrades That Boost Your Home’s Value", category: "Home Improvement"},
    { slug: "ultimate-water-leak-detection-guide", title: "The Ultimate Water Leak Detection Guide", category: "Leak Detection"},
    { slug: "5-signs-you-need-toilet-repair-perris", title: "5 Signs You Need Toilet Repair in Perris", category: "Appliances"},
];

export function PreventDrainClogsRainySeason() {

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
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Don’t Let a Clogged Drain Ruin Your Rainy Day</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Stay ahead of the storm this season with proactive plumbing care. Whether it’s routine maintenance or a last-minute call during a downpour, Gardner Plumbing Co. is here to help.</p>
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

