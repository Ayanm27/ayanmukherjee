import { useEffect } from "react";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Clients } from "@/components/portfolio/Clients";
import { Awards } from "@/components/portfolio/Awards";
import { Skills } from "@/components/portfolio/Skills";
import { MatineeMan } from "@/components/portfolio/MatineeMan";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.title = "Ayan Mukherjee, Creative Director, Strategist & Operations";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Ayan Mukherjee, Creative Director, Content Strategist & Operations Professional based in Pune, India. 13+ years, 200+ clients, 2 national media awards."
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://ayanmukherjee.in/");

    // JSON-LD Person
    const ldId = "ayan-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = ldId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ayan Mukherjee",
      jobTitle: "Creative Director, Content Strategist & Operations Professional",
      url: "https://ayanmukherjee.in/",
      address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
      sameAs: ["https://linkedin.com/in/ayanm27"],
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Experience />
        <Clients />
        <Awards />
        <Skills />
        <MatineeMan />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
