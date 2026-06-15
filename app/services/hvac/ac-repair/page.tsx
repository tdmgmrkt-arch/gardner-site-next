import { AcRepair } from "@/components/AcRepair";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Repair Murrieta, CA | 24/7 Cooling Service",
  description:
    "AC repair in Murrieta, Temecula & the Inland Empire. Same-day diagnostics, refrigerant recharge, capacitor & compressor repair. Call (951) 246-4337 now.",
  openGraph: {
    title: "AC Repair Murrieta, CA | 24/7 Cooling Service | Gardner Plumbing Co.",
    description:
      "Same-day AC repair in Murrieta and across the Inland Empire. Licensed HVAC technicians, upfront pricing, 24/7 availability. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac-repair",
  },
  alternates: {
    canonical: "/services/hvac/ac-repair",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know if my AC needs repair or full replacement?",
    answer:
      "If your system is under 10 years old and the repair cost is less than half the cost of a new unit, repair almost always makes financial sense. Systems over 15 years old — especially those showing multiple failures in the same season — are typically better candidates for replacement. Our technicians give you both numbers upfront so you can decide without pressure. For major replacements, see our AC installation page at /services/hvac/ac-installation.",
  },
  {
    question: "What are the most common AC problems in Inland Empire homes?",
    answer:
      "The three most frequent failures we see across Murrieta, Temecula, and Menifee are capacitor failure, low refrigerant from a slow leak, and dirty evaporator or condenser coils. Capacitors wear out faster in extreme heat — triple-digit summers in the IE put unusual stress on electrical components. A unit that runs constantly without cooling the house is often dealing with one of these three issues.",
  },
  {
    question: "What does a refrigerant leak mean for my AC?",
    answer:
      "A refrigerant leak means your system cannot transfer heat out of your home efficiently — the result is weak cooling, longer run times, and higher electric bills. Low refrigerant is not a normal part of system operation. A system that needs refrigerant added has a leak somewhere. We locate and repair the leak first, then recharge to manufacturer spec. Simply topping off refrigerant without fixing the leak is a temporary fix that fails again within a season.",
  },
  {
    question: "My AC is tripping the breaker — is that an emergency?",
    answer:
      "Yes. A breaker trip is the electrical system protecting against a fault — a compressor drawing excessive current, a wiring short, or a failing capacitor. Running the system after it trips the breaker repeatedly can damage the compressor, which is the most expensive component to replace. Call us the same day if your AC is tripping the breaker. Do not reset the breaker more than once while waiting for a technician.",
  },
  {
    question: "How often should I schedule an AC tune-up to prevent repairs?",
    answer:
      "Once per year, ideally in early spring before the first heat wave. An annual tune-up catches small issues — worn capacitors, coil buildup, low refrigerant — before they become full failures in July. Inland Empire homeowners who skip tune-ups for 2–3 years see significantly higher repair frequency. Our AC maintenance service includes a full inspection, coil cleaning, refrigerant check, and electrical component testing.",
  },
  {
    question:
      "How fast can you respond to an emergency AC repair call in Murrieta?",
    answer:
      "For daytime calls, the average dispatch time from our Murrieta base is under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on current call volume. We maintain a dedicated 24/7 emergency line at (951) 246-4337. If your home is occupied by elderly residents or young children, mention that when you call — we prioritize those situations.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "AC Repair", url: "/services/hvac/ac-repair" },
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
  name: "AC Repair",
  description:
    "Professional AC repair services for residential properties across Murrieta, Temecula, and the Inland Empire. Same-day diagnostics, refrigerant recharge, capacitor and compressor repair.",
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
  serviceType: "AC Repair",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function AcRepairPage() {
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
        <AcRepair />
      </main>
    </div>
  );
}
