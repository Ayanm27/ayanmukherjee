import { clientLogos } from "./clientLogos";

const Row = ({ direction }: { direction: "left" | "right" }) => {
  const items = [...clientLogos, ...clientLogos];
  return (
    <div className="marquee-row marquee-mask overflow-hidden">
      <div
        className={`marquee-track flex gap-6 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="shrink-0 h-24 w-44 rounded-xl border border-soft flex items-center justify-center px-6 transition-colors hover:border-mid"
            style={{ background: "hsl(var(--bg-card))" }}
          >
            <img src={logo.src} alt={logo.name} className="max-h-12 max-w-full object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ClientsMarquee() {
  return (
    <div className="space-y-6">
      <Row direction="left" />
      <Row direction="right" />
    </div>
  );
}
