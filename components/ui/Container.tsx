import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        size === "default" && "max-w-[1400px]",
        size === "wide" && "max-w-[1600px]",
        size === "narrow" && "max-w-[960px]",
        className
      )}
    >
      {children}
    </div>
  );
}
