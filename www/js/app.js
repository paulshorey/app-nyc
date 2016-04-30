angular.module('ionicApp', ['ionic', 'ionicApp.controllers', 'ionicApp.services', 'slickCarousel'])

.run(function ($ionicPlatform, $rootScope, AccountService) {

	$ionicPlatform.ready(function () {
		// hide accessory bar
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			// modify status bar
			StatusBar.styleDefault(); // org.apache.cordova.statusbar required
		}
	});

	AccountService.currentUser().then(function (data) {
		$rootScope.user = data;
	})
})

.constant('$ionicLoadingConfig', {
	template: "<ion-spinner></ion-spinner>",
	hideOnStateChange: false
})

.config(function ($ionicConfigProvider, 		$stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$httpProvider.defaults.headers.post['Cache-Control'] = 'no-cache';
	$httpProvider.defaults.headers.post['Pragma'] = 'no-cache';
	$ionicConfigProvider.views.maxCache(0);
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$stateProvider
	.state('lists', {
		cache: false,
		url: '/',
		templateUrl: 'templates/lists.html',
		controller: "ListController",
		controllerAs: "vm"
	})
	.state('about', {
		cache: false,
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: "ListController",
		controllerAs: "vm"
	})
	.state('addList', {
		cache: false,
		url: '/addList',
		templateUrl: 'templates/modals/addList.html',
		controller: "ListController",
		controllerAs: "vm"
	})
	.state('editList', {
		cache: false,
		url: '/editList/:id',
		templateUrl: 'templates/modals/editList.html',
		controller: "ListController",
		controllerAs: "vm"
	})

	$urlRouterProvider.otherwise('/');
});