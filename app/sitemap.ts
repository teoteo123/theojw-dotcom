import type { MetadataRoute } from "next";
import { NAV, SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return NAV.map(({ href }) => ({
    url: href === "/" ? SITE_URL : `${SITE_URL}${href}`,
    lastModified: now,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
