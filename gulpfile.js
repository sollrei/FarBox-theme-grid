var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    sass = require('gulp-ruby-sass');



gulp.task('stylus', function () {
    gulp.src('./assets/stylus/screen.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass', function () {
    sass('./assets/sass/style.scss')
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('auto', function () {
    //gulp.watch('./assets/stylus/screen.styl', ['stylus']);
    gulp.watch('./assets/sass/style.scss', ['sass']);
});