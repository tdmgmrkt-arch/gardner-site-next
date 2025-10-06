"use client";

import React, { FC, useState, useEffect } from "react";
import { Phone, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { SchedulerModal } from "./SchedulerModal";

// ✅ Fade-in animation (add this to your globals.css if not present)
/*
@keyframes fadeIn {
  from { opacity: 0; transform: scale(1.03); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}
*/

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
    p-3.5 sm:p-6 mt-1 sm:mt-4 
    rounded-md sm:rounded-xl 
    border border-white/10 
    shadow-sm sm:shadow-lg 
    mb-3 sm:mb-8 
    transition-all duration-300
  "
  style={{
    background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
    boxShadow: `0 0 15px rgba(59,130,246,0.25)`, // softer on mobile
  }}
>
      <div className="flex items-center gap-2 mb-2">
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
        className="text-gray-300 text-sm font-semibold mb-4 flex items-center gap-2 hover:text-white transition-colors"
      >
        <span className="text-white font-bold text-lg">5-Star Rating</span>
        <span className="text-gray-400 font-medium">
          on Google from <span className="text-white font-semibold">400+ Reviews</span>
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
            <p className="text-white text-[13px] sm:text-lg italic leading-snug">
              "{review.text}"
            </p>
            <p className="text-gray-400 text-[11px] sm:text-sm mt-1">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    desiredService: "",
    consent: false,
  });
  const [success, setSuccess] = useState("");

  const handleInputChange = (field: string, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/kfDjJzsEadItLomlnfYH/webhook-trigger/bc3b8cb4-2ed4-49b5-85a9-99ba593b29ad",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            postal_code: formData.postalCode,
            desired_service: formData.desiredService,
            terms_and_conditions: formData.consent ? "true" : "false",
          }),
        }
      );
      if (response.ok) {
        setSuccess("✅ Thanks! Your request has been submitted. We’ll contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          postalCode: "",
          desiredService: "",
          consent: false,
        });
      } else setSuccess("❌ There was an error submitting the form. Please try again.");
    } catch {
      setSuccess("⚡ Submission failed, please check your connection and try again.");
    }
  };

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
        rgba(0,0,0,0) 0%,        /* top stays fully visible */
        rgba(0,0,0,0.2) 20%, 
        rgba(0,0,0,0.5) 60%,     /* subtle mid fade */
        rgba(0,0,0,0.7) 85%,     /* darkens near bottom */
        rgba(0,0,0,0.85) 100%    /* strong base fade for text/buttons */
      )
    `,
    zIndex: 5,
  }}
/>

      </div>

    {/* Mobile Background (final tuned version for readability + balance) */}
    <div className="absolute inset-0 block lg:hidden animate-fadeIn overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/mobileheroimage2.png')",
          backgroundPosition: "top center", // anchors image to top
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          transform: "translateY(-11%) scale(1)", // remove offset
          transition: "transform 0.4s ease",
        }}
      />
      <div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.05) 0%,     /* lighter at top */
        rgba(0,0,0,0.65) 30%,   /* starts darkening */
        rgba(0,0,0,0.96) 50%,   /* darkest point — center */
        rgba(0,0,0,0.65) 70%,   /* fades back out */
        rgba(0,0,0,0.05) 100%    /* lighter again at bottom */
      )
    `,
    zIndex: 5,
  }}
