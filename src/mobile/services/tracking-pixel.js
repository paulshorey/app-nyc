(function() {
	angular.module('ynl.services')

	.factory('trackingPixel', function($interval, $state, $http, $timeout, $exceptionHandler, config, Api, $stateParams, broadcasterService, TrackingPixelCore) {
		var trackingPixelCore = new TrackingPixelCore.Base({
			app: 'mobile',
			config: config
		});
		var trackingPixel = angular.extend(trackingPixelCore, {});
		var paramsMap = trackingPixel._getLocalVar('paramsMap');
		var paramTypes = trackingPixel._getLocalVar('paramTypes');

		// Register device
		var device = {
			tdi: Api.store('trpx_device_id'),
			platform: 4,
			app_version: config.settings.JS_VERSION_MOBILE,
			model: Api.pad(window.screen.width, 4) + 'x' + Api.pad(window.screen.height, 4)
		};
		var parser = new window.UAParser();
		if (parser.browser = parser.getBrowser()) {
			device.browser = parser.browser.name;
			device.browser_version = parser.browser.major;
		}
		if (parser.os = parser.getOS()) {
			device.device_version = parser.os.version;
			device.device_os = parser.os.name;
		}
		Api.post('younow/registerDevice', device);

		trackingPixel.capture = function(params) {
			// setup defaults
			var defaultParams = {
				'host': config.settings.TrackingHost,
				'session': Api.store('trpxId'),
				'platform': 4,
				'domain': Api.store('trpx_device_id'),
				'pixel': config.settings.TrackingPxl
			};

			params = angular.extend(defaultParams, params);
			return trackingPixel.captureHelper(params);
		};

		trackingPixel.trackArrival = function(pageType) {
			// x duplicate
			if (trackingPixel.arrivalTracked) {
				return false;
			} else {
				trackingPixel.arrivalTracked = true;
			}
			// increment
			Api.store('countSessionArrivals', Api.store('countSessionArrivals') + 1);

			// track
			var track = {
				event: 'ARRIVAL',
				points: Api.store('countSessionsEnable') ? Api.store('countSessions') || 0 : 0,
				coins: Api.store('countSessionArrivals'),
				field1: pageType
			};

			if (broadcasterService.broadcaster && broadcasterService.broadcaster.userId) {
				track.doorid = broadcasterService.broadcaster.userId;
			}
			if (broadcasterService.broadcaster && broadcasterService.broadcaster.broadcastId) {
				track.broadcastid = broadcasterService.broadcaster.broadcastId;
			}

			var pieces = window.location.pathname.split('/');
			// source id / referrer
			if (pieces[4]) {
				if (!isNaN(pieces[4])) {
					track.sourceid = parseInt(pieces[4]);
				} else {
					track.field5 = pieces[4];
				}
			}

			return trackingPixel.trackArrivalHelper(track);
		};

		return trackingPixel;

	});

})();
