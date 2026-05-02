import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

const filters = ["All", "Branding", "Script & Video", "Strategy", "Presentations", "Social"] as const;

const projects = [
  { id: 1, name: "Globalscope Brand Operations", category: "Strategy", client: "Globalscope Partners", line: "Coordinating creative and ops across a global M&A network.", body: "Building decks, internal comms, and brand-aligned content for a 50+ country investment banking network." },
  { id: 2, name: "Women's CricZone", category: "Script & Video", client: "Independent", line: "Built and scaled a sports media brand to 800K+ followers.", body: "Co-founded, edited, scripted, and grew a women's cricket media brand into India's largest in the category." },
  { id: 3, name: "Ferrstron Powertrains", category: "Branding", client: "Ferrstron", line: "Brand consulting, positioning, and identity direction.", body: "Defined positioning, naming language, and visual direction for an EV powertrain startup." },
  { id: 4, name: "Matinee Man Channel", category: "Script & Video", client: "Personal", line: "Hindi cinema analysis YouTube channel.", body: "End-to-end production: research, scripting, narration direction, editing, thumbnails." },
  { id: 5, name: "Marketing Campaign — ABSLI", category: "Strategy", client: "Aditya Birla Sun Life", line: "Campaign development for life insurance category.", body: "Concept, copy, and content rollout for a national digital campaign." },
  { id: 6, name: "Pitch Deck System — Globalscope", category: "Presentations", client: "Globalscope Partners", line: "Reusable global pitch deck framework.", body: "Designed a master deck system used across 50+ countries by member firms." },
  { id: 7, name: "Social Series — Veesha", category: "Social", client: "Veesha", line: "Social-first content strategy and rollout.", body: "Channel framework, monthly calendar, and series concepts." },
  { id: 8, name: "Brand Video Direction — Carrera", category: "Script & Video", client: "Carrera", line: "Concept and direction for a brand film.", body: "Treatment, scripting, and creative direction." },
];

export default function Work() {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => { document.title = "Work — Ayan Mukherjee"; }, []);

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);
  const openProject = projects.find((p) => p.id === open);

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Things I'm proud of."
        subtitle="Client work, personal projects, and creative experiments — across brands, content, and strategy."
      />

      <section className="py-14">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                  active === f ? "btn-gold border-transparent" : "border-soft text-muted-soft hover:border-mid hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <LayoutGroup>
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {visible.map((p) => (
                  <motion.button
                    layout
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setOpen(p.id)}
                    className="group text-left"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-soft" style={{ background: "hsl(var(--bg-card))" }}>
                      <div className="absolute inset-0 flex items-center justify-center text-muted-hard text-[11px] uppercase tracking-[0.2em]">
                        [Project Visual]
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" style={{ background: "hsl(var(--background) / 0.6)" }}>
                        <span className="inline-flex items-center gap-1.5 text-[13px] gold-text">View Project <ArrowUpRight className="h-4 w-4" /></span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] rounded-full border" style={{ borderColor: "hsl(var(--teal) / 0.5)", color: "hsl(var(--teal))" }}>
                        {p.category}
                      </span>
                      <span className="text-[12px] text-muted-soft">· {p.client}</span>
                    </div>
                    <h3 className="font-display text-[18px] mt-2 text-foreground">{p.name}</h3>
                    <p className="mt-1 text-[13px] text-muted-soft">{p.line}</p>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      {/* Detail dialog */}
      <AnimatePresence>
        {open !== null && openProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] overflow-y-auto"
            style={{ background: "hsl(var(--background) / 0.92)", backdropFilter: "blur(12px)" }}
          >
            <div className="min-h-full flex items-start justify-center p-4 sm:p-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-4xl rounded-2xl border border-soft p-6 sm:p-10"
                style={{ background: "hsl(var(--bg-card))" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] rounded-full border" style={{ borderColor: "hsl(var(--teal) / 0.5)", color: "hsl(var(--teal))" }}>
                      {openProject.category}
                    </span>
                    <h2 className="font-display text-[36px] sm:text-[44px] mt-3 text-foreground">{openProject.name}</h2>
                    <div className="mt-2 text-[13px] text-muted-soft">{openProject.client}</div>
                  </div>
                  <button onClick={() => setOpen(null)} className="p-2 rounded-full border border-soft hover:border-mid">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-8 aspect-[16/9] rounded-lg border border-soft flex items-center justify-center text-muted-hard text-[11px] uppercase tracking-[0.2em]" style={{ background: "hsl(var(--bg-secondary))" }}>
                  [Hero Image]
                </div>

                <p className="mt-8 text-[16px] leading-relaxed text-muted-soft">{openProject.body}</p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] rounded-lg border border-soft flex items-center justify-center text-muted-hard text-[10px] uppercase tracking-[0.2em]" style={{ background: "hsl(var(--bg-secondary))" }}>[Image]</div>
                  <div className="aspect-[4/3] rounded-lg border border-soft flex items-center justify-center text-muted-hard text-[10px] uppercase tracking-[0.2em]" style={{ background: "hsl(var(--bg-secondary))" }}>[Image]</div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-soft">
                  {[["Reach", "+ Scale"], ["Engagement", "↑ Growth"], ["Outcome", "Delivered"]].map(([l, n]) => (
                    <div key={l}>
                      <div className="font-display text-[24px] gold-text">{n}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-soft">{l}</div>
                    </div>
                  ))}
                </div>

                <button onClick={() => setOpen(null)} className="mt-10 text-[13px] text-muted-soft hover:text-foreground">← Back to Work</button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="container-narrow text-center">
          <h2 className="display-hero text-foreground" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>Like what you see?</h2>
          <p className="mt-5 text-muted-soft">Let's talk about what we can build together.</p>
          <Link to="/contact" className="mt-8 btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold">
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
