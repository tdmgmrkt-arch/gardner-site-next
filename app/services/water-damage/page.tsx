import { WaterDamage } from "@/components/WaterDamage";

export const metadata = {
  title: "Water Damage Restoration | Gardner Plumbing Co.",
  description: "IICRC certified water damage restoration services. We provide 24/7 emergency water extraction, structural drying, and mold prevention to restore your property.",
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