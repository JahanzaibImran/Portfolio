"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { commandItems } from "@/data/portfolio";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  const groups = [...new Set(commandItems.map((i) => i.group))];

  return (
    <div className="fixed inset-0 z-[150] flex items-start justify-center pt-[20vh]">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <Command className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4">
          <Search size={16} className="text-muted" />
          <Command.Input
            placeholder="Search commands..."
            className="flex-1 bg-transparent py-4 text-sm text-foreground outline-none placeholder:text-muted"
          />
          <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-muted">ESC</kbd>
        </div>
        <Command.List className="max-h-72 overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted">No results.</Command.Empty>
          {groups.map((group) => (
            <Command.Group key={group} heading={group} className="px-2 py-1.5 text-xs text-muted">
              {commandItems
                .filter((i) => i.group === group)
                .map((item) => (
                  <Command.Item
                    key={item.label}
                    value={item.label}
                    onSelect={() => {
                      setOpen(false);
                      if (item.external) window.open(item.href, "_blank");
                      else if (item.href.startsWith("#")) document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = item.href;
                    }}
                    className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-foreground aria-selected:bg-accent/20 aria-selected:text-white"
                  >
                    {item.label}
                  </Command.Item>
                ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}
