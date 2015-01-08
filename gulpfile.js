var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('default', function () {
	gulp.src('grid.css')
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('.'));

	gulp.src('grid.css')
		.pipe(autoprefixer())
		.pipe(rename({ suffix: '-prefixed' }))
		.pipe(gulp.dest('.'))
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('.'));
});