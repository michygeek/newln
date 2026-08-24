import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

const siteUrl = "https://www.newlinewestafrica.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/industries",
    "/why-choose-us",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
