export const siteConfig = {
  name: "Jahanzaib Imran",
  initials: "JI",
  roles: [
    "Senior Full Stack Engineer",
    "AI Engineer",
    "Cloud Engineer",
    "Product Builder",
  ],
  headline: [
    "AI-powered products",
    "Scalable cloud systems",
    "Modern full-stack applications",
  ],
  subheading:
    "Senior Full Stack & AI Engineer shipping production systems for healthcare, legal, real estate, multifamily, and consumer products — from Next.js admin panels to FastAPI AI pipelines and NestJS backends.",
  email: "jahanzaibimrandev@gmail.com",
  linkedin: "https://www.linkedin.com/in/jahanzaib5887/",
  github: "https://github.com/JahanzaibImran",
  githubUsername: "JahanzaibImran",
  twitter: "https://x.com/jahanzaibimran",
  calendly: "https://calendly.com/jahanzaibimran",
  upwork: "https://www.upwork.com/freelancers/jahanzaib5887?mp_source=share",
  resumePath: "/resume",
  resumePdfPath: "/JahanzaibImran.pdf",
  resumePrintPath: "/resume?print=1",
  resumeDownloadName: "Jahanzaib-Imran-Resume.pdf",
  location: "Remote · Worldwide",
  available: true,
};

export const heroStats = [
  { value: "4+", label: "Years Experience" },
  { value: "15+", label: "Production Products" },
  { value: "50+", label: "Technologies" },
];

export const floatingTech = [
  "Next.js",
  "OpenAI",
  "NestJS",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Forge",
  "AWS",
];

export const aboutContent = {
  narrative: [
    "I don't just write code — I ship production systems. Over 4+ years I've delivered admin portals, AI platforms, real-time backends, and serverless Marketplace apps for companies across healthcare, legal, real estate, multifamily, and consumer products.",
    "My work spans the full product surface: React/Next.js frontends, NestJS and FastAPI services, data pipelines, LLM/OCR integrations, and Atlassian Forge apps — with architecture decisions that hold up under real users and compliance constraints.",
    "From Flair's AI call evaluation and Powerhouse's legal intake automation to Quibbit's geo-matching backend and AIOMEGA's clinician admin panel — I focus on measurable outcomes: less manual work, faster onboarding, and systems teams can trust in production.",
  ],
  pillars: [
    {
      title: "Product Ownership",
      description: "End-to-end delivery from requirements to production — not ticket closing.",
    },
    {
      title: "Architecture First",
      description: "Systems designed for scale, observability, and long-term maintainability.",
    },
    {
      title: "AI Integration",
      description: "Production LLM features — RAG, agents, function calling — not demos.",
    },
    {
      title: "Client Outcomes",
      description: "Clear communication, reliable delivery, and measurable business impact.",
    },
  ],
  growth: [
    { era: "2021", role: "Full Stack Developer", focus: "React, Node.js, APIs, e-commerce" },
    { era: "2023", role: "Senior Full Stack", focus: "SaaS, Web3, microservices, AWS" },
    { era: "2025", role: "AI + Cloud Engineer", focus: "LLM agents, RAG, cloud-native systems" },
  ],
};

