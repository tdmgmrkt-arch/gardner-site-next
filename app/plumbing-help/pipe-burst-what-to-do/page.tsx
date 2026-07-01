import { PipeBurstScenario } from "@/components/scenarios/PipeBurstScenario";
import { GardnerPromise } from "@/components/GardnerPromise";
import { StoryTestimonials, STORIES_EMERGENCY } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import type { Metadata } from "next";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Pipe Burst? What to Do Right Now | Gardner Plumbing",
  description:
    "Pipe burst in your Riverside County home? Shut the main valve, cut power near the leak, call (951) 246-4337. Live dispatch 24/7. Step-by-step guide inside.",
  alternates: {
    canonical: "/plumbing-help/pipe-burst-what-to-do",
  },
  openGraph: {
    title: "Pipe Burst? What to Do Right Now | Gardner Plumbing",
    description:
      "Pipe burst in your Riverside County home? Shut the main valve, cut power near the leak, call (951) 246-4337. Live dispatch 24/7. Step-by-step guide inside.",
    url: "/plumbing-help/pipe-burst-what-to-do",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipe Burst? What to Do Right Now | Gardner Plumbing",
    description:
      "Pipe burst in your Riverside County home? Shut the main valve, cut power near the leak, call (951) 246-4337. Live dispatch 24/7. Step-by-step guide inside.",
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
    { "@type": "ListItem", position: 3, name: "Pipe Burst — What to Do", item: `${BASE_URL}/plumbing-help/pipe-burst-what-to-do` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pipe Burst in Your Riverside County Home — What to Do Right Now",
  description:
    "Step-by-step guide for Riverside County homeowners to limit damage from a burst pipe before the plumber arrives. Includes shut-off steps, what to document, and when to call.",
  url: `${BASE_URL}/plumbing-help/pipe-burst-what-to-do`,
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
  name: "What to do when a pipe bursts",
  description:
    "Step-by-step guide for Riverside County homeowners to limit damage from a burst pipe before the plumber arrives.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Shut off the main water valve",
      text: "The main shutoff is usually a gate valve or ball valve near your water meter — in Riverside County neighborhoods, that meter box is typically in the front yard near the sidewalk or curb. Turn it clockwise (gate valve) or 90 degrees until the handle is perpendicular to the pipe (ball valve).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Turn off the water heater",
      text: "Water heaters connected to a line that just burst can overheat or crack the tank once the cold-water supply is cut. Switch a gas heater to 'Pilot' mode; flip the breaker for an electric heater.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Cut power to any room with standing water",
      text: "Go to your main breaker panel and switch off the breaker for any room where water is collecting. If the panel itself is wet or you cannot reach it safely, call 911 before touching anything.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Open outdoor spigots to drain remaining pressure",
      text: "Open one or two outdoor hose bibs to let residual water drain away from the house instead of through the burst section.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Move valuables off wet floors",
      text: "Move electronics, rugs, documents, and furniture off the floor in affected rooms while you can still do it safely.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Document everything before cleanup starts",
      text: "Take photos and a short video of standing water, the visible break, and any damaged belongings. Do not mop up or remove debris until you have documentation.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Call Gardner Plumbing Co. at (951) 246-4337",
      text: "Gardner Plumbing Co. dispatches licensed technicians across Riverside County, eastern San Bernardino County, and the Coachella Valley around the clock.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to fix a burst pipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most burst pipe repairs take 1 – 3 hours once the technician is on site. A straightforward section replacement on an accessible supply line is typically on the shorter end. A slab leak or a failure inside a finished wall takes longer because access work is required before the repair can begin.",
      },
    },
    {
      "@type": "Question",
      name: "How much does burst pipe repair cost in Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burst pipe repair in Riverside County typically ranges from $350 – $1,400 for a single accessible section, and $1,400 – $3,500 or more when the failure is under a concrete slab or inside a finished wall. Gardner Plumbing Co. provides a written estimate before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Will homeowner's insurance cover a burst pipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most standard homeowner's insurance policies cover sudden and accidental water damage from a burst pipe — including structural repairs to floors, walls, and ceilings. They generally do not cover the pipe repair itself or damage caused by long-term leaks. Document the damage with photos before cleanup begins.",
      },
    },
    {
      "@type": "Question",
      name: "Can I shut off the main water valve myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The main shutoff valve is designed to be operated by the homeowner. In most Riverside County homes, the meter box is in the front yard near the curb. A gate valve requires multiple clockwise turns to fully close; a ball valve closes with a single 90-degree turn.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can Gardner Plumbing get to my house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most service-area addresses — including Murrieta, Temecula, Menifee, Riverside, Corona, Hemet, Moreno Valley, Palm Springs, and Palm Desert — the average on-site arrival is 60 – 90 minutes after the call is placed.",
      },
    },
    {
      "@type": "Question",
      name: "What if it's after hours or a weekend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gardner Plumbing Co. runs 24/7 emergency dispatch every day of the year — evenings, weekends, and holidays included. Call (951) 246-4337 at any hour. A live person answers, not a voicemail or after-hours service.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prevent this from happening again?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective step is a whole-home plumbing inspection, especially for homes built before 1995. Gardner Plumbing Co. offers the Gardner Shield — an annual maintenance plan that includes a full inspection and priority dispatch.",
      },
    },
  ],
};

// ─── Route ────────────────────────────────────────────────────────────────────

export default async function PipeBurstPage() {
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
        <PipeBurstScenario />
        <StoryTestimonials
          heading="When Every Minute Counted"
          subheading="What Gardner Plumbing customers wrote about emergency calls — response time, professionalism, and getting the water stopped fast."
          stories={STORIES_EMERGENCY}
        />
        <GardnerPromise reviewCount={reviewCount} />
        <FinalCallCta
          heading="Stop the Water. Call Now."
          subheading="Gardner Plumbing Co. dispatches licensed plumbers to homes across Riverside County, eastern San Bernardino County, and the Coachella Valley — 24 hours a day, 7 days a week. No trip fees. Written estimate before work begins. CSLB #1073177."
        />
      </main>
    </div>
  );
}
