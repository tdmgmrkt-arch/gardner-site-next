import { HomeRewiring } from "@/components/HomeRewiring";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Rewiring Murrieta, CA | Knob-and-Tube & Aluminum Wiring",
  description:
    "Home rewiring in Murrieta, Temecula & the Inland Empire. Knob-and-tube removal, aluminum wiring replacement, partial and full rewires. Call (951) 246-4337.",
  openGraph: {
    title:
      "Home Rewiring Murrieta, CA | Knob-and-Tube & Aluminum Wiring | Gardner Plumbing Co.",
    description:
      "Licensed electricians replace old wiring across Murrieta and the Inland Empire. Full and partial rewires, code compliance, insurance-ready documentation. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/home-rewiring",
  },
  alternates: {
    canonical: "/services/electrical/home-rewiring",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How do I know if my home needs rewiring in Murrieta?",
    answer:
      "The clearest signals are age and wiring type. Homes built before 1975 in Murrieta, Riverside, Hemet, and Corona commonly have knob-and-tube or aluminum wiring. Beyond age, watch for these: outlets that feel warm to the touch, lights that flicker when appliances run, breakers that trip more than once per month on a normal circuit, or a home insurance renewal that asks about wiring type. An insurance carrier denying or limiting coverage based on wiring is the most common trigger for homeowners calling us. A wiring assessment takes one visit — we tell you exactly what's present and what it would take to bring the home current. See also our electrical safety inspection page at /services/electrical/electrical-safety-inspection.",
  },
  {
    question: "How long does a full home rewire take?",
    answer:
      "A full rewire on a typical Inland Empire single-family home — 1,500 to 2,500 square feet — takes 3 to 7 days of electrical work, depending on access conditions and panel status. Permit processing adds 3 to 7 business days before we can start. Total project timeline from signed scope to final inspection runs 2 to 3 weeks in most cases. Partial rewires (single room or zone) typically take 1 to 2 days on-site. We schedule city inspections as part of the project — homeowners do not need to manage that step independently. If you're also doing a panel upgrade, we coordinate both at the same time.",
  },
  {
    question: "Does a home rewire require opening the walls?",
    answer:
      "Partial wall opening is almost always necessary for a full rewire — there is no reliable method to route new wiring through finished walls without some access points. Our electricians minimize cut points by using existing penetrations, attic access, and crawl space routing where available. We document every access point with photos and provide recommendations for drywall patching. For partial rewires limited to one room or zone, wall impact is significantly less. Homes with accessible attics and crawl spaces require less cutting than slab-on-grade construction. We include an access assessment in the quote visit so you know what to expect before work begins.",
  },
  {
    question: "Will my homeowner's insurance cover the rewiring cost?",
    answer:
      "Standard homeowner's insurance policies do not cover rewiring as a maintenance item — it is considered a preventive upgrade, not a covered loss. Where insurance becomes relevant is on the back end: completing the rewire and submitting documentation to your carrier can reinstate coverage that was suspended, reduce your premium, or satisfy a policy endorsement condition. Some carriers issue a notice requiring rewiring within a set timeframe as a condition of continued coverage. If your carrier has issued such a notice, send us a copy — we've handled this scenario before and can scope the work to satisfy the carrier's specific requirements. Financing options are available; see our financing page at /financing.",
  },
  {
    question: "What is the difference between a full rewire and a partial rewire?",
    answer:
      "A full rewire replaces every branch circuit in the home — from the panel to every outlet, switch, and fixture. This is the right scope when knob-and-tube or aluminum wiring is present throughout, when the panel is also being upgraded to 200-amp service, or when an insurance carrier requires whole-home compliance. A partial rewire replaces wiring in a defined area — a kitchen, bathroom, garage, or single circuit addition. Partial rewires are appropriate for remodels where work is isolated to one zone, or when a specific problem circuit needs to be corrected without touching the rest of the home. Our remodeling electrical page at /services/electrical/remodeling-electrical covers partial rewires as part of a broader renovation.",
  },
  {
    question: "How much does home rewiring cost in Murrieta?",
    answer:
      "Costs vary significantly based on scope. A single-circuit addition or correction runs $300 to $800. A partial rewire covering one room or zone typically ranges from $1,500 to $4,000. A full home rewire — all circuits replaced, permit pulled, inspection completed — generally runs $8,000 to $18,000 for a standard Inland Empire single-family home, with cost driven by square footage, access conditions, and whether a panel upgrade is included. We provide itemized written quotes after the assessment visit. There is no charge for the assessment on rewiring projects. For projects where cost is a concern, our financing page at /financing covers available payment options — including 0% deferred financing on qualifying electrical work.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  {
    name: "Home Rewiring",
    url: "/services/electrical/home-rewiring",
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
  name: "Home Rewiring",
  description:
    "Professional home rewiring services for residential properties across Murrieta, Temecula, and the Inland Empire. Knob-and-tube removal, aluminum wiring replacement, full and partial rewires.",
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
  serviceType: "Home Rewiring",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function HomeRewiringPage() {
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
        <HomeRewiring />
      </main>
    </div>
  );
}
