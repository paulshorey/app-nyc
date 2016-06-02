window.reset = function(){
	localStorage.clear();
	window.location.reload();
}
window.extendSorted = function(one, two) {
	return $.extend(one,two);
	// var sorted = function(unordered) { 
	// 	var ordered = {};
	// 	Object.keys(unordered).sort().forEach(function(key) {
	// 		ordered[key] = unordered[key];
	// 	});
	// 	return ordered;
	// };
	// return sorted( $.extend(one,two) );
};

angular.module('ionicApp.controllers', [])

.controller('ListController', ["AccountService", "ListService", "EventService", "ContentService", "$ionicLoading", "$ionicPopup", "$ionicModal", "$window", "$scope", "$rootScope", "$state", "$timeout", "$stateParams", "$sce", "$compile", "$interpolate", "$parse", function (AccountService, ListService, EventService, ContentService, $ionicLoading, $ionicPopup, $ionicModal, $window, $scope, $rootScope, $state, $timeout, $stateParams, $sce, $compile, $interpolate, $parse) {
	window.ListController = this;
	var errorHandler = function (options) {
		var errorAlert = $ionicPopup.alert({
			title: options.title,
			okType: 'button-assertive',
			okText: "Try Again"
		});
	}
	$rootScope.client = window.client;

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
	$rootScope.filepath = document.getElementsByTagName("script");
	$scope.modals = {};
	$ionicModal.fromTemplateUrl('templates/modals/options.html', {
			scope: $scope,
			animation: 'slide-in-right'
		})
		.then(function (modal) {
			$scope.modals['modalOptions'] = modal;
		});
	$ionicModal.fromTemplateUrl('templates/modals/select.html', {
			scope: $scope,
			animation: 'slide-in-left'
		})
		.then(function (modal) {
			$scope.modals['modalSelect'] = modal;
		});
	$scope.$on('modal.shown', function () {
		$('.my-content')
			.addClass('blurry');
	});
	$scope.$on('modal.hidden', function () {
		$('.my-content')
			.removeClass('blurry');
	});
	vm.closeModals = function () {
		for (var m in $scope.modals) {
			$scope.modals[m].hide();
		}
	};
	$scope.$on('$destroy', function () {
		for (var m in $scope.modals) {
			$scope.modals[m].remove();
		}
	});


	/*
		LISTS
	*/
	vm.listsGet = function() {
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
						}
					};
					list.data.uid = list.data.category;
					if (!vm.lists[list.data.uid] || ( vm.lists[list.data.uid].data && vm.lists[list.data.uid].data.addedOn < list.data.addedOn ) ) {
						vm.lists[list.data.uid] = list;
						vm.listEvents(list);
					}
				});
				vm.syncLists();
				// content
				vm.categories = all.categories;
				vm.scenes = all.scenes;
				vm.sites = all.sites;
				vm.eventsCount = all.eventsCount;
				$ionicLoading.hide();
			},
			function (error) {
				$ionicLoading.hide();
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
							vm.listEvents(list);
						}
					}
				});
				if (Object.keys(vm.lists).length) {
					vm.syncLists();
				} else {
					vm.listsGetDefault();
				}
				$ionicLoading.hide();
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
		function removeJustAdded() {
			for (var li in vm.lists) {
				vm.lists[li].justAdded = false;
			}
		}
		vm.closeModals();
		// <lists>
		if (list) {
			vm.list.data = list.data;
		}
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
		vm.listEvents(vm.list);
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
	vm.listEvents = function (list) {
		vm.listsReady -= 1;
		var query = {};
		query.category = list.data.category;
		query.scene = list.data.scene;
		query.time = list.data.time;
		EventService.getEvents(query)
			.then(function (response) {
				var events = response.data.data;
				var old_timestring = '';
				var old_event_featured_images = [];
				var old_date = '';
				if (events.length) {


					// ALL
					// <events>
					list.count = events.length;
					list.sources = {};

					// <html>
					var html = '		<div class="my-events">\n';
					for (var each in events) {
						var event = events[each];
						if (!event.texts) {
							continue;
						}
						var today = moment()
							.startOf('day');
						var timestring = Date.create(event.timestamp)
							.short();
						if (event.timestamp < today.add(1, 'days')
							.format('x')) {
							timestring = 'today';
						} else if (event.timestamp < today.add(2, 'days')
							.format('x')) {
							timestring = 'tomorrow';
						} else if (event.timestamp < today.add(7, 'days')
							.format('x')) {
							timestring = 'this week';
						} else if (event.timestamp < today.add(30, 'days')
							.format('x')) {
							timestring = 'this month';
						}
						//event.timestamp = event.timestamp.replace(' 12:00am','');
						if (timestring != old_timestring) {
							//var timeUnique = cutOldBeginning(old_timestamp, event.timestamp);
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
						if (timestring.indexOf('week') != -1 || timestring.indexOf('month') != -1) {
							ev += '		<span ng-click><span class="ion-calendar"></span> <span>' + moment(event.timestamp)
								.format('MMM D, h:mma') + '</span></span>\n';
						} else if (event.time) {
							ev += '		<span ng-click><span class="ion-calendar"></span> <span>' + moment(event.timestamp)
								.format('h:mma') + '</span></span>\n';
						}
						if (event.price) {
							ev += '			<span class="subtext-price"><span class="ion-pricetag"></span> <span>'+event.price+'</span></span>\n';
						}
						ev += '			<a class="subtext-source" href="' + event.source_link + '" prevent-default onClick="window.open(\'' + event.link + '\', \'_system\')"><span class="icon-link"></span> ' + (event.source_host.substr(0, event.source_host.indexOf('.'))) + '</a>\n';
						// ev += '			<span class="subtext-fave" ng-click=""><span class="icon-star-outline"></span></span>\n';
						ev += '			</div>\n';
						ev += '		</div>';
						//
						html += ev;
						old_timestring = timestring;

						// <featured></featured>
						if (event.featured) {
							var event_featured = JSON.parse(JSON.stringify(event));
							if (old_event_featured_images.indexOf(event_featured.image) == -1) {
								event_featured.eventsHTML = $sce.trustAsHtml(ev);
								vm.featuredEvents[event.random] = event_featured;
								old_event_featured_images.push(event_featured.image);
							}
						}

					}
					html += '		</div>\n';
					// </html>

					$timeout(function () {
						list.eventsCount = events.length;
						list.eventsHTML = $sce.trustAsHtml(html);
					});
					// </events>
				}

				$timeout(function () {
					vm.listsReady += 1;
				},10);
			}, function (error) {
				$timeout(function () {
					vm.listsReady += 1;
				},10);
				console.error(error);
			});
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
				vm.listEvents(vm.lists[li]);
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
				$ionicLoading.hide();
				vm.listsGetUser();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
			})
	}
	vm.logout = function () {
		vm.syncListsUp();
		$ionicLoading.show();
		window.localStorage.clear();
		AccountService.logout();
		AccountService.currentUser()
			.then(function (responseData) {
				window.localStorage.clear();
				vm.lists = {};
				$rootScope.user = responseData;
				vm.listsGetDefault(true);
				$ionicLoading.hide();
				vm.closeModals();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
				vm.closeModals();
			})
	}
	$scope.$on('$destroy', vm.syncLists);
	window.onbeforeunload = vm.syncLists;


	/*
		INIT 
	*/
	vm.listsGet();


}])

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
							$(this)
								.blur();
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
					$(element).addClass('scrolled');
				} else {
					$(element).removeClass('scrolled');
				}
			});
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
		}
	}
})

