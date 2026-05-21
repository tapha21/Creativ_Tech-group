import {
  Code2, ShieldCheck, Calculator, Palette, MessageSquare,
  Smartphone, Cloud, Bot, Briefcase, Sparkles,
} from "lucide-react";

export const services = [
  { icon: Code2, title: "Software Development", desc: "Custom web apps, SaaS platforms, APIs, ERP systems built to scale." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Security audits, infrastructure protection, penetration testing." },
  { icon: Calculator, title: "Accounting Digitalization", desc: "Digital accounting systems, automation, business reporting." },
  { icon: Palette, title: "UI/UX Design", desc: "Modern interfaces, product design, mobile-first experiences." },
  { icon: MessageSquare, title: "Community Management", desc: "Social media, branding and digital communication.", badge: "Coming Soon" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform Android & iOS applications." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud infrastructure, deployment and DevOps pipelines." },
  { icon: Bot, title: "AI & Automation", desc: "Business automation powered by AI agents and workflows." },
  { icon: Briefcase, title: "IT Consulting", desc: "Digital strategy and end-to-end business transformation." },
  { icon: Sparkles, title: "Branding & Identity", desc: "Visual identity, logo systems and corporate branding." },
] as const;

export const projects = [
  { title: "Creativ_Park", category: "SaaS", client: "Internal", status: "Live", progress: 100,
    description: "Workspace platform for African creators and tech teams.",
    tech: ["React", "Node.js", "Postgres"] },
  { title: "SmartCompta", category: "SaaS", client: "Cabinet ABC", status: "Live", progress: 100,
    description: "Cloud accounting & invoicing tailored for West African SMEs.",
    tech: ["Next.js", "Stripe", "Prisma"] },
  { title: "SecureNet Africa", category: "Cybersecurity", client: "Confidential", status: "Ongoing", progress: 72,
    description: "Continuous infrastructure monitoring and pentest platform.",
    tech: ["Go", "Docker", "AWS"] },
  { title: "WaveAnalytics", category: "AI", client: "FinTech Dakar", status: "Beta", progress: 85,
    description: "AI-driven analytics for mobile money transactions.",
    tech: ["Python", "FastAPI", "ML"] },
  { title: "Dakar Delivery", category: "Mobile Apps", client: "DDP SARL", status: "Live", progress: 100,
    description: "Last-mile delivery app connecting riders and merchants.",
    tech: ["React Native", "Firebase"] },
  { title: "Teranga Bank Portal", category: "Web Apps", client: "Teranga Group", status: "Ongoing", progress: 60,
    description: "Customer portal with KYC, transfers and dashboards.",
    tech: ["Angular", "Java", "Postgres"] },
  { title: "Sahel Brand System", category: "Branding", client: "Sahel Foods", status: "Live", progress: 100,
    description: "Full corporate identity and brand guideline system.",
    tech: ["Figma", "Design System"] },
  { title: "AgriBot Sénégal", category: "AI", client: "Coop Agricole", status: "Beta", progress: 78,
    description: "AI assistant for crop planning and market pricing.",
    tech: ["OpenAI", "Python"] },
] as const;

export const categories = ["All", "Web Apps", "Mobile Apps", "SaaS", "Cybersecurity", "Branding", "AI"] as const;

export const stats = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 45, suffix: "+", label: "Security Audits" },
  { value: 18, suffix: "", label: "Team Members" },
] as const;

export const whyUs = [
  { title: "Innovation Driven", desc: "We pair emerging tech with real business outcomes." },
  { title: "African Market Expertise", desc: "Built in Dakar, deployed across West Africa." },
  { title: "Enterprise Security", desc: "Security-first engineering on every layer." },
  { title: "Fast Delivery", desc: "Agile squads shipping production in weeks, not quarters." },
  { title: "Scalable Solutions", desc: "Architectures designed for millions of users." },
  { title: "Modern Technologies", desc: "Tomorrow's stack, hardened for production today." },
] as const;

export const testimonials = [
  { name: "Awa Diop", role: "CEO, Teranga Group", quote: "Creativ-Tech rebuilt our entire client portal in 10 weeks. Performance, design and security are world-class." },
  { name: "Cheikh Ndiaye", role: "Founder, DDP SARL", quote: "Their team understood our market instantly. Our delivery app scaled from 0 to 12k users in 3 months." },
  { name: "Fatou Sow", role: "CFO, Cabinet ABC", quote: "SmartCompta replaced 4 tools and saved us hundreds of hours per month. Truly enterprise-grade." },
  { name: "Mamadou Ba", role: "CTO, Sahel FinTech", quote: "Best engineering partner we've worked with on the continent. Sharp, fast, deeply professional." },
] as const;

export const processSteps = [
  { n: "01", title: "Discovery", desc: "Stakeholder interviews and product audits." },
  { n: "02", title: "Strategy", desc: "Roadmap, scope and success metrics." },
  { n: "03", title: "Design", desc: "Prototypes, design system, user testing." },
  { n: "04", title: "Development", desc: "Agile delivery with weekly demos." },
  { n: "05", title: "Testing", desc: "QA, security and performance hardening." },
  { n: "06", title: "Deployment", desc: "CI/CD, monitoring and observability." },
  { n: "07", title: "Support", desc: "SLA-backed maintenance and evolution." },
] as const;

export const techStack = [
  "React", "Angular", "Node.js", "Python", "Docker",
  "AWS", "PostgreSQL", "MongoDB", "Firebase", "Tailwind CSS",
] as const;
