import { siteConfig, navLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-muted">
            Senior Full Stack · AI · Cloud Engineer © {year}
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-muted hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4 text-xs text-muted">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={siteConfig.resumePdfPath} download={siteConfig.resumeDownloadName} className="hover:text-foreground">Resume</a>
        </div>
      </div>
    </footer>
  );
}
