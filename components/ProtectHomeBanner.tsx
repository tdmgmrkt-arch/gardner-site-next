import { AlertTriangle, Phone } from "lucide-react";

export function ProtectHomeBanner() {
  return (
    <section className="relative">
      <div
        className="relative py-2 sm:py-3"
        style={{
          background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
          boxShadow: `
            inset 0 2px 0 rgba(255, 255, 255, 0.2),
            inset 0 -2px 0 rgba(0, 0, 0, 0.2),
            0 8px 32px rgba(139, 0, 0, 0.4),
            0 -8px 32px rgba(139, 0, 0, 0.3),
            0 12px 24px rgba(0, 0, 0, 0.6),
            0 -12px 24px rgba(0, 0, 0, 0.4)
          `,
        }}
      >
        <div
          className="absolute inset-0 opacity-30 -z-10 pointer-events-none"
          style={{
            background: `linear-gradient(135deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 25%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.1) 75%,
              transparent 100%
            )`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-white animate-pulse flex-shrink-0" />
              <span className="text-white font-bold text-lg sm:text-xl">Protect Your Home</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a href="tel:9512464337" className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
                <Phone className="h-5 w-5 text-red-100" />
                <span className="text-white font-bold text-lg">(951) 246-4337</span>
              </a>
              <span className="text-red-100 font-semibold text-sm sm:text-base">Sign Up for a Maintenance Plan Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
