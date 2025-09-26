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
  Droplets,
  FileText,
  TrendingUp,
  FastForward,
  MapPin
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
    <h3 className="text-2xl font-bold text-center">Request Warranty Service</h3>
    <p className="text-center text-gray-400">Please provide your details below.</p>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none" />
      <input type="text" placeholder="Service Address" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none" />
      <input type="text" placeholder="Original Invoice #" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none" />
      <textarea placeholder="Describe the issue..." rows={4} className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"></textarea>
      <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white">Submit Claim</Button>
    </form>
  </div>
);

export function Warranty() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { icon: Wrench, title: "Repair & Installation Labor", description: "Our workmanship is covered, ensuring that any installation or repair we perform is done right.", features: ["1-Year Workmanship Guarantee", "Follow-up Adjustments", "Code-Compliant Work", "Professional Service"] },
    { icon: Award, title: "Manufacturer's Parts Warranty", description: "We use high-quality parts and fixtures, covered by comprehensive manufacturer warranties.", features: ["Fixtures & Faucets", "Water Heater Components", "Valves & Connectors", "Garbage Disposals"] },
    { icon: Droplets, title: "Drain Cleaning Services", description: "We guarantee our main line drain cleaning services to remain free-flowing for a specified period.", features: ["30-Day Stoppage Guarantee", "Hydro Jetting Warranty", "Excludes Foreign Objects", "Preventative Advice"] },
    { icon: Shield, title: "Water Heater Installation", description: "New water heater installations are backed by both our labor guarantee and the manufacturer's warranty.", features: ["Tank Leak Coverage", "Component Protection", "Labor for Replacements", "Thermal Expansion Tanks"] },
  ];

  const benefits = [
    { icon: Shield, title: "Complete Peace of Mind", description: "Our warranties ensure that your investment is protected against defects in both workmanship and materials." },
    { icon: CheckCircle, title: "Hassle-Free Claims", description: "If an issue arises, our process is simple. Just give us a call, and we'll handle the rest promptly." },
    { icon: Users, title: "We Stand By Our Work", description: "A warranty is our promise to you that we are confident in the quality of our service and the parts we use." },
    { icon: FileText, title: "Clear & Upfront Terms", description: "All warranty details are provided in writing on your invoice, so you know exactly what is covered." },
  ];

  const faqs = [
    { question: "What is your standard warranty on labor?", answer: "We offer a one-year warranty on workmanship for most repairs and installations. This covers the labor involved in the initial service. Specific terms will be detailed on your invoice." },
    { question: "How does the manufacturer's parts warranty work?", answer: "If a part we install fails while under its manufacturer's warranty, we will handle the replacement process. The warranty typically covers the cost of the part itself, and our labor warranty may apply to the re-installation." },
    { question: "Is my drain cleaning service guaranteed?", answer: "Yes, we offer a 30-day guarantee on main sewer line cleaning services. If the same line clogs again within 30 days under normal use, we will return to clear it at no additional charge." },
    { question: "What is not covered by the warranty?", answer: "Warranties generally do not cover issues caused by homeowner misuse, abuse, pre-existing conditions in your plumbing system not related to our work, or clogs caused by flushing inappropriate items." },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <nav className="mb-6"><div className="flex items-center space-x-2 text-sm text-gray-400"><span>Home</span><ArrowRight className="h-4 w-4" /><span className="text-red-400">Warranty</span></div></nav>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm"><Award className="h-5 w-5 text-green-400" /><span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Commitment to You</span></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">Industry-Leading <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Warranty</span> on Parts & Labor</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">We stand behind our work. Every job is backed by a comprehensive warranty on both workmanship and the high-quality parts we use, giving you complete peace of mind.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl shadow-lg">Submit a Warranty Claim</Button>
              </div>
            </div>
            <div className="relative group animate-slide-up"><div className="relative overflow-hidden rounded-3xl shadow-luxury"><Image src="https://placehold.co/1000x600/1f2937/ffffff?text=Warranty+Protected" alt="An official-looking warranty seal" width="1000" height="600" className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"/></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, #374151 0%, #1f2937 50%, #111827 100%), linear-gradient(135deg, #2c2c2c 0%, #374151 50%, #1f2937 100%)` }}/></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm"><Wrench className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">What We Cover</span></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">Comprehensive <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Warranty</span> Coverage</h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">Our warranty covers the key aspects of our plumbing services, ensuring your investment is secure.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => (
              <Card key={index} className="group relative border-none overflow-hidden shadow-luxury hover-lift transition-all duration-500" style={{ backgroundColor: '#202020', backgroundImage: 'linear-gradient(145deg, #202020 0%, #1a1a1a 100%)', animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"></div>
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="relative mb-6"><div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600/30 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 shadow-lg"><service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-white transition-all duration-500" /></div></div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">{service.title}</h3>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                    <ul className="space-y-2">{service.features.map((feature, idx) => (<li key={idx} className="flex items-center gap-3 text-sm"><CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" /><span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span></li>))}</ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, #1f2937 0%, #111827 50%, #000000 100%)` }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative group"><div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-2xl transition-all duration-500"><Image src="/gardnertecharrival.webp" alt="Professional Gardner Plumbing Co. technician arriving for a service call" width={1000} height={600} className="w-full h-96 object-cover rounded-3xl"/><div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div></div><div className="absolute bottom-6 left-6 glassmorphism-dark rounded-2xl p-4 border border-white/20 shadow-luxury animate-fade-in bg-black/60 backdrop-blur-md"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"><Award className="h-4 w-4 text-white" /></div><div><div className="text-white font-bold text-sm">30+ Years</div><div className="text-gray-300 text-xs">Experience</div></div></div></div></div>
                <div>
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm"><Shield className="h-5 w-5 text-green-400" /><span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Promise</span></div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg leading-tight">Your <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Satisfaction</span> is Our Priority</h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">A warranty is more than a piece of paper—it's our commitment to quality and your long-term satisfaction. We're not happy until you're happy with our work.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">{benefits.map((benefit, index) => (<div key={index} className="flex items-start gap-4 p-4 glassmorphism-dark rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group hover-lift"><div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-xl flex items-center justify-center group-hover:from-green-600 group-hover:to-green-500 transition-all duration-300 flex-shrink-0"><benefit.icon className="h-6 w-6 text-green-400 group-hover:text-white transition-colors duration-300" /></div><div><h4 className="font-bold text-white text-lg mb-2 group-hover:text-green-100 transition-colors duration-300">{benefit.title}</h4><p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{benefit.description}</p></div></div>))}</div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top left, #2c2c2c 0%, #1f2937 50%, #111827 100%)` }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in"><div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm"><HelpCircle className="h-5 w-5 text-blue-400" /><span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span></div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">Warranty <span className="text-gradient bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">Questions</span></h2></div>
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
