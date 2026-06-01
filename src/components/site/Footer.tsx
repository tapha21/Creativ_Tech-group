import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, MessageSquare, Mail, MapPin, Shield, FileText } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Liens de navigation structurés
  const navigationLinks = [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#projects" },
    { label: "Processus", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-4 w-4" />, href: "https://twitter.com", label: "X / Twitter" },
    { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="relative border-t border-border/40 bg-background pt-16 pb-8 overflow-hidden">
      {/* Grille de fond subtile pour le côté Tech */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      
      {/* Effet de dégradé lumineux en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        
        {/* SECTION SUPÉRIEURE : Grille Principale */}
        <div className="grid grid-cols-1 gap-10 pb-12 border-b border-border/40 md:grid-cols-12 md:gap-8">
          
          {/* Colonne 1 : Brand & Description (Prend 5 colonnes sur grand écran) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-black text-sm shadow-sm transition-transform group-hover:scale-105">
                C
              </div>
              <span className="font-display text-lg font-black tracking-tight text-foreground">
                CREATIV_<span className="text-accent">TECH</span>
              </span>
            </a>
            
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Nous concevons et développons des produits numériques sur-mesure, scalables et performants pour propulser la croissance des entreprises en Afrique.
            </p>

            {/* Informations de contact rapides */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Dakar, Sénégal</span>
              </div>
              <a href="mailto:contact@nextgen.sn" className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors w-fit">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>contact@creativ_tech.sn</span>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens de Navigation (Prend 3 colonnes) */}
          <div className="md:col-span-3 sm:col-span-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-0.5 translate-x-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Newsletter / Call to Action (Prend 4 colonnes) */}
          <div className="md:col-span-4 sm:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
                Restons connectés
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Rejoignez-nous pour suivre l'évolution de la tech et nos derniers lancements de produits.
              </p>
            </div>

            {/* Formulaire Newsletter épuré */}
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex w-full max-w-sm items-center gap-1.5 rounded-full border border-border bg-card p-1 shadow-inner focus-within:border-primary/40 transition-colors">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full bg-transparent px-4 py-1.5 text-xs text-foreground placeholder-muted-foreground outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary-deep"
              >
                S'abonner
              </button>
            </form>
          </div>

        </div>

        {/* SECTION INFÉRIEURE : Copyright, Réseaux & Mentions */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Copyright */}
          <div className="text-xs text-muted-foreground order-3 sm:order-1 text-center sm:text-left">
            © 2026 Creativ_Tech. Tous droits réservés.
          </div>

          {/* Liens de documentations juridiques */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-2 text-xs text-muted-foreground">
            <a href="#privacy" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              <Shield className="h-3 w-3 opacity-70" /> Confidentialité
            </a>
            <a href="#terms" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              <FileText className="h-3 w-3 opacity-70" /> Mentions légales
            </a>
          </div>

          {/* Réseaux Sociaux & CTA Direct */}
          <div className="flex items-center justify-center gap-3 order-1 sm:order-3">
            {/* Boutons Sociaux Icônes Circulaires */}
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-card text-muted-foreground transition-all hover:border-primary/30 hover:bg-secondary hover:text-foreground"
              >
                {social.icon}
              </a>
            ))}

            {/* Séparateur vertical discret */}
            <div className="h-4 w-px bg-border/60 mx-1Hidden sm:block hidden sm:block" />

            {/* Bouton WhatsApp direct */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-3 text-xs font-bold text-accent hover:bg-accent/20 transition-all shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Discuter
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}