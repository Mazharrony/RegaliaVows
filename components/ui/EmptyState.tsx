import { Link, type Href } from "@/lib/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  cta?: { label: string; href: Href | string; external?: boolean };
  theme?: "ink" | "pearl";
  className?: string;
};

/**
 * Quiet, editorial "forthcoming" panel used wherever real content is
 * pending (Case Studies, Press, Journal, Testimonials). Kept deliberately
 * uniform so empty surfaces never feel like a 404.
 */
export function EmptyState({
  eyebrow,
  title,
  body,
  cta,
  theme = "ink",
  className,
}: Props) {
  const isLight = theme === "pearl";

  return (
    <div
      className={cn(
        "mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 py-24 text-center md:py-32",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow className={isLight ? "!text-gilded-800" : ""}>{eyebrow}</Eyebrow>
      )}
      <h3
        className={cn(
          "font-display text-display-md italic leading-[1.05]",
          isLight ? "text-ink" : "text-pearl",
        )}
      >
        {title}
      </h3>
      {body && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed",
            isLight ? "text-ink/85" : "text-pearl/85",
          )}
        >
          {body}
        </p>
      )}
      {cta && (
        cta.external && typeof cta.href === "string" ? (
          <a
            href={cta.href}
            data-cursor="link"
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "group inline-flex items-center gap-4 font-tight text-eyebrow uppercase tracking-widest2 transition-colors",
              isLight ? "text-ink hover:text-gilded-600" : "text-pearl hover:text-gilded",
            )}
          >
            <span className="h-px w-12 bg-gilded transition-all duration-500 ease-silk group-hover:w-24" />
            {cta.label}
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        ) : (
          <Link
            href={cta.href as Href}
            data-cursor="link"
            className={cn(
              "group inline-flex items-center gap-4 font-tight text-eyebrow uppercase tracking-widest2 transition-colors",
              isLight ? "text-ink hover:text-gilded-600" : "text-pearl hover:text-gilded",
            )}
          >
            <span className="h-px w-12 bg-gilded transition-all duration-500 ease-silk group-hover:w-24" />
            {cta.label}
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        )
      )}
    </div>
  );
}
