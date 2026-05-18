import { getTranslations } from "next-intl/server";
import { Monogram } from "@/components/ui/Monogram";

export default async function Loading() {
  const t = await getTranslations("loading");
  return (
    <div
      className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-cream"
      role="status"
      aria-label={t("aria")}
    >
      {/* Soft gold-foil ambience */}
      <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(250,246,238,0)_0%,#EFE7D2_85%)]" />

      <div className="relative flex flex-col items-center">
        {/* Concentric rings — slow, opposing rotation */}
        <div className="relative h-44 w-44 sm:h-52 sm:w-52">
          {/* Outer ring with gilded sweep (clockwise) */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full animate-[regalia-spin_9s_linear_infinite]"
            aria-hidden
          >
            <defs>
              <linearGradient id="ring-outer" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E6CF99" stopOpacity="0" />
                <stop offset="35%" stopColor="#E6CF99" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#F3E3BF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#E6CF99" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="url(#ring-outer)"
              strokeWidth="0.9"
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              strokeDasharray="0.62 0.38"
            />
          </svg>

          {/* Mid ring — single gilded comet (counter-clockwise) */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] animate-[regalia-spin-rev_14s_linear_infinite]"
            aria-hidden
          >
            <circle cx="50" cy="50" r="46" stroke="rgba(230,207,153,0.18)" strokeWidth="0.5" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="rgba(230,207,153,0.6)"
              strokeWidth="0.6"
              fill="none"
              pathLength={1}
              strokeDasharray="0.04 0.96"
              strokeLinecap="round"
            />
          </svg>

          {/* Hairline tick ring (slowest) */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-7 h-[calc(100%-3.5rem)] w-[calc(100%-3.5rem)] animate-[regalia-spin_22s_linear_infinite]"
            aria-hidden
          >
            <g stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" strokeLinecap="round">
              {Array.from({ length: 24 }).map((_, i) => {
                const a = (i / 24) * Math.PI * 2;
                const r1 = 44;
                const r2 = i % 6 === 0 ? 40 : 42;
                const x1 = 50 + Math.cos(a) * r1;
                const y1 = 50 + Math.sin(a) * r1;
                const x2 = 50 + Math.cos(a) * r2;
                const y2 = 50 + Math.sin(a) * r2;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </g>
          </svg>

          {/* Center monogram with a soft breathing pulse */}
          <div className="absolute inset-0 grid place-items-center">
            <Monogram className="h-14 w-14 text-gilded animate-[regalia-breathe_3.6s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Decorative gilded hairline beneath the rings */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gilded/70" />
          <span className="text-[0.65rem] uppercase tracking-[0.45em] text-pearl/75">
            Regalia Vows
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gilded/70" />
        </div>
      </div>

      <style>{`
        @keyframes regalia-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes regalia-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes regalia-breathe {
          0%, 100% { transform: scale(1);    opacity: 0.95; }
          50%      { transform: scale(1.06); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="regalia-spin"],
          [class*="regalia-breathe"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
