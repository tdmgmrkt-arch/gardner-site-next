"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import React, { useState, FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  ArrowRight,
  Shield,
  CheckCircle,
  Users,
  HelpCircle,
  Award,
  Droplets,
  FileText
} from "lucide-react";

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "lg" | "default";
  variant?: "outline" | "default";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, size, variant, children, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeClasses = {
    lg: "h-11 px-8 rounded-md",
    default: "h-10 py-2 px-4",
  };
  const variantClasses = {
    outline:
      "border-2 border-white/60 text-white hover:bg-white hover:text-gray-900",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
  };
  const finalClasses = `${baseClasses} ${sizeClasses[size || "default"]} ${
    variantClasses[variant || "default"]
  } ${className || ""}`;
  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
};

// --- Card Components ---
const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
);
const CardHeader: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />;
const CardContent: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={`p-6 pt-0 ${className}`} {...props} />;

export function Warranty() {
  const services = [
    {
      icon: Wrench,
      title: "Repair & Installation Labor",
      description:
        "Our workmanship is covered, ensuring that any installation or repair we perform is done right.",
      features: [
        "1-Year Workmanship Guarantee",
        "Follow-up Adjustments",
        "Code-Compliant Work",
        "Professional Service",
      ],
    },
    {
      icon: Award,
      title: "Manufacturer's Parts Warranty",
      description:
        "We use high-quality parts and fixtures, covered by comprehensive manufacturer warranties.",
      features: [
        "Fixtures & Faucets",
        "Water Heater Components",
        "Valves & Connectors",
        "Garbage Disposals",
      ],
    },
    {
      icon: Droplets,
      title: "Drain Cleaning Services",
      description:
        "We guarantee our main line drain cleaning services to remain free-flowing for a specified period.",
      features: [
        "30-Day Stoppage Guarantee",
        "Hydro Jetting Warranty",
        "Excludes Foreign Objects",
        "Preventative Advice",
      ],
    },
    {
      icon: Shield,
      title: "Water Heater Installation",
      description:
        "New water heater installations are backed by both our labor guarantee and the manufacturer's warranty.",
      features: [
        "Tank Leak Coverage",
        "Component Protection",
        "Labor for Replacements",
        "Thermal Expansion Tanks",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Complete Peace of Mind",
      description:
        "Our warranties ensure that your investment is protected against defects in both workmanship and materials.",
    },
    {
      icon: CheckCircle,
      title: "Hassle-Free Claims",
      description:
        "If an issue arises, our process is simple. Just give us a call, and we'll handle the rest promptly.",
    },
    {
      icon: Users,
      title: "We Stand By Our Work",
      description:
        "A warranty is our promise to you that we are confident in the quality of our service and the parts we use.",
    },
    {
      icon: FileText,
      title: "Clear & Upfront Terms",
      description:
        "All warranty details are provided in writing on your invoice, so you know exactly what is covered.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-red-400">Warranty</span>
                </div>
              </nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Our Commitment to You
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Industry-Leading{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Warranty
                </span>{" "}
                on Parts & Labor
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                We stand behind our work. Every job is backed by a comprehensive
                warranty on both workmanship and the high-quality parts we use,
                giving you complete peace of mind. Our warranties meet <a href="https://www.cslb.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">California contractor standards</a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl shadow-lg"
                >
                  Call for Warranty Information
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <Image
                  src="/placeholderimage.webp"
                  alt="Warranty illustration"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%), linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Wrench className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                What We Cover
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Comprehensive{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
                Warranty
              </span>{" "}
              Coverage
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Our warranty covers the key aspects of our plumbing services,
              ensuring your investment is secure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg">
                        <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/placeholderimage.webp"
                  alt="Professional Gardner Plumbing Co. technician"
                  width={1000}
                  height={600}
                  className="w-full h-96 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Our Promise
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                Your{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  Satisfaction
                </span>{" "}
                is Our Priority
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A warranty is more than a piece of paper—it's our commitment to
                quality and your long-term satisfaction. We're not happy until
                you're happy with our work. Learn more about our <Link href="/services" className="text-red-400 hover:text-red-300 underline">plumbing services</Link>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-xl flex items-center justify-center group-hover:from-green-600 group-hover:to-green-500 transition-all duration-300 flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-green-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-green-100 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
