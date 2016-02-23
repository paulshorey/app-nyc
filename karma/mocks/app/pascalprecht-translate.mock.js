angular.module('mocks.pascalprecht.translate', [])

.filter('translate', function () {

  var translateFilter = function (translationId, interpolateParams, interpolation) {
    return translationId;
  };

  return translateFilter;
})

.factory('$translate', function () {

  var translateFactory = function() {
      return returnPromise();
  };


	 return translateFactory;
})

;
