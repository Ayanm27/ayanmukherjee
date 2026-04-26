import { motion } from "framer-motion";
import portrait from "@/assets/ayan-portrait.jpeg";
import { AnimatedPaths } from "./AnimatedPaths";

const headlineLines = [
  ["Direction.", "Strategy.", "Operations."],
  ["One", "Person.", "Full", "Ownership."],
];

export const Hero = () => {
  let wordIndex = 0;

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden pt-28 lg:pt-32">
      <AnimatedPaths />

      {/* Photo, RIGHT side, behind text on desktop */}
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[55%] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center photo-mask"
            style={{
              backgroundImage: `url(${portrait})`,
              backgroundPosition: "center 20%",
              filter: "grayscale(15%) contrast(1.05)",
            }}
          />
          {/* Blue grade overlay */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-color photo-mask" />
          {/* Edge darkening */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto pb-24">
        {/* Top pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-xs text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for New Opportunities
        </motion.div>

        {/* Mobile photo */}
        <div className="mt-10 lg:hidden">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-border">
            <img
              src={portrait}
              alt="Ayan Mukherjee"
              className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
              style={{ filter: "grayscale(15%) contrast(1.05)" }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-10 lg:mt-14 max-w-3xl">
          <h1 className="display-text font-semibold text-foreground text-[40px] sm:text-6xl lg:text-[80px] leading-[1.02]">
            {headlineLines.map((line, li) => (
              <span key={li} className="block">
                {line.map((word) => {
                  const i = wordIndex++;
                  return (
                    <motion.span
                      key={`${li}-${i}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block mr-3"
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
              href="https://drive.google.com/drive/u/2/folders/19JdujWOwtUArQPKw6POAH5xKnr8ScKOL"
              target="_blank"
              rel="noreferrer"
              className="btn-liquid-filled inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              See My Work <span aria-hidden>↗</span>
            </a>
            <a
              href="#contact"
              className="btn-liquid inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.9 }}
            className="mt-14 border-t border-border pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              ["13+", "Years"],
              ["200+", "Clients"],
              ["8L+", "Followers Built"],
              ["2", "National Awards"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-foreground">{n}</div>
                <div className="text-xs uppercase tracking-wider text-text-muted mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
