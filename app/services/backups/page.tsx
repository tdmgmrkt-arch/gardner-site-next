import { Backups } from "@/components/Backups";

export const metadata = {
  title: "Sewer & Drain Backup Cleanup | Gardner Plumbing Co.",
  description: "Emergency service for hazardous sewer and drain backups. We clear the clog, clean the spill, and sanitize your home to ensure it's safe.",
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