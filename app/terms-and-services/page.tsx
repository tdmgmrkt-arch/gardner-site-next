import { TermsServ } from "@/components/TermsServ";

export const metadata = {
  title: "Terms and Services | Gardner Plumbing Co.",
  description: "Review the terms and conditions for using the services provided by Gardner Plumbing Co.",
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