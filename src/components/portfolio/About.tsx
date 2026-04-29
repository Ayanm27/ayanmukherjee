import { Reveal } from "./Reveal";
import { MapPin, GraduationCap, Building2, Clapperboard } from "lucide-react";

const facts = [
  { icon: MapPin, text: "Pune, India" },
  { icon: Building2, text: "Currently: Operations Associate, Globalscope Partners" },
  { icon: Building2, text: "Currently: Brand Consultant, Ferrstron Powertrains" },
  { icon: Clapperboard, text: "Independent Ventures: Matinee Man & After Mark" },
  { icon: GraduationCap, text: "Diploma in Filmmaking, Animation & VFX, Arena Animation (2017–18)" },
  { icon: GraduationCap, text: "B.Com, Kolhan University (2016)" },
];

export const About = () => (
  <section id="about" className="relative py-28 lg:py-40">
    <div className="container mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
      <div>
        <Reveal>
          <span className="section-label">// Who I Am</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-text mt-5 text-4xl sm:text-5xl lg:text-[56px] font-semibold text-foreground">
            One Professional.<br />Two Worlds.<br />Zero Compromise.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 space-y-6 text-text-secondary text-[17px] leading-[1.8] max-w-xl">
            <p>I started with a laptop, a DSLR, and a stubborn need to figure things out on my own.</p>
            <p>No agency training. No corporate hand-holding. Just 200+ clients, real deadlines, and a commitment to delivering work that actually moves the needle.</p>
            <p>Over 13 years, I've worn a lot of hats, and I wear all of them well.</p>
            <p>As a <span className="text-foreground">Creative Director</span>, I've built brand identities, led content teams, directed campaigns, and shaped the visual and narrative language of organisations across industries.</p>
            <p>As an <span className="text-foreground">Operations professional</span>, I've co-founded and run a media company, managed HR and hiring, built internal workflows, handled data, coordinated across global teams, and kept organisations running with precision, behind the scenes.</p>
            <p className="text-foreground">I don't just think in concepts. I think in systems. And I build both.</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <aside className="rounded-2xl border border-border bg-surface p-8 lg:sticky lg:top-28">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Quick Facts</div>
          <ul className="divide-y divide-border">
            {facts.map((f, i) => (
              <li key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0 text-sm text-text-secondary">
                <f.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{f.text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </Reveal>
    </div>
  </section>
);
