"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-8 py-24 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-3 text-gray-600">
          Tell me about your project and I will reply within 24 hours.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="w-full border rounded-lg px-4 py-3"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message"
            className="w-full border rounded-lg px-4 py-3"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-black text-white px-6 py-3 rounded-full disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-600">Message sent. Thank you!</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
      </section>
    </main>
  );
}