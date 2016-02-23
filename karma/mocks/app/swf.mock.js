angular.module('mocks.swf.broadcaster', [])
    .factory('swf', function() {
        var swf = {};

        swf.broadcast = {
            userId: 1,
            profile: 'test',
            comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        };
        swf.sendKeepSession = function() {};
        swf.getAudience = function() {};
        swf.notifyLogout = function() {};
        swf.notifyLogin = function() {};
        swf.storeFriendsViewing = function(){};

        return swf;
    });

angular.module('mocks.swf.nobroadcaster', [])
    .factory('swf', function() {
        var swf = {};

        swf.broadcast = {}

        return swf;
    });
