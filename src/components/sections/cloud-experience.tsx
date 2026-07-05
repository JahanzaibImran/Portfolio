"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cloudExperience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function CloudExperience() {
  return (
    <section id="cloud" className="section-padding">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Cloud & DevOps"
          title={cloudExperience.title}
          description={cloudExperience.description}
        />

        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cloudExperience.services.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-4 transition-shadow hover:shadow-lg hover:shadow-accent-blue/5"
            >
              <p className="font-semibold text-foreground">{svc.name}</p>
              <p className="mt-1 text-xs text-muted">{svc.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Deployment Pipeline
          </h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {["Code", "Build", "Test", "Deploy", "Monitor"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-center">
                  <p className="text-sm font-semibold text-foreground">{step}</p>
                </div>
                {i < arr.length - 1 && <ArrowRight size={16} className="hidden text-muted sm:block" />}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cloudExperience.principles.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
