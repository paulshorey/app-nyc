angular.module('ynl.services', [])

// ab
.factory('ab', ["config", "trackingPixel", "experiments", "AbCore", function(config, trackingPixel, experiments, AbCore) {

	var core = new AbCore.Base({
		app: 'mobile',
		app_version: config.settings.JS_VERSION_MOBILE,
		config: config,
		experiments: experiments,
		captureCallback: trackingPixel.capture
	});

	var ab = angular.extend(core, {});

	return ab;

}])

;
