var gulp = require('gulp');
var del = require('del');

var paths = {
  src: './src/*',
  html: './src/**/*.html'
};

gulp.task('clean', function(cb){
  del(['build'], cb);
});

gulp.task('html', ['clean'], function(){
  return gulp.src(paths.html)
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watch', 'html']);
