"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="From code to products that scale"
          description="Engineering with ownership — architecture, delivery, and outcomes."
        />

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 transition-all hover:border-accent/20"
            >
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {aboutContent.narrative.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-base leading-relaxed text-muted"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Career Evolution
            </h3>
            <div className="space-y-6">
              {aboutContent.growth.map((g, i) => (
                <motion.div
                  key={g.era}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass flex gap-4 rounded-xl p-5"
                >
                  <span className="font-mono text-sm font-bold text-accent">{g.era}</span>
                  <div>
                    <p className="font-semibold text-foreground">{g.role}</p>
                    <p className="text-sm text-muted">{g.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
