import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#clients" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/60" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-5">
          <a href="#top" className="font-display text-lg font-medium tracking-tight text-foreground">
            Ayan Mukherjee
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-text-secondary hover:text-foreground transition-colors duration-300 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex btn-liquid items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm text-foreground"
          >
            Let's Build Something <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container mx-auto py-6 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-8 mt-16">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-foreground"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * links.length }}
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground"
                >
                  Let's Build Something →
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action menu (mobile) */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 lg:hidden inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow-blue animate-pulse-ring"
        aria-label="Contact"
      >
        <span className="font-display text-lg">→</span>
      </a>
    </>
  );
};
