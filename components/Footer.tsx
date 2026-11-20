import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-8 py-10 grid gap-6 md:grid-cols-3 text-sm text-gray-600">
        <div>
          <p className="text-lg font-bold text-gray-900">Fahimujjaman</p>
          <p className="mt-2">SEO Expert, WordPress and Shopify Developer.</p>
        </div>
        <div className="space-y-2">
          <Link href="/wordpress-development" className="block hover:text-black">WordPress Development</Link>
          <Link href="/shopify-development" className="block hover:text-black">Shopify Development</Link>
          <Link href="/seo-services" className="block hover:text-black">SEO Services</Link>
        </div>
        <div className="space-y-2">
          <a href="mailto:mdfahimujjaman1@gmail.com" className="block hover:text-black">
            mdfahimujjaman1@gmail.com
          </a>
          <a href="https://wa.me/8801613525595" className="block hover:text-black">
            WhatsApp: +880 1613-525595
          </a>
        </div>
      </div>
    </footer>
  );
}