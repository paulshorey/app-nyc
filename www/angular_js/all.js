angular.module('ListModule', ['ui.router', 'angularModalService', 'ListModule.components', 'ListModule.filters', 'ListModule.directives', 'ListModule.controllers', 'ListModule.services'])

.run(function ($rootScope, $injector) {
	window.inject = function(who){
		return $injector.get([who]);
	};
	$rootScope.client = window.client;
})

.controller('Modal', function($scope, close, vm) {
	if (vm) {
		$scope.vm = vm;
	}
	$scope.close = function(result) {
		close(result, 500);
	};
})

.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$httpProvider.defaults.headers.post['Cache-Control'] = 'no-cache';
	$httpProvider.defaults.headers.post['Pragma'] = 'no-cache';
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		cache: false,
		url: '/',
		templateUrl: 'angular_html/lists.html',
		controller: "ListController",
		controllerAs: "vm"
	});

})

;


angular.module('ListModule.components', [])

.directive('eventslist', function(EventService, $timeout, $rootScope){
	return {
		restrict: 'A',
		scope: {
			data: '='
		},
		link: function (scope, element, attrs) {
			scope.vm = {};
			scope.data.count = 1;

			// template
			var template = function(events) {
				var old_timestring = '';
				var old_event_titles = {};
				var old_event_featured_images = [];
				var old_date = '';
				scope.data.count = 0; // will be advanced if pass validation below
				if (events.length) {

					var html = '		<div class="my-events">\n';
					for (var each in events) {
						var event = events[each];

						// validate
						if (!event.texts) {
							continue;
						}
						if (old_event_titles[ event.texts[0].replace(/\w/g,'') ]) {
							continue;
						}
						old_event_titles[ event.texts[0].replace(/\w/g,'') ] = true;

						// build
						var timestring = Date.create(event.timestamp).short();
						var todayEnd = moment().endOf('day').format('x');
						if (event.timestamp < todayEnd -1) { // party must end before midnight, because we don't know when exactly tomorrow's dates are, most come in as 12:00am
							timestring = 'today';
						} else if (event.timestamp < todayEnd -1 + 1000*60*60*24) {
							timestring = 'tomorrow';
						} else if (event.timestamp < todayEnd -1 + 1000*60*60*24 *6) {
							timestring = 'this week';
						} else if (event.timestamp < todayEnd -1 + 1000*60*60*24 *30) {
							timestring = 'this month';
						}
						//event.timestamp = event.timestamp.replace(' 12:00am','');
						if (timestring != old_timestring) {
							//var timeUnique = cutOldBeginning(old_timestamp, event.timestamp);
							html += '<div class="events-timestamp-spacer"> </div>\n';
							html += '<div class="events-timestamp"><span>' + timestring + '</span></div>\n';
						}
						var ev = '';
						ev += '		<div class="events-event '+ (event.featured?'event-featured':'') +'" style="background-image:url(\'' + event.featured + '\');">';
						ev += '			<div class="event-text">\n';
						if (event.texts[0]) {
							ev += '			<span><a class="event-link" href="' + event.link + '" target="_blank" prevent-default onClick="window.open(\'' + event.link + '\', \'_system\')">' + event.texts[0] + '</a></span>\n';
						}
						if (event.image) {
							ev += '			<span class="event-image"><img src="' + event.image + '" /></span>\n';
						}
						if (event.texts[1]) {
							ev += '			<span>' + event.texts[1] + '</span>\n';
						}
						if (event.texts[2]) {
							ev += '			<span>' + event.texts[2] + '</span>\n';
						}
						ev += '			</div>\n';
						ev += '			<div class="event-subtext">\n';

						var time = moment(event.timestamp).format('h:mma');
						if (time=='12:00am') {
							time = '';
						}
						if (timestring.indexOf('week') !=1 || timestring.indexOf('month') !=1) {
							ev += '		<span ng-click><span class="ion-calendar"></span> <span>' + moment(event.timestamp).format('MMM D') +' '+time+ '</span></span>\n';
						} else if (time && time!='12:00am') {
							ev += '		<span ng-click><span class="ion-calendar"></span> <span>' + time + '</span></span>\n';
						}
						// if (event.price) {
						// 	ev += '			<span class="subtext-price"><span class="ion-pricetag"></span> <span>'+event.price+'</span></span>\n';
						// }
						ev += '			<a class="subtext-source" href="' + event.source_link + '" target="_blank" prevent-default onClick="window.open(\'' + event.source_link + '\', \'_system\')"><span class="icon-link"></span> ' + (event.source_host.substr(0, event.source_host.indexOf('.'))) + '</a>\n';
						// ev += '			<span class="subtext-fave" ng-click=""><span class="icon-star-outline"></span></span>\n';
						ev += '			</div>\n';
						ev += '		</div>';
						//
						html += ev;
						old_timestring = timestring;

						scope.data.count++;
					}
					html += '		</div>\n';

					return html;
				}

			}

			// add
			scope.list_ready = function(){
				var query = {};
				query.category = scope.data.category;
				query.text = scope.data.text;
				query.time = scope.data.time;
				EventService.getEvents(query)
				.then(function (response) {
					//scope.vm.events = response.data.data;
					angular.element(element)[0].innerHTML = template(response.data.data);
					if (!$rootScope.initiallyLoaded) {
						document.getElementById('stats').innerHTML = '<span>loaded in '+((Date.now()-window.loadStart)/1000)+'s</span>';
						window.setTimeout(function(){
							$rootScope.initiallyLoaded = true;
						},500);
					} else {
						document.getElementById('stats').innerHTML = '';
					}
				}, function (error) {
					console.error(error);
				});
			}

			// remove
			scope.list_reset = function(){
				//scope.vm = {};
				scope.data.count = 0;
				angular.element(element)[0].innerHTML = '<div class="loading-dance" style="background-image:url(\'gfx/gif/dance.gif\')"></div>';
				$timeout(function(){
					if (element) {
						$(element).addClass('ready');
					}
				},500);
			}

			// lazyload
			scope.list_reset();
			if (!$rootScope.lazyLoadedLists) {
				$rootScope.lazyLoadedLists = {};
			}
			scope.element = element;
			scope.$watch(
			function( scope ) {
				element = scope.element;
				var window_width = (document.body.clientWidth || document.documentElement.clientWidth || document.clientWidth ||window.innerWidth);
				var rect = element[0].getBoundingClientRect();
				if (rect.left > 0 && rect.left < window_width) {

					if (!$rootScope.lazyLoadedLists[ scope.data.category ]) {
						$rootScope.lazyLoadedLists[ scope.data.category ] = scope;
						scope.list_ready()
					}

				} else {
					if ($rootScope.lazyLoadedLists[ scope.data.category ]) {
						delete $rootScope.lazyLoadedLists[ scope.data.category ];
						scope.list_reset();
					}
				}
			});

		}
	}
})

