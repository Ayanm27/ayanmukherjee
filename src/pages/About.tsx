import { useEffect } from "react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import portrait from "@/assets/ayan-portrait-bw.jpg";

const timeline = [
  { year: "Current", role: "Operations Associate", co: "Globalscope Partners", d: "Coordinating across a global M&A network spanning 50+ countries.", live: true },
  { year: "Current", role: "Brand & Marketing Consultant", co: "Ferrstron Powertrains", d: "Brand positioning, naming, and creative direction for an EV powertrain startup.", live: true },
  { year: "Current", role: "Creative Lead & Principal", co: "After Mark", d: "Independent creative practice — strategy, content, and brand work.", live: true },
  { year: "2020 →", role: "Co-Founder & COO", co: "Women's CricZone", d: "Built and grew India's largest women's cricket media brand to 800K+ followers." },
  { year: "Ongoing", role: "Freelancer", co: "Ayan Creative Studio", d: "200+ clients across branding, content, video, and strategy in 13+ years." },
];

const values = [
  { t: "Intentionality", d: "Every choice has a reason. Nothing in my work is decorative for the sake of it." },
  { t: "Craft", d: "The standard isn't 'done'. It's 'done in a way that holds up to a second look.'" },
  { t: "Honesty", d: "Real timelines, real feedback, real opinions on what your brand actually needs." },
];

const tools = {
  "Creative Tools": ["Premiere Pro", "After Effects", "Figma", "Photoshop", "Illustrator", "Canva"],
  "Strategy & AI": ["Notion", "ChatGPT", "Claude", "Perplexity", "CapCut", "Filmora"],
  "Operations": ["Excel", "PowerPoint", "Google Workspace", "Slack"],
};

export default function About() {
  useEffect(() => { document.title = "About — Ayan Mukherjee"; }, []);

  return (
    <>
      <PageHero eyebrow="About" title="The person behind the work." />

      <section className="py-16 lg:py-24">
        <div className="container-wide grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <img src={portrait} alt="Ayan Mukherjee" className="absolute inset-0 w-full h-full object-cover object-[center_18%]" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, hsl(var(--background) / 0.4))" }} />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="display-hero text-foreground" style={{ fontSize: "clamp(30px, 3.5vw, 44px)" }}>Ayan Mukherjee</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-[17px] leading-[1.8] text-muted-soft">
                <p>I started with a laptop, a DSLR, and a stubborn need to figure things out on my own. No agency training, no corporate hand-holding, just 200+ clients, real deadlines, and a commitment to delivering work that actually moves the needle.</p>
                <p>Over 13 years, I've worn a lot of hats, and I wear all of them well. I've built brand identities, led content teams, directed campaigns, and shaped the visual and narrative language of organisations across industries.</p>
                <p>I've also co-founded and run a media company, managed HR and hiring, built internal workflows, handled data, coordinated across global teams, and kept organisations running with precision behind the scenes. I don't just think in concepts. I think in systems. And I build both.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Creative Director", "Content Strategist", "Bollywood Analyst", "Operations Pro", "YouTuber", "Pune-based"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-[12px] rounded-full border border-soft text-muted-soft">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-wide">
          <Reveal><div className="label-eyebrow-teal">Experience</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>The journey so far.</h2>
          </Reveal>

          <div className="mt-16 relative max-w-4xl">
            <div className="absolute left-2 top-2 bottom-2 w-px" style={{ background: "hsl(var(--foreground) / 0.1)" }} />
            <div className="space-y-12">
              {timeline.map((e, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="relative pl-12">
                    <div
                      className={`absolute left-0 top-1.5 h-4 w-4 rounded-full ${e.live ? "animate-pulse-dot" : ""}`}
                      style={{ background: "hsl(var(--gold))", boxShadow: "0 0 0 4px hsl(var(--bg-secondary))" }}
                    />
                    <div className="text-[12px] uppercase tracking-[0.2em] text-muted-soft">{e.year}</div>
                    <h3 className="font-display text-[24px] mt-1 text-foreground">{e.role}</h3>
                    <div className="text-[14px] gold-text mt-1">{e.co}</div>
                    <p className="mt-3 text-[15px] text-muted-soft max-w-2xl">{e.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container-wide">
          <Reveal><div className="label-eyebrow-teal">Values</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>What I stand on.</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="rounded-xl border border-soft p-7 h-full" style={{ background: "hsl(var(--bg-card))" }}>
                  <div className="h-px w-10 mb-5" style={{ background: "hsl(var(--gold))" }} />
                  <h3 className="font-display text-[22px] text-foreground">{v.t}</h3>
                  <p className="mt-3 text-[15px] text-muted-soft">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-wide">
          <Reveal><div className="label-eyebrow-teal">Tools & Stack</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>The arsenal.</h2>
          </Reveal>

          <div className="mt-12 space-y-12">
            {Object.entries(tools).map(([cat, items], gi) => (
              <Reveal key={cat} delay={gi * 0.08}>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.2em] gold-text">{cat}</div>
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {items.map((tool) => (
                      <div
                        key={tool}
                        className="aspect-square rounded-lg border border-soft flex flex-col items-center justify-center text-center p-3 transition-all hover:border-mid hover:-translate-y-1"
                        style={{ background: "hsl(var(--bg-card))" }}
                      >
                        <div className="h-8 w-8 rounded-md mb-3" style={{ background: "hsl(var(--gold) / 0.15)", border: "1px solid hsl(var(--gold) / 0.3)" }} />
                        <div className="text-[12px] text-foreground/90">{tool}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
