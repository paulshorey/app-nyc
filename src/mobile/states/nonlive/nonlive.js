(function() {

	angular.module('ynl.states')

	.config(function($stateProvider) {
		$stateProvider
			.state('router.nonlive_a', {
				controller: 'nonliveCtrl',
				controllerAs: 'vm',
				templateUrl: 'angularjsapp/src/mobile/states/nonlive/nonlive_a.tpl.html',
				params: {
					variant: 'A'
				}
			})
			.state('router.nonlive_b', {
				controller: 'nonliveCtrl',
				controllerAs: 'vm',
				templateUrl: 'angularjsapp/src/mobile/states/nonlive/nonlive_b.tpl.html',
				params: {
					variant: 'B'
				}
			});
	})

	.controller('nonliveCtrl', function($state, broadcasterService, $window, config, Api, iState, broadcasterService, trackingPixel, pusher) {
		var params = $state.current.params;
		var vm = this;
		vm.config = config;
		vm.ua = {};
		if (window.navigator.userAgent.indexOf('Twitter') != -1) {
			vm.ua.name = 'twitter';
		}

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
			Broadcaster
		*/
		var parser = new window.UAParser();
		vm.broadcasterService = broadcasterService;
		// broadcaster
		vm.broadcasterService.broadcaster = broadcasterService.channelFormat(vm.broadcasterService.broadcaster, vm.broadcasterService.channel); // = channel || broadcaster, all odd variations of properties corrected via broadcasterService.channelFormat()
		vm.broadcasterService.broadcaster.broadcasterlevel = Math.floor(vm.broadcasterService.broadcaster.broadcasterlevel) || null;
		// broadcast
		if (vm.broadcasterService.broadcaster.broadcastId) {
			// live
			vm.broadcasterService.broadcast = vm.broadcasterService.broadcaster; // dont have information about current broadcast, so using what we got
			vm.broadcasterService.broadcast.isLive = 1;
			vm.broadcasterService.broadcast.tag = broadcasterService.broadcaster.tags[0];
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

		// console.log('vm.broadcasterService', vm.broadcasterService);
		// console.log('vm.broadcasterService.broadcasts[0].media.broadcast.broadcastThumb', vm.broadcasterService.broadcasts[0].media.broadcast.broadcastThumbnail);


	});

})();
