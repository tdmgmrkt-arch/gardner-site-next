"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Building2,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProtectHomeBanner } from "@/components/ProtectHomeBanner";
import { FinalCallCta } from "@/components/FinalCallCta";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE_DISPLAY = "(951) 246-4337";
const PHONE_HREF = "tel:9512464337";

// ─── Backgrounds ─────────────────────────────────────────────────────────────

const darkBg = {
  background: `
    radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
    linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
  `,
};

const altDarkBg = {
  background: `
    radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
    linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
  `,
};

// ─── Section Badge ────────────────────────────────────────────────────────────

function SectionBadge({
  icon: Icon,
  text,
  color = "blue",
}: {
  icon: React.ElementType;
  text: string;
  color?: "red" | "blue" | "green";
}) {
  const colorMap = {
    red: "from-red-600/20 to-red-500/20 border-red-500/30",
    blue: "from-blue-600/20 to-blue-500/20 border-blue-500/30",
    green: "from-green-600/20 to-green-500/20 border-green-500/30",
  };
  const iconColorMap = {
    red: "text-red-400",
    blue: "text-blue-400",
    green: "text-green-400",
  };
  return (
    <div
      className={`inline-flex items-center gap-3 mb-8 px-6 py-3 bg-linear-to-r ${colorMap[color]} rounded-full border backdrop-blur-sm`}
    >
      <Icon className={`h-5 w-5 ${iconColorMap[color]}`} aria-hidden="true" />
      <span
        className={`${iconColorMap[color]} font-semibold text-sm uppercase tracking-wider`}
      >
        {text}
      </span>
    </div>
  );
}

// ─── City Data ────────────────────────────────────────────────────────────────

type City = {
  name: string;
  descriptor: string;
  drainLink?: string;
};

const swRiversideCounty: City[] = [
  {
    name: "Murrieta",
    descriptor: "HQ — our home base",
    drainLink: "/services/plumbing/murrieta-drain-cleaning",
  },
  {
    name: "Temecula",
    descriptor: "SW Riverside County",
    drainLink: "/services/plumbing/temecula-drain-cleaning",
  },
  {
    name: "Menifee",
    descriptor: "SW Riverside County",
    drainLink: "/services/plumbing/menifee-drain-cleaning",
  },
  {
    name: "Lake Elsinore",
    descriptor: "SW Riverside County",
    drainLink: "/services/plumbing/lake-elsinore-drain-cleaning",
  },
  {
    name: "Perris",
    descriptor: "SW Riverside County",
    drainLink: "/services/plumbing/perris-drain-cleaning",
  },
];

const centralNorthernRiverside: City[] = [
  {
    name: "Riverside",
    descriptor: "County seat",
    drainLink: "/services/plumbing/riverside-drain-cleaning",
  },
  {
    name: "Corona",
    descriptor: "NW Riverside County",
    drainLink: "/services/plumbing/corona-drain-cleaning",
  },
  { name: "Eastvale", descriptor: "NW Riverside County" },
  { name: "Jurupa Valley", descriptor: "NW Riverside County" },
  {
    name: "Moreno Valley",
    descriptor: "Central Riverside County",
    drainLink: "/services/plumbing/moreno-valley-drain-cleaning",
  },
  {
    name: "Hemet",
    descriptor: "San Jacinto Valley",
    drainLink: "/services/plumbing/hemet-drain-cleaning",
  },
  {
    name: "San Jacinto",
    descriptor: "San Jacinto Valley",
    drainLink: "/services/plumbing/san-jacinto-drain-cleaning",
  },
  { name: "Pedley", descriptor: "NW Riverside County" },
];

