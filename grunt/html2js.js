/**
 * HTML2JS is a Grunt plugin that takes all of your template files and
 * places them into JavaScript files as strings that are added to
 * AngularJS's template cache. This means that the templates too become
 * part of the initial payload as one JavaScript file. Neat!
 */
module.exports = {
	/**
	 * These are the templates from `src/app`.
	 */
	app: {
		options: {
			base: 'src/app/',
			module: 'templates',
			rename: function(moduleName) {
				return moduleName.split('/')[0] == 'template' ? moduleName : 'angularjsapp/src/app/' + moduleName;
			}
		},
		src: ['<%= app_files.atpl %>', 'src/app/template/**/*.html'],
		dest: 'build/app/templates.js'
	},
	mobile: {
		options: {
			base: 'src/mobile/',
			module: 'templates',
			rename: function(moduleName) {
				return moduleName.split('/')[0] == 'template' ? moduleName : 'angularjsapp/src/mobile/' + moduleName;
			}
		},
		src: ['<%= mobile_files.atpl %>'],
		dest: 'build/mobile/templates-mobile.js'
	},
	admin: {
		options: {
			base: 'src/admin',
			module: 'templates'
		},
		src: ['src/admin/**/**/*.html'],
		dest: 'build/admin/templates.js'
	},
	vendor: {
		options: {
			base: 'src/app',
			module: 'templates'
		},
		src: ['src/app/template/**/*.html'],
		dest: 'build/app/templates-dev.js'
	},
	vendor_admin: {
		options: {
			base: 'src/admin',
			module: 'templates'
		},
		src: ['src/admin/template/**/*.html'],
		dest: 'build/admin/templates-dev.js'
	}
};
