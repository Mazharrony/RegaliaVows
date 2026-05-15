"use client";

import dynamic from "next/dynamic";

// Sonner is only used by enquiry forms well below the fold. Loading it lazily
// (ssr:false) keeps it out of the initial JS payload and off the hydration
// critical path. `ssr:false` is only legal inside a Client Component, hence
// this thin wrapper.
const Toaster = dynamic(
  () => import("sonner").then((m) => m.Toaster),
  { ssr: false }
);

export function ClientToaster() {
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
