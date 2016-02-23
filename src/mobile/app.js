// window
// cleanup trailing slash - reference window.pathname instead of window.location.pathname - this way there is no redirect, or complicated router logic
window.pathname = window.location.pathname;
if (pathname.substring(pathname.length-1, pathname.length) == '/') {
	pathname = pathname.substring(0, pathname.length - 1);
}

// angular
(function() {
	//Define high level modules
	angular.module('ynl.states', []);
	angular.module('ynl.services', []);
	angular.module('ynl.components', []);

	var appDependencies = [
		'templates',
		'ui.router',
		'ngTouch',
		'pascalprecht.translate',
		'younow.core',
		'younow.core.services.pusher',
		'ynl.components',
		'ynl.services',
		'ynl.services.channel',
		'younow.services.pusher',
		'ynl.states'
	];

	try {
		angular.module('templates');
	} catch (err) {
		angular.module('templates', []);
	}

	angular.module('younow', appDependencies)

	.config(function($httpProvider, $compileProvider, $locationProvider, $urlRouterProvider, $sceDelegateProvider, $translateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
		$locationProvider.html5Mode(true);

		// $translateProvider.useStaticFilesLoader({
		//     prefix: window.globalVars.CDN_BASE_URL+'/angularjsapp/src/assets/i18n/',
		//     suffix: '.json?v='+window.globalVars.JS_VERSION
		// });

		$translateProvider.useSanitizeValueStrategy(null);
		$translateProvider.preferredLanguage('en').fallbackLanguage('en');

		// Enable CORS
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data|javascript):/);
	});
})();
