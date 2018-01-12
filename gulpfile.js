const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");

const uglifyCompressOptions = {
  properties: true,
  dead_code: true,
  drop_debugger: true,
  unsafe: true,
  conditionals: true,
  loops: true,
  unused: true,
  toplevel: true,
  inline: true,
  drop_console: true,
  passes: 2
};

const uglifyMangleOptions = {
  toplevel: true
};

const uglifyOutputOptions = {
  beautify: false
};

gulp.task("sass", function() {
  gulp
    .src("src/sass/**/*.sass")
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(
      autoprefixer({
        browsers: ["last 20 versions"]
      })
    )
    .pipe(gulp.dest("static/css"));
});

gulp.task("minify-css", function() {
  gulp
    .src("static/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("static/css"));
});

gulp.task("watch", ["sass"], function() {
  gulp.watch("src/sass/**/*", ["sass"]);
});
