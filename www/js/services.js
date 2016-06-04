angular.module('ionicApp.services', [])

.factory('ContentService', ["$q", "$http", function ($q, $http) {
	return {

		getAll: function (query) {
			var deffered = $q.defer();
			$http({
				url: window.system.api.host+'/all',
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
				url: window.system.api.host+'/events',
				method: "POST",
				data: query,
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