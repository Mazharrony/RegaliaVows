"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";

// Keep Sonner off the SSR output without relying on next/dynamic's lazy
// boundary, which can intermittently fail during client module resolution.

export function ClientToaster() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Toaster
      theme="light"
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#FFFDF7",
          color: "#0B0B0D",
          border: "1px solid rgba(214,161,64,0.35)",
        },
      }}
    />
  );
}
