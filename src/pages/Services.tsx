import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const services = [
  {
    num: "01", name: "Content Ideation",
    tagline: "Ideas that start conversations.",
    body: "I map your brand's territory, find the untold angles, and build content strategies that actually reach people. Audience research, platform mapping, content pillars, editorial calendars — all of it.",
    items: ["YouTube channel strategy", "LinkedIn content frameworks", "Monthly content calendar", "Platform-specific angle research", "Competitor content audit"],
    price: "On request",
  },
  {
    num: "02", name: "Script Writing",
    tagline: "Words written to be heard, not read.",
    body: "Long-form YouTube scripts, brand video scripts, documentary treatments — written with structure, rhythm, and a hook every 30 seconds. Built for real audiences, not just algorithms.",
    items: ["Long-form YouTube scripts (8–20 min)", "Brand video / explainer scripts", "Documentary or short film treatments", "Script + narration timing notes", "Revision rounds included"],
    price: "On request",
  },
  {
    num: "03", name: "Branding",
    tagline: "Identity with a point of view.",
    body: "Brand positioning, naming architecture, visual identity direction, and tone-of-voice systems. I don't just make things look good, I make them mean something.",
    items: ["Brand positioning document", "Naming + tagline development", "Visual identity direction", "Tone of voice guide", "Brand story + messaging framework"],
    price: "On request",
  },
  {
    num: "04", name: "Marketing Strategy",
    tagline: "Campaigns with creative intelligence.",
    body: "Go-to-market thinking, campaign concepts, and content plans, grounded in audience psychology, built to convert attention into real action.",
    items: ["Go-to-market campaign framework", "Campaign concept development", "Audience persona mapping", "Channel strategy + budget guidance", "Monthly content calendar"],
    price: "On request",
  },
  {
    num: "05", name: "Video Editing",
    tagline: "Edit is where the story lives.",
    body: "From raw footage to a final cut that holds. Pacing, color grading direction, sound design notes, edited with cinematic instinct, not just technical accuracy.",
    items: ["YouTube long-form editing (up to 20 min)", "Reels / Shorts cuts from long-form", "Color grading + grade direction", "Subtitle + caption integration", "Thumbnail design included"],
    price: "On request",
  },
  {
    num: "06", name: "Graphic Design",
    tagline: "Design that earns attention.",
    body: "Presentations, pitch decks, social visuals, and brand collateral, designed with intent. Every element has a reason to exist.",
    items: ["Pitch deck / presentation design", "Social media template system", "Brand collateral (posters, banners)", "Infographic design", "Thumbnail design (YouTube/social)"],
    price: "On request",
  },
];

const process = [
  { num: "01", t: "Understand", d: "Deep dive into your brief, goals, and audience." },
  { num: "02", t: "Ideate", d: "Ideas first. No templates. Raw thinking for your context." },
  { num: "03", t: "Execute", d: "Delivery with precision. Iteration until it's right." },
  { num: "04", t: "Measure", d: "What worked, what didn't, and how we push further." },
];

export default function Services() {
  useEffect(() => { document.title = "Services — Ayan Mukherjee"; }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six ways I can help."
        subtitle="Strategy. Content. Design. Execution. The full creative stack — built for clarity, executed with craft."
      />

      <section className="py-16 lg:py-24">
        <div className="container-wide">
          {services.map((s, i) => (
            <div key={s.num} className="grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 border-b border-soft last:border-0">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="relative">
                  <div className="absolute -top-8 -left-2 font-display font-semibold text-foreground/[0.05] pointer-events-none" style={{ fontSize: 120, lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <Reveal>
                    <div className="label-eyebrow-teal relative">{s.name}</div>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className="display-hero mt-4 gold-text relative" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.15 }}>
                      "{s.tagline}"
                    </h2>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <p className="mt-6 text-[16px] leading-relaxed text-muted-soft max-w-md">{s.body}</p>
                  </Reveal>
                </div>
              </div>

              <Reveal delay={0.2}>
                <div className="rounded-xl border border-soft p-8" style={{ background: "hsl(var(--bg-card))" }}>
                  <div className="text-[12px] uppercase tracking-[0.2em] text-muted-soft">What's included</div>
                  <ul className="mt-6 space-y-4">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[15px] text-foreground/90">
                        <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ background: "hsl(var(--gold))" }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-soft text-[12px] text-muted-soft">
                    Starting from <span className="text-foreground">{s.price}</span>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-wide">
          <Reveal><div className="label-eyebrow-teal">How it Works</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>Clean input → Sharp output.</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-3 left-0 right-0 h-px" style={{ background: "hsl(var(--gold) / 0.25)" }} />
            {process.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.1}>
                <div className="relative">
                  <div className="h-3 w-3 rounded-full mb-6 relative z-10" style={{ background: "hsl(var(--gold))", boxShadow: "0 0 0 4px hsl(var(--bg-secondary))" }} />
                  <div className="text-[12px] gold-text font-medium tracking-[0.2em]">{p.num}</div>
                  <h3 className="font-display text-[22px] mt-2 text-foreground">{p.t}</h3>
                  <p className="mt-3 text-[14px] text-muted-soft">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow text-center">
          <h2 className="display-hero text-foreground" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>Ready to start?</h2>
          <p className="mt-5 text-muted-soft">Tell me what you're working on. I'll tell you how I can help.</p>
          <Link to="/contact" className="mt-8 btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold">
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
