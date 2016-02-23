/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * The `build_dir` folder is where our projects are compiled during
	 * development and the `compile_dir` folder is where our app resides once it's
	 * completely built.
	 */
	base_dir: 'angularjsapp',
	build_dir: 'build',
	compile_dir: 'live',

	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks. `js` is all project javascript, less tests. `core` contains
	 * our reusable components' (`src/core`) , while
	 * `atpl` contains the templates our app's code. `html` is just our
	 * main HTML file, `sass` is our main stylesheet, `css` is for css concatentation
	 */
	app_files: {
		js: ['src/app/**/*.js', '!src/app/**/*.spec.js', '!src/assets/**/*.js', '!src/app/**/*.react.js'],
		jsunit: ['src/**/*.spec.js'],

		atpl: ['src/app/**/*.tpl.html', 'src/app/**/**/*.tpl.html', 'src/app/**/**/**/*.tpl.html',  'src/app/**/**/**/**/*.tpl.html', 'src/core/states/**/*.tpl.html'],

		html: ['src/index.html'],
		sass: ['src/app/**/**/*.scss', 'src/app/**/**/**/*.scss', 'src/app/**/**/**/**/*.scss', 'src/app/app.scss', 'src/assets/icons/icons.scss', 'src/core/*.scss','src/core/**/*.scss', 'src/core/**/**/*.scss'],
		css: ['src/app/**/**/*.css', 'src/app/**/**/**/*.css', 'src/app/**/**/**/**/*.css', 'src/app/app.css', 'src/assets/icons/icons.css', 'src/core/*.css','src/core/**/*.css', 'src/core/**/**/*.css']
	},

	core_files: {
		js: ['src/core/*.js', 'src/core/**/*.js', '!src/core/**/*.spec.js']
	},

	mobile_files: {
      js: [ 'src/mobile/app.js', 'src/mobile/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
      jsunit: ['src/mobile/**/*.spec.js', 'src/mobile/**/**/*.spec.js'],

      atpl: [ 'src/mobile/**/*.tpl.html', 'src/mobile/**/**/*.tpl.html', 'src/core/states/**/*.tpl.html'],

      html: [ 'src/mobile/index.html' ],
      sass: ['src/mobile/app.scss','src/mobile/**/**/*.scss', 'src/assets/icons/icons.scss', 'src/core/*.scss','src/core/**/*.scss', 'src/core/**/**/*.scss'],
	  css: ['src/mobile/app.css', 'src/mobile/**/**/*.css', 'src/assets/icons/icons.css', 'src/core/*.css','src/core/**/*.css', 'src/core/**/**/*.css']
	},

	admin_files: {
	  js: [ 'src/admin/app.js', 'src/admin/**/*.js', '!src/admin/*.spec.js', '!src/admin/**/*.spec.js', '!src/assets/**/*.js'],
	  jsunit: ['src/admin/**/*.spec.js', 'src/admin/**/**/*.spec.js'],

	  atpl: [ 'src/admin/**/*.tpl.html', 'src/admin/**/**/*.tpl.html' ],

	  html: [ 'src/admin/index.html' ],

	  sass: ['src/admin/app.scss', 'src/admin/**/**/*.scss', 'src/admin/**/**/**/*.scss', 'src/admin/**/**/**/**/*.scss', 'src/assets/younow-admin/icons.scss'],
	  css: ['src/admin/app.css', 'src/admin/**/**/*.css', 'src/admin/**/**/**/*.css', 'src/assets/younow-admin/icons.css', 'src/assets/younow-admin/icons.css']
	},

	/**
	 * This is a collection of files used during testing only.
	 */
	test_files: {
		dependencies: [
			'vendor/bower/angular/angular.js',
	        'vendor/bower/angular-mocks/angular-mocks.js',
			'karma/test-globals.js',
			'karma/mocks/shared/**.mock.js',
			'vendor/static/blob.js'
		],
		app_dependencies: [
			'karma/mocks/app/**.mock.js',
			'build/app/templates.js'
		],
		admin_dependencies: [
			'karma/mocks/admin/**.mock.js',
			'build/admin/templates.js'
		],
    	js_core: [
        	'src/core/**/*.spec.js',
        	'src/core/**/**/*.spec.js'
		],
		app: [
			'src/app/**/*.spec.js',
			'src/app/**/**/*.spec.js'
		],
		admin: [
			'src/admin/**/*.spec.js',
			'src/admin/**/**/*.spec.js'
		]
    },

	/**
	 * This is the same as `app_files`, except it contains patterns that
	 * reference vendor files (`vendor/`) that we need to place into the build
	 * process somewhere. While the `app_files` property ensures all
	 * standardized files are collected for compilation, it is the user's job
	 * to ensure non-standardized (i.e. vendor-related) files are handled
	 * appropriately in `vendor_files.js`.
	 *
	 * The `vendor_files.js` property holds files to be automatically
	 * concatenated and minified with our project source files.
	 *
	 * The `vendor_files.css` property holds any CSS files to be automatically
	 * included in our app.
	 *
	 * The `vendor_files.assets` property holds any assets to be copied along
	 * with our app's assets. This structure is flattened, so it is not
	 * recommended that you use wildcards.
	 *
	 * These variables have been prefixed to match their app relation
	 */
	app_vendor_files: {
		js: [
			'vendor/static/bootstrapper.js',
			'vendor/bower/jquery/dist/jquery.js',
			'../js/jwplayer6.7/jwplayer.js',
			'vendor/bower/angular/angular.js',
			'vendor/bower/angular-bootstrap/ui-bootstrap.js',
			'vendor/bower/angular-ui-router/release/angular-ui-router.js',
			'vendor/bower/angular-translate/angular-translate.min.js',
			'vendor/bower/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
			'vendor/bower/angular-upload/angular-upload.js',
			'vendor/bower/angular-embedly/angular-embedly.js',
			'vendor/bower/angular-scroll/angular-scroll.js',
			'vendor/bower/ment.io/dist/mentio.js',
			'vendor/bower/zeroclipboard/dist/ZeroClipboard.js',
			'vendor/bower/angular-zeroclipboard/src/angular-zeroclipboard.js',
			'vendor/bower/intl-tel-input/build/js/intlTelInput.min.js',
			'vendor/bower/webrtc-adapter/adapter.js',
			'vendor/bower/react/react.js',
			'vendor/bower/react/react-dom.js',
			'vendor/bower/ngReact/ngReact.js',
			'vendor/bower/ua-parser-js/src/ua-parser.js'
		],
		css: [
			'vendor/static/normalize.css',
			'vendor/static/bootstrap.css',
			'vendor/bower/intl-tel-input/build/css/intlTelInput.css'
		]
	},

	mobile_vendor_files: {
	    js: [
	    	'vendor/bower/angular/angular.js',
	    	'vendor/bower/angular-ui-router/release/angular-ui-router.js',
	    	'vendor/bower/angular-touch/angular-touch.min.js',
	    	'vendor/bower/angular-translate/angular-translate.min.js',
	    	'vendor/bower/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
	    	'vendor/bower/ua-parser-js/src/ua-parser.js'
	    ],
	    css: []
	},

	admin_vendor_files: {
		js: [
			'vendor/static/bootstrapper.js', //talk to jon about removing this from admin, shouldn't need it...
			'vendor/bower/angular/angular.js',
			'vendor/bower/angular-bootstrap/ui-bootstrap.js',
			'vendor/bower/angular-upload/angular-upload.js',
			'vendor/bower/moment/moment.js',
			'vendor/bower/angular-ui-router/release/angular-ui-router.js',
			'vendor/bower/ng-table/dist/ng-table.js',
			'vendor/bower/Chart.js/Chart.min.js',
			'vendor/bower/angular-chart.js/dist/angular-chart.js'
		],
		css: [
			'vendor/static/normalize.css',
			'vendor/static/bootstrap.css',
			'vendor/bower/ng-table/dist/ng-table.min.css',
			'vendor/bower/angular-chart.js/dist/angular-chart.css'
		]
	},
};
