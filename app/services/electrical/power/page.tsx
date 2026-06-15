import { PowerHub } from "@/components/PowerHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Panel Upgrade Murrieta, CA | Power & EV Chargers",
  description:
    "Electrical panel upgrades, home rewiring, EV charger installation & generators in Murrieta, Temecula & the Inland Empire. Licensed contractor. Call (951) 246-4337.",
  openGraph: {
    title:
      "Electrical Panel Upgrade Murrieta, CA | Power & EV Chargers | Gardner Plumbing Co.",
    description:
      "Panel upgrades, rewiring, EV chargers, and generator installation across Murrieta and the Inland Empire. Licensed, permitted, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/power",
  },
  alternates: {
    canonical: "/services/electrical/power",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "When should I upgrade my electrical panel in an Inland Empire home?",
    answer:
      "The four most common triggers for a panel upgrade in Murrieta and Temecula: you're installing an EV charger and the panel has no room for a 50-amp circuit; you're adding a new HVAC system that requires more amperage than the panel can support; breakers trip regularly under normal household load; or you're buying or selling a home and the inspector flags the panel. Most 1990s–2000s Inland Empire homes have 100–150 amp panels — adequate for 1995 loads, undersized for 2026 households. Our panel upgrade service covers the full assessment and upgrade.",
  },
  {
    question: "What are the signs my home needs rewiring?",
    answer:
      "The clearest indicators: outlets that stop working without tripping a GFCI; lights that dim when a major appliance runs; breakers that trip repeatedly on normal loads; an aluminum wiring home (common in 1960s–1970s IE builds) that hasn't been updated; and any home where the wiring hasn't been touched since the original construction 30+ years ago. Aluminum wiring requires attention — it expands and contracts differently than copper and poses a fire risk at connection points. Our home rewiring service can address partial rewires targeting problem areas or full replacements.",
  },
  {
    question:
      "What's the difference between Level 1 and Level 2 EV charging at home?",
    answer:
      "Level 1 charging uses a standard 120-volt outlet — the cord that comes with your EV. It adds roughly 3–5 miles of range per hour of charging. For most daily drivers in Murrieta, overnight Level 1 charging is adequate if you drive under 40 miles per day. Level 2 charging uses a 240-volt dedicated circuit and a wall-mounted charger. It adds 20–30 miles of range per hour. If you drive more than 50 miles daily or have a longer-range EV, Level 2 is worth the installation cost. Our EV charger installation service covers both options and the panel assessment required for Level 2.",
  },
  {
    question:
      "Do I need a permit to upgrade my panel or install an EV charger in Murrieta?",
    answer:
      "Yes to both. A panel upgrade (200-amp service upgrade) requires a permit through the City of Murrieta Building & Safety or Riverside County Building Department, plus inspection by the local electrical inspector. Level 2 EV charger installation on a new circuit also requires a permit. Our electricians handle the permit filing and schedule the inspection — it's part of the job, not an add-on. Unpermitted panel work creates open permit issues that surface during home sales and can void homeowner's insurance coverage.",
  },
  {
    question: "Does my home need a generator, and what type makes sense?",
    answer:
      "Whether you need a generator depends on your power-outage frequency and what you can't afford to lose. Murrieta and the broader Inland Empire experience SCE outages during high-fire-risk weather events and summer demand peaks. If you have medical equipment, a sump pump, a chest freezer worth of food, or a family with young children, a whole-home standby generator makes sense. Portable generators handle select loads; whole-home standby units (Generac, Kohler) start automatically and power your full home. Our generator installation service covers the electrical hookup, transfer switch, and load management — not the generator purchase itself.",
  },
  {
    question: "What area does your electrical upgrade service cover?",
    answer:
      "Our power system and upgrade team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Panel upgrades and EV charger installations are our most common jobs across the southwest Riverside County corridor. For the outer edges of the service area, scheduling timelines may extend by a day. Call (951) 246-4337 to confirm availability for your location and get a same-day quote.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Power & Upgrades", url: "/services/electrical/power" },
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
  name: "Power Systems & Electrical Upgrades",
  description:
    "Power system upgrades for residential properties in Murrieta, Temecula, and the Inland Empire. Electrical panel upgrades, home rewiring, EV charger installation, generator hookups, and remodeling electrical.",
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
  serviceType: "Electrical Panel Upgrade and Power Systems",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function PowerHubPage() {
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
        <PowerHub />
      </main>
    </div>
  );
}
