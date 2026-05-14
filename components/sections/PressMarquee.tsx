const press = [
  "Vogue Arabia",
  "Harper's Bazaar",
  "Condé Nast Traveller",
  "Brides",
  "Hello! Middle East",
  "Tatler",
  "Robb Report",
  "AD Middle East",
];

export function PressMarquee() {
  return (
    <section
      aria-label="Featured in"
      className="relative overflow-hidden border-y border-pearl/10 bg-ink py-12"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track flex gap-16 whitespace-nowrap text-pearl/85 will-change-transform">
        {[...press, ...press, ...press].map((p, i) => (
          <span key={i} className="font-display text-2xl italic md:text-3xl">
            {p}
            <span className="ml-16 text-gold">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-x {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-33.333%,0,0); }
        }
        .marquee-track { animation: marquee-x 38s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
