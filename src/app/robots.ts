import type { MetadataRoute } from "next";
import { canonical, siteUrl } from "@/lib/site";

/**
 * The site is live on the church's own domain, open to search engines and
 * to the link-preview crawlers used by Facebook, LinkedIn, and the like.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: canonical("/sitemap.xml"),
    host: siteUrl,
  };
}
