import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/data/site";

export const alt = `${SITE_NAME} — web and AI engineering`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const fontRes = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/schibsted-grotesk@5.2.5/latin-500-normal.woff"
    );
    return fontRes.ok ? fontRes.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const font = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101211",
          color: "#FAFBFA",
          padding: "72px 80px",
          fontFamily: font ? "Schibsted Grotesk" : "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#6FAD97",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#0E5C4A",
            }}
          />
          theojw.com
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#CDD0CE",
              maxWidth: 780,
              fontWeight: 400,
            }}
          >
            {SITE_DESCRIPTION}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [
            {
              name: "Schibsted Grotesk",
              data: font,
              style: "normal" as const,
              weight: 500 as const,
            },
          ]
        : undefined,
    }
  );
}
