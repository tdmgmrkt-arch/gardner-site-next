import { EmergencyElectrical } from "@/components/EmergencyElectrical";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Electrician Murrieta, CA | 24/7 Licensed Response",
  description:
    "Emergency electrician in Murrieta available 24/7. Sparking outlets, burning smells, power loss — licensed electricians respond fast. Call (951) 246-4337 now.",
  openGraph: {
    title: "Emergency Electrician Murrieta, CA | 24/7 Licensed Response | Gardner Plumbing Co.",
    description:
      "24/7 emergency electrician in Murrieta and the Inland Empire. Sparking outlets, power outages, burning electrical smells. Licensed, fast response. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/electrical/emergency-electrical",
  },
  alternates: {
    canonical: "/services/electrical/emergency-electrical",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "What counts as an electrical emergency — when should I call 24/7?",
    answer:
      "Call immediately if you smell burning from an outlet, wall, or panel; if an outlet or switch is sparking or arcing; if your home loses power partially or completely without a utility outage explanation; if a breaker trips repeatedly within minutes of being reset; or if water has contacted any electrical component. These are safety hazards, not inconveniences. If there is any chance of fire, call 911 first, then call (951) 246-4337 for the electrical response once you are safe. For non-urgent electrical faults — a single dead outlet, a flickering light — schedule a standard electrical repair visit at /services/electrical/electrical-repairs.",
  },
  {
    question: "Is it safe to reset my breaker during an electrical emergency?",
    answer:
      "Reset a tripped breaker once to see if it holds. If it trips again immediately, do not reset it a second time — that is your panel protecting against a fault, and forcing it risks overheating the wiring or damaging the breaker. Leave the breaker in the off position, avoid using the circuit, and call a licensed electrician. A breaker that trips on reset typically signals a short circuit, a ground fault, or a failed appliance on that circuit drawing excessive current. Each of those requires a diagnostic visit, not repeated resets.",
  },
  {
    question:
      "What should I do while waiting for an emergency electrician to arrive?",
    answer:
      "Turn off the breaker to any circuit that is sparking, smells like burning, or is behaving abnormally — if you can safely reach the panel. Do not use the affected outlets or switches. If there is any smoke, any sign of fire, or you cannot safely access the panel, leave the home and call 911. Keep pets and children away from the affected area. When you call us at (951) 246-4337, the dispatcher will walk you through any immediate steps based on what you are describing.",
  },
  {
    question: "How much does an emergency electrician cost in Murrieta?",
    answer:
      "Emergency electrical service carries an after-hours rate above standard daytime pricing — this is standard across licensed electrical contractors in Riverside County. We quote the emergency service rate before dispatch so there are no surprises on the invoice. The exact rate depends on time of call, day of week, and nature of the work. For comparison: the cost of an emergency call is far lower than the cost of a fire caused by an ignored electrical fault. Call (951) 246-4337 and we give you the rate upfront.",
  },
  {
    question: "Do Inland Empire summer storms cause electrical emergencies?",
    answer:
      "Yes — regularly. Murrieta and the surrounding Inland Empire experience summer monsoon thunderstorms, primarily July through September. Lightning strikes cause power surges that damage panels, appliances, and sensitive electronics. Downed lines and utility restoration events after storms create partial-power situations where one leg of the 240V service is live and one is not — a dangerous condition that can burn out appliances without tripping a breaker. We also respond to PSPS (Public Safety Power Shutoff) restoration issues when SCE restores power and something in the home doesn't come back correctly. Whole-home surge protection at /services/electrical/surge-protection significantly reduces post-storm damage.",
  },
  {
    question:
      "What if my electrical emergency also involves water damage or a burst pipe?",
    answer:
      "Water and electricity in the same space must be treated as a combined emergency. De-energizing the affected circuits is always the first step — water conducts electricity and wet wiring is a shock hazard. Our team coordinates with our plumbing side for situations involving burst pipes near electrical panels or wiring. See our water damage service at /services/plumbing/water-damage for the full combined-response protocol. Call (951) 246-4337 and describe both the electrical and water situation — the dispatcher routes the right team.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical", url: "/services/electrical" },
  { name: "Emergency Electrical", url: "/services/electrical/emergency-electrical" },
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
  name: "Emergency Electrical Service",
  description:
    "24/7 emergency electrician serving Murrieta, Temecula, and the Inland Empire. Sparking outlets, burning smells, power loss, water and electrical contact — licensed electricians with average 60-minute arrival across the primary service area.",
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
  serviceType: "Emergency Electrical Service",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$$",
  },
};

export default function EmergencyElectricalPage() {
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
        <EmergencyElectrical />
      </main>
    </div>
  );
}
