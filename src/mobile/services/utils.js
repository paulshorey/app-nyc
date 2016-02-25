(function() {
	angular.module('younow.services')

	.factory('Api', function($window, $http, $document, $q, $sce, $timeout, $interval, $rootScope, $location, $filter, config, $filter) {
		var Api = {};

		Api.splitter = function(options) {
			if (options && typeof options != "object") {
				throw new Error('Splitter can only take an array');
			}
			var randomNum = Math.floor(Math.random() * 100);
			var option;
			var i = 0;
			var optionsArray = [];
			for (option in options) {
				optionsArray.push(Number(option));
			}
			optionsArray.sort(function(a, b) {
				return a - b;
			});
			for (i; i < optionsArray.length; i++) {
				if (randomNum <= optionsArray[i] || (randomNum >= optionsArray[i] && optionsArray.length - 1 === i)) {
					return options[optionsArray[i]];
				}
			}
		};

		Api.get = function(method, data, usecdn, secured) {
			var base = (!usecdn || $window.nonCDN) ? config.settings.ServerLocalBaseUrl : config.settings.ServerCDNBaseUrl;
			var url;

			if (method.substr(0, 4) === 'http') {
				url = method;
			} else if (secured) {
				url = config.settings.ServerSecureLocalBaseUrl + '/php/api/' + method;
			} else {
				url = base + '/php/api/' + method;
			}

			data = data ? data : {};
			if (config.params.host === 'www.younow.com') {
				data.callback = "JSON_CALLBACK";
			}
			if (usecdn && data) {
				data = Api.sortObject(data);
			}
			angular.forEach(data, function(value, key) {
				url += "/" + key + "=" + value;
			});

			if (data.callback) {
				return $http.jsonp(url);
			} else {
				return $http.get(url);
			}
		};

		Api.post = function(method, data, secured) {
			var url;
			var headers;

			if (secured) {
				url = config.settings.ServerSecureLocalBaseUrl + '/php/api/' + method;
			} else {
				url = config.settings.ServerLocalBaseUrl + '/php/api/' + method;
			}

			return $http({
				method: 'POST',
				//withCredentials:true,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				data: Api.serialize(data),
				url: url
			}).success(function(data) {
				// Handle errors
			});
		};

		Api.trustedSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		};
		Api.trustedHTML = function(text) {
			if (!text.$$unwrapTrustedValue) {
				return $sce.trustAsHtml(text);
			} else {
				return text;
			}
		};

		/**
		 * Need to serialize data, because AngularJS POSTs json by default
		 * http://victorblog.com/2012/12/20/make-angularjs-http-service-behave-like-jquery-ajax/
		 */
		Api.serialize = function(obj) {
			var query = '',
				name, value, fullSubName, subName, subValue, innerObj, i;

			for (name in obj) {
				value = obj[name];

				if (value instanceof Array) {
					for (i = 0; i < value.length; ++i) {
						subValue = value[i];
						fullSubName = name + '[' + i + ']';
						innerObj = {};
						innerObj[fullSubName] = subValue;
						query += Api.serialize(innerObj) + '&';
					}
				} else if (value instanceof Object) {
					for (subName in value) {
						subValue = value[subName];
						fullSubName = name + '[' + subName + ']';
						innerObj = {};
						innerObj[fullSubName] = subValue;
						query += Api.serialize(innerObj) + '&';
					}
				} else if (value !== undefined && value !== null) {
					query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
				}
			}

			return query.length ? query.substr(0, query.length - 1) : query;
		};


		Api.fullName = function(user) {
			if (!user) {
				return '';
			}
			var profile = user.profile || user.profileUrlString;
			var useprofile = user.useprofile || user.useProfile;
			if (useprofile == 1) {
				return profile;
			}
			if (!user.firstName && user.username) {
				return user.username;
			}
			return (user.firstName || '') + (user.lastName ? ' ' + user.lastName : '');
		};

		Api.friendlyName = function(user) {
			return user.useprofile !== "0" ? user.profile : user.firstName;
		};

		Api.cleanLocation = function(data, twopart) {
			if (twopart && data.state && !data.city) {
				data.city = data.state;
			}
			return (data.city ? data.city + ', ' : '') + (data.state && !twopart ? data.state + ' ' : '') + data.country;
		};

		Api.linksniffer = /((http(s?)(:\/\/))?(([w]{3}|(.*))\.)?([a-z|0-9])+\.(com(\.au)?|org|me|net|ly|be|gl|info|(co(\.))?uk|ca|nz|tv)(\/[^\s]+)*)+/g;

		Api.findLinks = function(text) {
			if (!text) {
				return [];
			}
			// Strip out www which causes issues
			text = text.replace(/:\/\/www./g, '://');
			text = text.replace(/www./g, ' http://');
			// Strip out forced spaces
			text = text.replace(/&nbsp;/g, ' ');
			// Find links
			var links = [];
			text.split(' ').map(function(t) {
				if (t.match(Api.linksniffer)) {
					links.push(t);
				}
			});
			return links;
		};

		Api.linkify = function(text) {
			if (!text) {
				return text;
			}
			if (text.$$unwrapTrustedValue) {
				text = text.$$unwrapTrustedValue(text);
			}
			// If the text contains HTML, only linkify the text that precedes it
			var htmlStart = text.indexOf('<');
			var plainText = htmlStart > -1 ? text.substr(0, htmlStart) : text;
			var html = htmlStart > -1 ? text.substr(htmlStart) : '';
			// Replace URLs with links
			var tokens = plainText.split(' ').map(function(t) {
				return t.replace(Api.linksniffer, function(url) {
					var href = url.substr(0, 4) !== 'http' ? 'http://' + url : url;

					return '<a href="' + href.replace(/("|').*$/g, '') + '" target="_blank" rel="nofollow">' + url.replace(/("|').*$/g, '') + '</a>';
				});
			});
			// Return the result
			return tokens.join(' ') + html;
		};

		// For permormance optimization
		$window.countWatchers = function() {
			var elts = document.getElementsByClassName('ng-scope');
			var watches = [];
			var visited_ids = {};
			for (var i = 0; i < elts.length; i++) {
				var scope = angular.element(elts[i]).scope();
				if (scope.$id in visited_ids) {
					continue;
				}
				visited_ids[scope.$id] = true;
				watches.push.apply(watches, scope.$$watchers);
			}
			return watches.length;
		};

		// Helper functions for accessing data in the console
		$window.currentScope = function() {
			return angular.element($window.$0).scope();
		};
		$window.getService = function(name) {
			return angular.element(document.querySelector('.ng-scope')).injector().get(name);
		};

		Api.stripHTML = function(text) {
			//put a space after all links that looks normal
			// text = text.replace(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/g, '$1 ');
			return text.replace(/<[^>]+>/gm, '');
		};

		Api.prepareDescription = function(text) {
			text = Api.linkify(text) || $filter('translate')('profile_no_description');
			return $sce.trustAsHtml(text);
		};

		// Api.trackError = function(message) {
		//     if ($window.Bugsnag) {
		//         $window.Bugsnag.notify(message);
		//     }
		// };

		Api.goto = function(path) {
			if (!path) {
				return false;
			}
			// Remove hardcoded host
			if (path.substr(0, 4) == 'http') {
				path = path.slice(path.indexOf(path.split('/')[2]));
			}
			$location.path(path);
		};

		Api.squashedNumber = function(num, size) {
			if (num === undefined || num === null) {
				return '';
			}
			var digits = num.toString().length;
			var decimals = (size == digits - 1) ? 1 : 0;
			if (digits > size && digits >= 7) {
				num = $filter('number')(num / 1000000, decimals) + 'M';
			} else if (digits > size && digits >= 4) {
				num = $filter('number')(num / 1000, decimals) + 'k';
			} else {
				num = $filter('number')(num);
			}
			return num;
		};

		Api.sortObject = function(obj) {
			var keys = [];
			var sorted_obj = {};

			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					keys.push(key);
				}
			}

			// sort keys
			keys.sort();

			// create new array based on Sorted Keys
			angular.forEach(keys, function(i, key) {
				sorted_obj[keys[key]] = obj[keys[key]];
			});

			return sorted_obj;
		};

		Api.store = function(key, value) {
			//https://gist.github.com/Fluidbyte/4718380

			var lsSupport = true;
			try {
				$window.localStorage.setItem('isLocalStorage', true);
			} catch (error) {
				lsSupport = false;
			}
			var data;

			// If value is detected, set new or modify store
			if (typeof value !== "undefined" && value !== null) {
				// Convert object values to JSON
				if (typeof value === 'object') {
					value = JSON.stringify(value);
				}
				// Set the store
				if (lsSupport) {
					$window.localStorage.setItem(key, value);
				} else {
					createCookie(key, value, 3650);
				}
			}

			// No value supplied, return value
			if (typeof value === "undefined") {
				// Get value
				data = lsSupport ? $window.localStorage.getItem(key) : readCookie(key);
				// Try to parse JSON...
				try {
					data = JSON.parse(data);
				} catch (e) {
					data = data;
				}
				return data;
			}

			// Null specified, remove store
			if (value === null) {
				if (lsSupport) {
					$window.localStorage.removeItem(key);
				} else {
					createCookie(key, '', -1);
				}
			}

		};


		// Api.addToStack = function(data, stackName) {
		//     if ($window.bugsnagAdditionalParams && $window.bugsnagAdditionalParams[stackName]) {
		//         if ($window.bugsnagAdditionalParams[stackName].length === 5) {
		//             $window.bugsnagAdditionalParams[stackName].pop();
		//         }
		//         $window.bugsnagAdditionalParams[stackName].unshift(data);
		//         $window.bugsnagAdditionalParams[stackName + 'Object'] = Api.ArrayToObject($window.bugsnagAdditionalParams[stackName]);
		//     }
		// };

		Api.ArrayToObject = function(array) {
			var newObject = {},
				i;
			for (i = 0; i < array.length; ++i) {
				newObject[i] = array[i];
			}
			return newObject;
		};

		Api.generateTrackingId = function() {
			var text = "",
				possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for (var i = 0; i < 10; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}

			return text;
		};

		Api.trackEvent = function(action, nonInteraction) {
			var fields = {
				'hitType': 'event',
				'eventCategory': 'Mobile Landing Page',
				'eventAction': action,
				'eventLabel': (window.globalVars.isAndroid ? 'Android' : 'IOS') + '-' + window.globalVars.pageType
			};
			window.ga('send', fields);
		};

		Api.trackClick = function(action, url) {
			if (!Api.store('hasOpened')) {
				Api.store("hasOpened", true);
			}
			if (config.inExperiment) {
				window.ga('set', 'dimension8', 'to store');
			}
			Api.trackEvent(action);
			/*
			//window.open(window.location.href, '_self');
			//window.open(url, '_self');
			var ua = window.UAParser();
			// Twitter browser on iOS9
			if (ua && ua.os && ua.os.version && ua.os.version.substr(0, 1) == "9" && document.referrer.substr(0, 12) == "https://t.co") {
				window.open(url, '_self');
			}
			*/
			if (action == 'OpenTheApp') {
				//window.open(url, '_self'); // SDK update seems to fix this!
				window.Yozio.redirectOnClick(url, {});
			} else {
				window.Yozio.redirectOnClick(url, {});
			}
		};

		Api.getLinkType = function(requestUri, search) {
			var linkType;
			var pieces = requestUri.split('/');
			var entityTypes = {
				"b": "broadcast",
				"p": "post",
				"c": "comment"
			};

			//if full screen promotion
			if (requestUri === '/getpartnered') {
				linkType = 'getpartnered';
			} else
			// Root
			if (requestUri == '/') {
				linkType = 'root';
			} else
			// Yozio redirect
			if (search.indexOf('?yozio') !== -1) {
				linkType = 'yozio';
			} else
			// Search
			if (search.indexOf('?q=') !== -1) {
				linkType = 'search';
			} else
			// Explore / Tags
			if (pieces[1] === 'explore') {
				linkType = requestUri.length > 9 ? 'tag' : 'explore';
			} else
			// Dedicated states
			if (['featured', 'about', 'info', 'policy', 'thankyou'].indexOf(pieces[1]) !== -1) {
				linkType = pieces[1];
			} else
			// Entity types
			if (['b', 'p', 'c'].indexOf(pieces[5]) !== -1) {
				linkType = entityTypes[pieces[5]];
			} else
			// Forced Profile
			if (pieces[2] === 'channel') {
				linkType = 'profile';
			} else
			// Tracked Profile
			if (pieces[2] === '0') {
				linkType = 'profile';
			} else
			// Profile (catchall)
			if (pieces.length === 2) {
				linkType = 'profile';
			} else {
				linkType = 'other';
			}
			return linkType;
		};

		Api.getLinkTerm = function(requestUri, search, linkType) {
			var linkTerm;
			if (['search'].indexOf(linkType) !== -1) {
				linkTerm = search.split('?q=')[1];
			} else
			if (['info', 'policy'].indexOf(linkType) !== -1) {
				linkTerm = requestUri.split('/')[3];
			} else
			if (['tag', 'featured'].indexOf(linkType) !== -1) {
				linkTerm = requestUri.split('/')[2];
			} else
			if (['profile', 'broadcast', 'comment', 'post'].indexOf(linkType) !== -1) {
				linkTerm = requestUri.split('/')[1];
			}
			return linkTerm;
		};

		Api.buildYozioImpression = function(tracker, platform, linkType, theoreticalState, broadcastId, channelId) {
			var yozioParams = {};
			var autoRedirect = true;
			yozioParams.linkTo = config.deepLink;
			/*
			var ua = window.UAParser();
			if (ua && ua.os && ua.os.version && ua.os.version.substr(0, 1) == "9" && document.referrer.substr(0, 12) == "https://t.co") {
				yozioParams.yozio_redirect_to_url = window.location.href;
				autoRedirect = false;
			}
			*/
			var showOpenBanner = false;
			//var showOpenBanner = true;	//testing
			var ua = window.UAParser();
			if (ua && ua.os && ua.os.name) {
				// Show Android users
				if (ua.os.name == "Android") {
					showOpenBanner = true;
					autoRedirect = false;
				}
				// Show iOS 9 users
				if (ua.os.name == "iOS" && ua.os.version && ua.os.version.substr(0, 1) == "9") {
					// But exclude Safari (has it's own banner)
					if (ua.browser && ua.browser.name && ua.browser.name != "Mobile Safari") {
						showOpenBanner = true;
						autoRedirect = false; // doesn't work in in-app bro
						//yozioParams.yozio_redirect_to_url = window.location.href;
					}
				}
			}
			yozioParams.yozio_ios_universal_link_redirect_url = config.httpLink;
			//yozioParams.yozio_ios_universal_link_redirect_url = 'https://www.younow.com/Adi'; // hardcode for testing
			//yozioParams.yozio_ios_universal_link_redirect_url = 'https://www-vpc.younow.com/PS1'; // hardcode for testing
			//yozioParams.yozio_ios_universal_link_redirect_url = 'https://staging-vd.younow.com/PS1'; // hardcode for testing
			yozioParams.yozio_android_deeplink_url = config.deepLink;
			yozioParams.yozio_iphone_deeplink_url = config.deepLink;
			yozioParams.yozio_ipad_deeplink_url = config.deepLink;
			yozioParams.yozio_landing_page = 'm-' + platform + '-' + theoreticalState;
			yozioParams.yozio_referrer = Api.parseReferrer();
			yozioParams.utm_source = 'younow.com';
			yozioParams.utm_medium = 'referral';
			yozioParams.utm_campaign = 'm-' + platform + '-' + linkType;
			yozioParams.utm_content = 'm-' + platform + '-' + linkType + '-' + theoreticalState;
			var yozioMeta = Api.serialize(yozioParams);
			var yozioLink = 'https://r.yozio.com/' + tracker + '?' + yozioMeta;
			var yozioImpression = 'https://impression.yozio.com/' + tracker + '?' + yozioMeta;
			var args = {
				onUniversalLinkPage: true,
				shortUrls: [tracker]
			};
			if (autoRedirect) {
				args.autoRedirect = {
					url: yozioLink,
					params: {
						yozio_disable_new_install_redirect: '1'
					}
				};
			}
			window.Yozio.onPageLoad(args);
			return {
				yozioLink: yozioLink,
				yozioImpression: yozioImpression,
				showOpenBanner: showOpenBanner
			};
		};

		Api.generateDynamicYozio = function(trackingId, broadcasterService, config, iState, Api) {
			// setup yozio
			if (broadcasterService.broadcaster && broadcasterService.broadcaster.broadcastId) { // broadcaster is live
				return Api.buildYozioImpression(trackingId, config.platform, iState.linkType, iState.pageType, broadcasterService.broadcaster.broadcastId, broadcasterService.broadcaster.userId);
			} else if (broadcasterService.broadcaster && broadcasterService.broadcaster.userId) { // broadcaster isn't live
				return Api.buildYozioImpression(trackingId, config.platform, iState.linkType, iState.pageType, undefined, broadcasterService.broadcaster.userId);
			} else {
				return Api.buildYozioImpression(trackingId, config.platform, iState.linkType, iState.pageType, undefined, undefined);
			}
		};

		Api.parseReferrer = function() {
			var referrer = document.referrer;
			var domain = referrer.split('/')[2];
			if (referrer.length === 0) {
				referrer = 'direct';
			} else if (referrer.indexOf('facebook') !== -1) {
				referrer = 'facebook';
			} else if (referrer.indexOf('t.co') !== -1) {
				referrer = 'twitter';
			} else if (referrer.indexOf('younow.com') !== -1) {
				referrer = 'younow';
			} else if (referrer.indexOf('google') !== -1) {
				referrer = 'google';
			} else {
				referrer = domain;
			}
			return referrer;
		};

		Api.parsePath = function() {
			var path = document.referrer.substr(document.referrer.indexOf('://') + 3); // extract referrer
			path = encodeURIComponent(path).replace(/_/g, "__").replace(/%/g, "_"); // can't contain %
			path = path.substr(0, 299); // can't exceed 300 characters
			return path;
		};

		function createCookie(key, value, exp) {
			var date = new Date();
			date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
			document.cookie = key + "=" + value + expires + "; path=/";
		}

		function readCookie(key) {
			var nameEQ = key + "=";
			var ca = document.cookie.split(';');
			for (var i = 0, max = ca.length; i < max; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1, c.length);
				}
				if (c.indexOf(nameEQ) === 0) {
					return c.substring(nameEQ.length, c.length);
				}
			}
			return null;
		}

		Api.buildPixelTracking = function(params) {
			var url = config.settings.TrackingHost;

			for (var i = 1; i < 24; i++) {
				if (params[i] !== undefined) {
					url += params[i] + '/';
				} else {
					url += '/';
				}
			}

			return url + params[24];
		};

		Api.pad = function(n, width, z) {
			z = z || '0';
			n = n + '';
			return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		};

		//set up device id unless user has one in cache, important to do this before extending the core
		//Currently we duplicate this but we won't need it as soon as we integrate the utils-core into this app
		if (!Api.store('trpx_device_id')) {
			window.newVisitor = true;
		}

		return Api;

	});

})();
