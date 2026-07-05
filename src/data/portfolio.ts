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
    "Full Stack Engineer specializing in AI applications, cloud infrastructure, modern web platforms, scalable backend systems, automation, and exceptional user experiences.",
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
  { value: "20+", label: "Projects Shipped" },
  { value: "50+", label: "Technologies" },
];

export const floatingTech = [
  "Next.js",
  "OpenAI",
  "AWS",
  "TypeScript",
  "LangChain",
  "PostgreSQL",
  "Docker",
  "Web3",
];

export const aboutContent = {
  narrative: [
    "I don't just write code — I ship products. Over 4+ years, I've moved from building CRUD apps to architecting AI-native platforms, cloud systems, and Web3 products that serve thousands of users.",
    "My work sits at the intersection of product thinking and engineering depth: defining architecture, choosing the right trade-offs, and delivering software that scales without collapsing under real-world load.",
    "Today I operate as a Full Stack + AI + Cloud engineer — embedding LLMs into SaaS, designing microservices on AWS, and building autonomous agents that replace hours of manual work with intelligent automation.",
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
      "n8n Automation", "LLM Applications", "Semantic Search", "Embeddings",
      "AI Chatbots", "Function Calling", "Streaming Responses",
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
      "HTML", "CSS", "SCSS", "Framer Motion",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    color: "from-indigo-500/20 to-blue-500/10",
    skills: [
      "Node.js", "NestJS", "Express", "TypeScript", "REST APIs", "GraphQL",
      "Prisma", "TypeORM", "Authentication", "JWT", "OAuth", "WebSockets",
      "Socket.IO", "Cron Jobs", "BullMQ",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    color: "from-emerald-500/20 to-teal-500/10",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    color: "from-sky-500/20 to-blue-500/10",
    skills: [
      "AWS", "Docker", "GitHub Actions", "CI/CD", "Nginx", "Linux",
      "DigitalOcean", "Cloudflare", "Vercel", "Netlify",
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
  { id: "web3", label: "Web3" },
  { id: "automation", label: "Automation" },
] as const;

export const projects: Project[] = [
  {
    id: "ai-sales",
    title: "AI Sales Engagement Platform",
    category: "ai",
    categoryLabel: "AI + SaaS",
    problem: "Sales teams lost pipeline velocity on manual dialing, note-taking, and follow-up creation.",
    solution: "Built a cloud-native platform with Twilio dialer, real-time monitoring, and OpenAI-powered call summaries and follow-up generation.",
    architecture: "Next.js frontend → NestJS API → PostgreSQL + Redis → OpenAI + Twilio integrations on AWS.",
    challenges: ["Real-time call state sync", "LLM output reliability", "Multi-tenant RBAC"],
    impact: "Unified dialing, CRM, and AI insights into a single revenue operations dashboard.",
    metrics: ["10+ core features", "Real-time WebSockets", "Multi-role access"],
    stack: ["Next.js", "NestJS", "PostgreSQL", "OpenAI", "Twilio", "Socket.io", "AWS"],
    demo: "https://dialer.getflair.io/",
    gradient: "from-blue-600/40 via-indigo-500/20 to-violet-600/10",
  },
  {
    id: "ai-agent",
    title: "Autonomous Business Operations Agent",
    category: "automation",
    categoryLabel: "AI Automation",
    problem: "Ops teams spent hundreds of hours on repetitive admin across email, CRM, and data retrieval.",
    solution: "Architected LangGraph multi-agent system with planning, research, and execution agents using tool calling and RAG.",
    architecture: "Next.js UI → Node.js orchestrator → LangGraph agents → Pinecone + PostgreSQL memory layer.",
    challenges: ["Agent reliability", "Human-in-the-loop flows", "Audit logging"],
    impact: "Automated multi-step workflows with full visibility and approval gates.",
    metrics: ["3 agent types", "12+ tool integrations", "Persistent memory"],
    stack: ["Next.js", "LangGraph", "LangChain", "OpenAI", "Pinecone", "PostgreSQL", "Redis"],
    demo: "https://dialer.getflair.io/",
    gradient: "from-violet-600/40 via-fuchsia-500/20 to-purple-600/10",
  },
  {
    id: "microservices",
    title: "Enterprise API & Microservices Platform",
    category: "cloud",
    categoryLabel: "Cloud Architecture",
    problem: "Large-scale apps needed secure, horizontally scalable backend infrastructure.",
    solution: "Designed NestJS microservices with event-driven communication, JWT/RBAC, and AWS deployment.",
    architecture: "API Gateway → Microservices → RabbitMQ → PostgreSQL/Redis → Docker on AWS EC2.",
    challenges: ["Service boundaries", "Queue reliability", "Cross-service auth"],
    impact: "Production platform supporting high-throughput APIs with full observability.",
    metrics: ["GraphQL + REST", "Event-driven", "Dockerized"],
    stack: ["NestJS", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "AWS", "GraphQL"],
    gradient: "from-indigo-600/40 via-blue-500/20 to-cyan-600/10",
  },
  {
    id: "web3-gaming",
    title: "NFT Gaming & Staking Platform",
    category: "web3",
    categoryLabel: "Web3",
    problem: "Blockchain gaming needed secure wallet UX and staking for 50K+ non-crypto-native users.",
    solution: "Full-stack Web3 portal with Ethers.js, smart contract staking, NFT marketplace, and on-chain analytics.",
    architecture: "Next.js dApp → Node.js API → MongoDB → Ethereum smart contracts via Ethers.js.",
    challenges: ["Wallet state management", "Transaction UX", "Multi-chain support"],
    impact: "Scaled Zogi Labs game portal to 50K+ users with seamless staking experience.",
    metrics: ["50K+ users", "NFT marketplace", "Multi-chain"],
    stack: ["Next.js", "Solidity", "Ethers.js", "Web3.js", "Node.js", "MongoDB"],
    gradient: "from-emerald-600/40 via-teal-500/20 to-cyan-600/10",
  },
  {
    id: "marketplace",
    title: "Multi-Vendor Service Marketplace",
    category: "saas",
    categoryLabel: "Full Stack SaaS",
    problem: "Businesses needed a centralized platform connecting buyers and sellers with payments.",
    solution: "Built multi-vendor marketplace with Stripe commissions, vendor dashboards, and admin analytics.",
    architecture: "Next.js → NestJS → PostgreSQL + Redis → Stripe webhooks on AWS.",
    challenges: ["Commission logic", "Vendor onboarding", "Real-time notifications"],
    impact: "End-to-end marketplace with search, orders, reviews, and admin moderation.",
    metrics: ["Multi-vendor", "Stripe payments", "Admin panel"],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Redis", "AWS"],
    gradient: "from-amber-600/40 via-orange-500/20 to-red-600/10",
  },
];

export const aiExperience = {
  title: "Building Intelligent AI Applications",
  description:
    "Production LLM systems — from RAG and chatbots to autonomous agents and workflow automation.",
  current: [
    "AI Chatbots", "RAG Systems", "Vector Databases", "OpenAI", "Claude", "Gemini",
    "Prompt Engineering", "AI Agents", "Workflow Automation", "n8n", "LangChain",
    "Semantic Search", "Streaming AI", "Function Calling", "Document AI", "Knowledge Bases",
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
    technologies: ["Next.js", "OpenAI", "LangChain", "AWS", "NestJS", "PostgreSQL"],
    achievements: [
      "Shipped AI sales platform with Twilio dialer and LLM call summaries",
      "Architected multi-agent automation with LangGraph and RAG pipelines",
      "Delivered SaaS dashboards and CRM integrations for global clients",
    ],
    impact: "End-to-end product delivery from architecture to production deployment.",
  },
  {
    company: "Startup & Agency Projects",
    role: "Senior Full Stack Developer",
    duration: "2022 — 2024",
    technologies: ["React", "Node.js", "Ethers.js", "MongoDB", "NestJS"],
    achievements: [
      "Built Web3 gaming portal serving 50K+ users (Zogi Labs)",
      "Developed NFT marketplace with wallet integration and smart contracts",
      "Created enterprise NestJS APIs with microservices architecture",
    ],
    impact: "Led technical decisions and shipped products used by thousands globally.",
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
