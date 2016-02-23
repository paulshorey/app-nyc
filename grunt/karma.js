/* Karma unit testing
   Here we set up the basic config without pointing to a karma config file
*/
module.exports = function(grunt, config) {
    function generatePreprocessors(files) {
        var preprocessor = {};
        for(var i = 0; i < files.length; i++) {
            preprocessor[files] = ['progress','coverage'];
        }
        console.log(preprocessor);
        return preprocessor;
    }

    var preprocessorsCore = {'src/core/**/!(*spec).js': ['progress','coverage']};
    var preprocessorsApp = {'src/app/**/!(*spec|*react).js': ['progress','coverage']};
    var preprocessorsAdmin = {'src/admin/**/!(*spec).js': ['progress','coverage']};
    return {
        options: {
            configFile: 'karma/karma.conf.js',
            singleRun: false
        },
        core_coverage: {
            reporters: ['progress', 'coverage'],
            singleRun: true,
            files: {src: config.test_files.dependencies.concat(config.core_files.js, config.test_files.js_core)},
            preprocessors: preprocessorsCore,
            coverageReporter: {
                type : 'html',
                dir : 'coverage/core/',
                instrumenterOptions: {
                    istanbul: { noCompact: true }
                },
                subdir: function(browser) {
                    return browser.toLowerCase().split(/[ /-]/)[0];
                }
            }
        },
        app_coverage: {
            reporters: ['progress', 'coverage'],
            singleRun: true,
            files: {src: config.test_files.dependencies.concat(config.test_files.app_dependencies, config.app_files.js, config.core_files.js, config.test_files.app)},
            preprocessors: preprocessorsApp,
            coverageReporter: {
                type : 'html',
                dir : 'coverage/app/',
                instrumenterOptions: {
                    istanbul: { noCompact: true }
                },
                subdir: function(browser) {
                    return browser.toLowerCase().split(/[ /-]/)[0];
                }
            }
        },
        admin_coverage: {
            reporters: ['progress', 'coverage'],
            singleRun: true,
            files: {src: config.test_files.dependencies.concat(config.admin_files.js, config.core_files.js, config.test_files.admin, config.test_files.admin_dependencies)},
            preprocessors: preprocessorsAdmin,
            coverageReporter: {
                type : 'html',
                dir : 'coverage/admin/',
                instrumenterOptions: {
                    istanbul: { noCompact: true }
                },
                subdir: function(browser) {
                    return browser.toLowerCase().split(/[ /-]/)[0];
                }
            }
        },
        core: {
            files: {src: config.test_files.dependencies.concat(config.core_files.js, config.test_files.js_core)}
        },
        app: {
            files: {src: config.test_files.dependencies.concat(config.test_files.app_dependencies, config.app_files.js, config.core_files.js, config.test_files.app)}
        },
        admin: {
            files: {src: config.test_files.dependencies.concat(config.admin_files.js, config.core_files.js, config.test_files.admin, config.test_files.admin_dependencies)}
        }
    }
};
