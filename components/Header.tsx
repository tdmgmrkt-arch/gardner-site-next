"use client";

import { SchedulerModal } from "./SchedulerModal";

import { Button } from "./ui/button";
import { Phone, Mail, Menu, MapPin, ChevronDown, Clock, Star, X, Wrench, Home, User, BanknoteIcon, Facebook, Instagram, Calendar, Snowflake, Zap } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";

const logo = "/gardner_logo.webp";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHvacOpen, setIsHvacOpen] = useState(false);
  const [isElectricalOpen, setIsElectricalOpen] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hvacTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hvacDropdownRef = useRef<HTMLDivElement | null>(null);
  const electricalTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const electricalDropdownRef = useRef<HTMLDivElement | null>(null);

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileEmergencyOpen, setIsMobileEmergencyOpen] = useState(false);
  const [isMobileHvacOpen, setIsMobileHvacOpen] = useState(false);
  const [isMobileElectricalOpen, setIsMobileElectricalOpen] = useState(false);


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
    "Industrial Plumbing": "/services/industrial-plumbing",
    "Backflow Prevention": "/services/backflow-prevention",
    "Moen Flo Installation" : "/services/moen-flo-installation",
    "System Inspections": "/services/65-point-inspection",
    "Gas Lines": "/services/gas-lines",
    "Water Filtration": "/services/water-filtration-system",
  };

  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Plumbing", dropdown: true },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact-us", label: "Contact" },
  ];

  const commercialLinks: Record<string, string> = {
    "Commercial Plumbing": "/services/commercial-plumbing",
    "Industrial Plumbing": "/services/industrial-plumbing",
    "Backflow Prevention": "/services/backflow-prevention",
    "Hydro Jetting": "/services/hydro-jetting",
    "Sewer & Septic": "/services/sewer-and-septic",
    "Maintenance Plans": "/services/maintenance-plans",
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

  const hvacLinks: Record<string, string> = {
    // AC
    "AC Repair":              "/services/hvac/ac-repair",
    "AC Installation":        "/services/hvac/ac-installation",
    "AC Maintenance":         "/services/hvac/ac-maintenance",
    "Mini-Split AC":          "/services/hvac/mini-split-ac",
    "Thermostat Installation":"/services/hvac/thermostat-installation",

    // Heating
    "Furnace Repair":         "/services/hvac/furnace-repair",
    "Furnace Installation":   "/services/hvac/furnace-installation",
    "Furnace Maintenance":    "/services/hvac/furnace-maintenance",
    "Heat Pump Systems":      "/services/hvac/heat-pump-systems",
    "HVAC Maintenance Plans": "/services/hvac/hvac-maintenance-plans",

    // Indoor Air Quality
    "Air Duct Cleaning":          "/services/hvac/air-duct-cleaning",
    "Air Filtration Systems":     "/services/hvac/air-filtration-systems",
    "Whole-Home Humidifiers":     "/services/hvac/whole-home-humidifiers",
    "Whole-Home Dehumidifiers":   "/services/hvac/whole-home-dehumidifiers",
  };

  const acServices: { name: string; desc: string }[] = [
    { name: "AC Repair",               desc: "24/7 emergency cooling repair" },
    { name: "AC Installation",         desc: "New system, expert sizing" },
    { name: "AC Maintenance",          desc: "Tune-ups & seasonal prep" },
    { name: "Mini-Split AC",           desc: "Ductless cooling solutions" },
    { name: "Thermostat Installation", desc: "Smart & programmable installs" },
  ];

  const heatingServices: { name: string; desc: string }[] = [
    { name: "Furnace Repair",          desc: "Fast diagnostics & repair" },
    { name: "Furnace Installation",    desc: "New furnace, expert install" },
    { name: "Furnace Maintenance",     desc: "Annual tune-ups & safety checks" },
    { name: "Heat Pump Systems",       desc: "Efficient heating & cooling" },
    { name: "HVAC Maintenance Plans",  desc: "Scheduled preventive service" },
  ];

  const iaqServices: { name: string; desc: string }[] = [
    { name: "Air Duct Cleaning",         desc: "Whole-home duct cleaning" },
    { name: "Air Filtration Systems",    desc: "Whole-home air purification" },
    { name: "Whole-Home Humidifiers",    desc: "Balanced indoor humidity" },
    { name: "Whole-Home Dehumidifiers",  desc: "Moisture control solutions" },
  ];

  const electricalLinks: Record<string, string> = {
    // Fixtures
    "Lighting Installation":      "/services/electrical/lighting-installation",
    "Outlets & Switches":         "/services/electrical/outlets-and-switches",
    "Ceiling Fans":               "/services/electrical/ceiling-fan-installation",
    "Smart Home Solutions":       "/services/electrical/smart-home-electrical",
    "Pool & Spa Wiring":          "/services/electrical/pool-spa-wiring",

    // Power & Upgrades
    "Panel & Service Upgrade":    "/services/electrical/electrical-panel-upgrade",
    "Home Rewiring":              "/services/electrical/home-rewiring",
    "Remodeling & New Construction": "/services/electrical/remodeling-electrical",
    "EV Charger Installation":    "/services/electrical/ev-charger-installation",
    "Generator Installation":     "/services/electrical/generator-installation",

    // Repairs & Safety
    "Electrical Repairs":         "/services/electrical/electrical-repairs",
    "Emergency Electrical":       "/services/electrical/emergency-electrical",
    "Safety Inspections":         "/services/electrical/electrical-safety-inspection",
    "Surge Protection":           "/services/electrical/surge-protection",
  };

  const fixturesServices: { name: string; desc: string }[] = [
    { name: "Lighting Installation",   desc: "Indoor & outdoor installs" },
    { name: "Outlets & Switches",      desc: "Upgrades, GFCI & USB" },
    { name: "Ceiling Fans",            desc: "Install, replace & rewire" },
    { name: "Smart Home Solutions",    desc: "Automation & smart devices" },
    { name: "Pool & Spa Wiring",       desc: "Code-compliant pool circuits" },
  ];

  const powerServices: { name: string; desc: string }[] = [
    { name: "Panel & Service Upgrade",        desc: "200A upgrades & replacements" },
    { name: "Home Rewiring",                  desc: "Full & partial rewire service" },
    { name: "Remodeling & New Construction",  desc: "Rough-in & finish wiring" },
    { name: "EV Charger Installation",        desc: "Level 2 home EV charging" },
    { name: "Generator Installation",         desc: "Standby & portable hookup" },
  ];

  const repairsServices: { name: string; desc: string }[] = [
    { name: "Electrical Repairs",    desc: "Diagnostics & fast fixes" },
    { name: "Emergency Electrical",  desc: "24/7 electrical response" },
    { name: "Safety Inspections",    desc: "Code audits & panel checks" },
    { name: "Surge Protection",      desc: "Whole-home surge defense" },
  ];
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

  const handleHvacMouseEnter = useCallback(() => {
    if (hvacTimeoutRef.current) {
      clearTimeout(hvacTimeoutRef.current);
      hvacTimeoutRef.current = null;
    }
    setIsHvacOpen(true);
  }, []);

  const handleHvacMouseLeave = useCallback(() => {
    if (hvacTimeoutRef.current) clearTimeout(hvacTimeoutRef.current);
    hvacTimeoutRef.current = setTimeout(() => setIsHvacOpen(false), 250);
  }, []);

  const handleElectricalMouseEnter = useCallback(() => {
    if (electricalTimeoutRef.current) {
      clearTimeout(electricalTimeoutRef.current);
      electricalTimeoutRef.current = null;
    }
    setIsElectricalOpen(true);
  }, []);

  const handleElectricalMouseLeave = useCallback(() => {
    if (electricalTimeoutRef.current) clearTimeout(electricalTimeoutRef.current);
    electricalTimeoutRef.current = setTimeout(() => setIsElectricalOpen(false), 250);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hvacTimeoutRef.current) clearTimeout(hvacTimeoutRef.current);
      if (electricalTimeoutRef.current) clearTimeout(electricalTimeoutRef.current);
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
                  <img src={logo} alt="Gardner Plumbing Co. logo" className="h-12 sm:h-15 lg:h-14 xl:h-16 w-auto drop-shadow-lg" />
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

                {/* Plumbing Services */}
                <div
                  className="group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="/services"
                    className="flex items-center gap-1 text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm py-4 px-1"
                  >
                    Plumbing
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
                              <div className="glassmorphism-dark rounded-2xl p-6 sm:p-8 h-full border border-white/10 shadow-luxury hover-lift transition-all duration-500 flex flex-col justify-between">
                                <div>
                                  <img
                                    src={logo}
                                    alt="Gardner Plumbing Co. logo"
                                    className="h-16 w-auto mb-4 drop-shadow-lg"
                                  />
                                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">
                                    Gardner Plumbing Co.
                                  </h3>

                                  {/* Business Hours */}
                                  <div className="mb-6">
                                    <h4 className="text-base text-white mb-3 pb-2 border-b-2 border-red-600 drop-shadow-sm">
                                      Business Hours
                                    </h4>
                                    <div className="space-y-1.5">
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Office (Mon - Fri)</span>
                                        <span className="text-gray-400 text-sm">8:00 AM - 4:00 PM</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Service (Mon - Fri)</span>
                                        <span className="text-gray-400 text-sm">8:00 AM - 5:00 PM</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">Saturday - Sunday</span>
                                        <span className="text-gray-400 text-sm">Emergency Only</span>
                                      </div>
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
                                </div>

                                {/* CTA at bottom */}
                                <a href="/financing">
                                  <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20">
                                    <BanknoteIcon className="mr-2 h-4 w-4" />
                                    View Our Financing Options
                                  </Button>
                                  </a>                                <a href="tel:9512464337">
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
                                         // Highest Priority
                                        { name: "Emergency Service", desc: "24/7 response" },
                                        { name: "Drain Cleaning", desc: "Professional clearing" },
                                        { name: "Leak Detection", desc: "Quick detection & fix" },
                                        { name: "Water Heaters", desc: "Install & service" },

                                        // Core Residential Services
                                        { name: "Toilet Repair", desc: "Complete solutions" },
                                        { name: "Garbage Disposals", desc: "Faucets & sinks" },
                                        { name: "Piping & Repiping", desc: "New & replacement" },
                                        { name: "Water Filtration", desc: "Pure Water Solutions" },

                                        // Heavy-Duty / Business Services
                                        { name: "Commercial Plumbing", desc: "Business solutions" },
                                        { name: "Industrial Plumbing", desc: "Heavy-duty solutions" },
                                        { name: "Hydro Jetting", desc: "High-pressure cleaning" },
                                        { name: "Sewer & Septic", desc: "Main line service" },

                                        // Preventive / Specialty
                                        { name: "Backflow Prevention", desc: "Protecting water supply" },
                                        { name: "Maintenance Plans", desc: "Preventive care" },
                                        { name: "System Inspections", desc: "Complete checks" },
                                        { name: "Moen Flo Installation", desc: "Smart Water Monitors" },
                                      ].map((service) => (
                                        <li key={service.name}>
                                          <a
                                            href={serviceLinks[service.name] ?? "/services/commercial-plumbing"}
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
                                  <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10 flex flex-col justify-between h-full">
                                    <div>
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
                                              <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                                {service.name}
                                              </div>
                                              <div className="nav-dropdown-service-desc text-xs text-gray-400 transition-colors duration-300 hover:text-gray-200">
                                                {service.desc}
                                              </div>

                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                  </div>


                                    {/* Emergency CTA */}
                                    <div
                                      className="mt-6 text-center relative overflow-hidden rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
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

                                      <div className="relative text-center">
                                        <img
                                          src="/GardnerPlumbingCoEmergencyTech.webp"
                                          alt="Emergency Icon"
                                          className="mx-auto mb-3 object-contain drop-shadow-md"
                                        />
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

                {/* HVAC Services */}
                <div
                  className="group"
                  onMouseEnter={handleHvacMouseEnter}
                  onMouseLeave={handleHvacMouseLeave}
                >
                  <a
                    href="/services/hvac"
                    className="flex items-center gap-1 text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm py-4 px-1"
                  >
                    HVAC
                    <span className="inline xl:hidden">HVAC</span>
                    <ChevronDown
                      className="h-4 w-4 transition-transform duration-300"
                      style={{ transform: isHvacOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </a>

                  {isHvacOpen && (
                    <div>
                      {/* Invisible bridge under the nav to keep hover while moving down */}
                      <div
                        className="absolute inset-x-0 top-full h-8 z-40"
                        onMouseEnter={handleHvacMouseEnter}
                        onMouseLeave={handleHvacMouseLeave}
                      />

                      {/* Full-width HVAC dropdown */}
                      <div
                        ref={hvacDropdownRef}
                        className="absolute inset-x-0 top-full w-full shadow-luxury border-t-4 border-red-600 z-70 animate-fade-in"
                        style={{
                          background: `
                            radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                            linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)
                          `,
                        }}
                        onMouseEnter={handleHvacMouseEnter}
                        onMouseLeave={handleHvacMouseLeave}
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
                                <div className="glassmorphism-dark rounded-2xl p-6 sm:p-8 h-full border border-white/10 shadow-luxury hover-lift transition-all duration-500 flex flex-col justify-between">
                                  <div>
                                    <img
                                      src={logo}
                                      alt="Gardner Plumbing Co. logo"
                                      className="h-16 w-auto mb-4 drop-shadow-lg"
                                    />
                                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">
                                      Gardner Plumbing Co.
                                    </h3>

                                    {/* Business Hours */}
                                    <div className="mb-6">
                                      <h4 className="text-base text-white mb-3 pb-2 border-b-2 border-red-600 drop-shadow-sm">
                                        Business Hours
                                      </h4>
                                      <div className="space-y-1.5">
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-300 text-sm">Office (Mon - Fri)</span>
                                          <span className="text-gray-400 text-sm">8:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-300 text-sm">Service (Mon - Fri)</span>
                                          <span className="text-gray-400 text-sm">8:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-300 text-sm">Saturday - Sunday</span>
                                          <span className="text-gray-400 text-sm">Emergency Only</span>
                                        </div>
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
                                  </div>

                                  {/* CTA at bottom */}
                                  <a href="/financing">
                                    <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20">
                                      <BanknoteIcon className="mr-2 h-4 w-4" />
                                      View Our Financing Options
                                    </Button>
                                  </a>
                                  <a href="tel:9512464337">
                                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20">
                                      <Phone className="mr-2 h-4 w-4" />
                                      Call Now
                                    </Button>
                                  </a>
                                </div>
                              </div>

                              {/* HVAC panels: 3 equal columns (AC / Heating / IAQ) */}
                              <div className="col-span-8 grid grid-cols-12 gap-6">

                                {/* AC Panel */}
                                <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                  <a href="/services/hvac/ac">
                                    <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                      AC
                                    </h4>
                                  </a>
                                  <p className="text-gray-400 text-xs mb-4">Cooling repair &amp; installs</p>
                                  <ul className="space-y-3">
                                    {acServices.map((service) => (
                                      <li key={service.name}>
                                        <a
                                          href={hvacLinks[service.name] ?? "/services/hvac/ac"}
                                          className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                        >
                                          <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                            {service.name}
                                          </div>
                                          <div className="nav-dropdown-service-desc text-xs text-gray-400 transition-colors duration-300 hover:text-gray-200">
                                            {service.desc}
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Heating Panel */}
                                <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                  <a href="/services/hvac/heating">
                                    <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                      Heating
                                    </h4>
                                  </a>
                                  <p className="text-gray-400 text-xs mb-4">Furnace &amp; heat pump service</p>
                                  <ul className="space-y-3">
                                    {heatingServices.map((service) => (
                                      <li key={service.name}>
                                        <a
                                          href={hvacLinks[service.name] ?? "/services/hvac/heating"}
                                          className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                        >
                                          <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                            {service.name}
                                          </div>
                                          <div className="nav-dropdown-service-desc text-xs text-gray-400 transition-colors duration-300 hover:text-gray-200">
                                            {service.desc}
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Indoor Air Quality Panel */}
                                <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                  <a href="/services/hvac/indoor-air-quality">
                                    <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                      Indoor Air Quality
                                    </h4>
                                  </a>
                                  <p className="text-gray-400 text-xs mb-4">Cleaner air, whole home</p>
                                  <ul className="space-y-3">
                                    {iaqServices.map((service) => (
                                      <li key={service.name}>
                                        <a
                                          href={hvacLinks[service.name] ?? "/services/hvac/indoor-air-quality"}
                                          className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                        >
                                          <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                            {service.name}
                                          </div>
                                          <div className="nav-dropdown-service-desc text-xs text-gray-400 transition-colors duration-300 hover:text-gray-200">
                                            {service.desc}
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                              </div>
                              {/* /HVAC panels */}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* /HVAC Services */}

                {/* Electrical Services */}
                <div
                  className="group"
                  onMouseEnter={handleElectricalMouseEnter}
                  onMouseLeave={handleElectricalMouseLeave}
                >
                  <a
                    href="/services/electrical"
                    className="flex items-center gap-1 text-white hover:text-red-400 font-medium transition-all duration-300 hover-lift drop-shadow-sm py-4 px-1"
                  >
                    Electrical
                    <span className="inline xl:hidden">Electrical</span>
                    <ChevronDown
                      className="h-4 w-4 transition-transform duration-300"
                      style={{ transform: isElectricalOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </a>

                  {isElectricalOpen && (
                    <div>
                      {/* Invisible bridge under the nav to keep hover while moving down */}
                      <div
                        className="absolute inset-x-0 top-full h-8 z-40"
                        onMouseEnter={handleElectricalMouseEnter}
                        onMouseLeave={handleElectricalMouseLeave}
                      />

                      {/* Full-width Electrical dropdown */}
                      <div
                        ref={electricalDropdownRef}
                        className="absolute inset-x-0 top-full w-full shadow-luxury border-t-4 border-red-600 z-70 animate-fade-in"
                        style={{
                          background: `
                            radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%),
                            linear-gradient(145deg, #202020 0%, #1a1a1a 50%, #111827 100%)
                          `,
                        }}
                        onMouseEnter={handleElectricalMouseEnter}
                        onMouseLeave={handleElectricalMouseLeave}
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
                                <div className="glassmorphism-dark rounded-2xl p-6 sm:p-8 h-full border border-white/10 shadow-luxury hover-lift transition-all duration-500 flex flex-col justify-between">
                                  <div>
                                    <img
                                      src={logo}
                                      alt="Gardner Plumbing Co. logo"
                                      className="h-16 w-auto mb-4 drop-shadow-lg"
                                    />
                                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">
                                      Gardner Plumbing Co.
                                    </h3>

                                    {/* Business Hours */}
                                    <div className="mb-6">
                                      <h4 className="text-base text-white mb-3 pb-2 border-b-2 border-red-600 drop-shadow-sm">
                                        Business Hours
                                      </h4>
                                      <div className="space-y-1.5">
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-300 text-sm">Office (Mon - Fri)</span>
                                          <span className="text-gray-400 text-sm">8:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-300 text-sm">Service (Mon - Fri)</span>
                                          <span className="text-gray-400 text-sm">8:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-300 text-sm">Saturday - Sunday</span>
                                          <span className="text-gray-400 text-sm">Emergency Only</span>
                                        </div>
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
                                  </div>

                                  {/* CTA at bottom */}
                                  <a href="/financing">
                                    <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20">
                                      <BanknoteIcon className="mr-2 h-4 w-4" />
                                      View Our Financing Options
                                    </Button>
                                  </a>
                                  <a href="tel:9512464337">
                                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift rounded-xl border border-red-400/20">
                                      <Phone className="mr-2 h-4 w-4" />
                                      Call Now
                                    </Button>
                                  </a>
                                </div>
                              </div>

                              {/* Electrical panels: 3 equal columns (Fixtures / Power & Upgrades / Repairs & Safety) */}
                              <div className="col-span-8 grid grid-cols-12 gap-6">

                                {/* Fixtures Panel */}
                                <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                  <a href="/services/electrical/fixtures">
                                    <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                      Fixtures
                                    </h4>
                                  </a>
                                  <p className="text-gray-400 text-xs mb-4">Lighting, fans &amp; outlets</p>
                                  <ul className="space-y-3">
                                    {fixturesServices.map((service) => (
                                      <li key={service.name}>
                                        <a
                                          href={electricalLinks[service.name] ?? "/services/electrical/fixtures"}
                                          className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                        >
                                          <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                            {service.name}
                                          </div>
                                          <div className="nav-dropdown-service-desc text-xs text-gray-400 transition-colors duration-300 hover:text-gray-200">
                                            {service.desc}
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Power & Upgrades Panel */}
                                <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                  <a href="/services/electrical/power">
                                    <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                      Power &amp; Upgrades
                                    </h4>
                                  </a>
                                  <p className="text-gray-400 text-xs mb-4">Panels, rewiring &amp; EV</p>
                                  <ul className="space-y-3">
                                    {powerServices.map((service) => (
                                      <li key={service.name}>
                                        <a
                                          href={electricalLinks[service.name] ?? "/services/electrical/power"}
                                          className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                        >
                                          <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                            {service.name}
                                          </div>
                                          <div className="nav-dropdown-service-desc text-xs text-gray-400 transition-colors duration-300 hover:text-gray-200">
                                            {service.desc}
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Repairs & Safety Panel */}
                                <div className="col-span-4 glassmorphism-dark rounded-2xl p-6 shadow-luxury hover-lift transition-all duration-500 border border-white/10">
                                  <a href="/services/electrical/repairs">
                                    <h4 className="text-lg font-bold text-white mb-4 pb-3 border-b-2 border-red-600 drop-shadow-sm hover:text-red-400 transition-colors duration-300">
                                      Repairs &amp; Safety
                                    </h4>
                                  </a>
                                  <p className="text-gray-400 text-xs mb-4">Troubleshooting &amp; inspections</p>
                                  <ul className="space-y-3">
                                    {repairsServices.map((service) => (
                                      <li key={service.name}>
                                        <a
                                          href={electricalLinks[service.name] ?? "/services/electrical/repairs"}
                                          className="group block p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                        >
                                          <div className="nav-dropdown-service-name hover:text-red-500 font-medium transition-colors duration-300 drop-shadow-sm">
                                            {service.name}
                                          </div>
                                          <div className="nav-dropdown-service-desc text-xs text-gray-400 transition-colors duration-300 hover:text-gray-200">
                                            {service.desc}
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                              </div>
                              {/* /Electrical panels */}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* /Electrical Services */}

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
                    } bg-[#111827]`}
                  >
                    {/* Header (logo + close only) */}
                    <div className="flex justify-between items-center p-2 border-b border-white/10 bg-[#111827]">
                      <a href="/" onClick={() => setIsMenuOpen(false)}>
                        <img src={logo} alt="Gardner Plumbing Co. logo" className="pl-2 h-8 w-auto" />
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

                      {/* Home, About Us, Plumbing Services (items 0–2) */}
                      {mainNavLinks.slice(0, 3).map((link) => (
                        <div key={link.label}>
                          {link.dropdown ? (
                            <div>
                              <button
                                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                                className="w-full flex justify-between items-center text-left text-base font-medium text-white hover:text-red-400 px-4 py-3 rounded-lg bg-[#1f2937] border border-white/10 shadow-sm transition"
                              >
                                <span className="flex items-center gap-2">
                                  <Wrench className="h-5 w-5 text-red-400" />
                                  Plumbing
                                </span>
                                <ChevronDown
                                  className={`h-5 w-5 transition-transform duration-300 ${
                                    isMobileServicesOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {isMobileServicesOpen && (
                                <ul className="mt-3 grid grid-cols-2 gap-2 bg-[#111827] p-1 rounded-lg border border-white/10 shadow-md">
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

                      {/* HVAC Services — sits between Plumbing Services and Reviews */}
                      <div>
                        <button
                          onClick={() => setIsMobileHvacOpen((prev) => !prev)}
                          className="w-full flex justify-between items-center text-left text-base font-medium text-white hover:text-red-400 px-4 py-3 rounded-lg bg-[#1f2937] border border-white/10 shadow-sm transition"
                        >
                          <span className="flex items-center gap-2">
                            <Snowflake className="h-5 w-5 text-red-400" />
                            HVAC
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              isMobileHvacOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isMobileHvacOpen && (
                          <div className="mt-3 bg-[#111827] rounded-lg border border-white/10 shadow-md overflow-hidden">
                            {/* AC group */}
                            <p className="px-3 pt-3 pb-1 text-xs uppercase tracking-wider text-red-400 font-medium">AC</p>
                            <ul className="grid grid-cols-2 gap-2 px-2 pb-2">
                              {acServices.map(({ name }) => (
                                <li key={name}>
                                  <a
                                    href={hvacLinks[name]}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center px-1 py-1 text-sm text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                  >
                                    {name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            {/* Heating group */}
                            <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-wider text-red-400 font-medium border-t border-white/10">Heating</p>
                            <ul className="grid grid-cols-2 gap-2 px-2 pb-2">
                              {heatingServices.map(({ name }) => (
                                <li key={name}>
                                  <a
                                    href={hvacLinks[name]}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center px-1 py-1 text-sm text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                  >
                                    {name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            {/* IAQ group */}
                            <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-wider text-red-400 font-medium border-t border-white/10">Indoor Air Quality</p>
                            <ul className="grid grid-cols-2 gap-2 px-2 pb-3">
                              {iaqServices.map(({ name }) => (
                                <li key={name}>
                                  <a
                                    href={hvacLinks[name]}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center px-1 py-1 text-sm text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                  >
                                    {name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Electrical Services — sits between HVAC Services and Reviews */}
                      <div>
                        <button
                          onClick={() => setIsMobileElectricalOpen((prev) => !prev)}
                          className="w-full flex justify-between items-center text-left text-base font-medium text-white hover:text-red-400 px-4 py-3 rounded-lg bg-[#1f2937] border border-white/10 shadow-sm transition"
                        >
                          <span className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-red-400" />
                            Electrical
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              isMobileElectricalOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isMobileElectricalOpen && (
                          <div className="mt-3 bg-[#111827] rounded-lg border border-white/10 shadow-md overflow-hidden">
                            {/* Fixtures group */}
                            <p className="px-3 pt-3 pb-1 text-xs uppercase tracking-wider text-red-400 font-medium">Fixtures</p>
                            <ul className="grid grid-cols-2 gap-2 px-2 pb-2">
                              {fixturesServices.map(({ name }) => (
                                <li key={name}>
                                  <a
                                    href={electricalLinks[name]}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center px-1 py-1 text-sm text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                  >
                                    {name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            {/* Power & Upgrades group */}
                            <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-wider text-red-400 font-medium border-t border-white/10">Power &amp; Upgrades</p>
                            <ul className="grid grid-cols-2 gap-2 px-2 pb-2">
                              {powerServices.map(({ name }) => (
                                <li key={name}>
                                  <a
                                    href={electricalLinks[name]}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center px-1 py-1 text-sm text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                  >
                                    {name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            {/* Repairs & Safety group */}
                            <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-wider text-red-400 font-medium border-t border-white/10">Repairs &amp; Safety</p>
                            <ul className="grid grid-cols-2 gap-2 px-2 pb-3">
                              {repairsServices.map(({ name }) => (
                                <li key={name}>
                                  <a
                                    href={electricalLinks[name]}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center px-1 py-1 text-sm text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                  >
                                    {name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Reviews and Contact (items 3–4) */}
                      {mainNavLinks.slice(3).map((link) => (
                        <div key={link.label}>
                          <a
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 text-base font-medium text-white hover:text-red-400 px-4 py-3 rounded-lg bg-[#1f2937] border border-white/10 shadow-sm transition"
                          >
                            {link.label === "Reviews" && <Star className="h-5 w-5 text-red-400" />}
                            {link.label === "Contact" && <Mail className="h-5 w-5 text-red-400" />}
                            {link.label}
                          </a>
                        </div>
                      ))}

                      {/* Emergency Services */}
                      <div>
                        <button
                          onClick={() => setIsMobileEmergencyOpen((prev) => !prev)}
                          className="w-full flex justify-between items-center text-left text-base font-medium text-white hover:text-red-400 px-4 py-3 rounded-lg bg-[#1f2937] border border-white/10 shadow-sm transition"
                        >
                          <span className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-red-400" />
                            Emergency
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              isMobileEmergencyOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isMobileEmergencyOpen && (
                          <ul className="mt-3 grid grid-cols-1 gap-2 bg-[#111827] p-2 rounded-lg border border-white/10 shadow-md">
                            {Object.entries(emergencyLinks).map(([name, href]) => (
                              <li key={name}>
                                <a
                                  href={href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block px-3 py-2 text-sm font-medium text-gray-200 rounded-md bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/5 hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300"
                                >
                                  {name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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
