// app/layout.tsx
import type { Metadata } from "next";
import "./global.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gardner Plumbing Co.",
  description: "Serving Riverside County with trusted plumbing services for over 30 years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
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
    </html>
  );
}