angular.module('mocks.NgTableParams', [])
    .provider('NgTableParams', function() {
        this.$get = function() {
            return function NgTableParams(){
            	return {reload: function(){}};
            };
        };
        
    });
