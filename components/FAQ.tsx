import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function FAQ() {
  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We proudly serve Temecula, Murrieta, Perris, Menifee, Canyon Lake, Lake Elsinore, Corona, Moreno Valley, Riverside, and surrounding communities throughout Riverside County."
    },
    {
      question: "Do you offer emergency plumbing services?",
      answer: "Yes! We provide 24/7 emergency plumbing services for urgent situations."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "All our technicians are fully licensed, bonded, and insured for your protection."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free estimates for most plumbing projects."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, and all major credit cards."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our work."
    }
  ];

  return (
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
        
        {/* Premium texture overlay */}
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
            Find answers to common questions about our plumbing services, pricing, and policies.
          </p>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
            {/* Premium Red Banner Header */}
            <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8" style={{ 
              background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)`,
              boxShadow: `
                inset 0 2px 0 rgba(255, 255, 255, 0.2),
                inset 0 -2px 0 rgba(0, 0, 0, 0.2),
                0 8px 32px rgba(139, 0, 0, 0.4)
              `
            }}>
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, 
                    transparent 0%, 
                    rgba(255, 255, 255, 0.1) 25%, 
                    rgba(255, 255, 255, 0.2) 50%, 
                    rgba(255, 255, 255, 0.1) 75%, 
                    transparent 100%
                  )`
                }}
              />
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                  <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">Questions & Answers</h3>
              </div>
            </div>
            
            {/* Enhanced FAQ Content */}
            <div className="p-4 sm:p-6 lg:p-10">
              <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4 lg:space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-xl sm:rounded-2xl"
                    style={{ 
                      backgroundColor: '#202020',
                      backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)',
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-500 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 transition-colors duration-300 text-sm sm:text-base lg:text-lg font-semibold group/trigger">
                        <span className="flex items-center gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-blue-600 group-hover/trigger:to-blue-500 transition-all duration-300 flex-shrink-0">
                            <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 group-hover/trigger:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-left">{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-4 sm:pb-6 lg:pb-8 pt-0 px-4 sm:px-6 lg:px-8 ml-9 sm:ml-12 border-l-2 border-blue-500/20 text-sm sm:text-base lg:text-lg leading-relaxed">
                        <div className="glassmorphism rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10">
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

        {/* Enhanced CTA Section */}
        <div className="glassmorphism-dark rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-luxury hover-lift animate-fade-in">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-glow">
                <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Have More Questions?</h3>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Can't find what you're looking for? Our comprehensive FAQ section has additional answers, or contact our friendly team directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
              <a href = "/frequently-asked-questions">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-3 lg:py-4 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg border border-blue-400/20 text-sm sm:text-base group">
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <HelpCircle className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Full FAQ
                </span>
              </Button>
              </a>
              <a href = "/reviews">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-3 lg:py-4 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg border border-red-400/20 text-sm sm:text-base group">
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
                  Contact Us
                </span>
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}