angular.module('ListModule.controllers', [])

.controller('ListController', ["ModalService", "AccountService", "ListService", "EventService", "ContentService", "$window", "$scope", "$rootScope", "$state", "$timeout", "$stateParams", "$sce", "$compile", "$interpolate", "$parse", "$q", function (ModalService, AccountService, ListService, EventService, ContentService, $window, $scope, $rootScope, $state, $timeout, $stateParams, $sce, $compile, $interpolate, $parse, $q) {
	window.ListController = this;
	var errorHandler = function (options) {
		console.warn(options);
	}

	/*
		MODELS
	*/
	var vm = this;
	vm.listsReady = 0;
	$timeout(function(){
		vm.listsReady ++;
	},200);
	vm.list = {
		data: {}
	};
	vm.lists = {};
	vm.lists_new = {};
	vm.featuredEvents = {};


	/*
		MODALS
	*/
	var modal_timeout = 0;
	$rootScope.modals = {opened:[]};
	$rootScope.modals.close = function() {
		for (var mo in $rootScope.modals.opened) {
			$rootScope.modals.opened[ mo ].scope.close();
			delete $rootScope.modals.opened[ mo ];
			modal_timeout = 1000;
		}
	}
	$rootScope.modals.show = function(name) {
		$rootScope.modals.close();
		$timeout(function(){
			ModalService.showModal({
				templateUrl: name,
				controller: "Modal",
				inputs: {
					vm: vm
				}
			}).then(function(modal) {
				$rootScope.modals.opened.push( modal );
				modal.scope.$on('$destroy', function(){
					for (var mo in $rootScope.modals.opened) {
						delete $rootScope.modals.opened[ mo ];
					}
				});
				modal.close.then(function(result) {
					$scope.message = "You said " + result;
				});
			});
		},modal_timeout);
	};


	/*
		LISTS
	*/
	vm.listsGet = function() {
		vm.listsGetDefault(); // if user has saved lists, they will override, so this will be just to get categories/sites/scenes
		vm.listsGetUser();
	};
	vm.listsGetDefault = function() {
		// from Default
		ContentService.getAll().then(
			function (all) {
				// lists
				all.categories.forEach(function (item, i, array) {
					var list = {
						data: {
							category: array[i].title,
							scene: '',
							text: '',
							likes: array[i].likes,
							addedOn: array.length - i
						},
						query: {
							category: array[i].title,
							scene: '',
							text: ''
						}
					};
					list.data.uid = list.data.category;
					if (!vm.lists[list.data.uid] || ( vm.lists[list.data.uid].data && vm.lists[list.data.uid].data.addedOn < list.data.addedOn ) ) {
						vm.lists[list.data.uid] = list;
					}
				});
				vm.syncLists();
				// content
				vm.categories = all.categories;
				vm.scenes = all.scenes;
				vm.sites = all.sites;
				vm.eventsCount = all.eventsCount;
			},
			function (error) {
			}
		);
	}
	vm.listsGetUser = function () {
		// from Database
		var getUserLists = function() {
			ListService.getUserLists().then(function (response) {
				response.data.forEach(function (row, ro, rows) {
					var lists = rows[ro].data;
					for (var li in lists) {
						if (!lists[li].data || !lists[li].data.addedOn) {
							continue;
						}
						var list = {
							data: lists[li].data
						};
						if (!vm.lists[list.data.uid] || list.data.addedOn > vm.lists[list.data.uid].data.addedOn) {
							vm.lists[list.data.uid] = list;
						}
					}
				});
				if (Object.keys(vm.lists).length) {
					vm.syncLists();
				}
			},
			function (error) {
				vm.listsGetDefault();
			});
		};

		if ($rootScope.user) {
			getUserLists();
		} else {
			AccountService.currentUser().then(
				function (responseData) {
					$rootScope.user = responseData;
					getUserLists();
				},
				function (error) {
					vm.listsGetDefault();
				}
			);
		}

	}


	/*
		LIST 
	*/
	vm.listAdd = function (list) {
		console.log('list',list);
		if (list && list.data) {
			angular.extend( vm.list.data, list.data);
		}
		console.log('vm.list',vm.list);

		vm.listJustAdded = vm.list.data.category;
		function removeJustAdded() {
			for (var li in vm.lists) {
				vm.listJustAdded = false;
				vm.lists[li].justAdded = false;
			}
		}
		$rootScope.modals.close();
		if ($rootScope.lazyLoadedLists[ vm.list.data.category ]) {
			delete $rootScope.lazyLoadedLists[ vm.list.data.category ];
		}
		// <lists>
		// make
		vm.list.data.addedOn = Date.now();
		vm.list.data.uid = vm.list.data.category;
		// star
		vm.list.justAdded = true;
		$timeout(function () {
			removeJustAdded();
		}, 1500);
		// add
		vm.lists[vm.list.data.uid] = vm.list;
		var listsIds = Object.keys(vm.lists)
			.sort(function (a, b) {
				return (vm.lists[b].data.addedOn - vm.lists[a].data.addedOn)
			});
		vm.list = {
			data: {}
		};
		vm.syncListsUp();
		// </lists>
	}
	vm.listHide = function (list) {
		if (list && list.data) {
			angular.extend( vm.list.data, list.data);
		}

		$rootScope.modals.close();
		if ($rootScope.lazyLoadedLists[ list.data.category ]) {
			delete $rootScope.lazyLoadedLists[ list.data.category ];
		}
		// <lists>
		vm.list.data.addedOn = 10000000000 - Math.round(Date.now() / 1000); // hack - will work fine unless they wait for like an entire week to hide the next list
		vm.list.data.uid = vm.list.data.category;
		// add
		vm.lists[vm.list.data.uid] = vm.list;
		var listsIds = Object.keys(vm.lists)
			.sort(function (a, b) {
				return (vm.lists[b].data.addedOn - vm.lists[a].data.addedOn)
			});
		vm.list = {
			data: {}
		};
		vm.syncListsUp();
		// </lists>
	}


	/* 
		SYNC
	*/
	var syncLocalUp = function () {
		var localStorage_lists = JSON.parse(window.localStorage.lists||'{}');
		for (var li in vm.lists) {
			// sync Up
			localStorage_lists[li] = {data:vm.lists[li].data};
		}
		window.localStorage.lists = angular.toJson(localStorage_lists);
	}
	var syncLocal = function () {
		var localStorage_lists = JSON.parse(window.localStorage.lists||'{}');
		for (var li in vm.lists) {
			if ( localStorage_lists[li] && localStorage_lists[li].data && localStorage_lists[li].data.addedOn > vm.lists[li].data.addedOn ) {
				// sync Down
				vm.lists[li] = {data:localStorage_lists[li].data};
			} else {
				// sync Up
				localStorage_lists[li] = vm.lists[li];
			}
		}
		window.localStorage.lists = angular.toJson(localStorage_lists);
	}
	var syncRemoteUp = function () {
		// // database
		var listData = {};
		for (var li in vm.lists) {
			if (vm.lists[li].data && vm.lists[li].data.addedOn) {
				listData[li] = {data:vm.lists[li].data};
			}
		}
		if (Object.keys(vm.lists).length) {
			ListService.deleteAll();
			ListService.addNew({data:listData})
			.then(function(list) {
			}, function(error) {
			})
		}

	}
	var syncRemote = function () {
		syncRemoteUp();
	}
	vm.syncListsUp = function () {
		syncLocalUp();
		syncRemoteUp();
	};
	vm.syncLists = function () {
		syncLocal();
		syncRemote();
	};


	/*
		LOGIN
	*/
	vm.login = function (socialProvider) {
		//console.info('Logging you in using Facebook (still working on domain settings for other social providers)');
		//socialProvider = 'facebook';
		Stamplay.User.socialLogin(socialProvider);
		AccountService.currentUser()
			.then(function (responseData) {
				$rootScope.user = responseData;
				vm.listsGetUser();
			}, function (error) {
				console.error(error);
			})
	}
	vm.logout = function () {
		vm.syncListsUp();
		window.localStorage.clear();
		AccountService.logout();
		AccountService.currentUser()
			.then(function (responseData) {
				window.localStorage.clear();
				vm.lists = {};
				$rootScope.user = responseData;
				vm.listsGetDefault(true);
				$rootScope.modals.close();
			}, function (error) {
				console.error(error);
				$rootScope.modals.close();
			})
	}
	$scope.$on('$destroy', vm.syncLists);
	window.onbeforeunload = vm.syncLists;


	/*
		INIT 
	*/
	vm.listsGet();


}])
;

