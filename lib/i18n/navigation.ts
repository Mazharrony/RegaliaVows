import { createNavigation } from "next-intl/navigation";
import type { ComponentProps } from "react";
import { routing } from "./routing";

// Locale-aware navigation primitives. Components that render persistent
// navigation (Nav, Footer, Button, page CTAs) should import <Link>, useRouter
// and usePathname from here so the active locale is preserved across clicks
// and the URL is correctly prefixed.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

/** Strongly-typed href surface accepted by the locale-aware <Link>. */
export type Href = ComponentProps<typeof Link>["href"];
