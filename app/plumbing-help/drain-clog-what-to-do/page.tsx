import { DrainClogScenario } from "@/components/scenarios/DrainClogScenario";
import { GardnerPromise } from "@/components/GardnerPromise";
import { CleanVisitPromise } from "@/components/CleanVisitPromise";
import { StoryTestimonials, STORIES_GENERAL } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import type { Metadata } from "next";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Drain Won't Stop Backing Up? What to Do | Gardner Plumbing",
  description:
    "Drain backing up in Riverside County? Here's exactly what to do right now — what to try yourself, when to call, and why chemical cleaners make it worse.",
  alternates: {
    canonical: "/plumbing-help/drain-clog-what-to-do",
  },
  openGraph: {
    title: "Drain Won't Stop Backing Up? What to Do | Gardner Plumbing",
    description:
      "Drain backing up in Riverside County? Here's exactly what to do right now — what to try yourself, when to call, and why chemical cleaners make it worse.",
    url: "/plumbing-help/drain-clog-what-to-do",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Won't Stop Backing Up? What to Do | Gardner Plumbing",
    description:
      "Drain backing up in Riverside County? Here's exactly what to do right now — what to try yourself, when to call, and why chemical cleaners make it worse.",
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
    { "@type": "ListItem", position: 3, name: "Drain Clog — What to Do", item: `${BASE_URL}/plumbing-help/drain-clog-what-to-do` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Drain Won't Stop Backing Up — What to Do Right Now",
  description:
    "What to do when a drain keeps backing up — how to identify a single clog vs. main line blockage, what to avoid, and when to call a licensed plumber in Riverside County.",
  url: `${BASE_URL}/plumbing-help/drain-clog-what-to-do`,
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to do when a drain won't stop backing up",
  description:
    "Step-by-step guide for Riverside County homeowners dealing with a backed-up drain — how to identify the scope of the problem and when to call a licensed plumber.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Do not pour chemical drain cleaner down the drain",
      text: "Drano, Liquid-Plumr, and similar products are lye-based. They generate heat, accelerate corrosion in older PVC and galvanized pipe, and dissolve organic tissue partially — enough to push a clog deeper without removing it.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Count how many drains are affected",
      text: "Walk through the house. If more than one fixture drains slowly or backs up, you have a main line problem. Skip to Step 5.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "If it is a single drain, try a cup plunger",
      text: "Cover the overflow opening with a wet cloth first. Give it 10 to 15 firm strokes. If the clog does not clear within two plunging attempts, stop.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Stop sending water toward the problem",
      text: "Turn off the dishwasher and washing machine. Do not run baths or flush toilets more than necessary.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Call Gardner Plumbing Co. at (951) 246-4337",
      text: "A professional will arrive with a motorized drain auger (snake) for straightforward clogs and a hydro-jet for stubborn or recurring blockages.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does drain cleaning cost in Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard drain snaking by a licensed plumber in Riverside County typically runs $150 – $300 for a single fixture. Hydro-jetting ranges from $350 – $600 depending on line length and access. Gardner Plumbing Co. provides a written estimate before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Drano or chemical drain cleaners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Chemical drain cleaners are corrosive lye compounds. They partially dissolve organic clogs but rarely eliminate them. Repeated use accelerates corrosion in PVC fittings and older galvanized pipe and creates a hazardous environment for the plumber who opens the line afterward.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if it's a main line clog and not just one drain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If two or more fixtures are slow or backed up at the same time — for example, flushing the toilet causes the shower drain to gurgle — the blockage is in the main sewer lateral, not a branch line. Main line clogs require professional equipment and cannot be resolved with a plunger.",
      },
    },
    {
      "@type": "Question",
      name: "How long does drain cleaning take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard drain snake on a single fixture takes 30 to 60 minutes from arrival to completion. Hydro-jetting a main sewer line runs 60 to 90 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What is hydro-jetting and when is it necessary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hydro-jetting uses highly pressurized water — typically 3,000 to 4,000 PSI — to scour pipe interiors. It is the appropriate method when clogs recur within weeks of snaking, when a camera shows heavy grease coating, or when root intrusion is present.",
      },
    },
    {
      "@type": "Question",
      name: "Will one drain cleaning fix it permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the cause. A hair clog cleared with an auger often stays clear for months or years with a hair catcher in place. Root intrusion will return within 12 to 18 months after hydro-jetting. Gardner Plumbing Co. explains the options after the camera inspection.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prevent drain clogs going forward?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four steps: (1) Put a fine-mesh hair catcher over every tub and shower drain. (2) Never pour cooking grease or oil down the kitchen sink. (3) Run hot water for 30 seconds after washing dishes. (4) Schedule professional drain cleaning every 12 to 24 months. Gardner Plumbing Co. offers the Gardner Shield maintenance plan with annual drain inspection included.",
      },
    },
  ],
};

// ─── Route ────────────────────────────────────────────────────────────────────

export default async function DrainClogPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <DrainClogScenario />
        <GardnerPromise reviewCount={reviewCount} />
        <CleanVisitPromise reviewCount={reviewCount} />
        <StoryTestimonials
          heading="Real Stories From Real Customers"
          subheading="What Riverside County homeowners wrote after Gardner Plumbing fixed their drain and sewer problems."
          stories={STORIES_GENERAL}
        />
        <FinalCallCta
          heading="Ready to Fix It Today?"
          subheading="Gardner Plumbing Co. serves 25 cities across Riverside County, eastern San Bernardino County, and the Coachella Valley. No trip fee. No service-call fee. Written price before any work begins. CSLB #1073177."
        />
      </main>
    </div>
  );
}
