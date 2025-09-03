import { SewerSeptic } from "@/components/SewerSeptic";

export const metadata = {
  title: "Sewer & Septic Services | Gardner Plumbing Co.",
  description: "Comprehensive sewer line and septic system services for your home or business.",
};

export default function SewerAndSepticPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <SewerSeptic />
      </main>
    </div>
  );
}
