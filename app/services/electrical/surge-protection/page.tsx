import { SurgeProtection } from "@/components/SurgeProtection";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surge Protection Murrieta, CA | Whole-Home Surge Protector",
  description:
    "Whole-home surge protection in Murrieta, Temecula & the Inland Empire. Panel-mounted SPD installation protects your EV charger, AC, appliances & smart home. Call (951) 246-4337.",
  openGraph: {
    title: "Surge Protection Murrieta, CA | Whole-Home Surge Protector | Gardner Plumbing Co.",
    description:
      "Licensed surge protector installation in Murrieta and the Inland Empire. Panel-mounted whole-home SPD defends your EV charger, HVAC, and electronics. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/surge-protection",
  },
  alternates: {
    canonical: "/services/electrical/surge-protection",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What is the difference between whole-home surge protection and a power strip surge protector?",
    answer:
      "A power strip surge protector (also called a point-of-use protector) defends only the devices plugged into that strip. It does nothing for hardwired appliances — your AC system, EV charger, electric range, or refrigerator. A whole-home surge protective device (SPD) installs at the main electrical panel and intercepts transient voltage before it reaches any circuit in the home — protecting every hardwired and plugged-in device at once. The two are complementary: a panel-mounted SPD handles the large surges from lightning and utility grid events; quality point-of-use protectors at sensitive electronics add a second layer of defense for smaller transients. Using only power strips with no panel protection leaves the majority of your home's equipment unprotected.",
  },
  {
    question:
      "Does the Inland Empire get enough lightning to justify surge protection?",
    answer:
      "Yes. The Murrieta and wider Inland Empire area experiences summer monsoon thunderstorm activity from roughly July through September. Lightning does not need to strike your home directly to cause surge damage — a strike to a nearby utility line or transformer sends a voltage spike through the distribution system and into homes connected to it. The Inland Empire also experiences grid voltage fluctuation events during heat waves when SCE manages load across the network. These utility-side surges are invisible to homeowners and do damage over time to sensitive electronics, EV charging circuits, and variable-speed AC compressors. After any storm event, our emergency electrical team at /services/electrical/emergency-electrical is available 24/7 for post-surge assessment.",
  },
  {
    question: "Is surge protection required by California electrical code?",
    answer:
      "The 2020 National Electrical Code (NEC), adopted in California, added Section 230.67 requiring surge protection on new residential electrical services. This requirement applies to new construction and service panel replacements — not retroactively to existing homes. However, the insurance industry in California is paying close attention to surge protection as a risk mitigation factor for wildfire-prone and storm-prone regions. Homes with documented whole-home surge protection may have an advantage in insurance underwriting conversations. An electrical safety inspection at /services/electrical/electrical-safety-inspection can confirm whether your home's service panel meets NEC 230.67 if you are unsure.",
  },
  {
    question: "Will a surge protector protect my EV charger?",
    answer:
      "Yes — and EV chargers are among the most important devices to protect with whole-home surge protection. A Level 2 EV charger (240V, 48A) stays connected to a dedicated high-amperage circuit continuously. A single surge event can damage the EVSE unit (the wall-mounted charging unit), the car's onboard charger, or both. Replacing an EVSE unit costs $500–$2,000 depending on brand. A panel-mounted SPD protects the entire 240V circuit. If you are having an EV charger installed at /services/electrical/ev-charger-installation, adding whole-home surge protection during the same visit is the most cost-efficient time to do it.",
  },
  {
    question:
      "Can surge protection prevent damage from a PSPS (utility shutoff) event?",
    answer:
      "A PSPS (Public Safety Power Shutoff) event from SCE does not itself cause surge damage — it is a controlled de-energization. The risk is in the restoration. When SCE re-energizes the grid after a PSPS event, voltage restoration can be uneven, particularly in areas at the end of a distribution circuit. Whole-home surge protection at the panel handles the transient voltage spike that can accompany grid restoration. It is one of the practical reasons Inland Empire homeowners in Temecula, Menifee, and Lake Elsinore — areas that have experienced PSPS events — invest in panel-level surge protection. See our electrical panel upgrade service at /services/electrical/electrical-panel-upgrade if your panel is approaching the end of its service life — old panels often fail to protect against restoration transients even with an SPD installed.",
  },
  {
    question: "How much does whole-home surge protection cost in Murrieta?",
    answer:
      "A panel-mounted whole-home SPD installation in Murrieta typically runs $200–$600 for the device and installation labor — the range depends on the SPD unit selected (Type 1 vs. Type 2, joule rating, brand) and whether any panel prep work is needed. This is significantly less than a single appliance replacement after a surge event. When the installation is paired with a panel upgrade or an EV charger circuit install, total service cost is often reduced because the panel is already open and the labor overlap is minimal. Call (951) 246-4337 for a same-day quote — most SPD installations are completed in 1–2 hours.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Surge Protection", url: "/services/electrical/surge-protection" },
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
  name: "Whole-Home Surge Protection",
  description:
    "Panel-mounted whole-home surge protective device (SPD) installation across Murrieta, Temecula, and the Inland Empire. NEC 230.67 compliant installation protecting EV chargers, AC systems, smart home devices, and appliances.",
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
  serviceType: "Surge Protection Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function SurgeProtectionPage() {
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
        <SurgeProtection />
      </main>
    </div>
  );
}
