angular.module('mocks.upload', [])
    .factory('upload', function() {
        function upload() {
            return window.returnPromise();
        }

        return upload;
    });
