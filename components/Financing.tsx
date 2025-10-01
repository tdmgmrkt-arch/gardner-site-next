"use client";

import {Breadcrumbs} from "@/components/Breadcrumbs"; // 
import React, { FC, ReactNode } from "react";
import {
  Phone,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  DollarSign,
  HelpCircle,
  FileText,
  TrendingUp,
  FastForward,
} from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// --- START: Self-Contained UI Components with Typing ---

// Button Component
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
      "border border-input hover:bg-accent hover:text-accent-foreground",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
  };
  const finalClasses = `${baseClasses} ${
    sizeClasses[size || "default"]
  } ${variantClasses[variant || "default"]} ${className || ""}`;
  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
};

// Card Components
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

export function Financing() {
  const benefits = [
    {
      icon: Clock,
      title: "Get Repairs Now, Pay Later",
      description:
        "Don't let budget constraints delay critical plumbing repairs. Secure your home now and pay over time.",
    },
    {
      icon: FastForward,
      title: "Quick & Easy Application",
      description:
        "Our simple application process takes just a few minutes to complete, with decisions often made instantly.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      // --- CHANGE: Updated description to mention GreenSky ---
      description:
        "We partner with GreenSky® to offer you flexible plans and competitive interest rates.",
    },
    {
      icon: Shield,
      title: "Peace of Mind",
      description:
        "Financing allows you to choose the best long-term solution, not just the cheapest temporary fix.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Get a Free Estimate",
      description:
        "Our technician provides a detailed, upfront quote for your plumbing project.",
    },
    {
      step: "02",
      title: "Apply in Minutes",
      // --- CHANGE: Updated description to mention GreenSky ---
      description:
        "Fill out a quick and simple digital application through our partner, GreenSky®.",
    },
    {
      step: "03",
      title: "Instant Decision",
      description:
        "Receive a credit decision in seconds so you can move forward without delay.",
    },
    {
      step: "04",
      title: "Start Your Project",
      description:
        "Once approved, we can schedule and begin your plumbing work immediately.",
    },
  ];

  const faqs = [
    {
      question: "What are the interest rates for financing?",
      // --- CHANGE: Updated answer to mention GreenSky ---
      answer:
        "Interest rates vary based on your credit score, the loan amount, and the term length. GreenSky® offers a variety of plans, and we work with you to find the most competitive and affordable options available.",
    },
    {
      question: "Is a credit check required?",
      // --- CHANGE: Updated answer to mention GreenSky ---
      answer:
        "Yes, our financing partner, GreenSky®, requires a credit check as part of the application process to determine eligibility and the terms of the financing offer.",
    },
    {
      question: "How long does the application process take?",
      // --- CHANGE: Updated answer to mention GreenSky ---
      answer:
        "The application is digital and typically takes only a few minutes to complete with GreenSky®. Most applicants receive a decision almost instantly.",
    },
    {
      question: "Can I finance smaller plumbing repairs?",
      answer:
        "Financing is generally designed for larger projects like water heater replacements, repipes, or major sewer line work. However, some promotions may be available for smaller jobs. Please ask your technician for current options.",
    },
    {
      question: "Can I pay off the loan early without penalties?",
      // --- CHANGE: Updated answer to mention GreenSky ---
      answer:
        "Yes, the financing plans offered through GreenSky® typically allow you to pay off your loan at any time without prepayment penalties.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                  <Breadcrumbs
                  items={[
                  { label: "Home", href: "/" },
                  { label: "Financing" } // no href = current page
                ]}
                  />
                </div>
              </nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <DollarSign className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Flexible Payment Options
                </span>
              </div>
              {/* --- CHANGE: Updated headline to mention GreenSky --- */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                GreenSky® Financing For Your Plumbing Needs
              </h1>
              {/* --- CHANGE: Updated description to mention GreenSky --- */}
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Don't let unexpected plumbing costs disrupt your budget. We
                offer simple, fast financing options through our partnership with
                GreenSky® to help you get the repairs you need now and pay over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#financing-options">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl shadow-lg"
                  >
                    View GreenSky® Financing Options
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative group animate-slide-up">
              {/* --- SUGGESTION: You can replace this image with a GreenSky® logo or a branded graphic. --- */}
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <img
                  src="https://placehold.co/1000x600/1f2937/ffffff?text=GreenSky%C2%AE+Financing"
                  alt="Illustration of easy financing options for plumbing services with GreenSky®"
                  width="1000"
                  height="600"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%)`,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              The Benefits of Financing Your Project
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500"
                style={{
                  backgroundColor: "#202020",
                  backgroundImage:
                    "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                }}
              >
                <div className="relative z-10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600/30 to-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="financing-options"
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)`,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Simple 4-Step Process
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 hidden md:block"
              aria-hidden="true"
            ></div>
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-x-8 items-center mb-12"
              >
                <div
                  className={`text-center md:text-right ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:order-2"
                  }`}
                >
                  <div className="text-6xl font-bold text-gray-600">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                </div>
                <div
                  className={`flex justify-center mt-4 md:mt-0 ${
                    index % 2 === 0 ? "" : "md:order-1"
                  }`}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                    <FileText className="h-12 w-12" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            {/* --- CHANGE: Updated button text to mention GreenSky --- */}
            <Button className="bg-gradient-to-r from-green-600 to-blue-500 text-white">
              Apply for GreenSky® Financing
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #374151 0%, #1f2937 50%, #000000 100%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Financing{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Common answers to help you better understand financing, payment
              options, and what works best for your situation.
            </p>
          </div>

          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              <div
                className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8"
                style={{
                  background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
                  boxShadow: `
                    inset 0 2px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.2),
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
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                    <HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                    Questions & Answers
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4 sm:space-y-6"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl"
                      style={{
                        backgroundColor: "#202020",
                        backgroundImage:
                          "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>
                      <div className="relative z-10">
                        <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-500 px-6 sm:px-8 py-6 sm:py-8 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                          <span className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-blue-600 group-hover/trigger:to-blue-500 transition-all duration-300">
                              <HelpCircle className="h-4 w-4 text-blue-400 group-hover/trigger:text-white transition-colors duration-300" />
                            </div>
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-6 sm:pb-8 pt-0 px-6 sm:px-8 ml-12 border-l-2 border-blue-500/20 text-base sm:text-lg leading-relaxed">
                          <div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden">
        <div
          className="py-12 sm:py-16"
          style={{
            background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%)`,
          }}
        >
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h2>
            {/* --- CHANGE: Updated description to mention GreenSky --- */}
            <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
              Don't wait. Apply for GreenSky® financing today and get the peace of mind
              that comes with a professionally completed plumbing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="/#financing-options" className="flex-1">
                <Button className="bg-gradient-to-r from-green-600 to-blue-500 text-white w-full py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    {/* --- CHANGE: Updated button text --- */}
                    Apply for GreenSky®
                  </span>
                </Button>
              </a>
              <a href="tel:9512464337" className="flex-1">
                <Button className="border-2 border-white/60 text-white bg-transparent w-full py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call For Details
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}