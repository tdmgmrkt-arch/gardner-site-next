import {
  Shield, FileText, Database, Eye, Lock, Cookie, Phone, Mail, MapPin, Users, Clock, Scale, Info, Calendar,
  OptionIcon,
  DoorOpen,
  List,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

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
            collects, uses, and protects your personal information when you use our <Link href="/services" className="text-red-400 hover:text-red-300 underline">services</Link>.
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

          {/* 3. Data Protection */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Shield className="h-6 w-6 text-red-500" /> 3. Data Protection
            </h2>
            <p className="text-gray-300">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our practices follow industry standards including <a href="https://www.ftc.gov/business-guidance/privacy-security" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">FTC privacy guidelines</a>.
            </p>
          </div>

          {/* 4. Messaging Terms */}
          <div className="bg-gray-800/50 border border-red-500/30 rounded-xl p-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-red-500" /> 4. Messaging Terms
            </h2>
            <p className="text-gray-300 mb-4">
              Gardner Plumbing Co. offers SMS/text messaging services to provide you with important information about your plumbing services. By opting in to our messaging program, you agree to the following terms:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
              <li><b>Company Name:</b> Gardner Plumbing Co.</li>
              <li><b>Types of Messages:</b> We send both informational messages (appointment reminders, service confirmations, account notifications, technician arrival updates) and marketing messages (special offers, promotions, seasonal discounts, service recommendations).</li>
              <li><b>Message Frequency:</b> Message frequency varies based on your service activity and our promotional schedule. You may receive multiple messages per month.</li>
              <li><b>Message & Data Rates:</b> Message and data rates may apply depending on your mobile carrier and plan. Gardner Plumbing Co. is not responsible for any charges from your carrier.</li>
              <li><b>How to Get Help:</b> Reply HELP to any message for assistance, or contact us at office@gardnerplumbingco.com or call (951) 246-4337.</li>
              <li><b>How to Opt Out:</b> Reply STOP to any message to unsubscribe from our SMS program at any time. You will receive a confirmation message and will no longer receive text messages from us unless you opt in again.</li>
            </ul>
            <p className="text-gray-300 font-semibold bg-gray-900/50 p-3 rounded-lg border border-gray-700">
              Customer opt-in data will not be shared or sold to third parties for marketing purposes.
            </p>
          </div>

          {/* 5. Opt-Out Instructions */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <List className="h-6 w-6 text-red-500" /> 5. Opt-Out Instructions
            </h2>
            <p className="text-gray-300 mb-3">
              You are in control of your data. You may opt out of receiving messages or data usage at any time by doing one of the following:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-1 mb-3">
              <li>Reply <b>STOP</b> to any SMS message you receive from us to unsubscribe immediately.</li>
              <li>Reply <b>HELP</b> to any SMS message for assistance with our messaging program.</li>
              <li>Contact us directly via phone or email.</li>
            </ul>
            <p className="text-gray-300">
              <b>Phone:</b> (951) 246-4337<br/>
              <b>Email:</b> office@gardnerplumbingco.com
            </p>
          </div>

          {/* 6. Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Clock className="h-6 w-6 text-red-500" /> 6. Data Retention
            </h2>
            <p className="text-gray-300">
              We retain your data only as long as needed for service, legal, and warranty purposes. Customer information is stored securely on encrypted servers and is only accessible to authorized personnel who need the information to perform their job functions.
            </p>
          </div>

          {/* 7. Information Sharing */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Users className="h-6 w-6 text-red-500" /> 7. Information Sharing
            </h2>
            <p className="text-gray-300 mb-3">
              We may share your information in limited circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>With service providers who assist us in delivering plumbing services (scheduling, payment processing).</li>
              <li>When required by law or to protect our legal rights.</li>
              <li>With your consent for specific purposes.</li>
            </ul>
            <p className="text-gray-300 mt-3 font-semibold">
              We do NOT sell, rent, or share your personal information with third parties for their marketing purposes.
            </p>
          </div>

          {/* 8. Changes */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Scale className="h-6 w-6 text-red-500" /> 8. Changes to This Policy
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
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
