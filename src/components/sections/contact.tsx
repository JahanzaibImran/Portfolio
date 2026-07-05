"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Link2, ExternalLink, Send, Loader2, CheckCircle2, Download, Calendar } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

const links = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "LinkedIn", value: "Connect", href: siteConfig.linkedin, icon: Link2 },
  { label: "GitHub", value: `@${siteConfig.githubUsername}`, href: siteConfig.github, icon: ExternalLink },
  { label: "X (Twitter)", value: "@jahanzaibimran", href: siteConfig.twitter, icon: ExternalLink },
  { label: "Calendly", value: "Book a call", href: siteConfig.calendly, icon: Calendar },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <section id="contact" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's build something extraordinary"
          description="Senior roles, contract work, and high-impact product builds."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            {links.map((l, i) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.label === "Email" ? undefined : "_blank"}
                  rel={l.label === "Email" ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass flex items-center gap-4 rounded-xl p-4 transition-all hover:border-accent/20"
                >
                  <div className="rounded-lg bg-accent/10 p-2.5 text-accent-cyan">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">{l.label}</p>
                    <p className="text-sm font-medium text-foreground">{l.value}</p>
                  </div>
                </motion.a>
              );
            })}
            <a
              href={siteConfig.resumePdfPath}
              download={siteConfig.resumeDownloadName}
              className="glass flex items-center justify-center gap-2 rounded-xl border-dashed p-4 text-sm text-muted hover:text-foreground"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href={siteConfig.resumePath}
              className="glass flex items-center justify-center gap-2 rounded-xl p-4 text-sm text-muted hover:text-foreground"
            >
              View Resume Online
            </a>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            {status === "success" ? (
              <div className="py-8 text-center">
                <CheckCircle2 size={40} className="mx-auto mb-4 text-emerald-400" />
                <p className="font-semibold text-foreground">Message sent!</p>
                <p className="mt-2 text-sm text-muted">I&apos;ll respond within 24 hours.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm text-accent-cyan hover:underline">
                  Send another
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {["name", "email", "message"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="mb-1.5 block text-xs text-muted capitalize">
                      {field}
                    </label>
                    {field === "message" ? (
                      <textarea
                        id={field}
                        name={field}
                        rows={4}
                        required
                        disabled={status === "loading"}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/40 disabled:opacity-60"
                        placeholder="Tell me about the opportunity..."
                      />
                    ) : (
                      <input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        required
                        disabled={status === "loading"}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/40 disabled:opacity-60"
                      />
                    )}
                  </div>
                ))}
                {status === "error" && <p className="text-sm text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 disabled:opacity-70"
                >
                  {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
