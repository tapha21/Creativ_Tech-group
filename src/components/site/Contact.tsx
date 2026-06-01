import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { SectionHeader } from "./Services";
import { WHATSAPP_URL } from "@/lib/site-data";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Contact" title="Construisons ce qui vient ensuite" sub="Parlez-nous de votre projet — nous répondons sous un jour ouvré." />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-3">
            <InfoCard icon={<Mail className="h-4 w-4" />} title="Email" value="hello@creativ-tech.io" />
            <InfoCard icon={<Phone className="h-4 w-4" />} title="Téléphone" value="+221 77 000 00 00" />
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <InfoCard icon={<MessageCircle className="h-4 w-4" />}
               title="WhatsApp" value="Discutez avec nous instantanément" accent />
            </a>
            <InfoCard icon={<MapPin className="h-4 w-4" />} title="Bureau" value="Dakar, Sénégal" />
            <div className="h-48 overflow-hidden rounded-xl border border-border bg-muted notebook-bg" />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nom" name="name" placeholder="Awa Diop" />
              <Field label="Email" name="email" type="email" placeholder="vous@entreprise.com" />
              <Field label="Téléphone" name="phone" placeholder="+221 ..." />
              <Field label="Entreprise" name="company" placeholder="Acme Inc." />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Service</label>
              <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                <option>Développement Logiciel</option>
                <option>Cybersécurité</option>
                <option>UI/UX Design</option>
                <option>Développement Mobile</option>
                <option>Solutions Cloud</option>
                <option>IA & Automatisation</option>
                <option>Conseil IT</option>
                <option>Branding & Identité</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Détails du projet</label>
              <textarea rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Décrivez vos objectifs, votre calendrier et vos contraintes." />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {sent ? "Message envoyé — réponse rapide" : (<>Envoyer le message <Send className="h-4 w-4" /></>)}
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, accent }: { icon: React.ReactNode; title: string; value: string; accent?: boolean }) {
  return (
    <div className={`flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/40 ${accent ? "border-accent/40" : ""}`}>
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${accent ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent"}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder}
        className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40" />
    </div>
  );
}
