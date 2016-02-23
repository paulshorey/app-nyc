/**
/   The directories to delete when `grunt clean` is executed.
*/

module.exports = {
	build: ['<%= build_dir %>'],
	compile: ['<%= compile_dir %>'],
	temp: 'temp',
	icons: 'src/assets/icons/fonts',
	admin_icons: 'src/assets/younow-admin/fonts'
};
