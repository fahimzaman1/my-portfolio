import Link from "next/link";

const timeline = [
  {
    place: "Betopia",
    role: "WordPress Developer",
    note: "2 years working as a corporate professional.",
  },
  {
    place: "Roadsideadspro",
    role: "SEO and WordPress Developer",
    note: "A UK based Google Ads company.",
  },
  {
    place: "Freelance",
    role: "SEO, WordPress and Shopify",
    note: "Many projects delivered for clients as an independent freelancer.",
  },
];

const skills = [
  {
    title: "SEO",
    items: [
      "Keyword Research",
      "Technical SEO",
      "On-page SEO",
      "Off-page SEO",
      "Content Writing",
      "Local SEO",
    ],
  },
  {
    title: "WordPress",
    items: [
      "Custom Design Development",
      "Custom Theme and Plugin Development",
      "WooCommerce / eCommerce",
      "Elementor and Elementor Pro",
      "API Integration",
      "WordPress and Local SEO",
    ],
  },
  {
    title: "Shopify",
    items: [
      "Custom Design and Functionality",
      "Custom Liquid Sections",
      "Payment Setup",
      "Product Listing",
      "Shopify SEO",
      "Technical SEO",
    ],
  },
];

export default function About() {
  return (
    <main className="bg-white text-gray-900">
      {/* Intro */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <p className="text-sm text-gray-500">About me</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Hi, I am Fahimujjaman. A professional SEO Expert, WordPress and
          Shopify Developer and Designer.
        </h1>
        <p className="mt-5 text-gray-600">
          I have more than 5 years of experience building custom websites and
          helping them rank on Google. I started in a corporate environment,
          then worked with a UK based Google Ads company, and today I work with
          clients as a freelancer on SEO, WordPress and Shopify projects.
        </p>
      </section>

      {/* Experience */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">My journey</h2>
          <div className="mt-8 space-y-4">
            {timeline.map((t) => (
              <div key={t.place} className="bg-white border rounded-2xl p-6">
                <p className="text-lg font-semibold">{t.place}</p>
                <p className="text-gray-900">{t.role}</p>
                <p className="mt-1 text-sm text-gray-600">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">What I do</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className="border rounded-2xl p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {s.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">Let's work together</h2>
        <p className="mt-3 text-gray-300">
          Tell me about your project and I will reply within 24 hours.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full"
        >
          Contact me
        </Link>
      </section>
    </main>
  );
}