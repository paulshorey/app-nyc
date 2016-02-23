/**
 * And for rapid development, we have a watch set up that checks to see if
 * any of the files listed below change, and then to execute the listed
 * tasks when they do. This just saves us from having to type "grunt" into
 * the command-line every time we want to see what we're working on; we can
 * instead just leave "grunt watch" running in a background terminal. Set it
 * and forget it, as Ron Popeil used to tell us.
 *
 * But we don't need the same thing to happen for all the files.
 */

module.exports = {
	/**
	 * By default, we want the Live Reload to work for all tasks; this is
	 * overridden in some tasks (like this file) where browser resources are
	 * unaffected. It runs by default on port 35729, which your browser
	 * plugin should auto-detect.
	 */
	options: {
		livereload: 12345,
		spawn: false
	},

	/**
	 * When the Gruntfile changes, we just want to lint it. In fact, when
	 * your Gruntfile changes, it will automatically be reloaded!
	 */
	gruntfile: {
		files: 'Gruntfile.js',
		tasks: ['jshint:gruntfile'],
		options: {
			livereload: false
		}
	},

	/**
	 * When our JavaScript source files change, we want to run lint them.
	 */
	jssrc: {
		files: [
			'<%= app_files.js %>',
			'<%= mobile_files.js %>',
			'<%= core_files.js %>',
			'<%= admin_files.js %>',
			'src/**/*.react.js'
		],
		tasks: ['jshint:watch', 'jsbeautifier:watch', 'babel:watch']
	},

	/**
	 * When the SASS files change, we need to convert them to css
	 */
	sass: {
		files: ['<%= app_files.sass %>', '<%= mobile_files.sass %>', '<%= admin_files.sass %>'],
		tasks: ['sass:watch', 'postcss:watch']
	}
};
