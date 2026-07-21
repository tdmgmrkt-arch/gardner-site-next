import { EvChargerInstallation } from "@/components/EvChargerInstallation";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charger Installation Murrieta, CA | Level 2 Home Charging",
  description:
    "EV charger installation in Murrieta, Temecula & the Inland Empire. Level 2 (240V) home charging, dedicated circuits, NEC 625 compliant. Call (951) 246-4337.",
  openGraph: {
    title:
      "EV Charger Installation Murrieta, CA | Level 2 Home Charging | Gardner Plumbing Co.",
    description:
      "Licensed electricians install Level 2 EV chargers across Murrieta and the Inland Empire. Dedicated circuits, panel assessment, NEC 625 compliant. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/ev-charger-installation",
  },
  alternates: {
    canonical: "/services/electrical/ev-charger-installation",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "Do I need a permit to install a Level 2 EV charger in Murrieta?",
    answer:
      "Yes. The City of Murrieta requires a permit for Level 2 (240V) EV charger installation. The permit triggers an electrical inspection to confirm the circuit meets NEC Article 625 — the code section governing EV charging equipment. This applies whether you're installing a hardwired unit or a NEMA 14-50 outlet. Unpermitted 240V circuits void homeowner's insurance for any fire or electrical damage claim originating from that circuit, and must be disclosed as unpermitted work during a home sale. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote.",
  },
  {
    question: "Does my current electrical panel support a Level 2 EV charger?",
    answer:
      "Most Inland Empire homes built before 2015 run on 100-amp service. A Level 2 charger at 40 amps draws 40% of a 100-amp panel's total capacity — continuously, while the car is charging. That leaves limited headroom for the rest of the house during a charging session. Whether your panel can support a charger depends on your actual load calculation, not just the panel size. Our electricians run the calculation on-site. If your panel has the capacity, we install the dedicated circuit. If it doesn't, we quote the charger circuit and the panel upgrade together at /services/electrical/electrical-panel-upgrade so you see the full cost in one number.",
  },
  {
    question: "What is the difference between Level 1 and Level 2 EV charging?",
    answer:
      "Level 1 charging uses a standard 120V household outlet and adds approximately 3 to 5 miles of range per hour. For a 300-mile-range EV, a full charge from empty takes 60 to 80 hours on Level 1. That works as an emergency backup but not as a daily driver solution. Level 2 charging uses a 240V dedicated circuit — the same voltage as a clothes dryer or oven — and adds 20 to 30 miles of range per hour. Most Inland Empire commuters who drive 30 to 60 miles per day are fully recharged each morning with a Level 2 charger running overnight. Level 3 (DC fast charging) requires commercial-grade infrastructure not practical for residential installation.",
  },
  {
    question: "What EV charger brands do you install?",
    answer:
      "Our electricians install the electrical circuit and mounting — the charger itself can be any UL-listed Level 2 unit the homeowner selects. Popular options in the Murrieta market include ChargePoint Home Flex, Emporia Energy, Grizzl-E, and JuiceBox, as well as the Tesla Wall Connector (for Tesla vehicles). We also wire for NEMA 14-50 outlets, which are charger-agnostic and allow the homeowner to plug in any Level 2 EVSE now or in the future. Smart charger installations — those with app control and off-peak scheduling — pair well with our smart home electrical services at /services/electrical/smart-home-electrical if you're also planning automated load management for your home's energy use.",
  },
  {
    question: "How long does EV charger installation take?",
    answer:
      "Most straightforward installations — panel has available capacity, garage has accessible wire runs to the panel — take 3 to 5 hours on-site. Permit processing typically takes 3 to 7 business days depending on city workload, so the total timeline from quote to energized charger is usually 1 to 2 weeks. If a panel upgrade is also required, the panel work adds a day and the permit timelines can be coordinated together. For homes where the garage is detached from the main panel by a long run, we assess wire routing options during the quote visit.",
  },
  {
    question: "How much does EV charger installation cost in Murrieta?",
    answer:
      "A standard Level 2 EV charger installation — dedicated 240V circuit, 40-amp breaker, NEMA 14-50 outlet or hardwire connection — typically runs $700 to $1,500 in Murrieta, depending on the distance from the panel to the garage and the complexity of the wire run. Permit fees are listed as a pass-through line on your quote where required. If a panel upgrade is also needed, that adds $2,500 to $4,500 to the project (see our panel upgrade page at /services/electrical/electrical-panel-upgrade for panel-specific cost context). Financing is available for combined installations; see our financing page at /financing. Some utility and state incentive programs may reduce the net cost — we note applicable programs in the quote visit.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "EV Charger Installation",
    url: "/services/electrical/ev-charger-installation",
  },
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
  name: "EV Charger Installation",
  description:
    "Professional Level 2 EV charger installation services for residential properties across Murrieta, Temecula, and the Inland Empire. Dedicated 240V circuits, panel assessment, NEC 625 compliant.",
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
  serviceType: "EV Charger Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function EvChargerInstallationPage() {
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
        <EvChargerInstallation />
      </main>
    </div>
  );
}
