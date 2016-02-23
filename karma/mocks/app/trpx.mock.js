angular.module('mocks.trpx.webrtc', [])
    .factory('trpx', function() {
        var trpx = {};

        trpx.capture = function() {};
        trpx.captureGroup = function() {};
        trpx.getUserLocation = function() {};

        trpx.captureGroups = {
            webrtc: {}
        };

        return trpx;
    });
