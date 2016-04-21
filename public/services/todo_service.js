/**
 * Created by Itay Herskovits  on 2/1/15.
 */
(function () {

	angular.module('mytodoApp').service('TodoService', ['$q', '$http', '$timeout', 'Backand', 'AuthService', function($q, $http, $timeout, Backand, AuthService) {

		var self = this;
		var backand_api_host = Backand.getApiUrl() + '/1/objects/';
		var events_api_host = window.system.api.host;
		
		self.getFail = function(error){
			window.console.error(step);
		};
		self.getLikes = function(){
			return $q(function (resolve, reject) {
				// local
				self.likes = window.localStorage.likes;
				// backand
				if (Backand.getUsername()) {
					$http({
						method: 'GET',
						url: backand_api_host + 'likes'
					}).then(function (response) {
						resolve(response.data.data);
					},function(error){
						reject(error);
					});
				} else {
					resolve(true);
				}
			});
		};
		self.getEvents = function(){
			return $q(function (resolve, reject) {
				// api (desktop)
				if (window.screen.width >= 800) {
					$http({
						method: 'GET',
						url: events_api_host + '/events'
					}).then(function (response) {
						resolve(response.data.data);
					}, function(error){
						reject(error);
					});
				// api (mobile)
				} else {
					window.console.error(window.page.emo);
				}
			});
		};
		self.like = function(id){
			return $q(function (resolve, reject) {
				$http({
					method: 'PUT',
					url: backand_api_host + 'likes' + '/' + id,
					data: localStorage.likes
				}).then(function (response) {
					resolve(response);
				});
			});
		};




		self.readAll = function () {
			return $q(function (resolve, reject) {
				var output = {};
				
				// user query
				if (Backand.getUsername()) {
					$http({
						method: 'GET',
						url: backand_api_host + 'likes'
					}).then(function (response) {
						output.likes = response.data.data;
						resolve(output);
					});
				
				// default query
				} else {
					resolve([]);
				}

			});
		};

		self.readOne = function (id) {
			if (Backand.getUsername()) {
				return $http({
					method: 'GET',
					url: backand_api_host + 'likes' + '/' + id
				}).then(function (response) {
					return response.data;
				});
			} else {
				return $q(function (resolve, reject) {
					setTimeout(function () {
						resolve({});
					});
				});
			}
		};

		self.create = function (data) {
			if (Backand.getUsername()) {
				return $http({
					method: 'POST',
					url: backand_api_host + 'likes',
					data: {
						data: data
					},
					params: {
						returnObject: true
					}
				}).then(function (response) {
					return response.data;
				});
			} else {
				return $q(function (resolve, reject) {
					setTimeout(function () {
						resolve({});
					});
				});
			}
		};

		self.update = function (id, data) {
			return $http({
				method: 'PUT',
				url: backand_api_host + 'likes' + '/' + id,
				data: data
			}).then(function (response) {
				return response.data;
			});
		};

		self.delete = function (id) {
			return $http({
				method: 'DELETE',
				url: backand_api_host + 'likes' + '/' + id
			})
		};

	}]);

}());