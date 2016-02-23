angular.module('mocks.Api', [])
    .factory('Api', function($q) {
        var Api = {};

        function promise(response) {
            deferred = $q.defer();
            deferred.resolve(response);
            return deferred.promise;
        };

        Api.get = promise;

        Api.post = promise;

        Api.trustedHTML = function(string) {return string;};

        return Api;
    });
