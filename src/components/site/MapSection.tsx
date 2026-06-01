import { MapPin, Navigation, Clock } from "lucide-react";
import { SectionHeader } from "./Services";

export function MapSection() {
  return (
    <section id="location" className="border-b border-border bg-card py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Nous trouver" title="Au cœur de Dakar, ouverts sur le monde" sub="Passez nous voir, ou organisons un appel — comme vous préférez." />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-3 ">
            <InfoTile icon={<MapPin className="h-4 w-4 " />} title="Adresse" value="hlm grand yoff, Dakar, Sénégal" />
            <InfoTile icon={<Clock className="h-4 w-4" />} title="Horaires" value="Lun – Ven · 8h – 17h" />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Dakar,Senegal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Navigation className="h-4 w-4" /> Itinéraire Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <iframe
              title="Localisation Creativ-Tech — Dakar"
              src="https://www.google.com/maps?q=Dakar,Senegal&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-accent">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
