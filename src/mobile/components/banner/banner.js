angular.module('ynl.components')

.directive('thinBanner', ["config", "Api", function(config, Api) {
	return {
		restrict: 'A', // Directive which is declared as an attribute,
		templateUrl: 'angularjsapp/src/mobile/components/banner/thin-banner.tpl.html',
		scope: {
		},
		link: function(scope) {
			var vm = {};

			vm.config = config;

			vm.trackClick = Api.trackClick;

			scope.vm = vm;
		}
	};
}])

;
