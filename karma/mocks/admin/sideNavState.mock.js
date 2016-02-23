angular.module('mocks.sideNavState', [])
    .factory('sideNavState', function() {
        var sideNavState = {
            status: 'closed'
        };

        return sideNavState;
    });
