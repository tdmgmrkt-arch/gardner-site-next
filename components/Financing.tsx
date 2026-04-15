"use client";

import React, { FC, ReactNode } from "react";
import {
  Phone,
  ArrowRight,
  DollarSign,
  HelpCircle,
  FileText,
  TrendingUp,
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

  const greenSkyPromoContent = [
    {
      title: "Reduced Rate 11.99% for 180 months",
      description: "Subject to credit approval. Fixed APR of 11.99% for 180 months. Payment example: for $10,000 purchase on approval date, 180 payments of $119.95."
    },
    {
      title: "No Interest if Paid in Full in 12 Months",
      description: "Subject to credit approval. Minimum monthly payments required. Interest is billed during the promotional period but all interest is waived if the purchase amount is paid in full within 12 months. Making minimum monthly payments will not pay off the entire purchase balance before the end of the promotional period."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Get a Free Estimate",
      description: "Our technician provides a detailed, upfront quote for your plumbing project.",
    },
    {
      step: "02",
      title: "Apply in Minutes",
      description: "Choose a lender and fill out a quick, secure digital application.",
    },
    {
      step: "03",
      title: "Instant Decision",
      description: "Receive a credit decision in seconds so you can move forward without delay.",
    },
    {
      step: "04",
      title: "Start Your Project",
      description: "Once approved, we schedule and begin your plumbing work immediately.",
    },
  ];

  const faqs = [
    {
      question: "Which financing partner should I choose?",
      answer:
        "Both GreenSky® and Service Finance Company are trusted national lenders we've vetted and partnered with. GreenSky® is well known for promotional plans like no-interest-if-paid-in-full and long-term fixed-rate options. Service Finance Company is an FHA Title I approved lender that specializes in home improvement financing. We recommend applying with whichever feels like the better fit — you can also apply with both to compare the offers you receive.",
    },
    {
      question: "What are the interest rates for financing?",
      answer:
        "Interest rates vary based on your credit score, the loan amount, and the term length. Both of our lender partners offer a variety of plans, including promotional terms, and we'll work with you to find the most competitive and affordable option available.",
    },
    {
      question: "Is a credit check required?",
      answer:
        "Yes. Both GreenSky® and Service Finance Company require a credit check as part of the application process to determine eligibility and the terms of your financing offer.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "Both applications are digital and typically take only a few minutes to complete. Most applicants receive a credit decision almost instantly.",
    },
    {
      question: "Can I finance smaller plumbing repairs?",
      answer:
        "Financing is generally designed for larger projects like water heater replacements, repipes, or major sewer line work. However, some promotions may be available for smaller jobs. Please ask your technician for current options.",
    },
    {
      question: "Can I pay off the loan early without penalties?",
      answer:
        "In most cases, yes — the financing plans offered through both of our lender partners typically allow you to pay off your loan at any time without prepayment penalties. Confirm the specific terms with the lender you apply with.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero + 4-Step Process — one continuous dark section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #1f2937 0%, #111827 40%, #050810 100%)`,
          }}
        />

        {/* Hero copy */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
          <nav className="mb-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>Home</span>
              <ArrowRight className="h-4 w-4" />
              <span>Services</span>
              <ArrowRight className="h-4 w-4" />
              <span className="text-red-400">Financing</span>
            </div>
          </nav>
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm animate-fade-in">
            <DollarSign className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-wider">
              Flexible Payment Options
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 animate-slide-up leading-tight">
            Flexible Financing For Your Plumbing Project
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            Don&apos;t let unexpected plumbing costs disrupt your budget. Gardner Plumbing Co. partners with
            two trusted lenders — <span className="text-white font-semibold">GreenSky®</span> and{" "}
            <span className="text-white font-semibold">Service Finance Company</span> — so you can pick the plan that fits
            your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#financing-options">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg text-base"
              >
                <span className="flex items-center gap-2">
                  View Financing Options
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </a>
            <a href="tel:9512464337">
              <Button
                size="lg"
                className="border-2 border-white/60 text-white bg-transparent px-8 py-4 rounded-xl shadow-lg text-base hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call (951) 246-4337
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* 4-Step Process Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Simple 4-Step Process
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {/* Horizontal connector line (desktop only) */}
            <div
              className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
              aria-hidden="true"
            />
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="relative text-center px-2"
              >
                <div className="relative z-10 w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-luxury border border-red-400/30">
                  <span className="text-white font-bold text-lg drop-shadow-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-[220px] mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UNIFIED FINANCING OPTIONS SECTION (50/50) --- */}
      <section
        id="financing-options"
        className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #050810 0%, #0a0f1a 30%, #111827 60%, #000000 100%)`,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose Your Financing Partner
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Two trusted lenders, one goal — helping you get the plumbing work you need without delay.
              Pick the lender that works best for you and apply in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* GreenSky Card */}
            <Card
              id="greensky-options"
              className="p-8 sm:p-10 flex flex-col"
              style={{
                backgroundColor: "transparent",
                border: "3px solid rgba(34, 197, 94, 0.6)",
                backgroundImage: "linear-gradient(145deg, #1f2937 0%, #1a1a1a 100%)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">GreenSky®</h3>
                  <p className="text-sm text-gray-400">Consumer loan program · Synovus Bank</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                A long-standing Gardner Plumbing partner offering competitive rates and promotional plans for home
                improvement projects.
              </p>

              <div className="space-y-4 mb-8 flex-1">
                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">Current Promotional Plans</h4>
                {greenSkyPromoContent.map((promo, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-green-500/20 bg-black/30"
                  >
                    <h5 className="text-base font-semibold text-white mb-1">{promo.title}</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">{promo.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81122934&dealerplan=2613&channel=External-Button-03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-transparent border-2 border-green-500/60 text-white py-6 rounded-xl shadow-lg text-base hover:bg-green-500/10"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Apply — No Interest if Paid in 12 mo
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </a>
                <a
                  href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81122934&dealerplan=1519&channel=External-Button-03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-6 rounded-xl shadow-lg text-base"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Apply — 11.99% Fixed (180 mo)
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </a>
              </div>

              <p className="text-[10px] text-gray-500 mt-4 leading-relaxed">
                Subject to credit approval. Loans provided by Synovus Bank, Member FDIC, NMLS #408043.
                GreenSky® is a registered trademark of GreenSky, LLC. Serviced by GreenSky Servicing, LLC, NMLS #1416362.
              </p>
            </Card>

            {/* Service Finance Company Card */}
            <Card
              id="svc-financing"
              className="p-8 sm:p-10 flex flex-col"
              style={{
                backgroundColor: "transparent",
                border: "3px solid rgba(59, 130, 246, 0.6)",
                backgroundImage: "linear-gradient(145deg, #1f2937 0%, #1a1a1a 100%)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Service Finance Company</h3>
                  <p className="text-sm text-gray-400">FHA Title I Lender · Home improvement financing</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                An FHA Title I approved lender specializing in home improvement financing, with a fast, secure
                online application and flexible terms.
              </p>

              <div className="space-y-4 mb-8 flex-1">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Why Service Finance</h4>
                <ul className="space-y-3">
                  <li className="p-4 rounded-lg border border-blue-500/20 bg-black/30">
                    <h5 className="text-base font-semibold text-white mb-1">Quick &amp; Secure Application</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">Fill out a short online form and get a credit decision fast.</p>
                  </li>
                  <li className="p-4 rounded-lg border border-blue-500/20 bg-black/30">
                    <h5 className="text-base font-semibold text-white mb-1">Flexible Home Improvement Terms</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">Loan terms tailored to plumbing and home improvement projects.</p>
                  </li>
                  <li className="p-4 rounded-lg border border-blue-500/20 bg-black/30">
                    <h5 className="text-base font-semibold text-white mb-1">Trusted FHA Title I Lender</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">Established nationwide lender serving contractors for decades.</p>
                  </li>
                </ul>
              </div>

              <form
                target="_blank"
                rel="noopener noreferrer"
                action="https://apply.svcfin.com/home/dealerAuthentication"
                method="post"
                className="mt-auto"
              >
                <input name="id" type="hidden" value="184125522" />
                <input name="key" type="hidden" value="1742219857" />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 rounded-xl shadow-lg text-base"
                >
                  <span className="flex items-center justify-center gap-2">
                    Apply With Service Finance
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </form>

              <p className="text-[10px] text-gray-500 mt-4 leading-relaxed">
                Subject to credit approval. Service Finance Company, LLC — 555 S. Federal Highway Suite 200,
                Boca Raton, FL 33432 · (866) 393-0033. FHA Title I Lender · svcfin.com.
              </p>
            </Card>
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
            <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
              Don't wait. View your financing options today and get the peace of mind
              that comes with a professionally completed plumbing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-xl mx-auto">
              <a href="#financing-options" className="flex-1">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white w-full py-3 rounded-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Financing Options
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