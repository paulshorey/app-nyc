(function() {

	angular.module('younow.directives')

	.directive('xxx', function() {
		return {
			restrict: 'A',
			link: function(scope, elements, attrs) {
				elements.bind('keydown keypress', function(event) {
					if (event.which === 13) {
						scope.$apply(function() {
							scope.$eval(attrs.ynEnter);
						});
						event.preventDefault();
					}
				});
			}
		};
	})

	;

})();
