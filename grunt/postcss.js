/**
 *  `postcss` - simplifies sass processing, like autoprefix, minify, more?
 *
 * `autoprefixer` Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
 *  That way we can keep our sass files clean and only include vendor prefixes that are required.
 *  Makes updating vendor prefixes easy!
 * NOTE: Remember to update the caniuseDB from time to time: npm update caniuse-db
 *
 * `csswring` minifies css while keeping original source map references
 */

module.exports = {
	options: {
		map: false,
		processors: [
			require('autoprefixer-core')({browsers: ['last 8 versions']}).postcss,
			require('csswring').postcss
		]
	},

	watch: {
		options: {
			map: false,
			processors: [
				require('autoprefixer-core')({browsers: ['last 8 versions']}).postcss
			]
		}
	},

	app: {
		src: 'build/app/younow.css'
	},

	mobile: {
		src: 'build/mobile/younow-mobile.css'
	},

	admin: {
		src: 'build/admin/younow-admin.css'
	}
};
