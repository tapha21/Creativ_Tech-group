import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { faqs, WHATSAPP_URL } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Faq() {
  return (
    <section id="faq" className="border-b border-border/40 py-24 lg:py-32 bg-background">
      <div className="container-x">
        <SectionHeader 
          eyebrow="Foire aux questions" 
          title="Tout ce que vous devez savoir" 
          sub="Vous ne trouvez pas votre réponse ? Écrivez-nous directement sur WhatsApp." 
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[1fr_2fr]">
          
          {/* Encadré d'appel à l'action direct */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-8 h-fit lg:sticky lg:top-28">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-primary/10 text-primary">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">Une question précise ?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Notre équipe vous répond généralement en moins d'une heure pendant les jours ouvrés.
              </p>
            </div>
            
            {/* Bouton WhatsApp Premium Arrondi */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20ba59] hover:scale-[1.02] w-full"
            >
              <MessageCircle className="h-4 w-4 fill-current" /> Discuter sur WhatsApp
            </a>
          </div>

          {/* Grille des questions / accordéons */}
          <Accordion type="single" collapsible defaultValue="item-0" className="rounded-2xl border border-border/70 bg-card overflow-hidden p-2 shadow-sm">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/40 last:border-0">
                <AccordionTrigger className="px-5 py-4 text-left font-display text-sm font-bold text-foreground hover:bg-secondary/20 hover:no-underline rounded-xl transition-all">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-1 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
        </div>
      </div>
    </section>
  );
}