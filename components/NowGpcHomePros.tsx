import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Wrench,
  Snowflake,
  Zap,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";

const unchanged = [
  {
    title: "The same people",
    body: "The same family ownership, the same office staff, and the same technicians who have been coming to Riverside County homes for 30+ years. Nobody was bought out. Nobody left.",
  },
  {
    title: "The same phone number",
    body: "(951) 246-4337 still reaches us, 24/7, for plumbing emergencies. Existing appointments, warranties, and service records are unaffected.",
  },
  {
    title: "The same license and guarantees",
    body: "CSLB #1073177 remains our plumbing license. The Gardner Promise and the Clean Visit Promise carry over to every trade we work in.",
  },
  {
    title: "The same 900+ five-star reviews",
    body: "Our review history, our reputation, and our 4.9-star rating belong to the same company. Only the sign on the truck is changing.",
  },
];

const verticals = [
  {
    icon: Wrench,
    label: "Plumbing",
    href: "/services",
    blurb:
      "Everything we have always done: drain cleaning, water heaters, leak detection, repiping, gas lines, and 24/7 emergency service.",
    status: "Our original trade, unchanged.",
  },
  {
    icon: Snowflake,
    label: "HVAC",
    href: "/services/hvac",
    blurb:
      "AC repair and installation, furnace service, heat pumps, mini-splits, thermostats, and indoor air quality across Riverside County.",
    // No license number asserted here on purpose. CA B&P §7030.5 requires the
    // license number in advertising, and we do not have the C-20 on file yet —
    // so this card states the department, not a credential. Add the number here
    // (and on the HVAC leaf pages) once it is confirmed.
    status: "Our newest department, serving all 25 cities.",
  },
  {
    icon: Zap,
    label: "Electrical",
    href: "/services/electrical",
    blurb:
      "Panel upgrades, rewiring, EV charger installation, lighting and fixtures, generators, and electrical safety inspections.",
    // Same reasoning as HVAC above — no C-10 number on file, so no credential
    // claim here. See the note on the HVAC entry.
    status: "Now serving Riverside County homes.",
  },
];

export const NOW_GPC_FAQS = [
  {
    q: "Will Gardner Plumbing Co. still be the same company?",
    a: "Yes. GPC Home Pros will be the same family-owned company, the same team, and the same CSLB license #1073177. Only the name is changing, to reflect that we now handle HVAC and electrical work in addition to plumbing.",
  },
  {
    q: "Why is Gardner Plumbing Co. changing its name to GPC Home Pros?",
    a: "The name Gardner Plumbing Co. described one trade. We now provide plumbing, HVAC, and electrical services to homes across Riverside County, and a plumbing-only name made it hard for customers to know we could help with a broken AC or an overloaded electrical panel. GPC Home Pros keeps the Gardner Plumbing Co. initials while making room for the work we actually do.",
  },
  {
    q: "Will the phone number change?",
    a: "No. (951) 246-4337 stays the number, still answered 24/7 for emergencies.",
  },
  {
    q: "Will my existing warranties and guarantees still be valid?",
    a: "Yes. Every warranty, the 30-Day Callback Guarantee, and any open estimates issued under the Gardner Plumbing Co. name will be honored in full under the GPC Home Pros name. It is the same legal entity.",
  },
  {
    q: "Do you still do plumbing?",
    a: "Plumbing is still our largest department and our original trade. Adding HVAC and electrical did not reduce our plumbing staffing or service area, and the name change will not either.",
  },
  {
    q: "What areas will GPC Home Pros serve?",
    a: "The same 25 cities across Riverside County and neighboring communities we have always served, including Murrieta, Temecula, Menifee, Hemet, Riverside, Corona, Perris, Lake Elsinore, Moreno Valley, and San Jacinto.",
  },
];

export function NowGpcHomePros() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top left, #1f2937 0%, #111827 50%, #000000 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 90%, rgba(220,38,38,0.3) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(220,38,38,0.2) 0%, transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <span className="inline-block rounded-full border border-red-500/40 bg-red-600/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
            Company Announcement
          </span>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            <Image
              src="/gardner_logo.webp"
              alt="Gardner Plumbing Co."
              width={200}
              height={64}
              className="h-12 w-auto opacity-55 sm:h-14"
              priority
            />
            <ArrowRight
              className="h-6 w-6 rotate-90 text-red-500 sm:rotate-0"
              aria-hidden="true"
            />
            <span className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white drop-shadow sm:text-4xl">
              GPC <span className="text-red-500">Home Pros</span>
            </span>
          </div>

          <h1 className="mt-10 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Gardner Plumbing Co. is Becoming GPC Home Pros
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            For over 30 years, our family has taken care of plumbing across Riverside
            County. Since then we have built out heating, air conditioning, and
            electrical teams &mdash; so the people you already trust can look after
            more of your home. Our new name just makes room for all three.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-gray-400">
            Same family. Same technicians. Same number. Coming soon.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:9512464337"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-7 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              (951) 246-4337
            </a>
            <Link
              href="/contact-us"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Request Service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── What changed ───────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Why the name is changing
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-gray-700">
            <p>
              For three decades, the name on our trucks told customers exactly one thing:
              we fix plumbing. That was accurate, and it served us well. But homeowners
              kept calling about an AC unit that stopped cooling in August, or a panel
              that could not handle a new EV charger, and we had to send them elsewhere.
            </p>
            <p>
              So we built those departments. We now run licensed HVAC and electrical
              teams alongside our plumbers, out of the same Murrieta shop, under the same
              ownership and the same standards. A name that says
              &ldquo;plumbing&rdquo; no longer describes what we do.
            </p>
            <p className="font-semibold text-gray-900">
              GPC Home Pros keeps the Gardner Plumbing Co. initials and drops the
              limitation. That is the whole of the change.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── What did NOT change ───────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            What is not changing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            A name change can make people wonder whether they are still dealing with the
            same company. Here is the short answer: you are.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {unchanged.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Three trades ───────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Three trades, one company
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {verticals.map(({ icon: Icon, label, href, blurb, status }) => (
              <Link
                key={label}
                href={href}
                className="group rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{label}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{blurb}</p>
                <p className="mt-4 flex items-start gap-1.5 text-[13px] font-medium text-gray-500">
                  <BadgeCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {status}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-red-600">
                  View services
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Questions about the name change
          </h2>

          <dl className="mt-8 space-y-4">
            {NOW_GPC_FAQS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <dt className="font-bold text-gray-900">{faq.q}</dt>
                <dd className="mt-2.5 text-[15px] leading-relaxed text-gray-600">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────────── Closing CTA ───────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top left, #1f2937 0%, #111827 50%, #000000 100%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Same team. New name coming. Still one call away.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Plumbing, heating and air, or electrical &mdash; across Riverside County and
            neighboring communities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:9512464337"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-7 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              (951) 246-4337
            </a>
            <Link
              href="/contact-us"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
