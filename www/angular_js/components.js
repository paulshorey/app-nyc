angular.module('ListModule.components', [])


.directive('reactEventslist', function (reactDirective, EventService,$timeout) {
	return {
		restrict: 'A',
		scope: {
			data: '='
		},
		link: function (scope, element, attrs) {
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
			$timeout(function(){
				if (element) {
					$(element).removeClass('ready');
				}
			},25000);

			// create or destroy
			// var middle = (window.innerHeight || document.documentElement.clientHeight) * (2/5);
			// var rect = video.getBoundingClientRect();
			// if (
			// 	rect.top < middle && 
			// 	rect.top+video.clientHeight >= middle
			// ) {
			// 	return true;
			// }

			// create
			var create_scope = function(){
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

			// destroy
			var destroy_scope = function(){

			}

		}
	}
})

;