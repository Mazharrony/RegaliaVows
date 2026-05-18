import { Link } from "@/lib/i18n/navigation";
import { forwardRef, type ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "gilded" | "ghost" | "ink" | "outline";
type Size = "md" | "lg";

/** Same href surface as the locale-aware <Link> (typed pathnames + object form). */
export type ButtonHref = ComponentProps<typeof Link>["href"];

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
};

const base =
  "group relative inline-flex items-center justify-center gap-3 font-tight uppercase tracking-widest2 text-eyebrow transition-all duration-500 ease-silk overflow-hidden rounded-full isolate";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.7rem] sm:px-7 sm:py-3.5 sm:text-eyebrow",
  lg: "px-6 py-3.5 text-[0.72rem] sm:px-8 sm:py-4 md:px-9 md:py-5 sm:text-eyebrow",
};

// Liquid-glass surfaces — translucent, backdrop-blurred, with an inner highlight
// and a soft outer ring so they read like Apple's frosted controls.
const variants: Record<Variant, string> = {
  // Gilded glass: warm tint, gold border, gold highlight on hover
  gilded:
    "text-ink bg-gilded/85 backdrop-blur-md ring-1 ring-inset ring-pearl/40 shadow-[0_1px_0_0_rgba(255,255,255,0.55)_inset,0_10px_30px_-12px_rgba(214,161,64,0.55)] hover:bg-gilded/95 hover:ring-pearl/60",
  // Clear glass: faint pearl tint, sits beautifully on imagery / hero video
  ghost:
    "text-pearl bg-pearl/10 backdrop-blur-md ring-1 ring-inset ring-pearl/25 shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_10px_30px_-12px_rgba(0,0,0,0.45)] hover:bg-pearl/15 hover:ring-pearl/40 hover:text-gilded-100",
  // Ink glass: dark frosted surface with a faint gold ring on hover
  ink:
    "text-pearl bg-ink/55 backdrop-blur-md ring-1 ring-inset ring-pearl/15 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_10px_30px_-12px_rgba(0,0,0,0.6)] hover:ring-gilded/60",
  // Outline glass: thin gilded ring, almost transparent fill
  outline:
    "text-pearl bg-pearl/5 backdrop-blur-md ring-1 ring-inset ring-gilded/55 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset] hover:bg-gilded/10 hover:ring-gilded",
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & {
  href: ButtonHref;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  { variant = "gilded", size = "md", className, withArrow, children, ...rest },
  ref
) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const inner = (
    <>
      {/* Top inner highlight — gives the convex "lens" feel */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 to-transparent opacity-70 mix-blend-screen"
      />
      {/* Bottom soft reflection */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 bottom-0 h-1/3 rounded-b-full bg-gradient-to-t from-white/10 to-transparent opacity-60"
      />
      <span className="relative z-10 inline-flex items-center gap-3">
        {children}
        {withArrow && (
          <ArrowUpRight
            size={16}
            className="transition-transform duration-500 ease-silk group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        )}
      </span>
      {/* Specular sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-[900ms] ease-silk group-hover:left-[110%] group-hover:opacity-100 mix-blend-screen"
      />
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        data-cursor="link"
        {...anchorRest}
      >
        {inner}
      </Link>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      data-cursor="link"
      {...buttonRest}
    >
      {inner}
    </button>
  );
});
