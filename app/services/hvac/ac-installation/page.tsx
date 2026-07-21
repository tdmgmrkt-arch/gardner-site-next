import { AcInstallation } from "@/components/AcInstallation";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Installation Murrieta, CA | New System Experts",
  description:
    "AC installation in Murrieta, Temecula & the Inland Empire. Expert sizing, trusted brands, upfront pricing. Replace or upgrade your cooling system. Call (951) 246-4337.",
  openGraph: {
    title:
      "AC Installation Murrieta, CA | New System Experts | Gardner Plumbing Co.",
    description:
      "New AC installation in Murrieta and across the Inland Empire. Licensed HVAC technicians, Carrier and Trane systems, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/ac-installation",
  },
  alternates: {
    canonical: "/services/hvac/ac-installation",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know what size AC system my home needs?",
    answer:
      "Size is determined by a Manual J load calculation — not by square footage alone. A proper calculation accounts for your home's ceiling height, insulation R-value, window area and orientation, number of occupants, and local climate data specific to Murrieta and the surrounding Inland Empire. A system that's too small runs continuously without reaching setpoint on a 105°F day. A system that's too large short-cycles, wears out early, and leaves the home feeling clammy. We run the calculation before recommending any equipment.",
  },
  {
    question:
      "What AC brands do you install, and which do you recommend for Inland Empire homes?",
    answer:
      "We install Carrier and Trane systems as our primary lines — both manufacture equipment tested for extreme heat conditions, and both carry strong 10-year parts warranties when registered after installation. For Inland Empire homes, we generally recommend a 16 SEER2 or higher unit to balance upfront cost against utility savings during the long cooling season. Southern California Edison rebates are available on qualifying high-efficiency equipment — we coordinate the paperwork when applicable.",
  },
  {
    question: "How much does AC installation cost in Murrieta?",
    answer:
      "A single-zone central AC replacement in a typical Inland Empire home (1,500–2,500 sq ft) ranges from $4,500 to $9,000 depending on system size, equipment tier, and whether existing ductwork needs modification. Full new-construction installs that include ductwork design and fabrication run higher. We provide a written itemized quote before any work begins — equipment, labor, and permit fees are listed separately. Financing options are available for qualified homeowners with monthly payment plans starting low.",
  },
  {
    question: "Should I repair my old AC or replace it with a new system?",
    answer:
      "The standard rule: if the system is under 10 years old and the repair is less than half the cost of a new unit, repair usually wins. Systems older than 15 years running R-22 refrigerant are typically better candidates for replacement — R-22 is no longer manufactured and recharging an old system is increasingly expensive. Our technicians give you repair and replacement numbers side by side so you can decide without pressure. See our AC repair page at /services/hvac/ac-repair for repair-vs-replace guidance.",
  },
  {
    question: "How long does an AC installation take?",
    answer:
      "A straight AC replacement — removing the old condenser and air handler and installing a new matched system — typically takes 4 to 6 hours for an experienced two-person crew. New installs that include ductwork modifications or an electrical panel upgrade take longer, sometimes two days. We give you a time estimate with your quote. Once the system is installed, we run a full startup sequence and don't leave until every zone is confirmed cooling. Protect your new system with annual AC maintenance at /services/hvac/ac-maintenance.",
  },
  {
    question:
      "Do I need a permit for AC installation in Murrieta or Riverside County?",
    answer:
      "In most cases, yes. Riverside County and the City of Murrieta require a mechanical permit for new AC installations and replacements that involve refrigerant line work or electrical modifications. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. The permit ensures the installation is inspected by a licensed building inspector, which also protects your homeowner's insurance coverage and future resale value. Ask about permit requirements when you call for your quote.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "AC Installation", url: "/services/hvac/ac-installation" },
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
  name: "AC Installation",
  description:
    "Professional AC installation services for residential properties across Murrieta, Temecula, and the Inland Empire. Expert load calculation, Carrier and Trane systems, upfront pricing.",
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
  serviceType: "AC Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function AcInstallationPage() {
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
        <AcInstallation />
      </main>
    </div>
  );
}
