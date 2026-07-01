import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Tag,
  BadgeCheck,
  Phone,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "30-Day Callback Guarantee",
    description:
      "If the same issue recurs within 30 days of our service visit, a Gardner Plumbing technician returns at no charge. Parts and labor are covered.",
  },
  {
    icon: FileText,
    title: "Written Estimate Before Work Begins",
    description:
      "The price on the written estimate is the price on the invoice. If anything changes mid-job, we stop, explain, and get your written approval before continuing.",
  },
  {
    icon: Tag,
    title: "No Trip Fees, No Pressure",
    description:
      "Free in-home estimates. No dispatch fee, no service-call fee, no obligation to proceed.",
  },
  {
    icon: BadgeCheck,
    title: "Fully Licensed, Bonded & Insured",
    description:
      "CSLB #1073177, fully bonded, fully insured. We pull permits and handle inspections on every job that requires them.",
  },
];

type GardnerPromiseProps = {
  reviewCount?: string;
};

export function GardnerPromise({ reviewCount = "900+" }: GardnerPromiseProps = {}) {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="gardner-promise-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top left, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
            `,
          }}
        />
        {/* Subtle red glow accent */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 90%, rgba(220, 38, 38, 0.25) 0%, transparent 50%),
              radial-gradient(circle at 90% 10%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-red-400" aria-hidden="true" />
            <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">
              Our Promise to You
            </span>
          </div>

          <h2
            id="gardner-promise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-3 leading-tight"
          >
            The Gardner Promise
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-red-500 mb-6">
            We Own It.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Gardner Plumbing Co. backs every service call with four hard commitments — written
            terms, not marketing language. This is what we stand behind.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative border-none overflow-hidden rounded-2xl shadow-luxury hover-lift transition-all duration-500"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage:
                    "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                {/* Red border accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                {/* Left-edge red accent line */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />

                <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600/30 to-red-500/20 rounded-xl flex items-center justify-center group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-lg border border-red-500/20 group-hover:border-red-500/60">
                      <Icon
                        className="h-7 w-7 text-red-400 group-hover:text-white transition-all duration-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div
          className="glassmorphism-dark rounded-2xl border border-white/10 shadow-luxury px-6 py-5 mb-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(17,24,39,0.95) 50%, rgba(220,38,38,0.06) 100%)",
            borderColor: "rgba(220,38,38,0.25)",
          }}
        >
          <p className="text-sm sm:text-base font-semibold text-gray-300 tracking-wide">
            <span className="text-red-400 font-bold">CSLB #1073177</span>
            <span className="mx-3 text-gray-600" aria-hidden="true">·</span>
            {reviewCount} five-star Google reviews
            <span className="mx-3 text-gray-600" aria-hidden="true">·</span>
            30+ years serving Riverside County
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group min-h-[44px] w-full sm:w-auto"
          >
            <ArrowRight
              className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300"
              aria-hidden="true"
            />
            Get a Free Estimate
          </Link>

          <a
            href="tel:9512464337"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/40 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group min-h-[44px] w-full sm:w-auto"
          >
            <Phone
              className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            />
            (951) 246-4337
          </a>
        </div>
      </div>
    </section>
  );
}
