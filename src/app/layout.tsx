import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { ScrollProgress, LoadingScreen } from "@/components/layout/scroll-progress";
import { CommandPalette } from "@/components/layout/command-palette";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} | Senior Full Stack & AI Engineer`,
  description: siteConfig.subheading,
  keywords: [
    "Full Stack Engineer", "AI Engineer", "Cloud Engineer", "Solution Architect",
    "Next.js", "OpenAI", "LangChain", "AWS", "React", "TypeScript", "RAG", "AI Agents",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  openGraph: {
    title: `${siteConfig.name} | Senior Full Stack & AI Engineer`,
    description: siteConfig.subheading,
    type: "website",
    url: "https://jahanzaibimran.dev",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Senior Full Stack & AI Engineer`,
    description: siteConfig.subheading,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Senior Full Stack & AI Engineer",
  url: siteConfig.github,
  email: siteConfig.email,
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.twitter],
  knowsAbout: ["Artificial Intelligence", "Cloud Computing", "Full Stack Development", "Web3"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <AuroraBackground />
          <CommandPalette />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
