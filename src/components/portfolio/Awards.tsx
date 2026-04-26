import { Reveal } from "./Reveal";
import { Trophy } from "lucide-react";

const awards = [
  { title: "e4m Awards 2024", category: "Best Sports Video of the Year", project: "WPL 2024 Campaign, Women's CricZone", source: "Exchange4Media | National Recognition" },
  { title: "e4m Awards 2024", category: "Best Sports Series or Channel", project: "Women's CricZone", source: "Exchange4Media | National Recognition" },
];

export const Awards = () => (
  <section id="awards" className="relative py-28 lg:py-40 border-t border-border">
    <div className="container mx-auto">
      <Reveal>
        <span className="section-label" style={{ color: "hsl(var(--gold))" }}>// Recognition</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground max-w-2xl">
          Work that doesn't just get noticed.<br />Work that gets awarded.
        </h2>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {awards.map((a, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative">
              {/* Radial glow */}
              <div className="absolute -inset-6 rounded-3xl opacity-60 pointer-events-none" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative rounded-2xl border border-border bg-surface p-8 lg:p-10 border-t-[3px] border-t-gold">
                <Trophy className="h-8 w-8 text-gold" />
                <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gold font-medium">{a.title}</div>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl font-semibold text-foreground">{a.category}</h3>
                <p className="mt-3 text-text-secondary">{a.project}</p>
                <p className="mt-6 text-xs text-text-muted">{a.source}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
