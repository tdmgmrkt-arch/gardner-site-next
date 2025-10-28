import { Emergency } from "@/components/Emergency";


export const metadata = {
  title: "24/7 Emergency Plumbing Services",
  description: "Round-the-clock emergency plumbing services from Gardner Plumbing Co. Available 24/7 for urgent plumbing repairs in Riverside County.",
  alternates: {
    canonical: '/services/emergency-service'
  },
  openGraph: {
    title: "24/7 Emergency Plumbing Services | Gardner Plumbing Co.",
    description: "Round-the-clock emergency plumbing services available 24/7 in Riverside County.",
    url: '/services/emergency-service',
    images: ['/gardner_logo.webp']
  }
};

export default function EmergencyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
    
      <main>
        <Emergency />
      </main>
      
    </div>
  );
}
