angular.module('ionicApp.controllers', [])

.directive('prevent-default', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
        });
    }
})


.controller('TaskController', ["AccountService", "TaskService", "QueryService", "$rootScope", "$ionicLoading", "$rootScope", "$state", "$stateParams", "$ionicPopup", function (AccountService, TaskService, QueryService, $rootScope, $ionicLoading, $rootScope, $state, $stateParams, $ionicPopup) {
	var vm = this;

	vm.getUser = function () {
		$ionicLoading.show();
		AccountService.currentUser()
			.then(function (user) {
				$rootScope.user = user;
				$ionicLoading.hide();
				vm.getTasks();
				vm.getQuerys();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
			})
	};
	vm.getUser();
	vm.getQuerys = function () {
		if (!$rootScope.user) {
			// Get all querys for guests.
			QueryService.getGuestQuerys()
				.then(
					function (response) {
						var querys = response.data;
						vm.querys = [];
						querys.forEach(function (item, idx, array) {
							item.dt_create = new Date(item.dt_create)
								.getTime();
							vm.querys.push(array[idx]);
						});
						window.console.log('vm.querys', vm.querys);
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					}
				)
		} else {
			// Get only the user signed in querys.
			QueryService.getUsersQuerys()
				.then(function (response) {
						var querys = response.data;
						vm.querys = [];
						querys.forEach(function (item, idx, array) {
							item.dt_create = new Date(item.dt_create)
								.getTime();
							vm.querys.push(array[idx]);
						});
						window.console.log('vm.querys', vm.querys);
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					})
		}
	};

	/*
		ACCOUNT CTRL
	*/

	var errorHandler = function (options) {
		var errorAlert = $ionicPopup.alert({
			title: options.title,
			okType: 'button-assertive',
			okText: "Try Again"
		});
	}

	vm.gohome = function () {
		window.console.log('go home ?');
		$state.go('home');
	};

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
		HOME CTRL
	*/

	var findIndex = function (id) {
		return vm.tasks.map(function (task) {
				return task._id;
			})
			.indexOf(id);
	}

	// Display loading indicator
	//$ionicLoading.show();

	vm.setActive = function (id) {
		vm.active = id;
	}

	function removeActive() {

	}

	vm.gohome = function () {
		window.console.log('go home ?');
		$state.go('home');
	};

	// Fetch Tasks
	vm.getTasks = function () {
		if (!$rootScope.user) {
			// Get all tasks for guests.
			TaskService.getGuestTasks()
				.then(
					function (response) {
						var tasks = response.data;
						vm.tasks = [];
						tasks.forEach(function (item, idx, array) {
							item.dt_create = new Date(item.dt_create)
								.getTime();
							vm.tasks.push(array[idx]);
						});
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					})
		} else {
			// Get only the user signed in tasks.
			TaskService.getUsersTasks()
				.then(
					function (response) {
						var tasks = response.data;
						vm.tasks = [];
						tasks.forEach(function (item, idx, array) {
							item.dt_create = new Date(item.dt_create)
								.getTime();
							vm.tasks.push(array[idx]);
						});
						$ionicLoading.hide();
					},
					function (error) {
						$ionicLoading.hide();
					})
		}
	}



	// Mark Complete a task.
	vm.deleteTask = function (id) {
		$ionicLoading.show();
		vm.tasks.splice(findIndex(id), 1);
		TaskService.deleteTask(id)
			.then(function () {
				$ionicLoading.hide();
			}, function (error) {
				$ionicLoading.hide();
			})
	}

	vm.setStatus = function (task) {
		task.complete = task.complete ? !task.complete : true;
		TaskService.patchTask(task)
			.then(function (task) {}, function (error) {})
	}


	/*
		TASK CTRL
	*/

	if ($stateParams.id) {
		$ionicLoading.show();
		TaskService.getTask($stateParams.id)
			.then(function (task) {
				$ionicLoading.hide();
				vm.task = task.data[0];
			}, function (err) {
				$ionicLoading.hide();
				console.error(err);
			})
	}

	// Add a task.
	vm.add = function () {
		$ionicLoading.show();
		TaskService.addNew(vm.task)
			.then(function (task) {
				$ionicLoading.hide();
				$state.go("tasks", {}, {
					reload: true
				});
			}, function (error) {
				$ionicLoading.hide();
			})
	}

	vm.save = function () {
		$ionicLoading.show();
		TaskService.updateTask(vm.task)
			.then(function (task) {
				$ionicLoading.hide();
				$state.go("tasks", {}, {
					reload: true
				});
			}, function (error) {
				$ionicLoading.hide();
			})
	}


	/*
		QUERY CTRL
	*/

	if ($stateParams.id) {
		$ionicLoading.show();
		TaskService.getTask($stateParams.id)
			.then(function (task) {
				$ionicLoading.hide();
				vm.task = task.data[0];
			}, function (err) {
				$ionicLoading.hide();
				console.error(err);
			})
	}

	// Add a task.
	vm.add = function () {
		$ionicLoading.show();
		TaskService.addNew(vm.task)
			.then(function (task) {
				$ionicLoading.hide();
				$state.go("tasks", {}, {
					reload: true
				});
			}, function (error) {
				$ionicLoading.hide();
			})
	}

	vm.save = function () {
		$ionicLoading.show();
		TaskService.updateTask(vm.task)
			.then(function (task) {
				$ionicLoading.hide();
				$state.go("tasks", {}, {
					reload: true
				});
			}, function (error) {
				$ionicLoading.hide();
			})
	}



}])