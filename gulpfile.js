var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var prettyData = require('gulp-pretty-data');

// 压缩css文件
gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public'));
});


// 压缩html文件
gulp.task('minify-html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'));
});

// 压缩js文件
gulp.task('minify-js', function () {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

// 压缩xml文件
gulp.task('minify-xml', function () {
    return gulp.src('./public/**/*.xml')
        .pipe(prettyData({
            type: 'minify',
            preserveComments: true,
            extensions: {
                'xlf': 'xml',
                'svg': 'xml'
            }
        }))
        .pipe(gulp.dest('./public'));
});

// 默认任务
gulp.task('default', [
    'minify-html', 'minify-css', 'minify-js', 'minify-xml'
]);