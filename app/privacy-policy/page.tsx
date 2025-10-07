import { Header } from "@/components/Header";
import { PrivPol } from "@/components/PrivPol";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Gardner Plumbing Co.",
  description: "Learn about the privacy practices and data usage of Gardner Plumbing Co.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <PrivPol />
      </main>
      <Footer />
    </div>
  );
}