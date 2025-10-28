"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, Phone, ArrowLeft } from "lucide-react";

export function NotFoundContent() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg">
            Looks like this pipe sprung a leak! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link href="/">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
            >
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-red-500 text-red-500 hover:bg-red-500/10"
            >
              <Search className="h-5 w-5 mr-2" />
              Browse Services
            </Button>
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link href="/services/emergency-service" className="text-gray-300 hover:text-red-400 transition-colors">
              → Emergency Service
            </Link>
            <Link href="/services/water-heater-service" className="text-gray-300 hover:text-red-400 transition-colors">
              → Water Heater Service
            </Link>
            <Link href="/services/drain-cleaning" className="text-gray-300 hover:text-red-400 transition-colors">
              → Drain Cleaning
            </Link>
            <Link href="/services/leak-detection" className="text-gray-300 hover:text-red-400 transition-colors">
              → Leak Detection
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-red-400 transition-colors">
              → Blog & Tips
            </Link>
            <Link href="/contact-us" className="text-gray-300 hover:text-red-400 transition-colors">
              → Contact Us
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
          <p className="text-gray-400 mb-4">Our team is available 24/7 for emergency plumbing services.</p>
          <Link href="/contact-us">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us Now
            </Button>
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
      </div>
    </div>
  );
}
