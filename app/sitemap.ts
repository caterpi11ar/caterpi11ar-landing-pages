import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://caterpi11ar.com",
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
