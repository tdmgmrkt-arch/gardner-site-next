import { ThermostatInstallation } from "@/components/ThermostatInstallation";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermostat Installation Murrieta, CA | HVAC Thermostat Service",
  description:
    "Thermostat installation in Murrieta, Temecula & the Inland Empire. Programmable & smart thermostat installs, HVAC system compatibility confirmed. Call (951) 246-4337.",
  openGraph: {
    title:
      "Thermostat Installation Murrieta, CA | HVAC Thermostat Service | Gardner Plumbing Co.",
    description:
      "HVAC thermostat installation in Murrieta and across the Inland Empire. Nest, ecobee, Honeywell, and Carrier — licensed HVAC technicians. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/thermostat-installation",
  },
  alternates: {
    canonical: "/services/hvac/thermostat-installation",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know if my thermostat needs to be replaced?",
    answer:
      "The most common signs of a failing thermostat are: your AC or furnace doesn't turn on when the thermostat calls for it, the system runs continuously without reaching setpoint, the display is unresponsive or showing erratic readings, or the system short-cycles — turns on and off every few minutes. Before replacing the thermostat, our technicians test it to confirm it's actually the problem. A thermostat that isn't responding can sometimes indicate an AC repair issue at /services/hvac/ac-repair or a furnace control board problem rather than the thermostat itself.",
  },
  {
    question: "What smart thermostats do you install?",
    answer:
      "We install Nest (Google), ecobee, Honeywell Home (T6 and T9 series), and Carrier-brand HVAC thermostats. For standard central AC and furnace systems, all four are compatible with standard 5-wire Rh/Rc/Y/G/W wiring. Heat pump systems require thermostats with an O/B reversing valve wire, and two-stage systems require Y2 and W2 terminals — not every smart thermostat supports these without an adapter. We confirm wiring compatibility before ordering any equipment. Ask about HVAC maintenance plan discounts at /services/hvac/hvac-maintenance-plans that include thermostat service.",
  },
  {
    question: "Can I install a smart thermostat myself?",
    answer:
      "On older single-stage systems with standard 5-wire wiring and a working C-wire, a DIY install is technically possible. The complication arises with heat pumps, two-stage systems, systems without a C-wire (common in Inland Empire homes built before 1995), and any system where the existing wiring is mislabeled or corroded — which is frequent in older Murrieta and Temecula construction. A mismatched connection on a modern HVAC control board can damage the board, which costs significantly more to replace than a professional installation. We recommend professional installation for any heat pump or multi-stage system.",
  },
  {
    question:
      "My AC stopped working after I installed a new thermostat — what happened?",
    answer:
      "This is one of the most common calls we receive. The usual causes are: a wire connected to the wrong terminal (common with heat pump O/B wiring), a missing C-wire causing the thermostat to power-steal from the Y terminal and confuse the control board, or a short caused by bare wire touching the sub-base. In most cases, we can correct the wiring and restore operation the same day. If the control board was damaged, that's an AC repair call at /services/hvac/ac-repair and may require a board replacement.",
  },
  {
    question:
      "What is a C-wire and why does it matter for smart thermostats?",
    answer:
      "The C-wire (common wire) provides continuous 24V power to the thermostat from the HVAC control board. Most smart thermostats require a C-wire to power their Wi-Fi, touchscreen, and continuous monitoring functions. Older Inland Empire homes — particularly those built before 1995 — frequently have only 4-wire thermostat wiring with no C-wire pulled. When a C-wire isn't available, we can add a 24V adapter module at the air handler (such as a Venstar Add-a-Wire) or pull a new 5-wire thermostat cable if the existing wire run allows it.",
  },
  {
    question: "Does a new thermostat help with HVAC energy efficiency?",
    answer:
      "A programmable or smart thermostat reduces cooling and heating energy use by 10–15% compared to a manual thermostat when properly configured with setback schedules. In the Inland Empire — where AC runs 5–6 months of the year — that translates to meaningful annual savings on Southern California Edison bills. The bigger efficiency gains come from getting the thermostat schedule right for your household, not from the hardware alone. Our technicians set up schedules during installation rather than leaving factory defaults in place. For system-level efficiency improvements, see our AC maintenance service at /services/hvac/ac-maintenance.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  {
    name: "Thermostat Installation",
    url: "/services/hvac/thermostat-installation",
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
  name: "Thermostat Installation",
  description:
    "Professional HVAC thermostat installation and configuration services across Murrieta, Temecula, and the Inland Empire. Smart, programmable, and multi-stage thermostat installs with full system compatibility verification.",
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
  serviceType: "Thermostat Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$",
  },
};

export default function ThermostatInstallationPage() {
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
        <ThermostatInstallation />
      </main>
    </div>
  );
}
