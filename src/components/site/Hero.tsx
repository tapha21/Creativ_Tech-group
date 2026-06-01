import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

// Importation de tes 3 images
import showcase1 from "@/assets/hero-dashboard.jpg";
import showcase2 from "@/assets/hero2.png";
import showcase3 from "@/assets/hero3.png";

const heroSlides = [
  { src: showcase1, alt: "Interface de gestion et d'ingénierie" },
  { src: showcase2, alt: "Plateforme SaaS moderne et scalable" },
  { src: showcase3, alt: "Système sécurisé et optimisé" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fonction pour relancer le défilement automatique
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    stopTimer();
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroSlides.length);
    startTimer();
  };

  // Variantes pour la transition des images du carrousel
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background py-12 md:py-20 lg:py-24">
      {/* Grille de fond et lumières diffuses (Glow Effects) */}
      <div className="absolute inset-0 notebook-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]" />
      <div className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] md:h-96 md:w-96" />

      <div className="container-x relative z-10">
        
        {/* EN-TÊTE DU HERO */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge de présentation */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Agence Sénégalaise d'innovation digitale
          </motion.div>

          {/* Titre principal avec touches Orange */}
          <motion.h1 
            variants={itemVariants}
            className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
          >
            Construisons le <span className="text-accent">futur</span>{" "}
            <span className="text-accent">digital</span> de l'Afrique
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
          >
            Nous aidons les entreprises à scaler grâce au logiciel, à la cybersécurité, 
            à l'automatisation et à l'innovation digitale — pensés depuis Dakar pour le monde.
          </motion.p>

          {/* BOUTONS D'APPEL À L'ACTION */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
          >
            {/* CTA Principal - Orange */}
            <a
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:scale-[1.02] sm:w-auto"
            >
              Démarrer un projet <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* CTA WhatsApp Premium */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full border border-border bg-card px-7 text-sm font-bold text-foreground shadow-sm transition-all hover:bg-secondary hover:border-[#25D366]/40 sm:w-auto"
            >
              <span className="absolute top-1 right-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
              
              <MessageCircle className="h-4 w-4 text-[#25D366] transition-transform group-hover:scale-110 fill-[#25D366]/10" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>

        {/* ZONE DU CARROUSEL FORMAT MOCKUP (TABLEAU DE BORD) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-5xl md:mt-20 lg:mt-24"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          <div className="group/mockup relative rounded-2xl border border-border/70 bg-card p-2 shadow-xl transition-all duration-300">
            
            {/* Barre de contrôle supérieure style navigateur web */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-border/50 bg-secondary/30 rounded-t-xl">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>
              <div className="text-[10px] text-muted-foreground font-mono bg-background/50 px-4 py-0.5 rounded border border-border/30 hidden sm:block">
                 CRM & dashboard
              </div>
              <div className="w-10" />
            </div>

            {/* Zone d'affichage des images animées */}
            <div className="relative overflow-hidden rounded-b-xl bg-secondary/10 aspect-[16/10] w-full">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={heroSlides[current].src}
                    alt={heroSlides[current].alt}
                    width={1600}
                    height={1000}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Flèches de navigation (Visibles au survol sur Desktop, toujours accessibles) */}
              <button
                onClick={handlePrev}
                aria-label="Image précédente"
                className="absolute left-3 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-all opacity-0 group-hover/mockup:opacity-100 max-md:opacity-100 hover:bg-background"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Image suivante"
                className="absolute right-3 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-all opacity-0 group-hover/mockup:opacity-100 max-md:opacity-100 hover:bg-background"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Lignes indicatrices du carrousel en bas de la boîte */}
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    stopTimer();
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                    startTimer();
                  }}
                  aria-label={`Aller à la slide ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}