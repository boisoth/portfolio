const { src, dest, parallel, watch } = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-csso");

function css() {
  return src("src/sass/*.scss")
    .pipe(sass())
    .pipe(dest("public/css"));
}

exports.default = () => {
  watch("src/sass/*.scss", css);
};
