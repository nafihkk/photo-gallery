import sharp from "sharp";
import fs from "fs";

// folders
const originalDir = "src/assets/photos/original/";
const hdDir = "src/assets/photos/hd/";

// ensure hd folder exists
if (!fs.existsSync(hdDir)) {
  fs.mkdirSync(hdDir);
}

fs.readdirSync(originalDir).forEach(file => {
  const input = originalDir + file;
  const output = hdDir + file;

  sharp(input)
    .rotate()                      // fix EXIF orientation
    .resize({ width: 2000 })      // HD size (good for social media)
    .jpeg({ quality: 100 })        // compress
    .toFile(output)
    .then(() => console.log("HD created:", file))
    .catch(err => console.error(err));
});
// import sharp from "sharp";
// import fs from "fs";

// const originalDir = "src/assets/photos/original/";
// const hdDir = "src/assets/photos/hd/";

// // create HD folder if missing
// if (!fs.existsSync(hdDir)) fs.mkdirSync(hdDir);

// fs.readdirSync(originalDir).forEach(file => {
//   sharp(originalDir + file)
//     .rotate() // ❤️ FIX EXIF ORIENTATION
//     .resize({
//       width: 2000,
//       withoutEnlargement: true
//     })
//     .jpeg({
//       quality: 80,
//       chromaSubsampling: '4:4:4'
//     })
//     .toFile(hdDir + file)
//     .then(() => console.log("HD created:", file))
//     .catch(err => console.error("Error:", file, err));
// });

