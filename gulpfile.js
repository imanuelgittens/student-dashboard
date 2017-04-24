var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var gulp = require('gulp');


/* Ensures JavaScript is Error Free using JSHint*/
gulp.task('jslint', function(){
	return gulp.src('www/js/*.js')
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

/* Compiles SASS Files*/

gulp.task('sass', function(){
	sass('www/sass/*.scss', {
		stopOnError: true
	})
		.on('error', sass.logError)
		.pipe(gulp.dest('www/css'))
});

/* Watches for changes */
gulp.task('watch', function(){
	gulp.watch('www/js/*.js', ['jslint']);
	gulp.watch('www/sass/*.scss', ['sass']);
});



gulp.task('default', ['watch']);