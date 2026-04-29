import { Reveal } from "./Reveal";
import { Play } from "lucide-react";
import matineeChannel from "@/assets/matinee-man-channel.png";

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
              <span className="text-foreground font-medium">Matinee Man</span> is my independent YouTube channel, where I break down the economics, storytelling, and cultural impact of Indian cinema.
            </p>
            <p className="text-foreground">In the first 6 months:</p>
            <ul className="space-y-2 text-text-secondary">
              <li>→ <span className="text-foreground">2.5 Million+</span> views generated</li>
              <li>→ <span className="text-foreground">1,000+</span> subscribers</li>
              <li>→ Monetized, crossing <span className="text-foreground">4,000 watch hours</span></li>
            </ul>
            <p className="italic">Cinema taught me to think in stories. That instinct is what I bring to every brand I work with.</p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="https://www.youtube.com/@MatineeManOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            style={{
              backgroundColor: "hsl(var(--youtube))",
              boxShadow: "0 10px 40px -8px hsl(var(--youtube) / 0.7), inset 0 1px 0 0 hsl(0 0% 100% / 0.25)",
            }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: "linear-gradient(110deg, transparent, hsl(0 0% 100% / 0.35), transparent)" }} />
            <Play className="h-4 w-4 fill-current relative" />
            <span className="relative">Watch on YouTube</span>
            <span aria-hidden className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="relative">
          {/* Ambient red glow halo */}
          <div
            className="absolute -inset-10 rounded-[2rem] blur-3xl opacity-60 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--youtube) / 0.45), transparent 70%)" }}
          />

          {/* Floating subscriber chip */}
          <div className="absolute -top-5 -left-4 z-20 hidden sm:flex items-center gap-2 rounded-full bg-background/90 border border-border backdrop-blur-md px-4 py-2 shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.8)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "hsl(var(--youtube))" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "hsl(var(--youtube))" }} />
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/80 font-medium">Live Channel</span>
          </div>

          {/* Floating views chip */}
          <div className="absolute -bottom-5 -right-4 z-20 hidden sm:block rounded-2xl bg-background/90 border border-border backdrop-blur-md px-5 py-3 shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.8)]">
            <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted">6 Months</div>
            <div className="font-display text-2xl font-semibold text-gradient-vibrant leading-none mt-1">2.5M+ <span className="text-sm text-text-secondary font-normal">views</span></div>
          </div>

          {/* Film-frame container */}
          <a
            href="https://www.youtube.com/@MatineeManOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-2xl overflow-hidden border border-border bg-[#0E0E0E] group cursor-hover"
            style={{ boxShadow: "0 30px 80px -20px hsl(var(--youtube) / 0.4), 0 0 0 1px hsl(0 0% 100% / 0.04) inset" }}
          >
            {/* Top sprocket strip */}
            <div className="flex items-center justify-between bg-black/80 border-b border-border px-4 py-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--youtube))]" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 font-mono">REC ● 4K · 24FPS</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 font-mono">@MatineeManOfficial</div>
            </div>

            {/* Video area */}
            <div className="relative aspect-video">
              <img
                src={matineeChannel}
                alt="Matinee Man YouTube channel"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />

              {/* Cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:from-black/60 transition-colors duration-700" />
              <div className="absolute inset-0 mix-blend-color opacity-60" style={{ background: "linear-gradient(135deg, hsl(var(--youtube) / 0.3), transparent 50%, hsl(217 91% 60% / 0.2))" }} />

              {/* Letterbox bars */}
              <div className="absolute top-0 inset-x-0 h-6 bg-black" />
              <div className="absolute bottom-0 inset-x-0 h-6 bg-black" />

              {/* Grain */}
              <div
                className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />

              {/* Scan lines */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px)" }} />

              {/* Big play button with ripple */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute w-28 h-28 lg:w-36 lg:h-36 rounded-full opacity-0 group-hover:opacity-100" style={{ background: "hsl(var(--youtube) / 0.25)", animation: "pulse-ring 2s ease-out infinite" }} />
                <span
                  className="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full text-foreground transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: "hsl(var(--youtube))",
                    boxShadow: "0 0 80px hsl(var(--youtube) / 0.7), 0 20px 40px -10px hsl(0 0% 0% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
                  }}
                >
                  <Play className="h-8 w-8 lg:h-10 lg:w-10 fill-current ml-1" />
                </span>
              </div>

              {/* Bottom HUD */}
              <div className="absolute bottom-8 left-4 right-4 flex justify-between items-end text-[10px] uppercase tracking-[0.3em] text-foreground/80 font-mono z-10">
                <div>
                  <div className="text-foreground/50">Scene 04</div>
                  <div className="text-foreground font-semibold mt-1 normal-case tracking-normal text-sm">Matinee Man · Take 01</div>
                </div>
                <div className="text-right">
                  <div className="text-foreground/50">Runtime</div>
                  <div className="text-foreground font-semibold mt-1">∞</div>
                </div>
              </div>
            </div>

            {/* Bottom timeline strip */}
            <div className="bg-black/80 border-t border-border px-4 py-2.5 flex items-center gap-3">
              <span className="text-[10px] font-mono text-foreground/50">00:00</span>
              <div className="flex-1 h-1 rounded-full bg-foreground/10 overflow-hidden">
                <div className="h-full w-1/3 rounded-full transition-all duration-700 group-hover:w-2/3" style={{ background: "linear-gradient(90deg, hsl(var(--youtube)), hsl(38 92% 55%))" }} />
              </div>
              <span className="text-[10px] font-mono text-foreground/50">∞</span>
            </div>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
