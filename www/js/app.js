// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ionicApp.services' is found in services.js
// 'ionicApp.controllers' is found in controllers.js
angular.module('ionicApp', ['ionic', 'ionicApp.controllers', 'ionicApp.services'])

.run(function ($ionicPlatform, $rootScope, AccountService) {

	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});

	AccountService.currentUser()
		.then(function (user) {
			$rootScope.user = user;
		})
})

//.constant("socialProvider", "facebook")

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

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
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



	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/');

});