const { src, dest, parallel } = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-csso");

function css() {
  return src("src/sass/*.scss")
    .pipe(sass())
    .pipe(dest("build/css"));
}

exports.default = css;
