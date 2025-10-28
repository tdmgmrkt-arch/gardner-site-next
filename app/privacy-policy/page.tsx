import { PrivPol } from "@/components/PrivPol";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn about the privacy practices and data usage of Gardner Plumbing Co. Your privacy and data security are important to us.",
  alternates: {
    canonical: '/privacy-policy'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <PrivPol />
      </main>
    </div>
  );
}