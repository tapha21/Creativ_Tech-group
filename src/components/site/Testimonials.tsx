import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);

  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Témoignages" title="La confiance des entreprises modernes" />
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
            <Quote className="h-8 w-8 text-accent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-4 text-balance font-display text-xl leading-relaxed md:text-2xl">
                  «&nbsp;{t.quote}&nbsp;»
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {testimonials.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}`}
                    aria-label={`Aller au témoignage ${k + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} aria-label="Précédent" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={next} aria-label="Suivant" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
