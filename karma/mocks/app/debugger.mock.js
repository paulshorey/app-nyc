angular.module('mocks.debugger', [])
    .factory('debug', function() {
        var debug = {};

        debug.console = function() {};

        return debug;
    });
