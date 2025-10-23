// app/layout.tsx
import type { Metadata } from "next";
import "./global.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { AcsbScript } from "@/components/AcsbScript"; // <-- IMPORT IT

export const metadata: Metadata = {
  // ...
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

      {/* Existing ServiceTitan Script */}
      <Script id="servicetitan-dni" strategy="afterInteractive">
        {`
          // ... your servicetitan script
        `}
      </Script>

      {/* --- YOUR NEW SCRIPT (FIXED) --- */}
      <AcsbScript />
    </html>
  );
}