import { WholeHomeDehumidifiers } from "@/components/WholeHomeDehumidifiers";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Home Dehumidifier Murrieta, CA | HVAC Install",
  description:
    "Whole home dehumidifier installation in Murrieta, Temecula & the Inland Empire. Mold prevention, post-flood moisture control, poolside homes. Licensed HVAC install. Call (951) 246-4337.",
  openGraph: {
    title:
      "Whole Home Dehumidifier Murrieta, CA | HVAC Install | Gardner Plumbing Co.",
    description:
      "Whole-home dehumidifier installation in Murrieta and across the Inland Empire. Integrated moisture control for high-humidity spaces, post-flood remediation, mold prevention. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/whole-home-dehumidifiers",
  },
  alternates: {
    canonical: "/services/hvac/whole-home-dehumidifiers",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Does my Inland Empire home actually need a dehumidifier?",
    answer:
      "Probably not — and we'll tell you that honestly. The Inland Empire is a dry climate. Most IE homes benefit from a humidifier (adding moisture) rather than a dehumidifier (removing it). But specific situations do create genuine excess-moisture problems: homes with indoor or attached pools, properties in lower-elevation microclimates near the Santa Ana River corridor, homes that experienced flooding or water damage, and spaces like enclosed garages or indoor growing environments that generate significant moisture. If you're seeing condensation, musty smells, or mold in a specific space, it's worth a call. See our whole-home humidifiers page at /services/hvac/whole-home-humidifiers if you're dealing with dryness instead. See all indoor air quality services at /services/hvac/indoor-air-quality for the full picture.",
  },
  {
    question:
      "What causes high indoor humidity in a dry-climate home like those in Murrieta?",
    answer:
      "The most common causes in the Inland Empire are indoor moisture sources rather than outdoor climate. Indoor pools and spas generate substantial evaporative load. Below-grade spaces (basements, sunken garages) can trap moisture from ground vapor transmission, especially after heavy El Nino rain years. Post-flood drying leaves residual moisture in wall cavities for weeks. Certain household activities — large occupancy, significant cooking, or indoor plant collections — can push humidity above 55% in rooms without adequate ventilation. If the moisture source is a plumbing leak, dehumidification alone is a bandage. Our team checks the source first.",
  },
  {
    question:
      "How is a whole-home dehumidifier different from a portable unit?",
    answer:
      "A portable dehumidifier covers a single room and requires the drain bucket to be emptied regularly — in high-humidity situations, that can mean once or twice per day. A whole-home unit connects to a continuous drain line (routed to a floor drain or plumbing stack), runs automatically based on the humidistat setpoint, and covers the full HVAC-served area. For a poolside room or post-flood situation where moisture output is high and continuous management is needed, portable units are inadequate. Whole-home systems handle the volume and remove the daily maintenance burden.",
  },
  {
    question: "At what humidity level does mold start growing?",
    answer:
      "Mold colonization becomes active above approximately 60% relative humidity when combined with organic material (wood, drywall paper, carpet padding). Sustained conditions above 60% — common in enclosed pool rooms, water-damaged spaces, and below-grade areas without vapor control — are the standard threshold where remediation specialists and HVAC contractors both recommend dehumidification. Maintaining indoor humidity below 55% eliminates the conditions that support mold growth. A calibrated humidistat set to 45–50% provides an adequate buffer. If mold is already visible, call our water damage services team at /services/plumbing/water-damage before installing dehumidification — active mold requires remediation before you close the space back up.",
  },
  {
    question: "Can my AC system handle dehumidification on its own?",
    answer:
      "Your AC system does remove some humidity as a byproduct of cooling — moisture condenses on the evaporator coil and drains out through the condensate line. But AC-only dehumidification has significant limits: it only runs when cooling is needed, it removes humidity as a side effect rather than as a controlled function, and it can't maintain a target humidity setpoint independently. In California's mild seasons — spring and fall — temperatures may not call for cooling, but a post-flood space or pool room still generates moisture. A dedicated dehumidifier addresses moisture independently of temperature, which is what specific high-humidity situations require. Pair with our air filtration systems at /services/hvac/air-filtration-systems for comprehensive IAQ control.",
  },
  {
    question:
      "How much does whole-home dehumidifier installation cost in Murrieta?",
    answer:
      "Whole-home dehumidifier installation typically runs in the $1,200–$2,500 range depending on the unit capacity (measured in pints per day of moisture removal), the complexity of the duct integration, and the drain line routing required. High-capacity pool room units run toward the upper end of that range. These are general numbers — the actual quote depends on your specific home layout, the moisture load being addressed, and whether drain routing requires additional plumbing work. We provide a written quote after the in-home assessment. Financing is available through our financing page at /financing for larger projects.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  {
    name: "Whole-Home Dehumidifiers",
    url: "/services/hvac/whole-home-dehumidifiers",
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
  name: "Whole Home Dehumidifier Installation",
  description:
    "Whole-home dehumidifier installation for residential properties across Murrieta, Temecula, and the Inland Empire. Source identification first, then moisture control for poolside homes, post-flood spaces, and below-grade environments.",
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
  serviceType: "Whole Home Dehumidifier Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$$",
  },
};

export default function WholeHomeDehumidifiersPage() {
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
        <WholeHomeDehumidifiers />
      </main>
    </div>
  );
}
