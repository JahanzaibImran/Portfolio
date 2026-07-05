"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Download, Printer, ArrowLeft } from "lucide-react";

export function ResumeActions({ autoPrint = false }: { autoPrint?: boolean }) {
  useEffect(() => {
    if (autoPrint) {
      const t = setTimeout(() => window.print(), 500);
      return () => clearTimeout(t);
    }
  }, [autoPrint]);

  return (
    <div className="resume-actions mb-8 flex flex-wrap gap-3 print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        <Printer size={16} />
        Save as PDF
      </button>
      <p className="flex items-center gap-2 text-xs text-slate-500">
        <Download size={14} />
        Use &quot;Save as PDF&quot; in the print dialog to download
      </p>
    </div>
  );
}
