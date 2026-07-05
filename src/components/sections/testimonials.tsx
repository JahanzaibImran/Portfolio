"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Trusted by teams"
          align="center"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 text-center sm:p-12"
            >
              <Quote size={28} className="mx-auto mb-6 text-accent/40" />
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full border border-white/10 p-2 text-muted hover:text-foreground"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="rounded-full border border-white/10 p-2 text-muted hover:text-foreground"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
