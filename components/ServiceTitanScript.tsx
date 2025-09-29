// components/ServiceTitanScript.tsx
"use client";

import Script from "next/script";

export function ServiceTitanScript() {
  return (
    <Script
      id="se-widget-embed"
      src="https://embed.scheduler.servicetitan.com/scheduler-v1.js"
      strategy="afterInteractive"
      defer
      data-api-key="sqv86m1pjg8gpddpexrurj7c"
      data-schedulerid="sched_sq8ydzqs6488ty4bwk5g1ahx"
      onLoad={() => {
        console.log("✅ ServiceTitan script loaded");
      }}
      onError={(e) => {
        console.error("❌ Failed to load ServiceTitan script", e);
      }}
    />
  );
}