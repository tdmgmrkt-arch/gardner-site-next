import { BookOpen } from "lucide-react";
import Link from "next/link";

export function BlogHero() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-28 pb-4 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
              linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
            <BookOpen className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
              Gardner Plumbing Blog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Expert Insights &{" "}
            <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Plumbing Tips
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your trusted resource for plumbing advice, maintenance tips, and the
            latest in home water management from the experts at{" "}
            <Link
              href="/about-us"
              className="text-red-400 hover:text-red-300 underline"
            >
              Gardner Plumbing Co
            </Link>
            . Our content follows{" "}
            <a
              href="https://www.phccweb.org/find-a-contractor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              industry best practices
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
