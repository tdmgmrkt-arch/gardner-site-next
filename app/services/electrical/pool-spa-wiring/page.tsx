import { PoolSpaWiring } from "@/components/PoolSpaWiring";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool & Spa Wiring Murrieta, CA | NEC 680 Compliant",
  description:
    "Pool and spa wiring in Murrieta & the Inland Empire. NEC Article 680 compliant bonding, GFCI circuits, sub-panel installation & pool pump wiring. Call (951) 246-4337.",
  openGraph: {
    title:
      "Pool & Spa Wiring Murrieta, CA | NEC 680 Compliant | Gardner Plumbing Co.",
    description:
      "Licensed electricians handle NEC 680 pool bonding, GFCI requirements, spa hookup, and pool sub-panel wiring across Murrieta and the Inland Empire. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/pool-spa-wiring",
  },
  alternates: {
    canonical: "/services/electrical/pool-spa-wiring",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What is NEC Article 680 and why does it govern pool wiring?",
    answer:
      "NEC Article 680 is the section of the National Electrical Code that covers electrical installations near permanently installed pools, spas, fountains, and similar water features. It specifies minimum distances for outlets, luminaires, and equipment from the water's edge — typically 5 to 20 feet depending on the device type. It requires GFCI protection on all pool circuits, equipotential bonding for all metal components, and specific grounding requirements. California adopts and enforces NEC 680 with minor state amendments. Pool electrical work that doesn't comply with NEC 680 will fail a city inspection and creates a genuine shock hazard.",
  },
  {
    question: "What is pool bonding and why is it required?",
    answer:
      "Pool bonding connects all metal components of a pool — the steel rebar in the shell, the pump and motor housing, the heater, the handrails, the light fixtures, and the ladder anchors — into a single equipotential grid. The goal is to eliminate voltage differences between any two metal surfaces that a swimmer could touch simultaneously. A voltage potential of even 1 volt between two metal surfaces in or near the water can cause electric shock drowning. The bonding grid eliminates that potential difference. NEC 680.26 governs the bonding requirements in detail. We test bonding continuity with a dedicated meter before closing any excavation.",
  },
  {
    question: "How much does pool and spa electrical wiring cost in Murrieta?",
    answer:
      "Pool electrical costs in the Murrieta area depend on scope. A new pool sub-panel installation typically runs $1,500–$3,000, including feeder circuit from the main panel, breakers for pump, heater, and lighting circuits, and weatherproof enclosure. Spa or hot tub electrical hookup ranges from $800–$1,800 depending on distance from the panel and circuit requirements. Bonding grid installation adds $400–$900 depending on pool size and existing metal components. Fault diagnosis and repair on existing pool wiring starts at $150 for a diagnostic call. We provide an itemized written quote before any work begins.",
  },
  {
    question: "My pool pump is tripping the breaker — is that dangerous?",
    answer:
      "Yes. A pool pump that repeatedly trips its circuit breaker is drawing more current than the circuit is rated for — this points to a failing motor, a wiring fault, a short in the pump housing, or an undersized circuit. Running the pump after it trips the breaker can damage the motor and overheat the wiring. It is also a code violation in most cases to manually reset a breaker repeatedly without finding the fault. Call us before your next swim session — we diagnose pool pump electrical faults the same day. For full panel issues, see our electrical panel upgrade page.",
  },
  {
    question: "Do I need a permit to add electrical to my pool in Murrieta?",
    answer:
      "Yes — always. The City of Murrieta requires permits for all pool electrical work, including sub-panel installation, new circuits, bonding grid installation, and equipment hookup. Unpermitted pool electrical is a significant liability issue when selling a home and can result in your homeowner's insurance denying claims related to pool incidents. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. An electrical safety inspection before any new pool electrical work also documents the pre-existing condition of the system.",
  },
  {
    question: "Can I add pool lighting to an existing pool?",
    answer:
      "Yes. Underwater pool lighting in an existing pool uses either 120V or low-voltage (12V) fixtures — both require GFCI-protected circuits per NEC 680. The 12V systems use a transformer to step voltage down, which simplifies some installation requirements. LED pool lights use significantly less power than older incandescent pool lights and are a common retrofit. Our electricians run the circuit from the sub-panel to the light niche location, install the appropriate GFCI protection, and test the fixture at operating voltage before the pool is refilled. For other outdoor lighting near the pool area, see our landscape and outdoor lighting installation page.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Pool & Spa Wiring", url: "/services/electrical/pool-spa-wiring" },
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
  name: "Pool and Spa Electrical Wiring",
  description:
    "NEC Article 680 compliant pool and spa electrical wiring for residential properties across Murrieta, Temecula, and the Inland Empire. Bonding grids, GFCI circuits, sub-panel installation, and pool pump wiring.",
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
  serviceType: "Pool and Spa Electrical Wiring",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$$",
  },
};

export default function PoolSpaWiringPage() {
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
        <PoolSpaWiring />
      </main>
    </div>
  );
}
