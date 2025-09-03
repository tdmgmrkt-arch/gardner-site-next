import { 
  Shield, FileText, Database, Eye, Lock, Cookie, Phone, Mail, MapPin, Users, Clock, Scale, Info, Calendar, 
  OptionIcon,
  DoorOpen,
  List
} from "lucide-react";

export function PrivPol() {
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
            <span className="font-semibold text-sm">Privacy Protection</span>
          </div>

          {/* Title + Description */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Privacy <span className="text-red-400">Policy</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mb-4">
            Your privacy is important to us. This policy explains how Gardner Plumbing Co. 
            collects, uses, and protects your personal information when you use our services.
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
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Database className="h-6 w-6 text-red-500" /> 1. Information We Collect
            </h2>
            <p className="text-gray-300 mb-3">
              We may collect the following types of information when you interact with us:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li><b>Personal Information:</b>Name, phone number, email address, service address, and payment information.</li>
              <li><b>Service Information:</b> Details about your service requests, appointments, and communications with us.</li>
              <li><b>Messaging Information:</b>  If you opt in to receive SMS or mobile communications, we may collect your mobile number and messaging preferences.</li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Mail className="h-6 w-6 text-red-500" /> 2. How We Use Collected Information
            </h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Responding to service requests and providing plumbing services.</li>
              <li>Scheduling, confirming, and updating appointments.</li>
              <li>Sending important service updates, reminders, and customer support messages.</li>
              <li>Improving our services and customer experience.</li>
              <li><b>*VERY IMPORTANT – MOBILE/MESSAGING OPT-IN DATA</b> 
              - We explicitly assure you that your mobile phone number, SMS consent, and messaging opt-in data will NOT be shared, sold, or disclosed to any third parties for their marketing purposes.</li>
            </ul>
          </div>

          {/* 3. Information Sharing */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Shield className="h-6 w-6 text-red-500" /> 3. Data Protection
            </h2>
            <p className="text-gray-300">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          {/* 4. Data Security */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <List className="h-6 w-6 text-red-500" /> 4. Opt-Out Instructions
            </h2>
            <p className="text-gray-300">
              
                You are in control of your data. You may opt out of receiving messages or data usage at any time by doing one of the following:
                Reply STOP to any SMS message you receive from us.
                Contact us directly at:<br></br><br></br>
                <b>Phone:</b>  (951) 246-4337<br></br>
                <b>Email:</b>  gardnerplumbingco@gmail.com
            </p>
          </div>

          {/* 5. Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Clock className="h-6 w-6 text-red-500" /> 5. Data Retention
            </h2>
            <p className="text-gray-300">
              We retain your data only as long as needed for service, legal, and warranty purposes.
            </p>
          </div>

          {/* 6. Changes */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Scale className="h-6 w-6 text-red-500" /> 6. Changes to This Policy
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Updates will be posted on this page.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Phone className="h-6 w-6 text-red-500" /> Contact Information
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" /> (951) 246-4337
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-500" /> gardnerplumbingco@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" /> Riverside County, CA
              </li>
            </ul>
          </div>
          <div className="mt-12 text-gray-400 text-sm">
              Gardner Plumbing Co. – Your Trusted Local Plumbing Experts  
              <br /> Licensed, Bonded & Insured • Serving Riverside County for 20+ Years
            </div>

          {/* … keep the other sections (2–10, Contact) the same as before */}
        </div>
      </section>
    </div>
  );
}
