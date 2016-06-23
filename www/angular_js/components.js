angular.module('ListModule.components', [])


.directive('reactEventslist', function (reactDirective, EventService,$timeout, $rootScope) {
	return {
		restrict: 'A',
		scope: {
			data: '='
		},
		link: function (scope, element, attrs) {
			scope.vm = {};

			// template
			scope.list_ready = function(){
				var query = {};
				query.category = scope.data.category;
				query.scene = scope.data.scene;
				query.time = scope.data.time;
				EventService.getEvents(query)
				.then(function (response) {
					scope.vm.events = response.data.data;

					ReactDOM.render(  
					  React.createElement(React.html.eventslist, {vm:scope.vm}), 
					  angular.element(element)[0]
					);

				}, function (error) {
					console.error(error);
				});
			}
			// loading
			scope.list_reset = function(){
				scope.vm = {};

				ReactDOM.render( 
					React.createElement(React.html.eventslist_loading, scope.vm), 
					angular.element(element)[0]
				);
				// animate the loading animation
				$timeout(function(){
					if (element) {
						$(element).addClass('ready');
					}
				},1000);
				$timeout(function(){
					if (element) {
						$(element).removeClass('ready');
					}
				},10000);
				$timeout(function(){
					if (element) {
						$(element).addClass('ready');
					}
				},15000);
			}
			scope.list_reset();

			// lazyload
			if (!$rootScope.lazyLoadedLists) {
				$rootScope.lazyLoadedLists = {};
			}
			scope.element = element;
			scope.$watch(
			function( scope ) {
				element = scope.element;
				var window_width = (window.innerWidth || document.documentElement.clientWidth);
				var rect = element[0].getBoundingClientRect();
				if (rect.left > 0 && rect.left < window_width) {

					if (!$rootScope.lazyLoadedLists[ scope.data.category ]) {
						$rootScope.lazyLoadedLists[ scope.data.category ] = scope;
						console.log('listing ',scope.data.category);
						scope.list_ready()
					}

				} else {
					if ($rootScope.lazyLoadedLists[ scope.data.category ]) {
						scope.list_reset();
					}
				}
			});

		}
	}
})

;