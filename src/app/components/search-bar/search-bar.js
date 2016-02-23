angular.module('younow.seach-bar', [])

.directive('ynSearchBar', ["$state", "$location", "Api", "broadcasterService", "session", "config", "trackingPixel", "$rootScope", "$timeout", "$translate", function($state, $location, Api, broadcasterService, session, config, trackingPixel, $rootScope, $timeout, $translate) {
	return {
		restrict: 'E',
		templateUrl: 'angularjsapp/src/app/components/search-bar/search-bar.tpl.html',
		scope: {
			type: '@'
		},
		link: function(scope, element, attrs) {
			scope.search = {};
			scope.search.cdn = config.settings.ServerCDNBaseUrl;
			scope.search.searching = false;

			$translate('search_placeholder_home').then(function(translated) {
				scope.search_placeholder_home = translated;
			});
			$translate('search_placeholder_site').then(function(translated) {
				scope.search_placeholder_site = translated;
			});

			scope.search.query = function(query) {
				$rootScope.gaEvent('Conversion', 'Search - View Results', trackingPixel.getUserLocation() || 'ANCILLARY');
				scope.search.searching = true;
				var restrict = query.substr(0, 1) === "#" ? "tag" : false;
				if (restrict) {
					query = query.substr(1);
				}
				return Api.algolia(query, restrict).then(function(response) {
					scope.search.searching = false;
					var results = response.data.hits || [];
					angular.forEach(results, function(user, i) {
						user.fullName = Api.fullName(user);
						user.hashedDescription = Api.convertEmoji(user.description);
					});
					return Api.get('younow/tags', {
							s: query
						}, true)
						.then(function(response) {
							if (response.data.tags && response.data.tags.length > 0) {
								if (restrict) {
									results = response.data.tags.slice(0, 4).concat(results);
									results.push({
										more: true,
										profile: '#' + query,
										tag: query
									});
								} else {
									results = results.concat(response.data.tags.slice(0, 4));
									results.push({
										more: true,
										profile: query,
										query: query
									});
								}
							} else {
								results.push({
									more: true,
									profile: query,
									query: query
								});
							}
							return results;
						});
				});
			};

			scope.search.selectResult = function($item, $model, $label) {
				$rootScope.gaEvent('Conversion', 'Search - Click Result', trackingPixel.getUserLocation() || 'ANCILLARY');
				broadcasterService.channelSwitch = "SEARCH";
				if ($item.objectID) {
					$location.path($item.profile);
					trackingPixel.trackClick('SEARCH_RESULT');
				} else if ($item.tag && $state.current.name !== 'main.explore') {
					$state.go('main.explore', {
						tag: $item.tag
					});
					trackingPixel.trackClick('SEARCH_RESULT');
				} else if ($item.tag && $state.current.name === 'main.explore') {
					$state.go('main.explore', {
						tag: $item.tag,
						q: undefined
					}, {
						reload: true
					});
					trackingPixel.trackClick('SEARCH_RESULT');
				} else {
					$state.go('main.explore', {
						q: $item.profile,
						tag: undefined
					});
					trackingPixel.trackClick('SEARCH_GO');
				}
				scope.search.searchBox = '';
			};

			scope.search.background = function(id, type, refresher) {
				type = type || 'Image';
				var extra = type == 'Image' ? ', url(' + config.settings.ServerCDNBaseUrl + '/images/nothumb.jpg)' : '';
				refresher = refresher || '';
				var base = session.user && session.user.userId == id ? config.settings.ServerLocalBaseUrl : config.settings.ServerCDNBaseUrl;
				return 'background:url(' + base + '/php/api/channel/get' + type + '/channelId=' + id + refresher + ')' + extra + ' no-repeat center center; background-size: cover;';
			};

			scope.goToExplore = function(isTracked) {
				trackingPixel.trackClick('SEARCH_GO');
				if (isTracked) {
					$rootScope.gaEvent('Conversion', 'Search - Click Go', trackingPixel.getUserLocation() || 'ANCILLARY');
				}
				$state.go('main.explore', {
					q: scope.search.searchBox
				});
			};

			scope.search.trackFocus = function() {
				trackingPixel.trackClick('SEARCH');
			};
		}
	};
}])

;