const extendedServiceArea: City[] = [
  { name: "Palm Springs", descriptor: "Extended service area" },
  { name: "North Palm Springs", descriptor: "Extended service area" },
  { name: "Cathedral City", descriptor: "Extended service area" },
  { name: "Palm Desert", descriptor: "Extended service area" },
  { name: "Garnet", descriptor: "Extended service area" },
  { name: "Beaumont", descriptor: "Extended service area" },
  { name: "Banning", descriptor: "Extended service area" },
  { name: "Cherry Valley", descriptor: "Extended service area" },
  { name: "Calimesa", descriptor: "Extended service area" },
  { name: "Redlands", descriptor: "Extended service area" },
  { name: "Yucaipa", descriptor: "Extended service area" },
  { name: "Mentone", descriptor: "Extended service area" },
];

const TOTAL_CITIES =
  swRiversideCounty.length + centralNorthernRiverside.length + extendedServiceArea.length;

// ─── Stat Cards ───────────────────────────────────────────────────────────────

const stats = [
  {
    icon: MapPin,
    value: "25",
    label: "Cities Served",
    sub: "Across Riverside County and neighboring communities",
    color: "blue" as const,
  },
  {
    icon: Clock,
    value: "30+",
    label: "Years Serving the Region",
    sub: "Murrieta-based since day one",
    color: "green" as const,
  },
  {
    icon: Shield,
    value: "CSLB #1073177",
    label: "Licensed, Bonded & Insured",
    sub: "C-36 Plumbing license — confirmed 2026",
    color: "blue" as const,
  },
  {
    icon: Star,
    value: "~45 min",
    label: "Avg. Arrival Window",
    sub: "In core service areas — Murrieta, Temecula, Menifee, Riverside",
    color: "green" as const,
  },
];

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "How far does Gardner Plumbing travel from Murrieta?",
    a: `Gardner Plumbing Co. regularly travels up to roughly 45 miles from our Murrieta headquarters. That radius covers all ${TOTAL_CITIES} cities in our service area, from Eastvale and Corona to the north, Palm Desert to the east, and San Jacinto to the northeast. For exact coverage in your neighborhood, call (951) 246-4337 — a dispatcher confirms in under a minute.`,
  },
  {
    q: "Do you serve unincorporated Riverside County?",
    a: "Yes. Unincorporated communities within Riverside County — including Garnet, Pedley, Mentone, and Cherry Valley — fall inside our service area. If you have a Riverside County address but aren't sure whether it's incorporated, call us. Dispatchers serve on geography, not city-limit lines.",
  },
  {
    q: "Do you provide emergency plumbing service to Palm Springs and surrounding cities?",
    a: "Yes. Gardner Plumbing Co. provides 24/7 emergency dispatch to Palm Springs, North Palm Springs, Cathedral City, Palm Desert, and Garnet. Response times to these cities may run slightly longer than in our core Southwest Riverside County area, but emergency calls receive the same priority dispatch process.",
  },
  {
    q: "Is there a trip charge for cities farther from Murrieta?",
    a: `No. Gardner Plumbing Co. does not charge trip fees or service-call fees to any of our ${TOTAL_CITIES} service cities. The Gardner Promise includes free in-home estimates and no dispatch fee — regardless of whether the call is in Murrieta or Palm Desert.`,
  },
  {
    q: "Do you serve commercial properties across the service area?",
    a: `Yes. Gardner Plumbing Co. serves commercial and industrial properties throughout all ${TOTAL_CITIES} cities. Commercial plumbing, hydro jetting, backflow prevention, and industrial plumbing services are available across the full service area. Call (951) 246-4337 to discuss scope and scheduling.`,
  },
  {
    q: "Does Gardner Plumbing serve HOA communities and multi-family properties?",
    a: "Yes. Gardner Plumbing Co. works with HOAs, property management companies, and multi-family properties throughout Riverside County and neighboring communities. We handle everything from individual unit repairs to common-area plumbing and main-line maintenance.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CityCard({ city }: { city: City }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-300 group">
      <CheckCircle
        className="h-5 w-5 text-blue-400 shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors duration-300"
        aria-hidden="true"
      />
      <div className="min-w-0">
        {city.drainLink ? (
          <Link
            href={city.drainLink}
            className="font-bold text-white group-hover:text-blue-200 transition-colors duration-300 text-sm leading-snug hover:underline"
          >
            {city.name}
          </Link>
        ) : (
          <span className="font-bold text-white text-sm leading-snug">
            {city.name}
          </span>
        )}
        <p className="text-gray-400 text-xs mt-0.5">{city.descriptor}</p>
      </div>
    </div>
  );
}