angular.module('ListModule.directives', [])

.directive('preventDefault', function () {
	return function (scope, element, attrs) {
		$(element)
			.click(function (event) {
				event.preventDefault();
			});
	}
})

.directive('hoverfocus', function () {
	return function (scope, element, attrs) {
		$(element)
			.hover(function (event) {
				$(element)
					.find('input')
					.focus()
					.bind('keypress', function (e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == 13) {
							$(this).blur();
						}
					});
			});
	}
})
.directive('logScope', function () {
	return {
		restrict: 'A',
		scope: {
		},
		link: function (scope, element, attrs) {
			var scope = scope.$parent.$parent || scope.$parent || scope;
			var data = {};
			for (var key in scope) {
				if (key.substr(0,1)!=='$') {
					data[key] = scope[key];
				}
			}
			var title = scope.$parent ? 'scope' : 'rootScope';
		}
	}
})

.directive('scrollTop', function ($rootScope) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			$(element).scroll(function(){
				if (element[0].scrollTop) {
					scope.scrolled = true;
					$(element).addClass('scrolled');
				} else {
					scope.scrolled = false;
					$(element).removeClass('scrolled');
				}
			});
			$(element).bind('mousewheel', function(e) {
				if (scope.scrolled) {
					if (e.originalEvent.wheelDelta /120 > 0) {
						if (element[0].scrollTop===0) {
							scope.scrolled = false;
							$(element).removeClass('scrolled');
						}
					}
				}
			});
			scope.$on('$destroy',function(){
				$(element).unbind('scroll');
				$(element).unbind('mousewheel');
			})
		}
	}
})
.directive('scrollTopHelper', function ($rootScope) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			$(element).scroll(function(){
				if (element[0].scrollTop) {
					$('[scroll-top]').addClass('scrolled');
				} else {
					$('[scroll-top]').removeClass('scrolled');
				}
			});
			scope.$on('$destroy',function(){
				$(element).unbind('scroll');
			})
		}
	}
})

