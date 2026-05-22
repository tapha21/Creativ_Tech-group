import {
  Code2, ShieldCheck, Calculator, Palette, MessageSquare,
  Smartphone, Cloud, Bot, Briefcase, Sparkles,
} from "lucide-react";

export const services = [
  { icon: Code2, title: "Développement Logiciel", desc: "Applications web sur mesure, plateformes SaaS, APIs et ERP conçus pour scaler." },
  { icon: ShieldCheck, title: "Cybersécurité", desc: "Audits de sécurité, protection d'infrastructure et tests d'intrusion." },
  { icon: Calculator, title: "Digitalisation Comptable", desc: "Systèmes comptables digitaux, automatisation et reporting business." },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces modernes, design produit et expériences mobile-first." },
  { icon: MessageSquare, title: "Community Management", desc: "Réseaux sociaux, branding et communication digitale.", badge: "Bientôt" },
  { icon: Smartphone, title: "Développement Mobile", desc: "Applications natives et cross-platform Android & iOS." },
  { icon: Cloud, title: "Solutions Cloud", desc: "Infrastructure cloud, déploiement et pipelines DevOps." },
  { icon: Bot, title: "IA & Automatisation", desc: "Automatisation métier propulsée par des agents IA et des workflows.", badge: "Bientôt" },
  { icon: Briefcase, title: "Conseil IT", desc: "Stratégie digitale et transformation business de bout en bout." },
  { icon: Sparkles, title: "Branding & Identité", desc: "Identité visuelle, systèmes de logo et branding corporate." },
] as const;

export const projects = [
  { title: "Creativ_Park", category: "SaaS", client: "Interne", status: "En ligne", progress: 100,
    description: "Plateforme workspace pour créateurs et équipes tech africaines.",
    tech: ["React", "Node.js", "Postgres"] },
  { title: "SmartCompta", category: "SaaS", client: "Cabinet ABC", status: "En ligne", progress: 100,
    description: "Comptabilité et facturation cloud taillées pour les PME ouest-africaines.",
    tech: ["Next.js", "Stripe", "Prisma"] },
  { title: "SecureNet Africa", category: "Cybersécurité", client: "Confidentiel", status: "En cours", progress: 72,
    description: "Surveillance d'infrastructure et plateforme de pentest en continu.",
    tech: ["Go", "Docker", "AWS"] },
  { title: "WaveAnalytics", category: "IA", client: "FinTech Dakar", status: "Bêta", progress: 85,
    description: "Analyse pilotée par IA pour les transactions de mobile money.",
    tech: ["Python", "FastAPI", "ML"] },
  { title: "Dakar Delivery", category: "Mobile", client: "DDP SARL", status: "En ligne", progress: 100,
    description: "Application de livraison last-mile pour livreurs et marchands.",
    tech: ["React Native", "Firebase"] },
  { title: "Teranga Bank Portal", category: "Web", client: "Teranga Group", status: "En cours", progress: 60,
    description: "Portail client avec KYC, virements et tableaux de bord.",
    tech: ["Angular", "Java", "Postgres"] },
  { title: "Sahel Brand System", category: "Branding", client: "Sahel Foods", status: "En ligne", progress: 100,
    description: "Identité corporate complète et système de charte graphique.",
    tech: ["Figma", "Design System"] },
  { title: "AgriBot Sénégal", category: "IA", client: "Coop Agricole", status: "Bêta", progress: 78,
    description: "Assistant IA pour la planification des cultures et les prix du marché.",
    tech: ["OpenAI", "Python"] },
] as const;

export const categories = ["Tous", "Web", "Mobile", "SaaS", "Cybersécurité", "Branding", "IA"] as const;

export const stats = [
  { value: 120, suffix: "+", label: "Projets livrés" },
  { value: 80, suffix: "+", label: "Clients satisfaits" },
  { value: 45, suffix: "+", label: "Audits de sécurité" },
  { value: 18, suffix: "", label: "Membres de l'équipe" },
] as const;

export const whyUs = [
  { title: "Orientés Innovation", desc: "Nous combinons technologies émergentes et résultats business concrets." },
  { title: "Expertise du Marché Africain", desc: "Conçu à Dakar, déployé à travers l'Afrique de l'Ouest." },
  { title: "Sécurité Entreprise", desc: "Une ingénierie security-first à tous les niveaux." },
  { title: "Livraison Rapide", desc: "Des équipes agiles qui livrent en production en semaines, pas en trimestres." },
  { title: "Solutions Scalables", desc: "Des architectures pensées pour des millions d'utilisateurs." },
  { title: "Technologies Modernes", desc: "La stack de demain, durcie pour la production d'aujourd'hui." },
] as const;

export const testimonials = [
  { name: "Awa Diop", role: "CEO, Teranga Group", quote: "Creativ-Tech a reconstruit notre portail client en 10 semaines. Performance, design et sécurité de classe mondiale." },
  { name: "Cheikh Ndiaye", role: "Fondateur, DDP SARL", quote: "Leur équipe a compris notre marché immédiatement. Notre app de livraison est passée de 0 à 12k utilisateurs en 3 mois." },
  { name: "Fatou Sow", role: "DAF, Cabinet ABC", quote: "SmartCompta a remplacé 4 outils et nous fait gagner des centaines d'heures par mois. Vraiment de qualité entreprise." },
  { name: "Mamadou Ba", role: "CTO, Sahel FinTech", quote: "Le meilleur partenaire d'ingénierie avec qui nous ayons travaillé sur le continent. Rapide, pointu, profondément professionnel." },
] as const;

export const processSteps = [
  { n: "01", title: "Découverte", desc: "Interviews des parties prenantes et audits produit." },
  { n: "02", title: "Stratégie", desc: "Roadmap, périmètre et indicateurs de succès." },
  { n: "03", title: "Design", desc: "Prototypes, design system et tests utilisateurs." },
  { n: "04", title: "Développement", desc: "Livraison agile avec démos hebdomadaires." },
  { n: "05", title: "Tests", desc: "QA, sécurité et durcissement des performances." },
  { n: "06", title: "Déploiement", desc: "CI/CD, monitoring et observabilité." },
  { n: "07", title: "Support", desc: "Maintenance et évolutions garanties par SLA." },
] as const;

export const techStack = [
  "React", "Angular", "Node.js", "Python", "Docker",
  "AWS", "PostgreSQL", "MongoDB", "Firebase", "Tailwind CSS",
] as const;

export const WHATSAPP_NUMBER = "221770000000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour Creativ-Tech, j'aimerais discuter d'un projet.")}`;
