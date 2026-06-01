import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, MessageCircle, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logoV2.png"; 
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
          ? "border-b border-border/40 bg-background/80 backdrop-blur-md shadow-sm py-2.5" 
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        
        {/* LOGO DE L'AGENCE (Taille responsive et propre) */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center transition-transform group-hover:scale-102">
            <img src={logo} alt="Creativ-Tech" className="h-full w-full object-contain" />
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden items-center gap-1 rounded-full border border-border/40 bg-secondary/20 p-1.5 backdrop-blur-sm md:flex">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="rounded-full px-4 py-1.5 text-xs font-bold text-muted-foreground transition-all hover:bg-background hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ENSEMBLE DES BOUTONS D'ACTION (Équilibrés tout écran) */}
        <div className="flex items-center gap-2">
          
          {/* Bouton Mode Sombre / Lumineux */}
          <button
            aria-label="Changer le thème"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card text-foreground transition-colors hover:bg-secondary"
          >
            {dark ? <Sun className="h-[18px] w-[18px] text-amber-500" /> : <Moon className="h-[18px] w-[18px] text-primary" />}
          </button>
          
          {/* Bouton CTA Principal - Visible dès les tablettes et PCs */}
          <a
            href="#contact"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-primary px-5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:scale-[1.02] sm:inline-flex"
          >
            Démarrer un projet <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          
          {/* Bouton Menu Burger Mobile - Visible uniquement sous MD */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* NAVIGATION INTERFACE MOBILE (Totalement Responsive & Fluide) */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-border/50 bg-background/95 backdrop-blur-md px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-muted-foreground transition-all hover:bg-secondary/40 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            
            {/* Grille d'appel à l'action sur Mobile (Bouton d'angle rond premium) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-border/40 pt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] text-xs font-bold text-white shadow-sm hover:bg-[#20ba59] transition-colors w-full"
              >
                <MessageCircle className="h-4 w-4 fill-current" /> Échanger sur WhatsApp
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity w-full"
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