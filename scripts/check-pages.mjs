import fs from "node:fs/promises";
import assert from "node:assert/strict";
const origin = process.env.BERKSHIRE_CHECK_ORIGIN || "http://localhost:3107";
const pages = JSON.parse(await fs.readFile("src/data/weebly.json", "utf8"));
const redirects = JSON.parse(
  await fs.readFile("src/data/legacy-redirects.json", "utf8"),
);
const paths = [
  ...new Set([...pages.map((p) => p.path), "/resources", "/our-pastor"]),
];
let next = 0;
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (next < paths.length) {
      const path = paths[next++];
      const response = await fetch(origin + path);
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.match(
        html,
        /<main[^>]*id="main"/,
        path + " must have a working skip link",
      );
    }
  }),
);
for (const { source, destination } of redirects) {
  const response = await fetch(origin + source, { redirect: "manual" });
  assert.equal(response.status, 308, source);
  assert.equal(response.headers.get("location"), destination, source);
}
const missing = await fetch(origin + "/this-page-does-not-exist");
assert.equal(missing.status, 404);
console.log(
  `Passed: ${paths.length} pages, ${redirects.length} redirects, and unknown-route 404.`,
);
