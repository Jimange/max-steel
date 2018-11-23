var gulp = 			require('gulp');
var sass = 			require('gulp-sass');
var cssnano = 		require('gulp-cssnano');
var autoprefixer = 	require('gulp-autoprefixer');

var src = 'assets/dev/';
var bld = 'assets/prod/';


//-- TASKS -------

gulp.task('sass', function() {
	return gulp.src(src + 'sass/**/*.scss')
			   .pipe(sass())
			   .pipe(autoprefixer({
		            browsers: ['last 3 versions'],
		            cascade: false
		        }))
			   .pipe(cssnano({ zindex: false }))
			   .pipe(gulp.dest(bld + 'css/'))
});

gulp.task('watch', function() {
	gulp.watch(src + 'sass/**/*.scss', ['sass']); 
});
