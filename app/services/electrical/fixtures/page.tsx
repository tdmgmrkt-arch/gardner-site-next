import { FixturesHub } from "@/components/FixturesHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Installation Murrieta, CA | Fixtures & Lighting",
  description:
    "Electrical installation in Murrieta, Temecula & the Inland Empire. Lighting, outlets, ceiling fans, pool wiring & smart home electrical. Call (951) 246-4337.",
  openGraph: {
    title:
      "Electrical Installation Murrieta, CA | Fixtures & Lighting | Gardner Plumbing Co.",
    description:
      "Licensed electrical installation across Murrieta and the Inland Empire. Lighting, outlets, fans, smart home wiring, and pool & spa circuits. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/fixtures",
  },
  alternates: {
    canonical: "/services/electrical/fixtures",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "Does installing a light fixture or outlet need a licensed electrician?",
    answer:
      "It depends on the job. Swapping a like-for-like light fixture on an existing circuit with an existing junction box — generally no permit, and a competent homeowner can handle it. Adding a new circuit, installing a new junction box, running wire inside walls, or installing GFCI outlets in wet locations (kitchen, bathroom, garage, pool area) requires a licensed electrician. The test: if you're touching the wiring inside the wall or adding to the panel, call a licensed electrician.",
  },
  {
    question: "Can you upgrade lighting and outlets during a home remodel?",
    answer:
      "Yes — a remodel is the best time to upgrade. When walls are open during a kitchen or bathroom remodel, adding circuits, repositioning outlets, and upgrading to LED recessed lighting is straightforward work that avoids cutting into finished drywall later. Our electricians regularly coordinate with Murrieta-area general contractors during remodel rough-in phases to complete electrical before drywall goes up. If your remodel involves electrical changes, call us before the GC closes walls.",
  },
  {
    question:
      "What's the difference between traditional fixtures and smart home electrical?",
    answer:
      "Traditional fixtures run on standard on/off switches with no remote control or scheduling. Smart home electrical adds a programmable layer — smart switches that respond to voice commands, apps, or automated schedules; outlets with USB-C charging built in; lighting circuits wired for dimming scenes. The electrical infrastructure is similar; the devices at the end of the circuit are different. Our smart home electrical service handles both the wiring and the device installation.",
  },
  {
    question:
      "Does pool wiring require special permits and inspections in Murrieta?",
    answer:
      "Yes. Pool and spa electrical falls under NEC Article 680, which has specific requirements for bonding, GFCI protection, wire clearances, and underwater fixture ratings. The City of Murrieta and Riverside County both require a permit and inspection for pool electrical work. Unpermitted pool wiring is a safety issue — improperly bonded pools have caused electrocution incidents nationally. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote.",
  },
  {
    question:
      "What does electrical fixture installation typically cost in Murrieta?",
    answer:
      "Cost varies by fixture type and what the installation involves. A single ceiling fan installation on an existing junction box typically runs $150–$300. Recessed lighting — materials and labor for a 4-to-6-light installation in a room with attic access — typically runs $400–$800. Adding a new 20-amp GFCI outlet circuit runs $200–$450 depending on the distance from the panel. Pool and spa electrical varies widely based on scope. All pricing is quoted upfront after an on-site assessment — no phone estimates without seeing the job.",
  },
  {
    question: "What area does your fixture installation service cover?",
    answer:
      "Our electrical installation team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta, so response times are fastest for southwest Riverside County. For the outer edges of the service area, same-day availability depends on current call volume. Call (951) 246-4337 to confirm availability for your location.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Fixtures & Installation", url: "/services/electrical/fixtures" },
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
  name: "Electrical Fixture Installation",
  description:
    "Residential electrical fixture installation for Murrieta, Temecula, and the Inland Empire. Lighting installation, outlets and switches, ceiling fans, smart home wiring, and pool & spa electrical.",
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
  serviceType: "Electrical Fixture Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function FixturesHubPage() {
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
        <FixturesHub />
      </main>
    </div>
  );
}
