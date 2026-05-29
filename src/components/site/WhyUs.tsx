import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { whyUs } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function WhyUs() {
  return (
    <section id="about" className="relative border-b border-border/40 py-24 lg:py-32 bg-background">
      {/* Une lueur d'arrière-plan discrète pour donner du relief */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container-x">
        <SectionHeader 
          eyebrow="Pourquoi Creativ-Tech" 
          title="Un partenaire startup conçu pour les opérateurs sérieux" 
        />
        
        {/* Grille de cartes avec animations */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <motion.div 
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="group relative rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              {/* Petite lueur interne cachée au survol */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Conteneur d'icône arrondi et stylisé */}
              <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
                <Check className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              {/* Titre de l'argument */}
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {w.title}
              </h3>
              
              {/* Description de l'argument */}
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground group-hover:text-muted-foreground/90">
                {w.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}