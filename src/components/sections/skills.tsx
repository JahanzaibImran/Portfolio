"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Layout, Server, Database, Cloud, Wallet } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const icons = { brain: Brain, layout: Layout, server: Server, database: Database, cloud: Cloud, wallet: Wallet };

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];
  const Icon = icons[group.icon as keyof typeof icons];

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="Technical depth across the stack"
          description="From LLM orchestration to cloud infrastructure — production-grade, not tutorial-level."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const GIcon = icons[g.icon as keyof typeof icons];
            return (
              <motion.button
                key={g.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActive(g.id)}
                className={cn(
                  "glass rounded-2xl p-5 text-left transition-all",
                  active === g.id && "border-accent/40 ring-1 ring-accent/20"
                )}
              >
                <GIcon size={22} className="mb-3 text-accent-cyan" />
                <p className="font-semibold text-foreground">{g.title}</p>
                <p className="mt-1 text-xs text-muted">{g.skills.length} technologies</p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className={cn("mt-8 rounded-2xl bg-gradient-to-br p-8", group.color)}
          >
            <div className="mb-6 flex items-center gap-3">
              <Icon size={24} className="text-foreground" />
              <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-foreground backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
