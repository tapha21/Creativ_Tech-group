import { whyUs } from "@/lib/site-data";
import { SectionHeader } from "./Services";
import { Check } from "lucide-react";

export function WhyUs() {
  return (
    <section id="about" className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Pourquoi Creativ-Tech" title="Un partenaire startup conçu pour les opérateurs sérieux" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Check className="h-4 w-4" />
              </div>
              <h3 className="font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
