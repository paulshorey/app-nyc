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
				console.log('all',all);
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
				$timeout(function(){
					vm.listsReady = true;
				},0);
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