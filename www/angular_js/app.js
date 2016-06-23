angular.module('ListModule', ['react', 'ui.router', 'angularModalService', 'ListModule.components', 'ListModule.filters', 'ListModule.directives', 'ListModule.controllers', 'ListModule.services'])

.run(function ($rootScope, $injector) {
	window.inject = function(who){
		return $injector.get([who]);
	};
	$rootScope.client = window.client;
})

.controller('Modal', function($scope, close, vm) {
	if (vm) {
		$scope.vm = vm;
	}
	$scope.close = function(result) {
		close(result, 500);
	};
})

.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$httpProvider.defaults.headers.post['Cache-Control'] = 'no-cache';
	$httpProvider.defaults.headers.post['Pragma'] = 'no-cache';
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		cache: false,
		url: '/',
		templateUrl: 'angular_html/lists.html',
		controller: "ListController",
		controllerAs: "vm"
	});

})

;
