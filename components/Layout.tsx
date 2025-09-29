import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export function Layout({ children }: { children: ReactNode }) {
  const inter = Inter({ subsets: ["latin"], display: "swap" });

  return (
    <div className="bg-background text-foreground antialiased min-h-screen">
      {/* ✅ Correct ServiceTitan Scheduler Script */}
      <Script
        id="se-widget-embed"
        src="https://embed.scheduler.servicetitan.com/scheduler-v1.js"
        strategy="afterInteractive"
        defer
        data-api-key="sy16nipug8gwpdpexruj7c"
        data-schedulerid="sched_sq8ydzqs6488ty4bwk5g1ahx"
        onLoad={() => {
          console.log("✅ ServiceTitan script loaded", (window as any)._scheduler);
        }}
        onError={(e) => {
          console.error("❌ Failed to load ServiceTitan script", e);
        }}
      />

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
