import { TransparentPricing } from "@/components/TransparentPricing";
import { StoryTestimonials, STORIES_TRANSPARENT_PRICING } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import Script from "next/script";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Transparent Pricing",
  description:
    "Gardner Plumbing Co. provides upfront, written pricing for all plumbing repairs and installations in Riverside County and neighboring communities. No trip fees, no hidden charges — ever.",
  alternates: {
    canonical: "/transparent-pricing",
  },
  openGraph: {
    title: "Transparent Pricing | Gardner Plumbing Co.",
    description:
      "Gardner Plumbing Co. provides upfront, written pricing for all plumbing repairs and installations in Riverside County and neighboring communities. No trip fees, no hidden charges — ever.",
    url: "/transparent-pricing",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing | Gardner Plumbing Co.",
    description:
      "Upfront, written plumbing pricing with no trip fees. Serving Riverside County and neighboring communities for 30+ years.",
  },
};

// ─── Breadcrumb schema ─────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://gardnerplumbingco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Transparent Pricing",
      item: "https://gardnerplumbingco.com/transparent-pricing",
    },
  ],
};

// ─── Service schema ────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Transparent Plumbing Pricing",
  description:
    "Gardner Plumbing Co. provides free in-home estimates with written, flat-rate pricing for all plumbing services in Riverside County and neighboring communities. No trip fees, no surprise charges.",
  provider: {
    "@type": "Plumber",
    name: "Gardner Plumbing Co.",
    telephone: "+1-951-246-4337",
    url: "https://gardnerplumbingco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murrieta",
      addressRegion: "CA",
      addressCountry: "US",
    },
    hasCredential: "CSLB #1073177",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "900",
      bestRating: "5",
    },
  },
  areaServed: [
    "Banning, CA",
    "Beaumont, CA",
    "Calimesa, CA",
    "Cathedral City, CA",
    "Cherry Valley, CA",
    "Corona, CA",
    "Eastvale, CA",
    "Garnet, CA",
    "Hemet, CA",
    "Jurupa Valley, CA",
    "Lake Elsinore, CA",
    "Menifee, CA",
    "Mentone, CA",
    "Moreno Valley, CA",
    "Murrieta, CA",
    "North Palm Springs, CA",
    "Palm Springs, CA",
    "Palm Desert, CA",
    "Pedley, CA",
    "Perris, CA",
    "Redlands, CA",
    "Riverside, CA",
    "San Jacinto, CA",
    "Temecula, CA",
    "Yucaipa, CA",
  ],
  serviceType: "Plumbing",
  offers: {
    "@type": "Offer",
    description: "Free in-home estimate — no trip fee, no obligation",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

// ─── FAQ schema (all 11 FAQs) ──────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a plumber cost in Riverside County and neighboring communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most standard service calls in Riverside County and neighboring communities, homeowners pay between $125 and $600. The average service call for a common repair such as a drain clearing or toilet fix typically falls between $150 and $450. More complex projects — water heater replacements, sewer line repairs, and slab leaks — range from $1,200 to $20,000 depending on scope.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gardner Plumbing Co. charge a trip fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Gardner Plumbing Co. does not charge a trip fee, dispatch fee, or service call fee. The estimate visit is free.",
      },
    },
    {
      "@type": "Question",
      name: "How much does drain cleaning cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drain cleaning for a single fixture typically costs $150 to $350 in Southern California. Main sewer line clearing runs $250 to $600. Hydro jetting, which is used for severe buildup or recurring blockages, typically costs $350 to $800.",
      },
    },
    {
      "@type": "Question",
      name: "How much does water heater installation cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard tank water heater replacement in Southern California typically costs $1,400 to $2,800 fully installed, including the unit, labor, code-required upgrades, and permit. Tankless water heater installations range from $3,000 to $5,500 due to additional gas line and venting requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How much does sewer line repair cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sewer line repair in Southern California ranges from $80 to $250 per linear foot for trenchless repair. A full residential sewer line replacement typically costs $3,000 to $20,000 depending on the length of the line, the method used, and whether permits and inspections are required.",
      },
    },
    {
      "@type": "Question",
      name: "How much does leak repair cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accessible pipe leak repairs typically cost $200 to $700. Slab leak detection costs $150 to $400, and slab leak repair ranges from $1,200 to $5,000 or more depending on the extent of the damage and whether pipe rerouting is necessary.",
      },
    },
    {
      "@type": "Question",
      name: "How much does toilet replacement cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional toilet replacement in Southern California typically costs $350 to $950, including removal of the old unit, installation of the new toilet, and sealing. The cost of the toilet itself varies depending on the model chosen.",
      },
    },
    {
      "@type": "Question",
      name: "How much does garbage disposal installation cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garbage disposal replacement by a licensed plumber in Southern California typically costs $200 to $625, including removal of the old unit and installation of the new one.",
      },
    },
    {
      "@type": "Question",
      name: "How much does faucet installation cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional faucet installation in Southern California typically costs $175 to $375 for a standard kitchen or bathroom faucet when the customer supplies the fixture.",
      },
    },
    {
      "@type": "Question",
      name: "Does plumbing work require a permit in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many plumbing projects in Southern California require a permit, including water heater replacements, sewer line work, gas line modifications, and whole-home repiping. Permits and city inspections are the property owner's responsibility under California law. When your job requires them, we'll tell you upfront and can coordinate the paperwork on your behalf — permit fees appear as a separate pass-through line on your quote.",
      },
    },
    {
      "@type": "Question",
      name: "What is flat-rate plumbing pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat-rate pricing means the price is set for the job, not for the hour. You pay the quoted amount regardless of how long the work takes. This protects you from paying more if a job takes longer than expected. Gardner Plumbing Co. uses flat-rate pricing for all standard services.",
      },
    },
  ],
};

export default async function TransparentPricingPage() {
  const reviewData = await getGoogleReviews();
  const reviewCount =
    reviewData.userRatingCount != null
      ? `${formatReviewCount(reviewData.userRatingCount)}+`
      : `${formatReviewCount(siteConfig.googleRatingFallback.count)}+`;
  const ratingLabel =
    formatRating(reviewData.rating) ??
    formatRating(siteConfig.googleRatingFallback.rating) ??
    "4.9";

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <TransparentPricing reviewCount={reviewCount} ratingLabel={ratingLabel} />
        <StoryTestimonials
          heading="Customers on Our Upfront Pricing"
          subheading="Real stories about quotes that matched the invoice — no surprise fees, no padded labor, no upsell pressure."
          stories={STORIES_TRANSPARENT_PRICING}
        />
        <FinalCallCta
          heading="Get a Written, Upfront Quote"
          subheading="Every quote is documented before any work begins. Call now or request a free estimate online — no trip fees, no hidden charges."
        />
      </main>
    </div>
  );
}
