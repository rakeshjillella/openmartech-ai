import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OpenMarTech AI",
    template: "%s | OpenMarTech AI",
  },
  description:
    "OpenMarTech AI is a production-inspired Enterprise AI Platform showcasing modern Data Engineering, AI Platform Engineering, Responsible AI, Explainable AI, MLOps, Generative AI, and Executive Decision Intelligence.",

  keywords: [
    "OpenMarTech AI",
    "Enterprise AI",
    "Data Engineering",
    "Machine Learning",
    "Responsible AI",
    "Explainable AI",
    "Generative AI",
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "MLflow",
    "Power BI",
    "Open Source",
  ],

  authors: [
    {
      name: "Rakesh Jillella",
    },
  ],

  creator: "Rakesh Jillella",

  openGraph: {
    title: "OpenMarTech AI",
    description:
      "Enterprise Marketing Decision Intelligence Platform powered by modern Data Engineering and Responsible AI.",
    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "OpenMarTech AI",
    description:
      "Enterprise Marketing Decision Intelligence Platform",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}