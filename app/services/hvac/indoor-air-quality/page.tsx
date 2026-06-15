import { IndoorAirQualityHub } from "@/components/IndoorAirQualityHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor Air Quality Services Murrieta, CA | IAQ Solutions",
  description:
    "Indoor air quality services in Murrieta, Temecula & the Inland Empire. Air duct cleaning, whole-home filtration, humidifiers, and dehumidifiers. Call (951) 246-4337.",
  openGraph: {
    title:
      "Indoor Air Quality Services Murrieta, CA | IAQ Solutions | Gardner Plumbing Co.",
    description:
      "Cleaner indoor air for Inland Empire homes. Air duct cleaning, filtration systems, humidifiers, and dehumidifiers — licensed HVAC contractor. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/indoor-air-quality",
  },
  alternates: {
    canonical: "/services/hvac/indoor-air-quality",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What's the most important indoor air quality improvement I can make first?",
    answer:
      "Start with your air filter and ductwork before investing in add-on equipment. If your HVAC system is running with a clogged filter or dirty ducts, any air purifier or humidifier you install is fighting an uphill battle — the system is still circulating contaminated air as its baseline. Upgrade to a MERV 11 or higher filter first. If your ducts haven't been cleaned in 5 or more years, schedule air duct cleaning at /services/hvac/indoor-air-quality/air-duct-cleaning before adding other IAQ equipment. Once the foundation is clean, add targeted solutions — filtration, humidity control, or UV purification — based on your specific symptoms.",
  },
  {
    question:
      "Do I really need a humidifier in the Inland Empire — isn't it always warm and dry?",
    answer:
      "Yes, and that's exactly why humidifiers matter in the IE. Inland Empire summers regularly drop below 20% relative humidity — well below the 35–50% range recommended by ASHRAE for comfort and health. At low humidity, sinuses dry out and become more vulnerable to airborne particles, wood floors and furniture crack, static electricity increases, and some respiratory conditions worsen. Winter heating compounds the problem — furnaces remove additional moisture from the air. A whole-home humidifier integrated with your HVAC system maintains target humidity automatically in every room. Portable units work for one room; whole-home units work for the house. See our whole-home humidifier service at /services/hvac/indoor-air-quality/whole-home-humidifiers for installation details.",
  },
  {
    question:
      "How often should air ducts be cleaned in an Inland Empire home?",
    answer:
      "Most HVAC manufacturers and the EPA recommend every 3–5 years under normal conditions. Inland Empire homes may need more frequent cleaning due to desert dust and wildfire particulates entering through unsealed gaps during wind events. Clean sooner if: you've recently completed a renovation (drywall dust contaminates ducts quickly), you've moved into a home where cleaning history is unknown, you notice excessive dust on registers or surfaces, or anyone in the household has respiratory sensitivities. Our air duct cleaning service at /services/hvac/indoor-air-quality/air-duct-cleaning includes a before-and-after airflow test so you can see the difference.",
  },
  {
    question: "What do MERV ratings mean, and which rating should I use?",
    answer:
      "MERV stands for Minimum Efficiency Reporting Value — a rating from 1 to 20 that measures how effectively a filter captures airborne particles. Higher numbers capture smaller particles. For most residential HVAC systems: MERV 8 is a standard upgrade from fiberglass filters and catches dust, pollen, and mold spores. MERV 11–13 captures fine dust, pet dander, and some smoke particles — recommended for allergy sufferers. MERV 14–16 is hospital-grade and captures bacteria and fine particulates — recommended for wildfire smoke sensitivity. One caution: filters rated MERV 13 and above restrict airflow more than lower-rated filters. Your HVAC system must be compatible before installing one. Our technicians verify compatibility during the assessment.",
  },
  {
    question: "Are UV-C lights in HVAC systems worth the investment?",
    answer:
      "For the right situation, yes. UV-C germicidal lights installed at the air handler coil kill mold, bacteria, and some viruses before they circulate through the ductwork. They're most effective for: homes with recurring mold issues near the evaporator coil, households with immune-compromised members, or any home where biological contamination is a documented concern. UV-C lights are not a substitute for a clean duct system or a quality particulate filter — they target biological contaminants, not dust or allergens. If your primary concern is airborne particles from wildfire smoke or pet dander, a high-MERV filter or whole-home air filtration system at /services/hvac/indoor-air-quality/air-filtration-systems is the higher-priority investment.",
  },
  {
    question: "What indoor air quality service areas do you cover?",
    answer:
      "Our IAQ service area covers Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. We dispatch from Murrieta. Scheduling is typically 1–3 business days for non-emergency IAQ installations and cleanings — these are planned appointments, not emergency dispatch. If you have an urgent air quality concern (strong chemical or mold smell tied to an HVAC event), call the emergency line at (951) 246-4337 for same-day assessment.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Indoor Air Quality", url: "/services/hvac/indoor-air-quality" },
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
  name: "Indoor Air Quality Services",
  description:
    "Indoor air quality services for residential properties across Murrieta, Temecula, and the Inland Empire. Air duct cleaning, whole-home air filtration systems, humidifiers, and dehumidifiers.",
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
  serviceType: "Indoor Air Quality Services",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function IndoorAirQualityHubPage() {
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
        <IndoorAirQualityHub />
      </main>
    </div>
  );
}
