/**
 * `grunt copy` copies files over to different directories, user in our icons and compile process
 */
var cacheBuster = Math.random().toString(36).substr(2);

module.exports = {
    annotate_before: {
		files: [{
			src: ['**'],
			dest: 'temp',
			cwd: 'src/app',
			expand: true
		}]
	},
	annotate_after: {
		files: [{
			src: ['**'],
			dest: 'src/app',
			cwd: 'temp',
			expand: true
		}]
	},
    annotate_before_mobile: {
        files: [{
            src: ['**'],
            dest: 'temp',
            cwd: 'src/mobile',
            expand: true
        }]
    },
    annotate_after_mobile: {
        files: [{
            src: ['**'],
            dest: 'src/mobile',
            cwd: 'temp',
            expand: true
        }]
    },
    annotate_before_core: {
        files: [{
            src: ['**'],
            dest: 'temp',
            cwd: 'src/core',
            expand: true
        }]
    },
    annotate_after_core: {
        files: [{
            src: ['**'],
            dest: 'src/core',
            cwd: 'temp',
            expand: true
        }]
    },
    annotate_before_admin: {
        files: [{
            src: ['**'],
            dest: 'temp',
            cwd: 'src/admin',
            expand: true
        }]
    },
    annotate_after_admin: {
        files: [{
            src: ['**'],
            dest: 'src/admin',
            cwd: 'temp',
            expand: true
        }]
    },
	icons: {
		files: [
			{
				src: '../icons/style.css',
				dest: 'src/assets/icons/icons.scss'
			},
			{
				src: '../icons/style.css',
				dest: 'src/assets/icons/icons.css'
			}
		],
		options: {
			process: function(content, srcpath) {
				content = content.replace(/(fonts\/younow)/g, '/angularjsapp/src/assets/icons/fonts/younow'+ cacheBuster);
				content = content.replace(/font-family: 'younow/g, "font-family: 'younow"+ cacheBuster);
				return content;
			},
		}
	},
    icons_admin: {
        files: [
            {
                src: '../younow-admin/style.css',
                dest: 'src/assets/younow-admin/icons.scss'
            },
            {
                src: '../younow-admin/style.css',
                dest: 'src/assets/younow-admin/icons.css'
            }
        ],
        options: {
            process: function(content, srcpath) {
                content = content.replace(/(fonts\/younow-admin)/g, '/angularjsapp/src/assets/younow-admin/fonts/younow-admin'+ cacheBuster);
                content = content.replace(/font-family: 'younow-admin/g, "font-family: 'younow-admin"+ cacheBuster);
                return content;
            },
        }
    },
	fonts: {
		files: [
		{
			src: '../icons/fonts/younow.eot',
			dest: 'src/assets/icons/fonts/younow'+cacheBuster+'.eot'
		},
		{
			src: '../icons/fonts/younow.svg',
			dest: 'src/assets/icons/fonts/younow'+cacheBuster+'.svg',
		},
		{
			src: '../icons/fonts/younow.ttf',
			dest: 'src/assets/icons/fonts/younow'+cacheBuster+'.ttf',
		},
		{
			src: '../icons/fonts/younow.woff',
			dest: 'src/assets/icons/fonts/younow'+cacheBuster+'.woff',
		},
		{
			src: '../icons/fonts/younow.woff2',
			dest: 'src/assets/icons/fonts/younow'+cacheBuster+'.woff2',
		}
		]
	},
    fonts_admin: {
        files: [
        {
            src: '../younow-admin/fonts/younow-admin.eot',
            dest: 'src/assets/younow-admin/fonts/younow-admin'+cacheBuster+'.eot'
        },
        {
            src: '../younow-admin/fonts/younow-admin.svg',
            dest: 'src/assets/younow-admin/fonts/younow-admin'+cacheBuster+'.svg',
        },
        {
            src: '../younow-admin/fonts/younow-admin.ttf',
            dest: 'src/assets/younow-admin/fonts/younow-admin'+cacheBuster+'.ttf',
        },
        {
            src: '../younow-admin/fonts/younow-admin.woff',
            dest: 'src/assets/younow-admin/fonts/younow-admin'+cacheBuster+'.woff',
        },
        {
            src: '../younow-admin/fonts/younow-admin.woff2',
            dest: 'src/assets/younow-admin/fonts/younow-admin'+cacheBuster+'.woff2',
        }
        ]
    }
};
