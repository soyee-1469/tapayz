import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const wpUploads = path.resolve(repoRoot, "..", "wp-content", "uploads");
const outDir = path.resolve(repoRoot, "public", "uploads");

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

await copyDir(wpUploads, outDir);
console.log(`Copied WP uploads → ${path.relative(repoRoot, outDir)}`);

