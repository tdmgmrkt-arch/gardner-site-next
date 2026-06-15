import { MiniSplitAc } from "@/components/MiniSplitAc";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Split AC Murrieta, CA | Ductless Cooling Installation",
  description:
    "Mini split AC installation in Murrieta, Temecula & the Inland Empire. Ductless cooling for homes, additions & rooms without ducts. Call (951) 246-4337.",
  openGraph: {
    title:
      "Mini Split AC Murrieta, CA | Ductless Cooling Installation | Gardner Plumbing Co.",
    description:
      "Ductless mini split installation in Murrieta and across the Inland Empire. Single and multi-zone systems, licensed HVAC technicians. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/mini-split-ac",
  },
  alternates: {
    canonical: "/services/hvac/mini-split-ac",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What is a mini split AC and how does it work?",
    answer:
      "A mini split is a ductless air conditioning system made up of two components: an outdoor compressor unit and one or more indoor air-handling units (called head units) mounted on the wall or ceiling. Refrigerant lines connect the two through a small hole drilled in the exterior wall. The indoor unit blows conditioned air directly into the room — no ductwork involved. Multi-zone systems use one outdoor compressor to power multiple indoor heads in different rooms, each controlled independently.",
  },
  {
    question:
      "Is a mini split better than central AC for an Inland Empire home?",
    answer:
      "It depends on your home's layout and existing infrastructure. Central AC is generally more cost-effective for whole-home cooling in homes that already have ductwork in good condition. Mini splits are the better choice when a home lacks ductwork, when you're cooling a room addition or garage conversion, or when you need zone-by-zone temperature control. In older Murrieta and Temecula homes built before central air was standard, mini splits are often the only practical option. Compare both on our AC installation page at /services/hvac/ac-installation.",
  },
  {
    question: "How much does mini split installation cost in Murrieta?",
    answer:
      "A single-zone mini split installation in the Inland Empire runs $2,500–$4,500 depending on system size (BTU rating), brand tier, and whether the installation requires any electrical panel work. Multi-zone systems that add 2–4 additional indoor heads to one outdoor compressor typically run $1,000–$2,000 per additional zone after the first. We provide a written itemized quote before any work begins. Brands we install include Mitsubishi, Daikin, and LG — all carry strong manufacturer warranties when installed by a licensed contractor.",
  },
  {
    question: "What rooms are mini splits best suited for?",
    answer:
      "Room additions that were built without extending the existing duct system are the most common use case we see in Inland Empire homes. Garage conversions and ADUs (accessory dwelling units) are a close second — garages are the hottest space on a property in IE summers and rarely have ductwork. Other common applications include home offices, sunrooms with high solar gain, master bedrooms that run warmer than the rest of the house, and small commercial spaces that need zone-by-zone control.",
  },
  {
    question: "Do mini splits work for heating too?",
    answer:
      "Most modern mini splits are heat pumps — they provide both cooling and heating from the same system. In Inland Empire climates, where winter temperatures in Murrieta and Temecula drop into the 30s–40s°F on cold nights but rarely below freezing, a mini split heat pump handles heating comfortably down to about 15–20°F outdoor temperature. This makes them genuinely dual-purpose for the IE market. If you're considering a whole-home heating upgrade, also compare heat pump systems at /services/hvac/heat-pump-systems for central applications.",
  },
  {
    question: "Can I control a mini split with a smart thermostat?",
    answer:
      "Most mini splits use their own wireless remote or a manufacturer app rather than a standard thermostat wiring protocol. However, universal mini split controllers — like those from Cielo or Sensibo — can bridge your existing mini split to smart home systems including Google Home and Amazon Alexa without replacing the unit. Some newer Mitsubishi and Daikin systems support direct integration with compatible smart thermostats at /services/hvac/thermostat-installation. Ask your technician about compatible control options during your installation quote.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Mini-Split AC", url: "/services/hvac/mini-split-ac" },
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
  name: "Mini Split AC Installation",
  description:
    "Ductless mini split AC installation and service for residential and commercial properties across Murrieta, Temecula, and the Inland Empire. Single-zone and multi-zone systems, licensed HVAC technicians.",
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
  serviceType: "Mini Split AC Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function MiniSplitAcPage() {
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
        <MiniSplitAc />
      </main>
    </div>
  );
}
