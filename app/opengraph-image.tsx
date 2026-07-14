import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg,#0f172a,#1e3a8a,#0891b2)",
          color: "white",
          padding: 80,
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 700,
          }}
        >
          <div
            style={{
              fontSize: 70,
              fontWeight: 900,
              marginBottom: 18,
            }}
          >
            OpenMarTech AI
          </div>

          <div
            style={{
              fontSize: 34,
              opacity: 0.9,
              lineHeight: 1.35,
            }}
          >
            Enterprise Decision Intelligence Platform
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 42,
              gap: 18,
              fontSize: 24,
            }}
          >
            <span>AI Engineering</span>
            <span>•</span>
            <span>Data Engineering</span>
            <span>•</span>
            <span>Responsible AI</span>
          </div>
        </div>

        <div
          style={{
            width: 210,
            height: 210,
            borderRadius: 48,
            background: "rgba(255,255,255,.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "4px solid rgba(255,255,255,.25)",
          }}
        >
          M
        </div>
      </div>
    ),
    size
  );
}