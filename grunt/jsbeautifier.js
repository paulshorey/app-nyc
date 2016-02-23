/*
* Make It Beautiful!
*/

module.exports = {
	app: {
		files: ["*.js", "src/app/*.js", "src/app/**/**/*.js", "src/app/**/**/**/*.js"],
		options: {
			js: {
				indentWithTabs: true,
				jslintHappy: false,
				keepArrayIndentation: false,
				keepFunctionIndentation: false,
				maxPreserveNewlines: 3,
				preserveNewlines: true,
				spaceBeforeConditional: true,
				spaceInParen: false,
				unescapeStrings: false,
				wrapLineLength: 0,
				endWithNewline: true
			}
		}
	},
	core: {
		files: ['<%= core_files.js %>'],
		options: {
			js: {
				indentWithTabs: true,
				jslintHappy: false,
				keepArrayIndentation: false,
				keepFunctionIndentation: false,
				maxPreserveNewlines: 3,
				preserveNewlines: true,
				spaceBeforeConditional: true,
				spaceInParen: false,
				unescapeStrings: false,
				wrapLineLength: 0,
				endWithNewline: true
			}
		}
	},
	watch: {
		options: {
			js: {
				indentWithTabs: true,
				jslintHappy: false,
				keepArrayIndentation: false,
				keepFunctionIndentation: false,
				maxPreserveNewlines: 3,
				preserveNewlines: true,
				spaceBeforeConditional: true,
				spaceInParen: false,
				unescapeStrings: false,
				wrapLineLength: 0,
				endWithNewline: true
			}
		}
	}
};
