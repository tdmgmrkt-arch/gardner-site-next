import { OurGuarantee } from "@/components/OurGuarantee";
import { StoryTestimonials, STORIES_GUARANTEE } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gardner Promise — Our 30-Day Callback Guarantee",
  description:
    "If the same issue recurs within 30 days of our service visit, a Gardner Plumbing Co. technician returns at no charge. Parts and labor covered. CSLB #1073177.",
  alternates: {
    canonical: "/guarantee",
  },
  openGraph: {
    title: "The Gardner Promise — 30-Day Callback Guarantee | Gardner Plumbing Co.",
    description:
      "If the same issue recurs within 30 days of our service visit, a Gardner Plumbing Co. technician returns at no charge. Parts and labor covered. CSLB #1073177.",
    url: "/guarantee",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gardner Promise — 30-Day Callback Guarantee | Gardner Plumbing Co.",
    description:
      "If the same issue recurs within 30 days of our service visit, a Gardner Plumbing Co. technician returns at no charge. Parts and labor covered. CSLB #1073177.",
  },
};

/* ─────────────────────────────────────────────────────
   JSON-LD: WebPage + FAQPage
   ───────────────────────────────────────────────────── */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Gardner Promise — 30-Day Callback Guarantee",
  description:
    "Gardner Plumbing Co. backs every service call with a 30-day callback guarantee (parts and labor covered), written estimates, no trip fees, and CSLB #1073177 licensing.",
  url: "https://gardnerplumbingco.com/guarantee",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerplumbingco.com/" },
      { "@type": "ListItem", position: 2, name: "The Gardner Promise", item: "https://gardnerplumbingco.com/guarantee" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What counts as 'the same issue' under the Gardner Promise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The same issue means the same root cause at the same location. If we unclog the kitchen drain and it backs up again within 30 days, that is the same issue. A different fixture or unrelated problem is a new job. When there is doubt, we err on the side of the customer.",
      },
    },
    {
      "@type": "Question",
      name: "What if the original technician isn't available for the callback?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We dispatch whoever is closest and available. Every technician has access to the job notes from your original visit. The guarantee belongs to Gardner Plumbing Co. — not to any individual technician.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a deductible or co-pay on the callback visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The callback visit is fully covered. No trip fee, no labor charge, no parts surcharge within the 30-day window for the same issue.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Gardner Promise guarantee transfer to a new homeowner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 30-Day Callback Guarantee is tied to the service visit and runs to the end of its 30-day term regardless of ownership change. The new owner has the remaining days. Call with the original job number.",
      },
    },
    {
      "@type": "Question",
      name: "How do I claim the 30-day callback guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (951) 246-4337 and tell the dispatcher you are calling under the 30-Day Callback Guarantee. Have the date of your original service handy. We will confirm in our system and dispatch a technician.",
      },
    },
    {
      "@type": "Question",
      name: "What if the problem is worse than the original repair on the callback?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the callback reveals that the issue has escalated due to a cause unrelated to our original work, we will diagnose it honestly, explain the new findings, and provide a written estimate for any additional scope. The callback visit itself is still free.",
      },
    },
    {
      "@type": "Question",
      name: "Does the guarantee cover parts I supplied myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parts and labor coverage within the 30-day window applies to materials we supplied and installed. If you provided the part and it failed, the part replacement is on you — but our labor to re-install it is covered under the guarantee.",
      },
    },
  ],
};

export default async function GuaranteePage() {
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
      <main>
        <OurGuarantee reviewCount={reviewCount} ratingLabel={ratingLabel} />
        <StoryTestimonials
          heading="Customers on Our Callback Promise"
          subheading="Stories from homeowners who saw firsthand how we stand behind the work — long after the truck pulls away."
          stories={STORIES_GUARANTEE}
        />
        <FinalCallCta
          heading="Service Backed by The Gardner Promise"
          subheading="Every job carries the 30-day callback guarantee. Call now or request a free estimate online."
        />
      </main>
    </div>
  );
}
