import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, categories, WHATSAPP_URL } from "@/lib/site-data";
import { SectionHeader } from "./Services";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";

const slides = [
  { src: showcase1, title: "Équipe ingénierie", caption: "Des experts à Dakar, livrant pour le monde." },
  { src: showcase2, title: "Plateformes SaaS", caption: "Des produits modernes, mesurables et scalables." },
  { src: showcase3, title: "Sécurité de pointe", caption: "Une stack durcie, prête pour la production." },
];

function DepthCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  return (
    <div className="relative mx-auto mt-12 max-w-5xl">
      <div className="relative h-[280px] sm:h-[360px] md:h-[440px]" style={{ perspective: "1400px" }}>
        {slides.map((s, k) => {
          const offset = ((k - i + slides.length) % slides.length);
          const pos = offset === 0 ? 0 : offset === 1 ? 1 : -1;
          return (
            <motion.div
              key={k}
              className="absolute inset-0 mx-auto"
              animate={{
                x: pos * 120,
                scale: pos === 0 ? 1 : 0.82,
                rotateY: pos === 0 ? 0 : pos * -18,
                opacity: pos === 0 ? 1 : 0.55,
                zIndex: pos === 0 ? 30 : 10,
                filter: pos === 0 ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="ring-soft mx-auto h-full w-[88%] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <img src={s.src} alt={s.title} className="h-full w-full object-cover" loading="lazy" width={1280} height={800} />
                {pos === 0 && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 text-white">
                    <div className="font-display text-lg font-semibold">{s.title}</div>
                    <div className="text-sm opacity-90">{s.caption}</div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={prev} aria-label="Précédent" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-muted">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/30"}`} />
          ))}
        </div>
        <button onClick={next} aria-label="Suivant" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-muted">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");
  const list = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Sélection de projets" title="De vrais produits. Un vrai impact." sub="Un aperçu des plateformes livrées pour nos clients à travers l'Afrique." />

        <DepthCarousel />

        <div className="mt-14 flex flex-wrap justify-center gap-2">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-card to-accent/10">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-end justify-between p-4">
                    <span className="rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium backdrop-blur">
                      {p.category}
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      p.status === "En ligne" ? "bg-primary/10 text-primary" :
                      p.status === "Bêta" ? "bg-accent/15 text-accent" :
                      "bg-muted-foreground/10 text-muted-foreground"
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 font-display text-5xl font-semibold text-foreground/15">
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
                      <span>Avancement</span><span>{p.progress}%</span>
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
                  <div className="mt-5 flex gap-2 pt-2">
                    <a href="#contact" className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">
                      <Eye className="h-3.5 w-3.5" /> Étude de cas
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium transition-colors hover:bg-muted">
                      Demander <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
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
