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
const compressPostHeaderImages = async () => {
  await src("src/assets/images/postHeaderImages/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          { width: 1600, format: "jpeg", rename: { suffix: "-1600" } },
          { width: 1920, format: "jpeg", rename: { suffix: "-1920" } },
          // webp
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          { width: 1600, format: "webp", rename: { suffix: "-1600" } },
          { width: 1920, format: "webp", rename: { suffix: "-1920" } },
          // avif
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
          { width: 1600, format: "avif", rename: { suffix: "-1600" } },
          { width: 1920, format: "avif", rename: { suffix: "-1920" } },
        ],
      })
    )
    .pipe(dest("src/assets/images/postHeaderImages/compressed"));

  await src("src/assets/images/postHeaderImages/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/postHeaderImages/compressed/"));
};
const compressUiImages = async () => {
  await src("src/assets/images/ui/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          { width: 1600, format: "jpeg", rename: { suffix: "-1600" } },
          { width: 1920, format: "jpeg", rename: { suffix: "-1920" } },
          // webp
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          { width: 1600, format: "webp", rename: { suffix: "-1600" } },
          { width: 1920, format: "webp", rename: { suffix: "-1920" } },
          // avif
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
          { width: 1600, format: "avif", rename: { suffix: "-1600" } },
          { width: 1920, format: "avif", rename: { suffix: "-1920" } },
        ],
      })
    )
    .pipe(dest("src/assets/images/ui/compressed"));

  await src("src/assets/images/ui/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/ui/compressed/"));
};
const compressActionWidgetImages = async () => {
  await src("src/assets/images/widgets/ActionButton/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 500, format: "jpeg", rename: { suffix: "-300" } },
          // webp
          { width: 500, format: "webp", rename: { suffix: "-300" } },
          // avif
          { width: 500, format: "avif", rename: { suffix: "-300" } },
        ],
      })
    ).pipe(dest("src/assets/images/widgets/ActionButton/compressed"));

  await src("src/assets/images/widgets/ActionButton/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/widgets/ActionButton/compressed/"));
};
const compressTestimonialsImages = async () => {
  await src("src/assets/images/testimonials/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 500, format: "jpeg", rename: { suffix: "-500" } },
          // webp
          { width: 500, format: "webp", rename: { suffix: "-500" } },
          // avif
          { width: 500, format: "avif", rename: { suffix: "-500" } },
        ],
      })
    ).pipe(dest("src/assets/images/testimonials/compressed"));

  await src("src/assets/images/testimonials/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/testimonials/compressed/"));
};
// compressAllImages = () =>
// src("src/assets/images/**.{png,jpg}")
// .pipe(imagemin())
// .pipe(dest("src/assets/images/minified"));

module.exports = {
  compressProjectImages,
  compressAuthorImages,
  compressPostImages,
  compressUiImages,
  compressPostHeaderImages,
  compressActionWidgetImages,
  compressTestimonialsImages
};
