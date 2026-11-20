import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "WordPress Development Services | Fahimujjaman",
  description:
    "Custom WordPress design and development, themes, plugins, WooCommerce, Elementor Pro and API integration.",
};

const services = [
  { title: "Custom Design Development", desc: "Unique website designs built from scratch to match your brand." },
  { title: "Local Service Business Websites", desc: "Websites for local service businesses, built to bring in calls and leads." },
  { title: "Custom Post Types", desc: "Custom post types and fields to manage your content your way." },
  { title: "Single Post and Page Templates", desc: "Custom templates for single posts and pages with full layout control." },
  { title: "WooCommerce and eCommerce", desc: "Online stores with product management, checkout and payments." },
  { title: "functions.php Customization", desc: "Custom functionality added cleanly through functions.php." },
  { title: "Plugin Development", desc: "Custom plugins built for your exact requirement." },
  { title: "API Integration", desc: "Connect your website with third party services and APIs." },
  { title: "Forms with Payment Gateway", desc: "Form integration with payment gateways to collect payments online." },
  { title: "Elementor and Elementor Pro", desc: "Professional Elementor and Elementor Pro development." },
  { title: "Theme Customization", desc: "Customize any existing theme to fit your design." },
  { title: "Custom Theme Development", desc: "Fully custom themes built from the ground up." },
  { title: "WordPress SEO and Local SEO", desc: "SEO and Local SEO set up properly inside your WordPress site." },
];

export default function WordPressDevelopment() {
  return (
    <ServicePage
      label="WordPress Development"
      heading="Custom WordPress websites built for your business"
      intro="I have more than 5 years of experience building WordPress websites, from local service business sites to full eCommerce stores, with custom design, custom functionality and SEO in mind."
      servicesTitle="What I build in WordPress"
      services={services}
      ctaTitle="Need a WordPress website?"
    />
  );
}