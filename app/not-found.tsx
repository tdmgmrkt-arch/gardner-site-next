import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata = {
  title: "Page Not Found | Gardner Plumbing Co.",
  description: "The page you're looking for doesn't exist. Return to our homepage or contact us for assistance.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}
