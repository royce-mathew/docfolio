import { MetadataRoute } from "next"
import { Project, projects } from "#site/content"
import config from "@/config/data"

//   The sitemap can be wrapped in a Promise as well
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = config.websiteURL || "http://localhost:3000"

  const defaultPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2025-04-12"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2025-04-12"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // other pages
  ]

  const sitemap = [
    ...defaultPages,
    ...projects.map((project: Project) => ({
      url: `${baseUrl}/${project.slug}`,
      lastModified: project.modifiedDate,
      changeFrequency: "daily",
      priority: 0.8,
    })),
  ]

  return sitemap as MetadataRoute.Sitemap
}
