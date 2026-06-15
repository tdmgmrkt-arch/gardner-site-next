import { FurnaceRepair } from "@/components/FurnaceRepair";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Repair Murrieta, CA | Same-Day Heating Service",
  description:
    "Furnace repair in Murrieta, Temecula & the Inland Empire. Same-day diagnostics, igniter & heat exchanger repair, gas valve service. Call (951) 246-4337.",
  openGraph: {
    title:
      "Furnace Repair Murrieta, CA | Same-Day Heating Service | Gardner Plumbing Co.",
    description:
      "Same-day furnace repair in Murrieta and across the Inland Empire. Licensed HVAC technicians, upfront pricing, 24/7 availability. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/furnace-repair",
  },
  alternates: {
    canonical: "/services/hvac/furnace-repair",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know if my furnace needs repair or full replacement?",
    answer:
      "If your furnace is under 15 years old and the repair cost is less than half the price of a new unit, repair is almost always the right call. Furnaces over 20 years old — especially those with a cracked heat exchanger or repeated igniter failures in the same season — are usually better candidates for replacement. Our technicians give you both numbers upfront. For replacement options, see our furnace installation page at /services/hvac/furnace-installation.",
  },
  {
    question:
      "What are the most common furnace problems in Inland Empire homes?",
    answer:
      "The three failures we see most often across Murrieta, Temecula, and Menifee are: failed hot surface igniters, dirty or faulty flame sensors, and clogged or misaligned burners. IE homes tend to run furnaces infrequently — months of inactivity let dust and debris accumulate on burner ports and sensors. A furnace that clicks but won't light, or lights then shuts off after 30 seconds, is usually dealing with one of these three issues.",
  },
  {
    question: "Is a cracked heat exchanger dangerous?",
    answer:
      "Yes. A cracked heat exchanger allows combustion gases — including carbon monoxide — to mix with the heated air circulating through your home. CO is odorless and colorless. If our technician identifies a crack during inspection, the furnace cannot be safely operated until the exchanger is replaced or the unit is replaced entirely. We perform combustion analysis on every furnace repair call to rule this out. If your CO detector is going off alongside furnace problems, call immediately.",
  },
  {
    question: "Why does my furnace keep shutting off after a few minutes?",
    answer:
      "Short cycling — where the furnace ignites and then shuts off before completing a full heat cycle — is usually caused by a dirty flame sensor, a clogged filter restricting airflow, or an overheating heat exchanger triggering the high-limit switch. Check your filter first. If the filter is clean and the problem continues, the flame sensor likely needs cleaning or replacement. A technician can diagnose and fix this in under an hour in most cases.",
  },
  {
    question:
      "How often should I schedule furnace maintenance to avoid repairs?",
    answer:
      "Once per year, ideally in late September or early October — before the first cold snap. An annual furnace tune-up catches worn igniters, dirty burners, and small cracks before they cause a no-heat call in December. IE homeowners who skip maintenance for 3 or more years see significantly higher repair rates. Our furnace maintenance service at /services/hvac/furnace-maintenance includes a full safety inspection, burner cleaning, and combustion analysis.",
  },
  {
    question:
      "How fast can you respond to an emergency furnace repair call in Murrieta?",
    answer:
      "For daytime calls, average dispatch time from our Murrieta base is under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on call volume. We maintain a dedicated 24/7 emergency line at (951) 246-4337. Households with elderly residents, infants, or medical equipment that requires heat — mention that when you call. We prioritize those situations.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Furnace Repair", url: "/services/hvac/furnace-repair" },
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
  name: "Furnace Repair",
  description:
    "Professional furnace repair services for residential properties across Murrieta, Temecula, and the Inland Empire. Same-day diagnostics, igniter and heat exchanger repair, gas valve service.",
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
  serviceType: "Furnace Repair",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function FurnaceRepairPage() {
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
        <FurnaceRepair />
      </main>
    </div>
  );
}
