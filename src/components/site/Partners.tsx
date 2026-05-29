import { motion } from "framer-motion";
import { partners } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Partners() {
  return (
    <section className="border-b border-border bg-card py-20 lg:py-24">
      <div className="container-x">
        <SectionHeader eyebrow="Partenaires" title="La confiance d'entreprises modernes" sub="Des organisations qui nous font confiance pour bâtir leur futur digital." />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-5 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-sm font-medium text-foreground/80">{p.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
