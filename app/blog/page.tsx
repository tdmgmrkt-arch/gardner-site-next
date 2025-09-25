import { Blog } from "@/components/Blog";

export const metadata = {
  title: "Gardner Plumbing Blog",
  description: "Plumbing tips, insights, and updates from Gardner Plumbing Co.",
};

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Blog />
    </div>
  );
}

