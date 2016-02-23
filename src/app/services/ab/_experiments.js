////////////////////////////////
// ORGANIZE NEW EXPERIMENTS INTO CONCISE BLOCKS 
// surround each with comments and line breaks // git has a hard time merging this file
angular.module('younow.services.ab')
	.factory('experiments', [function() {
		return {};
	}])

//
// ALL EXPERIMENTS
//
.run(["experiments", function(experiments) {


	// AUTOFAN
	experiments.AUTOFAN = {
		backendExperiment: true,
		na: 'A'
	};

	// DOWNLOAD APP
	experiments.DOWNLOAD_APP = {
		backendExperiment: true,
		na: 'A'
	};

	// Web Push
	experiments.WEB_PUSH_AB = {
		backendExperiment: true,
		na: 'A'
	};

	// PROFILE TABS
	experiments.WEB_PROFILE_TABS = {
		backendExperiment: true,
		na: 'A'
	};

	// HOME EXP
	// home exp
	experiments.HOME_EXP = {
		backendExperiment: true,
		na: 'A'
	};
	// end home exp

	// PROFILE
	experiments.CRAZY_PROFILE = {
		backendExperiment: true,
		na: 'A'
	};

	// PROFILE
	experiments.WEB_NAV = {
		backendExperiment: true,
		na: 'A'
	};


}])

