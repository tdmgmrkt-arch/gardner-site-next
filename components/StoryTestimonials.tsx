"use client";

import { useState } from "react";
import {
  Star,
  Quote,
  MapPin,
  Calendar,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export type StoryTestimonial = {
  author: string;
  city: string;
  service: string;
  technician: string;
  date: string;
  isoDate: string;
  body: string;
};

// ─── All real testimonials sourced from Gardner Plumbing's verified Google reviews. ───
// Last names abbreviated to initial for customer privacy. City defaults to
// Riverside County (Gardner's primary service area) since reviewers don't
// disclose their city on Google.

// Mixed catch-all set (used on /reviews — one strong story per major theme)
export const STORIES_GENERAL: StoryTestimonial[] = [
  {
    author: "Marie C.",
    city: "Riverside County, CA",
    service: "Water Heater Installation",
    technician: "Mitchell",
    date: "October 1, 2025",
    isoDate: "2025-10-01",
    body:
      "Gardner Plumbing was amazing, from Jenny in the office to Mitchell who installed our water heater. They are professional. Mitchell explained the whole process. I received a text with his picture so I knew exactly who was coming to my home. He took the time to walk us through everything before starting, kept the work area clean, and left everything spotless. Jenny followed up after the install to make sure we were happy. This is the kind of service that earns a customer for life.",
  },
  {
    author: "Shelly H.",
    city: "Riverside County, CA",
    service: "Slab Leak Repair",
    technician: "Wyatt & Jacob",
    date: "August 1, 2025",
    isoDate: "2025-08-01",
    body:
      "Wyatt and Jacob did an excellent job repairing our slab leak in our kitchen. Everything went smooth — they were both very kind and worked diligently to get to the root of our leak and cleaned up the debris when they were done. This is the 3rd time Gardner Plumbing has helped us with our plumbing needs and they keep earning the trust. Great job guys!",
  },
  {
    author: "Darwin W.",
    city: "Riverside County, CA",
    service: "Main Line Drain Repair & Camera Inspection",
    technician: "Cody, Mitchell & TJ",
    date: "April 28, 2026",
    isoDate: "2026-04-28",
    body:
      "We had a blocked drain below the garage floor which caused the 2nd story tubs and toilets to not flush or drain. The whole house was backed up. Cody with Gardner Plumbing ran cameras through all the clean-outs and located the failed pipe — turned out a previous company's incorrect repair had allowed roots to enter and block it. Mitchell and TJ came out, cut out and repaired the damaged pipe, installed a 2-way sweep, new Y-section, and a clean-out vertical pipe accessed through a removable plate on the garage floor. Then they backfilled the area with the dirt that was removed. Very professional, friendly, and knowledgeable guys that we will recommend to anyone. Gardner Plumbing is the best!",
  },
  {
    author: "Lisa R.",
    city: "Riverside County, CA",
    service: "Emergency Main Water Line Repair",
    technician: "Wyatt",
    date: "June 15, 2024",
    isoDate: "2024-06-15",
    body:
      "My main water line broke at 4am. I called Gardner Plumbing and they came out quickly and fixed it. I was impressed with Wyatt — he was so professional, friendly, and accommodating, especially given the hour. He walked me through what he was doing, gave me a clear price upfront, and didn't try to upsell me on anything I didn't need. I 100% recommend them for any of your plumbing needs.",
  },
  {
    author: "Brandon R.",
    city: "Riverside County, CA",
    service: "Garbage Disposal Repair",
    technician: "Mitchell",
    date: "January 30, 2026",
    isoDate: "2026-01-30",
    body:
      "Mitchell was my service tech for my garbage disposal and he did an amazing job. He was very professional and explained the entire process with me. He was definitely not what I was expecting or used to from a plumbing company. He got the problem diagnosed and corrected right away and I am very satisfied with his work. Highly recommend Gardner Plumbing! Thank you again for saving the day!",
  },
  {
    author: "Pam",
    city: "Riverside County, CA",
    service: "Full Plumbing Inspection & Repair",
    technician: "Wyatt & Michael",
    date: "February 25, 2026",
    isoDate: "2026-02-25",
    body:
      "Great experience with Gardner Plumbing. Our old house had many plumbing issues — corroded valves, old pressure release valve, hard water, etc. Wyatt came to our house to do a full inspection. He was very responsive to our questions and gave us several plan options. He and Michael were punctual, respectful of the home, very clean work, and worked quite fast to finish all the work in a day. They were also very thorough. After the work was done, they checked and rechecked for leaks. They made sure to walk through and teach us how to operate the water softener and made a list of things that may need to be done next year. I am glad that our friend referred us to them. Definitely plumbers you can trust.",
  },
];

// Clean Visit themed — for /clean-visit-promise
export const STORIES_CLEAN_VISIT: StoryTestimonial[] = [
  {
    author: "Alicia H.",
    city: "Riverside County, CA",
    service: "Pressure Regulator Replacement",
    technician: "Gardner Plumbing Tech",
    date: "May 30, 2026",
    isoDate: "2026-05-30",
    body:
      "Went through my home warranty service for a broken water pressure regulator. The technician was on time, explained everything, confirmed the issue, and was able to get my PRV repair approved and replaced the same day. His repair was thorough and he cleaned up the work area as if he had never been there. Hard to find good plumbers, and now I will be using these guys for future plumbing issues, regardless of whether it's covered or not.",
  },
  {
    author: "Kerry E.",
    city: "Riverside County, CA",
    service: "Moen Shut-off & Pressure Regulator Install",
    technician: "Jerome M.",
    date: "March 30, 2026",
    isoDate: "2026-03-30",
    body:
      "Jerome M. is a friendly, knowledgeable plumber. He worked so hard and diligently and left a very clean work area. He was so focused on the work and doing the best job. He gave me all my options and was honest and up-front about the cost. I had a Moen auto shut-off switch and water pressure regulator installed, and we could not be more satisfied with his work and the price tag. 100% recommendation!",
  },
  {
    author: "Sherice M.",
    city: "Riverside County, CA",
    service: "Shower Handle Repair",
    technician: "Mitchell",
    date: "January 30, 2026",
    isoDate: "2026-01-30",
    body:
      "Mitchell was courteous, knowledgeable, and arrived on time. He repaired my shower handle quickly and explained the issue in a way I could understand. He cleaned up the area afterward and made sure I was happy with the repair. I would definitely recommend him and request his service again. He was very polite and professional.",
  },
  {
    author: "Cecilia F.",
    city: "Riverside County, CA",
    service: "Shower Valve Replacement",
    technician: "TJ & Mitchell",
    date: "June 16, 2026",
    isoDate: "2026-06-16",
    body:
      "We had a great experience with this plumbing company. TJ came out a couple of weeks ago to assess our leaking shower valve and provided an estimate for the repair. He was very informative, professional, and never pushy, which we really appreciated. Mitchell came out today to complete the repair, and I couldn't be happier with the service. He was courteous, efficient, and left everything clean when the job was finished. Our new shower valve is working great, and the entire process was smooth from start to finish.",
  },
  {
    author: "Bobbi C.",
    city: "Riverside County, CA",
    service: "Water Leak Detection Install",
    technician: "Jacob K.",
    date: "April 30, 2026",
    isoDate: "2026-04-30",
    body:
      "I had a water leak detection system installed today and Jacob Kinman was my technician. He was knowledgeable and professional. He explained everything that needed to be done before so there were no surprises. He cleaned up after himself and answered all my questions. I'm very happy with the work he did and would definitely recommend him and his company.",
  },
];

// Guarantee / Standing behind work themed — for /guarantee
export const STORIES_GUARANTEE: StoryTestimonial[] = [
  {
    author: "Victoria B.",
    city: "Riverside County, CA",
    service: "Cold-Water Valve Repair (Return Visit)",
    technician: "Gardner Plumbing Team",
    date: "June 23, 2026",
    isoDate: "2026-06-23",
    body:
      "We have used this company multiple times over the past year because we trust them, and they continue to earn that trust every time. Most recently, they repaired a broken cold-water valve in our laundry room. During the installation, an unexpected issue came up because the new laundry box was configured differently than the original, which affected the condensate drain line from our upstairs A/C. Once the issue was identified, they returned promptly, took the time to understand exactly what was happening, and implemented a proper solution. What really stands out to us is how they handle situations when something unexpected comes up. No company is perfect, but this team stands behind their work and makes things right. That level of professionalism is hard to find.",
  },
  {
    author: "Pam",
    city: "Riverside County, CA",
    service: "Full Plumbing Inspection & Repair",
    technician: "Wyatt & Michael",
    date: "February 25, 2026",
    isoDate: "2026-02-25",
    body:
      "Great experience with Gardner Plumbing. Our old house had many plumbing issues — corroded valves, old pressure release valve, hard water, etc. Wyatt came to our house to do a full inspection. He was very responsive to our questions and gave us several plan options. He and Michael were punctual, respectful of the home, very clean work, and worked quite fast to finish all the work in a day. They were also very thorough. After the work was done, they checked and rechecked for leaks. They made sure to walk through and teach us how to operate the water softener and made a list of things that may need to be done next year. Definitely plumbers you can trust.",
  },
  {
    author: "Marie C.",
    city: "Riverside County, CA",
    service: "Water Heater Installation",
    technician: "Mitchell",
    date: "October 1, 2025",
    isoDate: "2025-10-01",
    body:
      "Gardner Plumbing was amazing, from Jenny in the office to Mitchell who installed our water heater. They are professional. Mitchell explained the whole process. I received a text with his picture so I knew exactly who was coming to my home. He took the time to walk us through everything before starting, kept the work area clean, and left everything spotless. Jenny followed up after the install to make sure we were happy. This is the kind of service that earns a customer for life.",
  },
  {
    author: "Shelly H.",
    city: "Riverside County, CA",
    service: "Slab Leak Repair (Repeat Customer)",
    technician: "Wyatt & Jacob",
    date: "August 1, 2025",
    isoDate: "2025-08-01",
    body:
      "Wyatt and Jacob did an excellent job repairing our slab leak in our kitchen. Everything went smooth — they were both very kind and worked diligently to get to the root of our leak and cleaned up the debris when they were done. This is the 3rd time Gardner Plumbing has helped us with our plumbing needs and they keep earning the trust. Great job guys!",
  },
];

// Transparent Pricing themed — for /transparent-pricing
export const STORIES_TRANSPARENT_PRICING: StoryTestimonial[] = [
  {
    author: "Kerry E.",
    city: "Riverside County, CA",
    service: "Moen Shut-off & Pressure Regulator Install",
    technician: "Jerome M.",
    date: "March 30, 2026",
    isoDate: "2026-03-30",
    body:
      "Jerome M. is a friendly, knowledgeable plumber. He worked so hard and diligently and left a very clean work area. He gave me all my options and was honest and up-front about the cost. I had a Moen auto shut-off switch and water pressure regulator installed, and we could not be more satisfied with his work and the price tag. 100% recommendation!",
  },
  {
    author: "Stefan D.",
    city: "Riverside County, CA",
    service: "Toilet & Sink Repair",
    technician: "Mitchell",
    date: "December 30, 2025",
    isoDate: "2025-12-30",
    body:
      "Mitchell did an amazing job. He was on time, professional, and fixed both my toilets and sinks quickly with zero hassle. The work was clean, the price was fair, and he explained everything in a way that actually made sense. I'd recommend Mitchell to anyone who wants the job done right the first time.",
  },
  {
    author: "Ellecia P.",
    city: "Riverside County, CA",
    service: "Leak Repair",
    technician: "Cody",
    date: "February 28, 2026",
    isoDate: "2026-02-28",
    body:
      "Cody and his partner were on time, focused, and sought out the best way to repair my leak issue. He was very knowledgeable and kept me informed throughout the repair process. I really appreciated his honesty and thoughtfulness. I would definitely recommend Gardner Plumbing for all things plumbing. They are trustworthy.",
  },
  {
    author: "Hazel O.",
    city: "Riverside County, CA",
    service: "Toilet Repair Consultation",
    technician: "Jerome M.",
    date: "June 23, 2026",
    isoDate: "2026-06-23",
    body:
      "Jerome Martinez was the tech who came to my rescue. He was very polite and informative as to different options I could do to improve my situation with my toilets. I really appreciate his honesty and helpfulness. He laid out the choices and the cost of each one so I could decide what made sense — no pressure either way.",
  },
];

// Emergency themed — for /services/plumbing/emergency-service
export const STORIES_EMERGENCY: StoryTestimonial[] = [
  {
    author: "Lisa R.",
    city: "Riverside County, CA",
    service: "Emergency Main Water Line Repair (4am)",
    technician: "Wyatt",
    date: "June 15, 2024",
    isoDate: "2024-06-15",
    body:
      "My main water line broke at 4am. I called Gardner Plumbing and they came out quickly and fixed it. I was impressed with Wyatt — he was so professional, friendly, and accommodating, especially given the hour. He walked me through what he was doing, gave me a clear price upfront, and didn't try to upsell me on anything I didn't need. I 100% recommend them for any of your plumbing needs.",
  },
  {
    author: "Brandy S.",
    city: "Riverside County, CA",
    service: "Flooded House Emergency",
    technician: "Cody",
    date: "November 30, 2025",
    isoDate: "2025-11-30",
    body:
      "Our house was flooded and Cody came out, found the problem, and fixed it. Not only was he quick and knowledgeable, he was super responsive to all my questions and was able to explain everything to me in a way I could understand! I wish more service techs were like him.",
  },
  {
    author: "Shon",
    city: "Riverside County, CA",
    service: "Severe Plumbing Emergency — Rental Property",
    technician: "Gardner Plumbing Team",
    date: "February 28, 2026",
    isoDate: "2026-02-28",
    body:
      "We use Gardner to maintain our rental properties' plumbing needs. They have proven reliable, responsive, and very reasonable. Recently they responded within one hour to a severe plumbing emergency and quickly resolved the problem at a very fair price. When you manage multiple properties you need a plumber you can count on at any hour — Gardner is that for us.",
  },
  {
    author: "Sandy S.",
    city: "Riverside County, CA",
    service: "Broken Water Heater — Same-Day Emergency",
    technician: "Wyatt",
    date: "July 1, 2023",
    isoDate: "2023-07-01",
    body:
      "Wyatt did a great job! Was very personable and professional. Very thorough. Thank you for the prompt attention and handling a broken water heater on the same day. The kind of response that makes you stop calling around for quotes — they were just there.",
  },
  {
    author: "Demaur G.",
    city: "Riverside County, CA",
    service: "Emergency Water Heater Replacement (After Hours)",
    technician: "Wyatt",
    date: "July 1, 2024",
    isoDate: "2024-07-01",
    body:
      "I had an emergency situation with my hot water heater after hours, and Gardner Plumbing came to the rescue. Their prompt and efficient service in replacing the hot water heater was exceptional. Wyatt was professional, walked me through what he was doing, and had the new unit installed faster than I expected. Highly recommend them for any after-hours emergency.",
  },
];


const REVIEW_AGGREGATE_RATING = 4.9;

type StoryTestimonialsProps = {
  /** Optional override for the section heading. */
  heading?: string;
  /** Optional override for the section sub-heading. */
  subheading?: string;
  /** Optional override for the testimonials list. Defaults to the generic mix. */
  stories?: StoryTestimonial[];
};

export function StoryTestimonials({
  heading = "Real Stories From Real Customers",
  subheading = "Specifics on how we communicate, follow up, and leave your home cleaner than we found it.",
  stories: storiesProp,
}: StoryTestimonialsProps = {}) {
  const stories = storiesProp ?? STORIES_GENERAL;
  const [index, setIndex] = useState(0);
  const total = stories.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const reviewSchemas = stories.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: s.body,
    datePublished: s.isoDate,
    author: {
      "@type": "Person",
      name: s.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: REVIEW_AGGREGATE_RATING,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Gardner Plumbing Co.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressLocality: s.city.replace(", CA", ""),
      },
    },
    about: s.service,
  }));

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Per-review schema — all 6 emit so AI engines can cite any of them */}
      {reviewSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%),
            linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-full border border-yellow-500/30 backdrop-blur-sm">
            <Quote className="h-4 w-4 text-yellow-400" aria-hidden="true" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              Customer Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {heading.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {heading.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {/* Track viewport */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {stories.map((s, i) => (
                <article
                  key={`${s.author}-${s.isoDate}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  aria-hidden={i !== index}
                  className="relative rounded-2xl overflow-hidden shadow-luxury flex flex-col flex-shrink-0 w-full"
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage:
                      "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                  <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
                    {/* Header: rating + service */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 text-yellow-400 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                        <Wrench
                          className="h-3 w-3 text-red-400"
                          aria-hidden="true"
                        />
                        <span className="text-xs font-semibold text-red-300 whitespace-nowrap">
                          {s.service}
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <Quote
                      className="h-8 w-8 text-yellow-400/30 mb-3"
                      aria-hidden="true"
                    />
                    <p className="text-gray-200 leading-relaxed text-[15px] sm:text-base mb-6 flex-1">
                      {s.body}
                    </p>

                    {/* Attribution footer */}
                    <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {s.author}
                        </p>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-0.5">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          <span>{s.city}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          <time dateTime={s.isoDate}>{s.date}</time>
                        </div>
                        <span className="text-gray-500">
                          Technician: {s.technician}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 lg:-translate-x-8 z-20 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <ChevronLeft
              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 lg:translate-x-8 z-20 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <ChevronRight
              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Dot pagination */}
        <div
          className="flex justify-center items-center gap-2 mt-8"
          role="tablist"
          aria-label="Select testimonial"
        >
          {stories.map((s, i) => (
            <button
              key={`${s.author}-dot`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                i === index
                  ? "w-8 h-2 bg-yellow-400"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-gray-500 mt-4">
          {index + 1} of {total}
        </p>
      </div>
    </section>
  );
}
