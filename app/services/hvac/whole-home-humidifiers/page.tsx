import { WholeHomeHumidifiers } from "@/components/WholeHomeHumidifiers";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Home Humidifier Murrieta, CA | HVAC Installation",
  description:
    "Whole home humidifier installation in Murrieta, Temecula & the Inland Empire. Steam, bypass, and fan-powered models integrated with your HVAC. Call (951) 246-4337.",
  openGraph: {
    title:
      "Whole Home Humidifier Murrieta, CA | HVAC Installation | Gardner Plumbing Co.",
    description:
      "Whole-home humidifier installation in Murrieta and across the Inland Empire. Steam, bypass, and fan-powered models integrated with your HVAC system. Call (951) 246-4337.",
    url: "https://gardnerplumbingco.com/services/hvac/whole-home-humidifiers",
  },
  alternates: {
    canonical: "/services/hvac/whole-home-humidifiers",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Does a home in the Inland Empire actually need a humidifier?",
    answer:
      "Many IE residents are surprised to learn that inland Southern California winters are genuinely dry — not the tropical humidity that coastal LA can bring. Murrieta, Temecula, and especially Hemet and Lake Elsinore see winter indoor humidity levels regularly drop below 25%. The EPA recommends indoor humidity in the 30–50% range for occupant health and home material preservation. If you're waking up with dry sinuses, noticing static electricity buildup, or watching wood furniture crack in winter, your home's humidity is likely too low. See all of our indoor air quality services at /services/hvac/indoor-air-quality for the full picture.",
  },
  {
    question:
      "What is the difference between bypass, fan-powered, and steam humidifiers?",
    answer:
      "Bypass humidifiers mount on your furnace plenum and work only when the furnace is running — they're the most common and affordable option, well-suited to homes under 2,500 sq ft. Fan-powered models have an internal fan that pushes air through the water panel regardless of furnace operation, giving more consistent output and better coverage in larger homes. Steam humidifiers boil water and inject steam directly into the ductwork — they're the most effective and most expensive, running independently of furnace heat. Our technician recommends the appropriate type based on your home's square footage, furnace type, and how tightly you need to control humidity.",
  },
  {
    question:
      "How is a whole-home humidifier different from a portable unit?",
    answer:
      "A portable humidifier covers roughly 400–600 square feet on a good day and requires daily or weekly water refilling. A whole-home unit connects to your water supply line and runs automatically — it adds moisture to every room your HVAC serves, calibrated to maintain a target humidity level without any manual intervention. For a 2,000 square-foot Murrieta home, you'd need 4–5 portable units placed strategically and refilled regularly to approximate what one whole-home system does automatically. Most homeowners who switch describe it as 'set it and forget it' humidity control.",
  },
  {
    question: "Can a whole-home humidifier help with asthma or eczema?",
    answer:
      "Dry air is a documented trigger for both conditions. Humidity below 30% increases the concentration of airborne particulates and exacerbates skin barrier breakdown in eczema patients. Whole-home humidification that maintains 35–45% relative humidity consistently has been shown in clinical literature to reduce the frequency of asthma and eczema flare-ups associated with dry air. We'd recommend pairing humidification with a whole-home dehumidifier awareness check — you want to stay in the 35–50% range, not push past 55% into mold territory.",
  },
  {
    question: "What maintenance does a whole-home humidifier require?",
    answer:
      "Bypass and fan-powered models use a replaceable water panel (also called a media pad or evaporator pad) that needs replacement once per heating season — typically October or November before winter humidity demands increase. Steam humidifiers require an annual canister flush to remove mineral buildup from the heating element. The humidistat should be calibrated annually to ensure accurate readings, which we do as part of our furnace maintenance visits at /services/hvac/furnace-maintenance. Total annual maintenance time is under 30 minutes per year for the homeowner; professional service runs about 20 minutes added to an annual HVAC visit.",
  },
  {
    question:
      "How much does whole-home humidifier installation cost in Murrieta?",
    answer:
      "Bypass and fan-powered models run in the $400–$700 installed range for most Inland Empire homes — the variance depends on the complexity of the plenum connection and the length of the water supply run. Steam humidifiers are more complex and typically run $600–$1,100 installed. These are general ranges — actual pricing depends on your specific furnace and ductwork layout, which our technician assesses on site before quoting. We provide a written quote before any work starts. Financing options are available through our financing page at /financing for customers who prefer to spread the cost.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC", url: "/services/hvac" },
  {
    name: "Whole-Home Humidifiers",
    url: "/services/hvac/whole-home-humidifiers",
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
  name: "Whole Home Humidifier Installation",
  description:
    "Whole-home humidifier installation for residential properties across Murrieta, Temecula, and the Inland Empire. Bypass, fan-powered, and steam models integrated with existing HVAC and plumbing systems.",
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
  serviceType: "Whole Home Humidifier Installation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: "$$",
  },
};

export default function WholeHomeHumidifiersPage() {
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
        <WholeHomeHumidifiers />
      </main>
    </div>
  );
}
