//This is your gulpfile
// on your command line enter gulp to compile your css

const gulp = require('gulp');
const sass =  require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: "compressed"}))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', gulp.series('sass'), function(){
    gulp.watch('.sass/**/*.scss'), gulp.series('sass');
})