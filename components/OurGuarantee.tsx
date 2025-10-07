"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ArrowRight,
  Shield,
  CheckCircle,
  Award,
  Smile,
  DollarSign,
  Trash2,
} from "lucide-react";

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "lg" | "default";
  variant?: "outline" | "default";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  ...props
}) => {
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

export function OurGuarantee() {
  const ourPromises = [
    {
      icon: Smile,
      title: "100% Satisfaction Guarantee",
      description:
        "If you are not fully satisfied with our service, we'll make it right. Your happiness is our ultimate goal.",
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing Guarantee",
      description:
        "No surprises or hidden fees. We provide a clear, detailed estimate before any work begins.",
    },
    {
      icon: Trash2,
      title: "Clean Home Guarantee",
      description:
        "Our technicians treat your home with respect, wearing shoe covers and thoroughly cleaning the work area.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured Guarantee",
      description:
        "For your protection, all our plumbers are fully licensed, bonded, and insured.",
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
                  <span className="text-red-400">Our Guarantee</span>
                </div>
              </nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Our Promise to You
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Our{" "}
                <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Unbreakable
                </span>{" "}
                Guarantee
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                We're not just providing <Link href="/services" className="text-red-400 hover:text-red-300 underline">plumbing services</Link>; we're building a
                relationship based on trust. Our guarantee is our promise to
                deliver exceptional quality and stand behind our work, every
                time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl shadow-lg"
                >
                  Call for Service Information
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <Image
                  src="/gardnervanready.webp"
                  alt="Customer satisfaction guarantee"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISES */}
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
              <CheckCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Our Promises
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              The Pillars of{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
                Our Guarantee
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Our guarantee is built on four key promises to ensure you have the
              best possible experience when you choose us for your <Link href="/services" className="text-red-400 hover:text-red-300 underline">plumbing
              needs</Link>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {ourPromises.map((promise, index) => (
              <Card
                key={index}
                className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage:
                    "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg">
                        <promise.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                      {promise.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                      {promise.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
