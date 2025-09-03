import { Blog } from "@/components/Blog";


export const metadata = {
  title: "Plumbing Inspections | Gardner Plumbing Co.",
  description: "Comprehensive plumbing inspections to detect issues early and ensure safety.",
};

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
        <Blog />
    </div>
  );
}

