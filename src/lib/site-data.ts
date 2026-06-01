import {
  Code2, ShieldCheck, Calculator, Palette, MessageSquare,
  Smartphone, Cloud, Bot, Briefcase, Sparkles,
  Search, Map, PenTool, Hammer, TestTube, Rocket, LifeBuoy,
  Building2, Landmark, Banknote, ShoppingBag, GraduationCap, Plane,
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
  { value: 5, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "+", label: "Clients satisfaits" },
  { value: 3, suffix: "", label: "Membres de l'équipe" },
  { value: 24, suffix: "/7", label: "Support & Maintenance" },
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
  { n: "01", title: "Découverte", desc: "Interviews des parties prenantes et audits produit.", icon: Search },
  { n: "02", title: "Stratégie", desc: "Roadmap, périmètre et indicateurs de succès.", icon: Map },
  { n: "03", title: "Design", desc: "Prototypes, design system et tests utilisateurs.", icon: PenTool },
  { n: "04", title: "Développement", desc: "Livraison agile avec démos hebdomadaires.", icon: Hammer },
  { n: "05", title: "Tests", desc: "QA, sécurité et durcissement des performances.", icon: TestTube },
  { n: "06", title: "Déploiement", desc: "CI/CD, monitoring et observabilité.", icon: Rocket },
  { n: "07", title: "Support", desc: "Maintenance et évolutions garanties par SLA.", icon: LifeBuoy },
] as const;

// Technologies — using simpleicons CDN slugs (https://cdn.simpleicons.org/<slug>)
export const techStack = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
  { name: "Angular", slug: "angular", color: "DD0031" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Firebase", slug: "firebase", color: "DD2C00" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "OpenAI", slug: "openai", color: "ffffff" },
  { name: "Go", slug: "go", color: "00ADD8" },
] as const;

// Partenaires & secteurs de confiance
export const partners = [
  { name: "Teranga Group", icon: Landmark },
  { name: "Sahel Foods", icon: ShoppingBag },
  { name: "Dakar FinTech", icon: Banknote },
  { name: "Ministère Digital", icon: Building2 },
  { name: "Université Dakar", icon: GraduationCap },
  { name: "Air Sénégal", icon: Plane },
] as const;

export const faqs = [
  { q: "Combien de temps prend un projet typique ?", a: "Un MVP démarre en 4 à 8 semaines. Une plateforme complète se livre généralement en 3 à 6 mois, avec des démos hebdomadaires pour garder le contrôle." },
  { q: "Travaillez-vous avec des clients hors du Sénégal ?", a: "Oui. Nous accompagnons des startups et entreprises à travers l'Afrique de l'Ouest, l'Europe et l'Amérique du Nord, en français et en anglais." },
  { q: "Quels sont vos tarifs ?", a: "Chaque projet est unique. Après un appel de découverte gratuit, nous proposons un devis transparent au forfait ou en régie selon vos besoins." },
  { q: "Assurez-vous la maintenance après livraison ?", a: "Absolument. Nous proposons des contrats de support avec SLA, monitoring 24/7, évolutions et corrections garanties." },
  { q: "Comment garantissez-vous la sécurité de mes données ?", a: "Toutes nos plateformes sont conçues security-first : chiffrement, audits réguliers, conformité RGPD et bonnes pratiques OWASP." },
  { q: "Puis-je récupérer le code source du projet ?", a: "Oui. Vous êtes pleinement propriétaire du code et de la propriété intellectuelle livrée. Tout est versionné sur votre repo." },
] as const;

export const WHATSAPP_NUMBER = "221770000000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour Creativ-Tech, j'aimerais discuter d'un projet.")}`;
