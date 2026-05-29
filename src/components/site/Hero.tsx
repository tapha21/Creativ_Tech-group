import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-dashboard.jpg";
import { WHATSAPP_URL } from "@/lib/site-data";

export function Hero() {
  // Variantes d'animation pour une apparition en cascade (staggered effect)
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
      <div className="absolute top-1/3 left-1/3 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />

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
            Agence africain d'innovation digitale
          </motion.div>

          {/* Titre principal */}
          <motion.h1 
            variants={itemVariants}
            className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
          >
            Construisons le <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">futur</span>{" "}
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
            {/* CTA Principal */}
            <a
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary-deep hover:scale-[1.02] sm:w-auto"
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
              {/* Point de notification clignotant spécifique à WhatsApp */}
              <span className="absolute top-1 right-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
              
              <MessageCircle className="h-4 w-4 text-[#25D366] transition-transform group-hover:scale-110 fill-[#25D366]/10 group-hover:fill-[#25D366]/20" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>

        {/* MAQUETTE DU TABLEAU DE BORD (MOCKUP INTERFACE) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-5xl md:mt-20 lg:mt-24"
        >
          <div className="group relative rounded-2xl border border-border/60 bg-card p-2 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl">
            {/* Lueur arrière au survol de la maquette */}
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Barre de contrôle style navigateur web */}
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40 bg-secondary/30 rounded-t-xl">
              <div className="h-2.5 w-2.5 rounded-full bg-border" />
              <div className="h-2.5 w-2.5 rounded-full bg-border" />
              <div className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>

            {/* Zone Image */}
            <div className="overflow-hidden rounded-b-xl bg-secondary/10">
              <img
                src={hero}
                alt="Tableau de bord de solutions développé par Creativ-Tech"
                width={1600}
                height={1000}
                loading="eager"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}