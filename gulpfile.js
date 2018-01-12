var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function () {
    return gulp.src('./assets/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false,
            remove: false,
            grid: false,
            flexbox: false,
            supports: false
        }))
        .pipe(gulp.dest('./assets/css'))
});
gulp.task('scripts', function () {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/dist/js/foundation.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    './assets/js/main.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js/'));
});
gulp.task('fonts', function () {
    return gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./assets/fonts'))
});
gulp.task('watch', function () {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'fonts', 'scripts']);
