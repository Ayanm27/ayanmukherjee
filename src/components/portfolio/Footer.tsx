import { Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="bg-footer-bg border-t border-border">
    <div className="container mx-auto py-14">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="font-display text-xl font-semibold text-foreground">Ayan Mukherjee</div>
          <div className="mt-2 text-sm text-text-secondary">Creative Director · Content Strategist · Operations Professional</div>
          <div className="mt-1 text-sm text-text-muted">Pune, India · ayanmukherjee.in</div>
        </div>
        <div className="flex md:justify-end gap-3">
          <a
            href="https://linkedin.com/in/ayanm27"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:border-primary/60 transition-colors"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn ↗
          </a>
          <a
            href="https://wa.me/918797311943"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:border-primary/60 transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp ↗
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-[hsl(217_19%_27%)]">
        © 2025 Ayan Mukherjee. All rights reserved.
      </div>
    </div>
  </footer>
);
