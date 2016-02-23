/**
 * `ng-annotate` annotates the sources before minifying. That is, it allows us
 * to code without the array syntax.
 */

module.exports = {
	app: {
		files: [{
			src: ['<%= app_files.js %>'],
			cwd: '',
			dest: '',
			expand: true
		}]
	},
	mobile: {
		files: [{
			src: ['<%= mobile_files.js %>'],
			cwd: '',
			dest: '',
			expand: true
		}]
	},
	core: {
		files: [{
			src: ['<%= core_files.js %>'],
			cwd: '',
			dest: '',
			expand: true
		}]
	},
	admin: {
		files: [{
			src: ['<%= admin_files.js %>'],
			cwd: '',
			dest: '',
			expand: true
		}]
	},
	vendor: {
		files: [{
			src: ['build/app/vendor.js'],
			cwd: '',
			dest: '',
			expand: true
		}]
	},
	vendor_mobile: {
		files: [{
			src: ['build/mobile/vendor-mobile.js'],
			cwd: '',
			dest: '',
			expand: true
		}]
	},
	vendor_admin: {
		files: [{
			src: ['dev/admin/vendor-admin.js'],
			cwd: '',
			dest: '',
			expand: true
		}]
	}
};
