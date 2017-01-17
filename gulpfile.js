var gulp = require('gulp');

var livereload = require('gulp-livereload'), 
    webserver = require('gulp-webserver'); 


gulp.task('webserver', function () {
    gulp.src('./app/') 
    .pipe(webserver({ 
    	host: 'localhost',
    	port:1234,

        livereload: true, 
        open: true 
    }));
});

gulp.task('reloadIndex', function() {
  gulp.src('./app/index.html')
   
    .pipe(livereload());
});


gulp.task('watch', function (){

	 livereload.listen();
	 gulp.watch('./app/index.html', ['reloadIndex']);

});

gulp.task('default', ['webserver', 'watch']);