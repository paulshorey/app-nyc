(function() {
	angular.module('ynl.services')

	.factory('iState', function($state, Api, broadcasterService, config, trackingPixel) {
		var iState = {};

		iState.linkType = Api.getLinkType(window.pathname, window.location.search);

		iState.setDeepLink = function() {
			var action;
			var pieces = window.pathname.split('/');
			if (window.globalVars) {
				var params = {};
				var broadcastId = broadcasterService.broadcaster ? broadcasterService.broadcaster.broadcastId : window.pathname.split('/')[2];
				if (broadcasterService.broadcaster && broadcastId ) {
					// archived broadcast
					if (!window.globalVars.isAndroid) {
						action = 'broadcast';
					} else {
						action = 'watch';
					}
					config.deepLink = 'younow://' + action + '/' + broadcasterService.broadcaster.userId;
					params.entityId = broadcastId;
					params.deepLink = 'b';
				} else if (broadcasterService.broadcaster && broadcasterService.broadcaster.userId !== undefined) {
					// profile
					config.deepLink = 'younow://profile/' + broadcasterService.broadcaster.userId;
					if (pieces[5]) {
						params.entityId = pieces[2];
						params.deepLink = pieces[5];
					}
				} else {
					// root
					config.deepLink = 'younow://default';
				}
				// Acquistion info
				params.field3 = iState.linkType;
				var linkTerm = Api.getLinkTerm(window.pathname, window.location.search, params.field3); // linkTerm
				params.field4 = Api.store('trpx_device_id'); // mobile web device
				params.field6 = Api.parseReferrer(); // refferer
				var referralPath = Api.parsePath(); // path
				if (linkTerm) {
					params.field2 = linkTerm;
				}
				if (referralPath) {
					params.field7 = referralPath;
				}
				var srcId = window.pathname.split('/')[4];
				if (srcId) {
					params.field5 = srcId; //referral code
				}
				var host = window.location.host == 'www-vpc.younow.com' ? 'www.younow.com' : 'www-vpc.younow.com';
				//var host = window.location.host; // testing
				var base = window.location.href.replace(window.location.host, host);
				config.deepLink = config.deepLink + '?' + Api.serialize(params);
				config.httpLink = base + '?' + Api.serialize(params);
				//config.httpLink = 'https://www.younow.com/Adi' + '?' + Api.serialize(params); // testing
			}
		};

		iState.doDeepLink = function() {
			// doRedirect
			var ua = window.UAParser();
			if (config.doRedirect && config.hasOpened && config.platform === 'ios' && ua.os.version.substr(0, 1) == "9") {
				//var instantYozio = Api.generateDynamicYozio('x7.c.x', broadcasterService, config, iState, Api);
				// ios9 temporary workaround
				window.location.href = config.deepLink;
				Api.trackEvent('Redirect', true);
				return true;
			} else {
				Api.trackEvent('Noredirect', true);
				return false;
			}
		};

		iState.setPageType = function(state) {
			iState.pageType = state;
			ga('set', 'dimension1', state);
			ga('set', 'contentGroup1', state);
		};

		return iState;
	});

})();
