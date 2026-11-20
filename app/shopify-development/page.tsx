import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Shopify Development Services | Fahimujjaman",
  description:
    "Custom Shopify design, custom Liquid sections, payment setup, product listing and Shopify SEO.",
};

const services = [
  { title: "Custom Design and Functionality", desc: "Shopify stores designed and built around your brand." },
  { title: "Custom Liquid Sections", desc: "Custom Liquid code for unique sections and store functionality." },
  { title: "Payment Setup", desc: "Set up payment methods so customers can check out smoothly." },
  { title: "Product Listing", desc: "Add and organize your products properly in your store." },
  { title: "Shopify SEO", desc: "Optimize your store pages and products to rank on Google." },
  { title: "Technical SEO", desc: "Technical fixes to improve your store's search performance." },
];

export default function ShopifyDevelopment() {
  return (
    <ServicePage
      label="Shopify Development"
      heading="Custom Shopify stores that look great and sell"
      intro="I design and develop Shopify stores with custom design, custom Liquid functionality and SEO built in, so your store is ready to sell and ready to rank."
      servicesTitle="What I do in Shopify"
      services={services}
      ctaTitle="Ready to launch your Shopify store?"
    />
  );
}