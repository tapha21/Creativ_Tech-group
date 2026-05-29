import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, MessageCircle, ArrowUpRight } from "lucide-react";
// Correction : Importation sous forme d'image standard (ex: .png ou .svg) pour éviter les bugs liés au .pdf
import logo from "@/assets/logo.png"; 
import { WHATSAPP_URL } from "@/lib/site-data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#process", label: "Processus" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ct-theme");
    const prefersDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
    
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("ct-theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "border-b border-border/40 bg-background/70 backdrop-blur-md shadow-[var(--shadow-soft)] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        
        {/* LOGO & NOM DE L'AGENCE */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-secondary transition-transform group-hover:scale-105">
            <img src={logo} alt="Creativ-Tech" className="h-6 w-6 object-contain" />
          </div>
          <span className="font-display text-[15px] font-bold tracking-wider uppercase text-foreground">
            CREATIV<span className="text-primary font-black animate-pulse">.</span>TECH
          </span>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden items-center gap-1 rounded-full border border-border/40 bg-secondary/20 p-1.5 backdrop-blur-sm md:flex">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:bg-background hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ENSEMBLE DES BOUTONS D'ACTION */}
        <div className="flex items-center gap-2">
          
          {/* Bouton Thème */}
          <button
            aria-label="Changer le thème"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            {dark ? <Sun className="h-[18px] w-[18px] text-yellow-500" /> : <Moon className="h-[18px] w-[18px] text-primary" />}
          </button>
          
          
          {/* Bouton CTA Principal */}
          <a
            href="#contact"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-primary px-5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary-deep hover:scale-[1.02] md:inline-flex"
          >
            Démarrer un projet <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          
          {/* Bouton Menu Burger Mobile */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu de navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* NAVIGATION INTERFACE MOBILE */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-card px-6 py-6 shadow-xl animate-in slide-in-from-top-5 duration-200 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            
            {/* Boutons d'Appels à l'action sur Mobile */}
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border/60 pt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] text-xs font-bold text-white shadow-sm"
              >
                <MessageCircle className="h-4 w-4 fill-current" /> WhatsApp
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md"
              >
                Créer mon projet
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}