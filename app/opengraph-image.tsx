import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FAF6EE 0%, #F2E9D6 50%, #E8D5A8 100%)",
          color: "#0B0B0D",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            letterSpacing: 8,
            fontSize: 22,
            textTransform: "uppercase",
            color: "#6B5A2F",
          }}
        >
          <span>Regalia</span>
          <span style={{ width: 60, height: 1, background: "#C9A96A" }} />
          <span>Vows</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              fontStyle: "italic",
              fontWeight: 400,
              maxWidth: 980,
              letterSpacing: -1,
            }}
          >
            Luxury wedding planner in Dubai.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#3a2f1a",
              maxWidth: 880,
            }}
          >
            Bespoke weddings, cinematic proposals and the private occasions
            that follow — composed from Dubai, staged worldwide.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6B5A2F",
            borderTop: "1px solid rgba(201,169,106,0.4)",
            paddingTop: 24,
          }}
        >
          <span>regaliavows.com</span>
          <span style={{ letterSpacing: 4, textTransform: "uppercase" }}>
            Dubai · UAE · Worldwide
          </span>
        </div>
      </div>
    ),
    size,
  );
}
