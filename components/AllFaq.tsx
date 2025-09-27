"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, Phone, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { useState, useEffect } from "react";

// --- Comprehensive FAQ Data Structure ---

const faqCategories = [
  {
    category: "General & Emergency",
    questions: [
      { question: "What areas do you service?", answer: "We proudly serve Temecula, Murrieta, Perris, Menifee, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and surrounding communities throughout Riverside County." },
      { question: "Are your plumbers licensed and insured?", answer: "Absolutely. All our technicians are fully licensed, bonded, and insured for your protection and peace of mind." },
      { question: "Do you offer warranties on your work?", answer: "Yes, we provide comprehensive warranties on all our workmanship and the parts we install." },
      { question: "Do you offer 24/7 emergency plumbing services?", answer: "Yes! We provide 24/7 emergency plumbing services for urgent situations like active leaks, burst pipes, sewage backups, or gas smells." },
      { question: "What counts as a plumbing emergency?", answer: "Anything causing active water damage, safety hazards, or leaving you without essential services." },
      { question: "How fast can you arrive for an emergency?", answer: "We prioritize emergency calls and dispatch the closest available technician immediately." },
    ]
  },
  {
    category: "Drain & Sewer Services",
    questions: [
      { question: "How do I know if I need professional drain cleaning?", answer: "Signs include slow-draining sinks, gurgling sounds, odors, or recurring clogs are signs." },
      { question: "Can you clear all types of drain clogs?", answer: "Yes, including grease, soap scum, hair clogs, toilet blockages, and tree roots." },
      { question: "Is chemical drain cleaner safe to use?", answer: "No. Chemicals corrode pipes, damage fixtures, and harm the environment." },
      { question: "How often should I have my drains cleaned?", answer: "For most homes, we recommend professional drain cleaning once every 1–2 years as preventive maintenance. Homes with heavy usage or frequent clogs may need service more often." },
      { question: "What are the signs of a main sewer line clog?", answer: "Multiple drains backing up, gurgling toilets, or foul odors." },
      { question: "Can you repair a sewer line without digging up my yard?", answer: "Yes, with trenchless repair methods like pipe lining and bursting." },
      { question: "What is hydro-jetting and how does it work?", answer: "High-pressure water blasts away grease, roots, and debris from pipes." },
      { question: "Is hydro-jetting safe for my pipes?", answer: "Yes, when performed by trained professionals after a camera inspection." },
      { question: "What's the difference between hydro-jetting and snaking?", answer: "Snaking clears clogs but leaves buildup; jetting fully cleans pipe walls." },
      { question: "Can hydro-jetting remove tree roots?", answer: "Yes, with specialized nozzles to cut and flush roots out completely." },
      { question: "How long does hydro-jetting take?", answer: "Usually 1–2 hours for homes, longer for commercial systems." },
      { question: "How often should I have my septic tank pumped?", answer: "Every 3 to 5 years, depending on the size of your tank, the number of people in your household, and your water usage." },
      { question: "What shouldn't I put down my drains or in my septic system?", answer: "Avoid flushing anything other than human waste and toilet paper. Do not put grease, coffee grounds, 'flushable' wipes, or harsh chemicals down your drains." },
    ]
  },
  {
    category: "Leaks & Repiping",
    questions: [
      { question: "How do I know if I have a water leak?", answer: "High bills, running water sounds, damp walls, mold, or low pressure are signs." },
      { question: "Can you find leaks without damaging my walls or floors?", answer: "Yes, using acoustic sensors, thermal cameras, and other non-invasive methods." },
      { question: "How much can a hidden leak cost me?", answer: "A small hidden leak can waste 20–30 gallons per day, adding $50–$100 to your monthly water bill." },
      { question: "Do you detect slab leaks?", answer: "Yes, we specialize in slab leak detection using advanced equipment to locate leaks under concrete foundations." },
      { question: "How long does leak detection take?", answer: "Most residential leak detections take 1-3 hours depending on the property size and leak complexity." },
      { question: "When should I consider a whole-home repipe?", answer: "If you have frequent leaks, low water pressure, rusty water, or old galvanized/polybutylene piping." },
      { question: "What pipe materials do you install for repiping?", answer: "We primarily use high-quality Copper (Type L) and PEX (A/B) piping, depending on your home's needs and local codes." },
      { question: "How long does a repipe take?", answer: "Most single-family homes are completed in 1–3 days, plus time for any necessary wall patching." },
      { question: "Will you handle permits and inspections for a repipe?", answer: "Yes, we manage all required permits and schedule inspections to ensure all work meets local codes." },
      { question: "Is a repipe messy?", answer: "We take great care to minimize mess by using dust control measures and floor protection. We keep openings as small as possible and patch them after inspections." },
    ]
  },
  {
    category: "Water Heaters",
    questions: [
      { question: "Should I repair or replace my water heater?", answer: "Common signs you need a new water heater include age over 8-12 years, rusty water, strange noises, frequent repairs, inadequate hot water, or visible leaks." },
      { question: "How much does water heater installation cost?", answer: "Installation typically costs $1,200-$3,500 depending on the type and size of the unit. We provide upfront pricing before any work begins." },
      { question: "How long does water heater installation take?", answer: "Most installations take 2-4 hours. Simple replacements can be done in 2 hours, while new or tankless units may take up to 6 hours." },
      { question: "Do you offer emergency water heater service?", answer: "Yes! We provide 24/7 emergency service for urgent issues like no hot water or a leaking water heater." },
      { question: "Should I choose a tankless or traditional water heater?", answer: "Tankless units are more energy-efficient and provide endless hot water but cost more upfront. Traditional tanks are less expensive initially but use more energy. We'll help you choose based on your needs." },
      { question: "Do you guarantee your water heater work?", answer: "Absolutely! We offer comprehensive warranties on both parts and labor. New installations include manufacturer warranties plus our workmanship guarantee." },
    ]
  },
  {
    category: "Appliances & Fixtures",
    questions: [
      { question: "Should I repair or replace my garbage disposal?", answer: "Replace if the motor is burnt out, the housing leaks, or blades are worn. Minor issues like jams or clogs can often be repaired." },
      { question: "How long does garbage disposal installation take?", answer: "Most installations are completed in 60–90 minutes, including removal of the old unit and full testing." },
      { question: "Can you install a disposal I purchased?", answer: "Yes! We’ll confirm compatibility with your sink and plumbing and ensure all connections are watertight and to code." },
      { question: "Why does my garbage disposal smell?", answer: "This is usually caused by food residue buildup. We can clean and flush the system to eliminate odors." },
      { question: "Do you handle the electrical hookups for disposals?", answer: "Yes. We connect power safely, whether it’s hardwired or plug-in, and test the unit thoroughly." },
      { question: "Should I repair or replace my toilet?", answer: "If your toilet has hairline cracks, chronic clogs, high water usage, or a damaged flange, replacement often saves money long-term." },
      { question: "How long does a toilet installation take?", answer: "Most installs take 60–120 minutes, including removal of the old toilet, installing a new wax seal, and testing." },
      { question: "Can you install a toilet I purchased?", answer: "Yes. We’ll confirm compatibility, bring upgraded hardware, and install it to code." },
      { question: "Do you repair running or leaking toilets?", answer: "Absolutely. We replace fill valves, flappers, seals, and supply lines to ensure quiet, efficient operation." },
      { question: "Will you dispose of my old toilet?", answer: "Yes, we can haul away and properly dispose of your old toilet. Please ask to include this in your estimate." },
    ]
  },
  {
    category: "Inspections & Gas Lines",
    questions: [
      { question: "What is a 65-point plumbing inspection?", answer: "It's a comprehensive, top-to-bottom evaluation of your home's entire plumbing system to assess its health, safety, and efficiency." },
      { question: "Why is a regular plumbing inspection important?", answer: "Proactive inspections help find small, hidden issues like minor leaks or corrosion before they turn into major, costly disasters." },
      { question: "How often should I have my plumbing inspected?", answer: "We recommend a full plumbing inspection annually to catch developing issues and ensure your system remains in peak condition." },
      { question: "What do I get after the inspection is complete?", answer: "You will receive a detailed report outlining the health of your plumbing system, with clear recommendations for any necessary repairs or improvements." },
      { question: "Do you offer camera inspections for drains?", answer: "Yes, for stubborn or recurring clogs, we use video camera inspections to look inside your pipes and identify the exact cause of the problem." },
      { question: "How much does gas line installation cost?", answer: "Installation typically costs $500-$2,000 depending on the length and complexity. We provide upfront pricing before starting any work." },
      { question: "What are signs I need gas line repair?", answer: "Common signs include a gas smell, hissing sounds near gas lines, dead vegetation near underground lines, or appliances not working properly." },
      { question: "Are you licensed for gas line work?", answer: "Absolutely! We are fully licensed and certified for gas line installation and repair. All work meets local codes and safety standards." },
    ]
  },
  {
    category: "Smart Home & Filtration",
    questions: [
      { question: "What is the Moen Flo Smart Water Monitor?", answer: "The Moen Flo is a smart home device that monitors your home's water usage 24/7. It can detect leaks as small as a drip per minute and can automatically shut off your water to prevent catastrophic damage." },
      { question: "Can I get insurance discounts for the Moen Flow?", answer: "Many insurance providers offer significant discounts for homes with smart water monitors and automatic shutoff valves like the Moen Flow." },
      { question: "Why do I need a certified professional for Moen Flow installation?", answer: "Proper installation on the main water line is crucial for the device to work correctly. As Certified Moen Installers, we ensure the device is placed optimally and calibrated, guaranteeing its performance and protecting your warranty." },
      { question: "What's the difference between a whole-house filter and reverse osmosis?", answer: "A whole-house filter treats all water entering your home, removing common contaminants like chlorine and sediment. A Reverse Osmosis (RO) system is a point-of-use filter, typically under the kitchen sink, that provides the highest level of purification for drinking and cooking water." },
      { question: "How often do I need to change water filters?", answer: "Filter life varies by system. Whole-house filters typically last 6-12 months. Reverse Osmosis membranes can last 2-3 years, with their pre-filters needing changes more often. We offer maintenance plans to handle this for you." },
      { question: "What are the benefits of soft water?", answer: "Soft water prevents scale buildup in pipes and appliances, extending their lifespan. It also allows soaps to lather better, meaning you use less. Many people notice healthier, softer skin and hair, and spot-free dishes." },
    ]
  },
  {
    category: "Billing & Financing",
    questions: [
      { question: "Do you provide free estimates?", answer: "Yes, free estimates are provided for most projects." },
      { question: "What payment methods do you accept?", answer: "Cash, checks, and all major credit cards." },
      { question: "Do you offer financing options?", answer: "Yes, we have financing available for larger jobs." },
      { question: "Is plumbing work covered by insurance?", answer: "Often yes, for sudden and accidental water damage." },
      { question: "Do you offer phased project options?", answer: "Yes, phased solutions are available to fit your budget." }
    ]
  }
];

