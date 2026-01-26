import { SanJacintoDrainCleaning } from "@/components/SanJacintoDrainCleaning";
import Script from "next/script";

export const metadata = {
  title: "San Jacinto Drain Cleaning | Professional Service | Gardner Plumbing",
  description: "Expert drain cleaning in San Jacinto, CA. Serving valley-wide areas, Soboba Springs & all neighborhoods. Same-day service, 24/7 emergency. Call (951) 428-5551.",
  alternates: {
    canonical: '/services/san-jacinto-drain-cleaning'
  },
  openGraph: {
    title: "San Jacinto Drain Cleaning | Gardner Plumbing Co.",
    description: "Professional drain cleaning throughout San Jacinto. Fast response, licensed technicians, 30+ years experience.",
    url: '/services/san-jacinto-drain-cleaning',
    images: ['/gardner_logo.webp']
  }
};

// FAQ data for structured data
const faqs = [
  {
    question: "What makes San Jacinto's valley location create unique drain challenges?",
    answer: "San Jacinto sits in the San Jacinto Valley alongside Hemet, creating specific drainage characteristics that differ from hillside or coastal communities. The valley floor's relatively flat topography means drainage systems rely more on proper grade and flow than on natural elevation changes. Valley soil tends to retain moisture longer after rains, affecting ground conditions around drain pipes. Seasonal water table fluctuations can put pressure on sewer lines during wet periods. Summer heat is extreme in the valley, causing soil contraction that can shift pipes. These valley-specific factors require drain service providers who understand the local environment rather than applying generic approaches."
  },
  {
    question: "How do you coordinate service between San Jacinto and nearby Hemet?",
    answer: "San Jacinto and Hemet form a connected community within the valley, and we serve both cities as an integrated service area. Our technicians understand that many customers think of the area as Hemet Valley rather than separate municipalities. We provide seamless coverage across both cities with no additional charges or service differences based on city boundaries. When you call from San Jacinto, we don't transfer you or hand off to separate crews. The same experienced technicians serve the entire valley area. This integrated approach ensures consistent service quality and rapid response times throughout San Jacinto."
  },
  {
    question: "Why do you emphasize residential service for San Jacinto?",
    answer: "San Jacinto's character is predominantly residential and family-oriented, with neighborhoods like Soboba Springs representing typical valley family homes rather than dense commercial development. Our service approach reflects this residential focus. We schedule service around family routines, work efficiently to minimize disruption, and communicate clearly so homeowners understand what we're doing and why. Our technicians are experienced with the challenges family homes face including children's items accidentally flushed, heavy laundry loads from large families, and the general wear that active households create. We build relationships with San Jacinto families by providing reliable service that respects their homes and budgets."
  },
  {
    question: "What seasonal drain issues affect San Jacinto properties?",
    answer: "San Jacinto's valley location creates pronounced seasonal drainage patterns. Winter rains can saturate valley soil and temporarily raise water tables, putting pressure on sewer lines and sometimes revealing weak joints or cracks. Spring brings rapid tree and plant growth as temperatures warm, with roots aggressively seeking water sources including sewer lines. Summer heat is extreme in the valley, causing soil to contract and dry out, which can shift drain pipes and create new low spots where debris accumulates. Fall sees trees dropping leaves that can enter outdoor drains. We recommend scheduling preventive drain cleaning in spring or fall to prepare for the stresses of summer heat or winter rains."
  },
  {
    question: "Can tree roots from valley landscaping damage my drains?",
    answer: "Absolutely, and this is a common issue throughout San Jacinto. Valley landscaping includes many mature trees that have adapted to survive hot, dry summers by developing extensive root systems that seek any available moisture. Sewer lines provide consistent moisture that attracts roots, especially during dry summer months. Roots can penetrate even small cracks in pipes and then expand, creating blockages that worsen over time. Trees like cottonwoods, willows, and eucalyptus are particularly aggressive, but virtually any mature tree can invade sewer lines. Our hydro-jetting services cut through and remove roots while thoroughly cleaning pipes. Video camera inspections identify where roots have entered and assess whether pipe repair is needed beyond cleaning."
  },
  {
    question: "Do you provide service for the broader San Jacinto community?",
    answer: "Yes, we serve all of San Jacinto's residential areas including Soboba Springs and throughout the valley-wide community. Our service area encompasses the entire San Jacinto Valley region, and we've built relationships with families throughout the area by providing consistent, reliable drain cleaning and repair services. We understand San Jacinto's community character and the importance of being responsive to residents' needs. Whether you need scheduled preventive maintenance or emergency service, we provide the same professional attention to every San Jacinto customer. Many of our San Jacinto customers have used our services for years and refer family and neighbors, which we consider the highest compliment."
  }
];

// Breadcrumb data
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "San Jacinto Drain Cleaning", url: "/services/san-jacinto-drain-cleaning" }
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
  "name": "San Jacinto Drain Cleaning",
  "description": "Professional drain cleaning services for residential and commercial properties in San Jacinto, CA. Same-day service, 24/7 emergency response.",
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
    "name": "San Jacinto",
    "sameAs": "https://en.wikipedia.org/wiki/San_Jacinto,_California"
  },
  "serviceType": "Drain Cleaning",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$",
    "areaServed": "San Jacinto, CA"
  }
};

export default function SanJacintoDrainCleaningPage() {
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
        <SanJacintoDrainCleaning />
      </main>
    </div>
  );
}
