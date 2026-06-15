import { SmartHomeElectrical } from "@/components/SmartHomeElectrical";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Home Electrician Murrieta, CA | Wiring & Circuits",
  description:
    "Smart home wiring in Murrieta & the Inland Empire. Dedicated circuits, smart switch wiring, hub low-voltage cabling & smart thermostat hookup. Call (951) 246-4337.",
  openGraph: {
    title:
      "Smart Home Electrician Murrieta, CA | Wiring & Circuits | Gardner Plumbing Co.",
    description:
      "Licensed electricians wire dedicated circuits, smart panels, smart switches, and smart thermostats across Murrieta and the Inland Empire. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/smart-home-electrical",
  },
  alternates: {
    canonical: "/services/electrical/smart-home-electrical",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What does a smart home electrician actually do?",
    answer:
      "A smart home electrician handles the physical wiring that smart devices require — dedicated circuits for high-draw devices, neutral wires at switch locations, C-wires for smart thermostats, and low-voltage cabling for hub controllers. The electrician does not program your devices, set up your Wi-Fi network, or configure your automation scenes. The electrical work has to be correct before any of that matters. If the circuit is wrong, the device fails regardless of how the app is set up.",
  },
  {
    question: "My smart switches keep losing connection — is that a wiring problem?",
    answer:
      "Often, yes. Smart switches that drop connection frequently are usually missing a neutral wire or are on a shared circuit with devices that cause voltage fluctuations. Both problems are electrical, not network issues. Our electricians verify neutral wire presence, check circuit load, and test voltage stability at the switch location before calling the job done. If the panel is the source of the instability, we flag that before starting any switch work. For broader outlet issues, see our outlets and switches page.",
  },
  {
    question: "What is a C-wire and why does my smart thermostat need one?",
    answer:
      "The C-wire (common wire) is a continuous power supply for a smart thermostat's display, Wi-Fi, and onboard sensors. Most smart thermostats — Nest, Ecobee, Honeywell T6 Pro — require a C-wire to avoid display dropout and battery-drain issues. Murrieta homes built before 2000 often have only 4-wire thermostat wiring (R, G, Y, W) with no C-wire. Our electricians run a C-wire from the air handler to the thermostat location — typically a 2-hour job. See our thermostat installation page for the full HVAC-side process.",
  },
  {
    question: "Does my electrical panel need to be upgraded for smart home devices?",
    answer:
      "Most smart home devices draw modest power individually — a smart switch uses under 5 watts. The concern is aggregate load. Adding an EV charger, smart appliances, and whole-home audio simultaneously can push a 100-amp panel to its limits. Before adding multiple smart home circuits, our electricians review your current panel load and available breaker slots. If an upgrade is needed, we provide a quote for the electrical panel upgrade before any smart home wiring begins.",
  },
  {
    question: "Can you wire smart lighting controls across my whole house?",
    answer:
      "Yes. Whole-home smart lighting uses smart switches at every switch location — all requiring neutral wires — and often a central smart hub or integration with Google Home or Amazon Alexa. Our electricians run neutral wires where missing, install smart switches throughout, and verify each switch is wired to the correct load. We handle the physical wiring. The app pairing and automation scene setup is done by the homeowner or a separate smart home integrator. See our lighting installation page for fixture and recessed lighting work that often pairs with smart switch upgrades.",
  },
  {
    question: "How much does smart home wiring cost in Murrieta?",
    answer:
      "Smart home wiring costs depend heavily on scope. A single smart thermostat with C-wire installation typically runs $150–$250 for the electrical work. Smart switch installation — including neutral wire runs if needed — averages $100–$175 per switch location. Dedicated circuit additions for smart home hubs or high-draw devices run $200–$350 per circuit. A whole-home smart switch upgrade across 15–20 locations generally runs $1,500–$3,500, depending on panel capacity and neutral wire status throughout the home. We provide a written, itemized quote before any work begins.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "Smart Home Solutions",
    url: "/services/electrical/smart-home-electrical",
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
  name: "Smart Home Electrical Wiring",
  description:
    "Professional smart home electrical wiring for residential properties across Murrieta, Temecula, and the Inland Empire. Dedicated circuits, smart switch wiring, C-wire installation, and low-voltage hub cabling.",
  provider: {
    "@type": "Electrician",
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
  serviceType: "Smart Home Electrical Wiring",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function SmartHomeElectricalPage() {
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
        <SmartHomeElectrical />
      </main>
    </div>
  );
}
