import { AirFiltrationSystems } from "@/components/AirFiltrationSystems";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Home Air Filtration Murrieta, CA | HVAC Install",
  description:
    "Whole home air filtration in Murrieta, Temecula & the Inland Empire. MERV 13–16 media filters, electronic air cleaners, UV-C upgrades. Call (951) 246-4337.",
  openGraph: {
    title:
      "Whole Home Air Filtration Murrieta, CA | HVAC Install | Gardner Plumbing Co.",
    description:
      "Whole-home air filtration systems in Murrieta and across the Inland Empire. MERV 13+ media filters, electronic air cleaners, UV-C add-ons. Licensed HVAC installation. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/air-filtration-systems",
  },
  alternates: {
    canonical: "/services/hvac/air-filtration-systems",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What is whole home air filtration and how is it different from a portable air purifier?",
    answer:
      "Whole home air filtration installs directly into your HVAC system — typically at the air handler or furnace return side. Every time your system runs, all the air in your home passes through the filtration media before being distributed to each room. A portable air purifier handles the square footage of one room and only cleans air in its immediate vicinity. For a 2,000 square-foot Murrieta home, a single portable unit covers roughly 300–400 square feet. A whole-home system covers the entire living area simultaneously. See all of our indoor air quality services at /services/hvac/indoor-air-quality for the full picture.",
  },
  {
    question: "What MERV rating does my Inland Empire home actually need?",
    answer:
      "MERV 13 captures particles as small as 0.3 microns — the size range that includes most allergens, pollen, fine dust, and wildfire smoke particles. That's the right baseline for most Inland Empire homes dealing with seasonal allergies and fire season air quality. MERV 16 goes further, capturing particles down to 0.1 microns, but requires an air handler with enough static pressure capacity to pull air through denser media. Our technician measures your system before recommending a rating — installing too high a MERV without checking airflow first can starve your blower motor.",
  },
  {
    question:
      "Can I install a better air filter myself, or do I need a technician?",
    answer:
      "Basic filter swaps — replacing a 1-inch filter with another 1-inch filter — are a DIY task. But upgrading to a 4-inch or 5-inch deep-media filter housing, installing an electronic air cleaner, or adding a UV-C purifier all require modifying the air handler cabinet. The housing needs to be cut in, sealed, and wired correctly. A poor install creates air bypass — air finds the path of least resistance around the filter rather than through it, defeating the purpose entirely. Upgrades beyond basic filter swaps need a licensed HVAC technician.",
  },
  {
    question:
      "How does a whole-home air filtration system help during wildfire season in the Inland Empire?",
    answer:
      "During a fire event, outdoor PM2.5 (fine particulate matter) levels in Riverside County can spike well above EPA hazard thresholds within hours. Standard 1-inch HVAC filters are rated MERV 4–6 and pass most of those particles directly into your living space. A MERV 13 or higher media filter captures the smoke particle size range effectively, making your HVAC system a positive-pressure barrier instead of a conduit for outdoor air pollution. Homes in Canyon Lake, Murrieta, and Temecula — all within range of recent regional fire events — see the clearest benefit.",
  },
  {
    question: "How often does a whole-home media filter need to be replaced?",
    answer:
      "A 4-inch or 5-inch deep-media filter at MERV 13 typically lasts 6 to 12 months under normal operating conditions. Homes with pets, high occupancy, or significant outdoor dust infiltration (common in Lake Elsinore, Hemet, and Perris) tend to run closer to the 6-month end. We recommend checking filter condition at every AC maintenance visit at /services/hvac/ac-maintenance and setting a calendar reminder 6 months after each replacement. Electronic air cleaner cells are reusable — they need washing every 3 months, not replacement.",
  },
  {
    question:
      "Does a whole-home air filtration system affect my AC or furnace performance?",
    answer:
      "Done correctly, it should not reduce performance — and it often improves it. A clean, high-efficiency filter keeps the evaporator coil cleaner, which reduces the coil's resistance to heat transfer and improves cooling efficiency. The risk comes from installing too high a MERV rating without checking whether the air handler's blower can overcome the added static pressure. An under-powered blower working against a dense filter will run longer cycles, wear out faster, and reduce airflow to distant rooms. That's why our assessment step is not optional — it protects your equipment. Pair with whole-home humidifiers at /services/hvac/whole-home-humidifiers for complete indoor air quality control.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  {
    name: "Air Filtration Systems",
    url: "/services/hvac/air-filtration-systems",
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
  name: "Whole Home Air Filtration",
  description:
    "Whole-home air filtration system installation for residential properties across Murrieta, Temecula, and the Inland Empire. MERV 13–16 media filters, electronic air cleaners, UV-C purifier installation.",
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
  serviceType: "Whole Home Air Filtration",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function AirFiltrationSystemsPage() {
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
        <AirFiltrationSystems />
      </main>
    </div>
  );
}
