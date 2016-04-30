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
	var vm = this;
	vm.slickConfig = window.slickConfig;
	var errorHandler = function (options) {
		var errorAlert = $ionicPopup.alert({
			title: options.title,
			okType: 'button-assertive',
			okText: "Try Again"
		});
	}


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

		if (!vm.lists) {
			// first get default, then user
			ContentService.allCategories()
				.then(
					function (response) {
						vm.events = {};
						vm.lists = {};
						response.forEach(function (item, id, array) { 
							var list =  {category:array[id].title};
							
							// <list>
							vm.slickOk = false;
							// <
							vm.lists[ list.category ] = list;
							vm.listEvents( list );
							// >
							$timeout(function(){
								vm.slickOk = true;
							});
							// </list>

						});
						vm.getUserLists();
						$ionicLoading.hide();
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
						vm.userLists = {};
						response.data.forEach(function (item, id, array) {
							var list = array[id];
							
							// <list>
							vm.slickOk = false;
							// <
							delete vm.lists[ list.category ];
							vm.userLists[ list.category ] = list;
							vm.listEvents( list );
							// >
							$timeout(function(){
								vm.slickOk = true;
							});
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
		$ionicLoading.show();
		vm.slickOk = false;
		// <
		delete vm.userLists[ list.category ];
		delete vm.lists[ list.category ];
		delete vm.events[ list.category ];
		// >
		$timeout(function(){
			vm.slickOk = true;
			$ionicLoading.hide();
		});
		// </lists>

	}
	vm.listUpdate = function (list) {
		
		// <lists>
		$ionicLoading.show();
		vm.slickOk = false;
		// <
		delete vm.userLists[ list.category ];
		delete vm.lists[ list.category ];
		delete vm.events[ list.category ];
		vm.userLists[ list.category ] = list;
		vm.listEvents(list);
		// >
		$timeout(function(){
			vm.slickOk = true;
			$ionicLoading.hide();
		});
		// </lists>

	}
	vm.listEvents = function (list) {
		var query = {};
		query.category = list.category;
		query.scene = list.scene;
		query.time = list.time;
		EventService.getEvents(query).then(function(response){
			var events = response.data.data;
			var old_timestamp = 0;
			var old_date = '';

			// <events>
			var html = '		<div class="events">\n';
			for (var each in events) {
				var event = events[each];
				if (event.timestamp != old_timestamp || event.date != old_date) {
					html += '	<div class="events-timestamp"><span>'+event.date+'</span> <span>'+event.time+'</div>\n';
				}
				html += '		<div class="events-event event-link" onClick="window.open(\''+event.link+'\', \'_system\')" style="background-image:url('+event.image+');">\n';
				html += '			<div class="event-text">'+event.text+'</div>\n';
				html += '		</div>';
			}
			html += '		</div>\n';
			vm.events[ list.category ] = $sce.trustAsHtml(html);
			// </events>

		}, function(error) {
			console.error(error);
		});
	}

}])

;