import { OutletsAndSwitches } from "@/components/OutletsAndSwitches";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outlet Installation Murrieta, CA | GFCI, USB & Switches",
  description:
    "Outlet and switch installation in Murrieta, Temecula & the Inland Empire. GFCI outlets, USB ports, dimmer switches & smart switches. Call (951) 246-4337.",
  openGraph: {
    title:
      "Outlet Installation Murrieta, CA | GFCI, USB & Switches | Gardner Plumbing Co.",
    description:
      "Licensed electricians install GFCI outlets, USB-integrated outlets, dimmer switches, and smart switches across Murrieta and the Inland Empire. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/outlets-and-switches",
  },
  alternates: {
    canonical: "/services/electrical/outlets-and-switches",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How much does outlet installation cost in Murrieta?",
    answer:
      "A standard outlet replacement in Murrieta runs $100–$175, including the device and labor. Adding a new outlet on an existing circuit costs $150–$250 depending on how far the wiring run extends. A new dedicated circuit with its own breaker — common for home office setups or kitchen counter outlets — typically runs $250–$400. GFCI outlet replacements average $125–$200 per outlet when done in multiples. We provide a written quote before opening any walls.",
  },
  {
    question: "Where does California code require GFCI outlets?",
    answer:
      "California follows the NEC closely: GFCI protection is required in kitchens (any outlet within 6 feet of a sink), bathrooms, garages, outdoor locations, unfinished basements, crawl spaces, and anywhere near a pool or spa. Many Inland Empire homes built before 1999 are missing GFCI protection in one or more of these locations. A failed GFCI outlet can also disable multiple downstream outlets on the same circuit — that's often the cause of a \"dead outlet\" that has no obvious fault. For dead outlets that may signal a wiring issue, see our electrical repairs page.",
  },
  {
    question: "Can I add a USB outlet to an existing wall outlet location?",
    answer:
      "Yes. USB-integrated outlets replace a standard duplex outlet in the same wall box — no new wiring run required in most cases. The outlet draws from the same circuit and provides one or two USB ports (some models include USB-C) alongside standard plugs. Installation takes under an hour per outlet. Brands we commonly install include Leviton and Lutron USB outlets, which charge at higher rated amperage than cheap import models.",
  },
  {
    question: "My outlet stopped working — is that an electrical emergency?",
    answer:
      "Usually not — but it depends on what else is affected. A single dead outlet is often a tripped GFCI somewhere upstream on the same circuit. Reset the GFCI outlet in the nearest bathroom or kitchen and test again. If the outlet still doesn't work, or if you smell burning or see scorch marks, call us same-day. Don't use an outlet that shows burn marks or feels warm to the touch. If you need it addressed right away, our electrical repairs team handles same-day diagnostic calls.",
  },
  {
    question: "Do I need a permit to add an outlet in Murrieta?",
    answer:
      "Adding a new circuit or extending wiring to a new outlet location typically requires a permit from the City of Murrieta Building & Safety Division. Replacing an existing outlet on the same circuit generally does not. Permits are the property owner's responsibility under California law; we can coordinate the paperwork when needed and will list any permit fees as a pass-through line on your quote. For larger electrical projects — like adding outlets alongside new lighting installation — permit coordination can be handled together for the full scope.",
  },
  {
    question:
      "What's the difference between a smart switch and a regular dimmer switch?",
    answer:
      "A standard dimmer switch reduces voltage to dim a fixture — it has no wireless capability. A smart switch connects to your home's Wi-Fi and allows remote control, scheduling, and voice commands through Google Home or Amazon Alexa. Smart switches also function as manual dimmers from the wall. They require a neutral wire in the switch box — older Murrieta homes built before the mid-1990s sometimes lack neutral wires at switch locations, which requires a wiring update. If you're planning a broader smart home setup, see our smart home electrical services page.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "Outlets & Switches",
    url: "/services/electrical/outlets-and-switches",
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
  name: "Outlet and Switch Installation",
  description:
    "Professional outlet and switch installation for residential properties across Murrieta, Temecula, and the Inland Empire. GFCI outlets, USB-integrated outlets, dimmer switches, and smart switches.",
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
  serviceType: "Outlet and Switch Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function OutletsAndSwitchesPage() {
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
        <OutletsAndSwitches />
      </main>
    </div>
  );
}
