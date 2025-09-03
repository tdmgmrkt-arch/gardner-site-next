"use client";

import dynamic from "next/dynamic";

import { Hero } from "./Hero";
import { TrustBadges } from "./TrustBadges";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";
import ServiceAreas from "./ServiceAreas";
import { LeakDetection } from "./LeakDetection";

// 🚀 Lazy-loaded sections
const Reviews = dynamic(() => import("./Reviews").then(mod => mod.Reviews), { ssr: false });
const FAQ = dynamic(() => import("./FAQ").then(mod => mod.FAQ), { ssr: false });
const BlogSection = dynamic(() => import("./BlogSection").then(mod => mod.BlogSection), { ssr: false });

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Reviews />       {/* Lazy-loaded */}
      <ServiceAreas />
      <FAQ />           {/* Lazy-loaded */}
      <BlogSection />   {/* Lazy-loaded */}
    </div>
  );
}
