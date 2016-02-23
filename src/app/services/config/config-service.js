angular.module('younow.services.config', [])

.factory('config', ["$http", "$window", "$location", "$translate", function($http, $window, $location, $translate) {

	function readCookie(what) {
		var read;
		try {
			read = window.localStorage.getItem(what);
		} catch (e) {
			read = window.readCookie(what);
		}
		return read;
	}

	function saveCookie(what, value) {
		try {
			window.localStorage.setItem(what, value);
		} catch (e) {
			window.createCookie(what, value, 3650000);
		}
	}

	var config = {};

	// Get paramaters from the URL
	config.params = $location.search();
	config.host = config.params.host || $window.location.host;

	config.buybarsiframe = false; //TURNS ON THE IFRAME BUYBARS MODAL

	// Hardcoded
	config.bootstrap = {
		adminRoles: [1, 2, 3],
		modRoles: [1, 2, 3, 4, 5],
		cdnDev: "cdnv2-vd.younow.com",
		cdnProduction: "cdn2.younow.com",
		facebookAppId: 171373592926306,
		flashVersion: "47.35",
		googleClientId: "619368150599-2ef6s6o5dqgv6oqoq5tevtqo1k7gni12.apps.googleusercontent.com",
		googleAnalyticsId: "UA-24148895-1",
		jwplayerKey: "gyoz1D2yoy+GG57wtwrgni10vNZ0+43mBkBYhw==",
		TM_DOMAIN: "images1.younow.com",
		TM_ID: "7jnw4jh4"
	};

	// Get latest config data
	config.update = function() {
		var cdn = config.host;
		if (config.host === 'www.younow.com') {
			cdn = config.bootstrap.cdnProduction;
		}
		if (config.host === 'www2-vd.younow.com') {
			cdn = config.bootstrap.cdnDev;
		}
		var host = config.params.host ? config.params.host : cdn;
		var url = window.location.protocol + "//" + host + "/php/api/younow/config";
		if (config.host !== 'www.younow.com') {
			url += "/devByPass=1";
		}

		window.YouNow.loadingTime.startYounowConfig = Date.now();
		var callback = function(data) {
			window.YouNow.loadingTime.younowConfig = Date.now() - window.YouNow.loadingTime.startYounowConfig;

			if (data.redirect) {
				$window.location.href = data.redirect;
			} else {
				//adjust the api base to be https if it was requested as https
				if (window.location.protocol === 'https:' && data.ServerCDNBaseUrl.indexOf('https') === -1) {
					data.ServerCDNBaseUrl = data.ServerCDNBaseUrl.replace("http", "https");
				}
				if (window.location.protocol === 'https:' && data.ServerLocalBaseUrl.indexOf('https') === -1) {
					data.ServerLocalBaseUrl = data.ServerLocalBaseUrl.replace("http", "https");
				}
				if (window.location.protocol === 'https:' && data.ServerRecommendationsBaseUrl.indexOf('https') === -1) {
					data.ServerRecommendationsBaseUrl = data.ServerRecommendationsBaseUrl.replace("http", "https");
				}
				if (window.location.protocol === 'https:' && data.TrackingHost.indexOf('https') === -1) {
					data.TrackingHost = data.TrackingHost.replace("http", "https");
				}
				if (window.location.protocol === 'https:' && data.PlayDataBaseUrl.indexOf('https') === -1) {
					data.PlayDataBaseUrl = data.PlayDataBaseUrl.replace("http", "https");
				}
				if (window.location.protocol === 'https:' && data.ServerHomeBaseUrl.indexOf('https') === -1) {
					data.ServerHomeBaseUrl = data.ServerHomeBaseUrl.replace("http", "https");
				}
				if (window.location.protocol === 'https:' && data.BadgeBaseUrl.indexOf('https') === -1) {
					data.BadgeBaseUrl = data.BadgeBaseUrl.replace("http", "https");
				}
				if (window.location.protocol === 'https:' && window.globalVars.CDN_BASE_URL.indexOf('https') === -1) {
					window.globalVars.CDN_BASE_URL = window.globalVars.CDN_BASE_URL.replace("http", "https");
				}

				// Save
				config.settings = data;

				// Localize
				var languages = window.navigator.languages || [window.navigator.language || window.navigator.userLanguage];
				var k, key, la, ourLa; // for jshint

				// Localize: Locale
				config.UILocales = {};
				for (la in data.Locales) {
					config.UILocales[la] = data.Locales[la].name;
				}
				config.UILocale = readCookie('UILocale');
				if (!config.UILocale) {
					// ==
					if (!config.UILocale) {
						LocaleIsLoop: for (k in languages) {
							la = languages[k];
							if (la == 'ar') {
								la = 'me';
							}
							for (ourLa in config.UILocales) {
								if (ourLa == la) {
									config.UILocale = ourLa;
									saveCookie('UILocale', config.UILocale);
									break LocaleIsLoop;
								}
							}
						}
					}
					// indexOf
					if (!config.UILocale) {
						LocaleEqLoop: for (k in languages) {
							la = languages[k];
							if (la == 'ar') {
								la = 'me';
							}
							for (ourLa in config.UILocales) {
								if (ourLa.indexOf(la) != -1) {
									config.UILocale = ourLa;
									saveCookie('UILocale', config.UILocale);
									break LocaleEqLoop;
								}
							}
						}
					}
					// default
					if (!config.UILocale) {
						config.UILocale = 'en';
						saveCookie('UILocale', config.UILocale);
					}
				}

				// Locale: Language
				config.UILanguages = {
					'en': 'English',
					'de': 'Deutsch',
					'ar': 'العربية',
					'tr': 'Türkçe',
					'es': 'Español',
					'fr': 'Français',
					'pt': 'Português',
					'ms': 'Melayu',
					'id': 'Indonesia',
					'nl': 'Nederlands',
					'ru': 'Pусский',
					'ja': '日本語',
					'ko': '한국어',
					'hi': 'हिन्दी',
					'th': 'ไทย'
				};
				config.UILanguage = readCookie('UILanguage');
				if (config.UILanguage) {
					// ok
					$translate.use(config.UILanguage);
				} else {
					// ==
					if (!config.UILanguage) {
						LangIsLoop: for (k in languages) {
							la = languages[k];
							for (ourLa in config.UILanguages) {
								if (ourLa == la) {
									config.UILanguage = ourLa;
									$translate.use(config.UILanguage);
									break LangIsLoop;
								}
							}
						}
					}
					// indexOf
					if (!config.UILanguage) {
						LangEqLoop: for (k in languages) {
							la = languages[k];
							for (ourLa in config.UILanguages) {
								if (ourLa.indexOf(la) != -1) {
									config.UILanguage = ourLa;
									$translate.use(config.UILanguage);
									break LangEqLoop;
								}
							}
						}
					}
					// default
					if (!config.UILanguage) {
						config.UILanguage = 'en';
						saveCookie('UILanguage', config.UILanguage);
					}
				}

				// Locale: original (before user changed their browser settings)
				var broLanguage = (window.navigator.language || window.navigator.browserLanguage || window.navigator.systemLanguage || window.navigator.userLanguage).substr(0, 2);
				for (key in config.UILocales) {
					if (broLanguage == key || broLanguage.indexOf(key) != -1) {
						config.UILangOrig = key;
						break;
					}
				}
				if (!config.UILangOrig) {
					config.UILangOrig = 'en';
				}


			}
		};
		if (config.params.host) {
			return $http.jsonp(url + "/callback=JSON_CALLBACK").success(callback);
		} else {
			return $http.get(url).success(callback);
		}
	};

	config.checkRole = function(user, roles) {
		for (var i = 0; i < roles.length; i++) {
			if (user && user.role === roles[i]) {
				return true;
			}
		}
		return false;
	};

	return config;

}])

;
