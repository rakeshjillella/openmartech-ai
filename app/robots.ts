import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://openmartech.ai/sitemap.xml",

    host: "https://openmartech.ai",
  };
}