angular.module('mocks.session', [])
    .factory('session', function() {
        var session = {};

        session.user = {
            userId: 2,
            fullName: 'test'
        };

        return session;
    });
