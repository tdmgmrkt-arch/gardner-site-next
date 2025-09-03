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
  slug: "5-signs-you-need-toilet-repair-perris",
  category: "Appliances",
  title: "5 Signs You Need Toilet Repair in Perris—Before It Becomes a Bigger Problem",
  author: "Gardner Plumbing Co.",
  date: "April 9, 2025",
  readTime: "5 min read",
  image: "/newtoilet.webp",
  content: `
    <h2 class="text-2xl font-bold text-red-400 mb-4">Don’t Flush Away Warning Signs</h2>
    <p>Your toilet might seem like it’s working fine—until it’s not. For many homeowners in Perris, subtle issues with their toilets can escalate into serious plumbing emergencies if ignored. Whether it’s a minor leak or a constantly running tank, early repairs can save you money and stress. In this article, we’ll cover the top signs you may need toilet repair and when to call in the pros at Gardner Plumbing Co.</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">1. Constant Running Water</h3>
    <p>If your toilet keeps running long after you flush, you’re not just wasting water—you’re likely throwing money down the drain. A continuously running toilet can waste hundreds of gallons a day and may indicate problems with the flapper, fill valve, or float.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Why It Matters in Perris:</b> Water conservation is essential in Riverside County, where drought-conscious households need every drop to count. Addressing a running toilet quickly is one of the easiest ways to lower your utility bills.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">2. Weak or Incomplete Flush</h3>
    <p>Does it feel like your toilet doesn’t flush with the same force anymore? A weak flush can signal a clog, a low water level in the tank, or mineral deposits affecting flow. Left untreated, these issues can worsen into full blockages.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Pro Tip:</b> If your home in Perris has hard water (common in the region), buildup in the flush holes under the rim may be restricting water pressure.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">3. Water Around the Base</h3>
    <p>Water collecting at the base of your toilet is never a good sign. It could be due to a worn wax ring, cracked toilet base, or even loose bolts. Even a small leak can lead to subfloor damage, mold growth, and costly repairs.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Act Fast:</b> This is one issue where time is critical. If you notice water pooling, shut off the water supply and contact a licensed plumber immediately.</p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">4. Frequent Clogs</h3>
    <p>Are you reaching for the plunger more than once a week? Recurring clogs often indicate a deeper issue in the trap or main sewer line—not just too much toilet paper.</p>
    <p class="mt-2 pl-4 border-l-2 border-red-500/50 text-gray-400 italic"><b>Common in Older Homes:</b> Many homes in historic Perris neighborhoods may have aging plumbing systems that need professional inspection.</p>
    
    <h3 class="text-xl font-bold text-white mt-8 mb-4">5. Strange Noises or Bubbling</h3>
    <p>If your toilet gurgles when you flush or when nearby fixtures are used, it could be a venting problem or partial sewer blockage. These sounds may seem harmless, but they often precede larger drainage issues.</p>
  `
};

// --- Other recent posts for the sidebar ---
const recentPosts = [
    { slug: "plumbing-upgrades-boost-home-value", title: "Plumbing Upgrades That Boost Your Home’s Value", category: "Home Improvement"},
    { slug: "ultimate-water-leak-detection-guide", title: "The Ultimate Water Leak Detection Guide", category: "Leak Detection"},
    { slug: "tankless-water-heaters-temecula-upgrade", title: "Tankless Water Heaters: Temecula’s Top Upgrade", category: "Water Heaters"},
];

export function SignsYouNeedToiletRepairInPerris() {

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
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Don’t Wait Until It’s Too Late</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Small toilet problems can quickly escalate. If you notice any of these signs, have your system inspected by the experts at Gardner Plumbing Co. for fast, affordable repairs in Perris.</p>
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

