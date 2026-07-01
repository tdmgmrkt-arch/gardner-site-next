
import { WaterHeaterPage } from "@/components/WaterHeaterPage"; // 👈 match filename exactly

export const metadata = {
  title: "Water Heater Services",
  description: "Reliable water heater repair, replacement, and maintenance services in Riverside County. Tankless and traditional water heaters.",
  alternates: {
    canonical: '/services/water-heater-service'
  },
  openGraph: {
    title: "Water Heater Services | Gardner Plumbing Co.",
    description: "Reliable water heater repair, replacement, and maintenance services.",
    url: '/services/water-heater-service',
    images: ['/gardner_logo.webp']
  }
};

export default function WHServicePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <main>
        <WaterHeaterPage /> {/* 👈 match the component export name */}
      </main>

    </div>
  );
}
