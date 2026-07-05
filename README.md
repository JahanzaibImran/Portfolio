# Jahanzaib Imran — Premium Portfolio

Senior Full Stack & AI Engineer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Premium dark/light theme with aurora backgrounds
- Command palette (⌘K)
- Scroll progress bar
- Typing animation hero
- AI, Cloud, Projects case studies
- Testimonials carousel
- GitHub activity section
- SMTP contact form
- SEO + structured data

## Development

```bash
npm install
npm run dev
```

## Contact form (Vercel)

Add SMTP credentials to `.env.local` — see `.env.example`.

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

## Resume

The resume PDF is auto-generated at `public/JahanzaibImran.pdf` from your portfolio data.

```bash
npm run generate:resume
```

Runs automatically before `npm run build`. To use your own PDF instead, replace `public/JahanzaibImran.pdf` manually.
