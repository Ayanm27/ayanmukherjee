import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/matinee-man", label: "Matinee Man" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-colors duration-500"
        style={{
          backgroundColor: `hsl(var(--background) / ${scrolled ? 0.85 : 0.2})`,
          borderColor: `hsl(var(--foreground) / 0.08)`,
        }}
      >
        <div className="container-wide flex items-center justify-between h-16 lg:h-[72px]">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight gold-text">
            AM
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative text-[14px] font-medium transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-px"
                        style={{ background: "hsl(var(--gold))" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-medium"
            >
              Let's Talk <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            aria-label="Open menu"
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ background: "hsl(var(--background))" }}
          >
            <div className="flex items-center justify-between h-16 px-6">
              <Link to="/" className="font-display text-2xl font-bold gold-text">AM</Link>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 -mr-2">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-8 pt-12 flex flex-col gap-7">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-display text-3xl font-medium ${isActive ? "gold-text" : "text-foreground/80"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="btn-gold mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Let's Talk →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
