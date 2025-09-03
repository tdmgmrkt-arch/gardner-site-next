import { 
  Shield, FileText, Scale, DollarSign, Users, Wrench, Briefcase, ClipboardCheck, Lock, Phone, Mail, MapPin, Calendar, Info 
} from "lucide-react";

export function TermsServ() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero */}
      <section
        className="py-20 sm:py-28 lg:py-36"
        style={{
          background: `
            radial-gradient(ellipse at center top, #1f2937 0%, #111827 50%, #000000 100%),
            linear-gradient(135deg, #202020 0%, #374151 50%, #1f2937 100%)
          `
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600/20 text-red-400 rounded-full border border-red-500/30">
            <Shield className="h-5 w-5" />
            <span className="font-semibold text-sm">Legal Information</span>
          </div>

          {/* Title + Description */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Terms and <span className="text-red-400">Services</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mb-4">
            Please read these terms carefully before using Gardner Plumbing Co. services. 
            Your trusted local plumbing experts serving Riverside County for over 20 years.
          </p>

          {/* Effective/Updated dates */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-red-400" /> 
              Effective: August 20, 2025
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-400" /> 
              Updated: August 20, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-950/90 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-5xl mx-auto space-y-12 px-4">

          {/* 1. Agreement to Terms */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <FileText className="h-6 w-6 text-red-500" /> 1. Agreement to Terms
            </h2>
            <p className="text-gray-300">
              By engaging Gardner Plumbing Co. services, you (“you” or “your”) agree to these Terms of Service (“Terms”). 
              These Terms govern your access and use of our plumbing services, estimates, and related activities. 
              If you do not agree, you must discontinue use of our services.
            </p>
          </div>

          {/* 2. Services Provided */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Wrench className="h-6 w-6 text-blue-500" /> 2. Services Provided
            </h2>
            <p className="text-gray-300 mb-3">
              Gardner Plumbing Co. provides professional plumbing services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Emergency plumbing repairs</li>
              <li>Drain cleaning and hydrojetting</li>
              <li>Pipe installation and repiping</li>
              <li>Water heater installation and repair</li>
              <li>Toilet installation and repair</li>
              <li>Commercial plumbing services</li>
              <li>Preventative maintenance and inspections</li>
            </ul>
          </div>

          {/* 3. Pricing and Payment */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <DollarSign className="h-6 w-6 text-green-500" /> 3. Pricing and Payment
            </h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>All pricing is provided in estimates and invoices.</li>
              <li>Payment is due upon completion of services unless other arrangements are made in writing.</li>
              <li>We accept cash, credit/debit cards, and approved financing options.</li>
              <li>Late payments may be subject to interest and collection fees.</li>
              <li>All deposits are non-refundable unless otherwise stated in writing.</li>
            </ul>
          </div>

          {/* 4. Warranties and Guarantees */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <ClipboardCheck className="h-6 w-6 text-purple-500" /> 4. Warranties and Guarantees
            </h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>All labor comes with a 1-year workmanship warranty.</li>
              <li>Manufacturer warranties apply to parts and equipment.</li>
              <li>Warranties do not cover misuse, neglect, or unauthorized modifications.</li>
            </ul>
          </div>

          {/* 5. Customer Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Users className="h-6 w-6 text-yellow-500" /> 5. Customer Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Provide safe and reasonable access to work areas.</li>
              <li>Disclose relevant property information.</li>
              <li>Ensure utilities are available and functioning at the time of service.</li>
              <li>Obtain any necessary permits unless otherwise agreed.</li>
            </ul>
          </div>

          {/* 6. Liability and Insurance */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Briefcase className="h-6 w-6 text-orange-500" /> 6. Liability and Insurance
            </h2>
            <p className="text-gray-300 mb-2">
              Gardner Plumbing Co. maintains general liability insurance. However, we are not liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Pre-existing issues or damages not caused by our work</li>
              <li>Incidental or consequential damages</li>
              <li>Customer-supplied materials or equipment</li>
            </ul>
          </div>

          {/* 7. Cancellation and Rescheduling */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Calendar className="h-6 w-6 text-pink-500" /> 7. Cancellation and Rescheduling
            </h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>24-hour notice required for rescheduling or cancellations.</li>
              <li>Same-day cancellations may incur fees.</li>
              <li>Deposits are non-refundable for cancellations made less than 24 hours in advance.</li>
            </ul>
          </div>

          {/* 8. Privacy and Confidentiality */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Lock className="h-6 w-6 text-teal-500" /> 8. Privacy and Confidentiality
            </h2>
            <p className="text-gray-300">
              We respect your privacy and confidentiality. Personal data will only be used for service delivery, scheduling, and billing purposes. 
              For more details, see our Privacy Policy.
            </p>
          </div>

          {/* 9. Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Scale className="h-6 w-6 text-indigo-500" /> 9. Dispute Resolution
            </h2>
            <p className="text-gray-300">
              Any disputes shall first be attempted to be resolved informally. If unresolved, disputes are subject to binding arbitration in Riverside County, California. 
              These Terms are governed by the laws of California.
            </p>
          </div>

          {/* 10. Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Info className="h-6 w-6 text-gray-400" /> 10. Changes to Terms
            </h2>
            <p className="text-gray-300">
              Gardner Plumbing Co. reserves the right to modify these Terms at any time. Updated Terms will be posted on our website and take effect immediately.
            </p>
          </div>

          {/* Contact Information */}
          <div className="pt-12 border-t border-gray-700">
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <Phone className="h-6 w-6 text-red-500" /> Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-300">(951) 246-4337</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-300">support@gardnerplumbing.com</p>
              </div>
              <div>
                <p className="font-semibold">Service Area</p>
                <p className="text-gray-300">Riverside County</p>
              </div>
            </div>
            <div className="mt-12 text-gray-400 text-sm">
              Gardner Plumbing Co. – Your Trusted Local Plumbing Experts  
              <br /> Licensed, Bonded & Insured • Serving Riverside County for 20+ Years
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
