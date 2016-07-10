var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var babel = require('gulp-babel');
var scss = require('gulp-sass');
var sh = require('shelljs');
var autoprefixer = require("gulp-autoprefixer");
var concat = require('gulp-concat-sourcemap');
var uglify = require('gulp-uglify');
var bower = require('bower-files')();
var jshint = require('gulp-jshint');

var path = {
	scss: {
		src: ['./www/scss/*.scss', '!./www/scss/all.scss'],
		dst: './www/scss'
	},
	css: {
		src: ['./www/css/*.css', '!./www/css/all.css'],
		dst: './www/css'
	},
	react_jsx: {
		src: ['./www/react_jsx/*.jsx', '!./www/react_jsx/all.jsx'],
		dst: './www/react_js'
	},
	react_js: {
		src: ['./www/react_js/*.js', '!./www/react_js/all.js'],
		dst: './www/react_js'
	},
	angular_js: {
		src: ['./www/angular_js/*.js', '!./www/angular_js/all.js'],
		dst: './www/angular_js'
	},
	lib: {
		src: ['./www/index.html', '!./www/lib/all.js'],
		dst: './www/lib'
	}
};


gulp.task('default', ['scss','react_jsx','concat_css','concat_angular_js','concat_lib','concat_react_js']);

gulp.task('css', ['scss']);

gulp.task('lint', ['lint_angular_js']);

gulp.task('watch', function () {
	gulp.watch(path.scss.src, ['scss','concat_css']);
	gulp.watch(path.angular_js.src, ['lint_angular_js','concat_angular_js']);
	gulp.watch(path.react_jsx.src, ['react_jsx']);
});


gulp.task('scss', function (done) {
	gulp.src(path.scss.src)
		.pipe(scss())
		.on('error', scss.logError)
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(path.css.dst))
		.pipe(concat('all.css'))
		.pipe(gulp.dest(path.css.dst))
		.on('end', done);
});
gulp.task('react_jsx', function (done) {
	gulp.src(path.react_jsx.src)
		.pipe(babel({
			presets: ['es2015','react']
		}))
		.pipe(gulp.dest(path.react_js.dst))
		.on('end', done);
});


gulp.task('concat_css', function () {
	return gulp.src(path.css.src)
		.pipe(concat('all.css'))
		.pipe(gulp.dest(path.css.dst));
});
gulp.task('concat_angular_js', function () {
	return gulp.src(path.angular_js.src)
		.pipe(concat('all.js'))
		.pipe(gulp.dest(path.angular_js.dst));
});
gulp.task('concat_lib', function (done) {
	gulp.src(['./www/lib/window.js','./www/lib/angular/angular.min.js','./www/lib/angular-ui-router/release/angular-ui-router.min.js','./www/lib/sugar.js','./www/lib/angular-modal-service.js','./www/lib/jquery/dist/jquery.js','./www/lib/moment/moment.js'])
		.pipe(concat('all.js'))
		// .pipe(uglify())
		.pipe(gulp.dest(path.lib.dst))
		.on('end', done);
});
gulp.task('concat_react_js', function () {
	return gulp.src(path.react_js.src)
		.pipe(concat('all.js'))
		.pipe(gulp.dest(path.react_js.dst));
});


gulp.task('lint_angular_js', function() {
  return gulp.src(path.angular_js.src)
    .pipe(jshint(['.jshintignore']))
    .pipe(jshint.reporter('default'));
});