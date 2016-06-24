'use strict';

if (!React.html) {
	React.html = {};
}
React.html['eventslist_loading'] = React.createClass({
	render: function render() {
		return React.createElement('div', { className: 'loading-dance', style: { backgroundImage: 'url(\'gfx/gif/dance.gif\')' } });
	}
});
React.html['eventslist'] = React.createClass({
	bindClick: function bindClick(e, link) {
		// Ionic opens href links in its own browser, this is to escape that. However, thinking of ditching Ionic for something faster like famo.us
		window.open(link, '_system');
		e.preventDefault();
	},

	render: function render() {
		if (!this.props.vm || !this.props.vm.events) {
			return React.createElement(
				'div',
				{ className: 'loading-error' },
				React.createElement(
					'b',
					null,
					'Nothing found'
				)
			);
		}

		var rows = [];
		var old_timestring = '';
		var old_event_title = ' :) ';
		var old_event_featured_images = [];
		var old_date = '';
		for (var i = 0; i < this.props.vm.events.length; i++) {
			var event = this.props.vm.events[i];
			if (!event.texts || old_event_title == event.texts[0]) {
				continue;
			}
			old_event_title = event.texts[0];
			// console.log(event.texts[0]);
			// console.log(moment(event.timestamp).format('MMM D @ h:mma'));
			var timestring = Date.create(event.timestamp).short();
			var todayEnd = moment().endOf('day').format('x');
			if (event.timestamp < todayEnd - 1) {
				// party must end before midnight, because we don't know when exactly tomorrow's dates are, most come in as 12:00am
				timestring = 'today';
			} else if (event.timestamp < todayEnd - 1 + 1000 * 60 * 60 * 24) {
				timestring = 'tomorrow';
			} else if (event.timestamp < todayEnd - 1 + 1000 * 60 * 60 * 24 * 6) {
				timestring = 'this week';
			} else if (event.timestamp < todayEnd - 1 + 1000 * 60 * 60 * 24 * 30) {
				timestring = 'this month';
			}

			// <timestring>
			if (timestring != old_timestring) {
				//var timeUnique = cutOldBeginning(old_timestamp, event.timestamp);
				rows.push(React.createElement(
					'div',
					{ className: 'events-timestamp' },
					React.createElement(
						'span',
						null,
						timestring
					)
				));
				old_timestring = timestring;
			}

			// <subtext>
			var time = moment(event.timestamp).format('h:mma');
			if (time == '12:00am') {
				time = '';
			}
			var subtext = [];
			if (timestring.indexOf('week') != -1 || timestring.indexOf('month') != -1) {
				subtext.push(React.createElement(
					'span',
					null,
					React.createElement('span', { className: 'ion-calendar' }),
					' ',
					React.createElement(
						'span',
						null,
						moment(event.timestamp).format('MMM D') + ' ' + time
					)
				));
			} else if (time && time != '12:00am') {
				subtext.push(React.createElement(
					'span',
					null,
					React.createElement('span', { className: 'ion-calendar' }),
					' ',
					React.createElement(
						'span',
						null,
						time
					)
				));
			}
			subtext.push(React.createElement(
				'a',
				{ className: 'subtext-source', href: event.source_link, target: '_blank' },
				React.createElement('span', { className: 'icon-link' }),
				event.source_host.substr(0, event.source_host.indexOf('.'))
			));

			// <row>
			rows.push(React.createElement(
				'div',
				{ className: 'events-event' },
				React.createElement(
					'div',
					{ className: 'event-text' },
					React.createElement(
						'span',
						null,
						React.createElement(
							'a',
							{ className: 'event-link', href: event.link, target: '_blank' },
							event.texts[0]
						)
					),
					React.createElement(
						'span',
						null,
						event.texts[1]
					),
					React.createElement(
						'span',
						null,
						event.texts[2]
					)
				),
				React.createElement(
					'div',
					{ className: 'event-subtext' },
					subtext
				)
			));
		}

		document.getElementById('stats').innerHTML = '<span>loaded in ' + (Date.now() - window.loadStart) / 1000 + 's</span>';

		return React.createElement(
			'div',
			{ className: 'my-events' },
			rows
		);
	}
});