function RegionColumn({
  heading,
  subheading,
  cities,
  accentColor,
}: {
  heading: string;
  subheading: string;
  cities: City[];
  accentColor: "blue" | "green";
}) {
  const accentMap = {
    blue: {
      border: "border-blue-500/30",
      bg: "from-blue-600/10 to-transparent",
      text: "text-blue-400",
      dot: "bg-blue-400",
      divider: "border-blue-500/20",
    },
    green: {
      border: "border-green-500/30",
      bg: "from-green-600/10 to-transparent",
      text: "text-green-400",
      dot: "bg-green-400",
      divider: "border-green-500/20",
    },
  };
  const c = accentMap[accentColor];

  return (
    <div
      className={`rounded-2xl border ${c.border} overflow-hidden`}
      style={{
        background: `linear-gradient(to bottom, rgba(17,24,39,0.8), rgba(17,24,39,0.95))`,
      }}
    >
      <div
        className={`bg-linear-to-r ${c.bg} px-6 pt-6 pb-4 border-b ${c.divider}`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className={`inline-block w-2 h-2 rounded-full ${c.dot}`} />
          <span
            className={`text-xs font-bold uppercase tracking-widest ${c.text}`}
          >
            {subheading}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white">{heading}</h3>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {cities.map((city) => (
          <CityCard key={city.name} city={city} />
        ))}
      </div>
    </div>
  );
}

