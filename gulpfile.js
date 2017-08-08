var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var rollup = require('rollup-stream');
var rollupUglify = require('rollup-plugin-uglify');
var rollupNodeResolve = require('rollup-plugin-node-resolve');
var rollupCommonjs = require('rollup-plugin-commonjs');
var babel = require('rollup-plugin-babel');
var source = require('vinyl-source-stream');
var del = require('del');
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['styles', 'scripts'], function() {
  console.log('Thus Spake Zara – Love Island, 2016')
});

gulp.task('styles', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', function() {
  return rollup({
    entry: "src/scripts/main.js",
    plugins: [
      rollupNodeResolve({jsnext: true, browser: true}),
      rollupCommonjs({'include': ['node_modules/**']}),
      babel({
        exclude: 'node_modules/**',
        presets: [[ "es2015", { "modules": false } ]],
        plugins: ["external-helpers"]
      })
    ],
    sourceMap: true,
    format: 'iife'
  })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('lint', function() {
  return gulp.src(['src/scripts/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('clean', () => del(['main.css', 'bundle.js', 'bundle.js.map']));

gulp.task('watch', ['browserSync', 'styles', 'scripts', 'lint'], function() {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['lint', 'scripts']);
  gulp.watch('*.html', function() {
    browserSync.reload();
  });
});
