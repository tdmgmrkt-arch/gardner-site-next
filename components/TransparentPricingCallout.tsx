import Link from "next/link";
import { Receipt, FileText, Ban, ArrowRight } from "lucide-react";

const examples = [
  {
    service: "Drain Cleaning",
    range: "$150 – $800",
    note: "Single-fixture clog through hydro jetting",
  },
  {
    service: "Water Heater Replacement",
    range: "$1,400 – $3,200",
    note: "Standard tank through high-efficiency",
  },
  {
    service: "Sewer Camera Inspection",
    range: "$250 – $400",
    note: "HD video diagnosis to locate the issue",
  },
];

const guarantees = [
  { icon: FileText, text: "Written estimate before work begins" },
  { icon: Ban, text: "No trip fees, no service-call fees" },
  { icon: Receipt, text: "Flat-rate pricing — no hourly surprises" },
];

export function TransparentPricingCallout() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="transparent-pricing-callout-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at bottom right, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 90% 90%, rgba(220, 38, 38, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 10% 10%, rgba(220, 38, 38, 0.12) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-5 px-5 py-2.5 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
            <Receipt className="h-4 w-4 text-red-400" aria-hidden="true" />
            <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">
              Fair, Predictable Pricing
            </span>
          </div>

          <h2
            id="transparent-pricing-callout-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
          >
            You'll Know the Price{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Before We Start
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Flat-rate pricing, written estimates, no trip fees. Here's what typical Riverside County jobs actually run — no bait-and-switch, no hourly guessing.
          </p>
        </div>

        {/* Example price cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {examples.map((ex) => (
            <div
              key={ex.service}
              className="glassmorphism-dark rounded-2xl p-6 border border-white/10 shadow-lg text-center transition-all duration-300 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]"
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <div className="text-sm sm:text-base text-gray-400 font-medium mb-2">
                {ex.service}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {ex.range}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {ex.note}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8 text-gray-300 text-sm sm:text-base">
          {guarantees.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/transparent-pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold text-base sm:text-lg shadow-lg border border-red-400/20 transition-all duration-300 hover:scale-[1.02] group"
          >
            <Receipt className="h-5 w-5" />
            See the full pricing breakdown
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-xs sm:text-sm text-gray-500 mt-4">
            Pricing varies by job scope and access. Every estimate is written and reviewed with you before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
