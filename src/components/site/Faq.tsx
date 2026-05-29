import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { faqs, WHATSAPP_URL } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Faq() {
  return (
    <section id="faq" className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Foire aux questions" title="Tout ce que vous devez savoir" sub="Vous ne trouvez pas votre réponse ? Écrivez-nous directement sur WhatsApp." />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">Une question précise ?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Notre équipe vous répond généralement en moins d'une heure pendant les jours ouvrés.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-md bg-[#25D366] px-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Discuter sur WhatsApp
            </a>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="rounded-2xl border border-border bg-card px-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-4 text-left font-display text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground">
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
