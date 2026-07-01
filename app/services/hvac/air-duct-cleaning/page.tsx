import { AirDuctCleaning } from "@/components/AirDuctCleaning";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning Murrieta, CA | HVAC Team Service",
  description:
    "Air duct cleaning in Murrieta, Temecula & the Inland Empire. NADCA-standard cleaning, before-and-after video documentation, and same-week scheduling. Call (951) 246-4337.",
  openGraph: {
    title:
      "Air Duct Cleaning Murrieta, CA | HVAC Team Service | Gardner Plumbing Co.",
    description:
      "Whole-home air duct cleaning in Murrieta and across the Inland Empire. NADCA-standard process, video documentation, licensed HVAC technicians. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/air-duct-cleaning",
  },
  alternates: {
    canonical: "/services/hvac/air-duct-cleaning",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question:
      "How often should air ducts be cleaned in an Inland Empire home?",
    answer:
      "The EPA and NADCA recommend considering duct cleaning every 3 to 5 years under normal conditions. In the Inland Empire, that interval shortens for homes near desert-facing areas like Lake Elsinore, Hemet, or Perris — where fine particulate and dust infiltration is higher. Homes that experienced wildfire smoke intrusion, recent renovation work, or a rodent issue should be cleaned regardless of the last service date. Our technician does a camera inspection first so you're not guessing. See our indoor air quality services at /services/hvac/indoor-air-quality for a full picture.",
  },
  {
    question:
      'What does "NADCA-standard" air duct cleaning actually mean?',
    answer:
      "NADCA (National Air Duct Cleaners Association) sets the industry methodology for professional duct cleaning. The standard requires the entire system to be put under negative pressure — meaning a high-efficiency vacuum creates suction throughout the ductwork before any agitation begins. This prevents loosened debris from blowing into your living space. Cleaning companies that skip the negative pressure step (or use hand-held shop vacs) are not performing NADCA-standard cleaning. Our HVAC team follows the full process on every job.",
  },
  {
    question: "Is my ductwork actually dirty, or is this a scam service?",
    answer:
      "Both things are true in different homes. Some ducts are genuinely clean after years of operation — especially homes with newer construction, good filtration, and no smoke events. Others have visible debris, pet dander accumulation, and in some cases mold. The honest answer is that we inspect first. Our camera goes into the duct before we quote cleaning. If it's clean, we tell you. If it's not, you'll see it on video. We don't sell cleaning to homes that don't need it.",
  },
  {
    question:
      "Can duct cleaning help with wildfire smoke smell in my home?",
    answer:
      "Yes — if smoke infiltrated your HVAC system during a fire event, particulates and odor compounds settle on duct walls, inside the air handler, and on the evaporator coil. Running the system after a smoke event circulates those particles continuously. Duct cleaning removes the deposited layer from the duct walls. A coil cleaning and an upgraded air filtration system address the remainder. Homes in Murrieta, Temecula, and Canyon Lake that experienced smoke from regional fires in the past three seasons are strong candidates for post-smoke cleaning.",
  },
  {
    question:
      "What's the difference between duct cleaning and AC maintenance?",
    answer:
      "AC maintenance focuses on the mechanical equipment — the condenser unit, evaporator coil, refrigerant level, and electrical components. Duct cleaning focuses on the distribution system — the metal and flex ducts, register boots, and air handler cabinet. They complement each other. Our AC maintenance service at /services/hvac/ac-maintenance includes a coil inspection and blower check; duct cleaning extends that work into the full delivery path. Many Inland Empire homeowners schedule both in the same visit for efficiency.",
  },
  {
    question: "How do I know if mold is growing in my ducts?",
    answer:
      "Common signs include a musty or damp smell when the system runs, visible dark staining around supply registers, or occupants reporting allergy symptoms that improve when the HVAC is off. Mold in ductwork typically traces back to a moisture source — a condensate drain issue, a duct leak near an unconditioned attic space, or high indoor humidity. Our camera inspection identifies whether growth is present and where. If mold is found, we address it and flag the moisture source. For plumbing-related moisture issues, our team bridges to our water damage services at /services/plumbing/water-damage.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  { name: "Air Duct Cleaning", url: "/services/hvac/air-duct-cleaning" },
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
  name: "Air Duct Cleaning",
  description:
    "Professional air duct cleaning services for residential properties across Murrieta, Temecula, and the Inland Empire. NADCA-standard methodology, negative pressure vacuuming, video documentation before and after.",
  provider: {
    "@type": "HVACBusiness",
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
  serviceType: "Air Duct Cleaning",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function AirDuctCleaningPage() {
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
        <AirDuctCleaning />
      </main>
    </div>
  );
}
