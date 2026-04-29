import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import portrait from "@/assets/ayan-portrait-bw.jpg";
import { AnimatedPaths } from "./AnimatedPaths";

const headlineLines = [
  ["Direction.", "Strategy.", "Operations."],
  ["One", "Person.", "Full", "Ownership."],
];

export const Hero = () => {
  let wordIndex = 0;

  // Parallax tilt for portrait
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotY = useTransform(sx, [-1, 1], [6, -6]);
  const rotX = useTransform(sy, [-1, 1], [-4, 4]);
  const tx = useTransform(sx, [-1, 1], [-15, 15]);
  const ty = useTransform(sy, [-1, 1], [-10, 10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden pt-28 lg:pt-32">
      {/* Mesh gradient + blobs */}
      <div className="absolute inset-0 mesh-bg opacity-70" />
      <div className="blob animate-blob" style={{ top: "10%", left: "-5%", width: 420, height: 420, background: "hsl(217 91% 60% / 0.5)" }} />
      <div className="blob animate-blob" style={{ top: "55%", left: "30%", width: 360, height: 360, background: "hsl(290 90% 60% / 0.35)", animationDelay: "-6s" }} />
      <div className="blob animate-blob" style={{ top: "20%", right: "10%", width: 480, height: 480, background: "hsl(174 80% 45% / 0.3)", animationDelay: "-12s" }} />

      <AnimatedPaths />

      {/* Photo, RIGHT side, behind text on desktop */}
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[58%] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: tx, y: ty, rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
          className="relative h-full w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center photo-mask"
            style={{
              backgroundImage: `url(${portrait})`,
              backgroundPosition: "center 18%",
            }}
          />
          {/* B&W — no color grade overlay */}
          {/* Edge fades */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          {/* Subtle scan lines */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px)" }} />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto pb-24">
        {/* Top pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs text-primary backdrop-blur-md shadow-[0_0_30px_-5px_hsl(217_91%_60%/0.5)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for New Opportunities
        </motion.div>

        {/* Mobile photo */}
        <div className="mt-10 lg:hidden">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-primary/20 shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.5)]">
            <img
              src={portrait}
              alt="Ayan Mukherjee"
              className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-10 lg:mt-14 max-w-3xl">
          <h1 className="display-text font-semibold text-foreground text-[40px] sm:text-6xl lg:text-[80px] leading-[1.02]">
            {headlineLines.map((line, li) => (
              <span key={li} className="block">
                {line.map((word) => {
                  const i = wordIndex++;
                  const isAccent = li === 0;
                  return (
                    <motion.span
                      key={`${li}-${i}`}
                      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`inline-block mr-3 ${isAccent ? "text-shimmer" : ""}`}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-8 text-lg sm:text-xl text-text-secondary max-w-xl"
          >
            Most people pick a lane.<br />I built a career across three.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-6 text-base text-text-muted max-w-xl leading-relaxed"
          >
            I'm Ayan Mukherjee, a Creative Director, Content Strategist, and Operations
            professional based in Pune, India. I've built brands from zero. Grown media
            companies to 800K+ followers. Managed global operations for an international
            investment banking network. And I bring the same discipline to every room I
            walk into.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1LT7FiVFWqRbIM19_y5fguPjVEsglVOyc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-liquid-filled group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              See My Work
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a
              href="#contact"
              className="btn-liquid inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.9 }}
            className="mt-14 border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {[
              ["13+", "Years"],
              ["200+", "Clients"],
              ["8L+", "Followers Built"],
              ["2", "National Awards"],
            ].map(([n, l]) => (
              <div key={l} className="group">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gradient-vibrant leading-none whitespace-nowrap pr-1">{n}</div>
                <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-text-muted mt-3">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
