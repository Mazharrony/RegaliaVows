// Root layout — required by Next.js but kept minimal so that the real
// <html>/<body> shell can live inside `app/[locale]/layout.tsx`, where the
// active locale is known and can drive `lang`, fonts, and JSON-LD.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
