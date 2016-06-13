if (!React.html) {
	React.html = {};
}
React.html['events'] = React.createClass({
	bindClick(link) {
		window.open(link, '_system');
	},
	handleTouchTap(e) {
		e=>e.preventDefault();
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
			}

			// <event>
			rows.push(
			<div className="events-event">

				<span className="event-text">
					<a className="event-link" href={event.link} target="_blank" onClick={this.bindClick.bind(this,event.link)} onTouchTap={this.handleTouchTap}>{event.texts[0]}</a>
					<span>{event.texts[1]}</span>
					<span>{event.texts[2]}</span>
				</span>

			</div>
			);
		}

		return <div class="my-events">{rows}</div>;
	}
});