"use client";

import dynamic from "next/dynamic";

import { Hero } from "./Hero";
import { TrustBadges } from "./TrustBadges";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";
import ServiceAreas from "./ServiceAreas";
import { LeakDetection } from "./LeakDetection";
import { GardnerPromise } from "./GardnerPromise";
import { CleanVisitPromise } from "./CleanVisitPromise";

// 🚀 Lazy-loaded sections
const Reviews = dynamic(() => import("./Reviews").then(mod => mod.Reviews), { ssr: false });
const FAQ = dynamic(() => import("./FAQ").then(mod => mod.FAQ), { ssr: false });
const BlogSection = dynamic(() => import("./BlogSection").then(mod => mod.BlogSection), { ssr: false });

type AppProps = {
  reviewCount?: string;
  ratingLabel?: string;
  ratingBadge?: React.ReactNode;
};

export default function App({ reviewCount, ratingLabel, ratingBadge }: AppProps = {}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero reviewCount={reviewCount} ratingLabel={ratingLabel} ratingBadge={ratingBadge} />
      <Services />
      <WhyChooseUs />
      <GardnerPromise reviewCount={reviewCount} />        {/* Trust escalation: why we're great → our written promise */}
      <CleanVisitPromise reviewCount={reviewCount} />     {/* Clean home standard — differentiates on home protection */}
      <Reviews reviewCount={reviewCount} ratingLabel={ratingLabel} />               {/* Lazy-loaded */}
      <ServiceAreas />
      <FAQ />             {/* Lazy-loaded */}
      <BlogSection />     {/* Lazy-loaded */}
    </div>
  );
}
