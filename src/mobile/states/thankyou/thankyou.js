(function() {

	//require the states module
	angular.module('ynl.states')

	.config(function($stateProvider) {
		$stateProvider
			.state('router.thankyou', {
				controller: 'thankyouCtrl',
				controllerAs: 'thankyou',
				templateUrl: 'angularjsapp/src/mobile/states/thankyou/thankyou.tpl.html'
			});
	})

	.controller('thankyouCtrl', function($state, $window, user, config, Api, iState) {
		var thankyou = this;
		var platform = window.globalVars.isAndroid ? 'android' : 'ios';
		thankyou.config = config;
		thankyou.trackClick = Api.trackClick;

		//setup yozio
		config.yozio = Api.generateDynamicYozio('x7.c.k', user, config, iState, Api);
	});

})();
