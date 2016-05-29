angular.module('ionicApp.controllers', [])

.directive('prevent-default', function () {
	return function (scope, element, attrs) {
		$(element)
			.click(function (event) {
				event.preventDefault();
			});
	}
})


.controller('ListController', ["AccountService", "ListService", "EventService", "ContentService", "$ionicLoading", "$ionicPopup", "$ionicModal", "$window", "$scope", "$rootScope", "$state", "$timeout", "$stateParams", "$sce", function (AccountService, ListService, EventService, ContentService, $ionicLoading, $ionicPopup, $ionicModal, $window, $scope, $rootScope, $state, $timeout, $stateParams, $sce) {
	//window.ListController = this;
	$rootScope.client = window.client;
	var vm = this;
	vm.listsReady = 1;
	var errorHandler = function (options) {
		var errorAlert = $ionicPopup.alert({
			title: options.title,
			okType: 'button-assertive',
			okText: "Try Again"
		});
	}
	vm.list = {data:{}};
	vm.lists = {};
	vm.lists_new = {};
	vm.featuredEvents = {};


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
	$scope.$on('modal.shown', function() {
		$('.my-content').addClass('blurry');
	});
	$scope.$on('modal.hidden', function() {
		$('.my-content').removeClass('blurry');
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
		VERBS
	*/
	vm.login = function (socialProvider) {
		vm.syncLocal();
		Stamplay.User.socialLogin(socialProvider);
		AccountService.currentUser()
			.then(function (user) {
				$rootScope.user = user;
				$ionicLoading.hide();
				vm.setUser();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
			})
	}
	vm.logout = function () {
		vm.syncLocal();
		$ionicLoading.show();
		var jwt = window.location.origin + "-jwt";
		window.localStorage.removeItem(jwt);
		AccountService.currentUser()
			.then(function (user) {
				$rootScope.user = user;
				$ionicLoading.hide();
				vm.setUser();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
			})
	}
	$scope.$on('$destroy', vm.syncLocal);
	window.onbeforeunload =  vm.syncLocal;
	vm.syncLocal = function(){
		// if (vm.lists.userLists.length) {
		// 	window.localStorage.lists = JSON.stringify(vm.lists);
		// }
	};

	vm.setUser = function () {
		$ionicLoading.show();
		AccountService.currentUser()
			.then(
				function (user) {
					$rootScope.user = user;
					$ionicLoading.hide();
					vm.setLists();
					if (window.localStorage.lists) {
						// var lists = JSON.parse(window.localStorage.lists);
						// if (lists.userLists) {
						// 	$timeout(function(){
						// 		vm.lists = lists;
						// 	});
						// 	window.localStorage.removeItem('lists');
						// }
					}

				},
				function (error) {
					console.error(error);
					$ionicLoading.hide();
				})
	}; 
	vm.setUser(); 
	vm.setLists = function () {

		ContentService.getAll()
			.then(
				function (all) {

					// lists
					all.categories.forEach(function (item, id, array) {
						var list = {
							data: {
								uid: array[id].title,
								// uid: 'default' + id,
								category: array[id].title,
								scene: '',
								text: '',
								likes: 1
							},
							sortorder: array.length - id,
							type: 'default'
						};
						vm.listsReady -= 1;
						vm.lists[ list.data.uid ] = list;
						vm.listEvents( list ); 

					});
					vm.setUserLists();

					// content
					vm.categories = all.categories;
					vm.scenes = all.scenes;
					vm.sites = all.sites;
					vm.eventsCount = all.eventsCount;

				},
				function (error) {
					$ionicLoading.hide();
				})

	}
	vm.setUserLists = function () {

		if ($rootScope.user) {
			ListService.getUsersLists()
				.then(
					function (response) {
						response.data.forEach(function (item, id, array) {
							var list = {
								data: array[id],
								sortorder: 1000 + id,
								type: 'user'
							};

							vm.listsReady -= 1;
							vm.lists[ list.data.uid ] = list;
							vm.listEvents( list ); 
						});
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					})
		}

	}


	/*
		LISTSSS
	*/
	vm.listsClean = function (list) {
		for (var uid in vm.lists) {
			if (uid == list.data.uid) {
				delete vm.lists[uid];
			}
		}
		vm.syncLocal();
	}


	/*
		LIST 
	*/
	vm.listRemove = function (list) {

		// <lists>
		vm.listsReady -= 1;
		vm.listsClean(list);
		$timeout(function () {
			vm.listsReady += 1;
		});
		// </lists>

		// [data]
		ListService.deleteList(list.data.id)
			.then(function (list) {}, function (error) {})
			// [/data]
	}
	vm.listKey = function (list, whatList) {

	}
	vm.listReset = function (list) {
		vm.list = {data:{}};
	}
	vm.listAdd = function (list) {
		if (list) {
			vm.listsClean(list);
		}

		// <lists>
		if (vm.list.data.category || vm.list.data.time || vm.list.data.scene || vm.list.data.search) {
			if (vm.list.data.category == 'any') {
				vm.list.data.category = '';
			}
			if (vm.list.data.time == 'any') {
				vm.list.data.time = '';
			}
			$timeout(function () {
				if (list) {
					vm.list.data = list.data;
				}
				// vm.list.data.uid = 'userLists'+Date.now() + vm.list.data.uid;
				vm.list.data.uid = vm.list.data.category;
				if (!vm.lists[ vm.list.data.uid ]) {
					vm.lists[ vm.list.data.uid ] = vm.list;
				}
				vm.lists[ vm.list.data.uid ].sortorder = Date.now();
				vm.listsReady -= 1;
				vm.listEvents(vm.list);
				var listsIds = Object.keys(vm.lists).sort(function(a, b) {return (vm.lists[b].sortorder - vm.lists[a].sortorder)});
				if (vm.list.data.category==listsIds[0]) {
				} else {
					vm.list = {data:{}};
				}
			});
		}
		// </lists>

		// [data]
		// [/data]

	}
	var cutOldBeginning = function(oldWhole, newWhole) {
		if (!newWhole) {
			return false;
		}
		if (!oldWhole) {
			return newWhole;
		}
		var output = newWhole;
		var oldWholeArray = oldWhole.split(' ');
		for (var ea in oldWholeArray) {
			ea = parseInt(ea);
			var oldStart = oldWholeArray.slice(0,ea+1).join(' ');
			if (ea==0) {
				continue;
			}
			if (newWhole.startsWith(oldStart)) {
				output = '<span class="fragment">'+newWhole.replace(oldStart,'')+'</span>';
			} else {
				break;
			}
		}
		return output;
	};
	vm.listEvents = function (list) {
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
						var today = moment().startOf('day');
						var timestring = Date.create(event.timestamp).short();
						if (event.timestamp < today.add(1, 'days').format('x')) {
							timestring = 'today';
						} else if (event.timestamp < today.add(2, 'days').format('x')) {
							timestring = 'tomorrow';
						} else if (event.timestamp < today.add(7, 'days').format('x')) {
							timestring = 'this week';
						} else if (event.timestamp < today.add(30, 'days').format('x')) {
							timestring = 'this month';
						}
						//event.timestamp = event.timestamp.replace(' 12:00am','');
						if (timestring != old_timestring) {
							//var timeUnique = cutOldBeginning(old_timestamp, event.timestamp);
							html += '<div class="events-timestamp"><span>' + timestring + '</span></div>\n';
						}
						// html += '		<div class="events-event event-link" onClick="window.open(\'' + event.link + '\', \'_system\')" style="background-image:url(' + event.image + ');">\n';
						var ev = '';
						ev += '		<div class="events-event">';
							if (event.image) {
								ev += '	<div class="event-image" style="background-image:url(\'' + event.image + '\');"></div>\n';
							}
						ev += '			<div class="event-text">\n';
						if ( event.texts[0] ) {
							ev += '			<span><a class="event-link" href="' + event.link + '" target="_blank" prevent-default onClick="window.open(\'' + event.link + '\', \'_system\')">'+event.texts[0]+'</a></span>\n';
						}
						if ( event.texts[1] ) {
							ev += '			<span>'+event.texts[1]+'</span>\n';
						}
						if ( event.texts[2] ) {
							ev += '			<span>'+event.texts[2]+'</span>\n';
						}
						ev += '			</div>\n';
						ev += '			<div class="event-subtext">\n';
							if (timestring.indexOf('week')!=-1 || timestring.indexOf('month')!=-1) {
								ev += '		<span><span class="ion-calendar"></span> '+moment(event.timestamp).format('MMM D, h:mma')+'</span>\n';
							} else if (event.time) {
								ev += '		<span><span class="ion-calendar"></span> '+moment(event.timestamp).format('h:mma')+'</span>\n';
							}
							ev += '			<span class="subtext-source"><span class="icon-link"></span> '+(event.source_host.substr(0,event.source_host.indexOf('.')))+'</span>\n';
							ev += '			<span><span class="icon-star-outline"></span></span>\n';
						ev += '			</div>\n';
						ev += '		</div>';
						//
						html += ev;
						old_timestring = timestring;

						// <featured></featured>
						if (event.image) {
							var event_featured = JSON.parse(JSON.stringify(event));
							if ( old_event_featured_images.indexOf( event_featured.image )==-1 ) {
								event_featured.html = $sce.trustAsHtml(ev);
								vm.featuredEvents[ event.random ] = event_featured;
								old_event_featured_images.push(event_featured.image);
							}
						}

					}
					html += '		</div>\n';
					// </html>

					$timeout(function () {
						list.html = $sce.trustAsHtml(html);
					});
					// </events>
				}

				$timeout(function () {
					vm.listsReady += 1;
				});
			}, function (error) {
				$timeout(function () {
					vm.listsReady += 1;
				});
				console.error(error);
			});
	}

}])

