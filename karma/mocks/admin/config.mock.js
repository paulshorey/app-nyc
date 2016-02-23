angular.module('mocks.config', [])
    .factory('config', function() {
        var config = {
            settings: {
                ServerLocalBaseUrl: "http://www2-vd.younow.com",
                ServerCDNBaseUrl: "http://cdn2-vd.younow.com",
                ServerSecureLocalBaseUrl: "https://www2-vd.younow.com",
                TrackingHost: "test"
            },
            params: {
                host: 'www2-vd.younow.com'
            }
        };

        return config;
    });
