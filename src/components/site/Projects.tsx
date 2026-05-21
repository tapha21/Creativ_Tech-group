import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Selected Work" title="Real products. Real impact." sub="A glimpse of platforms we've shipped for clients across Africa." />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`h-9 rounded-full border px-4 text-sm transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative h-44 overflow-hidden border-b border-border bg-muted dot-bg">
                  <div className="absolute inset-0 flex items-end justify-between p-4">
                    <span className="rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium backdrop-blur">
                      {p.category}
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      p.status === "Live" ? "bg-primary/10 text-primary" :
                      p.status === "Beta" ? "bg-accent/15 text-accent" :
                      "bg-muted-foreground/10 text-muted-foreground"
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 font-display text-4xl font-semibold text-foreground/10">
                    {p.title.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.client}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5">
                    <div className="mb-1.5 flex justify-between text-[11px] text-muted-foreground">
                      <span>Completion</span><span>{p.progress}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
