# smart-gulp-template-processor  
You can process an template with an context object using gulp.  
  
## Usage  

```
npm install smart-gulp-template-processor
```

### Selectors
You can use basically two patterns to select tags:  
* `{{property}}`  
* `<%= property %>`  
  
Both work the same way, and you can use they at the same time.  
  
### Gulp example  

```javascript
var gulp = require('gulp'),
    path = require('path'),
    smartGulpTemplateProcessor = require('smart-gulp-template-processor');

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
```  
  
### News  
0.0.1 Created gulp plugin.  
  
Thanks  