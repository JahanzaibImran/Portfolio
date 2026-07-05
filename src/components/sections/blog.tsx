"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Writing"
          title="Technical insights"
          description="Deep dives on AI, cloud, architecture, and scaling production systems."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group glass rounded-2xl p-6 transition-all hover:border-accent/20"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-cyan">
                  {post.tag}
                </span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent-cyan transition-colors">
                {post.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-muted">
                Coming soon <ArrowUpRight size={12} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
