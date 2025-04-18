import { MetadataRoute } from "next"
import config from "@/config/data"

export default function robots(): MetadataRoute.Robots {
  const websiteUrl = config.websiteURL || "http://localhost:3000"

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
    },
    sitemap: [`${websiteUrl}/sitemap.xml`],
  }
}
