import { processSteps } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Process() {
  return (
    <section id="process" className="border-b border-border bg-card py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Processus" title="De l'idée à la production en 7 étapes maîtrisées" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-background p-6">
              <div className="font-display text-sm font-semibold text-accent">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
