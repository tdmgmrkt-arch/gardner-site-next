import { GardnerShield } from "@/components/GardnerShield";
import type { Metadata } from "next";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Gardner Shield — Year-Round Plumbing Protection | Gardner Plumbing Co.",
  description:
    "The Gardner Shield is Gardner Plumbing Co.'s membership program: annual inspections, scheduled maintenance, priority emergency dispatch, and extended warranty for Riverside County homeowners.",
  alternates: {
    canonical: "/gardner-shield",
  },
  openGraph: {
    title:
      "The Gardner Shield — Year-Round Plumbing Protection | Gardner Plumbing Co.",
    description:
      "The Gardner Shield is Gardner Plumbing Co.'s membership program: annual inspections, scheduled maintenance, priority emergency dispatch, and extended warranty for Riverside County homeowners.",
    url: "/gardner-shield",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Gardner Shield — Year-Round Plumbing Protection | Gardner Plumbing Co.",
    description:
      "The Gardner Shield is Gardner Plumbing Co.'s membership program: annual inspections, scheduled maintenance, priority emergency dispatch, and extended warranty for Riverside County homeowners.",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

function buildSchemas(reviewCount: string, ratingLabel: string) {
  const ratingValue = parseFloat(ratingLabel) || 4.9;
  const ratingCountNum = parseInt(reviewCount.replace(/\D/g, ""), 10) || 900;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Gardner Shield — Year-Round Plumbing Protection",
    description:
      "Gardner Plumbing Co.'s membership program bundling annual inspections, scheduled maintenance, priority emergency dispatch, and extended warranty coverage for Riverside County homeowners.",
    url: "https://gardnerplumbingco.com/gardner-shield",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://gardnerplumbingco.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Gardner Shield",
          item: "https://gardnerplumbingco.com/gardner-shield",
        },
      ],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "The Gardner Shield Membership Program",
    description:
      "Annual plumbing membership program offering inspections, scheduled maintenance, priority emergency dispatch, member repair discounts, and extended warranty coverage.",
    provider: {
      "@type": "Plumber",
      name: "Gardner Plumbing Co.",
      telephone: "+19512464337",
      url: "https://gardnerplumbingco.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "30714 Wealth St",
        addressLocality: "Murrieta",
        addressRegion: "CA",
        postalCode: "92563",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingValue,
        reviewCount: ratingCountNum,
        bestRating: 5,
        worstRating: 1,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Riverside County, CA",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gardner Shield Membership Tiers",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Shield Bronze",
          description:
            "Annual plumbing inspection, written report, up to 56 PT tune-up, up to 25% repair discount, priority booking, extended warranty on covered repairs. 1 visit per year.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99.00",
            priceCurrency: "USD",
            unitText: "ANN",
          },
        },
        {
          "@type": "Offer",
          name: "Shield Silver",
          description:
            "Everything in Bronze plus a second maintenance visit per year, 24-hour response time guarantee, 24/7 priority emergency dispatch, no premium charges, annual water heater flush. 2 visits per year.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "179.00",
            priceCurrency: "USD",
            unitText: "ANN",
          },
        },
        {
          "@type": "Offer",
          name: "Shield Gold",
          description:
            "Everything in Silver plus a third maintenance visit, one free drain clearing per year, up to 10% discount on new equipment, Comfort Guarantee (hotel stay), fully transferable on home sale, multi-year/unit discount available. 3 visits per year.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "249.00",
            priceCurrency: "USD",
            unitText: "ANN",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does The Gardner Shield include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every Gardner Shield membership includes an annual plumbing system inspection with a written report, scheduled maintenance visits (frequency depends on your tier), priority emergency dispatch, and extended warranty coverage on parts and labor for covered repairs. Shield Silver and Shield Gold members receive additional visits per year — 2 and 3 visits respectively.",
        },
      },
      {
        "@type": "Question",
        name: "How is The Gardner Shield different from a warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A warranty is reactive — it kicks in after something breaks. The Gardner Shield is proactive. It bundles scheduled maintenance designed to prevent failures in the first place, plus priority access and discounts when repairs are needed. The extended warranty component is one layer of the Shield, not the whole thing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel my Gardner Shield membership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Month-to-month memberships can be cancelled at any time with 30 days notice. Annual memberships paid up front can be cancelled for a prorated refund of unused months, minus any discounts already applied to repairs during the membership period. Call our office at (951) 246-4337 for details.",
        },
      },
      {
        "@type": "Question",
        name: "Does The Gardner Shield cover emergency repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Shield guarantees priority dispatch for emergency calls — you move to the front of the queue immediately. Repair costs are billed at your member discount rate. The Shield does not cover the cost of every emergency repair, but your tier discount and extended warranty apply to eligible work.",
        },
      },
      {
        "@type": "Question",
        name: "Can I transfer my Gardner Shield membership to a new home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shield Gold memberships are fully transferable to a new home address within our service area. Shield Bronze and Shield Silver memberships can be transferred for a $50 administration fee. Call us to process a transfer.",
        },
      },
      {
        "@type": "Question",
        name: "What if I already have a home warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Home warranties and The Gardner Shield serve different purposes and work well together. Home warranties are insurance products that require claim filings, deductibles, and third-party contractor dispatch — often with service delays. The Gardner Shield gives you a direct relationship with a licensed plumber you already trust, proactive maintenance your home warranty won't provide, and faster service when you need it.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gardnerplumbingco.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "The Gardner Shield",
        item: "https://gardnerplumbingco.com/gardner-shield",
      },
    ],
  };

  return { webPageSchema, serviceSchema, faqSchema, breadcrumbSchema };
}

// ─── Route ────────────────────────────────────────────────────────────────────

export default async function GardnerShieldRoute() {
  const reviewData = await getGoogleReviews();
  const reviewCount =
    reviewData.userRatingCount != null
      ? `${formatReviewCount(reviewData.userRatingCount)}+`
      : `${formatReviewCount(siteConfig.googleRatingFallback.count)}+`;
  const ratingLabel =
    formatRating(reviewData.rating) ??
    formatRating(siteConfig.googleRatingFallback.rating) ??
    "4.9";

  const { webPageSchema, serviceSchema, faqSchema, breadcrumbSchema } =
    buildSchemas(reviewCount, ratingLabel);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <GardnerShield reviewCount={reviewCount} ratingLabel={ratingLabel} />
      </main>
    </div>
  );
}
