"use client";

import React, { useState, createContext, useContext, FC, ReactNode } from "react";
import {
  Wrench,
  Phone,
  Calendar,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  DollarSign,
  Users,
  HelpCircle,
  Mail,
  Award,
  AlertTriangle,
  X,
  FileText,
  TrendingUp,
  FastForward,
  MapPin,
  Smile,
  Trash2
} from "lucide-react";

// --- START: Self-Contained UI Components with Typing ---

// Mock for next/image
const Image: FC<any> = (props) => <img {...props} />;

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'lg' | 'default';
  variant?: 'outline' | 'default';
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, size, variant, children, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeClasses = {
    lg: "h-11 px-8 rounded-md",
    default: "h-10 py-2 px-4",
  };
  const variantClasses = {
    outline: "border-2 border-white/60 text-white hover:bg-white hover:text-gray-900",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
  };
  const finalClasses = `${baseClasses} ${sizeClasses[size || 'default']} ${variantClasses[variant || 'default']} ${className || ''}`;
  return <button className={finalClasses} {...props}>{children}</button>;
};

// Card Components
const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />;
const CardHeader: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />;
const CardContent: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => <div className={`p-6 pt-0 ${className}`} {...props} />;

// Accordion Components
interface AccordionContextType {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  collapsible: boolean;
}
const AccordionContext = createContext<AccordionContextType | null>(null);

const Accordion: FC<{ children: ReactNode, type: 'single', collapsible: boolean } & React.HTMLAttributes<HTMLDivElement>> = ({ children, type, collapsible, ...props }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const value = { selected, setSelected, collapsible };
  return <AccordionContext.Provider value={value}><div {...props}>{children}</div></AccordionContext.Provider>;
};

const AccordionItem: FC<{ children: ReactNode, value: string } & React.HTMLAttributes<HTMLDivElement>> = ({ children, value, className, ...props }) => {
  return <div className={`${className}`} {...props}>{React.Children.map(children, child => React.cloneElement(child as React.ReactElement, { value }))}</div>;
};

const ChevronDown: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);

const AccordionTrigger: FC<{ children: ReactNode, value?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, value, ...props }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within an Accordion");
  const { selected, setSelected, collapsible } = context;
  const isOpen = selected === value;
  const handleClick = () => {
    if (collapsible && isOpen) setSelected(null);
    else setSelected(value || null);
  };
  return (
    <button onClick={handleClick} className="flex flex-1 items-center justify-between py-4 font-medium transition-all w-full" {...props}>
      {children}
      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
};

const AccordionContent: FC<{ children: ReactNode, value?: string } & React.HTMLAttributes<HTMLDivElement>> = ({ children, value, ...props }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within an Accordion");
  const { selected } = context;
  const isOpen = selected === value;
  return (
    <div className={`overflow-hidden text-sm transition-all ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`} {...props}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};

const Modal: FC<{ open: boolean; onClose: () => void; children: ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl p-6 w-full max-w-md relative border border-gray-700">
        <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-700"><X className="h-6 w-6" /></button>
        {children}
      </div>
    </div>
  );
};

const LeadForm = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-center">Schedule a Service</h3>
    <p className="text-center text-gray-400">Experience the Gardner Plumbing Co. difference.</p>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none" />
      <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none" />
      <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none" />
      <textarea placeholder="How can we help?" rows={4} className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"></textarea>
      <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white">Book Now</Button>
    </form>
  </div>
);

const SchedulerModal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} size="lg" variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl">
        <span className="flex items-center gap-3"><Calendar className="h-5 w-5" /> Schedule Service</span>
      </Button>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LeadForm />
      </Modal>
    </>
  );
};

