if (!React.html) {
	React.html = {};
}
React.html['eventslist'] = React.createClass({
	bindClick(e, link) {
		// Ionic opens href links in its own browser, this is to escape that. However, thinking of ditching Ionic for something faster like famo.us
		window.open(link, '_system');
		e.preventDefault();
	},
	render: function (events) {

		var rows = [];
		var old_timestring = '';
		var old_event_featured_images = [];
		var old_date = '';
		for (var i=0; i < this.props.events.length; i++) {
			var event = this.props.events[i];
			if (!event.texts) {
				break;
			}
			var timestring = Date.create(event.timestamp).short();
			var todayEnd = moment().endOf('day').format('x');
			if (event.timestamp < todayEnd - 1) { // party must end before midnight, because we don't know when exactly tomorrow's dates are, most come in as 12:00am
				timestring = 'today';
			} else if (event.timestamp < todayEnd - 1 + 1000*60*60*24) {
				timestring = 'tomorrow';
			} else if (event.timestamp < todayEnd - 1 + 1000*60*60*24 *6) {
				timestring = 'this week';
			} else if (event.timestamp < todayEnd - 1 + 1000*60*60*24 *30) {
				timestring = 'this month';
			}

			// <timestring>
			if (timestring != old_timestring) {
				//var timeUnique = cutOldBeginning(old_timestamp, event.timestamp);
				rows.push(<div className="events-timestamp"><span>{timestring}</span></div>);
				old_timestring = timestring;
			}

			// <subtext>
			var time = moment(event.timestamp).format('h:mma');
			if (time=='12:00am') {
				time = '';
			}
			var subtext = [];
			if (timestring.indexOf('week') != -1 || timestring.indexOf('month') != -1) {
				subtext.push(<span ng-click><span class="ion-calendar"></span> <span>{moment(event.timestamp).format('MMM D') +' '+time}</span></span>);
			} else if (time && time!='12:00am') {
				subtext.push(<span ng-click><span class="ion-calendar"></span> <span>{time}</span></span>);
			}

			// <row>
			rows.push(
			<div className="events-event">

				<div className="event-text">
					<span><a className="event-link" href={event.link} target="_blank">{event.texts[0]}</a></span>
					<span>{event.texts[1]}</span>
					<span>{event.texts[2]}</span>
				</div>
				<div className="events-subtext">
					{subtext}
				</div>

			</div>
			);
		}

		return <div class="my-events">{rows}</div>;
	}
});