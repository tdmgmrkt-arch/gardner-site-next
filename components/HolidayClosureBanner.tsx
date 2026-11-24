"use client";

import { CalendarX, Phone, X } from "lucide-react";

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
 *
 * WHY THE PHONE NUMBER IS A PLAIN TEXT NODE WITH AN ORDINARY SPACE:
 * ServiceTitan DNI (initialised in app/layout.tsx) rewrites tracking numbers by
 * matching the rendered text against the configured number. The first version
 * of this bar wrote `(951)&nbsp;246-4337`, and the non-breaking space meant DNI
 * never matched it — the header strip swapped to the tracking number while this
 * bar kept showing the raw one, so calls from the most urgent CTA on the page
 * went unattributed. Keep the markup byte-identical to the header's:
 * `<a href="tel:9512464337">(951) 246-4337</a>`, ordinary U+0020 space, number
 * as the anchor's only child. Do not reintroduce `&nbsp;` or wrap the digits in
 * a span.
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
         block. The weight instead comes from height, type scale, the red icon
         badge and the red CTA — so it reads as a notice rather than as part of
         the dark nav chrome it sits against. */
      className="relative z-[60] border-t-4 border-[#DC2626]"
      style={{
        background:
          "linear-gradient(90deg, #0E1013 0%, #1B1F25 45%, #1B1F25 55%, #0E1013 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.45)",
      }}
    >
      {/* The cluster is CENTRED and the dismiss button is taken out of flow.
          Earlier this was a flex row with the copy pinned left and the CTA
          pushed right by `ml-auto`; at desktop widths that opened a dead gap
          down the middle of a 1280px container and the bar stopped reading as
          one notice. Keeping the group tight in the centre is what makes it
          register on wide screens — the extra height alone did not. */}
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-10 py-3 sm:gap-x-6 sm:py-3.5 lg:py-4">
        {/* Icon badge — same treatment the site uses for emphasis elsewhere. */}
        <div
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg ring-1 ring-red-400/30 sm:flex"
          aria-hidden="true"
        >
          <CalendarX className="h-5 w-5 text-white" />
        </div>

        <div className="min-w-0 text-center sm:text-left">
          <p className="text-[15px] font-bold leading-tight tracking-tight text-white sm:text-[17px] lg:text-[18px]">
            Closed for Thanksgiving &mdash; Nov&nbsp;26&ndash;29
          </p>
          <p className="mt-1 text-[12.5px] leading-tight text-gray-300 sm:text-[13.5px] lg:text-[14px]">
            Emergency service available 24/7 &middot; Back Monday Nov&nbsp;30 at
            8&nbsp;AM
          </p>
        </div>

        {/* The number is the point of the notice, so it gets a real tap target
            rather than being plain text inside the sentence. Markup mirrors the
            header strip exactly so DNI swaps it. */}
        <a
          href="tel:9512464337"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-red-400/20 bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-[15px] font-bold text-white shadow-lg transition-all duration-300 hover:from-red-700 hover:to-red-600 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:text-[16px]"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          (951) 246-4337
        </a>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss holiday notice"
          className="absolute right-2 top-2 rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:top-1/2 sm:right-3 sm:-translate-y-1/2"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
