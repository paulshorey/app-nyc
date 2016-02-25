(function() {
	angular.module('younow.states')

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
	.controller('rootCtrl', function(config, Api, $state) {
		var params = $state.current.params;
		var vm = this;
		vm.config = config;

		var getTrending = function() {
			// Api.get('younow/dashboard', {}, 'usecdn').success(function(data) {
			// 	if (data.trending_users) {
			// 		vm.trendingUser = data.trending_users[0];
			// 	}
			// });
			vm.trendingUser = {};
		};
		getTrending();
	});
})();
