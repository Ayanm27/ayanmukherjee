import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, Quote, Play } from "lucide-react";

import heroPhoto from "@/assets/ayan-hero-2026.jpg";
import Reveal from "@/components/site/Reveal";
import CountUp from "@/components/site/CountUp";
import ClientsMarquee from "@/components/site/ClientsMarquee";

const services = [
  { num: "01", name: "Content Ideation", line: "Ideas that start conversations." },
  { num: "02", name: "Script Writing", line: "Words written to be heard, not read." },
  { num: "03", name: "Branding", line: "Identity with a point of view." },
  { num: "04", name: "Marketing Strategy", line: "Campaigns with creative intelligence." },
  { num: "05", name: "Video Editing", line: "Edit is where the story lives." },
  { num: "06", name: "Graphic Design", line: "Design that earns attention." },
];

const projects = [
  { name: "Globalscope Brand Operations", category: "Strategy + Operations", line: "Coordinating creative across a global M&A network." },
  { name: "Women's CricZone", category: "Script + Video Direction", line: "Built and grew a media brand to 8L+ followers." },
];

const testimonials = [
  {
    quote: "Ayan brings a rare mix of creative intuition and operational rigor. He doesn't just deliver, he elevates everything he touches.",
    name: "Senior Partner",
    role: "Globalscope Partners",
  },
  {
    quote: "Working with Ayan feels less like outsourcing and more like adding a creative co-founder to your team.",
    name: "Founder",
    role: "Ferrstron Powertrains",
  },
  {
    quote: "He turned a fragmented brand into a clear, premium voice. Strategy, copy, and visuals — all in one.",
    name: "Marketing Lead",
    role: "Independent Studio",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Ayan Mukherjee — Creative Director, Strategist & Operations";
  }, []);

  return (
    <>
      {/* ============== 01 HERO ============== */}
      <section
        id="hero"
        className="relative min-h-screen w-full overflow-hidden grain-overlay"
        style={{ background: "hsl(var(--background))" }}
      >
        {/* warm spotlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%", left: "5%", width: 700, height: 700,
            background: "radial-gradient(circle, hsl(var(--gold) / 0.10) 0%, transparent 60%)",
            filter: "blur(20px)",
          }}
        />

        {/* Right photo */}
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[48%] pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center photo-mask-left"
              style={{ backgroundImage: `url(${heroPhoto})`, backgroundPosition: "center 30%" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />
          </motion.div>
        </div>

        <div className="container-wide relative z-10 pt-32 lg:pt-40 pb-24 min-h-screen flex flex-col justify-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="label-eyebrow"
            >
              Creative Director · Content Strategist · Creator
            </motion.div>

            {/* Mobile photo */}
            <div className="mt-8 lg:hidden">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-soft">
                <img src={heroPhoto} alt="Ayan Mukherjee" className="absolute inset-0 w-full h-full object-cover object-[center_28%]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 50%)" }} />
              </div>
            </div>

            <h1 className="display-hero mt-8 text-foreground" style={{ fontSize: "clamp(42px, 7vw, 84px)" }}>
              {["Crafting stories", "that move", "people."].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-7 text-[18px] leading-relaxed text-muted-soft max-w-md"
            >
              I build brands, develop content, and direct creative work that's made to be remembered, not just consumed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/work" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold">
                View My Work <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium">
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-hard">Scroll</span>
          <div className="relative h-10 w-px overflow-hidden">
            <span className="absolute inset-0 animate-scroll-indicator" style={{ background: "hsl(var(--foreground) / 0.4)" }} />
          </div>
        </div>
      </section>

      {/* ============== 02 PHILOSOPHY ============== */}
      <section className="py-24 lg:py-36" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-narrow text-center">
          <Reveal><div className="label-eyebrow-teal">The Belief</div></Reveal>
          <div className="my-10 h-px mx-auto max-w-xs" style={{ background: "hsl(var(--foreground) / 0.08)" }} />
          <Reveal delay={0.1}>
            <blockquote className="display-hero text-foreground mx-auto max-w-3xl text-balance" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.2 }}>
              "I refuse to make work that blends in. Every brief is an invitation to say something worth remembering."
            </blockquote>
          </Reveal>
          <div className="my-10 h-px mx-auto max-w-xs" style={{ background: "hsl(var(--foreground) / 0.08)" }} />
          <Reveal delay={0.2}>
            <div className="text-[14px] text-muted-soft">— Ayan Mukherjee, Creative Director & Content Strategist</div>
          </Reveal>
        </div>
      </section>

      {/* ============== 03 WHAT I DO ============== */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="max-w-2xl">
            <Reveal><div className="label-eyebrow-teal">What I Do</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
                Six ways I can help.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[17px] text-muted-soft">From strategy to execution — the full creative stack.</p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.06}>
                <Link
                  to="/services"
                  className="group relative block rounded-xl border border-soft p-7 h-full overflow-hidden hover:border-mid transition-colors"
                  style={{ background: "hsl(var(--bg-card))" }}
                >
                  <div className="absolute top-4 right-5 font-display font-semibold text-foreground/[0.04]" style={{ fontSize: 56 }}>
                    {s.num}
                  </div>
                  <div className="relative">
                    <div className="h-px w-10 mb-6" style={{ background: "hsl(var(--gold))" }} />
                    <h3 className="font-display text-[22px] font-semibold text-foreground">{s.name}</h3>
                    <p className="mt-3 text-[14px] text-muted-soft">{s.line}</p>
                    <div className="mt-8 inline-flex items-center gap-1.5 text-[13px] gold-text group-hover:gap-2.5 transition-all">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex justify-center">
            <Link to="/services" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-medium">
              Explore All Services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============== 04 SELECTED WORK ============== */}
      <section className="py-24 lg:py-32" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-wide">
          <Reveal><div className="label-eyebrow-teal">Selected Work</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>Things I'm proud of.</h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <Link to="/work" className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-soft" style={{ background: "hsl(var(--bg-card))" }}>
                    <div className="absolute inset-0 flex items-center justify-center text-muted-hard text-[12px] uppercase tracking-[0.2em]">
                      [Project Visual]
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" style={{ background: "hsl(var(--background) / 0.6)" }}>
                      <ArrowUpRight className="h-8 w-8 text-gold" />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-block px-3 py-1 text-[11px] uppercase tracking-[0.14em] rounded-full border" style={{ borderColor: "hsl(var(--teal) / 0.5)", color: "hsl(var(--teal))" }}>
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-display text-[22px] mt-3 text-foreground">{p.name}</h3>
                  <p className="mt-2 text-[14px] text-muted-soft">{p.line}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex justify-center">
            <Link to="/work" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-medium">
              View All Work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============== 05 STATS ============== */}
      <section className="py-20 border-y border-soft" style={{ background: "hsl(var(--background))" }}>
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[hsl(var(--foreground)/0.08)]">
          {[
            { n: 13, suffix: "+", l: "Years Experience" },
            { n: 200, suffix: "+", l: "Clients Worked With" },
            { n: 2, suffix: "", l: "National Awards (e4m)" },
            { n: 8, suffix: "L+", l: "Followers Built" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="text-center lg:px-6">
              <div className="font-display font-semibold gold-text" style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1 }}>
                <CountUp to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[12px] uppercase tracking-[0.2em] text-muted-soft">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== 06 CLIENTS ============== */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="text-center mb-14">
            <Reveal><div className="label-eyebrow-teal">Trusted By</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>Brands I've built for.</h2>
            </Reveal>
          </div>
          <ClientsMarquee />
        </div>
      </section>

      {/* ============== 07 MATINEE MAN ============== */}
      <section className="py-24 lg:py-32 grain-overlay relative" style={{ background: "hsl(var(--bg-warm))" }}>
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal><div className="label-eyebrow">Matinee Man</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Cinema analysis.<br />Unfiltered.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[17px] leading-relaxed text-muted-soft max-w-md">
                A Hindi YouTube channel where I break down Bollywood box office, industry deep-dives, and the business of storytelling — in the language cinema deserves.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { n: "Growing", l: "Subscribers" },
                  { n: "Weekly", l: "Episodes" },
                  { n: "Hindi", l: "Language" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-[22px] gold-text">{s.n}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-soft">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10">
                <Link to="/matinee-man" className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium">
                  Explore Matinee Man <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <a
              href="https://www.youtube.com/@MatineeManOfficial"
              target="_blank"
              rel="noreferrer"
              className="group block relative aspect-[16/9] rounded-xl overflow-hidden border border-soft"
              style={{ background: "hsl(var(--bg-card))" }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-muted-hard text-[11px] uppercase tracking-[0.2em]">
                [Channel Banner]
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "hsl(var(--gold))" }}>
                  <Play className="h-6 w-6 fill-current" style={{ color: "hsl(var(--gold-foreground))" }} />
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--gold)/0.2)] rounded-xl pointer-events-none" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============== 08 TESTIMONIALS ============== */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <Reveal><div className="label-eyebrow-teal">Kind Words</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>What people say.</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-soft p-8 h-full flex flex-col" style={{ background: "hsl(var(--bg-card))" }}>
                  <Quote className="h-10 w-10 -ml-1 mb-4" style={{ color: "hsl(var(--gold) / 0.6)" }} />
                  <p className="text-[16px] leading-relaxed text-foreground/90 flex-1">"{t.quote}"</p>
                  <div className="mt-7 pt-5 border-t border-soft flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full flex items-center justify-center text-[12px] font-medium" style={{ background: "hsl(var(--bg-secondary))", color: "hsl(var(--gold))" }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-[14px] text-foreground font-medium">{t.name}</div>
                      <div className="text-[12px] text-muted-soft">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 09 AWARDS ============== */}
      <section className="py-24 lg:py-32" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-wide">
          <Reveal><div className="label-eyebrow-teal">Recognition</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>Awards & milestones.</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              { year: "2023", cat: "Digital Media Excellence", body: "Exchange4Media National Awards" },
              { year: "2022", cat: "Best Sports Content Brand", body: "Exchange4Media National Awards" },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-xl p-8 h-full" style={{ background: "hsl(var(--bg-card))", border: "1px solid hsl(var(--gold) / 0.3)" }}>
                  <Trophy className="h-7 w-7 gold-text" />
                  <div className="mt-6 text-[12px] uppercase tracking-[0.2em] text-muted-soft">e4m Award · {a.year}</div>
                  <h3 className="font-display text-[24px] mt-2 text-foreground">{a.cat}</h3>
                  <p className="mt-2 text-[14px] text-muted-soft">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 10 CONTACT CTA ============== */}
      <section className="relative min-h-[80vh] flex items-center justify-center grain-overlay py-32" style={{ background: "hsl(var(--bg-deep))" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
            style={{ width: 800, height: 800, background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 60%)" }}
          />
        </div>
        <div className="container-narrow text-center relative z-10">
          <Reveal><div className="label-eyebrow-teal">Ready to Create?</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-6 text-foreground text-balance" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              Let's make<br />something<br />worth watching.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[18px] text-muted-soft mx-auto max-w-lg">
              A brand brief, a YouTube project, a pitch deck, or just an idea — I want to hear it.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold">
                Say Hello <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/918797311943" target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium">
                Book a Call
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 text-[13px] text-muted-soft">
              ✉ hello@ayanmukherjee.in &nbsp;·&nbsp; Based in Pune, India &nbsp;·&nbsp; Open to remote work globally
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
