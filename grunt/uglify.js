/**
 * Minify the sources with 'grunt uglify'
 */

module.exports = {
	options: {
		banner: '<%= meta.banner %>',
		sourceMap: true,
		mangle: false
	},
	app: {
		files: {
			'<%= build_dir %>/app/<%= pkg.name %>.js': [
				'<%= app_files.js %>',
				'<%= build_dir %>/app/templates.js'
			]
		}
	},
	mobile: {
		files: {
			'<%= build_dir %>/mobile/<%= pkg.name %>-mobile.js': [
				'<%= mobile_files.js %>',
				'<%= build_dir %>/mobile/templates-mobile.js'
			]
		}
	},
	core: {
		files: {
			'<%= build_dir %>/core/core.js': [
				'<%= core_files.js %>'
			]
		}
	},
	admin: {
		files: {
			'<%= build_dir %>/admin/younow-admin.js': [
				'<%= admin_files.js %>',
				'<%= build_dir %>/admin/templates.js'
			]
		}
	},
	vendor: {
		files: {
			'<%= build_dir %>/app/vendor.js': [
				'<%= build_dir %>/app/vendor.js'
			]
		}
	},
	vendor_mobile: {
		files: {
			'<%= build_dir %>/mobile/vendor-mobile.js': [
				'<%= build_dir %>/mobile/vendor-mobile.js'
			]
		}
	},
	vendor_admin: {
		files: {
			'<%= build_dir %>/admin/vendor-admin.js': [
				'<%= build_dir %>/admin/vendor-admin.js'
			]
		}
	}
};
