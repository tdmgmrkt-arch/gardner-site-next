import { Emergency } from "@/components/Emergency";
import { StoryTestimonials, STORIES_EMERGENCY } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing Services | Gardner Plumbing Co.",
  description:
    "Gardner Plumbing Co. provides 24/7 emergency plumbing across Riverside County, San Bernardino County, and the Coachella Valley. Live dispatchers, 45-min arrival window, CSLB #1073177.",
  alternates: {
    canonical: "/services/plumbing/emergency-service",
  },
  openGraph: {
    title: "24/7 Emergency Plumbing Services | Gardner Plumbing Co.",
    description:
      "Around-the-clock emergency plumbing in Riverside County, eastern San Bernardino County, and the Coachella Valley. Live dispatchers, 45-minute arrival window in core areas. CSLB #1073177.",
    url: "/services/plumbing/emergency-service",
    images: ["/gardner_logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Emergency Plumbing Services | Gardner Plumbing Co.",
    description:
      "Around-the-clock emergency plumbing in Riverside County, San Bernardino County, and the Coachella Valley. 45-min arrival window. CSLB #1073177.",
    images: ["/gardner_logo.webp"],
  },
};

// ─── JSON-LD ───────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Emergency Plumbing",
  name: "24/7 Emergency Plumbing Services",
  description:
    "Gardner Plumbing Co. provides around-the-clock emergency plumbing services throughout Riverside County, eastern San Bernardino County, and the Coachella Valley. Live dispatchers, 45-minute arrival window in core areas, CSLB #1073177.",
  provider: {
    "@type": "Plumber",
    name: "Gardner Plumbing Co.",
    telephone: "+19512464337",
    url: "https://gardnerplumbingco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murrieta",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: [
      "Murrieta, CA",
      "Temecula, CA",
      "Menifee, CA",
      "Perris, CA",
      "Lake Elsinore, CA",
      "Hemet, CA",
      "San Jacinto, CA",
      "Riverside, CA",
      "Corona, CA",
      "Eastvale, CA",
      "Jurupa Valley, CA",
      "Moreno Valley, CA",
      "Garnet, CA",
      "Pedley, CA",
      "Palm Springs, CA",
      "Palm Desert, CA",
      "Cathedral City, CA",
      "North Palm Springs, CA",
      "Banning, CA",
      "Beaumont, CA",
      "Cherry Valley, CA",
      "Redlands, CA",
      "Yucaipa, CA",
      "Mentone, CA",
      "Calimesa, CA",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+19512464337",
      contactType: "Emergency",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly does Gardner Plumbing respond to emergency calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within Gardner Plumbing's core service area — including Murrieta, Temecula, Menifee, Riverside, Corona, Eastvale, and surrounding cities across Riverside County, eastern San Bernardino County, and the Coachella Valley — technicians typically arrive within a 45-minute window from the time of the call. Response times to outlying communities depend on traffic conditions and technician location at the time of dispatch.",
      },
    },
    {
      "@type": "Question",
      name: "Does someone always answer the phone, even at 3 a.m.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gardner Plumbing's phones are answered 24 hours a day, 7 days a week, including holidays. A live dispatcher is available to take your call and begin the intake process immediately. If you need to speak directly with an on-call technician, that option is available. Calls are never sent to voicemail.",
      },
    },
    {
      "@type": "Question",
      name: "How many technicians are on call at night and on weekends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gardner Plumbing maintains a dedicated rotation of on-call technicians for after-hours, weekend, and holiday coverage. The number of technicians on call at any given time is scaled to meet demand across the 25-city service area. Dispatchers prioritize calls based on severity and location to ensure the fastest possible response.",
      },
    },
    {
      "@type": "Question",
      name: "Is emergency plumbing service more expensive than a regular appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emergency service calls outside of standard business hours typically include an after-hours dispatch fee in addition to the cost of the repair. Gardner Plumbing provides a full, written estimate before any work begins, so customers know the total cost upfront. There are no hidden charges added after the repair is complete.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do before the plumber arrives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If it is safe to do so, shut off the water supply to the affected area. For a localized issue such as a leaking toilet or sink, use the small shut-off valve located behind or beneath the fixture. For a burst pipe or flooding situation, locate the main water shut-off valve for the property and turn it off. Move furniture, electronics, and valuables away from the water. Avoid using electrical outlets or switches near standing water. The dispatcher can walk you through these steps over the phone if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can Gardner Plumbing fix most emergencies in one visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The majority of common plumbing emergencies — including burst pipes, water heater failures, sewer backups, and overflowing toilets — are resolved during the initial service visit. Gardner Plumbing technicians carry an extensive inventory of parts and materials in their service vehicles. In cases where a specialized part is required or a more complex repair is needed, the technician will stabilize the situation to prevent further damage and schedule the follow-up repair promptly.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gardner Plumbing handle gas line emergencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gardner Plumbing's licensed technicians are qualified to locate and repair gas line leaks and damaged gas supply lines. However, if a gas leak is actively occurring, the first step is always to evacuate the building and call the gas utility company (SoCalGas) to shut off the supply at the meter. Once the utility company has made the scene safe, Gardner Plumbing can perform the necessary gas line repairs.",
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
      item: "https://gardnerplumbingco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://gardnerplumbingco.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Emergency Plumbing Services",
      item: "https://gardnerplumbingco.com/services/plumbing/emergency-service",
    },
  ],
};

export default async function EmergencyPage() {
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
      {/* JSON-LD */}
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
        <Emergency reviewCount={reviewCount} ratingLabel={ratingLabel} />
        <StoryTestimonials
          heading="Emergency Calls Customers Remember"
          subheading="What it actually looks like when you call our after-hours line — live dispatcher, real ETA, and a technician who gets there."
          stories={STORIES_EMERGENCY}
        />
        <FinalCallCta
          heading="24/7 Emergency Line — Call Now"
          subheading="A live dispatcher answers any hour. 45-minute arrival window in core service areas across Riverside &amp; San Bernardino County."
          primaryLabel="Call Emergency Line (951) 246-4337"
        />
      </main>
    </div>
  );
}
