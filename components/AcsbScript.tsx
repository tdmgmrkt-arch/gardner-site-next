// components/AcsbScript.tsx
"use client"; // This is the magic line

import Script from "next/script";

export function AcsbScript() {
  return (
    <Script
      id="acsb-script"
      src="https://acsbapp.com/apps/app/dist/js/app.js"
      strategy="afterInteractive"
      onLoad={() => {
        // We use '(window as any)' to fix the TypeScript error
        if (typeof (window as any).acsbJS !== "undefined") {
          (window as any).acsbJS.init();
        }
      }}
    />
  );
}