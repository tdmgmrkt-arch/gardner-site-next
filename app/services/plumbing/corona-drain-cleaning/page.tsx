import { CoronaDrainCleaning } from "@/components/CoronaDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Corona Drain Cleaning | Fast Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Corona, CA. Serving Corona Hills, Eagle Glen, South Corona & Historic Downtown. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/corona-drain-cleaning'
  },
  openGraph: {
    title: "Corona Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Corona. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/corona-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Do you provide commercial drain cleaning services in Corona?",
    answer: "Yes, we specialize in both commercial and residential drain cleaning throughout Corona. Our team regularly services restaurants along the 91 corridor, multi-unit complexes in Eagle Glen, retail centers in South Corona, and downtown businesses in the historic Circle City area. We have commercial-grade equipment including high-capacity hydro-jetters for heavy grease buildup, extended cable systems for large properties, and digital camera inspection tools that provide documentation for property managers and business owners."
  },
  {
    question: "How quickly can you respond across Corona's large service area?",
    answer: "Corona is one of Riverside County's largest cities, but we maintain rapid response times throughout all neighborhoods. We typically arrive within 60-90 minutes for emergency calls whether you're located in Corona Hills, Eagle Glen, South Corona, downtown Circle City, or anywhere along the 91 and 15 freeway corridors. Our service vehicles are strategically positioned to minimize travel time, and we provide 24/7 emergency service because drain problems in both residential and commercial properties can't wait."
  },
  {
    question: "Can you handle drain issues in high-traffic commercial areas?",
    answer: "Absolutely. Corona's position along major freeway corridors means many businesses experience high customer traffic, which puts extra stress on drainage systems. We regularly service restaurants, retail centers, gas stations, and other high-traffic commercial properties throughout the city. We understand the urgency of keeping businesses operational and can schedule service during off-hours when necessary. Our team works efficiently to minimize disruption to your business operations while thoroughly resolving drainage problems."
  },
  {
    question: "Do older downtown Corona properties require different drain cleaning approaches?",
    answer: "Yes, the historic downtown Circle City area contains buildings with aging plumbing infrastructure that requires specialized care. We start with comprehensive video camera inspections to assess pipe condition before selecting cleaning methods. For older cast iron or clay pipes, we use gentler techniques that effectively clear blockages without risking damage to fragile piping. In contrast, newer developments in areas like Eagle Glen and Corona Hills typically have PVC systems that can handle more aggressive cleaning. Our experience across Corona's diverse neighborhoods ensures appropriate service for your property's age and construction."
  },
  {
    question: "What preventive drain maintenance do you recommend for Corona properties?",
    answer: "Corona's climate and diverse property types call for proactive maintenance. Residential properties should schedule annual drain cleaning, while commercial properties benefit from quarterly service, especially restaurants and food service businesses dealing with grease buildup. Properties in older neighborhoods like downtown Corona should have regular camera inspections to monitor pipe condition and catch problems early. New developments should establish maintenance routines early to prevent buildup. Preventive hydro-jetting removes accumulating debris before it causes blockages, extending your plumbing system's lifespan and avoiding costly emergency repairs."
  },
  {
    question: "Does your drain cleaning service include warranty coverage?",
    answer: "Yes, all our drain cleaning work in Corona comes with a comprehensive 30-day guarantee. If the same drain clogs again within 30 days of our service, we return at no additional charge to resolve the issue. This warranty covers our workmanship and the effectiveness of our cleaning methods. For recurring problems that indicate underlying pipe damage rather than simple blockages, we provide honest assessments and can perform camera inspections to identify the root cause. Our goal is permanent solutions, not temporary fixes that require repeated service calls."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Corona Drain Cleaning", url: "/services/corona-drain-cleaning" }
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
  "name": "Corona Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Corona, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Corona",
    "sameAs": "https://en.wikipedia.org/wiki/Corona,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Corona, CA"
  }
};

export default function CoronaDrainCleaningPage() {
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
        <CoronaDrainCleaning />
      </main>
    </div>
  );
}
