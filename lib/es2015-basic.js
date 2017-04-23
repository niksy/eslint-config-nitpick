// We want to use subset from ES2015
// This can be removed when "es2015" is used in full capacity

'use strict';

module.exports = {

	parserOptions: {
		ecmaVersion: 6
	},

	globals: {
		'Promise': false
	},

	plugins: [
		'promise',
		'node'
	],

	rules: {
		'promise/catch-or-return': 1,
		'promise/always-return': 2,
		'promise/param-names': 2,
		'promise/no-native': 0,
		'promise/avoid-new': 0,
		'promise/no-callback-in-promise': 0,
		'promise/no-nesting': 0,
		'promise/no-promise-in-callback': 0,
		'promise/no-return-wrap': 1,
		'promise/prefer-await-to-callbacks': 0,
		'promise/prefer-await-to-then': 0,

		'node/no-unsupported-features': [2, {
			version: 4
		}],

		'arrow-body-style': [2, 'always'],
		'arrow-parens': [2, 'always'],
		'arrow-spacing': [2, {
			before: true,
			after: true
		}],
		'no-confusing-arrow': 1,
		'no-const-assign': 2,
		'no-var': 0,
		'prefer-arrow-callback': 0,
		'prefer-const': 0,
		'prefer-template': 1,
		'template-curly-spacing': [2, 'never'],
		'no-template-curly-in-string': 1,
		'prefer-promise-reject-errors': [1, {
			allowEmptyReject: true
		}],
		'template-tag-spacing': [2, 'never']
	}
};
