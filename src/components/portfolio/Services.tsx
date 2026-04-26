import { Reveal } from "./Reveal";
import { Brush, Settings2 } from "lucide-react";

type Service = { num: string; title: string; body: string };

const creative: Service[] = [
  { num: "01", title: "Creative Direction", body: "The vision behind everything. I define your brand's visual identity, narrative tone, and creative language, then ensure every output stays consistent with it. From concept to final frame." },
  { num: "02", title: "Content Strategy", body: "What to say. Where to say it. Why it'll work. I build content strategies rooted in audience behavior, platform logic, and your brand's unique position." },
  { num: "03", title: "Content Planning", body: "From monthly calendars to full campaign timelines, I plan your content ecosystem so nothing is left to chance and nothing goes out without purpose." },
  { num: "04", title: "Marketing Ideas", body: "Not generic campaigns. Brand-specific, audience-aware, and always executable ideas, built around your goals, your timing, and your competitive landscape." },
  { num: "05", title: "Visual Craft", body: "Design and video that doesn't just look good, it communicates. Logos, reels, motion graphics, presentation decks, thumbnails. Built for impact across every format and platform." },
];

const operations: Service[] = [
  { num: "06", title: "Operations Management", body: "I build the systems, pipelines, and internal structures that keep organisations running. From team coordination and workflow design to day-to-day execution oversight." },
  { num: "07", title: "Project & Team Coordination", body: "Managing cross-functional teams, setting delivery timelines, aligning stakeholders, and ensuring nothing falls through the cracks. I've done this at scale, I can do it for your organisation too." },
  { num: "08", title: "Data Handling & Reporting", body: "Structured data management, presentation building, and report creation for leadership and external stakeholders. Clean, accurate, and always boardroom-ready." },
  { num: "09", title: "Backend & Communications Management", body: "Website backend updates, internal documentation, and professional communication management, coordinating with teams, clients, and global partners." },
];

const Card = ({ s, accent }: { s: Service; accent: "blue" | "gold" }) => {
  const accentClasses =
    accent === "blue"
      ? "hover:border-primary/60 hover:shadow-glow-blue"
      : "hover:border-gold/60 hover:shadow-glow-gold";
  return (
    <div
      className={`group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1 ${accentClasses}`}
    >
      <span
        className="absolute top-6 left-6 font-display text-[40px] font-semibold text-foreground/10 transition-colors duration-500"
        style={{ color: undefined }}
      >
        {s.num}
      </span>
      <div className="pt-14">
        <h3 className="font-display text-2xl font-semibold text-foreground">{s.title}</h3>
        <p className="mt-4 text-sm text-text-secondary leading-relaxed">{s.body}</p>
      </div>
    </div>
  );
};

export const Services = () => (
  <section id="services" className="relative py-28 lg:py-40">
    <div className="container mx-auto">
      <Reveal>
        <span className="section-label">// What I Bring to the Table</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground max-w-3xl">
          Whether you need a creative mind or an operational backbone, I've got both covered.
        </h2>
      </Reveal>

      {/* CREATIVE */}
      <div className="mt-20">
        <Reveal>
          <div className="flex items-center gap-3 text-primary">
            <Brush className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium">Creative</span>
            <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {creative.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <Card s={s} accent="blue" />
            </Reveal>
          ))}
        </div>
      </div>

      {/* OPERATIONS */}
      <div className="mt-20">
        <Reveal>
          <div className="flex items-center gap-3 text-gold">
            <Settings2 className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium">Operations</span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {operations.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <Card s={s} accent="gold" />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
