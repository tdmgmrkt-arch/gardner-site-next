import { GeneratorInstallation } from "@/components/GeneratorInstallation";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Installation Murrieta, CA | Transfer Switch & Hookup",
  description:
    "Generator installation in Murrieta, Temecula & the Inland Empire. Transfer switch, load management, sub-panel hookup, and code-compliant wiring. Call (951) 246-4337.",
  openGraph: {
    title:
      "Generator Installation Murrieta, CA | Transfer Switch & Hookup | Gardner Plumbing Co.",
    description:
      "Licensed electricians connect standby generators across Murrieta and the Inland Empire. Transfer switch installation, load management, NEC 702 compliant hookup. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/generator-installation",
  },
  alternates: {
    canonical: "/services/electrical/generator-installation",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What does a generator installation electrician actually do?",
    answer:
      "Our scope is the electrical connection between the generator and your home's circuits — not the generator itself. Specifically: we install the transfer switch (manual or automatic) that safely disconnects your home from SCE's grid when the generator is running, run the wiring from the transfer switch to selected critical circuits, and install the inlet box or ATS connection point where the generator plugs in. Permit coordination is available where required — permit fees are listed as a pass-through line on your quote. What we do not do: recommend which generator to buy, deliver or set up the generator unit, supply fuel, or service the generator engine. That side belongs to the generator dealer or a qualified service tech.",
  },
  {
    question: "What is a transfer switch and why is it required?",
    answer:
      "A transfer switch is the device that disconnects your home from SoCal Edison's grid before your generator starts powering your circuits. Without it, generator power can flow backward through your meter onto utility lines — a condition called back-feed. Back-feed has killed utility workers responding to outages, and it can cause fires if the grid restores power while your generator is running. NEC Article 702 (Optional Standby Systems) requires a proper disconnecting means for all generator hookups. The City of Murrieta enforces this requirement through permits and inspections. Running a generator with extension cords through windows bypasses all of this — it is unsafe and it is a code violation. Every hookup we install includes a compliant transfer switch or interlock kit.",
  },
  {
    question:
      "Do I need a generator to keep my HVAC running during an outage?",
    answer:
      "Yes — if your home has a heat pump or central air conditioning system, those systems are entirely electrical and stop working the moment the grid goes down. In an Inland Empire summer, losing AC during a PSPS event is a health concern, not just a comfort issue. Heat pumps, in particular, have no gas backup — if the grid is down, the home has no heating or cooling unless a generator is powering the HVAC circuit. A properly sized standby generator with the HVAC circuit on the transfer switch keeps your heat pump system at /services/hvac/heat-pump-systems or central AC at /services/hvac/ac-repair running through an outage. Our electricians configure the load management to prioritize HVAC among the critical circuits.",
  },
  {
    question:
      "What is the difference between a standby generator and a portable generator hookup?",
    answer:
      "A standby generator is a permanently installed unit — mounted outside the home on a pad, connected to a fuel supply, and wired through an automatic transfer switch. It detects grid loss and starts automatically. Most standby units run on natural gas or propane. A portable generator is a wheeled unit stored until needed, started manually, and connected through an inlet box and transfer switch or interlock kit. Both require proper electrical hookup — the difference is in how the generator is deployed, not in whether a transfer switch is needed. Portable hookups are lower cost to install; standby systems are more convenient. Our electricians install the electrical side of both — see the service cards above for scope details.",
  },
  {
    question: "Does generator hookup require a permit in Murrieta?",
    answer:
      "Yes. Generator hookup — whether standby or portable inlet box — is a permit-required electrical project in Murrieta and throughout Riverside County. The permit triggers a city inspection that confirms the transfer switch, disconnect, and wiring meet NEC 702. Unpermitted generator hookups are a liability issue: they void the electrical portion of your homeowner's insurance and put you at risk if a back-feed event damages utility equipment. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. Permit processing in Murrieta typically takes 3 to 7 business days.",
  },
  {
    question: "How much does generator electrical hookup cost in Murrieta?",
    answer:
      "A portable generator inlet box with interlock kit — the most common entry-level hookup — typically runs $800 to $1,500 for labor and materials (permit fees listed separately as a pass-through line where required). A manual transfer switch with selected critical circuits runs $1,500 to $3,000 depending on the number of circuits included. An automatic transfer switch (ATS) for a whole-home standby generator runs $2,500 to $5,000 for the electrical work, not including the generator unit itself. All quotes are written before work begins. If the hookup also requires a panel upgrade at /services/electrical/electrical-panel-upgrade — which some standby systems do depending on amperage — we scope both together. Financing is available; see our financing page at /financing.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "Generator Installation",
    url: "/services/electrical/generator-installation",
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
  name: "Generator Installation",
  description:
    "Professional generator electrical hookup services for residential properties across Murrieta, Temecula, and the Inland Empire. Transfer switch installation, load management, sub-panel hookup, and code-compliant wiring.",
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
  serviceType: "Generator Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function GeneratorInstallationPage() {
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
        <GeneratorInstallation />
      </main>
    </div>
  );
}
