angular.module('mocks.Api', [])
    .factory('Api', function($q) {
        var Api = {
            polls: {},
            browser: {
                name: 'Firefox'
            }
        };

        Api.get = function() {
            deferred = $q.defer();
            deferred.resolve();
            deferred.promise.success = function(callback) {
                deferred.promise.then(callback);
                return deferred.promise;
            };
            deferred.promise.error = function(callback) {
                deferred.promise.then(null, callback);
                return deferred.promise;
            };
            return deferred.promise;
        };
        Api.post = function(){
            deferred = $q.defer();
            deferred.resolve();
            deferred.promise.success = function(callback) {
                deferred.promise.then(callback);
                return deferred.promise;
            };
            deferred.promise.error = function(callback) {
                deferred.promise.then(null, callback);
                return deferred.promise;
            };
            return deferred.promise;
        };

        Api.sortUsers = function(){};
        Api.openSharePopup = function(){};
        Api.buildPixelTracking = function() {};
        Api.store = function() {};
        Api.trustedHTML = function(string){
            return string;
        };
        Api.buildShareUrl = function(){};
        Api.poll = function() {};
        Api.cleanLocation = function() {};
        Api.showTopNotification = function() {};
        Api.pad = function(){ return '';};
        Api.fullName = function(){ return '';};
        Api.squashedNumber = function() {};

       	 //UA PARSER
        	Api.browser = {
        		name: 'BROWSER',
        		major: '1'
        	};

        	Api.os = {
        		name: 'OS',
        		major: '1'
        	};

        return Api;
    });