.directive('scrollable', function ($timeout) {
	return {
		restrict: 'A',
		scope: {
			vm: '='
		},
		link: function (scope, element, attrs) {

			scope.scroll_enable = function () {
				var target = element[0];
				target.doNotScroll = false;
				target.scrollLeftLast = target.scrollLeft;
				if (target.scrollLeft<10) {
					$(element).siblings('[scrollable-left]').addClass('scrollEnd');
				} else {
					$(element).siblings('[scrollable-left]').removeClass('scrollEnd');
				}
				if (target.scrollLeft > ( target.scrollWidth - document.body.scrollWidth - 10 ) ) {
					$(element).siblings('[scrollable-right]').addClass('scrollEnd');
				} else {
					$(element).siblings('[scrollable-right]').removeClass('scrollEnd');
				}
			};
			$timeout(
				scope.scroll_enable,
				100
			);
			$(window).on('resize',scope.scroll_enable);
			scope.$on('$destroy',function(){
				$(window).off('resize',scope.scroll_enable);
			});

			scope.$watch(
				function () {
					if (scope.$parent.vm.listJustAdded) {
						return scope.$parent.vm.listJustAdded;
					} else {
						return false;
					}
				},
				function (newValue, oldValue) {
					// scroll to beginning
					if (newValue && newValue != oldValue) {
						var target = element[0];
						var duration = 400; // target.clientWidth / 2;

						var scrollTo = 0;
						target.doNotScroll = 'scroll--changed';
						$timeout(function () {
							$(target)
								.animate({
									scrollLeft: 0
								}, {
									duration: duration
								});

							$timeout(
								scope.scroll_enable,
								duration + 10
							);

						}, 100);
					}
				}
			);

			$(element)
			.siblings('[scrollable-left]')
			.click(function () {
				var target = element[0];
				if (target.doNotScroll) {
					return;
				}
				var duration = 400;

				var scrollTo = target.scrollLeft - target.clientWidth;
				$(target)
					.animate({
						scrollLeft: scrollTo
					}, {
						duration: duration
					});

				target.doNotScroll = 'scrollable-left';
				$timeout(
					scope.scroll_enable,
					duration
				);
			});
			$(element)
			.siblings('[scrollable-right]')
			.click(function () {
				var target = element[0];
				if (target.doNotScroll) {
					return;
				}
				var duration = 400;

				var scrollTo = target.scrollLeft + target.clientWidth;
				$(target)
					.animate({
						scrollLeft: scrollTo
					}, {
						duration: duration
					});

				target.doNotScroll = 'scrollable-right';
				$timeout(
					scope.scroll_enable,
					duration
				);
			});
			// finish scroll position to nearest column or page
			scope.scrollfix = function(){
				var target = element[0];
				var duration = 200;
				if (target.doNotScroll) {
					return;
				}
				// what direction?
				var round = 'ceil';
				if (target.scrollLeft < target.scrollLeftLast) {
					round = 'floor';
				}
				// finish scrolling - to closest column
				var columns = Math[round](target.scrollLeft / target.firstElementChild.firstElementChild.clientWidth);
				var scrollTo = target.firstElementChild.firstElementChild.clientWidth * columns;
				// go
				$(target).animate({
					scrollLeft: scrollTo
				}, {
					duration: duration
				});
				// done
				target.doNotScroll = true;
				$timeout(
					scope.scroll_enable,
					duration
				);
			};
			$(element).scroll(function(){
				window.clearTimeout(scope.scrollfix_timeout);
				scope.scrollfix_timeout = window.setTimeout(function(){
					scope.scrollfix();
				},222); // timeout must be greater than duration of 
			});
		}
	}
})

