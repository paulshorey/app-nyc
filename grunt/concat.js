/**
 * `grunt concat` concatenates multiple source files into a single file.
 */

module.exports = {
    /**
     * The `build_css` target concatenates compiled CSS and vendor CSS
     * together.
     */
    build_css: {
        options: {
            sourceMap: true
        },
        src: [
            '<%= app_vendor_files.css %>',
            '<%= app_files.css %>'
        ],
        dest: 'build/app/<%= pkg.name %>.css'
    },
    build_mobile_css: {
        options: {
            sourceMap: true
        },
        src: [
            '<%= mobile_files.css %>'
        ],
        dest: 'build/mobile/<%= pkg.name %>-mobile.css'
    },
    build_admin_css: {
        options: {
            sourceMap: true
        },
        src: [
            '<%= admin_vendor_files.css %>',
            '<%= admin_files.css %>'
        ],
        dest: 'build/admin/<%= pkg.name %>-admin.css'
    },
    build_vendor: {
        options: {
            sourceMap: true
        },
        src: [
            '<%= app_vendor_files.js %>'
        ],
        dest: 'build/app/vendor.js'
    },
    build_vendor_mobile: {
        options: {
            sourceMap: true
        },
        src: [
            '<%= mobile_vendor_files.js %>'
        ],
        dest: 'build/mobile/vendor-mobile.js'
    },
    build_vendor_admin: {
        options: {
            sourceMap: true
        },
        src: [
            '<%= admin_vendor_files.js %>'
        ],
        dest: 'build/admin/vendor-admin.js'
    }
};
