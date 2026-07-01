import { WaterDamage } from "@/components/WaterDamage";

export const metadata = {
  title: "Water Damage Restoration",
  description: "IICRC certified water damage restoration services. We provide 24/7 emergency water extraction, structural drying, and mold prevention to restore your property in Riverside County.",
  alternates: {
    canonical: '/services/water-damage'
  },
  openGraph: {
    title: "Water Damage Restoration | Gardner Plumbing Co.",
    description: "IICRC certified water damage restoration services. 24/7 emergency water extraction and restoration.",
    url: '/services/water-damage',
    images: ['/gardner_logo.webp']
  }
};

export default function WaterDamagePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <WaterDamage />
      </main>
    </div>
  );
}