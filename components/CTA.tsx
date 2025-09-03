import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export function CTA() {
  return (
    <section 
      id="contact" 
      className="py-8 relative overflow-hidden shadow-lg border-t border-gray-600/30 border-b border-gray-600/30"
      style={{ backgroundColor: '#202020' }}
    >
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Main headline */}
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Service You Can Trust!
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-300 text-lg">
            Let us know how we can help you today.
          </p>
          
          {/* Action button */}
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 transition-all duration-300 shadow-sm"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Online
          </Button>
          
        </div>
      </div>
    </section>
  );
}