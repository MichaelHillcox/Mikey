const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify');

const config = {
    scss: {
        main: ['assets/core.scss'],
        files: "assets/**/*.scss",
        output: "./assets/",
        compileOptions: {
            errLogToConsole: true,
            outputStyle: 'compressed'
        },
        prefixOptions: {
            browsers: ['last 2 versions']
        }
	},
	js: {
		main: ['assets/core.js'],
		output: './assets/'
	},
    watch: ["**/*.php"]
}

// Normal tasks
gulp.task('default', ['scss', 'js', 'watch'])

gulp.task('scss', e => gulp
	.src(config.scss.main)
	.pipe(sass(config.scss.compileOptions).on('error', sass.logError))
	.pipe(autoprefixer(config.scss.prefixOptions))
	.pipe(gulp.dest(config.scss.output))
	.pipe(livereload())
);

gulp.task('js', e => gulp
	.src(config.js.main)
	.pipe(babel({presets: ['@babel/env']}))
	.pipe(minify({
		ext:{
            min:'.min.js'
        },
	}))
	.pipe(gulp.dest(config.js.output)));

gulp.task('watch', e => {
    livereload.listen();
    gulp.watch(config.scss.files, ['scss']);
    gulp.watch(config.watch, livereload.reload);
})