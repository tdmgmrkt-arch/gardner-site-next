import { MoenFlo } from "@/components/MoenFlo";

export const metadata = {
  title: "Moen Flo Installation",
  description: "Professional Moen Flo smart water monitoring system installation and setup to protect your home from leaks in Riverside County.",
  alternates: {
    canonical: '/services/moen-flo-installation'
  },
  openGraph: {
    title: "Moen Flo Installation | Gardner Plumbing Co.",
    description: "Professional Moen Flo installation and setup to protect your home from leaks.",
    url: '/services/moen-flo-installation',
    images: ['/gardner_logo.webp']
  }
};

export default function MoenFloInstallationPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <MoenFlo />
      </main>
    </div>
  );
}
