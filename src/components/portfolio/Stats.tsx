import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const stats: Array<{ value: number; suffix: string; prefix?: string; label: string }> = [
  { value: 13, suffix: "+", label: "Years of Professional Experience" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 8, suffix: "L+", label: "Followers Built from Scratch" },
  { value: 2.5, suffix: "M+", label: "Views Generated in 6 Months" },
  { value: 95, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 2, suffix: "", label: "National Media Awards" },
];

export const Stats = () => (
  <section className="relative py-24 lg:py-32 border-y border-border">
    <div className="container mx-auto">
      <Reveal>
        <span className="section-label">// By The Numbers</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-text mt-5 text-4xl lg:text-5xl font-semibold text-foreground max-w-2xl">
          Numbers don't lie.<br />Neither does the work.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.06} className="bg-surface">
            <div className="relative p-8 lg:p-10 h-full">
              <span className="absolute top-0 left-0 h-px w-16 bg-primary" />
              <div className="font-display text-5xl lg:text-6xl font-semibold text-foreground">
                {Number.isInteger(s.value) ? (
                  <CountUp end={s.value} suffix={s.suffix} />
                ) : (
                  <span>
                    {s.value}
                    {s.suffix}
                  </span>
                )}
              </div>
              <div className="mt-4 text-sm text-text-muted">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
