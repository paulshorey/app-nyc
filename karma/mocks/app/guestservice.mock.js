angular.module('mocks.guestService', [])
    .factory('guestService', function() {
        var guestService = {};

        guestService.overlayStates = {
            broadcaster: 'ready',
            guest: 'ready'
        };

        guestService.listPreferences = {
    		filter: 'level',
    		dir: undefined
    	};

        guestService.inviteGuest = function(userId, guestId, pendingGuestObj, mode) {};
        guestService.notifyLogout = function() {};
        guestService.notifyLogin = function() {};

        return guestService;
    });
