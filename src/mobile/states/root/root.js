(function() {

	angular.module('ynl.states')

	.config(function($stateProvider) {
		$stateProvider
			.state('router.root', {
				controller: 'rootCtrl',
				controllerAs: 'vm',
				templateUrl: 'angularjsapp/src/mobile/states/root/root.tpl.html',
				params: {
					variant: 'control'
				}
			});
	})

	// router.root
	.controller('rootCtrl', function(config, Api, iState, broadcasterService, $state, trackingPixel) {
		var params = $state.current.params;
		var vm = this;
		vm.config = config;

		var getTrending = function() {
			Api.get('younow/dashboard', {}, 'usecdn').success(function(data) {
				if (data.trending_users) {
					vm.trendingUser = data.trending_users[0];
				}
			});
		};
		getTrending();


		vm.trackClick = function(action, url) {
			// deeplinking works, but click sometimes isn't tracked
			trackingPixel.trackClick(action);
			Api.trackClick(action, url);
		};

		config.yozio = Api.generateDynamicYozio('x7.c.j', broadcasterService, config, iState, Api);
		vm.gaAction = 'GetTheApp';
	});

})();
