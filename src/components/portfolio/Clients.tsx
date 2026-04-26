import { Reveal } from "./Reveal";

const brands = [
  "Globalscope Partners", "Women's CricZone", "Ferrstron Powertrains",
  "RCS Advisors", "RedBull", "Aditya Birla SunLife Insurance",
  "Meta", "Carrera", "Veesha Studios", "R K Doshi & Co LLP",
];

const row1 = [...brands, ...brands];
const row2 = [...brands.slice().reverse(), ...brands.slice().reverse()];

const Logo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-10 py-6 mx-2 shrink-0">
    <span className="font-display text-xl lg:text-2xl text-foreground/40 hover:text-foreground transition-colors duration-500 whitespace-nowrap">
      {name}
    </span>
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
          From startups to global networks — brands across industries have trusted me to show up and deliver.
        </h2>
      </Reveal>
    </div>

    <div className="mt-16 space-y-6 marquee-mask">
      <div className="flex w-max animate-marquee-left">
        {row1.map((b, i) => <Logo key={`r1-${i}`} name={b} />)}
      </div>
      <div className="flex w-max animate-marquee-right">
        {row2.map((b, i) => <Logo key={`r2-${i}`} name={b} />)}
      </div>
    </div>

    <p className="container mx-auto mt-12 text-center text-sm text-text-muted">
      + 190 more clients served across a decade of independent work.
    </p>
  </section>
);
