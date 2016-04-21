'use strict';
(function () {
	/**
	 * @ngdoc function
	 * @name todoApp.controller:HeaderCtrl
	 * @description
	 * # HeaderCtrl
	 * Header controller of the todoApp, identifying the current user
	 */
	angular.module('mytodoApp').controller('HeaderCtrl', ['$state', 'AuthService', function($state, AuthService) {
		var self = this;
		self.currentUser = AuthService.currentUser;
		self.appName = AuthService.appName;
		self.error = $state.params.error;
		self.socialProviders = AuthService.getSocialProviders();

		function signinFail(error) {
			self.error = error && error.data || error.error_description || 'Unknown error from server';
		}
		function signinSuccess() {
			window.console.warn('Signed in!');
		}
		self.socialSignin = function (provider) {
			self.newUser ?
				AuthService.socialSignup(provider.name)
				.then(signinSuccess, signinFail) :
				AuthService.socialSignin(provider.name)
				.then(signinSuccess, signinFail);
		};
		self.logout = function () {
			AuthService.logout();
		};

	}]);

})();