.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
})

// .directive('lists', [function() {     
// 	return {         
// 		templateUrl: 'state.tpl.html',         
// 		scope: {             
// 			state: '=xyzState',         
// 		},    
// 	}; 
// }]); 


.directive('hoverfocus', function () {
	return function (scope, element, attrs) {
		$(element).hover(function (event) {
			$(element).find('input').focus().bind('keypress',function(e){
				var code = (e.keyCode ? e.keyCode : e.which);
				if(code == 13) { 
					$(this).blur();
				}
			});
		});
	}
})

.directive('scrollable', function ($timeout, $ionicLoading) {
	return {
		restrict: 'A',
		scope: {
			vm: '='
		},
		link: function (scope, element, attrs) {
			scope.scroll_enable = function(){
				var target = element[0];
				target.doNotScroll = false;
				target.scrollLeftLast = target.scrollLeft;
			};
			scope.$watch(
				function () { if (!element[0].firstElementChild) { return false; } return Object.keys(scope.$parent.vm.lists).length ? element[0].firstElementChild.childElementCount : false; },
				function (newValue, oldValue) {
					// scroll to beginning
					if (oldValue > 0 && newValue > oldValue) {
						var target = element[0];
						var duration = target.clientWidth / 2;

						var scrollTo = 0;
						target.doNotScroll = 'scroll--changed';
						$ionicLoading.show();
						target.scrollLeft = target.scrollLeft + target.firstElementChild.firstElementChild.scrollWidth;
						$timeout(function(){
							$ionicLoading.hide();
							$(target).animate({ scrollLeft: scrollTo }, { duration: duration });

							$timeout(
								scope.scroll_enable,
								duration+100
							);

						},500);
					}
				}
			);

			$('[scrollable-left]').click(function(){
					var target = element[0];
					var duration = target.clientWidth / 2;

					var scrollTo = target.scrollLeft - target.clientWidth;
					$(target).animate({ scrollLeft: scrollTo }, { duration: duration });

					target.doNotScroll = 'scrollable-left';
					$timeout(
						scope.scroll_enable,
						duration
					);
			});
			$('[scrollable-right]').click(function(){
					var target = element[0];
					var duration = target.clientWidth / 2;

					var scrollTo = target.scrollLeft + target.clientWidth;
					$(target).animate({ scrollLeft: scrollTo }, { duration: duration });

					target.doNotScroll = 'scrollable-right';
					$timeout(
						scope.scroll_enable,
						duration
					);
			});
			$(element).scroll($.debounce( 
				( element[0].clientWidth / 4 ) + 10, // this should be less than animation duration, or it will trigger itself
				function (event) {
					var target = event.target;
					var duration = target.clientWidth / 4;
					if (target.doNotScroll) {
						return;
					}

					// goto page
					var round = 'ceil';
					if ( target.scrollLeft < target.scrollLeftLast ) {
						round = 'floor';
					}
					var pages = Math[round]( target.scrollLeft / target.firstElementChild.clientWidth );
					var scrollTo = target.firstElementChild.clientWidth * pages;
					// go to column (if real close)
					var columns = Math.round( target.scrollLeft / target.firstElementChild.firstElementChild.clientWidth );
					var scrollToColumn = target.firstElementChild.firstElementChild.clientWidth * columns;
					if ( Math.abs( target.scrollLeft - scrollToColumn ) < 60 ) {
						scrollTo = scrollToColumn;
					}

					// ok go
					$(target).animate({ scrollLeft: scrollTo }, { duration: duration });
					// done
					target.doNotScroll = true;
					$timeout(
						scope.scroll_enable,
						duration
					);

				} 
			));
		}
	}
})

;