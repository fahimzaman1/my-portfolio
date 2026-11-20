import Link from "next/link";

const services = [
  {
    title: "WordPress Development",
    desc: "Custom themes, plugins, WooCommerce, Elementor Pro and API integrations.",
    href: "/wordpress-development",
  },
  {
    title: "Shopify Development",
    desc: "Custom design, custom Liquid sections, payment setup and Shopify SEO.",
    href: "/shopify-development",
  },
  {
    title: "SEO Services",
    desc: "Keyword research, technical, on-page, off-page and local SEO.",
    href: "/seo-services",
  },
];

const experience = [
  { role: "WordPress Developer", place: "Betopia", note: "2 years as a corporate professional" },
  { role: "SEO and WordPress Developer", place: "Roadsideadspro", note: "UK based Google Ads company" },
  { role: "Freelancer", place: "Independent", note: "SEO, WordPress and Shopify projects" },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="text-sm text-gray-500">5+ years of experience</p>
        <h1 className="mt-3 text-5xl font-bold max-w-3xl leading-tight">
          Hi, I am Fahimujjaman. SEO Expert, WordPress and Shopify Developer and Designer.
        </h1>
        <p className="mt-5 text-gray-600 max-w-2xl">
          I build fast, custom websites and rank them on Google, so your business
          gets more traffic and more customers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-full">
            Get in touch
          </Link>
          <a
            href="https://wa.me/8801613525595"
            className="border px-6 py-3 rounded-full"
          >
            WhatsApp me
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">What I do</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {experience.map((e) => (
              <div key={e.place} className="border rounded-2xl p-6">
                <p className="font-semibold">{e.role}</p>
                <p className="text-gray-900">{e.place}</p>
                <p className="mt-1 text-sm text-gray-600">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">Have a project in mind?</h2>
        <p className="mt-3 text-gray-300">Tell me about it and I will reply within 24 hours.</p>
        <Link href="/contact" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full">
          Contact me
        </Link>
      </section>
    </main>
  );
}