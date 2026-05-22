import { techStack } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Tech() {
  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Stack" title="Les technologies de demain, prêtes pour la production" />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 md:grid-cols-5">
          {techStack.map((t) => (
            <div key={t} className="flex h-24 items-center justify-center bg-card font-display text-sm font-medium text-foreground/80 transition-colors hover:bg-muted">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
