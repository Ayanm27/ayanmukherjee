import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center" style={{ background: "hsl(var(--background))" }}>
      <div className="text-center px-6">
        <div className="font-display text-[120px] gold-text leading-none">404</div>
        <h1 className="font-display text-3xl mt-2 text-foreground">Page not found.</h1>
        <p className="mt-4 text-muted-soft">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold mt-8">
          ← Back home
        </Link>
      </div>
    </section>
  );
}
