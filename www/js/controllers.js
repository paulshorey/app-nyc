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
           ["AccountService", "ListService", "EventService",		"$ionicLoading", "$ionicPopup", "$ionicModal", 		"$scope", "$rootScope", "$state", "$timeout", "$stateParams", function 
           (AccountService, ListService, EventService, 				$ionicLoading, $ionicPopup, $ionicModal, 			$scope, $rootScope, $state, $timeout, $stateParams) 
	{
	var vm = this;
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
	$scope.modals = {};
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
	$ionicModal.fromTemplateUrl('templates/modals/addList.html', {
			scope: $scope,
			animation: 'slide-in-up'
		})
		.then(function (modal) {
			$scope.modals['addList'] = modal;
		});
	$ionicModal.fromTemplateUrl('templates/modals/editList.html', {
			scope: $scope,
			animation: 'slide-in-up'
		})
		.then(function (modal) {
			$scope.modals['editList'] = modal;
		});

	/*
		INITIAL 
		get user, lists
	*/
	vm.getUser = function () {
		$ionicLoading.show();
		AccountService.currentUser()
			.then(function (user) {
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
		if (!$rootScope.user) {
			ListService.getGuestLists()
				.then(
					function (response) {
						vm.events = {};
						vm.lists = {};
						response.data.forEach(function (item, idx, array) {
							vm.updateList(array[idx]);
						});
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					})
		} else {
			ListService.getUsersLists()
				.then(
					function (response) {
						vm.events = {};
						vm.lists = {};
						response.data.forEach(function (item, idx, array) {
							vm.updateList(array[idx]);
						});
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					})
		}
	}


	/*
		ADD / EDIT
		new, changed
	*/
	vm.addList = function () {
		$scope.modals.addList.show();
	};
	vm.editList = function (id) {
		$scope.modals.editList.show(id);
	};
	vm.addSave = function () {
		$ionicLoading.show();
		ListService.addNew(vm.list)
			.then(function (list) {
				$ionicLoading.hide();
				vm.updateList(list);
				vm.closeModals();
			}, function (error) {
				$ionicLoading.hide();
			})
	}
	vm.editSave = function () {
		$ionicLoading.show();
		ListService.updateList(vm.list)
			.then(function (list) {
				$ionicLoading.hide();
				vm.updateList(list);
				vm.closeModals();
			}, function (error) {
				$ionicLoading.hide();
			})
	}
	vm.getList = function (id) {
		$ionicLoading.show();
		ListService.getList(id)
			.then(function (list) {
				$ionicLoading.hide();
				vm.updateList(list.data[0]);
				vm.closeModals();
			}, function (err) {
				$ionicLoading.hide();
				console.error(err);
			})
	}

	/*
		ACTIVE 
		by id
	*/
	vm.setActive = function (id) {
		vm.active = id;
		vm.list = vm.lists[id];
	}
	vm.clearActive = function () {
		vm.active = null;
		vm.list = {};
	}


	/*
		DELETE 
		status, cleanup
	*/
	vm.deleteList = function (id) {
		$ionicLoading.show();
		ListService.deleteList(id)
			.then(function (list) {
				vm.forgetList(list);
				$ionicLoading.hide();
			}, function (error) {
				$ionicLoading.hide();
			})
	}
	vm.setStatus = function (list) {
		list.complete = list.complete ? !list.complete : true;
		ListService.patchList(list)
			.then(function (list) {}, function (error) {})
	}


	/*
		USE 
		update events
	*/
	vm.updateList = function (list) {
		vm.lists[list.id] = list;
		/*
			QUERY
		*/
		var query = {};
		query.category = list.category;
		query.scene = list.scene;
		query.time = list.time;
		EventService.getEvents(query).then(function(response){

			console.log('events',response.data.data);
			var events = response.data.data;
			var old_timestamp = 0;
			var old_date = '';
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
			document.getElementById(list.id+'_events').innerHTML = html;

		}, function(error) {
			console.error(error);
		});
	}
	vm.forgetList = function (list) {
		delete vm.lists[list.id];
		/*
			QUERY
		*/
	}


}])