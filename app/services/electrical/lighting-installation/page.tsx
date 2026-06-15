import { LightingInstallation } from "@/components/LightingInstallation";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lighting Installation Murrieta, CA | Indoor & Outdoor",
  description:
    "Lighting installation in Murrieta, Temecula & the Inland Empire. Recessed lighting, LED retrofit, landscape & outdoor lighting. Call (951) 246-4337.",
  openGraph: {
    title:
      "Lighting Installation Murrieta, CA | Indoor & Outdoor | Gardner Plumbing Co.",
    description:
      "Licensed electricians install recessed lighting, LED retrofits, landscape lighting, and outdoor fixtures across Murrieta and the Inland Empire. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/lighting-installation",
  },
  alternates: {
    canonical: "/services/electrical/lighting-installation",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How much does recessed lighting installation cost in Murrieta?",
    answer:
      "Recessed lighting installation in the Murrieta area typically runs $150–$300 per fixture for a standard installation — that includes the fixture, wiring, and switch loop if needed. Costs rise when walls need to be cut for new wiring runs or when the existing circuit requires a dedicated breaker. We provide a written quote before any work starts. If you're converting 6–8 existing fixtures to LED recessed cans, most homeowners in the IE pay between $900 and $1,800 for the complete project.",
  },
  {
    question: "Can I add recessed lighting without cutting into my ceiling?",
    answer:
      "In most Murrieta homes, shallow LED wafer fixtures can be installed without cutting into the ceiling above — they sit flush with a minimal cutout and connect to existing wiring runs. That said, adding new circuits or moving fixture locations almost always requires some ceiling access. Our electricians assess your existing wiring and ceiling structure before committing to an approach.",
  },
  {
    question:
      "What's the difference between LED retrofit kits and full recessed can replacement?",
    answer:
      "LED retrofit kits screw directly into an existing recessed can housing — they update the fixture to LED without replacing the can itself. Full replacement involves removing the old housing and installing a new one. Retrofits are faster and less disruptive. Full replacements are the right call when the existing housings are damaged, improperly rated for insulation contact, or too old to seal properly. Our electricians will tell you which approach makes sense before the job starts, not after.",
  },
  {
    question: "Do I need a permit for lighting installation in Murrieta?",
    answer:
      "Adding new circuits or moving a circuit breaker for lighting requires a permit from the City of Murrieta Building & Safety Division. Replacing like-for-like fixtures on existing circuits generally does not. Our electricians pull all required permits before work begins — we handle the paperwork, the inspection scheduling, and the final sign-off.",
  },
  {
    question: "Can outdoor lighting be added to my existing electrical panel?",
    answer:
      "In most cases, yes. Outdoor lighting circuits draw relatively low amperage, and most Murrieta homes built after 1990 have capacity for at least one or two new exterior circuits. Homes with older 100-amp panels or panels that are already close to capacity may need a panel upgrade before additional outdoor lighting is added safely. We check your panel capacity as part of the quote — no surprises on install day.",
  },
  {
    question: "How do smart dimmers work with LED lighting?",
    answer:
      "Smart dimmers require LED bulbs that are rated as 'dimmable' — not all LEDs are. A standard dimmer on a non-dimmable LED causes flickering, buzzing, or early bulb failure. Our electricians verify bulb-dimmer compatibility before installation and recommend Lutron or Leviton dimmers that work reliably with the fixtures we install.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Lighting Installation", url: "/services/electrical/lighting-installation" },
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
  name: "Lighting Installation",
  description:
    "Professional lighting installation for residential properties across Murrieta, Temecula, and the Inland Empire. Recessed lighting, LED retrofits, landscape lighting, and outdoor fixtures.",
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
  serviceType: "Lighting Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function LightingInstallationPage() {
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
        <LightingInstallation />
      </main>
    </div>
  );
}