/>



    </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[11vh] sm:pt-[10vh] lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="text-left animate-fade-in">
            <div className="mb-5 sm:mb-6 animate-slide-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3 text-white 
              drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] tracking-tight">
                Gardner Plumbing Co.
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 
              bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                Your Trusted Local Plumbing Experts
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-100 leading-relaxed mb-6 max-w-xl 
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                Need trusted plumbing professionals for your home or business? Gardner Plumbing Co. is your local,
                licensed team ready for repairs, installs, or remodels. From leaky pipes to major projects, we're just a call away.
              </p>
            </div>

            <ReviewsCarousel />

            <div className=" mt-2 flex flex-col gap-3 sm:gap-4">
              <a href="tel:9512464337" className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 
                             hover:from-red-700 hover:via-red-600 hover:to-red-700 
                             text-white px-4 sm:px-6 py-3 font-bold shadow-[0_6px_20px_rgba(255,0,0,0.4)] 
                             rounded-xl border border-red-400/20 transition-transform hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4 mr-2" /> Call Now: (951) 246-4337
                </Button>
              </a>

              <SchedulerModal />
            </div>
          </div>

          {/* RIGHT COLUMN (FORM) */}
          <div className="animate-fade-in mt-6 lg:mt-0">
            <div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 w-full border border-white/20"
              style={{
                background: `linear-gradient(145deg, #202020 0%, #1a1a1a 100%)`,
                boxShadow: `
                  0 25px 50px rgba(0, 0, 0, 0.4),
                  0 10px 25px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                  0 0 0 1px rgba(59, 130, 246, 0.1)
                `,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl sm:rounded-3xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="text-center mb-4 sm:mb-6 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  Get Free Estimate
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Schedule your free consultation today. We'll call you within 24 hours.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-10">
  {/* Name Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div className="group">
      <Label
        htmlFor="firstName"
        className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm"
      >
        First Name*
      </Label>
      <Input
        id="firstName"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => handleInputChange("firstName", e.target.value)}
        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500/20"
        required
      />
    </div>
    <div className="group">
      <Label
        htmlFor="lastName"
        className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm"
      >
        Last Name*
      </Label>
      <Input
        id="lastName"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => handleInputChange("lastName", e.target.value)}
        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500/20"
        required
      />
    </div>
  </div>

  {/* Email */}
  <div className="group">
    <Label
      htmlFor="email"
      className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm"
    >
      Email*
    </Label>
    <Input
      id="email"
      type="email"
      placeholder="your@email.com"
      value={formData.email}
      onChange={(e) => handleInputChange("email", e.target.value)}
      className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500/20"
      required
    />
  </div>

  {/* Phone + ZIP */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div className="group">
      <Label
        htmlFor="phone"
        className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm"
      >
        Phone*
      </Label>
      <Input
        id="phone"
        type="tel"
        placeholder="(555) 123-4567"
        value={formData.phone}
        onChange={(e) => handleInputChange("phone", e.target.value)}
        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500/20"
        required
      />
    </div>
    <div className="group">
      <Label
        htmlFor="postalCode"
        className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm"
      >
        ZIP Code*
      </Label>
      <Input
        id="postalCode"
        type="text"
        placeholder="92555"
        value={formData.postalCode}
        onChange={(e) => handleInputChange("postalCode", e.target.value)}
        className="border-2 border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500/20"
        required
      />
    </div>
  </div>

  {/* ✅ Desired Service */}
  <div className="group relative">
    <Label
      htmlFor="desiredService"
      className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm group-focus-within:text-blue-400 transition-colors"
    >
      Desired Service*
    </Label>

    <select
      id="desiredService"
      value={formData.desiredService}
      onChange={(e) => handleInputChange("desiredService", e.target.value)}
      className="appearance-none border-2 border-gray-600 bg-gray-800/70 text-white 
                 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-gray-800 h-10 sm:h-11 
                 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg 
                 shadow-sm hover:border-blue-400 hover:bg-gray-800/90 backdrop-blur-sm w-full 
                 px-3 pr-8 cursor-pointer"
      required
    >
      <option value="" disabled hidden>
        Select a service
      </option>
      <option value="Drain Cleaning">Drain Cleaning</option>
      <option value="Leak Detection">Leak Detection</option>
      <option value="Water Heaters">Water Heaters</option>
      <option value="Toilet Repair">Toilet Repair</option>
      <option value="Piping & Repiping">Piping & Repiping</option>
      <option value="Garbage Disposals">Garbage Disposals</option>
      <option value="Commercial Plumbing">Commercial Plumbing</option>
      <option value="Hydro Jetting">Hydro Jetting</option>
      <option value="Sewer & Septic">Sewer & Septic</option>
      <option value="Maintenance Plans">Maintenance Plans</option>
      <option value="Emergency Service">Emergency Service</option>
      <option value="Moen Flo Installation">Moen Flo Installation</option>
      <option value="System Inspections">System Inspections</option>
      <option value="Gas Lines">Gas Lines</option>
      <option value="Water Filtration">Water Filtration</option>
      <option value="Other">Other</option>
    </select>

    {/* Custom dropdown arrow */}
    <div className="pointer-events-none absolute inset-y-0 top-7 right-3 flex items-center">
      <svg
        className="h-4 w-4 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>

  {/* Consent */}
  <div className="flex items-start space-x-2 sm:space-x-3 pt-3">
    <Checkbox
      id="consent"
      checked={formData.consent}
      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
      className="mt-1 border-2 border-gray-500 data-[state=checked]:bg-blue-600 
                 data-[state=checked]:border-blue-600 w-4 h-4 rounded-sm 
                 hover:border-blue-400 transition-colors bg-gray-800/40"
    />
    <Label htmlFor="consent" className="text-[10px] sm:text-sm text-gray-300 leading-snug">
      I agree to receive SMS messages from Gardner Plumbing Co.{" "}
      <span className="text-gray-400">Reply STOP to opt-out.</span>{" "}
      <a href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">
        Privacy Policy
      </a>
    </Label>
  </div>

  {/* Submit */}
  <div className="pt-3 sm:pt-4">
    <Button
      type="submit"
      size="lg"
      disabled={!formData.consent}
      className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 
                 hover:from-red-700 hover:via-red-600 hover:to-red-700 
                 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-bold 
                 w-full rounded-xl border-2 border-red-400/20 hover-lift disabled:opacity-50"
    >
      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
      GET FREE ESTIMATE
    </Button>

    {success && (
      <p className="text-green-400 font-semibold mt-3 text-center">{success}</p>
    )}
  </div>
</form>

            </div>
          </div>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl hidden lg:block" />
    </section>
  );
}
