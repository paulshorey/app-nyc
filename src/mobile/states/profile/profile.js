(function() {

	angular.module('ynl.states')

	.config(function($stateProvider) {
		$stateProvider
			.state('router.profile', {
				controller: 'profileCtrl',
				controllerAs: 'vm',
				templateUrl: 'angularjsapp/src/mobile/states/profile/profile.tpl.html'
			});
	})

	.controller('profileCtrl', function($state, broadcasterService, $window, config, Api, iState, broadcasterService, trackingPixel, pusher) {
		var params = $state.current.params;
		var vm = this;
		vm.config = config;

		/*
			Action
		*/
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

		/*
			Layout
		*/
		var parser = new window.UAParser();
		vm.broadcasterService = broadcasterService;
		// broadcaster
		vm.broadcasterService.broadcaster = broadcasterService.channelFormat(vm.broadcasterService.broadcaster, vm.broadcasterService.channel); // = channel || broadcaster, all odd variations of properties corrected via broadcasterService.channelFormat()
		// broadcast
		if (vm.broadcasterService.broadcaster.broadcastId) {
			// live
			vm.broadcasterService.broadcast = vm.broadcasterService.broadcaster; // dont have information about current broadcast, so using what we got
			vm.broadcasterService.broadcast.isLive = 1;
			vm.broadcasterService.broadcast.tag = broadcasterService.broadcast.tags[0];
		} else if (broadcasterService.broadcasts && broadcasterService.broadcasts[0]) {
			// archived
			vm.broadcasterService.broadcast = broadcasterService.broadcasts[0].media.broadcast; // last broadcast
			vm.broadcasterService.broadcast.isLive = 0;
			vm.broadcasterService.broadcast.tag = broadcasterService.broadcast.tags;
		} else {
			// none
			vm.broadcasterService.broadcast = {};
		}
		vm.thumb = config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + vm.broadcasterService.broadcaster.userId;
		vm.os = parser.getOS();

		console.log('broadcasterService (profile)',vm.broadcasterService);

	});

})();
