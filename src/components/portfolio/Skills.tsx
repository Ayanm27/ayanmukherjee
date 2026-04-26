import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Design",
    tools: ["Photoshop", "Illustrator", "Lightroom", "Canva"],
  },
  {
    title: "Video & Motion",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    title: "Productivity & Operations",
    tools: ["MS Office", "Slack", "Zoho Sprints", "Dropbox"],
  },
  {
    title: "AI Tools",
    tools: ["Claude", "ChatGPT", "Gemini", "Higgsfield", "ElevenLabs", "SUNO"],
  },
];

// Initial-based icon, clean, on-brand. Color-coded subtly per group.
const ToolIcon = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-foreground/5 border border-border text-[10px] font-display font-semibold text-primary group-hover:scale-110 group-hover:text-foreground transition-transform duration-300">
      {initials}
    </span>
  );
};

export const Skills = () => (
  <section className="relative py-28 lg:py-40">
    <div className="container mx-auto">
      <Reveal>
        <span className="section-label">// The Arsenal</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground max-w-2xl">
          The tools I use to<br />get things done.
        </h2>
      </Reveal>

      <div className="mt-16 space-y-12">
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08}>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {g.tools.map((t) => (
                  <li
                    key={t}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300 cursor-hover"
                  >
                    <ToolIcon name={t} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
