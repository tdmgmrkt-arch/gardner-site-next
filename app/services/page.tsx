import { ServicesFull } from "@/components/ServicesFull";

export const metadata = {
  title: "Complete Plumbing Services | Gardner Plumbing Co.",
  description: "Full-service plumbing solutions tailored to your needs.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <ServicesFull />
      </main>
    </div>
  );
}
