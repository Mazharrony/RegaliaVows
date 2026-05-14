import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  withRule = true,
}: {
  children: React.ReactNode;
  className?: string;
  withRule?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-tight text-eyebrow uppercase tracking-widest2 text-gold",
        className
      )}
    >
      {withRule && <span className="h-px w-10 bg-gold-flow opacity-90" aria-hidden />}
      {children}
    </span>
  );
}
