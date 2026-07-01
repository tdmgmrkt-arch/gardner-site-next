import { GarbageDisposal } from "@/components/GarbageDisposal";

export const metadata = {
  title: "Garbage Disposal Services",
  description: "Professional garbage disposal installation and repair services in Riverside County. Quick fixes and new installations.",
  alternates: {
    canonical: '/services/garbage-disposal-service'
  },
  openGraph: {
    title: "Garbage Disposal Services | Gardner Plumbing Co.",
    description: "Professional garbage disposal installation and repair services.",
    url: '/services/garbage-disposal-service',
    images: ['/gardner_logo.webp']
  }
};

export default function GarbageDisposalPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <GarbageDisposal />
      </main>
    </div>
  );
}

