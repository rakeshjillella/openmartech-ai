import type { Metadata } from "next";
import Footer123 from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Layout Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <div
          style={{
            background: "red",
            color: "white",
            fontSize: "40px",
            padding: "40px",
          }}
        >
          ROOT LAYOUT
        </div>

        {children}

        <div
          style={{
            background: "green",
            color: "white",
            fontSize: "40px",
            padding: "40px",
          }}
        >
          <Footer123 />
        </div>

      </body>
    </html>
  );
}