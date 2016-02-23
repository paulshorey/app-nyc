/*
 * `grunt-contrib-sass` handles our SASS compilation and uglification automatically.
 * Only our `sass.scss` file is included in compilation; all other files
 * must be imported from this file. The files are added dynamically by the Grunt Event handler for watches
 */

module.exports = {
	watch: {
		options: {
			cacheLocation: 'cache/.sass-cache'
		}
	}
};
