angular.module('ListModule.components', [])


.directive('reactEventslist', function (reactDirective, EventService) {
	return {
		restrict: 'A',
		scope: {
			data: '='
		},
		link: function (scope, element, attrs) {

			// var middle = (window.innerHeight || document.documentElement.clientHeight) * (2/5);
			// var rect = video.getBoundingClientRect();
			// if (
			// 	rect.top < middle && 
			// 	rect.top+video.clientHeight >= middle
			// ) {
			// 	return true;
			// }

			var query = {};
			query.category = scope.data.category;
			query.scene = scope.data.scene;
			query.time = scope.data.time;
			EventService.getEvents(query)
				.then(function (response) {
					scope.events = response.data.data;

					ReactDOM.render(  
					  React.createElement(React.html.eventslist, {events:scope.events}), 
					  angular.element(element)[0]
					);

				}, function (error) {
					console.error(error);
				});

		}
	}
})

;