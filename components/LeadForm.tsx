"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Phone } from "lucide-react";

// Extend window type for reCAPTCHA Enterprise
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const RECAPTCHA_SITE_KEY = "6LeEL0QsAAAAAOdOJFRc9PxAimmuVchWMVZjBcBk";

export function LeadForm() {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const executeRecaptcha = async (): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!window.grecaptcha?.enterprise) {
        console.error("reCAPTCHA Enterprise not loaded");
        resolve(null);
        return;
      }

      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(
            RECAPTCHA_SITE_KEY,
            { action: "SUBMIT_FORM" }
          );
          resolve(token);
        } catch (error) {
          console.error("reCAPTCHA execution error:", error);
          resolve(null);
        }
      });
    });
  };

  const verifyRecaptcha = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, action: "SUBMIT_FORM" }),
      });

      const data = await response.json();
      return data.success === true;
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");

    try {
      // Execute reCAPTCHA Enterprise
      const recaptchaToken = await executeRecaptcha();

      if (!recaptchaToken) {
        setSuccess("❌ Security verification failed. Please refresh and try again.");
        setIsSubmitting(false);
        return;
      }

      // Verify the token server-side
      const isVerified = await verifyRecaptcha(recaptchaToken);

      if (!isVerified) {
        setSuccess("❌ Security check failed. Please try again later.");
        setIsSubmitting(false);
        return;
      }

      // Submit form to lead connector
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/kfDjJzsEadItLomlnfYH/webhook-trigger/bc3b8cb4-2ed4-49b5-85a9-99ba593b29ad",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
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
        setSuccess(
          "✅ Thanks! Your request has been submitted. We'll contact you shortly."
        );
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
<div className="text-center mb-6">
  <h2 className="text-3xl sm:text-4xl font-bold text-white">
    Get Free Estimate
  </h2>
  <p className="text-gray-300 text-base mt-2">
    Schedule your free consultation today. We’ll call you within 24 hours.
  </p>

  {/* Divider line */}
  <div className="mt-4 mb-8 border-b border-gray-600/40 w-3/4 mx-auto"></div>
</div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6 relative z-10"
      >
        {/* First/Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="firstName"
              className="text-gray-200 font-semibold text-sm block mb-1"
            >
              First Name*
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="bg-gray-800/60 border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <Label
              htmlFor="lastName"
              className="text-gray-200 font-semibold text-sm block mb-1"
            >
              Last Name*
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="bg-gray-800/60 border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label
            htmlFor="email"
            className="text-gray-200 font-semibold text-sm block mb-1"
          >
            Email*
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-gray-800/60 border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone & ZIP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="phone"
                className="text-gray-200 font-semibold text-sm block mb-1"
              >
                Phone*
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-gray-800/60 border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="postalCode"
                className="text-gray-200 font-semibold text-sm block mb-1"
              >
                ZIP Code*
              </Label>
              <Input
                id="postalCode"
                type="text"
                placeholder="92555"
                value={formData.postalCode}
                onChange={(e) => handleInputChange("postalCode", e.target.value)}
                className="bg-gray-800/60 border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-blue-500"
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
                    <option value="System Inspection">System Inspection</option>
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
        <div className="flex items-start gap-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) =>
              handleInputChange("consent", checked as boolean)
            }
            className="mt-1 border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
          />
          <Label
            htmlFor="consent"
            className="text-xs text-gray-300 leading-relaxed"
          >
            I agree to receive SMS messages from Gardner Plumbing Co.{" "}
            <a
              href="/privacy-policy"
              className="text-blue-400 underline hover:text-blue-300"
            >
              privacy policy
            </a>
            . Reply STOP to opt-out.
          </Label>
        </div>

        {/* Submit */}
        <div>
          <Button
            type="submit"
            size="lg"
            disabled={!formData.consent || isSubmitting}
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SUBMITTING...
              </>
            ) : (
              <>
                <Phone className="h-4 w-4 mr-2" />
                GET FREE ESTIMATE
              </>
            )}
          </Button>
        </div>

        {/* Success/Error Message */}
        {success && (
          <p className="text-green-400 font-semibold mt-3 text-center">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}
