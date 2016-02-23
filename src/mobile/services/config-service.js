(function() {
	angular.module('ynl.services')

	.factory('config', function($location, $window, ConfigCore) {
		var configCore = new ConfigCore.Base();
		var config = angular.extend(configCore, {});

		config.platform = 'android';
		config.isTablet = window.screen.width >= 699 ? true : false;

		return config;
	});

})();
