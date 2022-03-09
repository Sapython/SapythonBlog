const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");
const imagemin = require("gulp-imagemin");

const compressProjectImages = async () => {
  await src("src/assets/images/projectImages/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
        ],
      })
    )
    .pipe(dest("src/assets/images/projectImages/compressed"));
  await src("src/assets/images/projectImages/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/projectImages/compressed/"));
};
const compressAuthorImages = async () => {
  await src("src/assets/images/authorImages/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
        ],
      })
    )
    .pipe(dest("src/assets/images/authorImages/compressed"));
  await src("src/assets/images/authorImages/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/authorImages/compressed/"));
};
const compressPostImages = async () => {
  await src("src/assets/images/postImages/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          { width: 1600, format: "jpeg", rename: { suffix: "-1600" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          { width: 1600, format: "webp", rename: { suffix: "-1600" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
          { width: 1600, format: "avif", rename: { suffix: "-1600" } },
        ],
      })
    )
    .pipe(dest("src/assets/images/postImages/compressed"));

  await src("src/assets/images/postImages/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/postImages/compressed/"));
};

// compressAllImages = () =>
// src("src/assets/images/**.{png,jpg}")
// .pipe(imagemin())
// .pipe(dest("src/assets/images/minified"));

module.exports = {
  compressProjectImages,
  compressAuthorImages,
  compressPostImages,
};
