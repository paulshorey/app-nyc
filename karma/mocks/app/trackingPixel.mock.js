angular.module('mocks.trackingPixel', [])
    .factory('trackingPixel', function() {
        var trackingPixel = {};

        trackingPixel.capture = function() {};
        trackingPixel.trackClick = function() {};
        trackingPixel.getUserLocation = function() {};

        return trackingPixel;
    });
