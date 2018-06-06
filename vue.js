'use strict';

module.exports = {

	extends: require.resolve('./lib/jsx'),

	rules: {

		// Other
		'no-unused-vars': [1, { argsIgnorePattern: '^h$' }],
		'no-param-reassign': [1, {
			props: true,
			ignorePropertyModificationsFor: ['state']
		}]
	}
};
