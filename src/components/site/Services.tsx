import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="relative border-b border-border/40 py-24 lg:py-32 bg-background">
      {/* Touche de lumière en arrière-plan sous la section */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-64 w-full -translate-x-1/2 bg-gradient-to-t from-primary/5 to-transparent blur-3xl" />

      <div className="container-x">
        <SectionHeader 
          eyebrow="Services" 
          title="Tout ce qu'il faut pour digitaliser votre business" 
          sub="Du premier prototype aux plateformes à l'échelle entreprise — un partenaire, une équipe, une stack." 
        />
        
        {/* LA GRILLE DE CARTES METAMORPHOSÉE */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3 shadow-[var(--shadow-soft)]">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col justify-between bg-card p-8 transition-all duration-300 hover:bg-secondary/30"
            >
              {/* Effet visuel interne au survol */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div>
                {/* Icône enveloppée avec style arrondi */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
                  <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                
                {/* Titre & Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                      {s.title}
                    </h3>
                    {"badge" in s && s.badge && (
                      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase text-accent animate-pulse">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Petite flèche dynamique au survol */}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary opacity-0 md:opacity-100" />
                </div>
                
                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-muted-foreground/90">
                  {s.desc}
                </p>
              </div>

              {/* Bouton d'action ergonomique pour chaque carte */}
              <div className="mt-8 pt-4 border-t border-border/10 flex items-center text-xs font-bold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
                  En savoir plus
                </span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* BOUTON DE CONVERSION GLOBAL SOUS LA GRILLE */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-secondary px-6 text-sm font-bold text-foreground border border-border/80 transition-all hover:bg-background hover:border-primary/40 hover:scale-[1.01] shadow-sm"
          >
            Besoin d'un service sur-mesure ? <span className="text-primary font-extrabold">Discutons-en</span> <ArrowRight className="h-4 w-4 text-primary" />
          </a>
        </div>

      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge de Section */}
      <div className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent">
        {eyebrow}
      </div>
      
      {/* Titre de Section */}
      <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
        {title}
      </h2>
      
      {/* Sous-titre */}
      {sub && (
        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
          {sub}
        </p>
      )}
    </div>
  );
}