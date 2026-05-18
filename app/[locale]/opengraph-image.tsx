import { ImageResponse } from "next/og";
import { site, getSiteCopy } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const og: Record<Locale, {
  alt: string;
  title: string;
  body: string;
  tagline: string;
}> = {
  en: {
    alt: `${site.name} — luxury wedding planner in Dubai`,
    title: "Luxury wedding planner in Dubai.",
    body:
      "Bespoke weddings, cinematic proposals and the private occasions that follow — composed from Dubai, staged worldwide.",
    tagline: "Dubai · UAE · Worldwide",
  },
  ru: {
    alt: `${site.name} — люксовый свадебный планировщик в Дубае`,
    title: "Люксовый свадебный планировщик в Дубае.",
    body:
      "Авторские свадьбы, кинематографичные предложения и частные события, что следуют после — пишутся в Дубае, ставятся по всему миру.",
    tagline: "Дубай · ОАЭ · По всему миру",
  },
};

export function generateImageMetadata({ params }: { params: { locale: Locale } }) {
  const t = og[params.locale] ?? og.en;
  return [{ id: "default", alt: t.alt, size, contentType }];
}

export const alt = og.en.alt;

export default async function OpenGraphImage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = og[params.locale] ?? og.en;
  // Reference getSiteCopy to keep parity with metadata pipeline.
  void getSiteCopy(params.locale);
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
            {t.title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#3a2f1a",
              maxWidth: 880,
            }}
          >
            {t.body}
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
            {t.tagline}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
