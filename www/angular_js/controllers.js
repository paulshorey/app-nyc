angular.module('appNyc.controllers', [])

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



	$ionicModal.fromTemplateUrl('angular_html/modals/select.html', {
		scope: $scope, 
		animation: 'slide-in-left'
	})
	.then(function (modal) {
		$rootScope.modals['modalSelect'] = modal;
	});


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
		$rootScope.modalsClose();
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
				list.events = response.data.data;
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
				$rootScope.modalsClose();
			}, function (error) {
				console.error(error);
				$ionicLoading.hide();
				$rootScope.modalsClose();
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