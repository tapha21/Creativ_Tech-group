import { motion } from "framer-motion";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Services" title="Tout ce qu'il faut pour digitaliser votre business" sub="Du premier prototype aux plateformes à l'échelle entreprise — un partenaire, une équipe, une stack." />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="group relative bg-card p-7 transition-colors hover:bg-muted/40"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">{s.title}</h3>
                {"badge" in s && s.badge && (
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                    {s.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</div>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-balance text-muted-foreground">{sub}</p>}
    </div>
  );
}
