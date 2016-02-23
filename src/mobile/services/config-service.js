(function() {
	angular.module('ynl.services')

	.factory('config', function($location, $window, ConfigCore) {
		var configCore = new ConfigCore.Base();
		var config = angular.extend(configCore, {});

		//setup the host for query parameters
		config.platform = $window.globalVars.isAndroid ? 'android' : 'ios';
		config.isTablet = window.screen.width >= 699 ? true : false;
		config.doRedirect = true;
		config.mobileImageUrls = {
			assets: '/angularjsapp/src/assets',
			assetsImages: '/angularjsapp/src/assets/images',
			assetsMobile: '/angularjsapp/src/assets/mobile'
		};

		return config;
	});

})();
