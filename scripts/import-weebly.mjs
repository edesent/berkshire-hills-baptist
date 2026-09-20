import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";

const origin = "https://berkshirehillsbaptist.weebly.com";
const cache =
  process.env.BERKSHIRE_IMPORT_CACHE || "/tmp/berkshire-audit/source";
await fs.mkdir(cache, { recursive: true });
const aliases = {
  "/index.html": "/",
  "/about.html": "/who-we-are",
  "/doctrine.html": "/beliefs",
  "/services.html": "/services",
  "/special-messages.html": "/special-messages",
  "/directions.html": "/directions",
  "/contact-us.html": "/contact",
  "/eternity.html": "/eternity",
  "/knowing-god.html": "/salvation",
  "/missions1.html": "/missions",
  "/missions.html": "/missions/map",
  "/missionary-sermons.html": "/missionary-sermons",
  "/what-to-expect.html": "/visit",
  "/sermons1.html": "/sermons",
  "/wed-night.html": "/wed-night",
  "/donate.html": "/donate",
  "/grow.html": "/grow",
  "/prayer.html": "/prayer",
  "/all-prayer-requests.html": "/all-prayer-requests",
  "/blog.html": "/blog",
};
function routeFor(url) {
  const p = new URL(url, origin).pathname;
  return aliases[p] || (p.endsWith(".html") ? "/archive/" + p.slice(1, -5) : p);
}
async function get(url) {
  const file = path.join(
    cache,
    Buffer.from(url).toString("base64url") + ".html",
  );
  try {
    return await fs.readFile(file, "utf8");
  } catch {}
  const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const html = await res.text();
  await fs.writeFile(file, html);
  return html;
}
const sitemap = load(await get(origin + "/sitemap.xml"), { xml: true });
const urls = sitemap("loc")
  .map((_, e) => sitemap(e).text())
  .get();
const known = new Set(urls.map((u) => new URL(u).pathname));
function href(value) {
  if (!value || typeof value !== "string") return "";
  try {
    const url = new URL(value, origin);
    if (!["https:", "http:", "mailto:", "tel:"].includes(url.protocol))
      return "";
    if (url.hostname === new URL(origin).hostname && known.has(url.pathname))
      return routeFor(url.href) + url.hash;
    if (url.protocol === "http:") url.protocol = "https:";
    return url.href;
  } catch {
    return "";
  }
}
function sanitize(fragment, title) {
  const $ = load(fragment, null, false);
  $(
    "script,style,form,input,button,textarea,select,object,embed,.blog-social,.blog-comments,.blog-comments-bottom,.blog-sidebar,.blog-read-more,.blogCommentWrap",
  ).remove();
  $("a.__cf_email__").replaceWith('<a href="/contact">contact the church</a>');
  $("table,tbody,tr,td").each((_, e) => {
    e.tagName = "div";
  });
  $("font,span").each((_, e) => {
    $(e).replaceWith($(e).contents());
  });
  const allowed = new Set([
    "div",
    "p",
    "br",
    "hr",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "sup",
    "sub",
    "blockquote",
    "ul",
    "ol",
    "li",
    "a",
    "img",
    "iframe",
    "audio",
    "source",
  ]);
  $("*").each((_, e) => {
    const el = $(e),
      tag = e.tagName;
    if (!allowed.has(tag)) {
      el.replaceWith(el.contents());
      return;
    }
    const attrs = { ...e.attribs };
    for (const attr of Object.keys(attrs)) el.removeAttr(attr);
    if (tag === "a") {
      const link = href(attrs.href);
      if (link) el.attr("href", link);
    }
    if (tag === "img") {
      const src = href(attrs.src);
      if (!src || /file_icons|pixel.gif/.test(src)) {
        el.remove();
        return;
      }
      el.attr({
        src,
        alt:
          attrs.alt && attrs.alt !== "Picture"
            ? attrs.alt
            : title + " — church archive image",
        loading: "lazy",
        decoding: "async",
      });
    }
    if (tag === "iframe") {
      const src = href(attrs.src);
      if (
        !src ||
        !/https:\/\/(archive\.org|airtable\.com|www\.youtube\.com|www\.google\.com)\//.test(
          src,
        )
      ) {
        el.remove();
        return;
      }
      el.attr({
        src,
        title: src.includes("archive.org") ? "Listen: " + title : title,
        loading: "lazy",
        class: src.includes("archive.org")
          ? "archive-player"
          : "resource-embed",
      });
    }
    if (tag === "audio") el.attr({ controls: "", preload: "none" });
    if (tag === "source" && attrs.src) el.attr("src", href(attrs.src));
  });
  $("div,p")
    .get()
    .reverse()
    .forEach((e) => {
      const el = $(e);
      if (!el.text().trim() && !el.find("img,iframe,audio,hr").length)
        el.remove();
    });
  return $.html();
}
const pages = [];
let done = 0;
const queue = [...urls];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      const $ = load(await get(url));
      const isPost = new URL(url).pathname.split("/").length > 2;
      const content = isPost ? $(".blog-post").first() : $("#wsite-content");
      const title =
        (isPost
          ? content.find(".blog-title").text()
          : $("title").text().split(" - ")[0]
        ).trim() || "Church archive";
      const posts = content.find(".blog-post");
      let html;
      let entries = [];
      if (!isPost && posts.length) {
        entries = posts
          .map((_, e) => ({
            title: $(e).find(".blog-title").text().trim(),
            date: $(e).find(".date-text").text().trim(),
            href: href($(e).find(".blog-title a").attr("href")),
          }))
          .get();
        html = "";
      } else {
        html = sanitize(
          isPost
            ? content.find(".blog-content").html() || ""
            : content.html() || "",
          title,
        );
      }
      pages.push({
        path: routeFor(url),
        source: url,
        title,
        date: isPost ? content.find(".date-text").text().trim() : "",
        html,
        entries,
        section: new URL(url).pathname.split("/")[1],
      });
      done++;
      if (done % 100 === 0) console.log(`Imported ${done}/${urls.length}`);
    }
  }),
);
pages.sort((a, b) => a.path.localeCompare(b.path));
// Listing pages include every imported post, not just the first Weebly page.
for (const [route, section] of [
  ["/sermons", "sermons1"],
  ["/grow", "grow"],
  ["/blog", "blog"],
  ["/wed-night", "wed-night"],
  ["/archive/old-sermons", "old-sermons"],
]) {
  const page = pages.find((p) => p.path === route);
  if (page)
    page.entries = pages
      .filter((p) => p.section === section && p.date)
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .map((p) => ({ title: p.title, date: p.date, href: p.path }));
}
await fs.writeFile(
  "src/data/weebly.json",
  JSON.stringify(pages, null, 2) + "\n",
);
await fs.writeFile(
  "src/data/legacy-redirects.json",
  JSON.stringify(
    urls
      .filter((u) => new URL(u).pathname.endsWith(".html"))
      .map((u) => ({
        source: new URL(u).pathname,
        destination: routeFor(u),
        permanent: true,
      })),
    null,
    2,
  ) + "\n",
);
console.log(
  `Saved ${pages.length} pages, including ${pages.filter((p) => p.date).length} posts.`,
);
