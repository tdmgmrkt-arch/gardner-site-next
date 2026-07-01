import Link from "next/link";
import {
  Home,
  Layers,
  Navigation,
  Droplets,
  Sparkles,
  Package,
  Phone,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Home,
    title: "Shoe Covers at the Door",
    description: "Disposable booties on before we step inside — every visit, no exceptions.",
  },
  {
    icon: Layers,
    title: "Drop Cloths, Every Job",
    description: "Floor protection goes down before a single tool comes out of the bag.",
  },
  {
    icon: Navigation,
    title: "Path Protection",
    description: "Runner protection from the front entry to the work zone — not just the job site.",
  },
  {
    icon: Droplets,
    title: "Fixture Towels",
    description: "Clean shop towels wrap every fixture before work begins to protect finishes.",
  },
  {
    icon: Sparkles,
    title: "Full Post-Job Cleanup",
    description: "Sweep, wipe, done — the area is clean before we call the job finished.",
  },
  {
    icon: Package,
    title: "Haul-Away Included",
    description: "Old parts, pipe scraps, and packaging leave on our truck. Nothing left behind.",
  },
];

type CleanVisitPromiseProps = {
  reviewCount?: string;
};

export function CleanVisitPromise({ reviewCount = "900+" }: CleanVisitPromiseProps = {}) {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="clean-visit-promise-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top right, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(135deg, #1a1a1a 0%, #202020 50%, #1f2937 100%)
            `,
          }}
        />
        {/* Subtle red glow accent — mirrored from opposite corners vs. GardnerPromise */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 90% 90%, rgba(220, 38, 38, 0.25) 0%, transparent 50%),
              radial-gradient(circle at 10% 10%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-red-400" aria-hidden="true" />
            <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">
              Our Clean Home Standard
            </span>
          </div>

          <h2
            id="clean-visit-promise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-3 leading-tight"
          >
            The Clean Visit Promise
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-red-400 mb-6">
            We protect your home the entire time we're in it.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Gardner Plumbing Co. follows a 6-step Clean Visit Promise on every service call.
            Shoe covers at the door. Drop cloths under every work area. Full cleanup and haul-away
            before we leave.{" "}
            <Link
              href="/clean-visit-promise"
              className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors duration-200"
            >
              See every step in detail.
            </Link>
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
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
