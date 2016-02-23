module.exports = function(grunt) {
	/**
	 * Load and set our build configuration file.
	 */
	var userConfig = require('./build.config.js');
	userConfig.pkg = grunt.file.readJSON("package.json");
	userConfig.vdr = grunt.file.readJSON("vendor.json");
	userConfig.vendor_mobile = grunt.file.readJSON("vendor_mobile.json");
	userConfig.meta = {
		banner: '/**\n' +
			' * <%= pkg.name %> - v<%= pkg.version %>\n' +
			' * <%= pkg.homepage %>\n' +
			' *\n' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
			' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
			' */\n'
	};

	/**
	 * Load required Grunt tasks. These are installed based on the versions listed
	 * in `package.json` when you do `npm install` in this directory.
	 * Task 'load-grunt-tasks' loads all tasks from 'package.json' with 'grunt-*' prefix
	 */
	require('load-grunt-config')(grunt, {
		config: userConfig
	});

	/**
	 * In order to make it safe to just compile or copy *only* what was changed,
	 * we need to ensure we are starting from a clean, fresh build. So we rename
	 * the `watch` task to `delta` (that's why the configuration var above is
	 * `delta`) and then add a new task called `watch` that does a clean build
	 * before watching for changes.
	 */
	grunt.renameTask('watch', 'delta');
	grunt.registerTask('watch', [
		'delta'
	]);

	/**
	 * Beautify
	 */
	grunt.registerTask('beautify', [
		'jsbeautifier:app'
	]);

	/**
	 * The `compile` task gets your app ready for deployment by concatenating and
	 * minifying your code.
	 */
	grunt.registerTask('compile_app', [
		'jshint:app',
		'scss2css:app',
		'concat:build_css',
		'postcss:app',
		'html2js:app',
		'copy:annotate_before',
		'ngAnnotate:app',
		'copy:annotate_after',
		'uglify:app',
		'clean:temp',
		'index:build'
		// 'karma:app_coverage'
	]);

	/**
	 * This is the task to prepare the the mobile app css and js
	 */
	grunt.registerTask('compile_mobile', [
		'jshint:mobile',
		'scss2css:mobile',
		'concat:build_mobile_css',
		'postcss:mobile',
		'html2js:mobile',
		'copy:annotate_before_mobile',
		'ngAnnotate:mobile',
		'copy:annotate_after_mobile',
		'uglify:mobile',
		'clean:temp',
		'index:build'
	]);

	/**
	 * This is the task to prepare the core (shared) modules
	 */
	grunt.registerTask('compile_core', [
		'jshint:core',
		'copy:annotate_before_core',
		'ngAnnotate:core',
		'copy:annotate_after_core',
		'uglify:core',
		'clean:temp',
		'index:build'
		// 'karma:core_coverage'
	]);

	/**
	 * This is the task to prepare the admin compile files
	 */
	grunt.registerTask('compile_admin', [
		'jshint:admin',
		'scss2css:admin',
		'concat:build_admin_css',
		'postcss:admin',
		'html2js:admin',
		'copy:annotate_before_admin',
		'ngAnnotate:admin',
		'copy:annotate_after_admin',
		'uglify:admin',
		'clean:temp',
		'index:admin'
		// 'karma:admin_coverage'
	]);

	grunt.registerTask('icons:app', ['clean:icons', 'copy:icons', 'copy:fonts']);
	grunt.registerTask('icons:admin', ['clean:admin_icons', 'copy:icons_admin', 'copy:fonts_admin']);

	grunt.registerTask('scss2css', function(app) {
		var filePatterns ,files = {}, filesFound = 0;
		if(app == 'mobile') {
			filePatterns = userConfig.mobile_files.sass;
		} else if(app == 'admin') {
			filePatterns = userConfig.admin_files.sass;
		} else {
			filePatterns = userConfig.app_files.sass;
		}
		grunt.file.expand({}, filePatterns).forEach(function(f) {
			files[f.replace('scss', 'css')] = f;
			filesFound++;
		});
		console.log('Transpiling ' + filesFound + ' scss files into css.');
		grunt.config('sass', {
			dev: {
				files: files,
				options: {
					cacheLocation: 'cache/.sass-cache'
				}
			}
		});
		return grunt.task.run('sass:dev');
	});

	// Increments the version number for the main app vendor files
	grunt.registerTask('bump:vendor', function() {
		grunt.config('bump', {
			options: {
				files: ["vendor.json"],
				commit: false,
				createTag: false,
				push: false,
				updateConfigs: ['vdr']
			}
		});
		return grunt.task.run('bump');
	});

	// Increments the version number for the mobile vendor files
	grunt.registerTask('bump:vendor_mobile', function() {
		grunt.config('bump', {
			options: {
				files: ["vendor_mobile.json"],
				commit: false,
				createTag: false,
				push: false,
				updateConfigs: ['vendor_mobile']
			}
		});
		return grunt.task.run('bump');
	});

	// Increments the version number for the app package
	grunt.registerTask('bump:app', function() {
		grunt.config('bump', {
			options: {
				files: [
					"package.json",
					"bower.json"
				],
				commit: false,
				commitMessage: 'chore(release): v%VERSION%',
				commitFiles: [
					"package.json",
					"client/bower.json"
				],
				createTag: false,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: false,
				pushTo: 'origin',
				updateConfigs: ['pkg']
			}
		});
		return grunt.task.run('bump');
	});

	/**
	 * The `vendor` task generates a compiled and minified set of vendor files (angular bootstrap, angularjs etc)
	 */
	grunt.registerTask('vendor', [
		'html2js:vendor',
		'concat:build_vendor',
		'ngAnnotate:vendor',
		'uglify:vendor',
		'bump:vendor',
		'index:build'
	]);

	grunt.registerTask('vendor_mobile', [
		'concat:build_vendor_mobile',
		'ngAnnotate:vendor_mobile',
		'uglify:vendor_mobile',
		'bump:vendor_mobile',
		'index:build'
	]);

	grunt.registerTask('vendor_admin', [
		'html2js:vendor_admin',
		'concat:build_vendor_admin',
		'ngAnnotate:vendor_admin',
		'uglify:vendor_admin',
		'index:admin'
	]);

	/**
	 * The `deploy` updates version numbers without rebuilding.
	 */
	grunt.registerTask('deploy', [
		'bump:app',
		'index:build'
	]);

	/*
	 * Grunt Event Handlers
	 */
	grunt.event.on('watch', function(action, filepath) {
		if(filepath) {
			//change css target
			if(filepath.indexOf('.scss') !== -1) {
				var options = {};
				var css = filepath.replace('scss', 'css');
				options[css] = filepath;
				grunt.config('sass.watch.files', options);
				grunt.config('postcss.watch.src', css);
			}
			//change jshint target
			if(filepath.indexOf('.js') !== -1 && filepath.indexOf('.react.js') === -1) {
				grunt.config('jshint.watch.files', {
					src: [filepath]
				});
				grunt.config('jsbeautifier.watch.files', {
					src: [filepath]
				});
				grunt.config('babel.watch.files');
			}

			//change babel target to transpile jsx code into js
			if(filepath.indexOf('.react.js') !== -1) {
				//empty the source so it doesn't jshint
				grunt.config('jshint.watch.files');
				grunt.config('jsbeautifier.watch.files');
				grunt.config('babel.watch', {
					files: [{
		            	src: [filepath],
		            	dest: filepath.replace('.react', ''),
		            	ext: '.js'
		        	}]
				});
			}
		}
	});

	/**
	 * A utility function to get all app JavaScript sources.
	 */
	function filterForJS(files) {
		return files.filter(function(file) {
			return file.match(/\.js$/);
		});
	}

	/**
	 * A utility function to get all app CSS sources.
	 */
	function filterForCSS(files) {
		return files.filter(function(file) {
			return file.match(/\.css$/);
		});
	}

	/**
	 * A utility function to replace each sass extension with a css one
	 */
	function filterThroughSass(filePatterns, array) {
		grunt.file.expand({}, filePatterns).forEach(function(f) {
			array.push(f.replace('scss', 'css'));
		});
	}

	/**
	 * The index.html template includes the stylesheet and javascript sources
	 * based on dynamic names calculated in this Gruntfile. This task assembles
	 * the list into variables for the template to use and then runs the
	 * compilation.
	 */

	grunt.registerMultiTask('index', 'Process index.html template', function() {
		var base = this.data.base;

		//Core modules
		var coreDevFiles = filterForJS(grunt.file.expand({}, this.data.core_devjs)).map(function(file) {
			return base + '/' + file;
		});

		var vdr_version = userConfig.vdr.version;
		var vdr_mobile_version = userConfig.vendor_mobile.version;

		if(this.target === 'build') {
			var cssFilesSrc = [];
			var mobileCssFilesSrc = [];

			//filter through the css
			filterThroughSass(userConfig.app_files.sass, cssFilesSrc);
			filterThroughSass(userConfig.mobile_files.sass, mobileCssFilesSrc);

			//concat the vendor css
			cssFilesSrc = grunt.file.expand({}, userConfig.app_vendor_files.css).concat(cssFilesSrc);

			//Desktop app
			var cssFiles = filterForCSS(cssFilesSrc).map(function(file) {
				return base + '/' + file;
			});
			var liveFiles = filterForJS(this.data.livejs).map(function(file) {
				return base + '/' + file;
			});
			var devFiles = filterForJS(grunt.file.expand({}, this.data.src)).map(function(file) {
				return base + '/' + file;
			});

			//Mobile app
			var mobileCssFiles = filterForCSS(mobileCssFilesSrc).map(function(file) {
				return base + '/' + file;
			});
			var mobileLiveFiles = filterForJS(this.data.mobile_livejs).map(function(file) {
				return base + '/' + file;
			});
			var mobileDevFiles = filterForJS(grunt.file.expand({}, userConfig.mobile_vendor_files.js.concat(this.data.mobile_devjs))).map(function(file) {
				return base + '/' + file;
			});

			grunt.file.copy('src/index.html', this.data.dir + '/index.tpl', {
				process: function(contents, path) {
					return grunt.template.process(contents, {
						data: {

							/* Main App */
							scripts: liveFiles,
							devscripts: devFiles,
							styles: cssFiles,
							vendor_version: vdr_version,

							/* Mobile */
							mobile_styles: mobileCssFiles,
							mobile_scripts: mobileLiveFiles,
							mobile_devscripts: mobileDevFiles,
							vendor_mobile_version: vdr_mobile_version,

							/* Core */
							core_devscripts: coreDevFiles
						}
					});
				}
			});
		}
		if(this.target === 'admin') {
			var adminCssFilesSrc = [];
			filterThroughSass(userConfig.admin_files.sass, adminCssFilesSrc);

			adminCssFilesSrc = grunt.file.expand({}, userConfig.admin_vendor_files.css).concat(adminCssFilesSrc);

			//Admin app
			var adminCssFiles = filterForCSS(adminCssFilesSrc).map(function(file) {
				return base + '/' + file;
			});
			var adminLiveFiles = filterForJS(this.data.livejs).map(function(file) {
				return base + '/' + file;
			});
			var adminDevFiles = filterForJS(grunt.file.expand({}, this.data.src)).map(function(file) {
				return base + '/' + file;
			});

			grunt.file.copy('src/admin/index.html', this.data.dir + '/admin/index.tpl', {
				process: function(contents, path) {
					return grunt.template.process(contents, {
						data: {
							/* Admin App */
							scripts: adminLiveFiles,
							devscripts: adminDevFiles,
							styles: adminCssFiles,
							/* Core */
							core_devscripts: coreDevFiles
						}
					});
				}
			});
		}
	});
};
