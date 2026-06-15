import { AcMaintenance } from "@/components/AcMaintenance";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Tune-Up Murrieta, CA | Annual Maintenance Service",
  description:
    "AC tune-up in Murrieta, Temecula & the Inland Empire. Annual maintenance, coil cleaning, refrigerant check, and full system inspection. Call (951) 246-4337.",
  openGraph: {
    title:
      "AC Tune-Up Murrieta, CA | Annual Maintenance Service | Gardner Plumbing Co.",
    description:
      "Annual AC tune-up in Murrieta and across the Inland Empire. Prevent breakdowns before summer. Licensed HVAC technicians, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac-maintenance",
  },
  alternates: {
    canonical: "/services/hvac/ac-maintenance",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How often should I get an AC tune-up in the Inland Empire?",
    answer:
      "Once per year, scheduled in early spring before the first heat wave. Inland Empire summers are unusually long and hard on cooling equipment — temperatures above 100°F from June through September push capacitors, contactors, and refrigerant systems harder than in coastal climates. Homeowners in Murrieta and Temecula who skip tune-ups for 2–3 years consistently see higher repair frequency. Annual maintenance keeps the system running at rated efficiency and catches developing problems before they become emergency calls.",
  },
  {
    question: "What does an AC tune-up include?",
    answer:
      "Our standard AC tune-up covers 20 inspection points: refrigerant pressure check, capacitor and contactor testing, evaporator and condenser coil cleaning, drain line flush, blower motor inspection, electrical wiring check, thermostat calibration, and airflow measurement at the supply registers. Every item is documented on a written inspection report that you keep. If we find something that needs repair, we quote it separately — the tune-up fee doesn't change. If your system needs more than maintenance, see our AC repair service at /services/hvac/ac-repair.",
  },
  {
    question: "Can a tune-up fix my AC if it's not cooling well?",
    answer:
      "Sometimes, yes — but it depends on the cause. A tune-up resolves problems caused by dirty coils, low refrigerant, a failing capacitor, or a clogged drain. If the root cause is a failed compressor, a cracked heat exchanger, or a refrigerant leak too large to patch economically, a tune-up won't fix those — we'll diagnose the issue and give you repair options. If your system needs repair rather than maintenance, our AC repair team at /services/hvac/ac-repair handles same-day diagnostics.",
  },
  {
    question: "How much does an AC tune-up cost in Murrieta?",
    answer:
      "A standard AC tune-up in the Murrieta and Temecula area runs $89–$149 for a single-system home, depending on system type and any add-ons like drain line treatment or UV bulb replacement. The price is flat-rate and quoted upfront — no add-on surprises after the tech arrives. Homeowners who enroll in an HVAC maintenance plan at /services/hvac/hvac-maintenance-plans receive discounted tune-up pricing as part of their annual plan, along with priority scheduling and discounts on any repairs needed during the plan year.",
  },
  {
    question:
      "What's the difference between an AC tune-up and an AC maintenance plan?",
    answer:
      "A tune-up is a one-time annual service visit. An HVAC maintenance plan at /services/hvac/hvac-maintenance-plans is an annual contract that includes your AC tune-up plus your furnace tune-up, priority scheduling for repair calls, and a discount on parts and labor if anything needs fixing between visits. The plan makes sense for homeowners who want both systems covered — and for anyone whose home has been deferred on maintenance and wants to get ahead of problems. You can also pair with furnace maintenance at /services/hvac/furnace-maintenance if you prefer separate bookings.",
  },
  {
    question: "When is the best time to schedule an AC tune-up in Murrieta?",
    answer:
      "February through April is ideal. Scheduling before the summer rush means your first choice of appointment windows, and any parts that need ordering arrive before the heat peaks. Technician availability tightens significantly from May through July — same-day tune-up appointments become rare during that window as emergency repair calls take priority. If you missed spring scheduling, fall (October–November) is the second best window for tune-ups before the heating season. Call (951) 246-4337 to check current availability.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "AC Maintenance", url: "/services/hvac/ac-maintenance" },
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
  name: "AC Maintenance",
  description:
    "Annual AC tune-up and maintenance services for residential properties across Murrieta, Temecula, and the Inland Empire. 20-point inspection, coil cleaning, refrigerant check, upfront flat-rate pricing.",
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
  serviceType: "AC Maintenance",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$",
  },
};

export default function AcMaintenancePage() {
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
        <AcMaintenance />
      </main>
    </div>
  );
}
