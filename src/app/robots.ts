import type { MetadataRoute } from "next";
import { canonical, siteUrl } from "@/lib/site";

/**
 * This build re-hosts the church's own content on a demo domain. Left
 * crawlable it could outrank berkshirehillsbaptist.weebly.com for their own
 * name, so it is closed to robots until it becomes the live site on their domain — at which
 * point flip to `allow: "/"` here and to index/follow in layout.tsx.
 */
/**
 * Search engines stay closed out for now (see index/follow in layout.tsx), but
 * the link-preview crawlers used by Facebook, Messenger, Instagram, X,
 * LinkedIn, Slack, WhatsApp, Discord and Telegram must be able to read a page
 * or a shared link shows no picture or description (Facebook reports a 403).
 * When the site is opened to search engines, replace both rules with a single
 * `{ userAgent: "*", allow: "/" }` here and flip index/follow in layout.tsx.
 */
const linkPreviewBots = [
  "facebookexternalhit",
  "Facebot",
  "meta-externalagent",
  "meta-externalfetcher",
  "Twitterbot",
  "LinkedInBot",
  "Slackbot",
  "Slackbot-LinkExpanding",
  "WhatsApp",
  "Discordbot",
  "TelegramBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: linkPreviewBots, allow: "/" },
      { userAgent: "*", disallow: "/" },
    ],
    sitemap: canonical("/sitemap.xml"),
    host: siteUrl,
  };
}
