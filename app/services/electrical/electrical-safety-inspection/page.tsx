import { ElectricalSafetyInspection } from "@/components/ElectricalSafetyInspection";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Inspection Murrieta, CA | Safety & Code Audit",
  description:
    "Electrical inspection in Murrieta, Temecula & the Inland Empire. Pre-sale, pre-purchase, insurance, and code compliance inspections. Licensed electricians. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Inspection Murrieta, CA | Safety & Code Audit | Gardner Plumbing Co.",
    description:
      "Licensed electrical safety inspections in Murrieta and the Inland Empire. NEC code audits, panel inspections, real estate transaction reports. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/electrical-safety-inspection",
  },
  alternates: {
    canonical: "/services/electrical/electrical-safety-inspection",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What does a home electrical safety inspection include?",
    answer:
      "A full electrical safety inspection covers the main service panel (breaker condition, panel brand, amperage rating, bus bar and wiring condition), all accessible wiring (visible in attic, crawlspace, garage, and junction boxes), outlet and switch condition throughout the home, GFCI protection verification in required locations (kitchen, bathrooms, garage, outdoors, near water), AFCI breaker compliance where required by current code, and a review of any visible code deficiencies. The inspection concludes with a written report. For Murrieta homes built in the 1990s, the inspection pays particular attention to 25–30-year-old breaker panels that are nearing end-of-life for their components.",
  },
  {
    question: "How long does an electrical inspection take?",
    answer:
      "A standard single-family home inspection takes 1.5 to 2.5 hours depending on home size, age, and accessibility. Homes over 2,500 square feet, homes with multiple panels or sub-panels, or homes with a crawlspace or full attic requiring inspection typically run closer to 2.5–3 hours. We block a full half-day for the inspection so there is no time pressure. The written report is typically delivered within 24 hours of the inspection.",
  },
  {
    question:
      "Do I need an electrical inspection when buying or selling a home in Murrieta?",
    answer:
      "A general home inspection is standard in any California real estate transaction, but the general inspector's electrical check is limited — they look for obvious defects, not code compliance. A dedicated electrical inspection by a licensed electrician provides a deeper, code-accurate assessment. For sellers, it prevents surprises in the buyer's contingency period. For buyers, it provides an independent evaluation that a general home inspector cannot deliver at the same technical depth. Many real estate attorneys in Riverside County now recommend a standalone electrical inspection on homes over 20 years old.",
  },
  {
    question:
      "What electrical panels are considered high-risk in California homes?",
    answer:
      "Three panel brands are associated with elevated failure risk and are frequently flagged by insurers and real estate lenders in California. Federal Pacific Electric (FPE) Stab-Lok panels, manufactured widely through the 1980s, have a documented history of breakers failing to trip during overloads. Zinsco panels (also sold as GTE-Sylvania) have similar breaker failure patterns. Split-bus panels, common in 1960s–1970s construction, lack a main breaker and require multiple switches to de-energize. If your Hemet, Riverside, or older Murrieta home has any of these, an inspection and panel upgrade quote is worth doing before your next insurance renewal.",
  },
  {
    question:
      "Can I combine an electrical inspection with a plumbing maintenance visit?",
    answer:
      "Yes — and many Inland Empire homeowners do exactly this. Our home maintenance plan covers plumbing; scheduling an electrical safety inspection the same day keeps your home on a single annual maintenance cycle instead of two separate visits and two separate invoices. Call (951) 246-4337 to ask about bundling an electrical inspection with a plumbing maintenance visit. It is one of the more practical ways a multi-trade contractor adds value over calling a separate electrician and a separate plumber.",
  },
  {
    question: "What happens if my home fails the electrical inspection?",
    answer:
      "Failing an inspection means deficiencies were found — it does not mean the home is immediately unsafe to occupy in most cases. The inspection report categorizes findings by severity: immediate safety concern (stop using the circuit), near-term repair recommended (within 30–60 days), and long-term upgrade advised (plan within 1–2 years). We provide a repair estimate on the same visit for any item in the report. For insurance-required inspections, we can also re-inspect after repairs are complete and issue an updated clearance report. See our electrical repair services at /services/electrical/electrical-repairs for repair scope.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Safety Inspections", url: "/services/electrical/electrical-safety-inspection" },
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
  name: "Electrical Safety Inspection",
  description:
    "Licensed electrical safety inspections for residential properties across Murrieta, Temecula, and the Inland Empire. Pre-sale, pre-purchase, insurance underwriting, NEC code compliance, and post-storm inspections with written reports.",
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
  serviceType: "Electrical Safety Inspection",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function ElectricalSafetyInspectionPage() {
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
        <ElectricalSafetyInspection />
      </main>
    </div>
  );
}
