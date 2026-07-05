import type { Metadata } from "next";
import {
  siteConfig,
  workExperience,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { ResumeActions } from "@/components/resume/resume-actions";
import "./resume.css";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description: `Resume of ${siteConfig.name} — Senior Full Stack & AI Engineer`,
};

type PageProps = {
  searchParams: Promise<{ print?: string }>;
};

export default async function ResumePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const autoPrint = params.print === "1";

  const topSkills = skillGroups
    .slice(0, 4)
    .map((g) => `${g.title}: ${g.skills.slice(0, 8).join(", ")}`);

  return (
    <div className="resume-page min-h-screen bg-slate-100 py-10 print:bg-white print:py-0">
      <div className="resume-sheet mx-auto max-w-[820px] bg-white px-10 py-12 shadow-lg print:max-w-none print:shadow-none print:px-8 print:py-8">
        <ResumeActions autoPrint={autoPrint} />

        <header className="resume-header border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {siteConfig.name}
          </h1>
          <p className="mt-1 text-lg font-medium text-indigo-700">
            Senior Full Stack · AI · Cloud Engineer
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            {siteConfig.subheading}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
            <span>{siteConfig.email}</span>
            <span>{siteConfig.location}</span>
            <a href={siteConfig.linkedin} className="text-indigo-600 print:no-underline">
              LinkedIn
            </a>
            <a href={siteConfig.github} className="text-indigo-600 print:no-underline">
              GitHub
            </a>
          </div>
        </header>

        <section className="resume-section mt-6">
          <h2 className="resume-heading">Summary</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Full Stack Engineer with 4+ years building scalable SaaS platforms, AI-powered
            applications, Web3 products, and enterprise backends. Specializes in React/Next.js,
            NestJS, AWS, and production LLM systems including RAG, AI agents, and workflow
            automation. Proven track record shipping products used by thousands of users worldwide.
          </p>
        </section>

        <section className="resume-section mt-6">
          <h2 className="resume-heading">Experience</h2>
          <div className="space-y-5">
            {workExperience.map((job) => (
              <article key={job.company + job.duration}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{job.role}</h3>
                  <span className="text-sm text-slate-500">{job.duration}</span>
                </div>
                <p className="text-sm font-medium text-indigo-700">{job.company}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {job.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  {job.technologies.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section mt-6">
          <h2 className="resume-heading">Selected Projects</h2>
          <div className="space-y-4">
            {projects.slice(0, 4).map((p) => (
              <article key={p.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <span className="text-xs text-slate-500">{p.categoryLabel}</span>
                </div>
                <p className="mt-1 text-sm text-slate-700">{p.solution}</p>
                <p className="mt-1 text-xs text-slate-500">{p.stack.join(" · ")}</p>
                {p.demo && (
                  <p className="mt-1 text-xs text-indigo-600">{p.demo}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section mt-6">
          <h2 className="resume-heading">Technical Skills</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            {topSkills.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section mt-6">
          <h2 className="resume-heading">Education & Availability</h2>
          <p className="text-sm text-slate-700">
            Available for senior engineering roles, contract work, and remote opportunities
            worldwide. Open to AI, SaaS, cloud, and Web3 product builds.
          </p>
        </section>
      </div>
    </div>
  );
}
