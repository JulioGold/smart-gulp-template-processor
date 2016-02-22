var gulp = require('gulp'),
    path = require('path'),
    smartGulpTemplateProcessor = require('../smartGulpTemplateProcessor.js');

gulp.task('default', function () {

    var destPath = path.join(__dirname, 'dest');
    var originPath = path.join(__dirname, '**', '*.tpl');

    var dataObj = {
		company:{
			nome: "JulioGold",
			email: {
				address: "julio.gold@someServer.com",
				type: "Comercial"
			}
		}
	};

    return gulp.src(originPath)
        .pipe(smartGulpTemplateProcessor(dataObj))
        .pipe(gulp.dest(destPath));

});