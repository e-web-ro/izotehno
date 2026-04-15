import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/components/locations";
import { BLOG_POSTS } from "@/components/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://izotehno.ro";
  const now = new Date();

  const staticRoutes = [
    "",
    "/servicii",
    "/portofoliu",
    "/blog",
    "/calculator",
    "/contact",
    "/termeni",
    "/politica-confidentialitate",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${base}/zone/${l.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...locationRoutes, ...blogRoutes];
}

