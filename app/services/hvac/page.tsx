import { HvacHub } from "@/components/HvacHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Services Murrieta, CA | Heating, Cooling & Air Quality",
  description:
    "HVAC services in Murrieta, Temecula & the Inland Empire. AC repair, furnace service, heat pumps, and indoor air quality. Licensed contractor. Call (951) 246-4337.",
  openGraph: {
    title:
      "HVAC Services Murrieta, CA | Heating, Cooling & Air Quality | Gardner Plumbing Co.",
    description:
      "Complete HVAC services across Murrieta and the Inland Empire. Licensed heating, cooling, and air quality contractor. Upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac",
  },
  alternates: {
    canonical: "/services/hvac",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What does HVAC stand for, and what does an HVAC contractor actually handle?",
    answer:
      "HVAC stands for Heating, Ventilation, and Air Conditioning. An HVAC contractor installs, repairs, and maintains the systems that control temperature and air quality inside your home — furnaces, air conditioners, heat pumps, ductwork, thermostats, air filters, humidifiers, and dehumidifiers. Gardner Plumbing Co. handles all of these as a licensed C-20 contractor serving Murrieta and the greater Inland Empire. If it moves air or changes the temperature in your home, it falls under HVAC.",
  },
  {
    question:
      "Do I need separate contractors for my AC and my furnace, or can one company handle both?",
    answer:
      "One company handles both — and that's the better choice. An HVAC contractor who services your full system understands how your AC and furnace share components like the air handler, blower motor, thermostat, and ductwork. Splitting the work between two vendors creates gaps: one company may not know what the other changed, and diagnostic problems that cross both systems get passed back and forth. Our team services AC, heating, and air quality under a single work order.",
  },
  {
    question:
      "When is the best time to schedule HVAC service in the Inland Empire?",
    answer:
      "For AC service, schedule in February or March — before the first heat wave hits Murrieta in April or May. Demand surges in June through September and booking windows shrink. For furnace service, schedule in September or October before cold nights arrive. If you're on an HVAC maintenance plan at /services/hvac/heating/hvac-maintenance-plans, the plan automatically schedules both tune-ups at the right time of year. Waiting until a system fails costs more than annual preventive service.",
  },
  {
    question:
      "Do you handle both residential and commercial HVAC in Murrieta?",
    answer:
      "Primarily residential. Our focus is single-family homes, townhomes, condos, and small multi-unit residential properties across Murrieta, Temecula, Menifee, and surrounding Riverside County cities. For large commercial systems — rooftop units over 5 tons, chiller systems, commercial RTUs — we recommend calling a contractor who specializes in commercial HVAC. If you're unsure whether your property qualifies, call (951) 246-4337 and describe the system — we'll tell you honestly.",
  },
  {
    question:
      "Is Gardner Plumbing Co. licensed to perform HVAC work in California?",
    answer:
      "Yes. Gardner Plumbing Co. holds a California CSLB C-20 (Warm-Air Heating, Ventilating, and Air-Conditioning) contractor license. California law requires a C-20 license for HVAC installation and major repair work. Unlicensed HVAC work is a common problem in the Inland Empire market — homeowners who hire unlicensed contractors lose warranty protection on equipment and have no recourse if the work is faulty. Ask any HVAC contractor for their license number before booking.",
  },
  {
    question:
      "What cities in the Inland Empire does your HVAC team service?",
    answer:
      "Our HVAC team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta, so response times are fastest for the southwest Riverside County corridor. For cities on the outer edge of the service area — Hemet, San Jacinto, Moreno Valley — same-day availability depends on current call volume. Call (951) 246-4337 to confirm availability for your location.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
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
  name: "HVAC Services",
  description:
    "Complete HVAC services for residential properties across Murrieta, Temecula, and the Inland Empire. AC repair and installation, furnace repair and installation, heat pumps, and indoor air quality solutions.",
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
  serviceType: "HVAC Services",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function HvacHubPage() {
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
        <HvacHub />
      </main>
    </div>
  );
}
