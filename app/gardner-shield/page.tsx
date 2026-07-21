import { GardnerShield } from "@/components/GardnerShield";
import type { Metadata } from "next";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Gardner Shield — Year-Round Home Systems Protection | Gardner Plumbing Co.",
  description:
    "The Gardner Shield is Gardner Plumbing Co.'s membership program: Plumbing Shield $249/yr with optional HVAC (+$99) and Electrical (+$49) add-ons. Scheduled maintenance, priority service, 10% off repairs, no emergency overtime.",
  alternates: {
    canonical: "/gardner-shield",
  },
  openGraph: {
    title:
      "The Gardner Shield — Year-Round Home Systems Protection | Gardner Plumbing Co.",
    description:
      "The Gardner Shield is Gardner Plumbing Co.'s membership program: Plumbing Shield $249/yr with optional HVAC (+$99) and Electrical (+$49) add-ons. Scheduled maintenance, priority service, 10% off repairs, no emergency overtime.",
    url: "/gardner-shield",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Gardner Shield — Year-Round Home Systems Protection | Gardner Plumbing Co.",
    description:
      "The Gardner Shield is Gardner Plumbing Co.'s membership program: Plumbing Shield $249/yr with optional HVAC (+$99) and Electrical (+$49) add-ons. Scheduled maintenance, priority service, 10% off repairs, no emergency overtime.",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

function buildSchemas(reviewCount: string, ratingLabel: string) {
  const ratingValue = parseFloat(ratingLabel) || 4.9;
  const ratingCountNum = parseInt(reviewCount.replace(/\D/g, ""), 10) || 900;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Gardner Shield — Year-Round Home Systems Protection",
    description:
      "Gardner Plumbing Co.'s membership program: Plumbing Shield ($249/yr) plus optional HVAC (+$99) and Electrical (+$49) add-ons. Scheduled maintenance, priority service, 10% off repairs, and no emergency overtime charges for Riverside County homeowners.",
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
      "Annual home systems membership program: Plumbing Shield ($249/yr) with optional HVAC (+$99) and Electrical (+$49) add-ons. Scheduled maintenance, priority service, 10% off repairs, and no emergency overtime charges.",
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
      name: "Gardner Shield Membership Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Plumbing Shield",
          description:
            "Base membership: 2 plumbing maintenance visits per year, 10% off plumbing services, 1 free drain cleaning per year (with accessible cleanout), priority service, no emergency overtime charges, annual plumbing safety inspection with written report.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "249.00",
            priceCurrency: "USD",
            unitText: "ANN",
          },
        },
        {
          "@type": "Offer",
          name: "HVAC Coverage Add-On",
          description:
            "Optional add-on to the Plumbing Shield: 2 HVAC tune-ups per year (spring AC + fall heating), 10% off HVAC services, priority HVAC service, no emergency overtime on HVAC calls.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99.00",
            priceCurrency: "USD",
            unitText: "ANN",
          },
        },
        {
          "@type": "Offer",
          name: "Electrical Coverage Add-On",
          description:
            "Optional add-on to the Plumbing Shield: annual electrical safety inspection, 10% off electrical services, priority electrical service, no emergency overtime on electrical calls.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "49.00",
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
          text: "The base Plumbing Shield ($249/year) includes two plumbing maintenance visits, one free drain cleaning per year (with an accessible cleanout), 10% off plumbing services, priority service, and no emergency overtime charges. You can add HVAC coverage (+$99/year) and/or Electrical coverage (+$49/year) at any time to extend the same benefits to those trades.",
        },
      },
      {
        "@type": "Question",
        name: "How is The Gardner Shield different from a warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A warranty is reactive — it kicks in after something breaks. The Gardner Shield is proactive. It bundles scheduled maintenance designed to prevent failures in the first place, plus priority access, no overtime charges, and 10% off repairs when they are needed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add HVAC or Electrical coverage later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can start with the base Plumbing Shield and add HVAC (+$99/year) or Electrical (+$49/year) at any point during your membership year. The add-ons are prorated so you only pay for the remaining months.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel my Gardner Shield membership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Annual memberships can be cancelled for a prorated refund of unused months, minus any member discounts already applied to repairs during the membership period. Call our office at (951) 246-4337 for details.",
        },
      },
      {
        "@type": "Question",
        name: "Does The Gardner Shield cover emergency repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Shield guarantees priority dispatch for emergency calls — you move to the front of the queue immediately — and there is no overtime charge for after-hours work. Repair costs are billed at your 10% member discount rate. The Shield does not pay for the full cost of every emergency repair, but the discount and no-overtime benefit apply to eligible work.",
        },
      },
      {
        "@type": "Question",
        name: "What if I already have a home warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Home warranties and The Gardner Shield serve different purposes and work well together. Home warranties are insurance products that require claim filings, deductibles, and third-party contractor dispatch — often with service delays. The Gardner Shield gives you a direct relationship with a licensed contractor you already trust, proactive maintenance your home warranty won't provide, and faster service when you need it.",
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
