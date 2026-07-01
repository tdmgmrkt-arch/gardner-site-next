import { MenifeeDrainCleaning } from "@/components/MenifeeDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "Menifee Drain Cleaning | Expert Plumbing Service | Gardner Plumbing",
  description: "Professional drain cleaning in Menifee, CA. Serving Sun City, Quail Valley, Heritage Lake & all areas. 24/7 emergency service. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/menifee-drain-cleaning'
  },
  openGraph: {
    title: "Menifee Drain Cleaning | Gardner Plumbing Co.",
    description: "Expert drain cleaning throughout Menifee. Fast response, professional service, 30-day guarantee.",
    url: '/services/menifee-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "What makes Menifee drain clogs different from other areas?",
    answer: "Menifee's mix of older and newer construction creates unique challenges. Established areas around Newport Road have aging sewer systems vulnerable to root intrusion, while newer developments near I-215 sometimes experience issues from construction debris or improper installation. Additionally, Menifee's hard water accelerates mineral buildup in pipes throughout the city."
  },
  {
    question: "How do I know if I need hydro-jetting versus regular drain snaking?",
    answer: "Hydro-jetting is recommended for recurring clogs, slow drainage throughout your home, visible grease buildup, or main sewer line problems. Regular snaking works well for isolated clogs in single fixtures. During our initial assessment, we'll inspect your drains and recommend the most effective and economical solution for your specific situation in Menifee."
  },
  {
    question: "What parts of Menifee do you service for drain cleaning?",
    answer: "We service all of Menifee including Sun City, Quail Valley, Heritage Lake, Wheatfield, Newport Road corridor, areas near Menifee Town Center, and all neighborhoods throughout the city. Our technicians are familiar with the infrastructure differences across Menifee and come prepared for local plumbing characteristics."
  },
  {
    question: "Is professional drain cleaning worth the cost?",
    answer: "Absolutely. Professional drain cleaning prevents expensive emergency repairs, protects your home from water damage caused by backups, extends the life of your plumbing system, and actually costs less over time than repeated use of chemical cleaners that don't solve underlying problems. Most Menifee homeowners find professional cleaning saves money in the long run."
  },
  {
    question: "How can I prevent drains from clogging in my Menifee home?",
    answer: "Install drain screens to catch hair and debris, never pour grease down kitchen drains, run hot water after disposal use, schedule annual professional drain cleaning, avoid flushing anything except toilet paper, and have trees near sewer lines inspected regularly. We provide customized prevention plans based on your home's age, location, and plumbing configuration."
  },
  {
    question: "Do you guarantee your drain cleaning work?",
    answer: "Yes. Every drain cleaning job includes our 30-day guarantee. If the same drain clogs again within 30 days, we'll return to address it at no additional cost. This warranty demonstrates our commitment to thorough, quality work that solves problems completely rather than providing temporary fixes."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Menifee Drain Cleaning", url: "/services/menifee-drain-cleaning" }
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
  "name": "Menifee Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in Menifee, CA. Same-day service, 24/7 emergency response.",
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
    "name": "Menifee",
    "sameAs": "https://en.wikipedia.org/wiki/Menifee,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "Menifee, CA"
  }
};

export default function MenifeeDrainCleaningPage() {
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
        <MenifeeDrainCleaning />
      </main>
    </div>
  );
}
