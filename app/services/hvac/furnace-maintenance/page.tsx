import { FurnaceMaintenance } from "@/components/FurnaceMaintenance";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Tune-Up Murrieta, CA | Annual Furnace Maintenance",
  description:
    "Furnace tune-up in Murrieta, Temecula & the Inland Empire. Annual safety inspection, burner cleaning, combustion analysis. Schedule before first cold snap. Call (951) 246-4337.",
  openGraph: {
    title:
      "Furnace Tune-Up Murrieta, CA | Annual Furnace Maintenance | Gardner Plumbing Co.",
    description:
      "Annual furnace tune-up in Murrieta and across the Inland Empire. Licensed HVAC technicians, safety inspection, burner cleaning. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/furnace-maintenance",
  },
  alternates: {
    canonical: "/services/hvac/furnace-maintenance",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What is the difference between a furnace tune-up and an HVAC maintenance plan?",
    answer:
      "A furnace tune-up is a single annual visit focused on your furnace — one service call, one invoice. An HVAC maintenance plan is a subscription agreement that covers both your heating and cooling systems under one recurring contract, typically with two visits per year (one for cooling, one for heating), priority scheduling, and plan-member discounts on repairs. A tune-up is the right choice if you want your furnace serviced this year. An HVAC maintenance plan is the right choice if you want both systems covered year-round without scheduling separately. See our HVAC maintenance plan at /services/hvac/hvac-maintenance-plans for full details.",
  },
  {
    question: "How often should I get a furnace tune-up in Murrieta?",
    answer:
      "Once per year, in the fall. The Inland Empire heating season runs November through March — a tune-up in September or October catches issues before the first cold stretch. Furnaces that sit idle all summer accumulate dust on burner ports and sensors. Skipping tune-ups for two or more consecutive seasons significantly increases the likelihood of a mid-season no-heat call.",
  },
  {
    question: "What does a furnace tune-up cost in Murrieta?",
    answer:
      "A standard furnace tune-up in Murrieta ranges from $89 to $149 depending on system age and access conditions. That price includes the safety inspection, combustion analysis, burner cleaning, igniter test, and flame sensor cleaning. If a repair is needed — igniter replacement, gas valve adjustment — we quote that separately before proceeding. Annual maintenance is significantly cheaper than an emergency repair call in December.",
  },
  {
    question: "Will a furnace tune-up catch a cracked heat exchanger?",
    answer:
      "Yes. A combustion analysis and visual heat exchanger inspection are included in every tune-up. A cracked exchanger allows combustion gases — including carbon monoxide — to mix with heated air. A CO leak is odorless and colorless; a combustion analyzer detects it when visual inspection alone might miss a small crack. If we find a crack, we advise you of the safety risk and your options before leaving.",
  },
  {
    question:
      "My furnace ran fine last winter — do I still need a tune-up?",
    answer:
      "A furnace that ran well last season can still have a degraded igniter, growing scale on the burner ports, or a developing crack in the heat exchanger. These don't announce themselves — they accumulate quietly over summer and then fail in November. A tune-up is preventive maintenance, not a repair visit. If the inspection finds nothing wrong, you pay the flat tune-up fee and have confidence going into winter. If it finds something, you caught it before it became a no-heat emergency.",
  },
  {
    question: "What should I do if my furnace breaks down after a tune-up?",
    answer:
      "Call us. If a part that was inspected during the tune-up fails within 30 days, our technicians return at no additional diagnostic fee. Furnace repairs found on inspection are quoted and approved before work begins. For a mid-season breakdown that requires repair beyond normal wear, see our furnace repair service at /services/hvac/furnace-repair. Homeowners who find they need multiple repairs in a season are often good candidates for a furnace replacement evaluation at /services/hvac/furnace-installation.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Furnace Maintenance", url: "/services/hvac/furnace-maintenance" },
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
  name: "Furnace Tune-Up",
  description:
    "Annual furnace tune-up and safety inspection for residential properties across Murrieta, Temecula, and the Inland Empire. Combustion analysis, burner cleaning, igniter test, flame sensor cleaning.",
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
  serviceType: "Furnace Maintenance",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$",
  },
};

export default function FurnaceMaintenancePage() {
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
        <FurnaceMaintenance />
      </main>
    </div>
  );
}
