import { Reveal } from "./Reveal";
import { Play, Film } from "lucide-react";

export const MatineeMan = () => (
  <section className="relative py-28 lg:py-40 border-t border-border">
    <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <Reveal>
          <span className="section-label">// Beyond The Brief</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground">
            When I'm not directing brands,<br />I'm dissecting Bollywood.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 space-y-5 text-text-secondary text-[17px] leading-relaxed">
            <p>
              <span className="text-foreground font-medium">Matinee Man</span> is my independent YouTube channel — where I break down the economics, storytelling, and cultural impact of Indian cinema.
            </p>
            <p className="text-foreground">In the first 6 months:</p>
            <ul className="space-y-2 text-text-secondary">
              <li>→ <span className="text-foreground">2.5 Million+</span> views generated</li>
              <li>→ <span className="text-foreground">1,000+</span> subscribers</li>
              <li>→ Monetized — crossing <span className="text-foreground">4,000 watch hours</span></li>
            </ul>
            <p className="italic">Cinema taught me to think in stories. That instinct is what I bring to every brand I work with.</p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "hsl(var(--youtube))" }}
          >
            <Play className="h-4 w-4 fill-current" />
            Watch on YouTube →
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-[#0E0E0E] group cursor-hover">
          {/* Film frame aesthetic — sprocket holes */}
          <div className="absolute inset-y-0 left-0 w-6 flex flex-col justify-around py-4 bg-black/60 border-r border-border">
            {Array.from({ length: 8 }).map((_, i) => <span key={i} className="block w-3 h-3 mx-auto rounded-sm bg-foreground/10" />)}
          </div>
          <div className="absolute inset-y-0 right-0 w-6 flex flex-col justify-around py-4 bg-black/60 border-l border-border">
            {Array.from({ length: 8 }).map((_, i) => <span key={i} className="block w-3 h-3 mx-auto rounded-sm bg-foreground/10" />)}
          </div>

          {/* Background blur film still */}
          <div className="absolute inset-x-6 inset-y-0 flex items-center justify-center">
            <Film className="h-40 w-40 text-foreground/5" strokeWidth={0.6} />
          </div>

          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative inline-flex items-center justify-center w-24 h-24 rounded-full text-foreground transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: "hsl(var(--youtube))", boxShadow: "0 0 60px hsl(var(--youtube) / 0.5)" }}
            >
              <Play className="h-10 w-10 fill-current ml-1" />
            </span>
          </div>

          <div className="absolute bottom-4 left-10 right-10 flex justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            <span>Scene 04</span>
            <span>Matinee Man · Take 01</span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
