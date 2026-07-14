import type { MetadataRoute } from "next";

const BASE_URL = "https://openmartech.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/architecture`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${BASE_URL}/platform/data-engineering`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/platform/ai-platform`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/platform/responsible-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/platform/explainable-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}