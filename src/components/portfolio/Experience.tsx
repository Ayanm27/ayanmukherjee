import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const entries = [
  {
    date: "2025 – Present",
    title: "Founder",
    company: "After Mark",
    body: "My personal creative studio. Serving individuals, startups, and organisations with end-to-end creative and strategic solutions. One director. Your brand. Full ownership.",
  },
  {
    date: "2025 – Present",
    title: "Brand & Marketing Consultant",
    company: "Ferrstron Powertrains",
    body: "Building the brand identity, content strategy, and marketing plan for a Pune-based Axial Flux EV motor startup, from scratch.",
  },
  {
    date: "2025 – Present",
    title: "Operations Associate",
    company: "Globalscope Partners",
    body: "Supporting one of the world's largest international M&A banking networks. Managing presentations, data accuracy, website backend, member coordination, and global conference materials, across 57 member firms worldwide.",
  },
  {
    date: "2019 – 2025",
    title: "Co-Founder & Chief Operating Officer",
    company: "Women's CricZone",
    body: "Built India's leading women's cricket media platform from the ground up. Led all company operations, HR, hiring, workflows, and production pipelines. Grew the brand from 0 to 800,000+ followers across platforms.",
  },
  {
    date: "2012 – 2019",
    title: "Freelancer",
    company: "Video Editor & Graphic Designer",
    body: "Started from zero. Built a client base of 200+ across industries. Mastered the craft of editing, design, and delivering under pressure. Every client was a lesson. Every deadline was a standard.",
  },
];

const Entry = ({ e, i }: { e: typeof entries[number]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="relative pl-10 sm:pl-16 pb-16 last:pb-0">
      {/* Pulsing dot */}
      <span className="absolute left-0 sm:left-3 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
        <span className="absolute h-4 w-4 rounded-full bg-primary/30 animate-ping" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-primary shadow-glow-blue" />
      </span>

      <motion.article
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-border bg-surface p-7 sm:p-8"
      >
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{e.date}</div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{e.title}</h3>
        <div className="mt-1 text-primary text-sm">{e.company}</div>
        <p className="mt-4 text-text-secondary text-[15px] leading-relaxed">{e.body}</p>
      </motion.article>
    </div>
  );
};

export const Experience = () => (
  <section id="experience" className="relative py-28 lg:py-40 border-t border-border">
    <div className="container mx-auto">
      <Reveal>
        <span className="section-label">// The Journey</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground max-w-2xl">
          Built in the field.<br />Not in the classroom.
        </h2>
      </Reveal>

      <div className="mt-16 relative max-w-3xl">
        {/* Vertical glowing line */}
        <span className="absolute left-0 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/60 to-transparent shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
        {entries.map((e, i) => (
          <Entry key={i} e={e} i={i} />
        ))}
      </div>
    </div>
  </section>
);
