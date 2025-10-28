"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw, Phone, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-red-500/10 rounded-full p-6">
            <AlertTriangle className="h-20 w-20 text-red-500" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Something Went Wrong
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            We've encountered an unexpected error. Don't worry - our team has been notified and we're working to fix it.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Button
            onClick={reset}
            size="lg"
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
          >
            <RefreshCcw className="h-5 w-5 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-red-500 text-red-500 hover:bg-red-500/10"
            >
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">What You Can Do</h3>
          <div className="text-left space-y-2 text-gray-300">
            <p>→ Refresh the page or try again in a few moments</p>
            <p>→ Return to the <Link href="/" className="text-red-400 hover:underline">homepage</Link></p>
            <p>→ Browse our <Link href="/services" className="text-red-400 hover:underline">services</Link></p>
            <p>→ Contact us directly for immediate assistance</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-2">Need Help Right Away?</h3>
          <p className="text-gray-400 mb-4">
            If you need immediate plumbing assistance, our 24/7 emergency team is standing by.
          </p>
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
      </div>
    </div>
  );
}