export const skillGroups = [
  {
    id: "ai",
    title: "AI Engineering",
    icon: "brain",
    color: "from-violet-500/20 to-purple-600/10",
    skills: [
      "OpenAI API", "Anthropic API", "Google Gemini", "LangChain", "LangGraph",
      "RAG", "Vector Databases", "Prompt Engineering", "AI Agents", "MCP Servers",
      "OCR / Document AI", "Speech-to-Text", "Deepgram", "AssemblyAI",
      "LLM Applications", "Semantic Search", "Embeddings", "Function Calling",
      "Streaming Responses", "n8n Automation",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    color: "from-blue-500/20 to-cyan-500/10",
    skills: [
      "Next.js", "React", "TypeScript", "JavaScript", "Tailwind", "Material UI",
      "Shadcn UI", "Redux", "React Query", "Zustand", "GraphQL", "Apollo Client",
      "Data Visualization", "Framer Motion", "HTML", "CSS", "SCSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    color: "from-indigo-500/20 to-blue-500/10",
    skills: [
      "Node.js", "NestJS", "Express", "Python", "FastAPI", "TypeScript",
      "REST APIs", "GraphQL", "Prisma", "TypeORM", "Authentication", "JWT",
      "OAuth", "WebSockets", "Socket.IO", "Geolocation APIs", "BullMQ", "Cron Jobs",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    color: "from-emerald-500/20 to-teal-500/10",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase", "Data Pipelines"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    color: "from-sky-500/20 to-blue-500/10",
    skills: [
      "AWS", "Docker", "GitHub Actions", "CI/CD", "Nginx", "Linux",
      "Atlassian Forge", "Serverless", "DigitalOcean", "Cloudflare", "Vercel", "Netlify",
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    icon: "wallet",
    color: "from-amber-500/20 to-orange-500/10",
    skills: [
      "Solidity", "Web3.js", "Ethers.js", "NFT", "Launchpads",
      "ERC20", "ERC721", "Wallet Integration", "Smart Contracts",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "ai" | "saas" | "cloud" | "web3" | "automation";
  categoryLabel: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  impact: string;
  metrics: string[];
  stack: string[];
  github?: string;
  demo?: string;
  gradient: string;
};

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI" },
  { id: "saas", label: "SaaS" },
  { id: "cloud", label: "Cloud" },
  { id: "automation", label: "Automation" },
] as const;

export const projects: Project[] = [
  {
    id: "flair",
    title: "Flair — AI Call Evaluation & Secret Shopping",
    category: "ai",
    categoryLabel: "AI · Multifamily",
    problem:
      "Multifamily operators lacked visibility into what prospects actually experience on leasing calls — CRMs reported activity, not behavior, leaving marketing and leasing teams without accountability.",
    solution:
      "Built AI-driven call automation and evaluation that secret-shops leasing teams: speech-to-text transcription via Deepgram/AssemblyAI, LLM analysis of urgency, qualification, and fair-housing signals, plus vector retrieval for consistent scoring.",
    architecture:
      "FastAPI services → Deepgram / AssemblyAI transcription → OpenAI evaluation pipeline → vector retrieval layer → operator dashboards and actionable reports.",
    challenges: [
      "Noisy audio quality across properties",
      "Consistent LLM scoring for compliance",
      "Low-latency transcription + analysis pipeline",
    ],
    impact:
      "Gave operators visibility into answer rates, CTAs, and AI vs human follow-up quality — closing the gap between CRM metrics and real prospect experience.",
    metrics: ["Speech-to-text pipeline", "LLM call scoring", "Vector retrieval"],
    stack: ["FastAPI", "Python", "OpenAI", "Deepgram", "AssemblyAI", "Vector Retrieval"],
    demo: "https://getflair.io/",
    gradient: "from-blue-600/40 via-indigo-500/20 to-violet-600/10",
  },
  {
    id: "powerhouse",
    title: "Powerhouse — AI Legal Intake Hub",
    category: "automation",
    categoryLabel: "AI · Legal Tech",
    problem:
      "Law firms spent hours re-typing calls, faxes, and inbound documents into case systems — slowing intake and introducing errors before work even started.",
    solution:
      "Contributed to an AI intake hub that ingests calls, faxes, and PDFs, OCRs content, extracts parties/dates/exhibits/deadlines, and syncs case-ready data into CMS workflows.",
    architecture:
      "React/Next.js surfaces → OCR & Document AI services → extraction APIs → integrations with Clio, Filevine, Litify, and related legal tools.",
    challenges: [
      "Variable scan/fax quality",
      "Legal document structure variance",
      "Reliable CMS sync without double entry",
    ],
    impact:
      "Reduced manual intake entry so staff stay focused on case work instead of re-keying documents.",
    metrics: ["OCR + extraction", "CMS integrations", "Workflow triggers"],
    stack: ["React", "Next.js", "Python", "Node.js", "OCR", "Document AI", "API Integrations"],
    demo: "https://powerhouse.so/",
    gradient: "from-violet-600/40 via-purple-500/20 to-fuchsia-600/10",
  },
  {
    id: "aiomd",
    title: "AIOMEGA — Clinician Admin Panel",
    category: "saas",
    categoryLabel: "SaaS · Healthcare",
    problem:
      "Clinicians and partners needed a faster way to submit and manage cases for an FDA-cleared intraoral sleep apnea device — existing intake friction slowed onboarding.",
    solution:
      "Built the full admin panel frontend for AIOMEGA's clinician/partner portal with a streamlined case-intake workflow, clear status tracking, and role-aware UI for partners and clinicians.",
    architecture:
      "Next.js + TypeScript admin UI → REST APIs → case submission, review, and management flows for clinicians and partners.",
    challenges: [
      "Complex clinical case forms",
      "Partner vs clinician permission models",
      "Reducing onboarding drop-off",
    ],
    impact:
      "Lowered clinician onboarding friction with a production case-intake experience tailored to medical device workflows.",
    metrics: ["Full admin frontend", "Case intake UX", "Partner portal"],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    demo: "https://admin.aiomd.com/",
    gradient: "from-cyan-600/40 via-sky-500/20 to-blue-600/10",
  },
  {
    id: "newscopilot",
    title: "NewsCopilot — AI Research Frontend",
    category: "ai",
    categoryLabel: "AI · Journalism",
    problem:
      "Journalists burned time manually looking up Census, BLS, SEC, and other public datasets related to their reporting subjects.",
    solution:
      "Built the frontend for an AI-driven research tool that surfaces relevant public data tied to reporting subjects — with privacy-preserving context and clear data visualizations.",
    architecture:
      "Next.js research UI → data/API layer for public datasets → visualization components for exploratory reporting workflows.",
    challenges: [
      "Dense public-data UX",
      "Privacy-preserving context surfacing",
      "Readable visualizations for non-technical reporters",
    ],
    impact:
      "Cut manual data-lookup time by automating context discovery for journalists.",
    metrics: ["AI research UI", "Public data surfacing", "Data visualization"],
    stack: ["React", "Next.js", "TypeScript", "Data Visualization"],
    demo: "https://app.newscopilot.com/",
    gradient: "from-emerald-600/40 via-teal-500/20 to-cyan-600/10",
  },
  {
    id: "va-benefits",
    title: "VA Benefits Navigator",
    category: "ai",
    categoryLabel: "AI · Civic Tech",
    problem:
      "Veterans often abandon VA disability claims because the process is complex, opaque, and easy to get wrong without guided support.",
    solution:
      "Contributed to an AI-powered platform that guides veterans through claim building, education, and progress tracking — reducing drop-off typical of manual claims navigation.",
    architecture:
      "Next.js app + auth → Node.js services → LLM-assisted claim guidance and claim academy flows.",
    challenges: [
      "Sensitive domain accuracy",
      "Guided multi-step claim UX",
      "Clear progress tracking for users",
    ],
    impact:
      "Helped veterans navigate claims with more precision and confidence, lowering complexity-driven abandonment.",
    metrics: ["Claim builder", "AI guidance", "Auth + tracking"],
    stack: ["React", "Next.js", "Node.js", "AI / LLM Integration"],
    demo: "https://app.vabenefitsnavigator.com/auth",
    gradient: "from-indigo-600/40 via-blue-500/20 to-slate-600/10",
  },
  {
    id: "quibbit",
    title: "Quibbit — On-Demand Vehicle Services Backend",
    category: "saas",
    categoryLabel: "Backend · Marketplace",
    problem:
      "Drivers needed mobile vehicle services (tires, oil, detailing, roadside) without phone calls or waiting at a shop — requiring real-time provider matching.",
    solution:
      "Built backend services for Quibbit's geo-enabled marketplace, matching users to nearby providers and supporting booking, tracking, and admin operations.",
    architecture:
      "NestJS/Express APIs → PostgreSQL/MongoDB → geolocation-based routing and matching → mobile app + admin panel consumers.",
    challenges: [
      "Real-time nearby provider matching",
      "Geo routing under variable demand",
      "Reliable booking + admin workflows",
    ],
    impact:
      "Enabled on-demand mobile automotive services with location-aware dispatch instead of manual coordination.",
    metrics: ["Geo matching", "Mobile + admin APIs", "Real-time routing"],
    stack: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "REST APIs", "Geolocation"],
    demo: "https://quibbit.com/",
    gradient: "from-amber-600/40 via-orange-500/20 to-red-600/10",
  },
  {
    id: "youwaggle",
    title: "You Waggle — Social Wishlist Backend",
    category: "saas",
    categoryLabel: "Backend · Consumer",
    problem:
      "Users needed a way to organize products and wishlists, then share them with friends under clear permission models — free vs premium access.",
    solution:
      "Built backend services for shareable item/list links, circle sharing, and tiered permissions (add-only, view-only, edit) supporting free and premium plans.",
    architecture:
      "NestJS API → MongoDB/PostgreSQL → shareable link generation → permission-aware list collaboration endpoints.",
    challenges: [
      "Fine-grained share permissions",
      "Free vs premium feature gating",
      "Reliable shareable link flows",
    ],
    impact:
      "Enabled users to organize recommendations and influence purchases across their social circle with controlled sharing.",
    metrics: ["Shareable links", "Tiered permissions", "Social lists API"],
    stack: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "REST APIs"],
    demo: "https://youwaggle.com/",
    gradient: "from-pink-600/40 via-rose-500/20 to-orange-600/10",
  },
  {
    id: "preschool-pro",
    title: "My Preschool Pro — Real-Time Analytics",
    category: "saas",
    categoryLabel: "SaaS · Education",
    problem:
      "School administrators lacked live visibility into enrollment, attendance, and day-to-day operations across their preschool/school management platform.",
    solution:
      "Built real-time analytics dashboards that surface operational KPIs so admins can monitor enrollment, attendance, and school health without stale reports.",
    architecture:
      "Next.js dashboards → live data feeds / API layer → charts and operational widgets for administrators.",
    challenges: [
      "Live metrics without noisy UI",
      "Multiple operational data sources",
      "Admin-first dashboard clarity",
    ],
    impact:
      "Gave administrators continuous operational visibility instead of delayed spreadsheet-style reporting.",
    metrics: ["Live dashboards", "Enrollment insights", "Ops visibility"],
    stack: ["React", "Next.js", "TypeScript", "Real-time Dashboards"],
    demo: "https://mypreschoolpro.com/",
    gradient: "from-lime-600/40 via-green-500/20 to-emerald-600/10",
  },
  {
    id: "inheriteddata",
    title: "InheritedData — Property Lead Pipelines",
    category: "cloud",
    categoryLabel: "Backend · Real Estate",
    problem:
      "Investors and agents needed exclusive, time-sensitive inherited-property leads before public probate data — requiring reliable ingestion and delivery pipelines.",
    solution:
      "Built backend data pipelines that process and deliver private-placement inherited property records with ownership, title, and relative contact context for licensed clients.",
    architecture:
      "Node.js/Python pipeline workers → PostgreSQL → REST APIs / delivery layer for InheritedDataPRO and client subscriptions.",
    challenges: [
      "Time-sensitive data freshness",
      "High-volume record processing",
      "Clean, queryable delivery for clients",
    ],
    impact:
      "Helped clients reach inherited-property opportunities earlier with exclusive, pipeline-delivered inventory.",
    metrics: ["Data pipelines", "Lead delivery APIs", "PostgreSQL scale"],
    stack: ["Node.js", "Python", "PostgreSQL", "Data Pipelines", "REST APIs"],
    demo: "https://inheriteddata.com/",
    gradient: "from-stone-600/40 via-neutral-500/20 to-zinc-600/10",
  },
  {
    id: "kencha-forge",
    title: "kencha Software — Atlassian Forge Apps",
    category: "cloud",
    categoryLabel: "Serverless · Atlassian",
    problem:
      "Teams using Confluence/Jira needed custom Marketplace apps for scheduling, compliance, assets, and page tooling — without running traditional server infrastructure.",
    solution:
      "Built serverless Confluence/Jira Marketplace apps on Atlassian Forge, shipped and published live on the Atlassian Marketplace for kencha Software.",
    architecture:
      "Atlassian Forge (serverless) → TypeScript/JavaScript app modules → Marketplace distribution for Confluence/Jira Cloud.",
    challenges: [
      "Forge platform constraints",
      "Marketplace review & publishing",
      "Secure Cloud app patterns",
    ],
    impact:
      "Delivered production Marketplace apps used by Confluence/Jira customers under a serverless delivery model.",
    metrics: ["Live Marketplace apps", "Forge serverless", "Published vendor apps"],
    stack: ["Atlassian Forge", "TypeScript", "JavaScript", "Serverless"],
    demo: "https://marketplace.atlassian.com/vendors/1220397/kencha-software",
    gradient: "from-blue-700/40 via-sky-600/20 to-indigo-600/10",
  },
];

export const aiExperience = {
  title: "Building Intelligent AI Applications",
  description:
    "Production LLM systems across legal intake, call evaluation, journalism research, and veterans claims — not demos.",
  current: [
    "AI Chatbots", "RAG Systems", "Vector Databases", "OpenAI", "Claude", "Gemini",
    "Prompt Engineering", "AI Agents", "Workflow Automation", "Speech-to-Text",
    "Deepgram", "AssemblyAI", "OCR / Document AI", "LangChain", "Semantic Search",
    "Streaming AI", "Function Calling", "Knowledge Bases",
  ],
  future: [
    "Agentic AI", "Multi-agent Systems", "Computer Use", "Voice AI", "Autonomous Workflows",
  ],
};

export const cloudExperience = {
  title: "Cloud & Infrastructure",
  description: "Designing scalable, observable systems on AWS with CI/CD and performance-first engineering.",
  services: [
    { name: "EC2", desc: "Application hosting" },
    { name: "S3", desc: "Object storage" },
    { name: "CloudFront", desc: "CDN delivery" },
    { name: "Lambda", desc: "Serverless compute" },
    { name: "API Gateway", desc: "API management" },
    { name: "IAM", desc: "Access control" },
    { name: "Docker", desc: "Containerization" },
    { name: "GitHub Actions", desc: "CI/CD pipelines" },
    { name: "Cloudflare", desc: "Edge security" },
    { name: "Vercel", desc: "Frontend deploy" },
    { name: "Nginx", desc: "Reverse proxy" },
    { name: "Linux", desc: "Server management" },
  ],
  principles: [
    "Stateless horizontal scaling",
    "Redis caching + CDN optimization",
    "Event-driven microservices",
    "Infrastructure as code",
    "Monitoring, logging, alerting",
  ],
};

export const workExperience = [
  {
    company: "Freelance / Contract",
    role: "Full Stack & AI Engineer",
    duration: "2024 — Present",
    technologies: ["Next.js", "FastAPI", "OpenAI", "NestJS", "PostgreSQL", "Atlassian Forge"],
    achievements: [
      "Built Flair AI call evaluation with Deepgram/AssemblyAI transcription and LLM scoring",
      "Shipped AIOMEGA clinician admin panel and NewsCopilot AI research frontend",
      "Contributed to Powerhouse legal intake automation and VA Benefits Navigator AI flows",
      "Delivered Quibbit geo-matching backend and You Waggle share/permissions APIs",
    ],
    impact: "Owned production features across AI, SaaS, and backend systems for global product teams.",
  },
  {
    company: "Product & Platform Engagements",
    role: "Senior Full Stack Developer",
    duration: "2022 — 2024",
    technologies: ["React", "Node.js", "NestJS", "Python", "MongoDB", "PostgreSQL"],
    achievements: [
      "Built InheritedData backend pipelines for exclusive inherited-property lead delivery",
      "Shipped My Preschool Pro real-time analytics dashboards for school administrators",
      "Published serverless Confluence/Jira apps on Atlassian Marketplace for kencha Software",
    ],
    impact: "Led delivery of data platforms, dashboards, and Marketplace apps used in production.",
  },
  {
    company: "Product Teams",
    role: "Software Engineer",
    duration: "2021 — 2022",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io", "Stripe"],
    achievements: [
      "Delivered e-commerce platforms with Stripe checkout and inventory management",
      "Built real-time chat with Socket.io and encrypted MongoDB storage",
      "Implemented REST/GraphQL APIs with authentication and role-based access",
    ],
    impact: "Foundation in full-stack delivery, system design, and client communication.",
  },
];

export const testimonials = [
  {
    quote: "Jahanzaib delivered a production-ready AI dashboard ahead of schedule. His architecture decisions saved us months of rework.",
    author: "Startup Founder",
    role: "SaaS Client",
    company: "B2B Startup",
  },
  {
    quote: "Exceptional full-stack skills — React to NestJS to AWS. He owns problems end-to-end and communicates clearly throughout.",
    author: "Technical Lead",
    role: "Agency Partner",
    company: "Digital Agency",
  },
  {
    quote: "Built our Web3 platform from zero to 50K users. Clean smart contract integration and outstanding UX for wallet flows.",
    author: "Product Manager",
    role: "Web3 Startup",
    company: "Gaming Studio",
  },
  {
    quote: "The AI automation agent replaced hours of manual ops work weekly. Reliable, well-documented, and built for scale.",
    author: "Operations Director",
    role: "Enterprise Client",
    company: "Sales Org",
  },
];

export const blogPosts = [
  { title: "Building Production AI Agents with LangGraph", tag: "AI", date: "Coming Soon", category: "AI" },
  { title: "RAG Systems That Work in Production", tag: "RAG", date: "Coming Soon", category: "AI" },
  { title: "Scaling NestJS Microservices on AWS", tag: "Cloud", date: "Coming Soon", category: "Cloud" },
  { title: "Next.js App Router Performance Patterns", tag: "Next.js", date: "Coming Soon", category: "Next.js" },
  { title: "System Design for High-Traffic APIs", tag: "Architecture", date: "Coming Soon", category: "System Design" },
  { title: "From Monolith to Microservices: A Practical Guide", tag: "Scaling", date: "Coming Soon", category: "Architecture" },
];

export const pinnedRepos = [
  { name: "social-chit-chat", description: "Full-stack real-time chat with Socket.io & encrypted MongoDB", language: "JavaScript", stars: 0 },
  { name: "blockchain-price-tracker", description: "Crypto price tracking with TypeScript", language: "TypeScript", stars: 0 },
  { name: "SeekGaters-BE", description: "Backend API built with TypeScript", language: "TypeScript", stars: 0 },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#ai" },
  { label: "Cloud", href: "#cloud" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const commandItems = [
  { label: "View Projects", href: "#projects", group: "Navigate" },
  { label: "AI Experience", href: "#ai", group: "Navigate" },
  { label: "Cloud Architecture", href: "#cloud", group: "Navigate" },
  { label: "Work Experience", href: "#experience", group: "Navigate" },
  { label: "Contact Me", href: "#contact", group: "Navigate" },
  { label: "View Resume", href: "/resume", group: "Actions", external: false },
  { label: "Download Resume", href: "/JahanzaibImran.pdf", group: "Actions", external: false },
  { label: "GitHub Profile", href: "https://github.com/JahanzaibImran", group: "Social", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jahanzaib5887/", group: "Social", external: true },
  { label: "Email Me", href: "mailto:jahanzaibimrandev@gmail.com", group: "Social", external: true },
];

export const terminalLines = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "jahanzaib.imran — fullstack.ai.cloud" },
  { type: "command", text: "$ cat skills.json | jq '.primary'" },
  { type: "output", text: '["Next.js", "OpenAI", "AWS", "LangChain", "PostgreSQL"]' },
  { type: "command", text: "$ deploy --target production" },
  { type: "output", text: "✓ Build passed · ✓ Tests passed · ✓ Deployed to Vercel" },
  { type: "command", text: "$ status" },
  { type: "output", text: "Available for senior roles & contract work 🟢" },
];
