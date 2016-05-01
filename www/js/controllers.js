angular.module('ionicApp.controllers', [])

.directive('prevent-default', function () {
	return function (scope, element, attrs) {
		$(element)
			.click(function (event) {
				event.preventDefault();
			});
	}
})


.controller('ListController', 
           ["AccountService", "ListService", "EventService", "ContentService", 		"$ionicLoading", "$ionicPopup", "$ionicModal", 		"$scope", "$rootScope", "$state", "$timeout", "$stateParams", "$sce", function 
           (AccountService, ListService, EventService, ContentService, 				$ionicLoading, $ionicPopup, $ionicModal,				$scope, $rootScope, $state, $timeout, $stateParams, $sce) 
	{
	window.ListController = this;
	var vm = this;
	vm.slickOk = 1;
	vm.slickConfig = window.slickConfig;
	var errorHandler = function (options) {
		var errorAlert = $ionicPopup.alert({
			title: options.title,
			okType: 'button-assertive',
			okText: "Try Again"
		});
	}
	vm.list = {};
	vm.userLists = {};
	vm.userEvents = {};
	vm.anonLists = {};
	vm.anonEvents = {};

	/*
		ACCOUNT
	*/
	vm.login = function (socialProvider) {
		Stamplay.User.socialLogin(socialProvider);
		AccountService.currentUser()
			.then(function (user) {
				$rootScope.user = user;
				$ionicLoading.hide();
				vm.getUser();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
			})
	}
	vm.logout = function () {
		$ionicLoading.show();
		var jwt = window.location.origin + "-jwt";
		window.localStorage.removeItem(jwt);
		AccountService.currentUser()
			.then(function (user) {
				$rootScope.user = user;
				$ionicLoading.hide();
				vm.getUser();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
			})
	}

	/*
		MODALS
	*/
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
		GET 
	*/
	vm.getUser = function () {
		$ionicLoading.show();
		AccountService.currentUser()
			.then(
			      function (user) {
					$rootScope.user = user;
					$ionicLoading.hide();
					vm.getLists();
				}, function (error) {
					console.error(error);
					$ionicLoading.hide();
				})
	};
	vm.getUser();
	vm.getLists = function () {

		if (!vm.anonLists.length) {
			// first get default, then user
			ContentService.getAll()
				.then(
					function (all) {

						// lists
						all.categories.forEach(function (item, id, array) { 
							var list =  {uid:array[id].title,category:array[id].title,scene:''};
							
							// <list>
							vm.slickOk -= 1;
							// <
							vm.anonLists[ list.uid ] = list;
							vm.listEvents( list, 'anonEvents' );
							// </list>

						});
						vm.getUserLists();
						$ionicLoading.hide();

						// content
						vm.categories = all.categories;
						vm.scenes = all.scenes;
						vm.sites = all.sites;
						vm.eventsCount = all.eventsCount;

					},
					function (error) {
						$ionicLoading.hide();
					})
		} else {
			// jump straight to user lists
			vm.getUserLists();
		}

	}
	vm.getUserLists = function () {

		if ($rootScope.user) {
			ListService.getUsersLists()
				.then(
					function (response) {
						response.data.forEach(function (item, id, array) {
							var list = array[id];
							
							// <list>
							vm.slickOk -= 1;
							// <
							delete vm.anonLists[ list.uid ];
							delete vm.anonEvents[ list.uid ];
							vm.userLists[ list.uid ] = list;
							vm.listEvents( list, 'userEvents' );
							// </list>
						});
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					})
		}

	}

	/*
		SET 
	*/
	vm.listRemove = function (list) {
		
		// <lists>
		vm.slickOk -= 1;
		vm.listClean( list.uid );
		$timeout(function(){
			vm.slickOk += 1;
		});
		// </lists>

		// [data]
		ListService.deleteList(list.id)
			.then(function (list) {
			}, function (error) {
			})
		// [/data]
	}
	vm.listAdd = function (list) {
		vm.list.uid = vm.list.category+vm.list.scene;
		if (!list) {
			list = vm.list;
		}
		
		// <lists>
		vm.slickOk -= 1;
		vm.listClean( list.uid );
		vm.userLists[ list.uid ] = list;
		vm.listEvents(list, 'userEvents' );
		vm.list = {};
		// </lists>

		// [data]
		// [/data]

	}
	vm.listClean = function( id ) {
		if (vm.anonLists[ id ]) {
			delete vm.anonLists[ id ];
		}
		if (vm.anonEvents[ id ]) {
			delete vm.anonEvents[ id ];
		}
		if (vm.userLists[ id ]) {
			delete vm.userLists[ id ];
		}
		if (vm.userEvents[ id ]) {
			delete vm.userEvents[ id ];
		}
	}
	vm.listEvents = function (list, whatEvents) {
		$timeout(function(){
			vm.slickOk += 1;
		});
		var query = {};
		query.category = list.category;
		query.scene = list.scene;
		query.time = list.time;
		EventService.getEvents(query).then(function(response){
			var events = response.data.data;
			var old_timestamp = 0;
			var old_date = '';
			if (events.length) {

				// <events>
				vm[ whatEvents ][ list.uid ] = {};
				vm[ whatEvents ][ list.uid ].count = events.length;
				vm[ whatEvents ][ list.uid ].sources = {};

				// <html>
				var html = '		<div class="events">\n';
				for (var each in events) {
					var event = events[each];
					//vm.events[ list.uid ].sources[ event.host ] = event.host;

					if (event.timestamp != old_timestamp || event.date != old_date) {
						html += '	<div class="events-timestamp"><span>'+event.date+'</span> <span>'+event.time+'</div>\n';
					}
					html += '		<div class="events-event event-link" onClick="window.open(\''+event.link+'\', \'_system\')" style="background-image:url('+event.image+');">\n';
					html += '			<div class="event-text">'+event.text+'</div>\n';
					html += '		</div>';
				}
				html += '		</div>\n';
				// </html>

				console.log('vm[ '+whatEvents+' ][ '+list.uid+' ]',html.substr(0,100));
				$timeout(function(){
					vm[ whatEvents ][ list.uid ].html = $sce.trustAsHtml(html);
				});
				// </events>

			}
		}, function(error) {
			console.error(error);
		});
	}

}])

;