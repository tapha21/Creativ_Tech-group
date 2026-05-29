import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Process() {
  return (
    <section id="process" className="border-b border-border bg-card py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Processus" title="De l'idée à la production en 7 étapes" sub="Une hiérarchie claire qui se révèle au fil de votre lecture." />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Central vertical spine */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:hidden" />

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
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
                    className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <div className="relative">
                      <span className="absolute inset-0 -m-2 rounded-full bg-primary/20 blur-sm" />
                      <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary shadow-md">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Card */}
                  <div className={`pl-14 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="inline-block rounded-2xl border border-border bg-background p-5 shadow-sm">
                      <div className="font-display text-xs font-semibold tracking-widest text-accent">ÉTAPE {s.n}</div>
                      <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">{s.desc}</p>
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
