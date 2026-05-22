import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Creativ-Tech" className="h-8 w-8 object-contain" />
            <span className="font-display text-sm font-semibold tracking-tight">
              CREATIV<span className="text-accent">-</span>TECH
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            L'ingénierie du futur digital de l'Afrique, depuis Dakar.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="Réseau social" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" links={["Logiciel", "Cybersécurité", "UI/UX", "Mobile", "Cloud", "IA"]} />
        <FooterCol title="Entreprise" links={["À propos", "Projets", "Processus", "Carrières", "Contact"]} />
        <FooterCol title="Ressources" links={["Blog", "Études de cas", "Kit presse", "Confidentialité", "Mentions légales"]} />
      </div>

      <div className="container-x mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Creativ-Tech. Tous droits réservés.</p>
        <p>Solution Digital · Dakar, Sénégal</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
