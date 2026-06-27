import fs from "fs";
import path from "path";
import sharp from "sharp";

const sourceDir = "./src/assets/Interior";
const destDir = "./src/assets/Interior-optimized";

// Recursively process directories
async function processDir(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    const relPath = path.relative(sourceDir, fullPath);
    const destFullPath = path.join(destDir, relPath);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destFullPath)) {
        fs.mkdirSync(destFullPath, { recursive: true });
      }
      await processDir(fullPath);
    } else if (entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const nameWithoutExt = path.basename(entry.name, ext);
      const outputFilePath = path.join(path.dirname(destFullPath), `${nameWithoutExt}.webp`);

      console.log(`Compressing: ${relPath} -> ${path.relative(destDir, outputFilePath)}`);

      try {
        await sharp(fullPath)
          .resize({
            width: 2048,
            height: 2048,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: 90 }) // Quality 90 is practically indistinguishable from raw, retaining maximum detail
          .toFile(outputFilePath);
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

async function main() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  console.log("Starting image compression...");
  await processDir(sourceDir);
  console.log("Image compression finished successfully!");
}

main().catch(console.error);
