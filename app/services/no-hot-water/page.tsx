import { NoHotWater } from "@/components/NoHotWater";

export const metadata = {
  title: "No Hot Water Repair Service | Gardner Plumbing Co.",
  description: "Fast, same-day emergency service when you have no hot water. Our expert technicians diagnose and repair all brands of gas and electric water heaters.",
};

export default function NoHotWaterPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <NoHotWater />
      </main>
    </div>
  );
}