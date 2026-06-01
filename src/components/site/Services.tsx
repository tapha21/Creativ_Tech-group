import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="relative border-b border-border/40 py-20 lg:py-32 bg-background overflow-hidden">
      {/* Touche de lumière en arrière-plan sous la section */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-64 w-full -translate-x-1/2 bg-gradient-to-t from-accent/5 to-transparent blur-3xl" />

      <div className="container-x">
        <SectionHeader 
          eyebrow="Services" 
          title="Tout ce qu'il faut pour digitaliser votre business" 
          sub="Du premier prototype aux plateformes à l'échelle entreprise — un partenaire, une équipe, une stack." 
        />
        
        {/* LA GRILLE DE CARTES RESPONSIVE (Ajustée de 1 col à 3 cols selon l'écran) */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3 shadow-sm">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col justify-between bg-card p-6 sm:p-8 transition-all duration-300 hover:bg-secondary/30 cursor-pointer"
            >
              {/* Effet visuel interne au survol */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div>
                {/* Icône enveloppée avec style arrondi - Switch sur ton Orange */}
                <div className="mb-5 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-primary/10 bg-accent/10 text-accent transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
                  <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                
                {/* Titre & Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                      {s.title}
                    </h3>
                    {"badge" in s && s.badge && (
                      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[9px] font-extrabold tracking-wide uppercase text-primary">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Petite flèche dynamique au survol */}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary opacity-0 md:opacity-100" />
                </div>
                
                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground group-hover:text-muted-foreground/90">
                  {s.desc}
                </p>
              </div>

              {/* Action interne carte */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-border/10 flex items-center text-xs font-bold text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
                  En savoir plus
                </span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* BOUTON DE CONVERSION GLOBAL SOUS LA GRILLE (Style fluide sur mobile) */}
        <div className="mt-10 sm:mt-14 text-center px-4">
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 flex-wrap rounded-full bg-secondary px-6 py-3 text-xs sm:text-sm font-bold text-foreground border border-border/80 transition-all hover:bg-background hover:border-primary/40 hover:scale-[1.01] shadow-sm"
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
    <div className="mx-auto max-w-3xl text-center px-4">
      {/* Badge de Section */}
      <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary">
        {eyebrow}
      </div>
      
      {/* Titre de Section adaptatif */}
      <h2 className="text-balance font-display text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground leading-tight">
        {title}
      </h2>
      
      {/* Sous-titre adaptatif */}
      {sub && (
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-balance text-xs sm:text-base leading-relaxed text-muted-foreground">
          {sub}
        </p>
      )}
    </div>
  );
}