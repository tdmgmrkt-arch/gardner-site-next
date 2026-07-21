import { SlabLeakScenario } from "@/components/scenarios/SlabLeakScenario";
import { GardnerPromise } from "@/components/GardnerPromise";
import { StoryTestimonials, STORIES_GUARANTEE } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import type { Metadata } from "next";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "I Think I Have a Slab Leak — What Do I Do?",
  description:
    "Warm spot on the floor? Water bill doubled? Learn the 7 signs of a slab leak, what to do in the next hour, and what detection costs in Riverside County.",
  alternates: {
    canonical: "/plumbing-help/slab-leak-what-to-do",
  },
  openGraph: {
    title: "I Think I Have a Slab Leak — What Do I Do? | Gardner Plumbing",
    description:
      "Warm spot on the floor? Water bill doubled? Learn the 7 signs of a slab leak, what to do in the next hour, and what detection costs in Riverside County.",
    url: "/plumbing-help/slab-leak-what-to-do",
    images: ["/gardner_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Think I Have a Slab Leak — What Do I Do? | Gardner Plumbing",
    description:
      "Warm spot on the floor? Water bill doubled? Learn the 7 signs of a slab leak, what to do in the next hour, and what detection costs in Riverside County.",
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
    { "@type": "ListItem", position: 3, name: "Slab Leak — What to Do", item: `${BASE_URL}/plumbing-help/slab-leak-what-to-do` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Know If You Have a Slab Leak — and What to Do Next",
  description:
    "7 signs of a slab leak, what to do in the next hour, how professional detection works, and repair costs in Riverside County, Southern California.",
  url: `${BASE_URL}/plumbing-help/slab-leak-what-to-do`,
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

const signsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "7 Signs You Have a Slab Leak",
  description: "The most common and most diagnostic symptoms of a slab leak in Riverside County homes.",
  numberOfItems: 7,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Water bill spiked with no obvious cause", description: "A water bill that jumps $50 – $200 in a single billing cycle, with no change in household usage, points strongly to a pressurized leak under the slab." },
    { "@type": "ListItem", position: 2, name: "Warm or hot spot on your floor", description: "Slab leaks on hot-water lines raise the temperature of the concrete directly above the break. Walk barefoot and note any section that feels noticeably warmer than the rest of the floor." },
    { "@type": "ListItem", position: 3, name: "Water running sound when everything is off", description: "Turn off every faucet, appliance, and irrigation zone. A faint hissing or rushing sound suggests water is moving through a pipe it shouldn't be." },
    { "@type": "ListItem", position: 4, name: "Sudden drop in water pressure", description: "A pressurized line that's breached bleeds pressure before water reaches your fixtures." },
    { "@type": "ListItem", position: 5, name: "Mildew smell in one specific area", description: "Water escaping a slab pipe wicks upward through concrete and subfloor, creating conditions for mold within 24 – 48 hours." },
    { "@type": "ListItem", position: 6, name: "Flooring buckling, cracking, or separating", description: "Prolonged moisture from a slab leak softens the subfloor and causes tile grout to crack, hardwood planks to buckle, or carpet to develop damp patches." },
    { "@type": "ListItem", position: 7, name: "Cracks in walls or door frames that no longer close squarely", description: "Water under a slab changes the soil's load-bearing capacity, which in Riverside County's expansive-clay areas can shift a slab enough to crack drywall or rack a door frame." },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to do in the next hour when you suspect a slab leak",
  description: "Four immediate steps Riverside County homeowners should take when they suspect a slab leak.",
  totalTime: "PT60M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check your water meter with everything off",
      text: "Turn off every faucet, toilet, appliance, and irrigation zone. Watch the meter's low-flow indicator for 60 seconds. If it moves, water is flowing somewhere — likely a leak.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Note exactly where the warm spot or damp area is",
      text: "Walk the perimeter and interior of the house. Mark the spot with a piece of tape. When a technician arrives with acoustic detection equipment, your observation cuts diagnostic time significantly.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Shut off the water to that zone if you know how",
      text: "If you're not certain which valve controls which line, shut off the main supply at the street. A few hours without water is far less expensive than a flooded subfloor.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Call for professional leak detection — don't dig, don't drill",
      text: "Slab leaks require acoustic listening equipment, electronic amplification, and sometimes thermal imaging. Call Gardner Plumbing Co. at (951) 246-4337 — 24/7 emergency dispatch is available.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does slab leak detection cost in Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slab leak detection in Riverside County typically costs $250 – $450 for a residential property. That covers acoustic listening, electronic amplification, pressure testing, and a pinpointed leak location.",
      },
    },
    {
      "@type": "Question",
      name: "Will my homeowner's insurance cover a slab leak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most California homeowner's insurance policies (HO-3) cover the water damage from a slab leak — damaged flooring, wet drywall, mold remediation — but do not cover the cost of repairing the broken pipe itself or the concrete access.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have to break the concrete to fix a slab leak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always, and never the whole floor. Gardner Plumbing Co. uses acoustic equipment and electronic correlators to locate the break to within 12 – 18 inches before any concrete is opened. A reroute option avoids concrete work entirely.",
      },
    },
    {
      "@type": "Question",
      name: "How long does slab leak repair take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Detection typically takes 1 – 3 hours. A spot repair can usually be completed the same day in 4 – 6 hours. A full pipe reroute typically takes 1 – 2 days depending on the pipe routing through the home.",
      },
    },
    {
      "@type": "Question",
      name: "Can a slab leak fix itself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A breach in a pressurized pipe does not seal on its own. The leak continues 24 hours a day, every day, until the pipe is repaired.",
      },
    },
    {
      "@type": "Question",
      name: "How dangerous is an unrepaired slab leak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An unrepaired slab leak creates three compounding risks: water cost (20 – 50 gallons wasted per day), structural damage from foundation moisture in expansive-clay soil, and mold growth within 24 – 48 hours of saturation. Mold remediation in a single room costs $1,500 – $5,000.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prevent slab leaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four measures: (1) Install a whole-home water softener. (2) Maintain water pressure below 80 psi using a pressure-reducing valve. (3) Consider a smart water monitor like Moen Flo. (4) Schedule a plumbing inspection on any home over 20 years old with original copper supply lines.",
      },
    },
  ],
};

// ─── Route ────────────────────────────────────────────────────────────────────

export default async function SlabLeakPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(signsItemListSchema) }}
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
        <SlabLeakScenario />
        <StoryTestimonials
          heading="Standing Behind Every Slab Leak Job"
          subheading="What customers wrote about Gardner Plumbing's transparency, follow-through, and quality on complex jobs."
          stories={STORIES_GUARANTEE}
        />
        <GardnerPromise reviewCount={reviewCount} />
        <FinalCallCta
          heading="Call Gardner Plumbing Co. Now"
          subheading="Slab leak detection and repair throughout Riverside County and neighboring communities. CSLB #1073177. 900+ five-star Google reviews. No trip fees. Written estimate before work begins."
        />
      </main>
    </div>
  );
}
