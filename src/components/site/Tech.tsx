import { techStack } from "@/lib/site-data";
import { SectionHeader } from "./Services";

export function Tech() {
  const row = [...techStack, ...techStack];
  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Stack" title="Les technologies de demain, prêtes pour la production" />
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-4 px-6">
          {row.map((t, i) => (
            <div
              key={`${t.slug}-${i}`}
              className="flex h-28 w-44 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card transition-colors hover:bg-muted"
            >
              <img
                src={`https://cdn.simpleicons.org/${t.slug}`}
                alt={t.name}
                width={36}
                height={36}
                className="h-9 w-9"
                loading="lazy"
              />
              <span className="font-display text-sm font-medium text-foreground/80">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
