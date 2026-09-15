// app/layout.tsx
import type { Metadata } from "next";
import "./global.css";

import HeaderShell from "@/components/HeaderShell";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { AcsbScript } from "@/components/AcsbScript";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { RebrandAnnouncement } from "@/components/RebrandAnnouncement";

export const metadata: Metadata = {
  metadataBase: new URL('https://gardnerplumbingco.com'),
  title: {
    template: '%s | Gardner Plumbing Co.',
    default: 'Gardner Plumbing Co. | Reliable Plumbing Services in Riverside County'
  },
  description: 'Reliable plumbing services, water heater repair, and drain cleaning in Riverside County for over 30 years. Licensed, insured, and available 24/7.',
  keywords: ['plumbing services', 'Riverside County plumber', 'water heater repair', 'drain cleaning', 'emergency plumber', 'Temecula plumber', 'Murrieta plumber'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Gardner Plumbing Co.',
    images: [
      {
        url: '/og-image.jpg',
        type: 'image/jpeg',
        width: 1200,
        height: 630,
        alt: 'Gardner Plumbing Co. — Riverside County\'s Plumbing Experts, Trusted Since 1994'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Ji8WKO1-htmsFEGwW2zGn19UbNqnWxM1v4q6EN4-Pok',
  },
  alternates: {
    types: {
      "application/json": [
        { url: "/ai-actions.json", title: "Gardner Plumbing Co. AI Service Menu" },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://gardnerplumbingco.com/#organization",
    "name": "Gardner Plumbing Co.",
    // Rebrand to GPC Home Pros. Keeping the legal/legacy name as `name` until
    // GBP + citations are switched over, with the new name as an alternate, so
    // entity resolution holds during the transition. Swap these once GBP flips.
    "alternateName": ["GPC Home Pros", "Gardner Plumbing Company"],
    "image": "https://gardnerplumbingco.com/gardner_logo.webp",
    "url": "https://gardnerplumbingco.com",
    "telephone": "+1-951-246-4337",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Murrieta",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": [
      "Banning", "Beaumont", "Calimesa", "Cathedral City", "Cherry Valley",
      "Corona", "Eastvale", "Garnet", "Hemet", "Jurupa Valley",
      "Lake Elsinore", "Menifee", "Mentone", "Moreno Valley", "Murrieta",
      "North Palm Springs", "Palm Springs", "Palm Desert", "Pedley", "Perris",
      "Redlands", "Riverside", "San Jacinto", "Temecula", "Yucaipa"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4936,
      "longitude": -117.1484
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/gardnerplumbingco",
      "https://www.google.com/search?q=Gardner+Plumbing+Company"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "900",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Reliable plumbing services in Riverside County for over 30 years. Licensed, insured, and available 24/7 for emergency plumbing services.",
    "paymentAccepted": "Cash, Credit Card, Check, Financing Available",
    "currenciesAccepted": "USD",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing Services",
            "description": "24/7 emergency plumbing repair and service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Service",
            "description": "Water heater repair, replacement, and installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
            "description": "Professional drain cleaning and clog removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection",
            "description": "Advanced leak detection and repair services"
          }
        }
      ]
    }
  };

  return (
    // suppressHydrationWarning: the rebrand-notice script in <head> adds
    // .gpc-notice-seen to <html> before React hydrates, which React would
    // otherwise report as a server/client attribute mismatch. Scoped to this
    // element's own attributes only — children still hydrate normally.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Rebrand-notice pre-paint gate. Must stay a plain blocking <script>,
          not next/script — it has to run before first paint so the mobile
          announcement bar is hidden for already-dismissed visitors without a
          layout shift. Inserting the bar after hydration instead cost ~0.096
          CLS against a 0.000 baseline.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var f=new URLSearchParams(location.search).get('rebrand')==='1';if(!f&&sessionStorage.getItem('gpc-rebrand-notice-v1')==='seen'){document.documentElement.className+=' gpc-notice-seen';}}catch(e){}})();`,
          }}
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0JKSKHPR3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z0JKSKHPR3');
          `}
        </Script>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
        {/* ServiceTitan DNI */}
        <Script id="servicetitan-dni" strategy="afterInteractive">
          {`
            dni = (function(q,w,e,r,t,y,u){q['ServiceTitanDniObject']=t;q[t]=q[t]||function(){
              (q[t].q=q[t].q||[]).push(arguments)};q[t].l=1*new Date();y=w.createElement(e);
              u=w.getElementsByTagName(e)[0];y.async=true;y.src=r;u.parentNode.insertBefore(y,u);
              return q[t];
            })(window,document,'script','https://static.servicetitan.com/marketing-ads/dni.js','dni');
            dni('init', '877085251');
            document.addEventListener('DOMContentLoaded', function() { dni('load'); }, false);
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1187663253533257');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1187663253533257&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Google reCAPTCHA Enterprise */}
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LeEL0QsAAAAAOdOJFRc9PxAimmuVchWMVZjBcBk"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <HeaderShell />
        {/* Rebrand notice. The mobile bar is absolutely positioned against this
            wrapper, so it floats over the TOP OF THE PAGE CONTENT rather than
            over the header — nothing in the layout moves, and the logo, nav,
            and emergency phone number all stay visible and tappable. The
            desktop modal is fixed-position and unaffected by this wrapper. */}
        <div className="relative">
          <RebrandAnnouncement />
          <main>{children}</main>
        </div>
        <Footer />
        <CookieConsentBanner />
        {/* TD Marketing Group Tracking */}
        <Script
          src="https://link.tdmarketinggroup.com/js/external-tracking.js"
          data-tracking-id="tk_78a2590609e84e5cb64d7c9be0fc7cb3"
          strategy="afterInteractive"
        />
      </body>

      {/* --- ACSB SCRIPT --- */}
      <AcsbScript />
    </html>
  );
}