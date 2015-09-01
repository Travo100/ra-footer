var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    webserver = require('gulp-webserver'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber');

gulp.task('sass', function() {
    return sass('sass/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('css', function() {
  return gulp.src('css/main.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('js', function(){
  return gulp.src('js/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(ngAnnotate())
    .pipe(concat('all-hero4-angular.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
    .pipe(browserSync.stream());
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 1337
    }));
});


gulp.task('serve', ['js', 'sass', 'css'], function(){
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  gulp.watch('js/**/*.js', ['js']);
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch("index.html").on('change', browserSync.reload);
})


gulp.task('default', ['js', 'sass', 'serve', 'css']);