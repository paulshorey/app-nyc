angular.module('appNyc.components', [])


.directive('reactEvents', function (reactDirective) {
	return {
		restrict: 'A',
		scope: {
			events: '='
		},
		link: function (scope, element, attrs) {
			ReactDOM.render(  
			  React.createElement(React.html.events, {events:scope.events}), 
			  angular.element(element)[0]
			);
		}
	}
})

;