"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Phone, Wrench, Snowflake, Zap } from "lucide-react";

const STORAGE_KEY = "gpc-rebrand-notice-v1";
const MODAL_DELAY_MS = 1200;

/** The announcement page itself already says all of this. */
const SUPPRESSED_PATHS = ["/gpc-home-pros"];

/** Append ?rebrand=1 to any URL to force the notice to show again. */
const FORCE_PARAM = "rebrand";

/**
 * sessionStorage, NOT localStorage — deliberate.
 *
 * A rebrand notice is not a cookie banner. Its job is name recognition, which
 * takes repetition: dismissing it should quiet it for the current visit, then
 * show again on a later one. sessionStorage clears when the tab closes, which
 * is exactly that behavior. Switch to localStorage only if we decide the
 * message has saturated and should retire permanently.
 */
function readDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "seen";
  } catch {
    // Private mode / storage blocked: treat as unseen, just skip persistence.
    return false;
  }
}

/**
 * Rebrand announcement: "Gardner Plumbing Co. is now GPC Home Pros."
 *
 * Renders two variants from a single dismissal state:
 *  - Mobile (< lg): a slim in-flow bar above the header. It scrolls away with
 *    the page, so it is never an intrusive interstitial on mobile -- which is
 *    the only surface Google judges for that penalty.
 *  - Desktop (>= lg): a centered modal, delayed ~1.2s.
 *
 * Dismissal persists in sessionStorage: quiet for the rest of this visit,
 * shown again on a later one. Append ?rebrand=1 to force it open.
 * Placed ABOVE <HeaderShell /> in the root layout so the mobile bar sits in
 * normal document flow above the sticky nav.
 */
