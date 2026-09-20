import type { MetadataRoute } from "next";
import pages from "@/data/weebly.json";
import { canonical } from "@/lib/site";

const routes = [
  "/",
  "/who-we-are",
  "/our-pastor",
  "/history",
  "/beliefs",
  "/missions",
  "/sermons",
  "/visit",
  "/salvation",
  "/donate",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...new Set([...routes, "/resources", ...pages.map(page => page.path)])].map((route) => ({
    url: canonical(route),
    lastModified: now,
    changeFrequency: route === "/sermons" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/salvation" ? 0.9 : 0.7,
  }));
}
