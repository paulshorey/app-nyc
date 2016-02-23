//This is a brand NEW implementation of tracking pixel & tracking pixel core. We will use this from now on to track certain events.
//Slowly we will move all of our events to use this system. Please consult before using this experimental framework...

angular.module('younow.services.trpx', [])

.factory('trpx', function(Api, $http, config, debug) {
	var trpx = {
		captureGroups: {},
		trackingInfo: {}
	};

	trpx.captureGroup = function(paramsMap, size) {
		this.paramsMap = paramsMap;
		this.size = size;
	};

	trpx.capture = function(params, captureGroup) {
		var param;
		//support the old way of senidng parameters, in a hashmap format
		for (param in params) {
			if (!params[param].value) {
				params[param] = {
					value: params[param]
				};
			}
		}
		params = angular.merge({}, captureGroup.paramsMap, params);
		for (param in params) {
			// type casting for numbers
			if (captureGroup.paramsMap[param].type == 'number' && !isNaN(params[param].value)) {
				params[param].value = parseInt(params[param].value) || 0;
			}
			// warning for non number params that don't have the correct type
			if (params[param].value !== undefined && typeof params[param].value !== captureGroup.paramsMap[param].type) {
				console.warn('Warning: ' + param + ' should have a type of ' + captureGroup.paramsMap[param].type);
			}
		}
		debug.console(['TRPXV2'], params);
		return $http.get(Api.buildPixelTracking(formatParams(params), captureGroup.size));
	};

	function formatParams(params) {
		var result = {},
			param;
		for (param in params) {
			result[params[param].pos] = typeof params[param].value === 'string' ? params[param].value.replace(' ', '_') : params[param].value;
		}
		return result;
	}

	var defaults = {};
	var updateDefault = function(key, val) {
		for (var group in defaults[key]) {
			var field = defaults[key][group];
			trpx.trackingInfo[group][field].value = val;
		}
	};

	// Setup the different groups [fieldName, fieldType, defaultKey(optional)]
	var groups = {};
	groups.trackevents = [
		['host', 'string'],
		['event', 'string'],
		['dateday', 'string'],
		['userid', 'number', 'userid'],
		['session', 'string', 'sessionid'],
		['broadcastid', 'number', 'broadcastid'],
		['doorid', 'number'],
		['userlevel', 'number', 'level'],
		['broadcastscount', 'number'],
		['unspentcoins', 'number'],
		['usertype', 'number'],
		['extradata', 'string'],
		['coins', 'number'],
		['points', 'number'],
		['platform', 'number', 'platform'],
		['sourceid', 'number'],
		['domain', 'string', 'deviceid'],
		['field1', 'string'],
		['field2', 'string'],
		['field3', 'string'],
		['field4', 'string'],
		['field5', 'string', 'jsversion'],
		['field6', 'string', 'language'],
		['field7', 'string'],
		['pixel', 'string', 'pixel']
	];

	groups.webrtc = [
		['timestamp', 'string'],
		['event', 'string'],
		['userid', 'string', 'userid'],
		['sessionid', 'string', 'sessionid'],
		['broadcastid', 'number', 'broadcastid'],
		['userlevel', 'number', 'level'],
		['deviceid', 'string', 'deviceid'],
		['os_device', 'string', 'os_device'],
		['osver_manufacturer', 'string', 'os_ver'],
		['browser_platform', 'string', 'browser_name'],
		['browserver_network', 'string', 'browser_ver'],
		['appversion', 'string', 'jsversion'],
		['incomingframerate', 'string'],
		['outgoingframerate', 'string'],
		['outgoingabr', 'string'],
		['outgoingvbr', 'string'],
		['incomingabr', 'string'],
		['incomingvbr', 'string'],
		['packetslost', 'string'],
		['packetssent', 'string'],
		['jitter', 'string'],
		['rtt', 'string'],
		['connectiontype', 'string'],
		['eventlabel', 'string'],
		['framewidthsent', 'string'],
		['frameheightsent', 'string'],
		['isguest', 'number'],
		['reserved1', 'string'],
		['reserved2', 'string'],
		['reserved3', 'string'],
		['pixel', 'string', 'pixel']
	];

	// Shennanigans to get into the form we need
	for (var i in groups) {
		var groupName = i;
		trpx.trackingInfo[groupName] = {};
		for (var field in groups[i]) {
			var fieldName = groups[i][field][0];
			var defaultKey = groups[i][field][2];
			// For fields that use defaults, add to a map
			if (defaultKey) {
				if (!defaults[defaultKey]) {
					defaults[defaultKey] = {};
				}
				defaults[defaultKey][groupName] = fieldName;
			}
			// Create the tracking pixel object
			trpx.trackingInfo[groupName][fieldName] = {
				value: undefined,
				type: groups[i][field][1],
				pos: field
			};
		}
		trpx.captureGroups[groupName] = new trpx.captureGroup(trpx.trackingInfo[groupName], groups[groupName].length - 1);

	}

	// Update Defaults
	updateDefault('platform', 3);
	updateDefault('sessionid', Api.store('trpxId'));
	updateDefault('deviceid', Api.store('trpx_device_id'));
	updateDefault('os_device', Api.os.name);
	updateDefault('os_ver', Api.os.version);
	updateDefault('browser_name', Api.browser.name);
	updateDefault('browser_ver', Api.browser.version);


	config.init.then(function() {
		updateDefault('language', config.UILanguage); // This actually changes, should have dynamic function
		updateDefault('jsversion', config.settings.JS_VERSION);
		updateDefault('pixel', config.settings.TrackingPxl);
	});

	trpx.updateUser = function(data) {
		updateDefault('level', data.level);
		updateDefault('userid', data.userId);
	};

	trpx.updateBroadcast = function(data) {
		updateDefault('broadcastid', data.broadcastId);
	};

	return trpx;
})

;
