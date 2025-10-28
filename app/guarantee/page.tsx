import { OurGuarantee } from "@/components/OurGuarantee";

export const metadata = {
  title: "Our Service Guarantee",
  description:
    "At Gardner Plumbing Co., we stand behind our work. Our guarantee ensures quality craftsmanship, reliable service, and customer satisfaction on every plumbing job in Riverside County.",
  alternates: {
    canonical: '/guarantee'
  },
  openGraph: {
    title: "Our Service Guarantee | Gardner Plumbing Co.",
    description: "We stand behind our work with quality craftsmanship and reliable service guarantees.",
    url: '/guarantee',
    images: ['/gardner_logo.webp']
  }
};

export default function GuaranteePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <OurGuarantee />
      </main>
    </div>
  );
}
