import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, categories, WHATSAPP_URL } from "@/lib/site-data";
import { SectionHeader } from "./Services";
import showcase1 from "@/assets/showcase-2.jpg";
import showcase2 from "@/assets/creativ_park.png";
import showcase3 from "@/assets/CRM.png";

const slides = [
  { src: showcase1, title: "Plateformes SaaS", caption: "Des produits modernes, mesurables et scalables." },
  { src: showcase2, title: "CRM pour la gestion de parking", caption: "Des produits modernes, mesurables et scalables." },
  { src: showcase3, title: "CRM pour la gestion global de vos activites ", caption: "Une stack durcie, prête pour la production pour avoir une vue global sur lensemble de vos activites" },
];

function DepthCarousel() {
  const [i, setI] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  return (
    <div className="relative mx-auto mt-12 max-w-4xl w-full px-2 sm:px-4">
      {/* Zone d'affichage du Carrousel Épuré - Adapté aux hauteurs mobiles */}
      <div className="relative h-[280px] sm:h-[340px] md:h-[400px]" style={{ perspective: "1200px" }}>
        {slides.map((s, k) => {
          const offset = ((k - i + slides.length) % slides.length);
          const pos = offset === 0 ? 0 : offset === 1 ? 1 : -1;
          
          return (
            <motion.div
              key={k}
              className="absolute inset-0 mx-auto w-full"
              animate={{
                // Déplacement horizontal réduit sur mobile (30px au lieu de 80px) pour éviter le débordement d'écran
                x: pos * (isMobile ? 30 : 80),
                scale: pos === 0 ? 1 : 0.85,
                rotateY: pos === 0 ? 0 : pos * -12,
                opacity: pos === 0 ? 1 : 0.4,
                zIndex: pos === 0 ? 30 : 10,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative mx-auto h-full w-[88%] sm:w-[90%] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg">
                <img src={s.src} alt={s.title} className="h-full w-full object-cover" loading="lazy" width={1280} height={800} />
                
                {pos === 0 && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 text-white">
                    <div className="font-display text-sm font-bold sm:text-base md:text-lg text-balance">{s.title}</div>
                    <div className="text-[11px] opacity-90 sm:text-xs md:text-sm mt-0.5 line-clamp-2">{s.caption}</div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Boutons de contrôle et indicateurs */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
        <button 
          onClick={prev} 
          aria-label="Précédent" 
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card text-foreground transition-colors hover:bg-secondary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, k) => (
            <button 
              key={k} 
              onClick={() => setI(k)} 
              aria-label={`Slide ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}`} 
            />
          ))}
        </div>

        <button 
          onClick={next} 
          aria-label="Suivant" 
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card text-foreground transition-colors hover:bg-secondary"
        >
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
    <section id="projects" className="border-b border-border/40 py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container-x">
        <SectionHeader 
          eyebrow="Sélection de projets" 
          title="De vrais produits. Un vrai impact." 
          sub="Un aperçu des plateformes livrées pour nos clients à travers l'Afrique." 
        />

        {/* Section Carrousel */}
        <DepthCarousel />

        {/* Filtres de catégories - Scroll horizontal fluide sur mobile si débordement */}
        <div className="mt-12 sm:mt-16 flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`h-9 rounded-full border px-4 text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                filter === c
                  ? "border-accent bg-accent text-primary-foreground shadow-sm"
                  : "border-border/80 bg-card text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grille d'articles animée - Passage automatique de 1 à 3 colonnes */}
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md w-full"
              >
                {/* Zone d'en-tête visuelle de l'article */}
                <div className="relative h-40 overflow-hidden border-b border-border/40 bg-secondary/20">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  
                  {/* Tags d'informations sur l'image */}
                  <div className="absolute inset-0 flex items-end justify-between p-4 z-10 gap-2">
                    <span className="rounded-full border border-border bg-background/90 px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase text-muted-foreground backdrop-blur-sm truncate max-w-[120px]">
                      {p.category}
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase shrink-0 ${
                      p.status === "En ligne" ? "bg-primary/10 text-primary" :
                      p.status === "Bêta" ? "bg-amber-500/10 text-amber-600 dark:text-amber-500" :
                      "bg-muted-foreground/10 text-muted-foreground"
                    }`}>
                      {p.status}
                    </span>
                  </div>

                  {/* Initiales en arrière-plan épurées */}
                  <div className="absolute left-4 top-2 font-display text-6xl font-black text-foreground/[0.04] uppercase select-none">
                    {p.title.slice(0, 2)}
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex-1">
                    <h3 className="font-display text-base font-bold text-foreground transition-colors group-hover:text-primary leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-[11px] font-medium text-muted-foreground/80 mt-0.5">{p.client}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.description}</p>
                  </div>

                  {/* Liste des technologies (Rounded-full) */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-secondary/60 border border-border/30 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Jauge d'avancement Orange */}
                  <div className="mt-6">
                    <div className="mb-1.5 flex justify-between text-[11px] font-medium text-muted-foreground">
                      <span>Déploiement</span>
                      <span className="font-bold text-foreground">{p.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>

                  {/* Actions de bas de carte */}
                  <div className="mt-6 flex gap-2 border-t border-border/10 pt-4">
                    <a 
                      href="#contact" 
                      className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 text-xs font-bold text-primary-foreground transition-all hover:bg-primary-deep whitespace-nowrap"
                    >
                      <Eye className="h-3.5 w-3.5" /> Voir le cas
                    </a>
                    <a 
                      href={WHATSAPP_URL} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex h-9 items-center justify-center gap-1 rounded-full border border-border bg-background px-3.5 text-xs font-bold text-foreground transition-colors hover:bg-secondary whitespace-nowrap"
                    >
                      Détails <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
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