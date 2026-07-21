import { RemodelingElectrical } from "@/components/RemodelingElectrical";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Contractor Murrieta Remodel | Rough-In & Finish Wiring",
  description:
    "Remodeling electrician in Murrieta, Temecula & the Inland Empire. Rough-in wiring, finish electrical, ADU and room addition circuits. Multi-trade coordination. Call (951) 246-4337.",
  openGraph: {
    title:
      "Electrical Contractor Murrieta Remodel | Rough-In & Finish Wiring | Gardner Plumbing Co.",
    description:
      "Licensed remodeling electrician in Murrieta and the Inland Empire. Rough-in, finish wiring, permit coordination, and multi-trade coordination with plumbing and HVAC. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/remodeling-electrical",
  },
  alternates: {
    canonical: "/services/electrical/remodeling-electrical",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "Do I need a permit for electrical work during a kitchen or bathroom remodel in Murrieta?",
    answer:
      "Yes. Any new circuit, panel modification, or wiring change in a remodel requires a permit from the City of Murrieta Building Department. That includes new outlet circuits in a kitchen remodel, exhaust fan wiring in a bathroom, or a dedicated circuit for a new appliance. The permit triggers a rough-in inspection (before drywall) and a final inspection (after finish wiring) — both are required for the permit to close. Unpermitted remodel electrical creates problems at resale and may not be covered if a wiring fault causes a loss. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. See also our note on home rewiring at /services/electrical/home-rewiring if the remodel exposes outdated wiring that needs replacement.",
  },
  {
    question:
      "What is the difference between rough-in and finish electrical wiring?",
    answer:
      "Rough-in wiring is the work done before drywall is installed — routing new circuits from the panel, setting electrical boxes in the right locations, and running wire through wall cavities and ceiling joists. Finish wiring is the work done after drywall is up and painted — installing outlet and switch devices, connecting light fixtures, wiring appliances, and testing every circuit. Both phases require a separate inspection. Missing the rough-in window (by drywalling before inspection) means cutting open walls later. We coordinate with your drywall contractor to ensure rough-in inspection happens before walls close — this is one of the most common project failures we prevent.",
  },
  {
    question:
      "How does hiring one contractor for electrical, plumbing, and HVAC save money on a remodel?",
    answer:
      "Multi-trade conflicts are a major source of remodel cost overruns. When separate contractors manage their own schedules, plumbing and electrical rough-in often collide — one trade installs pipes in locations that block the other's planned wire runs. Resolving those conflicts mid-project means rework, delay, and change orders. When the same contractor handles all three trades, the rough-in sequence is coordinated before anyone touches a wall. HVAC ductwork, plumbing drains, and electrical circuits are routed around each other in the planning phase rather than the demo phase. Our HVAC installation services at /services/hvac/ac-installation and plumbing services at /services/maintenance-plans are available on the same project timeline as your remodel electrical.",
  },
  {
    question: "What electrical work does an ADU require in Riverside County?",
    answer:
      "An ADU (accessory dwelling unit) in Riverside County requires its own electrical permit, separate from the main home's existing permit history. Typically this includes: a dedicated sub-panel fed from the main service (or a separate meter from SCE for a detached ADU), circuits for all habitable spaces per CA Title 24 energy code, GFCI protection in kitchens and bathrooms per NEC, arc-fault circuit interrupter (AFCI) protection in sleeping areas, and smoke/CO detector wiring per California residential code. Detached ADUs often require SCE coordination for the service connection. We handle the full electrical scope — sub-panel installation and utility coordination. Permits are the property owner's responsibility; we can coordinate the paperwork and will list any permit fees as a pass-through line on your quote.",
  },
  {
    question:
      "Can you handle the electrical if we're also adding plumbing and HVAC to the remodel?",
    answer:
      "Yes — that's the scenario where our multi-trade structure saves the most time. Kitchen remodels requiring new gas lines or water supply changes, bathroom additions needing drain rough-in alongside electrical, or new HVAC mini-split systems needing dedicated circuits — we coordinate all three trades on the same project. One schedule, one point of contact. Our HVAC services at /services/hvac/ac-installation include mini-split and heat pump installations that require dedicated electrical circuits, which our electricians rough-in and finish as part of the same job. If the remodel also exposes outdated wiring, our home rewiring page at /services/electrical/home-rewiring outlines how we handle that scope.",
  },
  {
    question: "How much does remodel electrical work cost in Murrieta?",
    answer:
      "Remodel electrical cost depends on scope. A standard kitchen remodel electrical package — new circuits for refrigerator, dishwasher, microwave, and counter outlets plus recessed lighting rough-in — typically runs $2,500 to $5,000 for labor and materials (permit fees listed separately as a pass-through line where required). A bathroom addition with exhaust fan, GFCI circuits, and light fixture wiring typically runs $800 to $2,000. An ADU with sub-panel installation runs $3,000 to $7,000 depending on distance from the main panel and whether a separate SCE meter is required. All quotes are written and issued per phase — rough-in and finish — before work begins. Panel upgrades at /services/electrical/electrical-panel-upgrade may be required if the remodel adds significant load; we flag that in the assessment.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "Remodeling Electrical",
    url: "/services/electrical/remodeling-electrical",
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
  name: "Remodeling Electrical",
  description:
    "Professional remodeling and new construction electrical services across Murrieta, Temecula, and the Inland Empire. Rough-in wiring, finish electrical, ADU circuits, and multi-trade coordination.",
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
  serviceType: "Remodeling Electrical",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function RemodelingElectricalPage() {
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
        <RemodelingElectrical />
      </main>
    </div>
  );
}
