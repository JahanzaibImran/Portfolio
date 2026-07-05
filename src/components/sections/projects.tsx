"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects, projectCategories, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Products shipped to production"
          description="Premium case studies — problem, architecture, impact, and metrics."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                filter === cat.id
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "border border-white/10 text-muted hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="space-y-10">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: index * 0.05 }}
      className="group glass overflow-hidden rounded-2xl transition-all hover:shadow-2xl hover:shadow-accent/5"
    >
      <div className="grid lg:grid-cols-5">
        <div
          className={cn(
            "relative flex min-h-[240px] items-end p-8 lg:col-span-2",
            "bg-gradient-to-br",
            project.gradient
          )}
        >
          <div>
            <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {project.categoryLabel}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="space-y-4 p-6 sm:p-8 lg:col-span-3">
          {[
            { label: "Problem", text: project.problem },
            { label: "Solution", text: project.solution },
            { label: "Architecture", text: project.architecture },
          ].map((block) => (
            <div key={block.label}>
              <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted">
                {block.label}
              </h4>
              <p className="text-sm leading-relaxed text-muted">{block.text}</p>
            </div>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted">
                Challenges
              </h4>
              <ul className="space-y-1">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent">·</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-emerald-500/80">
                Impact & Metrics
              </h4>
              <p className="mb-2 text-sm text-foreground">{project.impact}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.metrics.map((m) => (
                  <span key={m} className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.stack.map((t) => (
              <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="flex gap-3 border-t border-white/[0.06] pt-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
                  <FolderGit2 size={15} /> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:underline">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