export function RebrandAnnouncement() {
  // null = not yet read from storage (render nothing, avoids hydration flash)
  const [dismissed, setDismissed] = useState<boolean | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const suppressed = SUPPRESSED_PATHS.includes(pathname);

  useEffect(() => {
    if (suppressed) return;

    // Read the override from window rather than useSearchParams(), which would
    // force a Suspense boundary and opt every page out of static rendering.
    const forced =
      new URLSearchParams(window.location.search).get(FORCE_PARAM) === "1";
    const seen = forced ? false : readDismissed();
    setDismissed(seen);

    if (seen) return;
    const timer = window.setTimeout(() => setModalOpen(true), MODAL_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [suppressed]);

  function dismiss() {
    setDismissed(true);
    setModalOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      /* no-op */
    }
  }

  // Escape to close + focus the close button when the modal opens
  useEffect(() => {
    if (!modalOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  if (suppressed) return null;

  return (
    <>
      {/* ---------- Mobile / tablet: slim in-flow announcement bar ----------

          Rendered during SSR, NOT gated on client state. The bar takes up
          layout space, so letting React insert it after hydration pushed the
          whole page down and cost ~0.096 CLS against a 0.000 baseline. Instead
          the markup ships with the HTML and a blocking script in <head> adds
          .gpc-notice-seen to <html> before first paint for visitors who already
          dismissed it, which CSS hides with no shift. Dismissing during the
          visit still removes it via `dismissed`, but that shift is
          user-initiated and therefore excluded from CLS. */}
      {dismissed !== true && (
      <div
        data-gpc-rebrand-bar
        className="lg:hidden absolute inset-x-0 top-0 z-[60] bg-gradient-to-r from-[#8B0000] via-[#dc2626] to-[#8B0000] shadow-lg"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5">
          <Link
            href="/gpc-home-pros"
            onClick={dismiss}
            className="flex flex-1 items-center gap-2 text-left"
          >
            <span className="text-[13px] font-semibold leading-snug text-white">
              Gardner Plumbing Company is becoming{" "}
              <span className="whitespace-nowrap underline decoration-white/40 underline-offset-2">
                GPC Home Pros
              </span>
              <span className="block text-[11px] font-normal text-white/80">
                Plumbing, HVAC &amp; electrical &mdash; same team, same number.
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="shrink-0 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      )}

      {/* ---------- Desktop: centered modal ----------
          Fixed-position, so it overlays rather than displacing content and
          contributes nothing to CLS. Safe to gate on client state. */}
      {dismissed === false && modalOpen && (
        <div
          className="hidden lg:flex fixed inset-0 z-[10000] items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="rebrand-heading"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={dismiss}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />

          {/* Card */}
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-red-600/30 shadow-2xl"
            style={{
              background:
                "radial-gradient(ellipse at top left, #1f2937 0%, #111827 55%, #000000 100%)",
            }}
          >
            {/* Red glow accents */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 12% 88%, rgba(220,38,38,0.35) 0%, transparent 55%), radial-gradient(circle at 88% 12%, rgba(220,38,38,0.22) 0%, transparent 55%)",
              }}
            />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={dismiss}
              aria-label="Close announcement"
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative px-12 pb-9 pt-12 text-center">
              {/* No "A New Name" eyebrow here — the lockup and the sentence
                  below it already announce the change twice. A third label
                  saying it a third time was the clutter. */}

              {/* Brand transition lockup — the visual proof. The arrow alone is
                  designer shorthand a scanning homeowner shouldn't have to
                  decode, so the sentence below states the change outright. */}
              <div
                aria-hidden="true"
                className="flex items-center justify-center gap-5"
              >
                <Image
                  src="/gardner_logo.webp"
                  alt=""
                  width={200}
                  height={64}
                  className="h-[52px] w-auto shrink-0"
                />
                <ArrowRight
                  className="h-7 w-7 shrink-0 text-red-500"
                  aria-hidden="true"
                />
                {/* nowrap: the two halves of the lockup must sit on one
                    baseline, or the arrow reads as pointing at nothing. */}
                <span className="whitespace-nowrap text-[30px] font-extrabold uppercase leading-none tracking-tight text-white drop-shadow">
                  GPC <span className="text-red-500">Home Pros</span>
                </span>
              </div>

              {/* No max-width on the text blocks: they span the same measure as
                  the trade chips and the CTA below, so every element in the card
                  shares one edge-to-edge rhythm instead of the copy sitting
                  visually inset from everything else. */}
              <h2
                id="rebrand-heading"
                className="mt-8 text-balance text-[24px] font-bold leading-[1.3] text-white"
              >
                Gardner Plumbing Company is becoming GPC&nbsp;Home&nbsp;Pros
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                For over 30 years, our family has taken care of plumbing across
                Riverside County. Since then we&rsquo;ve built out heating, air
                conditioning, and electrical teams &mdash; so the people you already
                trust can look after more of your home. Our new name just makes room
                for all three.
              </p>

              <p className="mt-3.5 text-[13px] font-semibold uppercase tracking-wide text-gray-500">
                Same family &middot; Same technicians &middot; Same number &middot;
                Coming soon
              </p>

              {/* Three verticals. HVAC and Electrical are the actual news, so
                  they carry the visual weight; Plumbing sits back as the known
                  quantity. */}
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { icon: Wrench, label: "Plumbing", isNew: false },
                  { icon: Snowflake, label: "HVAC", isNew: true },
                  { icon: Zap, label: "Electrical", isNew: true },
                ].map(({ icon: Icon, label, isNew }) => (
                  <div
                    key={label}
                    className={
                      isNew
                        ? "relative rounded-xl border border-red-500/40 bg-red-600/[0.12] px-3 py-4"
                        : "relative rounded-xl border border-white/15 bg-white/[0.07] px-3 py-4"
                    }
                  >
                    {isNew && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow">
                        New
                      </span>
                    )}
                    <Icon
                      className={
                        isNew
                          ? "mx-auto h-6 w-6 text-red-400"
                          : "mx-auto h-6 w-6 text-gray-400"
                      }
                      aria-hidden="true"
                    />
                    <span
                      className={
                        isNew
                          ? "mt-2.5 block text-[13px] font-bold text-white"
                          : "mt-2.5 block text-[13px] font-semibold text-gray-300"
                      }
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* One primary action. The phone number is already in the header
                  and the sticky call bar — a second button here just split the
                  eye between two equal-weight targets. */}
              <div className="mt-8">
                <Link
                  href="/gpc-home-pros"
                  onClick={dismiss}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  What This Means for You
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-5 flex items-center justify-center gap-5 text-xs">
                <a
                  href="tel:9512464337"
                  onClick={dismiss}
                  className="inline-flex items-center gap-1.5 font-semibold text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  (951) 246-4337
                </a>
                <span className="text-gray-700" aria-hidden="true">
                  &middot;
                </span>
                <button
                  type="button"
                  onClick={dismiss}
                  className="font-medium text-gray-500 underline underline-offset-4 transition-colors hover:text-gray-300"
                >
                  Continue to the site
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
