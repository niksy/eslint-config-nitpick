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
		'unicorn/require-post-message-target-origin': 2,
		'unicorn/prefer-dom-node-append': 0,
		'unicorn/prefer-dom-node-remove': 0,
		'unicorn/prefer-dom-node-dataset': 1,
		'unicorn/prefer-dom-node-text-content': 1,
		'unicorn/prefer-modern-dom-apis': 1
	}
};
