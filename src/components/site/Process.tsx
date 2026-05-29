import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Process() {
  return (
    <section id="process" className="border-b border-border bg-card py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader 
          eyebrow="Processus" 
          title="De l'idée à la production en 7 étapes" 
          sub="Une hiérarchie claire qui se révèle au fil de votre lecture." 
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Ligne verticale centrale - Desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          
          {/* Ligne verticale latérale - Mobile */}
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border md:hidden" />

          <ul className="space-y-10 md:space-y-14">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              const left = i % 2 === 0;
              
              return (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Pastille Orange Simple & Solide avec l'animation Spring d'origine */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
                    className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    {/* Fond orange uni, icône blanche, aucun reflet/flou */}
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                  </motion.div>

                  {/* Bloc de la Carte avec l'alignement d'origine */}
                  <div className={`pl-14 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="inline-block rounded-2xl border border-border bg-background p-5 shadow-sm text-left w-full max-w-md">
                      
                      {/* Numéro de l'étape - Texte Orange */}
                      <div className="font-display text-xs font-semibold tracking-widest text-primary">
                        ÉTAPE {s.n}
                      </div>
                      
                      <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                        {s.title}
                      </h3>
                      
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                      
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}