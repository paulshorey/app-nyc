(function() {
	angular.module('younow.core.services', ['younow.core.services.channel','younow.core.services.pusher']);
	angular.module('younow.core.directives', []);
	angular.module('younow.core', ["younow.core.services", "younow.core.directives"]);
})();
