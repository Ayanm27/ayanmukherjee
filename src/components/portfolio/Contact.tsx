import { Reveal } from "./Reveal";
import { AnimatedPaths } from "./AnimatedPaths";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

const cards = [
  { icon: Mail, label: "Email", value: "mr.mukherjee27@gmail.com", href: "mailto:mr.mukherjee27@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 87973 11943", href: "https://wa.me/918797311943" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ayanm27", href: "https://linkedin.com/in/ayanm27" },
];

export const Contact = () => (
  <section id="contact" className="relative py-28 lg:py-40 overflow-hidden border-t border-border">
    <AnimatedPaths className="opacity-50" />
    <div className="container relative z-10 mx-auto text-center">
      <Reveal>
        <span className="section-label">// Let's Work Together</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground max-w-4xl mx-auto leading-[1.05]">
          You have a vision.<br />I have the direction, strategy,<br />and system to execute it.<br />
          <span className="text-primary">Let's talk.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 text-text-secondary max-w-2xl mx-auto text-lg">
          Whether you need a creative partner, an operations associate, a brand consultant, or someone who can do all three, I'm open to the conversation.
        </p>
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={0.1 + i * 0.08}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group block rounded-2xl border border-border bg-surface p-7 text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow-blue"
            >
              <c.icon className="h-6 w-6 text-primary" />
              <div className="mt-5 text-xs uppercase tracking-[0.2em] text-text-muted">{c.label}</div>
              <div className="mt-2 font-display text-lg text-foreground break-all">{c.value}</div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <a
          href="mailto:mr.mukherjee27@gmail.com"
          className="btn-liquid-filled group mt-16 inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-semibold text-primary-foreground"
        >
          Start a Conversation
          <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </a>
      </Reveal>
    </div>
  </section>
);
