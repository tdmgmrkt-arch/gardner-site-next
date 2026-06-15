import { ElectricalRepairs } from "@/components/ElectricalRepairs";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Repair Murrieta, CA | Diagnostics & Fast Fixes",
  description:
    "Electrical repair in Murrieta, Temecula & the Inland Empire. Breakers tripping, outlets dead, dimming lights — licensed electricians diagnose the root cause. Call (951) 246-4337.",
  openGraph: {
    title: "Electrical Repair Murrieta, CA | Diagnostics & Fast Fixes | Gardner Plumbing Co.",
    description:
      "Licensed electricians for electrical repairs in Murrieta and across the Inland Empire. Breakers, outlets, dimming lights, dead circuits. Upfront pricing. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/electrical-repairs",
  },
  alternates: {
    canonical: "/services/electrical/electrical-repairs",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Why does my breaker keep tripping in my Murrieta home?",
    answer:
      "A breaker trips for three reasons: the circuit is overloaded (more current draw than the breaker is rated for), there is a short circuit (a wire touching another wire or a ground), or the breaker itself is failing. In Inland Empire homes, the most common trigger in summer is an AC unit or EV charger sharing a circuit with other appliances. Do not keep resetting a breaker that trips repeatedly — that is your system telling you something is wrong. Call for a same-day diagnostic before the problem worsens. For panels that trip frequently across multiple circuits, see our electrical panel upgrade service at /services/electrical/electrical-panel-upgrade.",
  },
  {
    question:
      "What does it mean if my outlets stop working but the breaker hasn't tripped?",
    answer:
      "A dead outlet with no tripped breaker usually means one of three things: a GFCI outlet upstream on the same circuit has tripped and cut power to the downstream outlets (check bathrooms and kitchens), a wire connection has come loose inside the outlet box, or the outlet device itself has failed. Murrieta homes built in the 1990s frequently have GFCI outlets that are now 25+ years old and fail silently. Our outlet and switch service can locate and restore any dead circuit the same day.",
  },
  {
    question: "Are flickering lights in my home a serious electrical problem?",
    answer:
      "Occasional flicker when a large appliance starts (refrigerator compressor, AC unit) is normal — it reflects a brief voltage drop as the motor draws startup current. Persistent flickering, or lights that dim when you run the microwave or hair dryer, points to an overloaded circuit or a loose neutral connection. A loose neutral is the more serious finding — it can cause voltage fluctuations that damage electronics and, in worst cases, start a fire. Do not ignore recurring flicker. An electrician can test the circuit in under an hour and tell you definitively what is happening.",
  },
  {
    question:
      "Can I replace an electrical outlet myself, or do I need a licensed electrician?",
    answer:
      "In California, a homeowner can legally perform electrical work on their own home — but the work must still meet code and pass inspection. GFCI outlet replacements in kitchens, bathrooms, garages, and outdoor locations require the outlet be installed correctly and tested to confirm it trips and resets properly. If the dead outlet points to a wiring fault or an overloaded circuit upstream, that is a diagnostic job that requires test equipment and electrical knowledge. If you are not certain the outlet is the only problem, call a licensed electrician. A diagnostic visit is far cheaper than a code violation or a fire.",
  },
  {
    question: "How do I know if my home's wiring needs more than a repair?",
    answer:
      "A single failed outlet or a breaker that trips once is a repair. When you are seeing multiple outlets fail in different rooms, breakers tripping on circuits that aren't overloaded, lights that flicker building-wide, or you have aluminum wiring from the 1960s–70s (common in older Hemet and Riverside homes), the issue is likely systemic. Our electricians will tell you directly: if the repair cost approaches the cost of correcting the underlying wiring problem, we say so. See our home rewiring service at /services/electrical/home-rewiring for scope and pricing detail.",
  },
  {
    question:
      "How fast can an electrician respond to a repair call in Murrieta?",
    answer:
      "Same-day service is available for most repair calls placed before noon. For calls placed in the afternoon, we target next-morning dispatch. If the situation is unsafe — sparking outlet, burning smell, breaker that will not hold — that qualifies as an emergency electrical call and gets priority dispatch around the clock. Our base in Murrieta puts us within 30–45 minutes of most Temecula, Menifee, and Lake Elsinore addresses. Call (951) 246-4337 to confirm same-day availability.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Electrical Repairs", url: "/services/electrical/electrical-repairs" },
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
  name: "Electrical Repair",
  description:
    "Professional electrical repair services for residential properties across Murrieta, Temecula, and the Inland Empire. Breaker and panel repairs, outlet and switch repairs, flickering light diagnosis, and dead circuit troubleshooting.",
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
  serviceType: "Electrical Repair",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function ElectricalRepairsPage() {
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
        <ElectricalRepairs />
      </main>
    </div>
  );
}
