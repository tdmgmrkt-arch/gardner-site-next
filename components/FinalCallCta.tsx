import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

type FinalCallCtaProps = {
  /** Headline above the buttons. */
  heading?: string;
  /** Supporting paragraph below the headline. */
  subheading?: string;
  /** Override for the primary CTA href (defaults to tel:). */
  primaryHref?: string;
  /** Override for the primary CTA label. */
  primaryLabel?: string;
};

const PHONE_HREF = "tel:9512464337";
const PHONE_LABEL = "Call (951) 246-4337";

export function FinalCallCta({
  heading = "Ready to Get Started?",
  subheading = "Call now for same-day service or request a free estimate online — backed by every promise on this page.",
  primaryHref = PHONE_HREF,
  primaryLabel = PHONE_LABEL,
}: FinalCallCtaProps = {}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
            linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
          `,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          {heading}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-6">
          <a href={primaryHref} className="flex-1">
            <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group min-h-[44px]">
              <Phone
                className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              {primaryLabel}
            </button>
          </a>
          <Link href="/contact-us" className="flex-1">
            <button className="w-full inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 group min-h-[44px]">
              <ArrowRight
                className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300"
                aria-hidden="true"
              />
              Get a Free Estimate
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          <strong className="text-gray-400">CSLB #1073177</strong> · Licensed,
          Bonded &amp; Insured
        </p>
      </div>
    </section>
  );
}
