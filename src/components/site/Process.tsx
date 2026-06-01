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
          {/* Ligne verticale centrale - Identique partout désormais */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

          <ul className="space-y-10">
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
                  className="relative grid grid-cols-2 gap-4 sm:gap-10"
                >
                  {/* Pastille Orange Centrée - Identique sur tous les écrans */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
                    className="absolute left-1/2 top-3 z-10 -translate-x-1/2"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                  </motion.div>

                  {/* Bloc de la Carte avec alternance stricte forcée sur mobile */}
                  <div className={`w-full ${left ? "pr-6 sm:pr-12 text-right" : "col-start-2 pl-6 sm:pl-12 text-left"}`}>
                    <div className="inline-block rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-sm text-left w-full">
                      
                      {/* Numéro de l'étape */}
                      <div className="font-display text-[10px] sm:text-xs font-semibold tracking-widest text-primary">
                        ÉTAPE {s.n}
                      </div>
                      
                      <h3 className="mt-1 font-display text-base sm:text-lg font-semibold text-foreground leading-tight">
                        {s.title}
                      </h3>
                      
                      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
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