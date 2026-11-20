import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "SEO Services | Fahimujjaman",
  description:
    "Keyword research, technical SEO, on-page SEO, off-page SEO, content writing and local SEO.",
};

const services = [
  { title: "Keyword Research", desc: "Find the keywords your customers actually search for." },
  { title: "Technical SEO", desc: "Fix crawling, indexing, speed and site structure issues." },
  { title: "On-page SEO", desc: "Optimize titles, content, headings and internal links on your pages." },
  { title: "Off-page SEO", desc: "Build your website's authority with quality off-page work." },
  { title: "Content Writing", desc: "SEO friendly content written to rank and convert." },
  { title: "Local SEO", desc: "Help your business show up in local searches and maps." },
];

export default function SeoServices() {
  return (
    <ServicePage
      label="SEO Services"
      heading="SEO that brings more traffic and more customers"
      intro="With more than 5 years of experience in SEO, including time at a UK based Google Ads company, I help websites rank higher on Google and get found by the right people."
      servicesTitle="My SEO services"
      services={services}
      ctaTitle="Want to rank higher on Google?"
    />
  );
}