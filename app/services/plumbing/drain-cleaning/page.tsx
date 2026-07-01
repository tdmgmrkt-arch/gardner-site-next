import { Drain } from "@/components/Drain";
import Script from "next/script";

export const metadata = {
  title: "Drain Cleaning Services",
  description: "Expert drain cleaning and repair services from Gardner Plumbing Co. Fast, reliable drain solutions in Riverside County.",
  alternates: {
    canonical: '/services/drain-cleaning'
  },
  openGraph: {
    title: "Drain Cleaning Services | Gardner Plumbing Co.",
    description: "Expert drain cleaning and repair services from Gardner Plumbing Co.",
    url: '/services/drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "How do I know if I need professional drain cleaning?",
    answer: "Signs include slow-draining sinks, gurgling sounds, foul odors from drains, water backing up in tubs or showers, or clogs that keep coming back even after using a plunger or store-bought drain cleaner."
  },
  {
    question: "Can you clear all types of drain clogs?",
    answer: "Yes! We handle everything from kitchen grease and soap scum buildup to bathroom hair clogs, toilet blockages, and even tree root intrusions in sewer lines. We use the right tools for each situation to ensure a complete cleaning."
  },
  {
    question: "Is chemical drain cleaner safe to use?",
    answer: "No. Over-the-counter chemical cleaners can corrode your pipes, damage plumbing fixtures, and are harmful to the environment. Professional drain cleaning is a safer, more effective solution that protects your plumbing system."
  },
  {
    question: "How often should I have my drains cleaned?",
    answer: "For most homes, we recommend professional drain cleaning once every 1–2 years as preventive maintenance. Homes with heavy usage or frequent clogs may need service more often."
  },
  {
    question: "Do you offer camera inspections?",
    answer: "Yes. For stubborn or recurring clogs, we use video camera inspections to look inside your pipes and identify the exact cause of the problem. This allows us to provide a long-term solution, not just a quick fix."
  },
  {
    question: "What is hydro jetting and when is it needed?",
    answer: "Hydro jetting uses high-pressure water to blast away stubborn buildup, grease, and tree roots from sewer lines. It's ideal for tough clogs that standard snaking can't clear, and it leaves pipes cleaner than any other method."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Drain Cleaning", url: "/services/drain-cleaning" }
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

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Drain Cleaning Services",
  "description": "Professional drain cleaning and clog removal services for residential and commercial properties in Riverside County.",
  "provider": {
    "@type": "Plumber",
    "name": "Gardner Plumbing Co.",
    "telephone": "+1-951-428-5551",
    "url": "https://gardnerplumbingco.com"
  },
  "areaServed": [
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
    "San Jacinto, CA",
    "Wildomar, CA"
  ],
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
};

export default function DrainPage() {
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
        <Drain />
      </main>
    </div>
  );
}