;

angular.module('ListModule.filters', [])

.filter('firstWord', function () {
	return function (string) {
		var all = string.split(' ');
		return all[0];
	};
})

.filter('orderObjectBy', function () {
	return function (items, field, reverse) {
		var filtered = [];
		angular.forEach(items, function (item) {
			filtered.push(item);
		});
		filtered.sort(function (a, b) {
			if (field.indexOf('.')) {
				var fields = field.split('.');
				if (a[fields[0]] && b[fields[0]]) {
					return (a[fields[0]][fields[1]] > b[fields[0]][fields[1]] ? 1 : -1);
				} else {
					return -1; 
				}
			} else {
				return (a[field] > b[field] ? 1 : -1);
			}
		});
		if (reverse) filtered.reverse();
		return filtered;
	};
})

;

angular.module('ListModule.services', [])

.factory('ContentService', ["$q", "$http", function ($q, $http) {
	return {

		getAll: function (query) {
			var deffered = $q.defer();
			$http({
				url: window.env.api.host+'/all',
				method: "GET",
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					'X-Host': window.location.host
				}
			}).then(function(response){
				deffered.resolve(response.data.data);
			},function(error){
				deffered.reject(error);
			});
			return deffered.promise;
		}

	}
}])

.factory('AccountService', ["$q", function ($q) {
	return {

		logout: function() {
			var jwt = window.location.origin + "-jwt";
			window.localStorage.removeItem(jwt);
			window.location.href = window.location.origin;
		},
		currentUser: function () {
			var def = $q.defer();
			Stamplay.User.currentUser()
				.then(function (response) {
					if (response.user === undefined) {
						def.reject(false);
					} else {
						def.resolve(response.user);
					}
				}, function (error) {
					def.reject();
				})
			return def.promise;
		}

	}
}])


