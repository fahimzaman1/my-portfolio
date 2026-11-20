import Link from "next/link";

type Service = { title: string; desc: string };

type Props = {
  label: string;
  heading: string;
  intro: string;
  servicesTitle: string;
  services: Service[];
  ctaTitle: string;
};

export default function ServicePage({
  label,
  heading,
  intro,
  servicesTitle,
  services,
  ctaTitle,
}: Props) {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <p className="text-sm text-gray-500">{label}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
          {heading}
        </h1>
        <p className="mt-5 text-gray-600 max-w-2xl">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-full"
          >
            Get a quote
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
          <h2 className="text-3xl font-bold">{servicesTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-white border rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">{ctaTitle}</h2>
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