import { useEffect } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const topics = [
  "Box Office Economics", "Superstar Analysis", "South vs Bollywood", "Industry Deep-Dives",
  "Film Business", "Casting Breakdowns", "OTT vs Theatre", "Production Budgets", "Award Season", "Reviews",
];

const videos = [
  { title: "Why Bollywood Lost the Plot", duration: "14:22", views: "Trending" },
  { title: "South Cinema's Box Office Math", duration: "18:05", views: "Featured" },
  { title: "The Star System: Decoded", duration: "12:48", views: "New" },
  { title: "OTT vs Theatre — Economics", duration: "16:30", views: "Watch" },
];

const CHANNEL = "https://www.youtube.com/@MatineeManOfficial";

export default function MatineeMan() {
  useEffect(() => { document.title = "Matinee Man — Ayan Mukherjee"; }, []);

  return (
    <div style={{ background: "hsl(var(--bg-warm))" }}>
      <PageHero
        eyebrow="Matinee Man"
        title={<>Cinema analysis. <br/> Unfiltered.</>}
        subtitle="A Bollywood and Hindi cinema YouTube channel — box office economics, industry deep-dives, and the business of storytelling."
        warm
      />

      {/* Featured banner */}
      <section className="pb-16">
        <div className="container-wide">
          <Reveal>
            <a
              href={CHANNEL}
              target="_blank" rel="noreferrer"
              className="group relative block aspect-[16/7] rounded-2xl overflow-hidden border border-soft grain-overlay"
              style={{ background: "hsl(var(--bg-card))" }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-muted-hard text-[12px] uppercase tracking-[0.2em]">
                [Channel Banner Video]
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "hsl(var(--gold))" }}>
                  <Play className="h-7 w-7 fill-current ml-1" style={{ color: "hsl(var(--gold-foreground))" }} />
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--gold)/0.3)] rounded-2xl pointer-events-none" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="display-hero text-foreground" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>What is Matinee Man?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[17px] leading-[1.8] text-muted-soft">
                <p>Matinee Man is a Hindi-language YouTube channel where I break down Indian cinema with the same rigor I bring to brand work — research-led, opinionated, and made for people who actually love films.</p>
                <p>The focus: box office economics, superstar arcs, industry analysis, casting decisions, and the business of storytelling. No gossip. No hot takes for the sake of it. Just real conversations about why Indian cinema works the way it does.</p>
                <p>I started Matinee Man because Hindi cinema deserves analysis in the language it lives in — and because I've been waiting years for someone to make this channel. So I made it myself.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { n: "Growing", l: "Subscribers" },
                  { n: "Weekly", l: "Episodes" },
                  { n: "Hindi", l: "Language" },
                  { n: "2024", l: "Started" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-[26px] gold-text">{s.n}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-soft">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a href={CHANNEL} target="_blank" rel="noreferrer"
                 className="mt-10 btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold">
                Subscribe on YouTube <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="aspect-[4/5] rounded-xl border border-soft flex items-center justify-center text-muted-hard text-[11px] uppercase tracking-[0.2em]" style={{ background: "hsl(var(--bg-card))" }}>
              [Channel Portrait]
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured videos */}
      <section className="py-16 lg:py-24" style={{ background: "hsl(0 0% 5%)" }}>
        <div className="container-wide">
          <Reveal><div className="label-eyebrow">Featured Episodes</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>Recent deep-dives.</h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <a href={CHANNEL} target="_blank" rel="noreferrer" className="group block">
                  <div className="relative aspect-video rounded-lg border border-soft overflow-hidden" style={{ background: "hsl(var(--bg-card))" }}>
                    <div className="absolute inset-0 flex items-center justify-center text-muted-hard text-[11px] uppercase tracking-[0.2em]">[Thumbnail]</div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: "hsl(var(--background) / 0.5)" }}>
                      <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--gold))" }}>
                        <Play className="h-4 w-4 ml-0.5 fill-current" style={{ color: "hsl(var(--gold-foreground))" }} />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px]" style={{ background: "hsl(var(--background) / 0.85)" }}>
                      {v.duration}
                    </div>
                  </div>
                  <h3 className="font-display text-[19px] mt-4 text-foreground">{v.title}</h3>
                  <div className="mt-1 text-[12px] text-muted-soft">{v.views} · {v.duration}</div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-14 flex justify-center">
            <a href={CHANNEL} target="_blank" rel="noreferrer" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-medium">
              Watch All Videos <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20">
        <div className="container-wide">
          <Reveal><div className="label-eyebrow">Topics Covered</div></Reveal>
          <div className="mt-8 flex flex-wrap gap-2.5 max-w-4xl">
            {topics.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <span
                  className="inline-block px-4 py-2 rounded-full text-[13px]"
                  style={{
                    background: "hsl(var(--bg-card))",
                    border: "1px solid hsl(var(--teal) / 0.4)",
                    color: "hsl(var(--teal))",
                    fontSize: 12 + (i % 4) * 1.5,
                  }}
                >
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Behind */}
      <section className="py-20 lg:py-28">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <h2 className="display-hero text-foreground" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>Why Matinee Man exists.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[17px] leading-[1.8] text-muted-soft">
                <p>I've spent over a decade building brands and content for other people. Matinee Man is the channel I've always wanted to make for myself.</p>
                <p>Hindi cinema is one of the most studied subjects in pop culture, but most of the analysis is either gossip or click-bait. I wanted to make something different — slow, thoughtful, and built around the actual business of how films are made, marketed, and remembered.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="aspect-[4/3] rounded-xl border border-soft flex items-center justify-center text-muted-hard text-[11px] uppercase tracking-[0.2em]" style={{ background: "hsl(var(--bg-card))" }}>
              [Behind the Scenes]
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
