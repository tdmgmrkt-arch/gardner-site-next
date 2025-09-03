
import { Contact } from "@/components/Contact";


export const metadata = {
  title: "Contact Us | Gardner Plumbing Co.",
  description: "Get in touch with Gardner Plumbing Co. for all your plumbing needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <Contact />
      </main>

    </div>
  );
}

