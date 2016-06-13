angular.module('appNyc', ['ionic', 'react', 'appNyc.components', 'appNyc.filters', 'appNyc.directives', 'appNyc.controllers', 'appNyc.services'])

.run(function ($ionicPlatform, $rootScope, AccountService, $injector, $ionicModal) {
	$ionicPlatform.ready(function () {
		// hide accessory bar
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		// modify status bar
		if (window.StatusBar) {
			StatusBar.styleDefault(); // org.apache.cordova.statusbar required
		}
	});
	window.inject = function(who){
		return $injector.get([who]);
	};
	// init stuff for all controllers


	/*
		MODALS
	*/
	$rootScope.filepath = document.getElementsByTagName("script");
	$rootScope.modals = {};
	$ionicModal.fromTemplateUrl('angular_html/modals/options.html', {
			scope: $rootScope,
			animation: 'slide-in-right'
		})
		.then(function (modal) {
			$rootScope.modals['modalOptions'] = modal;
		});
	$ionicModal.fromTemplateUrl('angular_html/modals/contribute.html', {
			scope: $rootScope,
			animation: 'slide-in-top'
		})
		.then(function (modal) {
			$rootScope.modals['modalContribute'] = modal;
		});
	$rootScope.$on('modal.shown', function () {
		$('.my-content')
			.addClass('blurry');
	});
	$rootScope.$on('modal.hidden', function () {
		$('.my-content')
			.removeClass('blurry');
	});
	$rootScope.modalsClose = function () {
		for (var m in $rootScope.modals) {
			$rootScope.modals[m].hide();
		}
	};
	$rootScope.$on('$destroy', function () {
		for (var m in $rootScope.modals) {
			$rootScope.modals[m].remove();
		}
	});


})

.constant('$ionicLoadingConfig', {
	template: "<ion-spinner></ion-spinner>",
	hideOnStateChange: false
})

.config(function ($ionicConfigProvider, $stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {
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
		templateUrl: 'angular_html/lists.html',
		controller: "ListController",
		controllerAs: "vm"
	});

	$urlRouterProvider.otherwise('/');
})

;
