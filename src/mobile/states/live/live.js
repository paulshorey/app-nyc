(function() {

	angular.module('ynl.states')

	.config(function($stateProvider) {
		$stateProvider
			.state('router.live', {
				controller: 'liveCtrl',
				controllerAs: 'vm',
				templateUrl: 'angularjsapp/src/mobile/states/live/live.tpl.html'
			});
	})

	.controller('liveCtrl', function($state, broadcasterService, $window, config, Api, iState, broadcasterService, trackingPixel, pusher, $rootScope, $scope) {
		var params = $state.current.params;
		var vm = this;
		vm.config = config;

		/*
			Call to action
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
			Broadcast
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

		/*
			Gifts
		*/
		vm.broadcasterService.gifts = {};
		Api.get('store/goodies/v2', {}, true)
			.then(function(response) {
				vm.broadcasterService.giftAssetsBaseUrl = response.data.giftsAssetsBaseUrl;
				console.log('gifts', response);
				for (var g in response.data.goodies) {
					vm.broadcasterService.gifts[response.data.goodies[g].id] = response.data.goodies[g];
				}
			});


		/*
			Chat
		*/
		if (vm.broadcasterService.broadcast.comments.length > 30) {
			vm.broadcasterService.broadcast.comments = (vm.broadcasterService.broadcast.comments.slice((vm.broadcasterService.broadcast.comments.length - 30), vm.broadcasterService.broadcast.comments.length));
		}
		var comment = function(name, data) {

			if (name == 'onChat') {
				$scope.$evalAsync(function() {
					for (var each in data.message.comments) {
						var comment = data.message.comments[each];
						vm.broadcasterService.broadcast.comments.push(comment);
						console.log('comment', comment);
					}
				});
			}
			if (name == 'onGift') {
				$scope.$evalAsync(function() {
					for (var each in data.message.gifts) {
						var comment = data.message.gifts[each];
						comment.gift = vm.broadcasterService.gifts[parseInt(comment.giftId)];
						vm.broadcasterService.broadcast.comments.push(comment);
						console.log('comment', comment);
					}
				});
			}
			// cleanup
			if (vm.broadcasterService.broadcast.comments.length > 30) {
				vm.broadcasterService.broadcast.comments = vm.broadcasterService.broadcast.comments.slice((vm.broadcasterService.broadcast.comments.length - 30), vm.broadcasterService.broadcast.comments.length);
			}
		};
		// init
		pusher.ready().then(function() {
			pusher.subscribeToChannel(vm.broadcasterService.broadcaster.userId, 'MOBILE', comment);
		});
		pusher.init();

	});

})();
