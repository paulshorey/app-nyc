//global variables
var config = {
	settings: {
		ServerLocalBaseUrl: "http://www2-vd.younow.com",
		ServerCDNBaseUrl: "http://cdn2-vd.younow.com",
		ServerSecureLocalBaseUrl: "https://www2-vd.younow.com",
		TrackingHost: "test"
	},
	params: {
		host: 'www2-vd.younow.com'
	}
};

var global;

window.globalVars = {
	JS_VERSION: "1.00",
	CDN_BASE_URL: "https://www-vpc.younow.com",
	isAndroid: true
};

if (!window.YouNow) {
	window.YouNow = {
		App: {},
		Bootstrap: {
			tmId: ''
		}
	};
}

window.YouNow.loadingTime = {};
window.ga = function(){};
window.Bugsnag = function(){};

//helpers
window.createDirective = function(template) {
	var elem;
	inject(function($compile, $rootScope) {
		elem = $compile(template)($rootScope);
		$rootScope.$digest();
	});
	return elem;
};

window.getService = function(serviceName) {
	var service;
	inject(function($injector) {
		service = $injector.get(serviceName);
	});
	return service;
};

window.triggerEvent = function(element, event) {
	element.triggerHandler(event);
	inject(function($rootScope) {
		$rootScope.$digest();
	});
};

window.returnPromise = function(response, reject) {
	var deferred;
	inject(function($q) {
		deferred = $q.defer();
		if (!reject) {
			deferred.resolve(response);
		} else {
			deferred.reject(response);
		}
		deferred.promise.success = function(callback) {
			deferred.promise.then(callback);
			return deferred.promise;
		};
		deferred.promise.error = function(callback) {
			deferred.promise.then(null, callback);
			return deferred.promise;
		};
	});
	return deferred.promise;
};


window.React = {
	createClass: function() {},
	PropTypes: {
		func: {
			isRequired: function() {}
		}
	}
};