//
// ALL CONTROLLERS
//
.controller('HOME_EXP', function($scope, ab, $rootScope, $timeout, $interval, session, Api, config, $state, broadcasterService, trackingPixel) {
	window.HOME_EXP_variant = ab.variant('HOME_EXP');
	$scope.base = config.settings.ServerCDNBaseUrl;
	$scope.loggingIn = {};
	var source = 'HOME_EXP';

	var rejectLogin = function(reason) {};
	$scope.login = function(type) {
		if (!$scope.attemptedLogin) {
			$scope.attemptedLogin = true;
		}
		$scope.loggingIn[type] = true;
		if (session.authenticate[type]) {
			$timeout(function() {
				session.auth(type)

				// modal used
				.then(function(response) {
					// Success
					if (response && response.data && response.data.id) {
						// log
						if (response.data.newUser) {
							$rootScope.gaEvent('LOGIN', 'LOGIN_NEW_' + type.toUpperCase() + '', source);
						} else {
							$rootScope.gaEvent('LOGIN', 'LOGIN_RETURNING_' + type.toUpperCase() + '', source);
						}
						//  Close after slight delay, to give time to fetch fan status and update UI
						if (response.data.coinFeedbackCopy && response.data.coinFeedbackAmount) {
							Api.showTopNotification(response.data.coinFeedbackCopy + ' <img class="coin-sm" src="' + config.settings.ServerCDNBaseUrl + '/angularjsapp/src/assets/images/icons_v3/menu_user_coins1.png">' + response.data.coinFeedbackAmount, 'now', false, undefined, 5000);
						}
						// redirect, because it doesn't do it manually???
						$state.go("main.channel.detail");
					}
					// Reject if response was empty
					else {
						rejectLogin('Unsuccessful');
					}
					$scope.loggingIn[type] = false;
				})

				// modal closed
				.catch(function(response) {
					$scope.loggingIn[type] = false;
					rejectLogin('Failed to login');
				});

			}, 0);
		} else {
			rejectLogin('Invalid auth method');
		}
	};
	$scope.showMoreOptions = function() {
		$scope.moreOptions = true;
	};

})

		// AUTOFAN >
		.controller('AUTOFAN', function($scope, Api, $modal, config, eventbus, session, $interval, ab, broadcasterService, trackingPixel, $filter) {

			// setup variant
			var experiment = {};
			experiment.variant = ab.variant('AUTOFAN');
			window.ab_autofan = experiment.variant;

			// setup mechanism
			experiment.fan = function(){
				// ignore
				if (!broadcasterService.broadcaster || broadcasterService.broadcaster.userId == session.user.userId) {
					return false;
				}
				var post = {
					userId: session.user.userId,
					channelId: broadcasterService.broadcaster.userId,
					broadcastId: broadcasterService.broadcaster.broadcastId
				};
				Api.post('channel/fan', post).then(function(response) {
					if (response.data && !response.data.errorCode) {
						// Toggle
						session.fanStatus[broadcasterService.broadcaster.userId] = true;
						// Update fan count
						broadcasterService.broadcaster.totalFans = broadcasterService.broadcaster.totalFans +1; 
						// Notification
						Api.showTopNotification($filter('translate')('autofan_congrats', { value: ((broadcasterService.broadcaster.profile || broadcasterService.channel.profile)) }), 'success', false, false, 5000);
						// Done
						eventbus.unsubscribe('session:loggedIn','AUTOFAN');
					}
				});
			};

			// CONTROL
			if (!experiment.variant || experiment.variant == 'A') {
				return false;
			}

			// AUTOFAN
			if (experiment.variant == 'B' || experiment.variant=='C' || experiment.variant=='D') {
				eventbus.subscribe('session:loggedIn', function(name, value) {
					if (value && config.loginData.newUser) {
						experiment.fan();
					}
				}, 'AUTOFAN', $scope);
			}

			// PROMPT
			if (experiment.variant=='C' || experiment.variant=='D') {

				experiment.oldBroadcastId = 0;
				experiment.watchedTime = 0;
				experiment.show = function() {
					// if not logged in, prompt
					if (!session.user.userId) {
						// track
						trackingPixel.capture({
							'event': 'REGISTER_PROMPT'
						});
						// modal
						$modal.loginModal(experiment.variant == 'C', 'AUTO_REGISTER', {title:'Sign up to continue watching'}).result.then(function(response) {
							// track
							trackingPixel.capture({
								'event': 'REGISTER_PROMPT'
							});
						}).catch(function(){
							// track
							trackingPixel.capture({
								'event': 'AUTO_REGISTER',
								'extradata': 'LOGIN_REJECTED'
							});
						});
					}
					// cleanup
					$interval.cancel(experiment.watch);
				};

				experiment.check = function() {
					if (session.user && !session.user.userId && broadcasterService.broadcaster.broadcastId) {
						if (broadcasterService.broadcaster.broadcastId != experiment.oldBroadcastId) {
							experiment.watchedTime = 0; // new broadcast
						} else {
							experiment.watchedTime = experiment.watchedTime + 1000; // playing
							if (experiment.watchedTime == 120000) { // only once
								experiment.show();
							}
						}
						experiment.oldBroadcastId = broadcasterService.broadcaster.broadcastId;
					}
				};

				experiment.watch = $interval(experiment.check, 1000);
				$scope.$on('$destroy', function() {
					$interval.cancel(experiment.watch);
				});
			}
		})
		// AUTOFAN <

