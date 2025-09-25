"use client";

import { SchedulerModal } from "./SchedulerModal";
import { Button } from "./ui/button";
import { Phone, Mail, Menu, MapPin, ChevronDown, Clock, Star, X,Wrench, Home, User, Facebook, Instagram, Calendar } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";

const logo = "/gplogo.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // ---------- Link maps ----------
  const serviceLinks: Record<string, string> = {
    "Drain Cleaning": "/services/drain-cleaning",
    "Leak Detection": "/services/leak-detection",
    "Water Heaters": "/services/water-heater-service",
    "Toilet Repair": "/services/toilet-installation-and-repair",
    "Piping & Repiping": "/services/piping-and-repiping",
    "Garbage Disposals": "/services/garbage-disposal-service",
    "Commercial Plumbing": "/services/commercial-plumbing",
    "Hydro Jetting": "/services/hydro-jetting",
    "Sewer & Septic": "/services/sewer-and-septic",
    "Maintenance Plans": "/services/maintenance-plans",
    "Emergency Service": "/services/emergency-service",
    "Moen Flo Installation" : "/services/moen-flo-installation",
    "System Inspections": "/services/65-point-inspection",
    "Gas Lines": "/services/gas-lines",
    "Water Filtration": "/services/water-filtration-system",
  };

  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services", dropdown: true },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact-us", label: "Contact" },
  ];

  // ---------- Link maps ----------
  const residentialLinks: Record<string, string> = {
   "Drain Cleaning": "/services/drain-cleaning",
    "Leak Detection": "/services/leak-detection",
    "Water Heaters": "/services/water-heater-service",
    "Toilet Repair": "/services/toilet-installation-and-repair",
    "Piping & Repiping": "/services/piping-and-repiping",
    "Garbage Disposals": "/services/garbage-disposal-service",
    "Commercial Plumbing": "/services/commercial-plumbing",
    "Hydro Jetting": "/services/hydro-jetting",
    "Sewer & Septic": "/services/sewer-and-septic",
    "Maintenance Plans": "/services/maintenance-plans",
    "Emergency Service": "/services/emergency-service",
    "Moen Flo Installation" : "/services/moen-flo-installation",
    "System Inspections": "/services/65-point-inspection",
    "Gas Lines": "/services/gas-lines",
    "Water Filtration": "/services/water-filtration-system",
  };

  const commercialLinks: Record<string, string> = {
    "Commercial Plumbing": "/services/commercial-plumbing",
    "Hydro Jetting": "/services/hydro-jetting",
    "Sewer & Septic": "/services/sewer-and-septic",
    "Maintenance Plans": "/services/maintenance-plans",
    "Emergency Service": "/services/emergency-service",
    "System Inspections": "/services/65-point-inspection",
  };

  const emergencyLinks: Record<string, string> = {
    "24/7 Service": "/services/emergency-service",
    "Burst Pipes": "/services/burst-pipes",
    "Water Damage": "/services/water-damage",
    "Gas Lines": "/services/gas-lines",
    "Backups": "/services/backups",
    "No Hot Water": "/services/no-hot-water",
  };
  // --------------------------------

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 250);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Top notification bar */}
      <div
        className="relative overflow-hidden text-white py-1 sm:py-1.5 lg:py-2 px-2 sm:px-4 m-0"
        style={{
          background: `linear-gradient(90deg, #8B0000 0%, #DC2626 100%)`,
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(139, 0, 0, 0.3)
          `,
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.2) 30%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0.2) 70%,
              transparent 100%
            )`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between text-[10px] sm:text-xs lg:text-sm">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <a href="/services/emergency-service" aria-label="24/7 Emergency Service">
                  <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 drop-shadow-sm" />
                </a>
                <a href="/services/emergency-service" className="font-medium drop-shadow-sm text-[10px] sm:text-xs lg:text-sm">
                  24/7 Emergency Service
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <a href="/reviews" aria-label="See Reviews">
                  <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-300" />
                </a>
                <a href="/reviews" className="text-xs lg:text-sm">4.9★ Rated Service</a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-1 sm:gap-2">
                <a href="/reviews" aria-label="Service Area">
                  <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4" />
                </a>
                <a href="#service-area" className="hidden md:inline text-xs lg:text-sm">Serving Greater Riverside Area</a>
                <a href="#service-area" className="md:hidden text-xs">Local Service</a>
              </div>
              <div className="flex items-center gap-0.5 sm:gap-1 lg:gap-2 font-medium">
                <a href="tel:9512464337" aria-label="Call (951) 246-4337">
                  <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4" />
                </a>
                <a href="tel:9512464337" className="text-[10px] sm:text-xs lg:text-sm">(951) 246-4337</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - sticky */}
      <header
        className="relative text-white shadow-luxury sticky top-0 z-50 m-0"
        style={{
          background: `linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)`,
        }}
      >
        {/* decorative overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `,
          }}
        />

        <nav
          className="relative z-50 py-2 sm:py-3 lg:py-4 m-0 backdrop-blur-sm"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
            boxShadow: `
              0 1px 3px rgba(0, 0, 0, 0.1),
              0 8px 32px rgba(0, 0, 0, 0.15),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05)
            `,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center hover-lift">
                <a href="/" aria-label="Go to homepage">
                  <img src={logo} alt="Gardner Plumbing Co." className="h-8 sm:h-10 lg:h-12 xl:h-14 w-auto drop-shadow-lg" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="/" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  Home
                </a>
                <a href="/about-us" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  About Us
                </a>

                {/* Services */}
                <div
                  className="group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
  href="/services"
  className="flex items-center gap-1 text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm py-4 px-1"
>
  Services
  <ChevronDown
    className="h-4 w-4 transition-transform duration-300"
    style={{ transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
  />
</a>

                  {isServicesOpen && (
                    <>
                      {/* Invisible bridge under the nav to keep hover while moving down */}
                      <div
                        className="absolute inset-x-0 top-full h-8 z-40"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />

                      {/* Full-width dropdown */}
                      <div
                        ref={dropdownRef}
                        className="absolute inset-x-0 top-full w-full shadow-luxury border-t-4 border-red-600 z-70 animate-fade-in"
                        style={{
                          background: `
                            radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                            linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)
                          `,
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* texture overlay */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `
                              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
                            `,
                          }}
                        />

                        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8">
                          <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-12 gap-8">
                              {/* Branding column */}
                              <div className="col-span-4">
                                <div className="glassmorphism-dark rounded-2xl p-6 sm:p-8 h-full border border-white/10 shadow-luxury hover-lift transition-all duration-500">
                                  <img src={logo} alt="Gardner Plumbing Co." className="h-16 w-auto mb-4 drop-shadow-lg" />
                                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">Gardner Plumbing Co.</h3>

                                  {/* Business Hours */}
                                  <div className="mb-6">
                                    <h4 className="text-base text-white mb-3 pb-2 border-b-2 border-red-600 drop-shadow-sm">
                                      Business Hours
                                    </h4>
                                    <div className="space-y-1.5">
                                      {/* Office Hours */}
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Office (Mon - Fri)</span>
                                        <span className="text-gray-400 text-sm">8:00 AM - 4:00 PM</span>
                                      </div>

                                      {/* Service Hours */}
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Service (Mon - Fri)</span>
                                        <span className="text-gray-400 text-sm">8:00 AM - 5:00 PM</span>
                                      </div>

                                      {/* Weekend */}
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Saturday - Sunday</span>
                                        <span className="text-gray-400 text-sm">Emergency Only</span>
                                      </div>

                                      {/* Emergency */}
                                      <div className="pt-1.5 border-t border-gray-600">
                                        <div className="flex justify-between items-center">
                                          <span className="text-red-400 text-sm font-medium">Emergency</span>
                                          <span className="text-red-400 text-sm font-medium">24/7 Available</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                                                    {/* Trust indicators */}
                                  <div className="space-y-3 mb-6">
                                    <a href="/services/emergency-service" className="flex items-center gap-3 group hover-lift">
                                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Clock className="h-4 w-4 text-white drop-shadow-sm" />
                                      </div>
                                      <span className="text-gray-300 text-sm font-medium drop-shadow-sm">24/7 Emergency Service</span>
                                    </a>
                                    <a href="/about-us" className="flex items-center gap-3 group hover-lift">
                                      <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                                        <Phone className="h-4 w-4 text-white drop-shadow-sm" />
                                      </div>
                                      <span className="text-gray-300 text-sm font-medium drop-shadow-sm">Licensed & Insured</span>
                                    </a>
                                    <a href="/reviews" className="flex items-center gap-3 group hover-lift">
                                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Star className="h-4 w-4 text-white drop-shadow-sm" />
                                      </div>
                                      <span className="text-gray-300 text-sm font-medium drop-shadow-sm">4.9★ Customer Rating</span>
                                    </a>
                                  </div>

                                  <a href="tel:9512464337">
                                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20">
                                      <Phone className="mr-2 h-4 w-4" />
                                      Call Now
                                    </Button>
                                  </a>
                                </div>
                              </div>

                          
                              {/* Services grid */}
                              <div className="col-span-8 grid grid-cols-10 gap-8">
                                {/* Residential (60%) */}
                                <div className="col-span-6 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                    <a href="/services">
                                      <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                        Our Services
                                      </h4>
                                    </a>
                                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                                      {[
                                        { name: "Drain Cleaning", desc: "Professional clearing" },
                                        { name: "Commercial Plumbing", desc: "Business solutions" },
                                        { name: "Leak Detection", desc: "Quick detection & fix" },
                                        { name: "Water Heaters", desc: "Install & service" },
                                        { name: "Hydro Jetting", desc: "High-pressure cleaning" },
                                        { name: "Toilet Repair", desc: "Complete solutions" },
                                        { name: "Piping & Repiping", desc: "New & replacement" },
                                        { name: "Garbage Disposals", desc: "Faucets & sinks" },
                                        { name: "Sewer & Septic", desc: "Main line service" },
                                        { name: "Maintenance Plans", desc: "Preventive care" },
                                        { name: "Water Filtration", desc: "Pure Water Solutions" },
                                        { name: "System Inspections", desc: "Complete checks" },
                                        { name: "Moen Flo Installation", desc: "Smart Water Monitors"},
                                        { name: "Emergency Service", desc: "24/7 response" },
                                      ].map((service) => (
                                        <li key={service.name}>
                                          <a
                                            href={residentialLinks[service.name] ?? "/services/commercial-plumbing"}
                                            className="group block p-2 rounded-lg hover:bg-white/3 transition-all duration-300"
                                          >
                                            <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                              {service.name}
                                            </div>
                                            <div className="nav-dropdown-service-desc text-xs hover:white-500 transition-colors duration-300">
                                              {service.desc}
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Emergency */}
                                  <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                    <a href="/services/emergency-service">
                                      <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                        Emergency
                                      </h4>
                                    </a>
                                    <ul className="grid grid-cols-2 gap-y-3">
                                      {[
                                        { name: "24/7 Service", desc: "Always available" },
                                        { name: "Burst Pipes", desc: "Immediate response" },
                                        { name: "Water Damage", desc: "Prevention & repair" },
                                        { name: "Gas Lines", desc: "Safe service" },
                                        { name: "Backups", desc: "Sewer & drain" },
                                        { name: "No Hot Water", desc: "Water heater" },
                                      ].map((service) => (
                                        <li key={service.name}>
                                          <a
                                            href={emergencyLinks[service.name] ?? "/placeholder"}
                                            className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                          >
                                            <div className="nav-dropdown-service-name font-medium transition-colors duration-300 drop-shadow-sm">
                                              {service.name}
                                            </div>
                                            <div className="nav-dropdown-service-desc text-xs transition-colors duration-300">
                                              {service.desc}
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>

                                    {/* Emergency CTA */}
                                    <div
                                      className="mt-40 text-center relative overflow-hidden rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                                      style={{
                                        background: `linear-gradient(135deg, rgba(139, 0, 0, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%)`,
                                        boxShadow: `
                                          inset 0 1px 0 rgba(255, 255, 255, 0.2),
                                          inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                                          0 8px 32px rgba(139, 0, 0, 0.4)
                                        `,
                                      }}
                                    >
                                      <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                          background: `linear-gradient(135deg,
                                            transparent 0%,
                                            rgba(255, 255, 255, 0.1) 25%,
                                            rgba(255, 255, 255, 0.2) 50%,
                                            rgba(255, 255, 255, 0.1) 75%,
                                            transparent 100%
                                          )`,
                                        }}
                                      />
                                      <div className="relative">
                                        <div className="text-red-100 font-medium text-sm mb-2 drop-shadow-sm">
                                          Emergency? Call Now!
                                        </div>
                                        <a href="tel:9512464337">
                                          <Button
                                            size="sm"
                                            className="bg-white/20 hover:bg-white/30 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 rounded-xl"
                                          >
                                            (951) 246-4337
                                          </Button>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Services grid */}
                            </div>
                          </div>
                        </div>
                    </>
                  )}
                </div>

                <a href="/reviews" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  Reviews
                </a>
                <a href="/contact-us" className="text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm">
                  Contact
                </a>
              </div>

              {/* Mobile Toggle Only (no CTA here) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-white hover:text-red-400"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            </div>

                 {/* Mobile Menu Fullscreen */}
                {isMenuOpen && (
                  <div
                    className={`fixed inset-0 z-[9999] transition-transform duration-300 ease-in-out ${
                      isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    } bg-[#111827]`} // solid full cover, no transparency
                  >
                    {/* Header (logo + close only) */}
                    <div className="flex justify-between items-center p-2 border-b border-white/10 bg-[#111827]">
                      <a href="/" onClick={() => setIsMenuOpen(false)}>
                        <img src={logo} alt="Gardner Plumbing Co." className="pl-2 h-8 w-auto" />
                      </a>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="pt-2 pb-2 pl-2 pr-4 text-white hover:text-red-400"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    {/* CTA Buttons at top */}
                    <div className="flex gap-3 p-4 border-b border-white/10 bg-[#111827]">
                      {/* Call Us button */}
                      <a
                        href="tel:9512464337"
                        className="w-full justify-center sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-1 rounded-xl shadow-lg border border-red-400/20 flex items-center gap-2 transition group"
                      >
                        <span>📞</span>
                        <span>Call Us</span>
                      </a>

                      {/* Book Online button via SchedulerModal */}
                      <div className="flex-1">
                        <SchedulerModal />
                      </div>
                    </div>




                    {/* Nav */}
                    <nav className="flex flex-col p-4 space-y-3 bg-[#111827] overflow-y-auto max-h-[calc(100vh-220px)]">
                      <p className="text-xs uppercase tracking-wider text-gray-400 px-2">
                        MENU
                      </p>

                      {mainNavLinks.map((link) => (
                        <div key={link.label}>
                          {link.dropdown ? (
                            <div>
                              <button
                                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                                className="w-full flex justify-between items-center text-left text-base font-medium text-white hover:text-red-400 px-4 py-3 rounded-lg bg-[#1f2937] border border-white/10 shadow-sm transition"
                              >
                                <span className="flex items-center gap-2">
                                  <Wrench className="h-5 w-5 text-red-400" />
                                  Services
                                </span>
                                <ChevronDown
                                  className={`h-5 w-5 transition-transform duration-300 ${
                                    isMobileServicesOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {isMobileServicesOpen && (
                                <ul className="mt-3 grid grid-cols-2 gap-2 bg-[#111827] p-1rounded-lg border border-white/10 shadow-md">
                                  {Object.entries(serviceLinks).map(([name, href]) => (
                                    <li key={name}>
                                      <a
                                        href={href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-center px-1 py-1 text-sm font-small text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                      >
                                        {name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <a
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center gap-3 text-base font-medium text-white hover:text-red-400 px-4 py-3 rounded-lg bg-[#1f2937] border border-white/10 shadow-sm transition"
                            >
                              {link.label === "Home" && <Home className="h-5 w-5 text-red-400" />}
                              {link.label === "About Us" && <User className="h-5 w-5 text-red-400" />}
                              {link.label === "Reviews" && <Star className="h-5 w-5 text-red-400" />}
                              {link.label === "Contact" && <Mail className="h-5 w-5 text-red-400" />}
                              {link.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </nav>

                    {/* Footer with Socials + CTA */}
                    <div className="p-6 border-t border-white/10 bg-[#111827] space-y-4">
                    {/* Business Hours */}
                                  <div className="mb-6">
                                    <h4 className="text-base text-white mb-3 pb-2 border-b-2 border-red-600 drop-shadow-sm">
                                      Business Hours
                                    </h4>
                                    <div className="space-y-1.5">
                                      {/* Office Hours */}
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Office (Mon - Fri)</span>
                                        <span className="text-gray-400 text-sm">8:00 AM - 4:00 PM</span>
                                      </div>

                                      {/* Service Hours */}
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Service (Mon - Fri)</span>
                                        <span className="text-gray-400 text-sm">8:00 AM - 5:00 PM</span>
                                      </div>

                                      {/* Weekend */}
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Saturday - Sunday</span>
                                        <span className="text-gray-400 text-sm">Emergency Only</span>
                                      </div>

                                      {/* Emergency */}
                                      <div className="pt-1.5 border-t border-gray-600">
                                        <div className="flex justify-between items-center">
                                          <span className="text-red-400 text-sm font-medium">Emergency</span>
                                          <span className="text-red-400 text-sm font-medium">24/7 Available</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                      {/* Socials */}
                      <div className="flex justify-center gap-5">
                        <a href="https://www.facebook.com/people/Gardner-Plumbing-Company/100063665179161/" className="text-gray-400 hover:text-white transition">
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/gardnerplumbingco/" className="text-gray-400 hover:text-white transition">
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://www.yelp.com/biz/gardner-plumbing-company-murrieta-9" className="text-gray-400 hover:text-white transition">
                          <Star className="h-5 w-5" />
                        </a>
                      </div>

                      {/* Legal Links */}
                      <div className="flex justify-center gap-6 text-xs text-gray-400 pt-4">
                        <a href="/privacy-policy" className="hover:text-red-400 transition">
                          Privacy Policy
                        </a>
                        <a href="/terms-and-services" className="hover:text-red-400 transition">
                          Terms of Service
                        </a>
                      </div>

                      {/* Copyright */}
                      <p className="text-center text-xs text-gray-500 pt-2">
                        © {new Date().getFullYear()} Gardner Plumbing Co.
                      </p>
                    </div>
                  </div>
                )}


      </div>
    </nav>
      </header>
    </>
  );
}