export function OurGuarantee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const ourPromises = [
    { icon: Smile, title: "100% Satisfaction Guarantee", description: "If you are not fully satisfied with our service, we'll make it right. Your happiness is our ultimate goal.", features: ["We Listen to Your Concerns", "Dedicated Follow-Up", "Commitment to Resolution", "Your Feedback Matters"] },
    { icon: DollarSign, title: "Upfront Pricing Guarantee", description: "No surprises or hidden fees. We provide a clear, detailed estimate before any work begins.", features: ["No Hidden Fees", "Detailed Estimates", "Approval Before Work", "Transparent Invoicing"] },
    { icon: Trash2, title: "Clean Home Guarantee", description: "Our technicians treat your home with respect, wearing shoe covers and thoroughly cleaning the work area.", features: ["Shoe Covers Worn", "Work Area Protection", "Thorough Cleanup", "Respect for Your Property"] },
    { icon: Shield, title: "Licensed & Insured Guarantee", description: "For your protection, all our plumbers are fully licensed, bonded, and insured.", features: ["Verified Credentials", "Fully Insured", "Workman's Compensation", "Peace of Mind"] },
  ];

  const faqs = [
    { question: "What does '100% Satisfaction Guarantee' really mean?", answer: "It means that if you are not happy with the quality of our workmanship for any reason, please let us know. We will return to assess the issue and make it right at no additional cost. We are committed to ensuring you are fully satisfied with the results of our service." },
    { question: "How can I be sure the price won't change?", answer: "Our Upfront Pricing Guarantee means the price we quote is the price you pay. If any unforeseen issues arise that might change the scope of work, we will stop, explain the situation, and get your approval on a new price before proceeding. There are never any surprises on your final bill." },
    { question: "Do you really clean up after the job is done?", answer: "Absolutely. The Clean Home Guarantee is a point of pride for our technicians. They are trained to protect your floors, contain any mess, and clean their work area thoroughly before leaving, so your home looks just as it did when they arrived." },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="mb-6"><div className="flex items-center space-x-2 text-sm text-gray-400"><span>Home</span><ArrowRight className="h-4 w-4" /><span className="text-red-400">Our Guarantee</span></div></nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm"><Award className="h-5 w-5 text-green-400" /><span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Promise to You</span></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">Our <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Unbreakable</span> Guarantee</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">We're not just providing plumbing services; we're building a relationship based on trust. Our guarantee is our promise to deliver exceptional quality and stand behind our work, every time.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl shadow-lg">Schedule Your Service</Button>
              </div>
            </div>
            <div className="relative group animate-slide-up"><div className="relative overflow-hidden rounded-3xl shadow-luxury"><Image src="https://placehold.co/1000x600/1f2937/ffffff?text=Our+Guarantee" alt="A seal of guarantee and customer satisfaction" width="1000" height="600" className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"/></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%), linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)` }}/></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm"><CheckCircle className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Promises</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">The Pillars of <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Our Guarantee</span></h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">Our guarantee is built on four key promises to ensure you have the best possible experience when you choose us for your plumbing needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {ourPromises.map((promise, index) => (
              <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)', animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="relative mb-6"><div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg"><promise.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" /></div></div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{promise.title}</h3>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{promise.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in"><div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm"><HelpCircle className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span></div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">Our Guarantee <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span></h2></div>
          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="glassmorphism-dark rounded-3xl backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden hover-lift">
              <div className="relative overflow-hidden px-6 sm:px-8 py-6 sm:py-8" style={{ background: `linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #B91C1C 100%)` }}><div className="relative flex items-center justify-center gap-4"><div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner"><HelpCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-sm" /></div><h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Questions & Answers</h3></div></div>
              <div className="p-6 sm:p-8 lg:p-10">
                <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="group relative border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in rounded-2xl" style={{ backgroundColor: '#202020', backgroundImage: "linear-gradient(145deg, #202020 0%, #1a1a1a 100%)", animationDelay: `${index * 100}ms` }}>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>
                      <div className="relative z-10">
                        <AccordionTrigger className="text-left hover:no-underline text-white hover:text-blue-400 data-[state=open]:text-blue-500 px-6 sm:px-8 py-6 sm:py-8 transition-colors duration-300 text-base sm:text-lg font-semibold group/trigger">
                          <span className="flex items-center gap-4"><div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover/trigger:from-blue-600 group-hover/trigger:to-blue-500 transition-all duration-300"><HelpCircle className="h-4 w-4 text-blue-400 group-hover/trigger:text-white transition-colors duration-300" /></div>{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-6 sm:pb-8 pt-0 px-6 sm:px-8 ml-12 border-l-2 border-blue-500/20 text-base sm:text-lg leading-relaxed"><div className="glassmorphism rounded-xl p-4 sm:p-6 border border-white/10">{faq.answer}</div></AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}><LeadForm /></Modal>
    </div>
  );
}
