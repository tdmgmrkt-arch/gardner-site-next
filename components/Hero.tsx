"use client";


import { SchedulerModal } from "./SchedulerModal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Phone, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
      } else {
        setSuccess("❌ There was an error submitting the form. Please try again.");
      }
    } catch (err) {
      console.error("⚡ Submission error:", err);
      setSuccess("⚡ Submission failed, please check your connection and try again.");
    }
  };

  return (
    <section
      className="relative overflow-hidden min-h-[80vh] flex items-center"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/garnderplumbingcoemployeearrival.webp"
          alt="Hero section"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column */}
          <div className="text-left animate-fade-in">
            <div className="mb-4 sm:mb-6 animate-slide-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3 text-white drop-shadow-lg tracking-tight">
                Gardner Plumbing Co.
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                Your Trusted Local Plumbing Experts
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-4 sm:mb-6 max-w-xl drop-shadow-sm">
                Need trusted plumbing professionals for your home or business? Gardner Plumbing Co. is your local,
                licensed team ready for repairs, installs, or remodels. From leaky pipes to major projects, we're just a
                call away.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              {/* Call Now */}
              <a href="tel:9512464337" className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 
                            hover:from-red-700 hover:via-red-600 hover:to-red-700 
                            text-white px-4 sm:px-6 py-3 font-bold shadow-luxury 
                            rounded-xl border border-red-400/20 hover-lift"
                >
                  <Phone className="h-4 w-4 mr-2" /> Call Now: (951) 246-4337
                </Button>
              </a>

              {/* Book Online via ServiceTitan */}
              <SchedulerModal />
            </div> {/* This closes the "Action buttons" div */}
          </div> {/* This closes the "Left column" div */}

          {/* ✅ Right form with preserved styling */}
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
                  Schedule your free consultation today. We'll call you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-10">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="group">
                    <Label htmlFor="firstName" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
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
                    <Label htmlFor="lastName" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
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
                  <Label htmlFor="email" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
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
                    <Label htmlFor="phone" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
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
                    <Label htmlFor="postalCode" className="text-gray-200 font-semibold mb-1.5 sm:mb-2 block text-xs sm:text-sm">
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
                    {/* ✅ placeholder (default, not selectable) */}
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

                  {/* ✅ Custom arrow ONLY */}
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
                    onCheckedChange={(checked) =>
                      handleInputChange("consent", checked as boolean)
                    }
                    className="mt-1 border-2 border-gray-500 data-[state=checked]:bg-blue-600 
                              data-[state=checked]:border-blue-600 w-4 h-4 rounded-sm 
                              hover:border-blue-400 transition-colors bg-gray-800/40"
                  />
                  <Label
                    htmlFor="consent"
                    className="text-[10px] sm:text-sm text-gray-300 leading-snug"
                  >
                    I agree to receive SMS messages from Gardner Plumbing Co.{" "}
                    <span className="text-gray-400">Reply STOP to opt-out.</span>
                    <a
                      href="/privacy-policy"
                      className="text-blue-400 underline hover:text-blue-300"
                    >
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
                    className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-bold w-full rounded-xl border-2 border-red-400/20 hover-lift disabled:opacity-50"
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
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl" />
    </section>


  );
}
