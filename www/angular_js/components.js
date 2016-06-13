angular.module('appNyc.components', [])


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

// THIS DIRECTIVE ABOVE ALLOWS THE ENTIRE MESS BELOW TO BE REPLACED WITH THIS ONE LINE:
// list.events = response.data.data;
// (the rest contained in a nice neat template: /www/react_jsx/eventslist.jsx)

// I SOMETIMES BUILD A MESSY LOOKING SOURCE CODE TO GET A PROTOTYPE UP AND RUNNING, then REFACTOR asap:
// var events = response.data.data;
// var old_timestring = '';
// var old_event_featured_images = [];
// var old_date = '';
// if (events.length) {


// 	// ALL
// 	// <events>
// 	list.count = events.length;
// 	list.sources = {};

// 	// <html>
// 	var html = '		<div class="my-events">\n';
// 	for (var each in events) {
// 		var event = events[each];
// 		if (!event.texts) {
// 			continue;
// 		}
// 		var timestring = Date.create(event.timestamp).short();
// 		var todayEnd = moment().endOf('day').format('x');
// 		if (event.timestamp < todayEnd - 1) { // party must end before midnight, because we don't know when exactly tomorrow's dates are, most come in as 12:00am
// 			timestring = 'today';
// 		} else if (event.timestamp < todayEnd - 1 + 1000*60*60*24) {
// 			timestring = 'tomorrow';
// 		} else if (event.timestamp < todayEnd - 1 + 1000*60*60*24 *6) {
// 			timestring = 'this week';
// 		} else if (event.timestamp < todayEnd - 1 + 1000*60*60*24 *30) {
// 			timestring = 'this month';
// 		}
// 		//event.timestamp = event.timestamp.replace(' 12:00am','');
// 		if (timestring != old_timestring) {
// 			//var timeUnique = cutOldBeginning(old_timestamp, event.timestamp);
// 			html += '<div class="events-timestamp"><span>' + timestring + '</span></div>\n';
// 		}
// 		var ev = '';
// 		ev += '		<div class="events-event '+ (event.featured?'event-featured':'') +'" style="background-image:url(\'' + event.featured + '\');">';
// 		ev += '			<div class="event-text">\n';
// 		if (event.texts[0]) {
// 			ev += '			<span><a class="event-link" href="' + event.link + '" target="_blank" prevent-default onClick="window.open(\'' + event.link + '\', \'_system\')">' + event.texts[0] + '</a></span>\n';
// 		}
// 		if (event.image) {
// 			ev += '			<span class="event-image"><img src="' + event.image + '" /></span>\n';
// 		}
// 		if (event.texts[1]) {
// 			ev += '			<span>' + event.texts[1] + '</span>\n';
// 		}
// 		if (event.texts[2]) {
// 			ev += '			<span>' + event.texts[2] + '</span>\n';
// 		}
// 		ev += '			</div>\n';
// 		ev += '			<div class="event-subtext">\n';

// 		var time = moment(event.timestamp).format('h:mma');
// 		if (time=='12:00am') {
// 			time = '';
// 		}
// 		if (timestring.indexOf('week') != -1 || timestring.indexOf('month') != -1) {
// 			ev += '		<span ng-click><span class="ion-calendar"></span> <span>' + moment(event.timestamp).format('MMM D') +' '+time+ '</span></span>\n';
// 		} else if (time && time!='12:00am') {
// 			ev += '		<span ng-click><span class="ion-calendar"></span> <span>' + time + '</span></span>\n';
// 		}
// 		// if (event.price) {
// 		// 	ev += '			<span class="subtext-price"><span class="ion-pricetag"></span> <span>'+event.price+'</span></span>\n';
// 		// }
// 		ev += '			<a class="subtext-source" href="' + event.source_link + '" target="_blank" prevent-default onClick="window.open(\'' + event.source_link + '\', \'_system\')"><span class="icon-link"></span> ' + (event.source_host.substr(0, event.source_host.indexOf('.'))) + '</a>\n';
// 		// ev += '			<span class="subtext-fave" ng-click=""><span class="icon-star-outline"></span></span>\n';
// 		ev += '			</div>\n';
// 		ev += '		</div>';
// 		//
// 		html += ev;
// 		old_timestring = timestring;

// 		// <event>
// 		if (event.featured) {
// 			var event_featured = JSON.parse(JSON.stringify(event));
// 			if (old_event_featured_images.indexOf(event_featured.image) == -1) {
// 				event_featured.eventsHTML = $sce.trustAsHtml(ev);
// 				vm.featuredEvents[event.random] = event_featured;
// 				old_event_featured_images.push(event_featured.image);
// 			}
// 		}
// 		// </event>

// 	}
// 	html += '		</div>\n';
// 	// </html>

// 	$timeout(function () {
// 		list.eventsCount = events.length;
// 		list.eventsHTML = $sce.trustAsHtml(html);
// 	});
// 	// </events>
// }