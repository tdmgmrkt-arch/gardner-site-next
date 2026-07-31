export const metadata = {
  title: "Book Online",
  description:
    "Schedule your plumbing service with Gardner Plumbing Co. online. Pick a convenient time — serving Riverside County 24/7.",
  alternates: {
    canonical: "/book-online",
  },
  openGraph: {
    title: "Book Online | Gardner Plumbing Co.",
    description:
      "Schedule your plumbing service online with Gardner Plumbing Co. Serving Riverside County 24/7.",
    url: "/book-online",
    images: ["/gardner_logo.webp"],
  },
};

export default function BookOnlinePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-gray-900 text-white py-10 sm:py-14 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Book Online</h1>
        <p className="text-gray-300 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
          Pick a convenient time that works best for you. Same-day and next-day
          appointments are often available across Riverside County.
        </p>
        <p className="text-gray-400 text-sm mt-3">
          Need service right now? Call{" "}
          <a
            href="tel:+19512464337"
            className="text-blue-400 font-semibold hover:underline"
          >
            (951) 246-4337
          </a>{" "}
          for 24/7 emergency dispatch.
        </p>
      </section>

      <section className="w-full">
        <iframe
          title="Gardner Plumbing Co. — Online Scheduler"
          src="https://scheduler.servicetitan.com/book/eyJicmFuZElkIjoiYnJhbmRfdnV4OWZuNTR1b2Z2cjF6a2RremZyOWh0Iiwic2NoZWR1bGVySWQiOiJzY2hlZF9zcTh5ZHpxczY0ODh0eTRid2s1ZzFhaHgifQ%3D%3D"
          className="w-full h-[900px] sm:h-[850px] border-0 block"
        />
      </section>
    </div>
  );
}
