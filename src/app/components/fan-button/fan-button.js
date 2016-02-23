angular.module('younow.fan-button', [])

.directive('fanButton', ["session", "Api", "broadcasterService", "config", "trackingPixel", "$rootScope", "guestService", "webpush", function(session, Api, broadcasterService, config, trackingPixel, $rootScope, guestService, webpush) {
	return {
		restrict: 'A', // Directive which is declared as an attribute
		templateUrl: 'angularjsapp/src/app/components/fan-button/fan-button.tpl.html',
		scope: {
			channel: '=',
			size: '@',
			classname: '@'
		},
		link: function(scope, element, attributes) {
			if (scope.size === 'small') {
				element.addClass('btn-small');
			}
			//
			scope.base = config.settings.ServerCDNBaseUrl;
			scope.hidden = true;
			scope.subStatus = session.subStatus;
			scope.fanStatus = session.fanStatus;
			//
			scope.checkFan = function(channel) {
				if (channel && channel.userId) {
					// broadcaster
					if (session.user && channel.userId == session.user.userId) {
						scope.hidden = true;
						// user
					} else {
						session.getFan(channel.userId);
						scope.hidden = false;
					}
					scope.channel = channel;
				}
			};
			scope.$watch('channel', scope.checkFan, true);
			//
			scope.toggleFan = function() {
				trackingPixel.trackClick('FAN');

				$rootScope.gaEvent('Conversion', 'Fan (Attempt)', trackingPixel.getUserLocation() || 'ANCILLARY');

				if (!session.loggedIn) {
					session.showLoginModal('', 'FAN').result.then(scope.toggleFan);
					return false;
				}
				// Change values, based on fan or unfan
				var apiMethod, fanCountChange;
				if (session.fanStatus[scope.channel.userId]) {
					apiMethod = 'channel/unFan';
					fanCountChange = -1;
				} else {
					apiMethod = 'channel/fan';
					fanCountChange = 1;
				}
				// Post to the API
				var apiPost = {
					userId: session.user.userId,
					channelId: scope.channel.userId
				};
				if (broadcasterService.broadcaster && broadcasterService.broadcaster.broadcastId) {
					apiPost.broadcastId = broadcasterService.broadcaster.broadcastId;
				}
				if (element[0].parentElement.attributes['track-source']) {
					apiPost.fan_type = element[0].parentElement.attributes['track-source'].value;
				}
				//TODO: We need to ask backend to pass in another param to indicate the context of this fan for now we will override it
				if (element[0].parentElement.attributes['track-context'] && (element[0].parentElement.attributes['track-context'].value === 'GUESTLIST' || element[0].parentElement.attributes['track-context'].value === 'GUESTLIVE')) {
					apiPost.fan_type = element[0].parentElement.attributes['track-context'].value;
				}

				Api.post(apiMethod, apiPost).then(function(response) {
					if (response.data && !response.data.errorCode) {
						// Toggle
						session.fanStatus[scope.channel.userId] = fanCountChange > 0 ? true : false;
						// Update fan count
						scope.channel.totalFans = scope.channel.totalFans * 1 + fanCountChange;
						// Callback
						if (scope.callback) {
							scope.callback();
						}
						// Attempt push prompt
						if(fanCountChange===1) {
							webpush.triggerPushPrompt('FAN');
						}
					}
				});
			};
		}
	};
}])

;
