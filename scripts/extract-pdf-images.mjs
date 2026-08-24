// Extracts embedded raster images from the Newline West Africa company profile PDF
// using pdfjs-dist (pure JS, no native deps) and writes them out as PNGs
// via pngjs. Run with: node scripts/extract-pdf-images.mjs <input.pdf>
import path from "path";
import fs from "fs";
import { PNG } from "pngjs";

const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

const inputPath =
  process.argv[2] ||
  "C:/Users/USER-PC/Downloads/CALIJACKSON RESOURCES LIMITED PROFILE 2.pdf";
const outDir = path.resolve("public/images/extracted");

fs.mkdirSync(outDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(inputPath));
const doc = await pdfjsLib.getDocument({ data, isEvalSupported: false }).promise;

console.log(`Loaded PDF with ${doc.numPages} pages`);

let savedCount = 0;
const manifest = [];

function imgDataToPNGBuffer(imgData) {
  const { width, height, data: src, kind } = imgData;
  const png = new PNG({ width, height });

  // kind: 1 = GRAYSCALE_1BPP (rare here), 2 = RGB_24BPP, 3 = RGBA_32BPP
  if (kind === 3) {
    png.data.set(src);
  } else if (kind === 2) {
    // RGB -> RGBA
    let si = 0;
    for (let di = 0; di < png.data.length; di += 4) {
      png.data[di] = src[si++];
      png.data[di + 1] = src[si++];
      png.data[di + 2] = src[si++];
      png.data[di + 3] = 255;
    }
  } else {
    // Grayscale or unknown - best effort
    const channels = src.length / (width * height);
    let si = 0;
    for (let di = 0; di < png.data.length; di += 4) {
      const v = src[si];
      png.data[di] = v;
      png.data[di + 1] = v;
      png.data[di + 2] = v;
      png.data[di + 3] = 255;
      si += channels;
    }
  }
  return PNG.sync.write(png);
}

for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
  const page = await doc.getPage(pageNum);
  const opList = await page.getOperatorList();
  const { OPS } = pdfjsLib;

  const imageNames = new Set();
  for (let i = 0; i < opList.fnArray.length; i++) {
    const fn = opList.fnArray[i];
    if (fn === OPS.paintImageXObject || fn === OPS.paintImageXObjectRepeat) {
      const name = opList.argsArray[i][0];
      imageNames.add(name);
    }
  }

  for (const name of imageNames) {
    try {
      const imgData = await new Promise((resolve, reject) => {
        page.objs.get(name, resolve);
        setTimeout(() => reject(new Error("timeout")), 5000);
      });

      if (!imgData || !imgData.width || !imgData.height) continue;
      if (imgData.width < 120 || imgData.height < 120) continue; // skip tiny icons/logos

      const buffer = imgDataToPNGBuffer(imgData);
      const fileName = `page${String(pageNum).padStart(2, "0")}-${name.replace(/[^a-zA-Z0-9_-]/g, "")}.png`;
      fs.writeFileSync(path.join(outDir, fileName), buffer);
      manifest.push({
        file: fileName,
        page: pageNum,
        width: imgData.width,
        height: imgData.height,
      });
      savedCount++;
      console.log(`Saved ${fileName} (${imgData.width}x${imgData.height})`);
    } catch (err) {
      console.warn(`Skipping image ${name} on page ${pageNum}: ${err.message}`);
    }
  }
}

fs.writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify(manifest, null, 2)
);

console.log(`Done. Extracted ${savedCount} images to ${outDir}`);
