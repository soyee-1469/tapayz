import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const downloadsDir = path.resolve("/Users/ymy/Downloads");

const pages = [
  { key: "main", file: "index.json" },
  { key: "company", file: "Company.json" },
  { key: "tapayz-card", file: "Tapayz Card.json" },
  { key: "contact", file: "Contact.json" },
];

function uniq(arr) {
  return [...new Set(arr)].filter(Boolean);
}

function stripTags(s) {
  return s
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function extractFromBuilderString(builder) {
  const assets = [];
  const links = [];
  const rawHtmlBlocks = [];

  const assetRe =
    /https?:\/\/tapayz\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/[^\s"'\\]+?\.(?:png|jpe?g|webp|gif|svg|mp4|webm|mov)/gi;
  const linkRe = /link_option_url="([^"]+)"/gi;

  for (const m of builder.matchAll(assetRe)) assets.push(m[0]);
  for (const m of builder.matchAll(linkRe)) links.push(m[1]);

  // capture inline HTML chunks inside et_pb_text shortcodes
  const textBlockRe =
    /\[et_pb_text[^\]]*\]([\s\S]*?)\[\/et_pb_text\]/gi;
  for (const m of builder.matchAll(textBlockRe)) rawHtmlBlocks.push(m[1]);

  return { assets, links, rawHtmlBlocks };
}

function toNextPublicPath(url) {
  // https://tapayz.com/wp-content/uploads/2025/01/foo.png -> /uploads/2025/01/foo.png
  const idx = url.indexOf("/wp-content/uploads/");
  if (idx === -1) return url;
  return url.slice(idx + "/wp-content".length);
}

async function main() {
  const out = {};

  for (const p of pages) {
    const filePath = path.join(downloadsDir, p.file);
    const json = JSON.parse(await fs.readFile(filePath, "utf8"));

    const dataValues = Object.values(json?.data ?? {});
    const assets = [];
    const links = [];
    const rawHtmlBlocks = [];

    for (const v of dataValues) {
      if (typeof v !== "string") continue;
      const extracted = extractFromBuilderString(v);
      assets.push(...extracted.assets);
      links.push(...extracted.links);
      rawHtmlBlocks.push(...extracted.rawHtmlBlocks);
    }

    const cleanedTextBlocks = uniq(rawHtmlBlocks)
      .map(stripTags)
      .filter((t) => t && t.length >= 2);

    out[p.key] = {
      source: filePath,
      assets: uniq(assets),
      assets_next_paths: uniq(assets).map(toNextPublicPath),
      links: uniq(links),
      text_blocks: cleanedTextBlocks,
    };
  }

  const outPath = path.join(repoRoot, "divi-extract.json");
  await fs.writeFile(outPath, JSON.stringify(out, null, 2), "utf8");
  console.log(`Wrote ${path.relative(repoRoot, outPath)}`);
}

await main();

