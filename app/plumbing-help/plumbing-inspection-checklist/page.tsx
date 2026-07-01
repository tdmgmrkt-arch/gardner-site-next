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

const checklistItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "12 Things Every Plumbing Inspection Should Cover",
  description: "The 12 areas Gardner Plumbing technicians evaluate on every pre-purchase plumbing inspection in Riverside County.",
  numberOfItems: 12,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Main Water Shut-Off — Location and Function", description: "Confirm the main shut-off opens and closes fully and doesn't show signs of corrosion or calcification." },
    { "@type": "ListItem", position: 2, name: "Water Pressure — Measured at the Tap", description: "Residential water pressure should read between 40 and 80 PSI. Measured with a gauge, not by feel." },
    { "@type": "ListItem", position: 3, name: "Pipe Material Throughout the Home", description: "Supply lines and drain lines identified and documented: copper, PEX, PVC, CPVC, cast iron, or galvanized steel." },
    { "@type": "ListItem", position: 4, name: "Water Heater — Age, Type, and Venting", description: "Tank water heaters have an 8- to 12-year service life. Serial number checked, venting inspected, fuel type noted." },
    { "@type": "ListItem", position: 5, name: "Drain Flow Test — Every Fixture", description: "Each sink, tub, and shower drain gets water run through it. Slow drains indicate partial blockages." },
    { "@type": "ListItem", position: 6, name: "Toilet Flush and Fill Mechanisms", description: "Every toilet flushed. Flapper seal, fill valve, and base stability checked." },
    { "@type": "ListItem", position: 7, name: "Sewer Line Camera Inspection — Main Line Health", description: "Camera run through main line to confirm it's clear of root intrusion, debris, and bellied sections." },
    { "@type": "ListItem", position: 8, name: "Supply Valve Condition Under Sinks and Behind Toilets", description: "Isolation valves operated manually. Old compression valves frequently seize open or develop slow drips." },
    { "@type": "ListItem", position: 9, name: "Hose Bibs and Outdoor Fixtures", description: "Outdoor hose bibs checked for drip leaks and freeze damage." },
    { "@type": "ListItem", position: 10, name: "Evidence of Past Slab Leaks", description: "Mismatched flooring, fresh tile patches, baseboards with water staining, or a moving meter when fixtures are off." },
    { "@type": "ListItem", position: 11, name: "Hard-Water Damage on Fixtures and Appliances", description: "Mineral buildup on showerheads, aerators, and dishwasher connections assessed." },
    { "@type": "ListItem", position: 12, name: "Sewer Clean-Out Access", description: "A capped access point that lets a plumber clear a main-line blockage without digging up the yard." },
  ],
};

const redFlagsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "5 Plumbing Red Flags That Should Kill a Deal or Trigger a Seller Concession",
  description: "Systemic plumbing problems that affect the safety, livability, or insurability of a home.",
  numberOfItems: 5,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "No Accessible Main Water Shut-Off", description: "If a licensed plumber cannot locate and operate the main water shut-off during inspection, the home cannot be safely serviced." },
    { "@type": "ListItem", position: 2, name: "Sewer Camera Shows Root Intrusion or Pipe Bellies", description: "Either condition points toward a partial or full sewer line replacement at $4,000 – $12,000 depending on length and depth." },
    { "@type": "ListItem", position: 3, name: "Galvanized Supply Lines Throughout the Home", description: "A home with all-galvanized supply lines needs a full repipe — typically $4,500 – $9,000 in Riverside County." },
    { "@type": "ListItem", position: 4, name: "Multiple Slab Leak Repairs in the Same Home", description: "Two or three slab leak patches indicates systemic copper supply line failure. A full repipe runs $6,000 – $12,000." },
    { "@type": "ListItem", position: 5, name: "Water Heater 12+ Years Old with Corrosion", description: "At risk of failure. Budget $1,200 – $2,800 for a tank replacement or $2,500 – $4,500 for a tankless conversion." },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(checklistItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(redFlagsItemListSchema) }}
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
          subheading="Gardner Plumbing Co. serves homebuyers, real estate agents, and homeowners across Riverside County, the Coachella Valley, and eastern San Bernardino County. A 65-point evaluation, a written report, and a technician walkthrough of every finding. No trip fee. No pressure to proceed with repairs. CSLB #1073177."
        />
      </main>
    </div>
  );
}
