(function() {
	angular.module('younow.core.services')

	.factory('ConfigCore', function($location) {
		var ConfigCore = {};

		ConfigCore.Base = function() {
			this.params = $location.search();
			this.settings = {};
			this.host = this.params.host || window.location.host;
			this.newVisitor = window.newVisitor = !window.localStorage.trpx_device_id ? true : false;
		};

		return ConfigCore;

	});

})();
