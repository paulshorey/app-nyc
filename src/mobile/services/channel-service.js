angular.module('ynl.services.channel', [])

.factory('broadcasterService', function(Api, broadcasterServiceCore) {
	var serviceCore = new broadcasterServiceCore.Base();
	var service = angular.extend(serviceCore, {});

	service.store = function(data, type) {
		// possibly custom node like "sharer"
		service[type] = data;
		// standard
		if (type == 'channel' || type == 'broadcast') {
			service.displayName = Api.fullName(data);
		}
	};

	return service;

});
