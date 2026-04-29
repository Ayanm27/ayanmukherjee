import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const entries = [
  {
    date: "2025 – Present",
    title: "Operations Associate",
    company: "Globalscope Partners",
    body: "Supporting one of the world's largest international M&A banking networks. Managing presentations, data accuracy, website backend, member coordination, and global conference materials, across 57 member firms worldwide.",
    accent: "217 91% 60%",
  },
  {
    date: "2025 – Present",
    title: "Brand & Marketing Consultant",
    company: "Ferrstron Powertrains",
    body: "Building the brand identity, content strategy, and marketing plan for a Pune-based Axial Flux EV motor startup, from scratch.",
    accent: "38 92% 55%",
  },
  {
    date: "2019 – 2025",
    title: "Co-Founder & Chief Operating Officer",
    company: "Women's CricZone",
    body: "Built India's leading women's cricket media platform from the ground up. Led all company operations, HR, hiring, workflows, and production pipelines. Grew the brand from 0 to 800,000+ followers across platforms.",
    accent: "290 90% 60%",
  },
  {
    date: "2025 – Present",
    title: "Creative Lead & Principal",
    company: "After Mark",
    body: "My personal creative studio. Serving individuals, startups, and organisations with end-to-end creative and strategic solutions. One director. Your brand. Full ownership.",
    accent: "174 80% 50%",
  },
  {
    date: "2012 – 2019",
    title: "Freelancer",
    company: "Video Editor & Graphic Designer",
    body: "Started from zero. Built a client base of 200+ across industries. Mastered the craft of editing, design, and delivering under pressure. Every client was a lesson. Every deadline was a standard.",
    accent: "0 85% 60%",
  },
];

const Entry = ({ e, i }: { e: typeof entries[number]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 15 });
  const sy = useSpring(my, { stiffness: 150, damping: 15 });
  const rotX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  const handleMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    mx.set((ev.clientX - r.left) / r.width - 0.5);
    my.set((ev.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div ref={ref} className="relative pl-10 sm:pl-16 pb-16 last:pb-0" style={{ perspective: 1200 }}>
      {/* Pulsing dot */}
      <span className="absolute left-0 sm:left-3 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
        <span
          className="absolute h-4 w-4 rounded-full animate-ping"
          style={{ background: `hsl(${e.accent} / 0.4)` }}
        />
        <span
          className="relative h-2.5 w-2.5 rounded-full"
          style={{ background: `hsl(${e.accent})`, boxShadow: `0 0 18px hsl(${e.accent} / 0.9)` }}
        />
      </span>

      <motion.article
        initial={{ opacity: 0, x: 60, rotateY: -8 }}
        animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className="group relative rounded-2xl border border-border bg-surface p-7 sm:p-8 overflow-hidden cursor-hover transition-colors duration-500 hover:border-foreground/20"
      >
        {/* Accent corner glow */}
        <div
          className="absolute -top-32 -right-32 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
          style={{ background: `hsl(${e.accent} / 0.45)` }}
        />
        {/* Animated left accent bar */}
        <span
          className="absolute left-0 top-6 h-12 w-[3px] rounded-r-full transition-all duration-500 group-hover:h-24"
          style={{ background: `linear-gradient(180deg, hsl(${e.accent}), transparent)`, boxShadow: `0 0 20px hsl(${e.accent} / 0.6)` }}
        />
        {/* Top sweeping shimmer line */}
        <span
          className="absolute top-0 left-0 h-px w-1/3 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-1000"
          style={{ background: `linear-gradient(90deg, transparent, hsl(${e.accent}), transparent)` }}
        />

        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          <div
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border"
            style={{
              color: `hsl(${e.accent})`,
              borderColor: `hsl(${e.accent} / 0.4)`,
              background: `hsl(${e.accent} / 0.08)`,
            }}
          >
            {e.date}
          </div>
          <h3 className="mt-4 font-display text-2xl sm:text-[26px] font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-500">
            {e.title}
          </h3>
          <div className="mt-1.5 text-sm" style={{ color: `hsl(${e.accent})` }}>
            {e.company}
          </div>
          <p className="mt-4 text-text-secondary text-[15px] leading-relaxed">{e.body}</p>
        </div>
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
