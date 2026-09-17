"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { profile } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Magnetic from "@/components/ui/Magnetic";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setErrorMsg("Please give permission to be contacted.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between"
        >
          <div>
            <Eyebrow>Live Dispatch Node</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s Build Something <span className="text-gradient">Exceptional.</span>
            </h2>
            <p className="text-muted max-w-md">
              Fill out the transmission form or preview the live payload stream directly below.
            </p>
            <div className="mt-6 flex flex-col gap-1 font-mono-tag text-xs text-muted">
              <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors w-fit">
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="hover:text-accent transition-colors w-fit"
              >
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border glass p-5 font-mono-tag text-xs leading-relaxed text-muted relative overflow-hidden">
            <div className="absolute inset-0 bg-scanline opacity-20 pointer-events-none" />
            <p className="text-accent mb-2 relative">{"// payload_preview.json"}</p>
            <p className="relative">
              sender: &quot;
              {form.firstName || form.lastName
                ? `${form.firstName} ${form.lastName}`.trim()
                : "Awaiting Name"}
              &quot;
            </p>
            <p className="relative">email: &quot;{form.email || "Awaiting Email"}&quot;</p>
            <p className="relative">
              message: &quot;{form.message || "Awaiting Message"}&quot;
              <span className="animate-blink text-accent">▍</span>
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-border glass p-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              value={form.firstName}
              onChange={update("firstName")}
              placeholder="First Name"
              className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] transition-all"
            />
            <input
              required
              value={form.lastName}
              onChange={update("lastName")}
              placeholder="Last Name"
              className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] transition-all"
            />
          </div>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="Email Address"
            className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] transition-all"
          />
          <textarea
            required
            value={form.message}
            onChange={update("message")}
            placeholder="Type your message here..."
            rows={5}
            className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] transition-all resize-none"
          />

          <label className="flex items-start gap-2 text-xs text-muted">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 accent-[var(--accent)]"
            />
            I give permission to contact me at this email address.
          </label>

          {status === "error" && <p className="text-xs text-red-400">{errorMsg}</p>}
          {status === "success" && (
            <p className="text-xs text-accent">Message sent. Thanks for reaching out!</p>
          )}

          <Magnetic className="w-full" strength={0.15}>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-shadow disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"} <Send size={14} />
            </button>
          </Magnetic>
        </motion.form>
      </div>
    </section>
  );
}
