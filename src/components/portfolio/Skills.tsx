import { Reveal } from "./Reveal";

// Brand icons via simple-icons CDN. Consistent sizing, original brand colors.
// Slug map matches https://simpleicons.org/
type Tool = { name: string; slug: string; color: string };

const groups: { title: string; accent: string; tools: Tool[] }[] = [
  {
    title: "Design",
    accent: "217 91% 60%",
    tools: [
      { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
      { name: "Illustrator", slug: "adobeillustrator", color: "FF9A00" },
      { name: "Lightroom", slug: "adobelightroom", color: "31A8FF" },
      { name: "Canva", slug: "canva", color: "00C4CC" },
    ],
  },
  {
    title: "Video & Motion",
    accent: "290 90% 60%",
    tools: [
      { name: "Premiere Pro", slug: "adobepremierepro", color: "9999FF" },
      { name: "After Effects", slug: "adobeaftereffects", color: "9999FF" },
      { name: "DaVinci Resolve", slug: "davinciresolve", color: "FFFFFF" },
      { name: "Filmora", slug: "wondersharefilmora", color: "30D2FE" },
    ],
  },
  {
    title: "Productivity & Operations",
    accent: "174 80% 45%",
    tools: [
      { name: "MS Office", slug: "microsoftoffice", color: "D83B01" },
      { name: "Slack", slug: "slack", color: "4A154B" },
      { name: "Zoho Sprints", slug: "zoho", color: "E42527" },
      { name: "Dropbox", slug: "dropbox", color: "0061FF" },
    ],
  },
  {
    title: "AI Tools",
    accent: "38 92% 55%",
    tools: [
      { name: "Claude", slug: "claude", color: "D97757" },
      { name: "ChatGPT", slug: "openai", color: "FFFFFF" },
      { name: "Gemini", slug: "googlegemini", color: "8E75B2" },
      { name: "Higgsfield", slug: "sparkfun", color: "E53935" },
      { name: "ElevenLabs", slug: "elevenlabs", color: "FFFFFF" },
      { name: "SUNO", slug: "suno", color: "FFFFFF" },
    ],
  },
];

const ToolIcon = ({ tool }: { tool: Tool }) => (
  <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-foreground/[0.06] border border-border group-hover:border-foreground/20 group-hover:bg-foreground/10 transition-all duration-300 shrink-0">
    <img
      src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
      alt=""
      aria-hidden
      className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
      loading="lazy"
      onError={(e) => {
        // Fallback to monogram if icon missing
        (e.currentTarget as HTMLImageElement).style.display = "none";
        const sib = e.currentTarget.nextElementSibling as HTMLElement | null;
        if (sib) sib.style.display = "inline-flex";
      }}
    />
    <span
      style={{ display: "none" }}
      className="items-center justify-center w-5 h-5 text-[10px] font-display font-bold text-foreground"
    >
      {tool.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
    </span>
  </span>
);

export const Skills = () => (
  <section className="relative py-28 lg:py-40 overflow-hidden">
    {/* Ambient blobs */}
    <div className="blob animate-blob" style={{ top: "10%", right: "-5%", width: 380, height: 380, background: "hsl(290 90% 60% / 0.18)" }} />
    <div className="blob animate-blob" style={{ bottom: "10%", left: "-5%", width: 420, height: 420, background: "hsl(217 91% 60% / 0.15)", animationDelay: "-8s" }} />

    <div className="container mx-auto relative">
      <Reveal>
        <span className="section-label">// The Arsenal</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground max-w-2xl">
          The tools I use to<br />
          <span className="text-gradient-vibrant">get things done.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08}>
            <div
              className="group/card relative h-full rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 overflow-hidden"
              style={{ boxShadow: "0 20px 50px -25px hsl(0 0% 0% / 0.6)" }}
            >
              {/* Accent glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ background: `hsl(${g.accent} / 0.35)` }}
              />
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 h-[2px] w-16 group-hover/card:w-full transition-all duration-700"
                style={{ background: `linear-gradient(90deg, hsl(${g.accent}), transparent)` }}
              />

              <div className="flex items-center justify-between relative">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">{g.title}</h3>
                <span
                  className="text-[10px] uppercase tracking-[0.25em] font-medium px-2.5 py-1 rounded-full border"
                  style={{ color: `hsl(${g.accent})`, borderColor: `hsl(${g.accent} / 0.4)`, background: `hsl(${g.accent} / 0.08)` }}
                >
                  {g.tools.length} Tools
                </span>
              </div>

              <ul className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5 relative">
                {g.tools.map((t) => (
                  <li
                    key={t.name}
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-border bg-background/50 px-3 py-2.5 text-[13px] text-foreground/80 hover:text-foreground hover:bg-background hover:-translate-y-0.5 transition-all duration-300 cursor-hover"
                    style={{ ["--hover-shadow" as never]: `0 8px 24px -8px hsl(${g.accent} / 0.4)` }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px -8px hsl(${g.accent} / 0.4)`;
                      (e.currentTarget as HTMLElement).style.borderColor = `hsl(${g.accent} / 0.5)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                      (e.currentTarget as HTMLElement).style.borderColor = "";
                    }}
                  >
                    <ToolIcon tool={t} />
                    <span className="truncate font-medium">{t.name}</span>
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
