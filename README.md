# Berkshire Hills Baptist Church

Website redesign for Berkshire Hills Baptist Church, 190 Pleasant Street (Route 102), Lee, Massachusetts. Pastor Doug Mann.

- Repository: `edesent/berkshire-hills-baptist`
- Design preview: https://berkshirehillsbaptist.elijahdesent.com
- Content source: https://berkshirehillsbaptist.weebly.com
- Stack: Next.js 16.2.4 App Router, React 19, TypeScript, Tailwind CSS 4.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
```

The preview deliberately uses `noindex` and disallows crawling. Keep those settings until the church approves a production domain launch.

## Content and pages

`src/lib/site.ts` holds the church's facts and service times. The current schedule is Sunday School 10 a.m., morning worship 11 a.m., Sunday afternoon service 2 p.m., and Wednesday prayer and Bible study 6:30 p.m. The website's original service descriptions call the afternoon gathering “Sunday Evening Praise”; the redesigned schedule labels it by the actual time of day.

`src/data/weebly.json` preserves all 617 pages in the original sitemap as of September 19, 2026, including 574 sermon and devotional posts. The source URL is retained for every page. Scripts, old layout styling, comments, and obsolete forms are removed from the imported markup; the church's article text, resource links, audio players, and prayer embeds remain. Original historical event pages are labeled as archives. The full doctrinal statement is preserved from the source, replacing the previous shortened version.

`src/app/[...slug]/page.tsx` generates the imported resource and article routes. Sermons, Grow, Growing in Grace, and Wednesday Night have searchable listings. `/resources` links to all current sections and historical collections. `src/data/legacy-redirects.json` redirects all 43 old `.html` URLs to their corresponding pages.

To refresh the archive:

```sh
BERKSHIRE_IMPORT_CACHE=/tmp/berkshire-refresh-2026-09-20 node scripts/import-weebly.mjs
```

Use a fresh cache directory for a new snapshot. Review the resulting content diff. The homepage's featured audio is in `src/lib/sermon-audio.ts`; update it separately when new sermons are published. Media files and prayer forms in the historical archive are still hosted by their original providers.

## Photographs

Use the church's actual photographs. The homepage uses the user-supplied 1808 × 870 `public/bhbc/outside-building.png` as its exterior hero image. Desktop uses a restrained dark gradient for readable text; mobile displays the complete photograph above the copy with no overlay. `public/bhbc/pastor-doug.png` is the user-supplied 1384 × 1136 portrait, used on the homepage and Our Pastor page. Other source photos are small; avoid excessive enlargement. Fonts are self-hosted in `public/fonts`.

## Webchat and contact delivery

`src/lib/chat.ts` contains the public widget key for Berkshire's **existing** chat account. Do not create a duplicate or substitute another church's key. The shared root layout mounts `ChurchChat` exactly once, including on archive pages.

The existing account is connected to the owner's **Website Church Chat** Slack workspace, private channel **#berkshire-baptist** (`C0C3Y7X1UQY`). The bot's membership and channel access were verified. Chat is enabled by default; set `NEXT_PUBLIC_CHAT_ENABLED=false` only to temporarily show phone/Facebook contact options. The same fallback appears if the external widget script fails to load. Slack credentials remain in the chat backend and are never included in this repository. No test message was posted to Slack.

`FindUs` embeds a responsive Google Map for 190 Pleasant Street, Lee, MA on the homepage and Directions page, with a separate directions link.

The contact form requires `SLACK_WEBHOOK_URL` on the server. It returns HTTP 503 if delivery is unconfigured and never logs visitors' messages as a substitute for delivery or reports them as sent. Do not commit webhook URLs, admin secrets, or Slack tokens.

## Validation and deployment

Run lint and the production build before publishing. Verify desktop/mobile layout, navigation, archive search, image loading, and the contact bubble. Do not submit a real chat or contact message without authorization.

After every push, check the Vercel deployment until it reaches `Ready`. If it fails, read the logs, fix the issue, and verify the replacement deployment. See `AGENTS.md`.
