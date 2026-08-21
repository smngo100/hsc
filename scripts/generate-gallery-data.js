// scripts/generate-gallery-data.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, "../public/attachments/gallery");
const categories = fs
  .readdirSync(galleryDir)
  .filter((f) => fs.statSync(path.join(galleryDir, f)).isDirectory());

const items = [];
let counter = 1;

for (const category of categories) {
  const files = fs
    .readdirSync(path.join(galleryDir, category))
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  for (const file of files) {
    items.push({
      id: `img-${counter++}`,
      category,
      image: `/attachments/gallery/${category}/${file}`,
    });
  }
}

const output = `import { GalleryItem } from "../types";

export const GALLERY_ITEMS: GalleryItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, "../src/data/galleryData.ts"), output);

console.log(
  `Generated ${items.length} gallery items across ${categories.length} categories.`,
);
