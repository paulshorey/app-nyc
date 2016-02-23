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
	angular.module('templates', []);

	var appDependencies = [
		'ui.router',
		'younow.core',
		'ynl.states',
		'ynl.services',
		'ynl.components'
	];
	angular.module('younow', appDependencies)

	.config(function($httpProvider, $compileProvider, $locationProvider, $urlRouterProvider, $sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
		$locationProvider.html5Mode(true);

		// Enable CORS
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data|javascript):/);
	});
})();
