import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  warm?: boolean;
}

export default function PageHero({ eyebrow, title, subtitle, warm }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden grain-overlay"
      style={{
        background: warm ? "hsl(var(--bg-warm))" : "hsl(var(--background))",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-warm-glow)" }} />
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={warm ? "label-eyebrow" : "label-eyebrow-teal"}>{eyebrow}</div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display-hero mt-5 text-foreground"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[17px] text-muted-soft max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(var(--foreground) / 0.1), transparent)" }} />
    </section>
  );
}
