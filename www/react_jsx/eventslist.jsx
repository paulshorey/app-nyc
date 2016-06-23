if (!React.html) {
	React.html = {};
}
React.html['eventslist_loading'] = React.createClass({
	render: function (events) {
		return <div className="loading-dance"><img src="gfx/gif/dance.gif" /></div>;
	}
});
React.html['eventslist'] = React.createClass({
	bindClick(e, link) {
		// Ionic opens href links in its own browser, this is to escape that. However, thinking of ditching Ionic for something faster like famo.us
		window.open(link, '_system');
		e.preventDefault();
	},
	render: function (events) {

		var rows = [];
		var old_timestring = '';
		var old_event_title = ' :) ';
		var old_event_featured_images = [];
		var old_date = '';
		for (var i=0; i < this.props.events.length; i++) {
			var event = this.props.events[i];
			if (!event.texts || (old_event_title==event.texts[0])) {
				continue;
			}
			old_event_title = event.texts[0];
			// console.log(event.texts[0]);
			// console.log(moment(event.timestamp).format('MMM D @ h:mma'));
			var timestring = Date.create(event.timestamp).short();
			var todayEnd = moment().endOf('day').format('x');
			if (event.timestamp < (todayEnd - 1)) { // party must end before midnight, because we don't know when exactly tomorrow's dates are, most come in as 12:00am
				timestring = 'today';
			} else if (event.timestamp < (todayEnd - 1 + 1000*60*60*24)) {
				timestring = 'tomorrow';
			} else if (event.timestamp < (todayEnd - 1 + 1000*60*60*24 *6)) {
				timestring = 'this week';
			} else if (event.timestamp < (todayEnd - 1 + 1000*60*60*24 *30)) {
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
				subtext.push(<span ng-click><span className="ion-calendar"></span> <span>{moment(event.timestamp).format('MMM D') +' '+time}</span></span>);
			} else if (time && time!='12:00am') {
				subtext.push(<span ng-click><span className="ion-calendar"></span> <span>{time}</span></span>);
			}
			subtext.push(<a className="subtext-source" href={event.source_link} target="_blank" ><span className="icon-link"></span>{event.source_host.substr(0, event.source_host.indexOf('.'))}</a>);

			// <row>
			rows.push(
			<div className="events-event">

				<div className="event-text">
					<span><a className="event-link" href={event.link} target="_blank">{event.texts[0]}</a></span>
					<span>{event.texts[1]}</span>
					<span>{event.texts[2]}</span>
				</div>
				<div className="event-subtext">
					{subtext}
				</div>

			</div>
			);
		}

		document.getElementById('stats').innerHTML = '<span>loaded in '+((Date.now()-window.loadStart)/1000)+'s</span>';

		return <div className="my-events">{rows}</div>;
	}
});