import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const wpUploads = path.resolve(repoRoot, "..", "wp-content", "uploads");
const outDir = path.resolve(repoRoot, "public", "images");

async function copyFlatIntoImages(srcDir, destDir) {
  await fs.mkdir(destDir, { recursive: true });

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(srcPath);
      } else if (entry.isFile()) {
        const destPath = path.join(destDir, entry.name);
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  await walk(srcDir);
}

await copyFlatIntoImages(wpUploads, outDir);
console.log(`Copied WP uploads (flat) → ${path.relative(repoRoot, outDir)}`);

