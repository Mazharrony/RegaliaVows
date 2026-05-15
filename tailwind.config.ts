import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111216",
          50: "#20212A",
          100: "#181922",
          900: "#070810",
        },
        pearl: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F0EFEC",
        },
        cream: {
          DEFAULT: "#FAF6EE",
          50: "#FFFDF7",
          100: "#F7F2E7",
          200: "#EFE7D2",
          300: "#E5D9B8",
        },
        champagne: "#F0D08C",
        gilded: {
          DEFAULT: "#D6A140",
          100: "#F0D08C",
          200: "#E6C078",
          400: "#D6A140",
          600: "#B07F2A",
          800: "#8B6418",
        },
        rose: { veil: "#E8C9C2" },
        verdant: { olive: "#5C6A4A" },
        // Aliases used throughout components — keep them resolving.
        gold: "#D6A140",
        "gold-flow": "#D6A140",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        tight: ["var(--font-tight)", "Inter Tight", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        gilded: "0 1px 0 0 rgba(214,161,64,0.55), 0 20px 60px -18px rgba(214,161,64,0.45)",
        ink: "0 30px 80px -30px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grain": "url('/textures/grain.svg')",
        "gold-foil": "radial-gradient(120% 80% at 20% 0%, rgba(230,192,120,0.28), transparent 60%), radial-gradient(80% 60% at 80% 100%, rgba(214,161,64,0.32), transparent 60%)",
        "gold-shimmer": "linear-gradient(110deg, #6B4A12 0%, #8B6418 12%, #B07F2A 28%, #D6A140 44%, #F0D08C 52%, #D6A140 60%, #B07F2A 76%, #8B6418 90%, #6B4A12 100%)",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.65, 0.05, 0.36, 1)",
        ease_out_expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
        "gold-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gold-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 0px rgba(214,161,64,0))" },
          "50%":      { filter: "drop-shadow(0 0 14px rgba(214,161,64,0.55))" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 5s linear infinite",
        "gold-pan": "gold-pan 7s ease-in-out infinite",
        "gold-glow": "gold-glow 4s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
