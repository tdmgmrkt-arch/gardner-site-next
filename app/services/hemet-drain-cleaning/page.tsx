import { HemetDrainCleaning } from "@/components/HemetDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Hemet Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Hemet, CA. Serving Seven Hills, Diamond Valley, Valle Vista & Florida Avenue. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/hemet-drain-cleaning'
  },
  openGraph: {
    title: "Hemet Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Hemet. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/hemet-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Do you provide senior-friendly drain cleaning service in Hemet?",
    answer: "Absolutely. Hemet's substantial retirement community population means many of our customers are seniors, and we've developed service approaches that respect their specific needs. Our technicians communicate clearly and patiently, explaining exactly what we're doing and why. We understand many seniors live on fixed incomes and provide transparent, detailed pricing so there are never surprises. We take time to answer all questions and ensure customers feel comfortable with recommended work. Our service is accessible, with technicians who understand mobility considerations and respect for homes that have been cared for over many years. We treat Hemet's senior residents with the courtesy and professionalism they deserve."
  },
  {
    question: "Why do older Hemet homes have more frequent drain problems?",
    answer: "Hemet features extensive established neighborhoods where homes have aged gracefully alongside their plumbing systems. Older infrastructure naturally experiences more problems than newer installations. Cast iron and clay pipes common in Hemet's vintage homes can corrode, crack, or collapse over decades. Tree roots from mature Valley landscaping invade aging sewer lines searching for water. Decades of use create mineral buildup that gradually reduces drain capacity. Hemet Valley's extreme summer heat also stresses older pipes through expansion and contraction cycles. We understand these age-related challenges and approach older Hemet homes with techniques specifically designed for aging plumbing. Often, regular preventive maintenance extends the life of older systems significantly."
  },
  {
    question: "Can you work with customers on accessible pricing for fixed incomes?",
    answer: "Yes, we understand many Hemet residents live on retirement income and budget carefully. We provide completely transparent pricing with detailed written estimates before beginning any work, so customers know exactly what they're paying and why. We explain all options, including the difference between essential repairs and optional upgrades, empowering customers to make informed decisions within their budgets. When major work is needed, we discuss phasing approaches that address urgent problems first. We never pressure customers or recommend unnecessary services. Our goal is building long-term relationships with Hemet families based on trust and fair dealing, not maximizing single-job revenue."
  },
  {
    question: "Should I schedule regular drain maintenance for my older Hemet home?",
    answer: "Yes, preventive maintenance becomes increasingly valuable as plumbing systems age. Older Hemet homes benefit significantly from annual or even semi-annual drain cleaning that removes accumulating buildup before it causes complete blockages. Regular maintenance also provides opportunities to inspect pipe condition and identify developing problems while they're still minor and affordable to address. Hemet Valley's summer heat stresses aging pipes, making fall maintenance timing particularly beneficial to address any damage before problems emerge. For seniors on fixed incomes especially, predictable maintenance costs are far preferable to unexpected emergency repairs. We can establish scheduled service that fits your budget and prevents crisis situations."
  },
  {
    question: "How does Hemet Valley's heat affect drainage systems?",
    answer: "Hemet Valley experiences extreme summer temperatures that impact plumbing in several ways. Heat causes pipes to expand, and the subsequent cooling contraction can stress aging joints and connections, particularly in older cast iron and clay systems. Soil around drain lines contracts during hot, dry periods, shifting pipes and creating low spots where debris accumulates. Extreme heat also accelerates tree root growth toward any moisture source, including sewer lines. Valley heat can dry out wax seals and gaskets in older plumbing. We recommend scheduling preventive drain maintenance before and after Hemet's hottest months to address any heat-related stresses and verify your system weathered summer successfully."
  },
  {
    question: "Do you handle both routine maintenance and emergency situations?",
    answer: "Yes, we provide the full spectrum of drain services for Hemet residents. Many customers schedule us for annual preventive maintenance that keeps aging systems functioning reliably. We also understand that drain emergencies happen despite best maintenance efforts, especially in older homes. Our 24/7 emergency service covers all of Hemet Valley because we know a backed-up sewer doesn't respect convenient timing, particularly for senior residents who may have mobility limitations or health concerns. Whether you need scheduled maintenance for your Seven Hills home or emergency response in Diamond Valley, we provide the same respectful, professional service. Building relationships with Hemet families means being there when they need us most."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Hemet Drain Cleaning", url: "/services/hemet-drain-cleaning" }
];

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Generate Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://gardnerplumbingco.com${item.url}`
  }))
};

// Service Schema with Local Business
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hemet Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Hemet, CA. Same-day service, 24/7 emergency response.",
  "provider": {
    "@type": "Plumber",
    "name": "Gardner Plumbing Co.",
    "telephone": "+1-951-428-5551",
    "url": "https://gardnerplumbingco.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Murrieta",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Hemet",
    "sameAs": "https://en.wikipedia.org/wiki/Hemet,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Hemet, CA"
  }
};

export default function HemetDrainCleaningPage() {
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
        <HemetDrainCleaning />
      </main>
    </div>
  );
}
