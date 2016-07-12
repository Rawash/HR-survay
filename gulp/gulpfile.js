var src = '../src';
var dist = '../dist';
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
 

gulp.task('default', function() {
  // place code for your default task here
}); 

gulp.task('pug', function build() {
  return gulp.src(src+'/pug/index.pug')
    .pipe(pug({'pretty': true }))
    .pipe(gulp.dest(dist));
});

gulp.task('sass', function () {
  gulp.src(src+'/sass/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(dist));
});
 
 
gulp.task('tsc', function () {
	return gulp.src(src + '/typescript/*.ts')
		.pipe(ts({
            declaration: true,
			noExternalResolve: true,
			noImplicitAny: true,
			//out: 'script.js'
		}))
		.pipe(gulp.dest(dist + '/js/'));
});



gulp.task('watch', function () {
  gulp.watch(src+'/sass/**/*.scss', ['sass']);
  gulp.watch(src+'/typescript/**/*.ts', ['tsc']);
  gulp.watch(src+'/pug/**/*.pug', ['pug']);
});