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
        "mx-auto w-full px-6 md:px-10 3xl:px-16",
        size === "default" && "max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[2000px]",
        size === "wide" && "max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2200px]",
        size === "narrow" && "max-w-[960px] 3xl:max-w-[1080px] 4xl:max-w-[1240px]",
        className
      )}
    >
      {children}
    </div>
  );
}
