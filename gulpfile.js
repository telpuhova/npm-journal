var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');

var buildProduction = utilities.env.production;

gulp.task("concatinate", function() {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('concatinated.js'))
  .pipe(gulp.dest('./tmp'));
})

gulp.task('browserify', ['concatinate'], function() {
  return browserify({ entries: ['./tmp/concatinated.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
})

gulp.task('minify', ['browserify'], function() {
  return gulp.src('./build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
})

gulp.task('clean', function() {
  return del(['build/js', 'tmp']);
})

gulp.task('build', ['clean'], function() {
  if (buildProduction) {
    gulp.start('minify');
  } else {
    gulp.start('browserify');
  }
})

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
})
