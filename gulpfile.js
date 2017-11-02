var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var zip = require('gulp-vinyl-zip');
var merge = require('merge2')

gulp.task('package', () => {
    del('./panel-package').then(() => {
        return merge(
            gulp.src(['./data_feeds/**/*'], {base: '.'}),
            gulp.src(['./Settings.json', './dist/**/*', '!./dist/**/*.js.map'])
        ).pipe(zip.dest('./panel-package/Elite Dangerous.panelpkg'));
    });
});
