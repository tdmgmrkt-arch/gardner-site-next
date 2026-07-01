import { RiversideDrainCleaning } from "@/components/RiversideDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Riverside Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Riverside, CA. Serving Downtown, Orangecrest, La Sierra & Canyon Crest. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/riverside-drain-cleaning'
  },
  openGraph: {
    title: "Riverside Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Riverside. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/riverside-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "How do you handle drain cleaning in historic Riverside homes?",
    answer: "Downtown Riverside and established neighborhoods contain some of the Inland Empire's oldest residential and commercial buildings, with plumbing infrastructure dating back a century or more. These historic properties require specialized approaches that differ dramatically from modern drain cleaning. We begin with comprehensive video camera inspections to assess pipe material, condition, and any deterioration before selecting cleaning methods. Historic homes often feature cast iron, clay, or even original lead pipes that can be fragile. We use gentler cleaning techniques with carefully controlled pressure that effectively removes blockages without stressing aging materials. Our technicians understand the value of preserving historic infrastructure while solving drainage problems."
  },
  {
    question: "What drain challenges are common in the UCR and Canyon Crest areas?",
    answer: "The University of California Riverside area and surrounding Canyon Crest neighborhood present unique drainage challenges related to high-density student housing and frequent tenant turnover. Student rental properties experience heavier usage than typical single-family homes, with more people sharing facilities and sometimes lacking knowledge about proper drain care. Multiple showers, laundry loads, and kitchen usage concentrate in short timeframes, stressing drainage systems. Hair, soap buildup, and improper disposal of materials accelerate clog formation. Property owners in this area benefit from regular preventive maintenance between tenants and educational materials about drain care. We work extensively with UCR-area landlords and property managers on maintenance programs."
  },
  {
    question: "Do you service both commercial downtown buildings and residential areas?",
    answer: "Yes, our Riverside service encompasses everything from multi-story downtown commercial buildings to suburban residential developments in Orangecrest and La Sierra. Downtown Riverside features historic commercial structures, modern office buildings, restaurants, retail shops, and mixed-use developments, each with distinct drainage requirements. We maintain commercial-grade equipment including high-capacity hydro-jetters for restaurant grease lines and extended cable systems for multi-floor buildings. Our residential services cover all Riverside neighborhoods from century-old homes near downtown to newer subdivisions. This diverse experience means we understand the full range of drainage challenges across the city."
  },
  {
    question: "Should I clean or replace old pipes in my historic Riverside home?",
    answer: "This critical question depends on your pipes' actual condition, which we determine through video camera inspection. Many older Riverside homes have cast iron or clay sewer lines that remain structurally sound despite their age. If inspection shows pipes are intact with good structural integrity, professional cleaning often restores full function for years to come. However, pipes showing significant corrosion, cracks, root intrusion damage, or structural deterioration may require replacement rather than repeated cleaning. We provide honest assessments based on what we find, explaining both options with realistic cost comparisons. Sometimes partial replacement of damaged sections while preserving sound pipes offers the best value."
  },
  {
    question: "What special considerations apply to student housing drain service?",
    answer: "Student rental properties near UCR and throughout the Canyon Crest area face accelerated drain wear from high occupancy and frequent turnover. Property owners benefit from scheduling preventive drain cleaning between tenants rather than waiting for emergencies. This proactive approach identifies problems before new tenants arrive and establishes baseline documentation of drain condition. Student tenants often benefit from simple education about drain care basics like using drain screens, avoiding grease disposal, and recognizing early warning signs. We work with many Riverside landlords to provide both regular maintenance and emergency response when needed, understanding the importance of keeping rental properties operational."
  },
  {
    question: "How do you handle mixed-use properties in downtown Riverside?",
    answer: "Downtown Riverside features numerous mixed-use buildings combining ground-floor commercial spaces with upper residential units, creating complex drainage scenarios. Commercial tenants like restaurants generate heavy grease loads, while residential units above have typical household drainage. These combined systems require understanding how different usage patterns interact. We coordinate service timing to minimize disruption to both businesses and residents. Commercial spaces often need service during off-hours to avoid interrupting operations. Our technicians understand the unique challenges of these shared systems and can trace problems through multiple floors and units to identify root causes rather than treating symptoms."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Riverside Drain Cleaning", url: "/services/riverside-drain-cleaning" }
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
  "name": "Riverside Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Riverside, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Riverside",
    "sameAs": "https://en.wikipedia.org/wiki/Riverside,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Riverside, CA"
  }
};

export default function RiversideDrainCleaningPage() {
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
        <RiversideDrainCleaning />
      </main>
    </div>
  );
}
