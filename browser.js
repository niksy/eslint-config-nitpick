'use strict';

module.exports = {
	env: {
		node: false,
		browser: true,
		commonjs: true
	},

	plugins: ['eslint-plugin-unicorn'],

	rules: {
		// Possible errors
		'no-console': 2,

		// Best practices
		'no-implicit-globals': 2,

		// Unicorn
		'unicorn/no-document-cookie': 2,
		'unicorn/require-post-message-target-origin': 2
	}
};
