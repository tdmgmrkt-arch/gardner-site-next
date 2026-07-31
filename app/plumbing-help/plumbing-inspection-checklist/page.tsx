import { PlumbingInspectionChecklist } from "@/components/scenarios/PlumbingInspectionChecklist";
import { GardnerPromise } from "@/components/GardnerPromise";
import { StoryTestimonials, STORIES_GENERAL } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import type { Metadata } from "next";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Plumbing Inspection Checklist Before Buying a Home",
  description:
    "What plumbing should you check before buying a home? Gardner Plumbing Co. covers 12 critical inspection points, 5 deal-killing red flags, and costs for Riverside County buyers.",
  alternates: {
    canonical: "/plumbing-help/plumbing-inspection-checklist",
  },
  openGraph: {
    title: "Plumbing Inspection Checklist Before Buying a Home | Gardner Plumbing",
    description:
      "What plumbing should you check before buying a home? Gardner Plumbing Co. covers 12 critical inspection points, 5 deal-killing red flags, and costs for Riverside County buyers.",
    url: "/plumbing-help/plumbing-inspection-checklist",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Inspection Checklist Before Buying a Home | Gardner Plumbing",
    description:
      "What plumbing should you check before buying a home? Gardner Plumbing Co. covers 12 critical inspection points, 5 deal-killing red flags, and costs for Riverside County buyers.",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const BASE_URL = "https://gardnerplumbingco.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Plumbing Help", item: `${BASE_URL}/plumbing-help` },
    { "@type": "ListItem", position: 3, name: "Plumbing Inspection Checklist", item: `${BASE_URL}/plumbing-help/plumbing-inspection-checklist` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Plumbing Inspection Checklist: What to Check Before You Buy a Home",
  description:
    "12 critical plumbing inspection points, 5 deal-killing red flags, and real costs for pre-purchase plumbing inspections in Riverside County, Southern California.",
  url: `${BASE_URL}/plumbing-help/plumbing-inspection-checklist`,
  dateModified: "2026-06-30",
  author: {
    "@type": "Organization",
    name: "Gardner Plumbing Co.",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Gardner Plumbing Co.",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/gardner_logo.webp` },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a plumbing inspection cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dedicated pre-purchase plumbing inspection in Riverside County typically costs $200 – $350. Gardner Plumbing Co. provides a written report with every inspection. A sewer camera inspection, if added, typically costs an additional $150 – $250.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a plumbing inspection if the home inspection passed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A general home inspector evaluates plumbing for visible defects in roughly 15 – 20 minutes. A licensed plumber performing a dedicated inspection spends 60 to 90 minutes on the same system with trade-specific tools. A passed home inspection means the inspector found no visible defects — it does not mean the plumbing system is in good condition.",
      },
    },
    {
      "@type": "Question",
      name: "What is a sewer line camera inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sewer camera inspection threads a flexible camera through the main drain line to identify root intrusion, crushed pipe sections, pipe bellies (sags), and buildup. The inspection typically takes 30 – 45 minutes. For any home with mature trees in the yard, a history of slow drains, or construction before 1990, it is not optional.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a plumbing inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gardner Plumbing Co.'s 65-point plumbing inspection takes 60 to 90 minutes for a typical single-family home. Add 30 – 45 minutes if a sewer camera inspection is included. Plan for 2 hours total if you want the full picture.",
      },
    },
    {
      "@type": "Question",
      name: "Can plumbing issues kill a real estate deal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Root intrusion or bellied sewer lines, galvanized supply lines throughout, multiple past slab leaks, or a water heater in imminent failure can give a buyer legal grounds to request repairs, concessions, or cancellation under most California purchase contracts.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays for the plumbing inspection — buyer or seller?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In California, the buyer typically pays for the plumbing inspection as part of due diligence. However, if inspection findings lead to a seller credit or price reduction, buyers routinely recover the inspection cost many times over.",
      },
    },
    {
      "@type": "Question",
      name: "What if the inspection finds problems after I've already bought the house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gardner Plumbing Co. serves homeowners at every stage — not just buyers in escrow. A licensed plumber can document the condition, estimate repair costs, and provide a written report that supports a disclosure complaint or legal claim. Call (951) 246-4337 for a post-purchase plumbing inspection.",
      },
    },
  ],
};

// ─── Route ────────────────────────────────────────────────────────────────────

export default async function PlumbingInspectionChecklistPage() {
  const reviewData = await getGoogleReviews();
  const reviewCount =
    reviewData.userRatingCount != null
      ? `${formatReviewCount(reviewData.userRatingCount)}+`
      : `${formatReviewCount(siteConfig.googleRatingFallback.count)}+`;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <PlumbingInspectionChecklist />
        <StoryTestimonials
          heading="What Homeowners Say After a Gardner Inspection"
          subheading="Thorough inspections, written reports, and technicians who walk you through every finding."
          stories={STORIES_GENERAL}
        />
        <GardnerPromise reviewCount={reviewCount} />
        <FinalCallCta
          heading="Book a Pre-Purchase Plumbing Inspection"
          subheading="Gardner Plumbing Co. serves homebuyers, real estate agents, and homeowners across Riverside County and neighboring communities. A 65-point evaluation, a written report, and a technician walkthrough of every finding. No trip fee. No pressure to proceed with repairs. CSLB #1073177."
        />
      </main>
    </div>
  );
}
