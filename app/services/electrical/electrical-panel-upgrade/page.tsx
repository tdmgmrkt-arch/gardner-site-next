import { ElectricalPanelUpgrade } from "@/components/ElectricalPanelUpgrade";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Panel Upgrade Murrieta, CA | 200A Service Upgrades",
  description:
    "Electrical panel upgrade in Murrieta, Temecula & the Inland Empire. 100A to 200A upgrades, breaker box replacement, SCE service entrance work. Call (951) 246-4337.",
  openGraph: {
    title:
      "Electrical Panel Upgrade Murrieta, CA | 200A Service Upgrades | Gardner Plumbing Co.",
    description:
      "Licensed electricians upgrade panels from 100A to 200A across Murrieta and the Inland Empire. Code-compliant work, SCE coordination, upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/electrical-panel-upgrade",
  },
  alternates: {
    canonical: "/services/electrical/electrical-panel-upgrade",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know if I need a panel upgrade in Murrieta?",
    answer:
      "Four situations consistently point to a panel upgrade. First, you're adding a high-draw appliance — an EV charger, heat pump, or hot tub — and there's no capacity left in the panel. Second, breakers trip regularly under normal household load. Third, you're planning an ADU or room addition that requires new circuits. Fourth, your home still has a 100-amp service, which is undersized for most modern Inland Empire households. Our electricians do a load calculation at the start of every job — that number tells us exactly what your panel can and cannot support. For EV charger installs specifically, see our EV charger installation page at /services/electrical/ev-charger-installation.",
  },
  {
    question: "What does a 200-amp panel upgrade cost in Murrieta?",
    answer:
      "Most 100A to 200A residential panel upgrades in Murrieta run between $2,500 and $4,500, including labor and SCE coordination — permit fees are listed as a pass-through line on your quote. That range moves based on whether the meter base needs replacing, how much service entrance conductor work is involved, and whether any branch circuit corrections are required to pass inspection. We provide a written quote after the load calculation — you see the full number before we schedule the work. SCE rebates may also apply depending on your service type; we note any eligible programs in your quote.",
  },
  {
    question: "Do I need a permit for a panel upgrade in Murrieta?",
    answer:
      "Yes. A panel upgrade is a major electrical service change and requires a permit from the City of Murrieta Building Department plus a final inspection before SCE restores power. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. Unpermitted panel work is a liability issue: it typically voids your homeowner's insurance for fire-related claims and must be disclosed (and corrected) during any home sale. If you've had unpermitted panel work done previously, we can assess the situation and bring it into compliance.",
  },
  {
    question: "How long does an electrical panel upgrade take?",
    answer:
      "Most residential panel upgrades — 100A to 200A, standard conditions — take one full day on-site. Our electricians arrive in the morning, coordinate the SCE utility disconnect, swap the panel, dress the circuits, label the directory, and have the city inspection scheduled before we leave. Total time from permit processing to final inspection is typically 5 to 10 business days depending on city workload. SCE reconnect after the inspection is generally the same day or next morning. Your home will have a planned outage only during the swap itself — usually 4 to 6 hours.",
  },
  {
    question: "What panel brands do you install?",
    answer:
      "Our electricians install Square D QO and Homeline panels as the primary preference — both are widely available, well-supported for future breaker additions, and accepted by Murrieta and Riverside County inspectors without issue. Leviton and Eaton panels are also used for specific load configurations. We do not install panels from brands with known historical defect issues (Zinsco, Federal Pacific Stab-Lok). If your home currently has one of these panels, the upgrade is a safety priority regardless of capacity. Our home rewiring page at /services/electrical/home-rewiring covers what to do when the wiring behind the panel also needs attention.",
  },
  {
    question: "Will a panel upgrade lower my electric bill?",
    answer:
      "A panel upgrade itself does not directly reduce electricity consumption — it increases your home's electrical capacity. Indirectly, it enables the appliance changes that do reduce bills: replacing a gas appliance with a modern heat pump, adding an EV charger that uses off-peak rates, or eliminating overloaded circuits that cause phantom draw. If energy savings are a priority, ask our electricians about load management during the quote visit — we can flag which circuits are drawing more than expected and where the upgrade creates the most efficiency opportunity. Financing is available for panel upgrades; see our financing page at /financing.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "Electrical Panel Upgrade",
    url: "/services/electrical/electrical-panel-upgrade",
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
  name: "Electrical Panel Upgrade",
  description:
    "Professional electrical panel upgrade services for residential properties across Murrieta, Temecula, and the Inland Empire. 100A to 200A upgrades, breaker box replacement, SCE coordination, and code-compliant work.",
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
  serviceType: "Electrical Panel Upgrade",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function ElectricalPanelUpgradePage() {
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
        <ElectricalPanelUpgrade />
      </main>
    </div>
  );
}
