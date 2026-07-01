import { PlumbingHelpHub } from "@/components/scenarios/PlumbingHelpHub";
import { GardnerPromise } from "@/components/GardnerPromise";
import { CleanVisitPromise } from "@/components/CleanVisitPromise";
import { FinalCallCta } from "@/components/FinalCallCta";
import type { Metadata } from "next";
import { getGoogleReviews, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Plumbing Help & Emergency Guides — Gardner Plumbing Co.",
  description:
    "Free plumbing help guides for Riverside County homeowners. What to do when pipes burst, drains back up, or you spot a slab leak. Written by licensed CSLB #1073177 technicians.",
  alternates: {
    canonical: "/plumbing-help",
  },
  openGraph: {
    title: "Plumbing Help & Emergency Guides — Gardner Plumbing Co.",
    description:
      "Free plumbing help guides for Riverside County homeowners. What to do when pipes burst, drains back up, or you spot a slab leak. Written by licensed CSLB #1073177 technicians.",
    url: "/plumbing-help",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Help & Emergency Guides — Gardner Plumbing Co.",
    description:
      "Free plumbing help guides for Riverside County homeowners. What to do when pipes burst, drains back up, or you spot a slab leak. Written by licensed CSLB #1073177 technicians.",
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
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plumbing Help & Emergency Guides — Gardner Plumbing Co.",
  description:
    "Problem-answer guides for the most common plumbing emergencies in Riverside County. Written by licensed plumbing technicians. Covers burst pipes, drain clogs, slab leaks, and home inspection checklists.",
  url: `${BASE_URL}/plumbing-help`,
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
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Plumbing Help", item: `${BASE_URL}/plumbing-help` },
    ],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Plumbing Help Guides — Gardner Plumbing Co.",
  description:
    "Problem-answer guides for common plumbing emergencies in Riverside County, written by licensed technicians (CSLB #1073177).",
  url: `${BASE_URL}/plumbing-help`,
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Pipe Burst? What to Do Right Now",
      description:
        "Shut off the main valve, then call. Step-by-step guide for burst pipe emergencies in Riverside County. Covers shut-off steps, damage limitation, and what Gardner Plumbing does when they arrive.",
      url: `${BASE_URL}/plumbing-help/pipe-burst-what-to-do`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Drain Won't Stop Backing Up? What to Do",
      description:
        "One clogged drain is a plunger job. Multiple drains backing up at once means the main line — learn when to call and what to expect from a professional drain cleaning.",
      url: `${BASE_URL}/plumbing-help/drain-clog-what-to-do`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Think You Have a Slab Leak? What to Do",
      description:
        "Warm spots on the floor and unexplained water bill spikes are warning signs. Learn how slab leak detection works, what it costs in Riverside County, and when to call.",
      url: `${BASE_URL}/plumbing-help/slab-leak-what-to-do`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Plumbing Inspection Checklist — Buying or Selling a Home",
      description:
        "A 12-point plumbing inspection checklist for Riverside County home buyers and sellers. Know what to look for and what questions to ask before you sign.",
      url: `${BASE_URL}/plumbing-help/plumbing-inspection-checklist`,
    },
  ],
};

// ─── Route ────────────────────────────────────────────────────────────────────

export default async function PlumbingHelpPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main>
        <PlumbingHelpHub />
        <GardnerPromise reviewCount={reviewCount} />
        <CleanVisitPromise reviewCount={reviewCount} />
        <FinalCallCta
          heading="Prefer to Just Call Someone?"
          subheading="24/7 dispatch, live person answers, 45-min arrival in core service areas."
        />
      </main>
    </div>
  );
}
