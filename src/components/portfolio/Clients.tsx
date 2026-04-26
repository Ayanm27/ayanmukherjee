import { Reveal } from "./Reveal";
import globalscope from "@/assets/logos/globalscope.png";
import wcz from "@/assets/logos/wcz.jpg";
import ferrstron from "@/assets/logos/ferrstron.jpeg";
import rcs from "@/assets/logos/rcs.jpg";
import redbull from "@/assets/logos/redbull.png";
import absli from "@/assets/logos/absli.jpg";
import meta from "@/assets/logos/meta.png";
import carrera from "@/assets/logos/carrera.png";
import veesha from "@/assets/logos/veesha.jpg";

type Brand = { name: string; src: string };

const brands: Brand[] = [
  { name: "Globalscope Partners", src: globalscope },
  { name: "Women's CricZone", src: wcz },
  { name: "Ferrstron Powertrains", src: ferrstron },
  { name: "RCS Advisors", src: rcs },
  { name: "Red Bull", src: redbull },
  { name: "Aditya Birla SunLife Insurance", src: absli },
  { name: "Meta", src: meta },
  { name: "Carrera", src: carrera },
  { name: "Veesha Studios", src: veesha },
];

const row1 = [...brands, ...brands];
const row2 = [...brands.slice().reverse(), ...brands.slice().reverse()];

const Logo = ({ brand }: { brand: Brand }) => (
  <div className="flex items-center justify-center px-8 py-4 mx-3 shrink-0 h-24 w-48">
    <img
      src={brand.src}
      alt={brand.name}
      loading="lazy"
      className="max-h-16 max-w-full w-auto h-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-500"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  </div>
);

export const Clients = () => (
  <section id="clients" className="relative py-28 lg:py-32 overflow-hidden">
    <div className="container mx-auto">
      <Reveal>
        <span className="section-label">// Trusted By</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground max-w-3xl">
          From startups to global networks, brands across industries have trusted me to show up and deliver.
        </h2>
      </Reveal>
    </div>

    <div className="mt-16 space-y-6 marquee-mask">
      <div className="flex w-max animate-marquee-left">
        {row1.map((b, i) => <Logo key={`r1-${i}`} brand={b} />)}
      </div>
      <div className="flex w-max animate-marquee-right">
        {row2.map((b, i) => <Logo key={`r2-${i}`} brand={b} />)}
      </div>
    </div>

    <p className="container mx-auto mt-12 text-center text-sm text-text-muted">
      + 190 more clients served across a decade of independent work.
    </p>
  </section>
);
