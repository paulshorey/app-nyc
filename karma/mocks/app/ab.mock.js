angular.module('mocks.ab', [])
    .factory('ab', function() {
        var ab = {
            ready: window.returnPromise(),
            variant: function() {}
        };

        return ab;
    });
