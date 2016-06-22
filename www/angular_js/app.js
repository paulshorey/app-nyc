angular.module('appNyc', ['react', 'ui.router', 'appNyc.components', 'appNyc.filters', 'appNyc.directives', 'appNyc.controllers', 'appNyc.services'])

// .run(function ($rootScope, AccountService, $injector) {
// 	window.inject = function(who){
// 		return $injector.get([who]);
// 	};
// })

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
