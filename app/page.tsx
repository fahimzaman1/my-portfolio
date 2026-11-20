import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-8 py-5 border-b">
        <span className="font-bold text-xl">Fahim Zaman</span>
        <nav className="flex gap-6 text-sm">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          Web Developer & SEO Specialist
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          I build fast websites and grow them with SEO and ads.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-full"
        >
          Hire Me
        </Link>
      </section>

      <section id="services" className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["SEO", "WordPress & Shopify", "Google & Meta Ads"].map((s) => (
            <div key={s} className="border rounded-xl p-6 font-medium">
              {s}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}