.factory('EventService', ["$rootScope", "$http", "$q", function ($rootScope, $http, $q) {
	return {

		getEvents: function (query) {
			var deffered = $q.defer();
			$http({
				url: window.env.api.host+'/events?'+$.param(query),
				method: "GET",
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					'X-Host': window.location.host
				}
			}).then(function(response){
				deffered.resolve(response);
			},function(error){
				deffered.reject(error);
			});
			return deffered.promise;
		}

	}
}])


.factory('ListService', ["$rootScope", "$q", function ($rootScope, $q) {
	return {

		getGuestLists: function (query) {
			var deffered = $q.defer();
			Stamplay.Query("object", "list")
				.notExists("owner")
				.exec()
				.then(function (response) {
					deffered.resolve(response)
				}, function (error) {
					deffered.reject(err);
				})
			return deffered.promise;
		},

		getUserLists: function (query) {
			console.log('getUserLists ',query);
			var deffered = $q.defer();

			Stamplay.Object("list")
				.findByCurrentUser(["owner"])
				.then(function (response) {
					deffered.resolve(response)
				}, function (err) {
					deffered.reject(err);
				})
			return deffered.promise;
		},

		getList: function (id) {
			var deffered = $q.defer();
			Stamplay.Object("list")
				.get({
					_id: id
				})
				.then(function (response) {
					deffered.resolve(response)
				}, function (error) {
					deffered.reject(err);
				})
			return deffered.promise;
		},

		addNew: function (list) {
			var deffered = $q.defer();

			Stamplay.Object("list")
				.save(list)
				.then(function (response) {
					deffered.resolve(response)
				}, function (err) {
					deffered.reject(err);
				})
			return deffered.promise
		},
		deleteAll: function () {
			var deffered = $q.defer();
			Stamplay.Object("list")
				.findByCurrentUser(["owner"])
				.then(function (response) {
					for (var d in response.data) {
						Stamplay.Object("list")
							.remove(response.data[d].id)
							.then(function (response) {
							});
					}
				});
		},
		deleteList: function (id) {
			var deffered = $q.defer();
			Stamplay.Object("list")
				.remove(id)
				.then(function (response) {
					deffered.resolve(response)
				}, function (err) {
					deffered.reject(err);
				})
			return deffered.promise;
		},
		updateList: function (list) {
			var deffered = $q.defer();
			Stamplay.Object("list")
				.update(list._id, list)
				.then(function (response) {
					deffered.resolve(response)
				}, function (err) {
					deffered.reject(err);
				})
			return deffered.promise;
		}

	}
}]);

//# sourceMappingURL=all.js.map