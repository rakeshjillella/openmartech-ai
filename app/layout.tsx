import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

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
  metadataBase: new URL("https://openmartech.ai"),

  title: {
    default: "OpenMarTech AI",
    template: "%s | OpenMarTech AI",
  },

  description:
    "Enterprise AI Platform showcasing Data Engineering, AI Platform Engineering, Responsible AI, Explainable AI, MLOps, Lakehouse Architecture, Streaming Analytics and Executive Decision Intelligence.",

  keywords: [
    "OpenMarTech AI",
    "Enterprise AI",
    "Data Engineering",
    "Machine Learning",
    "Responsible AI",
    "Explainable AI",
    "MLOps",
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "Apache Iceberg",
    "MLflow",
    "Power BI",
    "LangChain",
    "Generative AI",
    "Enterprise Architecture",
  ],

  authors: [
    {
      name: "Rakesh Jillella",
    },
  ],

  creator: "Rakesh Jillella",

  applicationName: "OpenMarTech AI",

  openGraph: {
    title: "OpenMarTech AI",
    description:
      "Enterprise Marketing Decision Intelligence Platform powered by modern Data Engineering, AI Platform Engineering and Responsible AI.",
    type: "website",
    locale: "en_US",
    siteName: "OpenMarTech AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenMarTech AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OpenMarTech AI",
    description:
      "Enterprise Marketing Decision Intelligence Platform",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-slate-50
          text-slate-900
          antialiased
          transition-colors
          duration-300

          dark:bg-slate-950
          dark:text-slate-100
        "
      >
        <ThemeProvider>

          <div className="flex min-h-screen flex-col">

            <Navbar />

            <main
              className="
                flex-1
                pt-20
                transition-colors
                duration-300
              "
            >
              {children}
            </main>

            <Footer />

          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}