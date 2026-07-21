import { ElectricalHub } from "@/components/ElectricalHub";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Contractor Inland Empire | Murrieta Electrician",
  description:
    "Licensed electrical contractor serving Murrieta, Temecula & the Inland Empire. Panels, EV chargers, lighting, repairs & 24/7 emergency electrical. Call (951) 246-4337.",
  openGraph: {
    title:
      "Electrical Contractor Inland Empire | Murrieta Electrician | Gardner Plumbing Co.",
    description:
      "Complete electrical services across Murrieta and the Inland Empire. Licensed electricians, upfront pricing, 24/7 emergency line. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical",
  },
  alternates: {
    canonical: "/services/electrical",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "Your name says 'Plumbing' — are you actually licensed to do electrical work?",
    answer:
      "Yes. Gardner Plumbing Co. holds a California CSLB C-10 (Electrical) contractor license (license number {{CSLB_C10_LICENSE_TBD}}), separate from the C-36 plumbing license. California issues specific license classes for a reason — a C-10 license requires passing a trade exam on electrical code, safety, and installation standards. The company name reflects our origins, not our current scope. Our electrical team operates as a licensed electrical contractor and signs work under the C-10 license. Ask for the license number before booking any electrician in the Inland Empire — licensed or not is a meaningful difference.",
  },
  {
    question: "What types of electrical work do you handle?",
    answer:
      "Residential electrical across three main categories. Fixtures and installation: lighting, outlets, switches, ceiling fans, smart home wiring, and pool & spa electrical. Power systems: panel upgrades, home rewiring, EV charger installation, generator hookups, and remodeling and new construction wiring. Repairs and safety: electrical troubleshooting, emergency service, safety inspections, and whole-home surge protection. For large commercial systems — three-phase power, commercial switchgear, industrial loads — we focus on residential and small-scale commercial only. Call (951) 246-4337 if you're unsure whether your job fits our scope.",
  },
  {
    question:
      "Do I need a permit for common electrical jobs in Murrieta?",
    answer:
      "Most panel upgrades, EV charger installations, new circuit runs, and service entrance work require a permit through the City of Murrieta Building & Safety division or Riverside County Building Department. Straightforward like-for-like fixture replacements (swapping a light fixture, replacing an outlet) generally do not. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. Unpermitted electrical work creates problems when you sell the home and voids equipment warranties.",
  },
  {
    question:
      "When is electrical work a DIY job, and when do I need a licensed electrician?",
    answer:
      "Swapping a light bulb, replacing a like-for-like outlet cover, or resetting a GFCI outlet are reasonable DIY tasks. Anything involving the electrical panel, running new wire inside walls, installing a new circuit, or connecting to the service entrance requires a licensed electrician and typically a permit. The risk with unlicensed panel work or improper wiring is not just a failed inspection — it's arc faults and electrical fires. Murrieta's 1990s–2000s housing stock has enough aging wiring that a professional inspection before any DIY project is worth the cost.",
  },
  {
    question:
      "Do you offer 24/7 emergency electrical service in Murrieta?",
    answer:
      "Yes. Our emergency electrical line at (951) 246-4337 is live 24 hours a day, 7 days a week. Electrical emergencies — a breaker panel that won't hold, burning smell from an outlet, complete power failure to part of the home, or sparking at a fixture — need same-day attention. Daytime emergency calls average under 2 hours from dispatch. After-hours calls are typically on-site within 2–4 hours. For electrical emergencies involving burning smells or visible sparks, evacuate the affected area before calling.",
  },
  {
    question:
      "What cities in the Inland Empire does your electrical team service?",
    answer:
      "The electrical team serves Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Perris, Canyon Lake, Corona, Moreno Valley, Riverside, Hemet, and San Jacinto. Dispatch is based in Murrieta, so response times are fastest for the southwest Riverside County corridor. For the outer edges of the service area, same-day availability depends on current call volume. Call (951) 246-4337 to confirm availability for your location.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
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
  name: "Electrical Services",
  description:
    "Complete residential electrical services for Murrieta, Temecula, and the Inland Empire. Fixtures, panel upgrades, EV chargers, home rewiring, emergency electrician, safety inspections, and surge protection.",
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
  serviceType: "Electrical Services",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function ElectricalIndexPage() {
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
        <ElectricalHub />
      </main>
    </div>
  );
}
