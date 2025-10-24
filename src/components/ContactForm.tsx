"use client";

import { useState } from "react";

const EMAIL = "ayobamio262@gmail.com"; 

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" }); // website = honeypot

  function update<K extends keyof typeof form>(key: K, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // honeypot trip: if filled, silently succeed
    if (form.website.trim()) {
      setStatus("sent");
      return;
    }
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Build a mailto: that opens the user's email client (no backend needed)
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    try {
      window.location.href = href;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      {/* Honeypot (hidden from users) */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        value={form.website}
        onChange={(e) => update("website", e.target.value)}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-zinc-400 mb-1">Name</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-zinc-100 outline-none focus:border-white/20"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-zinc-400 mb-1">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-zinc-100 outline-none focus:border-white/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm text-zinc-400 mb-1 block">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-zinc-100 outline-none focus:border-white/20 leading-relaxed"
          placeholder="How can I help?"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-yellow-500 px-4 py-2 font-medium text-black hover:bg-yellow-400 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Email"}
        </button>

        <button
          type="button"
          onClick={copyEmail}
          className="rounded-xl border border-white/20 px-4 py-2 hover:border-white/40"
          title="Copy my email address"
        >
          Copy Email
        </button>

        <span
          className={
            status === "error"
              ? "text-sm text-red-400"
              : status === "sent"
              ? "text-sm text-green-400"
              : "text-sm text-zinc-500"
          }
          role="status"
        >
          {status === "sent" && "Ready! Your mail app should open, or email copied."}
          {status === "error" && "Something went wrong. Try again."}
        </span>
      </div>

      {/* direct email line under the form */}
      <p className="mt-4 text-zinc-400 leading-relaxed">
        Prefer to email directly?{" "}
        <a href={`mailto:${EMAIL}`} className="text-yellow-400 underline underline-offset-4">
          {EMAIL}
        </a>
      </p>
    </form>
  );
}
