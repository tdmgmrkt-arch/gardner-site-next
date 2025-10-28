
import { Contact } from "@/components/Contact";


export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Gardner Plumbing Co. for all your plumbing needs in Riverside County. 24/7 emergency service available.",
  alternates: {
    canonical: '/contact-us'
  },
  openGraph: {
    title: "Contact Us | Gardner Plumbing Co.",
    description: "Get in touch with Gardner Plumbing Co. for all your plumbing needs. 24/7 service available.",
    url: '/contact-us',
    images: ['/gardner_logo.webp']
  }
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

