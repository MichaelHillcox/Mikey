const {series, src, dest, watch} = require('gulp');

const sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	babel = require('gulp-babel');

const config = {
    scss: {
        main: ['src/core.scss'],
        files: "src/**/*.scss",
        output: "assets/",
        compileOptions: {
            errLogToConsole: true,
            outputStyle: 'compressed'
        },
        prefixOptions: {
            overrideBrowserslist: ['last 2 version']
        }
	},
	js: {
		main: ['src/core.js'],
		files: 'src/**/*.js',
		output: 'assets/'
	},
    watch: ["**/*.php"]
}

const scss = cb => {
	src(config.scss.main)
		.pipe(sass(config.scss.compileOptions).on('error', sass.logError))
		.pipe(autoprefixer(config.scss.prefixOptions))
		.pipe(dest(config.scss.output))
		.pipe(livereload())

	cb();
};

const js = cb => {
	src(config.js.main)
		.pipe(babel({presets: ['@babel/env'], minified: true}))
		.pipe(dest(config.js.output))
		.pipe(livereload());

	cb();
}

const watchTask = cb => {
	
	livereload.listen();
    watch(config.scss.files, scss);
    watch(config.js.files, js);
	watch(config.watch, livereload.reload);
	
	cb();
};

exports.js = js
exports.scss = scss 
exports.default = series(scss, js, watchTask);