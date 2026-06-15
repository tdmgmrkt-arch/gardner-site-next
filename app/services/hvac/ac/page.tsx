import { AcHub } from "@/components/AcHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Repair & Air Conditioning Services Murrieta, CA",
  description:
    "AC repair, installation, maintenance, mini-splits, and thermostat service in Murrieta, Temecula & the Inland Empire. Licensed HVAC contractor. Call (951) 246-4337.",
  openGraph: {
    title:
      "AC Repair & Air Conditioning Services Murrieta, CA | Gardner Plumbing Co.",
    description:
      "Complete air conditioning services in Murrieta and across the Inland Empire. Same-day AC repair, new installs, tune-ups, and mini-splits. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac",
  },
  alternates: {
    canonical: "/services/hvac/ac",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know if I should repair or replace my AC system?",
    answer:
      "The threshold most HVAC technicians use: if the repair cost exceeds half the price of a new unit AND your system is over 12 years old, replacement is usually the smarter financial decision. Inland Empire AC systems run harder than units in coastal climates — the heat accelerates wear on capacitors, compressors, and refrigerant lines. A system showing multiple failures in the same summer is a strong replacement candidate. Our technicians give you both numbers — repair cost vs. replacement cost — before you decide. See our AC installation page at /services/hvac/ac/ac-installation for replacement options.",
  },
  {
    question:
      "What does an AC tune-up include, and when should I schedule one?",
    answer:
      "An AC tune-up covers coil cleaning (evaporator and condenser), refrigerant level check, electrical component testing (capacitors, contactors, wiring), thermostat calibration, airflow measurement, and a full visual inspection of the system. Schedule it in February or March — before the first Inland Empire heat wave arrives in late April or May. Booking in winter means shorter wait times and a confirmed-ready system before the season peaks. Our AC maintenance service at /services/hvac/ac/ac-maintenance covers all of the above in a single visit.",
  },
  {
    question: "What AC brands does your team service and install?",
    answer:
      "For repairs and maintenance, our technicians service all major residential AC brands — Carrier, Trane, Lennox, Rheem, Goodman, York, and American Standard, among others. For new installations, we work with Carrier and Trane as our primary equipment lines, selected for reliability in high-heat climates like the Inland Empire. If you have a specific brand preference, ask when you call — we can often accommodate requests. What we won't install is equipment we can't stand behind for warranty service.",
  },
  {
    question:
      "What's the cost of AC repair vs. AC installation in Murrieta?",
    answer:
      "Repair costs vary by part and labor: a capacitor replacement typically runs $150–$350; a refrigerant recharge (including leak repair) runs $300–$700 depending on the leak location; a compressor replacement runs $1,200–$2,500 or more. New central AC installation for a typical Inland Empire home (1,500–2,500 sq ft) ranges from $4,500 to $9,000 depending on system size, brand, and whether existing ductwork needs modification. All pricing is quoted upfront after diagnosis — no estimates over the phone without seeing the system.",
  },
  {
    question:
      "Do you offer emergency AC repair service in Murrieta on nights and weekends?",
    answer:
      "Yes. Our emergency line at (951) 246-4337 is live 24 hours a day, 7 days a week. For daytime calls, the average dispatch time from Murrieta is under 2 hours. After-hours and weekend emergency calls are typically on-site within 2–4 hours depending on current call volume. If your household includes elderly residents or young children, mention that when you call — we prioritize those situations. Complete cooling failure and systems tripping the breaker are treated as emergency dispatches.",
  },
  {
    question: "What area does your AC service cover?",
    answer:
      "Our AC service area covers Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. We dispatch from Murrieta, so response times are fastest for the southwest Riverside County corridor. For the outer edges of the service area, same-day availability depends on current call volume — call (951) 246-4337 to confirm your location.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "AC", url: "/services/hvac/ac" },
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
  name: "Air Conditioning Services",
  description:
    "Complete air conditioning services for residential properties across Murrieta, Temecula, and the Inland Empire. AC repair, installation, maintenance, mini-splits, and thermostat service.",
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
  serviceType: "Air Conditioning Services",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function AcHubPage() {
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
        <AcHub />
      </main>
    </div>
  );
}
