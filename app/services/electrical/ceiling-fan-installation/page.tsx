import { CeilingFanInstallation } from "@/components/CeilingFanInstallation";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceiling Fan Installation Murrieta, CA | Install & Replace",
  description:
    "Ceiling fan installation in Murrieta, Temecula & the Inland Empire. New installs, fan replacements & smart fan wiring. Reduce AC load this summer. Call (951) 246-4337.",
  openGraph: {
    title:
      "Ceiling Fan Installation Murrieta, CA | Install & Replace | Gardner Plumbing Co.",
    description:
      "Licensed electricians install and replace ceiling fans across Murrieta and the Inland Empire. New junction boxes, smart fans, outdoor fans. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/ceiling-fan-installation",
  },
  alternates: {
    canonical: "/services/electrical/ceiling-fan-installation",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How much does ceiling fan installation cost in Murrieta?",
    answer:
      "Replacing an existing ceiling fan on an already-wired location runs $100–$175 in labor, plus the cost of the fan itself. New installation where there's no existing junction box — including running a switch leg — typically costs $200–$350 depending on ceiling height and access. Smart fans with app or voice control add $25–$50 for wiring verification and setup time. We provide written pricing before starting so you know the total before we pick up a tool.",
  },
  {
    question: "Can a ceiling fan be installed where there's no existing wiring?",
    answer:
      "Yes, but it requires more work than a simple replacement. Our electricians install a fan-rated junction box, run a switch leg from the nearest switch location, and connect the circuit. In most Murrieta homes with attic access, this is a half-day job. Concrete or flat ceilings without attic access take longer. The job also pairs naturally with lighting installation if you're adding a room upgrade at the same time.",
  },
  {
    question: "What is a fan-rated junction box and why does it matter?",
    answer:
      "A standard light fixture box is designed for static weight — it cannot handle the rotation and torque of a spinning ceiling fan. A fan-rated box is braced differently and rated for the dynamic load a fan produces. Installing a ceiling fan on a non-fan-rated box is a code violation and creates a real risk of the fan pulling loose from the ceiling. Our electricians always verify the box rating before mounting a fan.",
  },
  {
    question: "Can I control my ceiling fan and light separately?",
    answer:
      "Yes, through two separate wall switches or a remote receiver kit. A two-switch setup requires two conductors in the switch leg — many older Inland Empire homes have only a single conductor, which means the fan and light share one switch. Our electricians assess your existing wiring and give you the options before installation. Alternatively, a smart fan with a wireless receiver splits fan and light control without additional wiring runs.",
  },
  {
    question: "Do outdoor ceiling fans need a special circuit in California?",
    answer:
      "Yes. California code and the NEC require GFCI protection on any outdoor receptacle or fixture circuit. Outdoor and covered patio fans must also be rated as \"damp\" (covered patio, not exposed to direct rain) or \"wet\" (fully exposed). Installing an indoor-rated fan outdoors voids the warranty and creates a shock and fire risk. Our electricians install the correct fan rating with a GFCI-protected circuit — especially important for covered patios in Murrieta and Temecula where outdoor living rooms are common. See our outlets and switches page for GFCI outlet work alongside the fan install.",
  },
  {
    question: "How much can a ceiling fan actually reduce my cooling costs?",
    answer:
      "The U.S. Department of Energy estimates that running ceiling fans on high while raising the thermostat 4°F produces the same comfort level — and can cut cooling costs 4–8% per degree raised on the thermostat. In an Inland Empire summer where AC runs 8–10 hours a day, that adds up. Ceiling fans don't cool the air — they cool people by moving air across skin. Turn them off when you leave the room. If your AC is underperforming regardless, our AC repair team can assess whether the system itself needs attention.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "Ceiling Fan Installation",
    url: "/services/electrical/ceiling-fan-installation",
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
  name: "Ceiling Fan Installation",
  description:
    "Professional ceiling fan installation and replacement for residential properties across Murrieta, Temecula, and the Inland Empire. New installs, fan replacements, smart fan wiring, and outdoor fans.",
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
  serviceType: "Ceiling Fan Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function CeilingFanInstallationPage() {
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
        <CeilingFanInstallation />
      </main>
    </div>
  );
}
