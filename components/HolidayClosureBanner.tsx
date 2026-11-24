"use client";

import { Phone, X } from "lucide-react";

/** localStorage key. Bump the suffix if this banner is ever reused for another holiday. */
const DISMISS_KEY = "gpc-holiday-thanksgiving-2026";

/**
 * Thanksgiving closure notice (2026).
 *
 * Office closed Thu Nov 26 through Sun Nov 29; emergency line runs the whole
 * time. Back to regular hours Mon Nov 30, 8:00 AM PT.
 *
 * TEMPORARY, AND IT RETIRES ITSELF. The matching pre-paint gate in
 * app/layout.tsx adds `.gpc-holiday-hidden` to <html> once the closure has
 * passed (Mon Nov 30 2026, 8:00 AM PT) or the visitor has dismissed it, and
 * app/global.css hides this element on that class. Nobody has to remember to
 * take it down, and it will not still be sitting there at Christmas.
 *
 * Deleting the component, its import, the <head> gate and the CSS rule is the
 * tidy follow-up, but nothing breaks if that slips — after the end date this
 * renders into the HTML and is hidden before first paint.
 *
 * WHY THE MARKUP IS NOT GATED ON CLIENT STATE: it ships in the server-rendered
 * HTML and is hidden by CSS. Letting React insert an in-flow bar after
 * hydration pushes the whole page down — that cost ~0.096 CLS when the rebrand
 * bar was built that way. Same reasoning, same fix.
 *
 * WHY IT SITS ABOVE <HeaderShell />: the header's own utility strip is in flow
 * and its <nav> is `sticky top-0`, so a bar above both scrolls away normally
 * and the sticky nav still pins to the top. Nothing overlaps the logo, the
 * menu, or the phone number.
 */
export function HolidayClosureBanner() {
  function dismiss() {
    // Hide immediately. This shift is user-initiated, so it is excluded from CLS.
    document.documentElement.classList.add("gpc-holiday-hidden");
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Private mode / storage blocked: it stays dismissed for this page view only.
    }
  }

  return (
    <div
      id="gpc-holiday-banner"
      /* Charcoal, not red. The header's own utility strip directly below this
         is already red, and a red bar stacked on a red bar merges into one
         block — the notice stopped reading as a notice. Dark ground with a
         red top rule separates it and lets the phone pill be the one red
         thing the eye lands on. */
      className="relative z-[60] border-t-[3px] border-[#DC2626] bg-[#15171A] shadow-md"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
          <span className="text-[12.5px] font-semibold leading-snug text-white sm:text-sm">
            Closed for Thanksgiving Nov&nbsp;26&ndash;29 &mdash; emergency
            service available 24/7
          </span>
          {/* The number is the point of the notice, so it gets a real tap
              target rather than being plain text inside the sentence. */}
          <a
            href="tel:9512464337"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#DC2626] px-3.5 py-1 text-[12.5px] font-bold text-white transition-colors hover:bg-[#b91c1c] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            (951)&nbsp;246-4337
          </a>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss holiday notice"
          className="shrink-0 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
