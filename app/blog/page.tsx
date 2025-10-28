import { Blog } from "@/components/Blog";

export const metadata = {
  title: "Plumbing Blog & Tips",
  description: "Plumbing tips, insights, and updates from Gardner Plumbing Co. Expert advice for Riverside County homeowners.",
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: "Plumbing Blog & Tips | Gardner Plumbing Co.",
    description: "Plumbing tips, insights, and updates from Gardner Plumbing Co.",
    url: '/blog',
    images: ['/gardner_logo.webp']
  }
};

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Blog />
    </div>
  );
}

