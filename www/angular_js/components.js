angular.module('ListModule.components', [])


.directive('reactEventslist', function (reactDirective) {
	return {
		restrict: 'A',
		scope: {
			events: '='
		},
		link: function (scope, element, attrs) {
			ReactDOM.render(  
			  React.createElement(React.html.eventslist, {events:scope.events}), 
			  angular.element(element)[0]
			);
		}
	}
})

;