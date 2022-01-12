const { dest } = require("gulp"),
  gulp = require("gulp"),
  prefix = require("gulp-autoprefixer"),
  sass = require("gulp-sass")(require("sass"));

gulp.task("css", async function () {
  return gulp
    .src("src/assets/*.scss") // Get SCSS files from Assets folder
    .pipe(sass({ outputStyle: "compressed" })) // Convert SCSS to CSS file
    .pipe(prefix("last 2 versions")) // Prefix css files for the last 2 browsers versions
    .pipe(dest("public")); // copy inside public folder
});

gulp.task("sass", function () {
  gulp.watch('', ["css"]);
});
