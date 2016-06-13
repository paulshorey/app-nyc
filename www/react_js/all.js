"use strict";

if (!React.html) {
	React.html = {};
}
React.html['events'] = React.createClass({
	render: function render(events) {
		return React.createElement(
			"ul",
			{ style: "{this.props.style}" },
			this.props.events.map(function (event) {
				return { event: event };
			})
		);
	}
});