function CitySpotlight({
  city,
  tagline,
  detail,
  drainLink,
}: {
  city: string;
  tagline: string;
  detail: string;
  drainLink?: string;
}) {
  return (
    <div className="relative rounded-2xl border border-white/10 overflow-hidden p-6 flex flex-col gap-4 bg-linear-to-br from-gray-800/60 to-gray-900/80 hover:border-blue-500/30 transition-all duration-300 group">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center shrink-0">
          <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
            {city}
          </h3>
          <p className="text-blue-400 text-sm font-medium">{tagline}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
      {drainLink && (
        <Link
          href={drainLink}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
        >
          <ArrowRight
            className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform duration-300"
            aria-hidden="true"
          />
          Drain Cleaning in {city}
        </Link>
      )}
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function ServiceAreasPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0" style={darkBg} />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8" aria-label="Breadcrumb">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Service Areas" },
              ]}
            />
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: text + CTAs */}
            <div className="lg:col-span-7">
              <SectionBadge icon={MapPin} text="Service Area" color="blue" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Serving {TOTAL_CITIES} Cities Across{" "}
                <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Riverside County &amp; Neighboring Communities
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Gardner Plumbing Co. serves {TOTAL_CITIES} cities across Riverside County
                and neighboring communities — including Murrieta, Temecula, Menifee,
                Riverside, Corona, Eastvale, Hemet, Moreno Valley, Perris, and Lake
                Elsinore. With 30+ years of experience and a Murrieta-based crew,
                we reach most core service areas within a 45-minute arrival window.
              </p>

              <p className="text-base text-gray-400 mb-8 leading-relaxed">
                Licensed under CSLB #1073177, Gardner Plumbing Co. dispatches 24/7 for
                emergencies across the full service area — from emergency pipe repair in
                Corona to water heater service in Hemet.
              </p>

              <p className="text-sm text-gray-500 mb-8">Last Updated: June 2026</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF}>
                  <button className="w-full sm:w-auto min-w-55 min-h-11 inline-flex items-center justify-center gap-3 bg-linear-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group">
                    <Phone
                      className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    Call {PHONE_DISPLAY}
                  </button>
                </a>
                <Link href="/contact-us">
                  <button className="w-full sm:w-auto min-w-55 min-h-11 inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent">
                    <ArrowRight
                      className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    Book Online
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-4/5 lg:aspect-3/4 rounded-3xl overflow-hidden shadow-luxury border border-white/10">
                <Image
                  src="/service-areas-hero.webp"
                  alt={`Gardner Plumbing Co. service van driving through a Southern California residential neighborhood serving ${TOTAL_CITIES} cities across Riverside County and neighboring communities`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROTECT HOME BANNER ──────────────────────────────────────────────── */}
      <ProtectHomeBanner />

      {/* ── QUICK FACTS STRIP ────────────────────────────────────────────────── */}
      <section
        className="py-12 sm:py-14 lg:py-16 relative overflow-hidden"
        aria-label="Service area quick facts"
      >
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const borderClass =
                stat.color === "blue"
                  ? "border-blue-500/30 hover:border-blue-500/60"
                  : "border-green-500/30 hover:border-green-500/60";
              const iconBgClass =
                stat.color === "blue"
                  ? "from-blue-600 to-blue-500"
                  : "from-green-600 to-green-500";
              const valueClass =
                stat.color === "blue" ? "text-blue-400" : "text-green-400";

              return (
                <div
                  key={stat.label}
                  className={`rounded-2xl border ${borderClass} p-6 flex flex-col gap-3 bg-white/5 transition-all duration-300`}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-linear-to-br ${iconBgClass} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className={`text-2xl font-bold ${valueClass} leading-tight`}>
                      {stat.value}
                    </p>
                    <p className="text-white font-semibold text-sm mt-0.5">
                      {stat.label}
                    </p>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CITIES GRID ──────────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        aria-labelledby="cities-heading"
      >
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge icon={MapPin} text="Coverage" color="blue" />
            <h2
              id="cities-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
            >
              25 Cities We Serve
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Across Riverside County and neighboring communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RegionColumn
              heading="Southwest Riverside County"
              subheading="HQ Region"
              cities={swRiversideCounty}
              accentColor="blue"
            />
            <RegionColumn
              heading="Central &amp; Northern Riverside County"
              subheading="Inland Region"
              cities={centralNorthernRiverside}
              accentColor="green"
            />
            <RegionColumn
              heading="Extended Service Area"
              subheading="Neighboring Communities"
              cities={extendedServiceArea}
              accentColor="blue"
            />
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAPS EMBED ────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        aria-labelledby="map-heading"
      >
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left: text */}
            <div>
              <SectionBadge icon={MapPin} text="Coverage Radius" color="blue" />
              <h2
                id="map-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
              >
                ~45 Miles from{" "}
                <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Murrieta HQ
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Gardner Plumbing Co. is headquartered in Murrieta, CA, at the heart of our
                service footprint. From here, licensed technicians reach core Southwest
                Riverside County neighborhoods within roughly 45 minutes — and dispatch
                daily to neighboring communities across the region.
              </p>
              <p className="text-base text-gray-400 mb-8 leading-relaxed">
                Whether you&apos;re in Eastvale to the north, Palm Desert to the east, or San
                Jacinto to the northeast, you&apos;re within our standard service radius.
                Emergency calls receive priority dispatch regardless of city.
              </p>
              <a href={PHONE_HREF}>
                <button className="min-h-11 inline-flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg border border-blue-400/20 transition-all duration-300 group">
                  <Phone
                    className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  Confirm Coverage — {PHONE_DISPLAY}
                </button>
              </a>
            </div>

            {/* Right: map embed */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109144.45437258422!2d-117.20587604273275!3d33.571118777583706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc9d0f093fb225%3A0xef87e6a2bf83ed0f!2sGardner%20Plumbing%20Company!5e0!3m2!1sen!2sus!4v1755821362571!5m2!1sen!2sus"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gardner Plumbing Co. Service Area Map — Riverside County and Neighboring Communities"
                  className="w-full h-80 sm:h-96 lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 rounded-2xl p-4 border border-white/20 shadow-luxury bg-black/60 backdrop-blur-md pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Full Coverage</div>
                      <div className="text-gray-300 text-xs">25 Cities Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEYOND THESE CITIES CALLOUT ──────────────────────────────────────── */}
      <section
        className="py-10 sm:py-12 relative overflow-hidden"
        aria-label="Coverage confirmation callout"
      >
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/30 bg-linear-to-r from-blue-600/10 to-transparent p-8 flex flex-col lg:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center shrink-0">
              <HelpCircle className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl font-bold text-white mb-2">
                Don&apos;t See Your City?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We regularly serve neighboring communities throughout the Inland Empire.
                Call{" "}
                <a
                  href={PHONE_HREF}
                  className="text-blue-400 hover:text-blue-300 font-semibold underline-offset-2 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>{" "}
                to confirm — most addresses in the region fall within our coverage. A
                dispatcher can confirm and dispatch the nearest technician in one call.
              </p>
            </div>
            <a href={PHONE_HREF} className="shrink-0">
              <button className="min-h-11 inline-flex items-center justify-center gap-2 bg-linear-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg border border-red-400/20 transition-all duration-300 group whitespace-nowrap">
                <Phone
                  className="h-4 w-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURED CITY SPOTLIGHTS ─────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        aria-labelledby="spotlights-heading"
      >
        <div className="absolute inset-0" style={darkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge icon={Building2} text="Featured Cities" color="blue" />
            <h2
              id="spotlights-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg"
            >
              Spotlight Cities
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
              Three cities where Gardner Plumbing has the deepest local presence and
              fastest response times.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CitySpotlight
              city="Murrieta"
              tagline="Our HQ — 30+ years of service"
              detail="Gardner Plumbing Co. has served Murrieta homeowners since the city was incorporated. We know every neighborhood — from Greer Ranch to Murrieta Hot Springs — and consistently hit sub-45-minute arrival windows here. CSLB #1073177."
              drainLink="/services/plumbing/murrieta-drain-cleaning"
            />
            <CitySpotlight
              city="Temecula"
              tagline="SW Riverside County"
              detail="From Wine Country estates to Redhawk and Temeku Hills communities, Gardner Plumbing handles every plumbing need in Temecula — drain cleaning, water heater service, slab leak detection, and 24/7 emergency dispatch."
              drainLink="/services/plumbing/temecula-drain-cleaning"
            />
            <CitySpotlight
              city="Riverside"
              tagline="County Seat — Full Coverage"
              detail="As the county seat, Riverside spans diverse neighborhoods and housing eras. Gardner Plumbing technicians serve Riverside daily, with particular expertise in older homes that may have galvanized supply lines or aging sewer infrastructure."
              drainLink="/services/plumbing/riverside-drain-cleaning"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        aria-labelledby="faq-heading"
      >
        <div className="absolute inset-0" style={altDarkBg} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionBadge icon={HelpCircle} text="FAQ" color="blue" />
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
            >
              Service Area{" "}
              <span className="bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>
          </div>

          <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden">
            <div
              className="relative overflow-hidden px-6 sm:px-8 py-6"
              style={{
                background: "linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)",
              }}
            >
              <div className="relative flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <HelpCircle className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">Questions &amp; Answers</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl"
                    style={{
                      backgroundColor: "#202020",
                      backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                    <div className="relative z-10">
                      <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-400 px-6 sm:px-8 py-6 transition-colors duration-300 text-base font-semibold">
                        <span className="flex items-start gap-4 pr-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <HelpCircle className="h-4 w-4 text-blue-400" aria-hidden="true" />
                          </div>
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6 sm:pb-8 px-6 sm:px-8 ml-12 text-base leading-relaxed">
                        <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">
                          {faq.a}
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <FinalCallCta
        heading="Not Sure If We Serve Your Address?"
        subheading="Call (951) 246-4337 — a live dispatcher confirms coverage and dispatches the nearest technician."
        primaryHref={PHONE_HREF}
        primaryLabel={`Call ${PHONE_DISPLAY}`}
      />

    </div>
  );
}
