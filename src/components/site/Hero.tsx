import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-dashboard.jpg";
import { WHATSAPP_URL } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 notebook-bg opacity-80 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="container-x relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Studio africain d'innovation digitale
          </div>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Construisons le <span className="text-primary">futur</span>{" "}
            <span className="text-accent">digital</span> de l'Afrique
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            Nous aidons les entreprises à scaler grâce au logiciel, à la cybersécurité, à l'automatisation
            et à l'innovation digitale — pensés depuis Dakar pour le monde.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Démarrer un projet <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="ring-soft overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={hero}
              alt="Tableau de bord Creativ-Tech"
              width={1600}
              height={1000}
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
