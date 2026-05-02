import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Mail, MapPin, Globe, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Reveal from "@/components/site/Reveal";

const faqs = [
  { q: "What's your typical project timeline?", a: "Most engagements run 2–8 weeks depending on scope. Brand and strategy work tends to be longer; single-deliverable video or design projects can move faster. I'll always be honest about timelines upfront." },
  { q: "Do you work with international clients?", a: "Yes. I currently work with global teams (including Globalscope Partners across 50+ countries) and am set up for fully remote collaboration across timezones." },
  { q: "What's your pricing structure?", a: "Project-based for one-off deliverables, monthly retainers for ongoing brand and content partnerships. I share a clear quote after a discovery call." },
  { q: "Can you handle end-to-end projects?", a: "Yes. I run strategy, scripting, design, video editing, and operations either solo or by leading a small team I trust. One point of contact, full ownership." },
  { q: "How do we get started?", a: "Send a message via the form (or email me directly). I'll set up a 30-minute discovery call to understand your goals, then come back with a proposal within 48 hours." },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => { document.title = "Contact — Ayan Mukherjee"; }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent. I'll get back to you in 24–48 hours.");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden grain-overlay" style={{ background: "hsl(var(--bg-deep))" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
            style={{ width: 900, height: 900, background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 60%)" }}
          />
        </div>
        <div className="container-narrow text-center relative">
          <Reveal><div className="label-eyebrow-teal">Get in Touch</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-hero mt-6 text-foreground text-balance" style={{ fontSize: "clamp(40px, 7vw, 72px)" }}>
              Let's make<br />something<br />worth watching.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[18px] text-muted-soft max-w-lg mx-auto">
              A brand brief, a YouTube project, a pitch deck, or just an idea. I want to hear it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20">
        <div className="container-wide grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Form */}
          <Reveal>
            <div className="rounded-2xl border border-soft p-8 lg:p-10" style={{ background: "hsl(var(--bg-card))" }}>
              <h2 className="font-display text-[26px] text-foreground">Send a message.</h2>
              {submitted ? (
                <div className="mt-10 flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="h-14 w-14 gold-text" />
                  <h3 className="font-display text-[22px] mt-5 text-foreground">Got it.</h3>
                  <p className="mt-3 text-muted-soft">I'll respond within 24–48 hours.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  {[
                    { name: "name", label: "Full Name *", type: "text", required: true },
                    { name: "email", label: "Email Address *", type: "email", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[12px] uppercase tracking-[0.18em] text-muted-soft mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        className="w-full rounded-lg border bg-transparent px-4 py-3 text-[15px] text-foreground outline-none focus:border-[hsl(var(--gold))] transition-colors"
                        style={{ borderColor: "hsl(var(--foreground) / 0.12)" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[12px] uppercase tracking-[0.18em] text-muted-soft mb-2">What do you need help with?</label>
                    <select
                      className="w-full rounded-lg border bg-transparent px-4 py-3 text-[15px] text-foreground outline-none focus:border-[hsl(var(--gold))] transition-colors"
                      style={{ borderColor: "hsl(var(--foreground) / 0.12)", background: "hsl(var(--bg-card))" }}
                    >
                      <option>Branding</option>
                      <option>Script Writing</option>
                      <option>Content Strategy</option>
                      <option>Video Editing</option>
                      <option>Graphic Design</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] uppercase tracking-[0.18em] text-muted-soft mb-2">Tell me more</label>
                    <textarea
                      rows={5}
                      className="w-full rounded-lg border bg-transparent px-4 py-3 text-[15px] text-foreground outline-none focus:border-[hsl(var(--gold))] transition-colors resize-none"
                      style={{ borderColor: "hsl(var(--foreground) / 0.12)" }}
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold">
                    Send It →
                  </button>
                  <p className="text-[12px] text-muted-soft text-center">I respond within 24–48 hours.</p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-[26px] text-foreground">Or reach out directly.</h2>
                <ul className="mt-7 space-y-4 text-[15px]">
                  <li className="flex items-center gap-3 text-foreground/90">
                    <Mail className="h-4 w-4 gold-text" /> hello@ayanmukherjee.in
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90">
                    <MapPin className="h-4 w-4 gold-text" /> Pune, Maharashtra, India
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90">
                    <Globe className="h-4 w-4 gold-text" /> Open to remote work globally
                  </li>
                </ul>
              </div>

              <div className="h-px" style={{ background: "hsl(var(--foreground) / 0.08)" }} />

              <div className="space-y-3">
                {[
                  { l: "LinkedIn", h: "https://linkedin.com/in/ayanm27" },
                  { l: "YouTube", h: "https://www.youtube.com/@MatineeManOfficial" },
                  { l: "WhatsApp", h: "https://wa.me/918797311943" },
                ].map((s) => (
                  <a key={s.l} href={s.h} target="_blank" rel="noreferrer"
                     className="flex items-center justify-between py-3 border-b border-soft text-[15px] text-foreground/90 hover:gold-text transition-colors group">
                    {s.l} <span className="gold-text">→</span>
                  </a>
                ))}
              </div>

              <div className="rounded-xl p-6" style={{ background: "hsl(var(--bg-card))", border: "1px solid hsl(var(--gold) / 0.3)" }}>
                <div className="text-[12px] uppercase tracking-[0.2em] text-muted-soft">Current Status</div>
                <div className="mt-3 flex items-center gap-2 text-foreground">
                  <span className="h-2 w-2 rounded-full animate-pulse-dot" style={{ background: "hsl(var(--gold))" }} />
                  Available for new projects
                </div>
                <div className="mt-2 text-[13px] text-muted-soft">Onboarding from Q2 2026</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-narrow">
          <Reveal><div className="label-eyebrow-teal">Quick Answers</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-hero mt-4 text-foreground" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>Common questions.</h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="rounded-xl border border-soft overflow-hidden" style={{ background: "hsl(var(--bg-card))" }}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-medium text-foreground text-[15px]">{f.q}</span>
                      <Plus
                        className="h-5 w-5 gold-text shrink-0 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-[15px] text-muted-soft leading-relaxed">{f.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
