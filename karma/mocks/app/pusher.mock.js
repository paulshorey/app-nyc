angular.module('mocks.pusher', [])
    .factory('pusher', function() {
        var pusher = {};
        
		pusher.ready = function(){
			return returnPromise();
		};

        pusher.subscribe = function() {};

        return pusher;
    });
