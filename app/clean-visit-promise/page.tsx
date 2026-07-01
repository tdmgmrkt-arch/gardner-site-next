import { CleanVisitPromisePage as CleanVisitPromiseContent } from "@/components/CleanVisitPromisePage";
import { StoryTestimonials, STORIES_CLEAN_VISIT } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import type { Metadata } from "next";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Clean Visit Promise — How Gardner Plumbing Protects Your Home",
  description:
    "Gardner Plumbing Co. follows a 6-step Clean Visit Promise on every call — shoe covers, drop cloths, haul-away, and a real recourse if we miss a step.",
  alternates: {
    canonical: "/clean-visit-promise",
  },
  openGraph: {
    title:
      "The Clean Visit Promise — How Gardner Plumbing Protects Your Home | Gardner Plumbing Co.",
    description:
      "Gardner Plumbing Co. follows a 6-step Clean Visit Promise on every call — shoe covers, drop cloths, haul-away, and a real recourse if we miss a step.",
    url: "/clean-visit-promise",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Clean Visit Promise — How Gardner Plumbing Protects Your Home | Gardner Plumbing Co.",
    description:
      "Gardner Plumbing Co. follows a 6-step Clean Visit Promise on every call — shoe covers, drop cloths, haul-away, and a real recourse if we miss a step.",
  },
};

/* ─────────────────────────────────────────────────────
   JSON-LD: WebPage + FAQPage + BreadcrumbList
   ───────────────────────────────────────────────────── */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Clean Visit Promise — How Gardner Plumbing Protects Your Home",
  description:
    "Gardner Plumbing Co. follows a 6-step Clean Visit Promise on every service call — shoe covers, drop cloths, path protection, fixture towels, full cleanup, and haul-away.",
  url: "https://gardnerplumbingco.com/clean-visit-promise",
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
        name: "The Clean Visit Promise",
        item: "https://gardnerplumbingco.com/clean-visit-promise",
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
      name: "Does Gardner Plumbing wear shoe covers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gardner Plumbing Co. technicians put on disposable shoe covers before entering your home on every service call. This applies to all visits — estimates, diagnostic calls, and full service jobs. The booties go on at the door, before the technician crosses the threshold.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gardner Plumbing clean up after the job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gardner Plumbing Co. performs a full post-job cleanup on every service call. The technician sweeps or vacuums the work area, wipes down surfaces touched during the job, and hauls away all old parts, pipe scraps, and packaging. The goal is for your home to look the way it did before we arrived.",
      },
    },
    {
      "@type": "Question",
      name: "What does Gardner Plumbing do to protect my floors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gardner Plumbing Co. uses two layers of floor protection on every visit. Technicians wear disposable shoe covers from entry to exit. Before any work begins, drop cloths go under the work area and runner protection covers the path from the entry point to the job site. This covers floors, carpet, and hard surfaces throughout the home.",
      },
    },
    {
      "@type": "Question",
      name: "What if the techs leave a mess?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a Gardner Plumbing technician leaves your home without completing every step of the Clean Visit Promise, call our office at (951) 246-4337. We will send a technician back the same business day to make it right at no charge. No paperwork, no runaround.",
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
      name: "The Clean Visit Promise",
      item: "https://gardnerplumbingco.com/clean-visit-promise",
    },
  ],
};

export default async function CleanVisitPromiseRoute() {
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
      {/* Inline JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
        <CleanVisitPromiseContent reviewCount={reviewCount} ratingLabel={ratingLabel} />
        <StoryTestimonials
          heading="Clean Visits in Their Own Words"
          subheading="What customers actually wrote about how we handled their homes — drop cloths, shoe covers, haul-away, and the follow-up."
          stories={STORIES_CLEAN_VISIT}
        />
        <FinalCallCta
          heading="Book a Clean Visit Today"
          subheading="Every Gardner Plumbing Co. visit follows the 6-step Clean Visit Promise. Call now or request a free estimate online."
        />
      </main>
    </div>
  );
}
