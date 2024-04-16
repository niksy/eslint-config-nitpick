'use strict';

module.exports = {
	plugins: ['eslint-plugin-jsdoc'],
	settings: {
		jsdoc: {
			mode: 'typescript'
		}
	},
	rules: {
		'jsdoc/require-returns': 0,
		'jsdoc/require-throws': 0,
		'jsdoc/require-hyphen-before-param-description': 0,
		'jsdoc/check-syntax': 0
	}
};
