"use client";

import { motion } from "framer-motion";
import { workExperience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function WorkExperience() {
  return (
    <section id="experience" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Ownership at every stage"
          description="Leadership, architecture decisions, and products that reached production."
        />

        <div className="relative space-y-0">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-purple/50 to-transparent md:left-1/2" />

          {workExperience.map((job, i) => (
            <motion.div
              key={job.company + job.duration}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col pb-12 md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden w-1/2 md:block" />
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass rounded-2xl p-6 transition-all hover:border-accent/20">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-accent-cyan">
                        {job.duration}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">{job.role}</h3>
                      <p className="text-sm text-muted">{job.company}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-medium text-foreground/80">{job.impact}</p>

                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-muted">
                        <span className="text-accent">→</span> {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.technologies.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
