const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const input = path.join(__dirname, "..", "public", "logos", "logo.png");

const outputs = [
  { file: "app/icon.png", size: 512 },
  { file: "app/apple-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
  { file: "public/favicon-32x32.png", size: 32 },
  { file: "public/favicon-16x16.png", size: 16 },
];

(async () => {
  for (const out of outputs) {
    const dest = path.join(__dirname, "..", out.file);

    await sharp(input)
      .resize(out.size, out.size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(dest);

    console.log("✓", out.file);
  }

  console.log("\nPNG icons generated successfully.");
  console.log(
    "\nGenerate favicon.ico using https://favicon.io/favicon-converter/ by uploading public/favicon-32x32.png"
  );
})();