    /*
     * `grunt-ngdocs` creates generates awesome documentation for our core modules
     */

    module.exports = {
        options: {
            html5Mode: false,
            startPage: '/',
            titleLink: '/',
            inlinePartials: true,
            bestMatch: true,
            dest: 'src/docs'
        },
        core: {
            startPage: '/core',
            src: ['<%= core_files.js %>'],
            title: "Core Services"
        }
    };
