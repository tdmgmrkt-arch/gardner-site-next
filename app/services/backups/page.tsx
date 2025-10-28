import { Backups } from "@/components/Backups";

export const metadata = {
  title: "Sewer & Drain Backup Services",
  description: "Emergency service for hazardous sewer and drain backups in Riverside County. We clear the clog, clean the spill, and sanitize your home to ensure it's safe.",
  alternates: {
    canonical: '/services/backups'
  },
  openGraph: {
    title: "Sewer & Drain Backup Services | Gardner Plumbing Co.",
    description: "Emergency service for hazardous sewer and drain backups. Professional cleanup and sanitization.",
    url: '/services/backups',
    images: ['/gardner_logo.webp']
  }
};

export default function BackupsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <Backups />
      </main>
    </div>
  );
}