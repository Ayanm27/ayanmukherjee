export const AnimatedPaths = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden
    className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    viewBox="0 0 1440 900"
    fill="none"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g stroke="url(#pathGrad)" strokeWidth="1" fill="none" className="opacity-40">
      <path className="stroke-dash-anim" d="M-100,200 C300,100 600,400 900,250 C1200,100 1500,350 1700,200" />
      <path className="stroke-dash-anim" style={{ animationDuration: "45s" }} d="M-100,500 C200,650 500,300 800,500 C1100,700 1400,400 1700,550" />
      <path className="stroke-dash-anim" style={{ animationDuration: "60s" }} d="M-100,750 C300,600 700,850 1000,700 C1300,580 1500,800 1700,720" />
      <path className="stroke-dash-anim" style={{ animationDuration: "50s" }} d="M-100,80 C400,300 700,50 1100,180 C1300,250 1500,120 1700,180" />
    </g>
    <g stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" className="opacity-[0.06]">
      <path d="M0,0 L1440,900" />
      <path d="M1440,0 L0,900" />
    </g>
  </svg>
);
