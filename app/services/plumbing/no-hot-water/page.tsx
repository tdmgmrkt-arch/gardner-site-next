import { NoHotWater } from "@/components/NoHotWater";

export const metadata = {
  title: "No Hot Water Repair Service",
  description: "Fast, same-day emergency service when you have no hot water in Riverside County. Our expert technicians diagnose and repair all brands of gas and electric water heaters.",
  alternates: {
    canonical: '/services/no-hot-water'
  },
  openGraph: {
    title: "No Hot Water Repair Service | Gardner Plumbing Co.",
    description: "Fast, same-day emergency service when you have no hot water. All brands serviced.",
    url: '/services/no-hot-water',
    images: ['/gardner_logo.webp']
  }
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