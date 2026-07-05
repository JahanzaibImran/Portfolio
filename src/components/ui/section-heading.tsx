"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({ label, title, description, className, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-14 max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </motion.div>
  );
}
