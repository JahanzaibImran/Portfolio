"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { pinnedRepos, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

type GitHubUser = { public_repos: number; followers: number; following: number };

export function OpenSource() {
  const [stats, setStats] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${siteConfig.githubUsername}`)
      .then((r) => r.json())
      .then(setStats)
      .catch(() => null);
  }, []);

  return (
    <section id="opensource" className="section-padding">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Open Source"
          title="Building in public"
          description="Contributions, repositories, and continuous learning on GitHub."
        />

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Repositories", value: stats?.public_repos ?? "17+" },
            { label: "Followers", value: stats?.followers ?? "—" },
            { label: "Following", value: stats?.following ?? "—" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-5 text-center"
            >
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`${siteConfig.github}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group rounded-xl p-5 transition-all hover:border-accent/20"
            >
              <div className="mb-2 flex items-center gap-2">
                <GitBranch size={14} className="text-muted" />
                <span className="font-semibold text-foreground group-hover:text-accent-cyan">
                  {repo.name}
                </span>
              </div>
              <p className="text-sm text-muted">{repo.description}</p>
              <span className="mt-3 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent-cyan">
                {repo.language}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="glass overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
            <p className="text-sm text-muted">Contribution graph</p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent-cyan hover:underline"
            >
              View profile <ExternalLink size={14} />
            </a>
          </div>
          <div className="p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/${siteConfig.githubUsername}`}
              alt="GitHub contributions"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
