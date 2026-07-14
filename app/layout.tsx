import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

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

  applicationName: "OpenMarTech AI",

  manifest: "/manifest.json",

  keywords: [
    "OpenMarTech AI",
    "Enterprise AI",
    "Artificial Intelligence",
    "Data Engineering",
    "AI Platform Engineering",
    "Machine Learning",
    "Responsible AI",
    "Explainable AI",
    "Lakehouse",
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
      url: "https://openmartech.ai",
    },
  ],

  creator: "Rakesh Jillella",

  publisher: "OpenMarTech AI",

  category: "technology",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  alternates: {
    canonical: "/",
  },

  appleWebApp: {
    capable: true,
    title: "OpenMarTech AI",
    statusBarStyle: "black-translucent",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openmartech.ai",
    siteName: "OpenMarTech AI",

    title: "OpenMarTech AI",

    description:
      "Enterprise Marketing Decision Intelligence Platform powered by modern Data Engineering, AI Platform Engineering and Responsible AI.",

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

    creator: "@rakeshjillella",

    title: "OpenMarTech AI",

    description:
      "Enterprise AI Platform for Data Engineering, Responsible AI and Decision Intelligence.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 5,

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#020617",
    },
  ],
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
        <ScrollToTop />

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