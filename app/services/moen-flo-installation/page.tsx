import { MoenFlo } from "@/components/MoenFlo";

export const metadata = {
  title: "Moen Flo Installation | Gardner Plumbing Co.",
  description: "Professional Moen Flo installation and setup to protect your home from leaks.",
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