.directive('scrollable', function ($timeout, $ionicLoading) {
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
					$(element).siblings('[scrollable-left]').addClass('scrollZero');
				} else {
					$(element).siblings('[scrollable-left]').removeClass('scrollZero');
				}
				if (target.scrollLeft > ( target.scrollWidth - document.body.scrollWidth - 10 ) ) {
					$(element).siblings('[scrollable-right]').addClass('scrollZero');
				} else {
					$(element).siblings('[scrollable-right]').removeClass('scrollZero');
				}
			};
			scope.$watch(
				function () {
					if (scope.$parent.vm.listsReady == 1) {
						return element[0].innerText;
					} else {
						return false;
					}
					// if (element[0].firstElementChild.firstElementChild) {
					// 	return element[0].firstElementChild.firstElementChild.innerText;
					// }
				},
				function (newValue, oldValue) {
					// scroll to beginning
					if (newValue && newValue != oldValue) {
						var target = element[0];
						var duration = 400; // target.clientWidth / 2;

						var scrollTo = 0;
						target.doNotScroll = 'scroll--changed';
						$ionicLoading.show();
						$timeout(function () {
							$ionicLoading.hide();
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
			$(element).scroll(
				$.debounce(
					222, // this should be more than animation duration, or it will trigger itself
					function (event) {
						var target = event.target;
						var duration = 200;
						if (target.doNotScroll) {
							return;
						}

						// goto page
						var round = 'ceil';
						if (target.scrollLeft < target.scrollLeftLast) {
							round = 'floor';
						}
						var pages = Math[round](target.scrollLeft / target.firstElementChild.clientWidth);
						var scrollTo = target.firstElementChild.clientWidth * pages;
						// go to column (if manually scrolled to it)
						if (target.firstElementChild.firstElementChild) {
							var columns = Math.round(target.scrollLeft / target.firstElementChild.firstElementChild.clientWidth);
							var scrollToColumn = target.firstElementChild.firstElementChild.clientWidth * columns;
							if (Math.abs(target.scrollLeft - scrollToColumn) < 60) {
								scrollTo = scrollToColumn;
							}
						}
						// ok go
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

					}
				)
			);
		}
	}
})

;