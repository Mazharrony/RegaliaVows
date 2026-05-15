import { cn } from "@/lib/cn";

type Theme = "ink" | "pearl";

export function Section({
  id,
  theme = "pearl",
  className,
  children,
  bleed = false,
}: {
  id?: string;
  theme?: Theme;
  className?: string;
  children: React.ReactNode;
  bleed?: boolean;
}) {
  const isLight = theme === "pearl";
  return (
    <section
      id={id}
      data-theme={isLight ? "light" : "dark"}
      className={cn(
        "relative isolate overflow-hidden",
        isLight ? "bg-cream text-ink" : "bg-ink text-pearl",
        bleed ? "py-0" : "py-24 md:py-36 lg:py-44",
        className
      )}
    >
      {children}
    </section>
  );
}
