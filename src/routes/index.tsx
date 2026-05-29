import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { Tech } from "@/components/site/Tech";
import { Partners } from "@/components/site/Partners";
import { Faq } from "@/components/site/Faq";
import { MapSection } from "@/components/site/MapSection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creativ-Tech — Construire le futur digital de l'Afrique" },
      { name: "description", content: "Studio africain d'innovation digitale spécialisé en logiciel, cybersécurité, automatisation IA et transformation digitale. Depuis Dakar, pour le monde." },
      { property: "og:title", content: "Creativ-Tech — Construire le futur digital de l'Afrique" },
      { property: "og:description", content: "Logiciel, cybersécurité, automatisation IA et transformation digitale — pensés à Dakar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Creativ-Tech",
        url: "/",
        slogan: "Solution Digital",
        areaServed: "Africa",
        description: "Studio d'innovation digitale construisant logiciel, cybersécurité et solutions IA pour les entreprises africaines et internationales.",
      }),
    }],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Partners />
      <WhyUs />
      <Process />
      <Tech />
      <Testimonials />
      <Faq />
      <MapSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
