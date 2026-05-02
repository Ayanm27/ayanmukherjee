import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t" style={{ background: "hsl(var(--footer-bg))", borderColor: "hsl(var(--foreground) / 0.08)" }}>
      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link to="/" className="font-display text-xl font-bold gold-text">AM</Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted-soft">
            <Link to="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="text-muted-hard">·</span>
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span className="text-muted-hard">·</span>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <span className="text-muted-hard">·</span>
            <Link to="/matinee-man" className="hover:text-foreground transition-colors">Matinee Man</Link>
            <span className="text-muted-hard">·</span>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/in/ayanm27" target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="p-2 rounded-full border border-soft text-foreground/70 hover:text-gold hover:border-mid transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/@MatineeManOfficial" target="_blank" rel="noreferrer" aria-label="YouTube"
               className="p-2 rounded-full border border-soft text-foreground/70 hover:text-gold hover:border-mid transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram"
               className="p-2 rounded-full border border-soft text-foreground/70 hover:text-gold hover:border-mid transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-soft flex flex-col md:flex-row justify-between gap-2 text-[11px] text-muted-hard">
          <span>© 2026 Ayan Mukherjee. All rights reserved.</span>
          <span>Crafted with intent. Built in Lovable.</span>
        </div>
      </div>
    </footer>
  );
}
