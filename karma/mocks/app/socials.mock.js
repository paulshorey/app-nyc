var socialMock = function() {
	this.$get =  function(){
		return {};
	};

	return this;
};

var mockSocials = function() {
	angular.module('younow.services.session.facebook', []).provider('Facebook', socialMock);
	angular.module('younow.services.session.google', []).provider('google', socialMock);
	angular.module('younow.services.session.twitter', []).provider('twitter', socialMock);
	angular.module('younow.services.session.instagram', []).provider('instagram', socialMock);
	angular.module('younow.services.session.youtube', []).provider('youtube', socialMock);
};