import { MorenoValleyDrainCleaning } from "@/components/MorenoValleyDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Moreno Valley Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in Moreno Valley, CA. Serving Sunnymead Ranch, Rancho Belago, Towngate & Box Springs. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/moreno-valley-drain-cleaning'
  },
  openGraph: {
    title: "Moreno Valley Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout Moreno Valley. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/moreno-valley-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "Why do newer homes in Moreno Valley have drain problems?",
    answer: "Moreno Valley has experienced rapid residential development over recent decades, with extensive tract housing throughout Sunnymead Ranch, Rancho Belago, Towngate, and Moreno Valley Ranch. Newer homes can experience drain issues for several reasons. Construction debris like concrete, drywall, or grout sometimes enters drain lines during building. Post-construction soil settlement can shift drain pipes, creating low spots where debris accumulates. Landscaping installation may disturb drainage systems. Additionally, new homeowners may not yet understand their plumbing system's limitations. We specialize in addressing these new-construction-specific issues throughout Moreno Valley's developments."
  },
  {
    question: "Can you coordinate drain service with my builder's warranty?",
    answer: "Yes, we regularly work with builders and warranty departments for Moreno Valley's numerous residential developments. When drain problems occur during your warranty period, we can provide detailed video camera inspections and documentation that identifies whether issues result from defects, improper installation, or normal usage. This documentation helps support warranty claims when appropriate. We communicate directly with builders and warranty administrators, providing technical information they need to process claims. Our experience with Moreno Valley's major developers and tract builders streamlines this coordination process."
  },
  {
    question: "What preventive drain care should new Moreno Valley homeowners practice?",
    answer: "New homeowners in Moreno Valley's developments should establish good habits immediately. Avoid putting construction debris, paint, or renovation materials down drains during move-in. Don't treat drains like trash cans even in new homes. Be cautious during landscaping installation to avoid damaging buried drain lines. Schedule a professional camera inspection after your first year to verify everything installed correctly and identify any construction debris that entered lines. Consider annual preventive cleaning, especially if you have large families or frequent guests. Establishing these practices early prevents problems that commonly emerge in years two through five of new home ownership."
  },
  {
    question: "Do different Moreno Valley developments have different plumbing systems?",
    answer: "Yes, Moreno Valley's extensive development spans several decades, and plumbing materials and methods have evolved. Older developments in areas like Sunnymead may have different pipe materials than newer tracts in Moreno Valley Ranch or Towngate. Some communities feature HOA-maintained systems while others are fully private. Lot sizes vary significantly across developments, affecting drain line lengths and configurations. Our technicians are familiar with the specific characteristics of major Moreno Valley developments and adjust our approach accordingly. We keep records of different tract specifications to provide more efficient service."
  },
  {
    question: "Can problems with irrigation systems affect my drains?",
    answer: "Absolutely, and this is particularly relevant in Moreno Valley where many newer homes feature extensive landscaping and irrigation systems. Irrigation line breaks can saturate soil around drain pipes, causing settling or washout that stresses the drainage system. Tree and shrub roots stimulated by irrigation often invade nearby sewer lines seeking water. Improper irrigation installation may damage buried drain pipes. We've seen cases where irrigation runoff overwhelms outdoor drains or where irrigation boxes were mistakenly connected to sewer systems. When diagnosing persistent drainage issues, we often recommend checking irrigation systems as potential contributing factors."
  },
  {
    question: "Do you provide drain inspection services for home purchases?",
    answer: "Yes, pre-purchase drain inspections are particularly valuable in Moreno Valley's active real estate market. Even in newer homes, our video camera inspections can reveal construction defects, improper installations, or hidden problems before you complete your purchase. We provide detailed reports with video documentation that you can share with sellers or use to negotiate repairs. For homes in older Moreno Valley developments, inspections identify aging infrastructure that may need attention soon. Many Moreno Valley homebuyers include our inspection services in their due diligence process, giving them confidence in their investment and negotiating power when issues surface."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Moreno Valley Drain Cleaning", url: "/services/moreno-valley-drain-cleaning" }
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
  "name": "Moreno Valley Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Moreno Valley, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Moreno Valley",
    "sameAs": "https://en.wikipedia.org/wiki/Moreno_Valley,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Moreno Valley, CA"
  }
};

export default function MorenoValleyDrainCleaningPage() {
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
        <MorenoValleyDrainCleaning />
      </main>
    </div>
  );
}
