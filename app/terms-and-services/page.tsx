import { TermsServ } from "@/components/TermsServ";

export const metadata = {
  title: "Terms of Service",
  description: "Review the terms and conditions for using the services provided by Gardner Plumbing Co.",
  alternates: {
    canonical: '/terms-and-services'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsAndServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <TermsServ />
      </main>
    </div>
  );
}