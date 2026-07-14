import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
          color: "white",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginBottom: 20,
          }}
        >
          OpenMarTech AI
        </h1>

        <p
          style={{
            fontSize: 34,
            opacity: 0.9,
          }}
        >
          Enterprise AI Platform
        </p>
      </div>
    ),
    size
  );
}