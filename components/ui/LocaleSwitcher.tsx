"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname, type Href } from "@/lib/i18n/navigation";
import { locales, localeLabel, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/cn";

/**
 * EN · RU toggle rendered in the footer. Clicking a locale calls
 * `router.replace(pathname, { locale })` so next-intl swaps the prefix while
 * preserving the current path; we also persist the choice in the
 * `NEXT_LOCALE` cookie so subsequent first-visits skip the auto-redirect.
 */
export function LocaleSwitcher({ className }: { className?: string }) {
  const active = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common.footer");
  const [isPending, startTransition] = useTransition();

  function setLocale(next: Locale) {
    if (next === active) return;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      // usePathname() returns the matched route template (e.g. "/services/[slug]")
      // while router.replace expects a concrete Href. The runtime value is the
      // live URL, so we cast through `unknown` to a Parameters lookup that
      // satisfies the strict template type without using `any`.
      router.replace(
        pathname as unknown as Parameters<typeof router.replace>[0],
        { locale: next },
      );
    });
  }

  return (
    <div
      role="group"
      aria-label={t("languageLabel")}
      className={cn(
        "inline-flex items-center gap-2 text-xs uppercase tracking-widest2",
        isPending && "opacity-60",
        className,
      )}
    >
      {locales.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-2">
          {i > 0 && <span aria-hidden className="h-3 w-px bg-ink/15" />}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-current={active === l ? "true" : undefined}
            data-cursor="link"
            className={cn(
              "transition-colors",
              active === l ? "text-gilded" : "text-ink/60 hover:text-gilded",
            )}
          >
            {localeLabel[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
