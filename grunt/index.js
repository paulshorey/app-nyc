/**
 * During development, we don't want to have wait for compilation,
 * concatenation, minification, etc. So to avoid these steps, we simply
 * add all script files directly to the `<head>` of `index.html`. The
 * `src` property contains the list of included files.
 */
module.exports = {
	build: {
		base: '<%= base_dir %>',
		dir: '<%= build_dir %>',
		version: '<%= pkg.version %>',
	/* Mobile */
		mobile_livejs: [
			'<%= build_dir %>/mobile/younow-mobile.js'
		],
		mobile_devjs: '<%= mobile_files.js %>',
	/* Core */
		core_devjs: '<%= core_files.js %>',
	/* App */
		livejs: [
			'<%= build_dir %>/app/<%= pkg.name %>.js'
		],
		src: [
			'<%= app_vendor_files.js %>',
			'<%= app_files.js %>',
			'<%= build_dir %>/app/templates-dev.js'
		]
	},
	admin: {
		base: '<%= base_dir %>',
		dir: '<%= build_dir %>',
		version: '<%= pkg.version %>',
		src: [
			'<%= admin_vendor_files.js %>',
			'<%= admin_files.js %>',
			'<%= build_dir %>/admin/templates-dev.js'
		],
		livejs: ['<%= build_dir %>/admin/younow-admin.js'],
		/* Core */
		core_devjs: '<%= core_files.js %>'
	},
};