export function AllFaq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(faqCategories);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCategories(faqCategories);
      return;
    }

    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = faqCategories
      .map(category => {
        const filteredQuestions = category.questions.filter(
          faq =>
            faq.question.toLowerCase().includes(lowercasedFilter) ||
            faq.answer.toLowerCase().includes(lowercasedFilter)
        );
        return { ...category, questions: filteredQuestions };
      })
      .filter(category => category.questions.length > 0);

    setFilteredCategories(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{ 
              background: `
                radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%),
                linear-gradient(135deg, #374151 0%, #1f2937 50%, #000000 100%)
              `
            }}
          />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 85% 15%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 drop-shadow-lg">
              Frequently Asked <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our <Link href="/services" className="text-red-400 hover:text-red-300 underline">plumbing services</Link>, pricing, and policies. If you don't find your answer here, please don't hesitate to <Link href="/contact-us" className="text-red-400 hover:text-red-300 underline">contact us</Link>.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
                <Input
                    type="text"
                    placeholder="Search all questions (e.g., 'leak', 'water heater', 'financing')"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 text-lg bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300 text-white placeholder:text-gray-400 shadow-lg"
                />
            </div>
          </div>

          {/* Nested FAQ Accordions */}
          <Accordion type="multiple" className="w-full space-y-8">
            {filteredCategories.map((category, catIndex) => (
              <AccordionItem 
                key={category.category} 
                value={`category-${catIndex}`}
                className="border-none"
              >
                <div className="animate-slide-up space-y-4 break-inside-avoid" style={{ animationDelay: `${catIndex * 100}ms` }}>
                  <AccordionTrigger className="text-2xl font-bold text-white text-center lg:text-left hover:no-underline">
                    {category.category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="single" collapsible className="w-full space-y-2 mt-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${catIndex}-${index}`}
                          className="group relative border-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-xl bg-gray-800/40"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                          <div className="absolute inset-[1px] bg-gray-900/70 rounded-xl"></div>
                          
                          <div className="relative z-10">
                            <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-300 data-[state=open]:text-blue-400 px-4 sm:px-6 py-3 sm:py-4 transition-colors duration-300 text-sm sm:text-base font-semibold group/trigger">
                              <span className="flex items-center gap-3 sm:gap-4">
                                <div className="w-6 h-6 bg-gray-700/50 rounded-full flex items-center justify-center group-hover/trigger:bg-blue-500/50 transition-all duration-300 flex-shrink-0">
                                  <HelpCircle className="h-4 w-4 text-blue-400 group-hover/trigger:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-left flex-1">{faq.question}</span>
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pb-4 pt-0 px-4 sm:px-6 ml-9 sm:ml-10 border-l-2 border-gray-700 text-sm sm:text-base leading-relaxed">
                              <div className="bg-black/20 rounded-md p-3 sm:p-4 border border-white/10">
                                {faq.answer}
                              </div>
                            </AccordionContent>
                          </div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Separator */}
          <hr className="my-16 sm:my-20 lg:my-24 border-t-2 border-gray-700/50 w-1/2 mx-auto bg-gradient-to-r from-transparent via-red-500/50 to-transparent h-1" />


          {/* CTA Section */}
          <div className="text-center animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our friendly team is ready to provide the answers you need. Contact us today for expert advice or to schedule your <Link href="/services" className="text-red-400 hover:text-red-300 underline">service</Link>.
              </p>
              <a href="/contact-us">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group">
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Contact Us Now
                    </span>
                </Button>
              </a>
          </div>

        </div>
      </section>
    </div>
  );
}
