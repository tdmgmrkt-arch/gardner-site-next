import { HvacMaintenancePlans } from "@/components/HvacMaintenancePlans";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Maintenance Plan Murrieta, CA | Service Agreement",
  description:
    "HVAC maintenance plans in Murrieta, Temecula & the Inland Empire. Annual heating + cooling tune-ups, priority service, and plan-member repair discounts. Call (951) 246-4337.",
  openGraph: {
    title:
      "HVAC Maintenance Plan Murrieta, CA | Service Agreement | Gardner Plumbing Co.",
    description:
      "HVAC maintenance plan covering heating and cooling in Murrieta and the Inland Empire. Two annual visits, priority scheduling, plan discounts. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/hvac-maintenance-plans",
  },
  alternates: {
    canonical: "/services/hvac/hvac-maintenance-plans",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What is the difference between an HVAC maintenance plan and a furnace tune-up?",
    answer:
      "A furnace tune-up is a single annual visit — you call, we come out, we service your furnace, you receive an invoice. That's it. An HVAC maintenance plan is an ongoing service agreement covering both your heating and cooling systems under one contract. You enroll once, and we schedule two visits per year going forward — spring AC service and fall furnace service — with priority scheduling and repair discounts applied automatically. If you only need your furnace serviced this year, our furnace maintenance service at /services/hvac/furnace-maintenance is the right choice. If you want both systems covered year-round without remembering to schedule, the plan is the better fit.",
  },
  {
    question: "How much does an HVAC maintenance plan cost in Murrieta?",
    answer:
      "Plan pricing varies by tier — Basic, Premium, and Ultimate — and is quoted based on system type and age. Most Inland Empire homeowners find the Premium plan (two annual visits, priority scheduling, 15% repair discount) pays for itself after one avoided emergency repair call. Call (951) 246-4337 or submit the estimate form and we'll quote your specific system within 24 hours. Pricing is locked for 12 months at enrollment.",
  },
  {
    question:
      "What is included in the spring AC visit under the maintenance plan?",
    answer:
      "The spring AC tune-up covers: refrigerant pressure check and recharge if low, coil cleaning (evaporator and condenser), capacitor and contactor testing, electrical connection inspection, thermostat calibration, and airflow measurement at supply registers. If low refrigerant is found, we locate the leak first before recharging — plan members receive the leak detection at no additional charge. See the AC maintenance page at /services/hvac/ac-maintenance for the full checklist.",
  },
  {
    question:
      "What is included in the fall furnace visit under the maintenance plan?",
    answer:
      "The fall furnace tune-up covers: combustion analysis and CO output testing, heat exchanger inspection, burner cleaning and adjustment, gas pressure verification, igniter amp draw test, flame sensor cleaning, blower motor inspection, and thermostat calibration. The CO safety test is included on every furnace visit — not an add-on. If the inspection reveals a repair need, plan members receive a written quote and the applicable discount before work begins. See the furnace maintenance page at /services/hvac/furnace-maintenance for the full checklist.",
  },
  {
    question: "Can I cancel my HVAC maintenance plan at any time?",
    answer:
      "Yes. Plans are cancellable with 30 days' written notice. There is no early termination penalty if you cancel after your first completed visit. If you cancel before the first visit, you receive a full refund. We don't use lock-in contracts — if the plan isn't working for you, you cancel. Most members renew annually; average plan retention across our Riverside County customer base is over 3 years.",
  },
  {
    question: "Do you offer a combined HVAC and plumbing maintenance plan?",
    answer:
      "Our HVAC maintenance plans cover heating and cooling systems. We also offer a separate plumbing maintenance plan at /services/maintenance-plans covering water heater, shut-off valves, drain health, and other home plumbing systems. Both plans can run simultaneously — many homeowners carry both as a complete home comfort package. Call to ask about bundle pricing when enrolling in more than one plan.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  {
    name: "HVAC Maintenance Plans",
    url: "/services/hvac/hvac-maintenance-plans",
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
  name: "HVAC Maintenance Plan",
  description:
    "HVAC maintenance plan covering heating and cooling systems for residential properties across Murrieta, Temecula, and the Inland Empire. Two annual visits, priority scheduling, and plan-member repair discounts.",
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
  serviceType: "HVAC Maintenance Plan",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$",
  },
};

export default function HvacMaintenancePlansPage() {
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
        <HvacMaintenancePlans />
      </main>
    </div>
  );
}
