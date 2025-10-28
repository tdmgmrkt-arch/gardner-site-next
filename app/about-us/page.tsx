
import { About } from "@/components/About";


export const metadata = {
  title: "About Us",
  description: "Learn more about Gardner Plumbing Co. – serving Riverside County with trusted plumbing services for over 30 years. Family-owned and operated.",
  alternates: {
    canonical: '/about-us'
  },
  openGraph: {
    title: "About Us | Gardner Plumbing Co.",
    description: "Learn more about Gardner Plumbing Co. – serving Riverside County with trusted plumbing services for over 30 years.",
    url: '/about-us',
    images: ['/gardner_logo.webp']
  }
};

export default function AboutUsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <About />
      </main>

    </div>
  );
}
