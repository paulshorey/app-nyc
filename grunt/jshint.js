/**
 * `jshint` defines the rules of our linter as well as which files we
 * should check. This file, all javascript sources, and all our unit tests
 * are linted based on the policies listed in `options`. But we can also
 * specify exclusionary patterns by prefixing them with an exclamation
 * point (!); this is useful when code comes from a third party but is
 * nonetheless inside `src/`.
 */

module.exports = {
    options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true,
        undef: true,
        predef: [
            "console", "window", "navigator", "document", "FileReader",
            "angular", "module", "require",
            "jwplayer", "FB", "gapi", "googletag", "ga", "Raygun",
            "React", "moment", "FormData", "$", "alert"
        ]
    },
    gruntfile: [
        'Gruntfile.js'
    ],
    globals: {},
    app: {
    	files: {
    		src: ['<%= app_files.js %>', '!src/app/**/*.react.js']
    	}
    },
    mobile: {
        files: {
            src: ['<%= mobile_files.js %>']
        }
    },
    core: {
    	files: {
    		src: ['<%= core_files.js %>']
    	}
    },
    admin: {
        files: {
            src: ['<%= admin_files.js %>']
        }
    },
    watch: {
    	files: {}
    },
    test: [
    	'<%= app_files.jsunit %>'
    ]
};
