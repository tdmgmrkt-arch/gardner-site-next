// PHASE 1 STUB — replaced in Phase 2 by seo-writer page build

import Link from "next/link";

interface StubPageProps {
  title: string;
}

export function StubPage({ title }: StubPageProps) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main>
        <section className="py-24 px-5">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-muted-foreground mb-10">
              Coming soon — call{" "}
              <a
                href="tel:9512464337"
                className="text-red-600 hover:text-red-700 font-semibold transition-colors"
              >
                (951) 246-4337
              </a>{" "}
              to schedule service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9512464337"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-colors min-h-[44px]"
              >
                Call (951) 246-4337
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors min-h-[44px]"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
