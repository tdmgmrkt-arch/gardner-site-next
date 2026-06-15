import { HeatingHub } from "@/components/HeatingHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heating Repair & Furnace Services Murrieta, CA",
  description:
    "Heating repair, furnace installation, heat pumps, and HVAC maintenance plans in Murrieta, Temecula & the Inland Empire. Licensed contractor. Call (951) 246-4337.",
  openGraph: {
    title:
      "Heating Repair & Furnace Services Murrieta, CA | Gardner Plumbing Co.",
    description:
      "Complete heating services across Murrieta and the Inland Empire. Furnace repair, installation, heat pumps, and preventive plans. Licensed HVAC contractor. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/heating",
  },
  alternates: {
    canonical: "/services/hvac/heating",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "Furnace or heat pump — which is better for the Inland Empire climate?",
    answer:
      "Both work well in the Inland Empire, and the right choice depends on your home and your utility setup. Heat pumps are the more efficient choice for the IE's mild winters — they move heat rather than generate it, which uses less energy when outdoor temperatures stay above freezing. Gas furnaces heat faster and feel warmer during the rare cold nights in Hemet or San Jacinto. If you have existing gas lines and ductwork, a gas furnace is often the lower-cost installation. If you're starting fresh or want to reduce gas use, a heat pump is worth pricing out. See our heat pump systems page at /services/hvac/heating/heat-pump-systems for a side-by-side comparison.",
  },
  {
    question:
      "How often should a furnace be serviced in the Inland Empire?",
    answer:
      "Once per year, ideally in September or October before the first cold nights arrive. Inland Empire furnaces sit unused for 6–7 months during the cooling season — dust accumulates on burners, igniters weaken, and heat exchangers develop stress from thermal cycling. A pre-season tune-up finds these issues before they cause a failure in December. Our furnace maintenance service at /services/hvac/heating/furnace-maintenance covers a full inspection, burner cleaning, heat exchanger check, and carbon monoxide safety test in a single visit.",
  },
  {
    question:
      "What are the most common heating problems in Inland Empire homes?",
    answer:
      "The three most frequent failures across Murrieta, Temecula, and Menifee are igniter failure, dirty flame sensors, and cracked heat exchangers. Gas igniters degrade over time and eventually fail to light the burners — the furnace runs the fan but no heat comes out. Flame sensors collect carbon buildup and fail to detect the flame, causing repeated shutdown. Cracked heat exchangers are the most serious — they allow combustion gases, including carbon monoxide, to enter the living space. Any furnace showing yellow or flickering flames should be inspected immediately.",
  },
  {
    question:
      "Is gas heating or electric heating more cost-effective in Murrieta?",
    answer:
      "In Murrieta and most of Riverside County, natural gas furnaces are cheaper to operate than electric resistance heating (standard electric furnaces or baseboard heaters). Southern California Gas Company rates are lower per BTU than SCE electric rates for resistance heating. However, electric heat pumps — which use electricity but operate 2–4 times more efficiently than electric resistance — can be cost-competitive with gas depending on current rate structures. The calculation shifts with each utility rate change. Call us and describe your current setup — we can help you run the numbers.",
  },
  {
    question:
      "Do you offer emergency furnace repair service in Murrieta on nights and weekends?",
    answer:
      "Yes. Our emergency line at (951) 246-4337 is live 24 hours a day, 7 days a week. Daytime dispatch from Murrieta averages under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on call volume. If you smell gas near the furnace, do not call us first — contact Southern California Gas Company at 1-800-427-2200 and evacuate the area. Once the gas company has confirmed the line is safe, call us for furnace diagnosis and repair.",
  },
  {
    question: "What heating service areas do you cover?",
    answer:
      "Our heating service area covers Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta. Response times are fastest for southwest Riverside County. Higher-elevation areas like Hemet and San Jacinto see colder winters — we prioritize emergency dispatch to those areas when temperatures drop. Call (951) 246-4337 to confirm same-day availability for your location.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Heating", url: "/services/hvac/heating" },
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
  name: "Heating Services",
  description:
    "Complete heating services for residential properties across Murrieta, Temecula, and the Inland Empire. Furnace repair, installation, heat pumps, and HVAC maintenance plans.",
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
  serviceType: "Heating Services",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function HeatingHubPage() {
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
        <HeatingHub />
      </main>
    </div>
  );
}
