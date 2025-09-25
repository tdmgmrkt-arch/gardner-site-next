import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { posts } from "@/data/blogPosts";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Phone,
  ArrowRight,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

// Props for Next.js dynamic routes
type BlogPostPageProps = {
  params: { slug: string };
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// ✅ Default export = page component
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </div>
    );
  }

  // Share links
  const baseUrl = "http://localhost:3000"; // TODO: replace with your real domain in production
  const shareUrl = `${baseUrl}/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);

  // Example recent posts (you could pull dynamically)
  const recentPosts = posts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, #1f2937 0%, #111827 50%, #000000 100%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Post Hero */}
        <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Posts</span>
            </a>
            <p className="text-base font-semibold text-red-400 uppercase tracking-wider mb-2">
              {post.category}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              {post.title}
            </h1>
            <div className="flex justify-center items-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 sm:-mb-24 z-10">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-gray-800/50"
          />
        </div>

        {/* Post Content Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
              {/* Main Content */}
              <main className="lg:col-span-8">
                <div
                  className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </main>

              {/* Sidebar */}
              <aside className="lg:col-span-4 mt-12 lg:mt-0">
                <div className="sticky top-24 space-y-8">
                  {/* Author Card */}
                  <Card className="bg-gray-800/30 border border-white/10 text-center shadow-lg">
                    <div className="p-6">
                      <Image
                        src="/gardner-logo-icon.png"
                        alt="Gardner Plumbing Co. Logo"
                        width={80}
                        height={80}
                        className="w-20 h-20 mx-auto rounded-full bg-gray-700 p-2 mb-4 border-2 border-red-500/50"
                      />
                      <h4 className="text-xl font-bold text-white mb-2">
                        About the Author
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        This article was written by the expert team at{" "}
                        <strong>Gardner Plumbing Co.</strong>, bringing over 30
                        years of experience to Riverside County.
                      </p>
                    </div>
                  </Card>

                  {/* Share Card */}
                  <Card className="bg-gray-800/30 border border-white/10 shadow-lg">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-4 text-center">
                        Share This Post
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            shareUrl
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="border-gray-600 hover:bg-red-500/20 hover:text-white rounded-full p-3 h-12 w-12"
                          >
                            <Facebook className="h-5 w-5" />
                          </Button>
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            shareUrl
                          )}&text=${shareTitle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="border-gray-600 hover:bg-red-500/20 hover:text-white rounded-full p-3 h-12 w-12"
                          >
                            <Twitter className="h-5 w-5" />
                          </Button>
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                            shareUrl
                          )}&title=${shareTitle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="border-gray-600 hover:bg-red-500/20 hover:text-white rounded-full p-3 h-12 w-12"
                          >
                            <Linkedin className="h-5 w-5" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>

                  {/* Recent Posts Card */}
                  <Card className="bg-gray-800/30 border border-white/10 shadow-lg">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-4">
                        Recent Posts
                      </h4>
                      <ul className="space-y-4">
                        {recentPosts.map((rp) => (
                          <li key={rp.slug}>
                            <a
                              href={`/blog/${rp.slug}`}
                              className="group block bg-black/20 p-4 rounded-lg hover:bg-red-500/10 transition-colors duration-300"
                            >
                              <p className="text-xs text-red-400 font-semibold mb-1">
                                {rp.category}
                              </p>
                              <p className="text-gray-200 group-hover:text-white font-semibold">
                                {rp.title}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative py-16 sm:py-20">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-900/50"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/30 rounded-3xl text-center shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Upgrade Your Plumbing?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                From Tuscany Hills to Historic Downtown, our team at Gardner
                Plumbing Co. helps homeowners make high-ROI upgrades that pay
                off in value and performance.
              </p>
              <a href="/contact-us">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg border border-red-400/20 group"
                >
                  <Phone className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Get a Free Estimate
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
