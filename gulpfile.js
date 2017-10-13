var gulp = require('gulp'),
    useref = require('gulp-useref'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    lazypipe = require('lazypipe'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    del = require('del'),
    ngConfig = require('gulp-ng-config');

// Parse html and create min.js/min.css
gulp.task('useref', ['loadConfig'], function() {
//  if (util.env.type === 'dev') return; // do nothing on dev environments
  util.log("Cleaning dist...");
  del('dist/{js,css}/app.{js,css}');

  return gulp.src('app/**/*.html')
    .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});

gulp.task('copyImages', function() {
  return gulp.src('app/**/*.{jpg,png,gif,jpeg,ico}')
    .pipe(gulp.dest('dist'));
});

gulp.task('copyJSON', function() {
  return gulp.src('app/*.json')
    .pipe(gulp.dest('dist'));
});

gulp.task('copyFonts', function() {
  return gulp.src('app/**/*.{ttf,otf}')
    .pipe(gulp.dest('dist'));
});

gulp.task('loadConfig', function() {
  var type = util.env.type || "dev";
  util.log("Generating config for ", type);
//  var base_dir = type == "dev" ? "app" : "dist";
  gulp.src('app/config.json')
    .pipe(ngConfig('AlintaApp.config', {
      environment: type,
      createModule: false,
    }))
    .pipe(gulp.dest('app/js/generated'));
});
gulp.task('build', ['useref', 'copyImages', 'copyFonts','sass','copyJSON']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src(['app/**/*.js', '!app/bower_components/**/*.js', '!app/components/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function() {
    gulp.src('app/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});
// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(['app/**/*.js', '!app/bower_components/**/*.js', '!app/components/**/*.js'], ['jshint']);
  gulp.watch('*.scss', ['sass']);
});

// define the default task and add the watch task to it
gulp.task('default', ['sass','watch']);

