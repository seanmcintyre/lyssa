const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build' , function(cb) {
	runSequence(    
        ['compileComponentListJSX','compileEntryPoints-Dev'],
        'reactDocGenBuild',
        'reactDocGenParse',
        'compileColorVariables',
        ['sassStyleguide', 'sassComponents', 'sassGlobals'],
        'copyStaticAssets',
        'compilePackageIndexJSX',
        'webpackReact',
		cb);
});