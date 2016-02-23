(function() {

	angular.module('ynl.states')

	.config(function($stateProvider) {
		$stateProvider
			.state('router', {
				abstract: true,
				template: '<div ui-view></div>'
			});
	})

	.controller('AppCtrl', function(Api, config, $location, $state, broadcasterService, $rootScope, iState, $q, ab, experiments, trackingPixel) {

		if (Api.store('tdi')) {
			Api.store('trpx_device_id', Api.store('tdi'));
			Api.store('tdi', null);
		}

		function routeAndTrackArrival(stateName, pageType) {
			iState.setPageType(pageType);
			$state.go(stateName);
			trackingPixel.trackArrival(iState.pageType);
		}

		var path = angular.copy($location.$$path),
			vm = this,
			param = window.pathname,
			userId,
			timestamp,
			requestUri = window.pathname + window.location.search,
			deferred = $q.defer();

		config.hasOpened = Api.store("hasOpened") || false;

		function checkResume() {
			var current = new Date().getTime();
			if ((current - timestamp) > 2000) {
				// document.getElementById('gotostore').style.display = 'none';
				// document.getElementById('gotoapp').style.display = 'block';
				window.clearInterval(intervalId);
				config.doRedirect = false;
				Api.trackEvent('Resume', true);
			}
			timestamp = current;
		}

		if (config.platform === 'android' || !Api.store('hasOpened')) {
			// document.getElementById('gotoapp').style.display = 'block';
		} else {
			timestamp = new Date().getTime();
			var intervalId = window.setInterval(checkResume, 50);
		}

		// handle a failed deeplink > force redirect to store
		if (window.location.href.indexOf('__ydl=1') !== -1) {
			var tracker = 'x7.c.j';
			var yozioLink = 'https://r.yozio.com/' + tracker + window.location.search;
			var args = {
				onUniversalLinkPage: true,
				shortUrls: [tracker],
				autoRedirect: {
					url: yozioLink,
					params: {
						yozio_disable_new_install_redirect: false
					}
				}
			};
			window.Yozio.onPageLoad(args);
			return false;
			//window.open(yozioLink, '_self');
		}

		//overriding with the state param
		if (config.params.state && config.params.state !== undefined) {
			$state.go(config.params.state);
			return false;
		}
		//Route to the Thank you state
		if (iState.linkType === 'thankyou') {
			routeAndTrackArrival('router.thankyou', 'thankyou');
			return false;
		}

		if (iState.linkType === 'getpartnered') {
			routeAndTrackArrival('router.fullscreen', 'getpartnered');
			return false;
		}

		if (iState.linkType == 'profile' || iState.linkType == 'broadcast') {

			// GET BROADCAST INFO
			Api.get('broadcast/info/user=' + param)
				.then(function(response) {

					// broadcast
					if (response.data.userId) {
						broadcasterService.store(response.data, 'broadcaster');
					}

					// SHARE experiment
					if (iState.linkType == 'broadcast' && $location.$$path.split('/')[3] != response.data.userId) {
						vm.sharerExperiment = true;
						// sharer: (user will have "broadcaster or channel" AND "sharer" node)
						Api.get('channel/getInfo', {
							channelId: $location.$$path.split('/')[3]
						}, true).success(function(data) {
							broadcasterService.store(data, 'sharer');
						});
					}

					// they are LIVE
					if (response.data && response.data.broadcastId) {

						//archived bc ?
						if (iState.linkType == 'broadcast' && response.data.broadcastId != requestUri.split('/')[2]) {
							iState.setPageType('archived-live');
						} else {
							iState.setPageType('live');
						}

						deferred.resolve();
					}

					// not live, show PROFILE
					else if (response.data.userId) {

						// if user is live, get additional data
						Api.get('channel/getInfo', {
							channelId: response.data.userId
						}, true).success(function(data) {
							broadcasterService.store(data, 'channel');
						});

						//archived bc ?
						if (iState.linkType == 'broadcast') {
							iState.setPageType('archived');
						} else {
							iState.setPageType('profile');
						}
						deferred.resolve();
					}

					// not a user (e.g., 404)
					else {
						iState.setPageType('404');
						deferred.resolve();
					}

				});
		} else {

			// default (will probably route to homepage if we don't have a template for the linkType)
			iState.setPageType(iState.linkType);
			deferred.resolve();
		}


		//////////////////////////////////////////////////////////////////////////////////////////
		// ROUTER
		// once we have the linkType we can initiate any experiments in here.
		deferred.promise.then(function() {
			iState.setDeepLink();

			var split;
			if (iState.pageType == 'live' || iState.pageType == 'profile' || iState.pageType == 'archived' || iState.pageType == 'archived-live') {

				// user.broadcasts
				return Api.get('post/getBroadcasts', {
					channelId: broadcasterService.broadcaster.userId
				}, true)
				.success(function(data) {

					// broadcasts
					broadcasterService.store(data.posts, 'broadcasts');

					// view
					var split = ab.variant('nonlive_exp');
					console.log('split',split);
					routeAndTrackArrival(experiments.nonlive_exp.variants[split], iState.pageType);

				});

			} else {

				// root
				routeAndTrackArrival('router.root', 'root');

			}

		});


		//////////////////////////////////////////////////////////////////////////////////////////
		// ETC
		$rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams) {
				ga('send', 'pageview');
			});
	});

})();
