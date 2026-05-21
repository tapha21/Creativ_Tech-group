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
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creativ-Tech — Building Africa's Digital Future" },
      { name: "description", content: "African digital innovation studio specialized in software, cybersecurity, AI automation and digital transformation. From Dakar, for the world." },
      { property: "og:title", content: "Creativ-Tech — Building Africa's Digital Future" },
      { property: "og:description", content: "Software, cybersecurity, AI automation and digital transformation — engineered in Dakar." },
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
        description: "Digital innovation studio building software, cybersecurity and AI solutions for African and international businesses.",
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
      <WhyUs />
      <Process />
      <Tech />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
