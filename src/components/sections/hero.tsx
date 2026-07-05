"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { siteConfig, heroStats, floatingTech } from "@/data/portfolio";

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = siteConfig.headline[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % siteConfig.headline.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Floating tech icons */}
      {floatingTech.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -12, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          className="pointer-events-none absolute hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted backdrop-blur-sm lg:block"
          style={{
            left: `${10 + (i % 4) * 22}%`,
            top: `${20 + Math.floor(i / 4) * 35}%`,
          }}
        >
          {tech}
        </motion.span>
      ))}

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {siteConfig.available && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available for senior roles & contract work
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-sm text-muted"
          >
            {siteConfig.name} · {siteConfig.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building{" "}
            <span className="gradient-text block min-h-[1.2em] font-mono text-3xl sm:text-4xl lg:text-5xl">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-accent/25 transition-all hover:shadow-accent/40"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={siteConfig.resumePdfPath}
              download={siteConfig.resumeDownloadName}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-muted hover:text-foreground"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile / code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="glass gradient-border relative overflow-hidden rounded-2xl p-1">
            <div className="rounded-xl bg-surface p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent via-accent-purple to-accent-cyan text-2xl font-bold text-white">
                  {siteConfig.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{siteConfig.name}</p>
                  <p className="text-sm text-muted">Staff-level product engineer</p>
                </div>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 font-mono text-xs leading-relaxed text-emerald-400/90">
{`const engineer = {
  stack: ["Next.js", "OpenAI", "AWS"],
  focus: ["AI Agents", "Cloud", "SaaS"],
  shipping: true,
  available: ${siteConfig.available}
};`}
              </pre>
              <div className="mt-4 flex flex-wrap gap-2">
                {siteConfig.roles.slice(0, 3).map((r) => (
                  <span key={r} className="flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent-cyan">
                    <Sparkles size={10} />
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
