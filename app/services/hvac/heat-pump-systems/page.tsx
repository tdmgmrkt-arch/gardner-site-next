import { HeatPumpSystems } from "@/components/HeatPumpSystems";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Pump Installation Murrieta, CA | Heating & Cooling",
  description:
    "Heat pump installation in Murrieta, Temecula & the Inland Empire. All-electric heating and cooling, SCE rebate-eligible, replaces furnace and AC. Call (951) 246-4337.",
  openGraph: {
    title:
      "Heat Pump Installation Murrieta, CA | Heating & Cooling | Gardner Plumbing Co.",
    description:
      "Heat pump installation in Murrieta and across the Inland Empire. All-electric, SCE rebate-eligible, one system for heating and cooling. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/heat-pump-systems",
  },
  alternates: {
    canonical: "/services/hvac/heat-pump-systems",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Do heat pumps work well in the Inland Empire climate?",
    answer:
      "The Inland Empire is an ideal climate for heat pumps. Heat pumps extract heat from outdoor air — a process that becomes less efficient as temperatures drop below 25–30°F. Murrieta and Temecula rarely see temperatures below freezing, and even Hemet — the coldest IE city most nights — averages winter lows in the mid-30s. In this climate, a heat pump operates near peak efficiency all winter without backup electric strips engaging frequently. Heat pumps also handle the 100°F+ summers that central AC would otherwise cover.",
  },
  {
    question: "Will a heat pump replace my furnace and my air conditioner?",
    answer:
      "Yes. A standard split heat pump replaces both. The outdoor unit handles the heat transfer for both heating and cooling. In cooling mode it operates exactly like an air conditioner — moving heat out of your home. In heating mode it reverses — extracting heat from outdoor air and moving it inside. One system, one thermostat, one annual service call. Many Inland Empire homeowners facing the replacement of an aging furnace or AC choose a heat pump to consolidate both. See our AC installation page at /services/hvac/ac-installation if you're comparing central AC as an alternative.",
  },
  {
    question: "What does heat pump installation cost in Murrieta?",
    answer:
      "A standard ducted heat pump installation in Murrieta typically ranges from $4,500 to $9,000 depending on system size, efficiency rating (SEER2), and any electrical panel or wiring upgrades required. Ductless mini-split heat pumps for a single zone typically run $2,500 to $5,000 installed. Available SCE rebates can reduce the net cost by $200 to $1,000 depending on the equipment's efficiency rating. Financing is available for qualified homeowners. We provide a written itemized quote before any work begins.",
  },
  {
    question: "How efficient is a heat pump compared to a gas furnace?",
    answer:
      "A high-efficiency gas furnace converts roughly 96% of fuel to heat (96% AFUE). A modern heat pump delivers 2 to 4 units of heat energy for every unit of electrical energy consumed — an effective efficiency of 200%–400%. In mild-climate conditions like the IE, a heat pump is typically less expensive to operate than a gas furnace when electricity and gas prices are at their recent Murrieta averages. Efficiency advantage diminishes on the coldest nights, but those nights are rare here.",
  },
  {
    question:
      "Are there rebates available for heat pump installation in Murrieta?",
    answer:
      "Yes. Southern California Edison (SCE) offers rebates on qualifying heat pump systems — currently $200 to $1,000 depending on unit efficiency and capacity under active SCE programs. The California Energy Commission also administers rebate programs that can overlap. Rebate availability and amounts change — we confirm current SCE eligibility during your estimate and provide the documentation needed for submission. Rebates are credited after installation and inspection, not at the point of purchase.",
  },
  {
    question:
      "How do I know if my home needs electrical panel upgrades for a heat pump?",
    answer:
      "Most IE homes built in the 1990s and later have 200-amp panels that support a heat pump without modification. Older homes — particularly those in Hemet, Perris, or Riverside with original 100-amp service — may need a panel upgrade before installation. Ductless mini-split heat pumps have lower electrical demand and often fit within existing panel capacity. We check panel capacity during the in-home estimate and include any required electrical work in the upfront quote. See our furnace installation page at /services/hvac/furnace-installation if you're also considering a gas furnace comparison.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Heat Pump Systems", url: "/services/hvac/heat-pump-systems" },
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
  name: "Heat Pump Installation",
  description:
    "Professional heat pump installation for residential properties across Murrieta, Temecula, and the Inland Empire. All-electric heating and cooling, SCE rebate-eligible, replaces furnace and AC with one system.",
  provider: {
    "@type": "HVACBusiness",
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
  serviceType: "Heat Pump Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function HeatPumpSystemsPage() {
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
        <HeatPumpSystems />
      </main>
    </div>
  );
}