// PROFILE
.controller('CRAZY_PROFILE', function($scope, $rootScope, Api, ab, config, session, $modal, $timeout, broadcasterService, trackingPixel, $filter) {
	$scope.broadcasterService = broadcasterService;
	window.profile_experiment_variant = ab.variant('CRAZY_PROFILE');

	// CANCEL
	if (!window.newVisitor) {
		$scope.overrideVariant = window.profile_experiment_variant = "A";
	}

	// EXP D
	if (window.profile_experiment_variant == 'D') {
		var watchBroadcaster = $scope.$watch('broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId', function(broadcastId) {
			var bs = [];
			if (broadcastId) {
				$timeout(function() {
					// try all
					bs.push(parseInt(broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId));
					if (broadcasterService.channel.broadcasts[1]) {
						bs.push(parseInt(broadcasterService.channel.broadcasts[1].media.broadcast.broadcastId));
						if (broadcasterService.channel.broadcasts[2]) {
							bs.push(parseInt(broadcasterService.channel.broadcasts[2].media.broadcast.broadcastId));
						}
					}
					// get on with my life
					if (!broadcasterService.broadcaster.broadcastId) {
						$modal.mediaPlayerModalExp(bs);
						watchBroadcaster();
						return true;
					} else {
						return false;
					}
				}, 500);
			} else {
				return false;
			}
		});
	}


	// EXP C
	if (window.profile_experiment_variant == 'C') {
		$scope.expC_display = true;
		$scope.expC_opaque = true;
	}
	var experimentCHide = function(source) {
		// hide
		$scope.expC_opaque = false;
		$timeout(function() {
			$scope.expC_display = false;
		}, 1000);
	};
	$scope.experimentCUserX = function(source) {
		// hide
		experimentCHide();
		// track
		if (!source) {
			source = '';
		} else {
			source = '_' + source;
		}
		trackingPixel.trackClick('ESCAPE', {
			field1: 'x' + source
		});
	};

	var experimentCFan = function() {
		// fan
		var apiPost = {
			userId: session.user.userId,
			channelId: broadcasterService.channel.userId,
			fan_type: 'AUTO_REGISTER'
		};
		if (broadcasterService.broadcaster && broadcasterService.broadcaster.broadcastId) {
			apiPost.broadcastId = broadcasterService.broadcaster.broadcastId;
		}
		Api.post('channel/fan', apiPost).then(function(response) {
			if (response.data && !response.data.errorCode) {
				// Toggle
				session.fanStatus[broadcasterService.channel.userId] = true;
				// Update fan count
				broadcasterService.channel.totalFans = broadcasterService.channel.totalFans + 1;
				// Notification
				Api.showTopNotification($filter('translate')('autofan_congrats', { value: ((broadcasterService.broadcaster.profile || broadcasterService.channel.profile)) }), 'success', false, false, 5000);
				// Exit
				experimentCHide();
			}
		});

		// close
		$scope.experimentCFanned = true;
		$timeout(experimentCHide, 1000);
	};
	$scope.experimentCClick = function() {
		$rootScope.gaEvent('Conversion', 'Fan (Attempt)', trackingPixel.getUserLocation() || 'ANCILLARY');

		// verify
		if (!session.loggedIn) {
			session.showLoginModal(false, 'FAN').result.then(function() {
				experimentCFan();
			}).catch(function() {
				experimentCFan();
			});
			return false;
		}

		experimentCFan();
	};

})

// DOWNLOAD APP
.controller('DOWNLOAD_APP', function($scope, config, $filter, ab, trackingPixel, Api, session, $modal, $timeout, eventbus) {
	var dapp = {};
	dapp.variant = ab.variant('DOWNLOAD_APP');
	dapp.notify = function() {
		$modal.mobileDownload();

		Api.store('dapp_shown_count_' + session.user.userId, dapp.shown_count + 1);
		Api.store('dapp_shown_last_' + session.user.userId, Date.now());
	};

	dapp.check = function() {
		if (dapp.variant == 'B') {
			dapp.shown_count = Api.store('dapp_shown_count_' + session.user.userId);
			dapp.shown_last = Api.store('dapp_shown_last_' + session.user.userId);

			if (!dapp.shown_count) {
				// show right away
				dapp.notify();

			} else if (dapp.shown_count < 10) {
				// second time show after 72hrs
				if (dapp.shown_last + (1000 * 60 * 60 * 72) < Date.now()) { //*60*60
					dapp.notify();
				}

			}

		}
	};

	if (session.user.userId && session.user.userId > 0) {
		if (!session.user.isMobileUser) {
			dapp.check();
		}
	}
	eventbus.subscribe('session:loggedIn', function(eventName, loggedIn) {
		if (loggedIn && !session.user.isMobileUser) {
			dapp.check();
		}
	}, 'dapp_experiment', $scope);

});
////////////////////////////
