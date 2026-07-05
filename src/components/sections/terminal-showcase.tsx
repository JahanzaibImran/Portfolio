"use client";

import { motion } from "framer-motion";
import { terminalLines } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function TerminalShowcase() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading label="Terminal" title="How I work" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted">~/portfolio</span>
          </div>
          <div className="space-y-1 p-6 font-mono text-sm">
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={line.type === "command" ? "text-accent-cyan" : "text-muted"}
              >
                {line.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
