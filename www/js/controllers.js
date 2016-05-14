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
	window.ListController = this;
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

	// $scope.modals = {};
	// vm.closeModals = function () {
	// 	for (var m in $scope.modals) {
	// 		$scope.modals[m].hide();
	// 	}
	// };
	// $scope.$on('$destroy', function () {
	// 	for (var m in $scope.modals) {
	// 		$scope.modals[m].remove();
	// 	}
	// });
	// $ionicModal.fromTemplateUrl('templates/modals/addList.html', {
	// 		scope: $scope,
	// 		animation: 'slide-in-up'
	// 	})
	// 	.then(function (modal) {
	// 		$scope.modals['addList'] = modal;
	// 	});
	// $ionicModal.fromTemplateUrl('templates/modals/editList.html', {
	// 		scope: $scope,
	// 		animation: 'slide-in-up'
	// 	})
	// 	.then(function (modal) {
	// 		$scope.modals['editList'] = modal;
	// 	});



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
						// 	console.log('window.localStorage',window.localStorage);
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
								uid: 'default' + id,
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
			if (vm.listsReady==1) {
				console.log('lists are ready!');
			}
		});
		// </lists>

		// [data]
		ListService.deleteList(list.data.id)
			.then(function (list) {}, function (error) {})
			// [/data]
	}
	vm.listKey = function (list, whatList) {

	}
	vm.listAdd = function (list) {
		if (list) {
			vm.listsClean(list);
		}

		// <lists>
		$timeout(function () {
			if (list) {
				vm.list.data = list.data;
			}
			vm.list.data.uid = 'userLists'+Date.now() + vm.list.data.uid;
			vm.list.sortorder = Date.now();
			vm.listsReady -= 1;
			vm.lists[ vm.list.data.uid ] = vm.list;
			vm.listEvents(vm.list);
			vm.list = {data:{}};
		});
		// </lists>

		// [data]
		// [/data]

	}
	vm.listEvents = function (list) {
		var query = {};
		query.category = list.data.category;
		query.scene = list.data.scene;
		query.time = list.data.time;
		EventService.getEvents(query)
			.then(function (response) {
				var events = response.data.data;
				var old_timestamp = 0;
				var old_date = '';
				if (events.length) {

					// <events>
					list.count = events.length;
					list.sources = {};

					// <html>
					var html = '		<div class="events">\n';
					for (var each in events) {
						var event = events[each];
						//vm.events[ list.data.uid ].sources[ event.host ] = event.host;

						if (event.timestamp != old_timestamp || event.date != old_date) {
							html += '	<div class="events-timestamp"><span>' + event.date + '</span> <span>' + event.time + '</div>\n';
						}
						html += '		<div class="events-event event-link" onClick="window.open(\'' + event.link + '\', \'_system\')" style="background-image:url(' + event.image + ');">\n';
						html += '			<div class="event-text">' + event.text + '</div>\n';
						html += '		</div>';
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
					if (vm.listsReady==1) {
						console.log('lists are ready!');
					}
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
				function () { return Object.keys(scope.$parent.vm.lists).length ? element[0].firstElementChild.childElementCount : false; },
				function (newValue, oldValue) {
					// scroll to beginning
					if (oldValue > 0 && newValue > oldValue) {
						var target = element[0];
						var duration = target.clientWidth / 2;
						console.log(newValue+' > '+oldValue);

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
					console.log('duration',duration);
					console.log(' scrolled: ('+target.clientWidth+') ' + target.scrollLeft+' < '+target.scrollLeftLast);

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
					$(target).animate({ scrollLeft: ( scrollTo ) }, { duration: duration });
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