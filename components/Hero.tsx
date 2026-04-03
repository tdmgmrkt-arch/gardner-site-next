"use client";

import React, { FC, useState, useEffect } from "react";
import { Phone, Star, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { SchedulerModal } from "./SchedulerModal";
import { Modal } from "./Modal";
import { LeadForm } from "./LeadForm";

const ReviewsCarousel: FC = () => {
  const reviews = [
    {
      id: 1,
      text: "Gardner Plumbing Co. was fantastic! They were quick, professional, and fixed my issue perfectly. Highly recommend their service!",
      author: "Jane D.",
    },
    {
      id: 2,
      text: "Great experience with this team. They were knowledgeable and friendly. The work was done efficiently and the price was fair.",
      author: "John S.",
    },
    {
      id: 3,
      text: "I had a major leak, and they responded immediately. The technician was great and solved the problem with no hassle. A true lifesaver.",
      author: "Robert C.",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentReview((prev) => (prev + 1) % reviews.length),
      5000
    );
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div
      className="
        p-4 sm:p-6 mt-4 sm:mt-6
        rounded-xl sm:rounded-2xl
        border border-white/10
        shadow-lg
        mb-6 sm:mb-8
        transition-all duration-300
        max-w-2xl mx-auto
      "
      style={{
        background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
        boxShadow: `0 0 20px rgba(59,130,246,0.2)`,
      }}
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <Image src="/google-logo.webp" alt="Google Logo" width={24} height={24} />
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
      </div>
      <a
        href="https://www.google.com/search?q=Gardner+Plumbing+Company+Reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 text-sm font-semibold mb-4 flex items-center justify-center gap-2 hover:text-white transition-colors"
      >
        <span className="text-white font-bold text-lg">5-Star Rating</span>
        <span className="text-gray-400 font-medium">
          on Google from <span className="text-white font-semibold">800+ Reviews</span>
        </span>
      </a>
      <div className="relative overflow-hidden h-20 sm:h-24">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
              index === currentReview
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
          >
            <p className="text-white text-[13px] sm:text-lg italic leading-snug text-center">
              "{review.text}"
            </p>
            <p className="text-gray-400 text-[11px] sm:text-sm mt-1 text-center">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden min-h-[85vh] flex items-center"
      style={{
        background: `
          radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
          linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
        `,
      }}
    >
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden lg:block animate-fadeIn">
        <Image
          src="/garnderplumbingcoemployeearrival.webp"
          alt="Hero background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center scale-[1.05]"
        />
        <div
          className="absolute inset-0 hidden lg:block pointer-events-none"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.3) 0%,
                rgba(0,0,0,0.5) 30%,
                rgba(0,0,0,0.7) 60%,
                rgba(0,0,0,0.85) 85%,
                rgba(0,0,0,0.95) 100%
              )
            `,
            zIndex: 5,
          }}
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 block lg:hidden animate-fadeIn overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url('/mobileheroimage2.png')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            transform: "translateY(-11%) scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.05) 0%,
                rgba(0,0,0,0.65) 30%,
                rgba(0,0,0,0.96) 50%,
                rgba(0,0,0,0.65) 70%,
                rgba(0,0,0,0.05) 100%
              )
            `,
            zIndex: 5,
          }}
        />
      </div>

      {/* Content - Centered Layout */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-[11vh] sm:pt-[10vh] lg:pt-8">
        <div className="text-center animate-fade-in">
          {/* Heading Section */}
          <div className="mb-6 sm:mb-8 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4 text-white
              drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] tracking-tight">
              Gardner Plumbing Co.
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6
              bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Your Trusted Local Plumbing Experts
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed mb-6 max-w-2xl mx-auto
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Need trusted plumbing professionals for your home or business? Gardner Plumbing Co. is your local,
              licensed team ready for repairs, installs, or remodels. From leaky pipes to major projects, we're just a call away.
            </p>
          </div>

          {/* Reviews Carousel */}
          <ReviewsCarousel />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            {/* Primary CTA - Book Online (Large & Prominent) */}
            <SchedulerModal
              trigger={
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] h-16 sm:h-20
                    bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600
                    hover:from-blue-700 hover:via-blue-600 hover:to-blue-700
                    text-white text-lg sm:text-xl lg:text-2xl font-bold
                    shadow-[0_8px_30px_rgba(59,130,246,0.5)]
                    hover:shadow-[0_12px_40px_rgba(59,130,246,0.6)]
                    rounded-2xl border-2 border-blue-400/30
                    transition-all duration-300 hover:scale-[1.03]
                    animate-pulse-subtle"
                >
                  <Calendar className="h-6 w-6 sm:h-7 sm:w-7 mr-3" />
                  Book Online Now
                </Button>
              }
            />

            {/* Secondary CTA - Get Free Estimate */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[280px] h-14 sm:h-16
                bg-transparent border-2 border-white/40
                hover:bg-white/10 hover:border-white/60
                text-white text-base sm:text-lg font-semibold
                rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              Get Free Estimate
            </Button>
          </div>

          {/* Call Now - Tertiary Option */}
          <div className="mt-6">
            <a
              href="tel:9514285551"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-base sm:text-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Or call us: <span className="font-semibold text-white">(951) 428-5551</span></span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-400 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl hidden lg:block" />

      {/* Free Estimate Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LeadForm />
      </Modal>
    </section>
  );
}
