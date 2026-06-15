import { RepairsHub } from "@/components/RepairsHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Repair Murrieta, CA | 24/7 Emergency Electrician",
  description:
    "Electrical repairs, 24/7 emergency electrician, safety inspections & surge protection in Murrieta, Temecula & the Inland Empire. Call (951) 246-4337 now.",
  openGraph: {
    title:
      "Electrical Repair Murrieta, CA | 24/7 Emergency Electrician | Gardner Plumbing Co.",
    description:
      "Electrical repairs and 24/7 emergency electrical service across Murrieta and the Inland Empire. Safety inspections, surge protection. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/repairs",
  },
  alternates: {
    canonical: "/services/electrical/repairs",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What are the most common electrical problems in Inland Empire homes?",
    answer:
      "The five most frequent repair calls we see across Murrieta, Temecula, and Menifee: breakers that trip under normal load (often a sign of a failing breaker or overloaded circuit), outlets that stop working without a visible GFCI trip (loose connection or a tripped GFCI upstream), flickering lights that aren't a bulb issue (loose connection or a failing circuit), arc fault trips in bedroom circuits (AFCI breakers doing their job — but pointing to a wiring issue), and outdoor outlets that go dead after rain (GFCI failure or water intrusion). Most of these are diagnosed and repaired in a single visit.",
  },
  {
    question:
      "When is an electrical problem an emergency vs. a scheduled repair?",
    answer:
      "Treat it as an emergency — call (951) 246-4337 now — if you see or smell any of these: burning smell from an outlet, switch, or panel; sparking at any electrical device or the panel; breakers that trip and immediately trip again when reset; complete power loss to a portion of the home with no clear cause; or a hot outlet cover or switch plate. Schedule a standard repair appointment for: breakers that trip occasionally under heavy load, outlets that stop working, or lights that flicker intermittently. The first list involves active hazard potential. The second list is inconvenient but not immediately dangerous.",
  },
  {
    question:
      "How often should I get an electrical safety inspection in Murrieta?",
    answer:
      "For homes built before 2005 in the Inland Empire, every 5–7 years is a reasonable cadence for a full electrical safety audit. For homes with older wiring (1960s–1980s builds with aluminum wiring or original panels) and homes that haven't had an inspection in over 10 years, every 3–5 years is more appropriate. Pre-purchase inspections are strongly recommended before buying any Murrieta or Temecula home — an electrical inspection goes beyond what a standard home inspector covers. Our safety inspection service includes a written report you can use in negotiations or for insurance purposes.",
  },
  {
    question: "Is whole-home surge protection worth it?",
    answer:
      "For Inland Empire homes, yes. SoCal Edison's grid experiences voltage events during high-demand summer periods and during the shut-off events tied to fire risk weather. A panel-level surge protection device (SPD) costs $300–$600 installed and protects every circuit in the house in a single installation. Point-of-use power strips protect the devices plugged into them — not the appliances, HVAC systems, or smart devices on other circuits. A whole-home SPD does both. Homes with EV chargers, solar inverters, and smart appliances have significantly more at risk from a surge event than a 2005-era home with basic appliances.",
  },
  {
    question:
      "What is the difference between an electrical repair and a rewiring project?",
    answer:
      "A repair addresses a specific failure: a bad outlet, a failing breaker, a loose connection, a tripped GFCI that won't reset. The scope is limited to the problem and its immediate cause. A rewiring project addresses the wiring system itself — replacing wire runs that have degraded, removing aluminum wiring from connection points, or updating the entire home from an older wiring standard to current NEC code. Repairs are typically completed in a single visit. Rewiring is a multi-day project involving permit and inspection. Our electricians will tell you clearly at diagnosis which category your situation falls into.",
  },
  {
    question:
      "What area does your electrical repair and safety service cover?",
    answer:
      "The repair and safety team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Emergency dispatch is based in Murrieta — daytime response is typically under 2 hours for southwest Riverside County. For the outer service area cities, same-day emergency availability depends on current call volume. Call (951) 246-4337 to confirm your location and get a dispatch time estimate.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Repairs & Safety", url: "/services/electrical/repairs" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://gardnerplumbingco.com${item.url}`,
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Repair & Safety Services",
  description:
    "Electrical repairs, 24/7 emergency electrician, safety inspections, and whole-home surge protection for Murrieta, Temecula, and the Inland Empire. Licensed C-10 electrical contractor.",
  provider: {
    "@type": "Electrician",
    name: "Gardner Plumbing Co.",
    telephone: "+1-951-246-4337",
    url: "https://gardnerplumbingco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murrieta",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: [
    "Temecula, CA",
    "Murrieta, CA",
    "Perris, CA",
    "Menifee, CA",
    "Canyon Lake, CA",
    "Lake Elsinore, CA",
    "Corona, CA",
    "Moreno Valley, CA",
    "Riverside, CA",
    "Hemet, CA",
  ],
  serviceType: "Electrical Repair and Safety Inspection",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function RepairsHubPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        <RepairsHub />
      </main>
    </div>
  );
}
