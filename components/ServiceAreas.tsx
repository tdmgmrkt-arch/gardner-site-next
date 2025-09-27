"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import Image from "next/image";

const cityLinks: Record<string, string> = {
  Temecula: "https://temeculaca.gov",
  Murrieta: "https://murrietaca.gov",
  Perris: "https://www.cityofperris.org",
  Menifee: "https://cityofmenifee.us",
  "Canyon Lake": "https://www.canyonlakeca.gov",
  "Lake Elsinore": "https://www.lake-elsinore.org",
  Corona: "https://www.coronaca.gov",
  "Moreno Valley": "https://moval.org",
  Riverside: "https://riversideca.gov",
  Hemet: "https://www.hemetca.gov",
  "San Jacinto": "https://www.sanjacintoca.gov",
  Wildomar: "https://cityofwildomar.org",
};

export default function ServiceAreas() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="service-area" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%),
              linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Proudly Serving{" "}
              <span className="text-gradient bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Riverside County
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              Gardner Plumbing Co. provides comprehensive <Link href="/services" className="text-red-400 hover:text-red-300 underline">plumbing services</Link> throughout Riverside County and surrounding areas.
            </p>

            {/* Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {Object.keys(cityLinks).map((city) => (
                <a
                  key={city}
                  href={cityLinks[city]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 glassmorphism-dark rounded-lg border border-white/10 hover:border-blue-500/30 transition-all hover:scale-[1.02]"
                >
                  <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-white font-medium">{city}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              {showMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109144.45437258422!2d-117.20587604273275!3d33.571118777583706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc9d0f093fb225%3A0xef87e6a2bf83ed0f!2sGardner%20Plumbing%20Company!5e0!3m2!1sen!2sus!4v1755821362571!5m2!1sen!2sus"
                  width="100%"
                  height="520"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gardner Plumbing Co. Service Area"
                  className="w-full h-80 sm:h-96 lg:h-[520px] rounded-2xl"
                />
              ) : (
                <div
                  className="relative w-full h-80 sm:h-96 lg:h-[520px] cursor-pointer"
                  onClick={() => setShowMap(true)}
                >
                  <Image
                    src="/gardnergooglemaps.webp"
                    alt="Click to load map"
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-2xl">
                    <span className="text-white font-bold bg-red-600 px-4 py-2 rounded-lg shadow-lg">
                      Click to Load Map
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
