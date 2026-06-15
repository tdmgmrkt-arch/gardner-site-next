import { FurnaceInstallation } from "@/components/FurnaceInstallation";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Installation Murrieta, CA | New Heating System",
  description:
    "Furnace installation in Murrieta, Temecula & the Inland Empire. Expert sizing, gas & electric systems, upfront pricing. Call (951) 246-4337 for a free estimate.",
  openGraph: {
    title:
      "Furnace Installation Murrieta, CA | New Heating System | Gardner Plumbing Co.",
    description:
      "New furnace installation in Murrieta and across the Inland Empire. Licensed HVAC technicians, proper load calculation, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/furnace-installation",
  },
  alternates: {
    canonical: "/services/hvac/furnace-installation",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know when to replace rather than repair my furnace?",
    answer:
      "If your furnace is over 15 years old and facing a repair that costs more than a third of a new unit's price, replacement typically makes more financial sense. A furnace over 20 years old is beyond its designed service life regardless of repair cost. Multiple failures in the same season — igniter, gas valve, and heat exchanger in one winter — are also a strong replacement signal. If you're not sure, we give you both numbers and let you decide. If repair still makes sense, see our furnace repair page at /services/hvac/furnace-repair.",
  },
  {
    question: "What size furnace does my Inland Empire home need?",
    answer:
      "Sizing depends on your home's square footage, insulation quality, number and size of windows, ceiling height, and local climate. A furnace that's too large short-cycles — burning fuel without completing a full heat cycle. One that's too small runs constantly and still can't reach setpoint on cold nights. Our technicians perform a Manual J load calculation before recommending any unit. Inland Empire homes typically fall in the 40,000–80,000 BTU range depending on size and construction vintage.",
  },
  {
    question: "How much does furnace installation cost in Murrieta?",
    answer:
      "A standard gas furnace installation in Murrieta typically ranges from $2,500 to $5,500 depending on unit efficiency (80% vs. 96% AFUE), brand, home size, and whether new flue venting or gas line work is required. Electric furnace installations are generally on the lower end of that range. We provide a written itemized quote — equipment, labor, permit, and haul-away — before any work starts. Financing is available for qualified homeowners through our financing options at /financing.",
  },
  {
    question: "Should I get a gas furnace or a heat pump?",
    answer:
      "For most Inland Empire homes with existing gas service, a high-efficiency gas furnace is the straightforward replacement. Heat pumps make the most sense if you want to eliminate a gas bill, if you need cooling as well as heating, or if you're replacing both systems at once. IE winters are mild enough that a heat pump handles heating efficiently without auxiliary strips kicking in constantly. Our heat pump systems page at /services/hvac/heat-pump-systems covers the full comparison.",
  },
  {
    question: "Do I need a permit for furnace installation in Murrieta?",
    answer:
      "Yes. The City of Murrieta requires a mechanical permit for HVAC equipment installation, including furnace replacement. Our team pulls the permit before work begins and coordinates the final inspection with the city. Do not use a contractor who skips the permit — an unpermitted system can void your homeowner's insurance, complicate a home sale, and leave you without a code-compliant installation. Permit fees are included in our upfront written quote.",
  },
  {
    question: "How long does furnace installation take?",
    answer:
      "A standard furnace replacement — removing the old unit, installing the new one, connecting gas and electrical, and commissioning — takes 4–6 hours in most Inland Empire homes. A first-time installation with new gas line work or complex venting can run 6–8 hours. We don't rush commissioning. The system is run-tested through a full heat cycle before the technician leaves, and you receive all equipment documentation and warranty registration information. Protect your new system with annual furnace maintenance at /services/hvac/furnace-maintenance.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Furnace Installation", url: "/services/hvac/furnace-installation" },
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
  name: "Furnace Installation",
  description:
    "Professional furnace installation services for residential properties across Murrieta, Temecula, and the Inland Empire. Expert sizing, gas and electric systems, permit coordination, upfront pricing.",
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
  serviceType: "Furnace Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function FurnaceInstallationPage() {
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
        <FurnaceInstallation />
      </main>
    </div>
  );
}
