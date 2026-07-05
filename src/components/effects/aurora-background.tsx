"use client";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] animate-float rounded-full bg-blue-600/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] animate-float-reverse rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(3,7,18,0.85))]" />
    </div>
  );
}
