"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import { aiExperience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function AIExperience() {
  return (
    <section id="ai" className="section-padding relative overflow-hidden bg-surface/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="AI Engineering"
          title={aiExperience.title}
          description={aiExperience.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-accent-purple" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">Current Expertise</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {aiExperience.current.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground transition-colors hover:border-accent-purple/30 hover:bg-accent-purple/10"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl border border-accent-purple/20 p-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <Rocket size={16} className="text-accent-cyan" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">Future Focus</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {aiExperience.future.map((item) => (
              <span
                key={item}
                className="rounded-full bg-gradient-to-r from-accent/20 to-accent-purple/20 px-4 py-2 text-sm font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
