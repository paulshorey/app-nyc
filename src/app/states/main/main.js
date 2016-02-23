angular.module('younow.main', [
	'ui.router',
	'younow.header',
	'younow.footer',
	'younow.leftsidebar',
	'younow.activity-panel',
	'younow.explore',
	'younow.settings',
	'younow.channel' // This must be injected last, so it doesn't override /explore and /settings
])

.config(["$stateProvider", function config($stateProvider) {
	$stateProvider.state('main', {
		url: '',
		abstract: true,
		templateUrl: 'angularjsapp/src/app/states/main/main.tpl.html',
		controller: 'MainCtrl'
	});
}])

.controller('MainCtrl', ["$scope", "$rootScope", "$modal", "config", "session", "Api", "broadcasterService", "trackingPixel", "$timeout", "session", function HomeController($scope, $rootScope, $modal, config, session, Api, broadcasterService, trackingPixel, $timeout, session) {

	$scope.session = session;
	$scope.broadcasterService = broadcasterService;

	// not a phone, continue
	// is phone, stop
	if (!/Android/i.test(navigator.userAgent) &&
		!/BlackBerry/i.test(navigator.userAgent) &&
		!/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
		!/IEMobile/i.test(navigator.userAgent)
	) {} else {
		window.location.href = '/';
	}

	$scope.session = session;
	$scope.closeNotification = function(group) {
		Api.closeTopNotification(group);
	};

	$scope.closeBanner = function(group) {
		Api.closeTopBanner(group);
	};

	$scope.onboardingCTA = function() {
		trackingPixel.trackClick('BANNER');
		$rootScope.gaEvent('Conversion', 'Click Welcome Banner CTA', trackingPixel.getUserLocation() || 'ANCILLARY');
		Api.closeTopBanner("sticky");
	};


	if ($rootScope.skipAgeGate) {
		$rootScope.skipAgeGate = false;
		$modal.ageGate();
	}

}])

;
